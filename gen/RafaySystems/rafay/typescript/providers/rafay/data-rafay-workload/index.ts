// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * workload condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#condition DataRafayWorkload#condition}
  */
  readonly condition?: string;
  /**
  * workload status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#condition_status DataRafayWorkload#condition_status}
  */
  readonly conditionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#id DataRafayWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * impersonate user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#impersonate DataRafayWorkload#impersonate}
  */
  readonly impersonate?: string;
  /**
  * workload reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#reason DataRafayWorkload#reason}
  */
  readonly reason?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#metadata DataRafayWorkload#metadata}
  */
  readonly metadata?: DataRafayWorkloadMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#spec DataRafayWorkload#spec}
  */
  readonly spec?: DataRafayWorkloadSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#timeouts DataRafayWorkload#timeouts}
  */
  readonly timeouts?: DataRafayWorkloadTimeouts;
}
export interface DataRafayWorkloadMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#id DataRafayWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#is_sso_user DataRafayWorkload#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#username DataRafayWorkload#username}
  */
  readonly username?: string;
}

export function dataRafayWorkloadMetadataCreatedByToTerraform(struct?: DataRafayWorkloadMetadataCreatedByOutputReference | DataRafayWorkloadMetadataCreatedBy): any {
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


export function dataRafayWorkloadMetadataCreatedByToHclTerraform(struct?: DataRafayWorkloadMetadataCreatedByOutputReference | DataRafayWorkloadMetadataCreatedBy): any {
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

export class DataRafayWorkloadMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadMetadataCreatedBy | undefined {
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

  public set internalValue(value: DataRafayWorkloadMetadataCreatedBy | undefined) {
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
export interface DataRafayWorkloadMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#id DataRafayWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#is_sso_user DataRafayWorkload#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#username DataRafayWorkload#username}
  */
  readonly username?: string;
}

export function dataRafayWorkloadMetadataModifiedByToTerraform(struct?: DataRafayWorkloadMetadataModifiedByOutputReference | DataRafayWorkloadMetadataModifiedBy): any {
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


export function dataRafayWorkloadMetadataModifiedByToHclTerraform(struct?: DataRafayWorkloadMetadataModifiedByOutputReference | DataRafayWorkloadMetadataModifiedBy): any {
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

export class DataRafayWorkloadMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadMetadataModifiedBy | undefined {
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

  public set internalValue(value: DataRafayWorkloadMetadataModifiedBy | undefined) {
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
export interface DataRafayWorkloadMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#annotations DataRafayWorkload#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_name DataRafayWorkload#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#labels DataRafayWorkload#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#project DataRafayWorkload#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#created_by DataRafayWorkload#created_by}
  */
  readonly createdBy?: DataRafayWorkloadMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#modified_by DataRafayWorkload#modified_by}
  */
  readonly modifiedBy?: DataRafayWorkloadMetadataModifiedBy;
}

export function dataRafayWorkloadMetadataToTerraform(struct?: DataRafayWorkloadMetadataOutputReference | DataRafayWorkloadMetadata): any {
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
    created_by: dataRafayWorkloadMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: dataRafayWorkloadMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function dataRafayWorkloadMetadataToHclTerraform(struct?: DataRafayWorkloadMetadataOutputReference | DataRafayWorkloadMetadata): any {
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
      value: dataRafayWorkloadMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadMetadataCreatedByList",
    },
    modified_by: {
      value: dataRafayWorkloadMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadMetadata | undefined {
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

  public set internalValue(value: DataRafayWorkloadMetadata | undefined) {
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
  private _createdBy = new DataRafayWorkloadMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: DataRafayWorkloadMetadataCreatedBy) {
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
  private _modifiedBy = new DataRafayWorkloadMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: DataRafayWorkloadMetadataModifiedBy) {
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
export interface DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactChartPathOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactChartPathOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPathOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactChartPathOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPathOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactChartPathOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactChartPathOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactChartPathOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactChartPath {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactChartPathOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactChartPathToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactChartPathOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactChartPathToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactChartPathOutputReference | DataRafayWorkloadSpecArtifactArtifactChartPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactChartPathOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactChartPathOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactChartPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactChartPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactChartPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactChartPathOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactChartPathOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfigmapOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmapOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmapOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfigmapOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfigmapOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfigmap {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactConfigmapOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigmapToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigmapToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigmapOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigmapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigmapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfigmap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfigmap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactConfigmapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactConfigmapOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfigurationOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigurationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactConfigurationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfigurationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfigurationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactConfiguration {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactConfigurationOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactConfigurationToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOutputReference | DataRafayWorkloadSpecArtifactArtifactConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactConfigurationToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactConfigurationOutputReference | DataRafayWorkloadSpecArtifactArtifactConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigurationOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactConfigurationOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactConfigurationOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactFileOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactFileOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactFileOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactFileOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactFileOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactFileOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactFileOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactFileOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactFileOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactFileOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactFileOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactFileOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactFileOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactFileOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactFileOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactFileOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactFileOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactFileOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactFileOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactFileOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactFileOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactFileOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactFileOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactFileOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactFile {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactFileOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactFileToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOutputReference | DataRafayWorkloadSpecArtifactArtifactFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactFileOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactFileToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactFileOutputReference | DataRafayWorkloadSpecArtifactArtifactFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactFileOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactFileOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactFileOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactFileOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactPathsOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactPathsOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactPathsOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPathsOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactPathsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactPathsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactPathsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactPathsOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactPathsOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactPaths {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactPathsOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactPathsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactPathsOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactPathsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactPathsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactPathsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactPathsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactPathsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DataRafayWorkloadSpecArtifactArtifactPathsList extends cdktf.ComplexList {
  public internalValue? : DataRafayWorkloadSpecArtifactArtifactPaths[] | cdktf.IResolvable

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
  public get(index: number): DataRafayWorkloadSpecArtifactArtifactPathsOutputReference {
    return new DataRafayWorkloadSpecArtifactArtifactPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactSecretOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactSecretOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactSecretOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactSecretOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactSecretOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactSecretOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactSecretOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactSecretOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactSecretOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactSecret {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactSecretOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactSecretToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOutputReference | DataRafayWorkloadSpecArtifactArtifactSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactSecretOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactSecretToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactSecretOutputReference | DataRafayWorkloadSpecArtifactArtifactSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactSecretOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactSecretOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactSecretOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactSecretOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactStatefulsetOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulsetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulsetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactStatefulsetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactStatefulset {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactStatefulsetToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactStatefulsetToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactStatefulsetOutputReference | DataRafayWorkloadSpecArtifactArtifactStatefulset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactStatefulsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactStatefulset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactStatefulset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactStatefulsetOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactStatefulsetOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesPathsOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesPathsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesPaths {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesPathsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesPathsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactValuesPathsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactValuesPathsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DataRafayWorkloadSpecArtifactArtifactValuesPathsList extends cdktf.ComplexList {
  public internalValue? : DataRafayWorkloadSpecArtifactArtifactValuesPaths[] | cdktf.IResolvable

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
  public get(index: number): DataRafayWorkloadSpecArtifactArtifactValuesPathsOutputReference {
    return new DataRafayWorkloadSpecArtifactArtifactValuesPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#jsonschema DataRafayWorkload#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#uischema DataRafayWorkload#uischema}
  */
  readonly uischema?: string;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#display_metadata DataRafayWorkload#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#required DataRafayWorkload#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#override DataRafayWorkload#override}
  */
  readonly override?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#schema DataRafayWorkload#schema}
  */
  readonly schema?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchema;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToTerraform(struct!.override),
    schema: dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideList",
    },
    schema: {
      value: dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#data DataRafayWorkload#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#mount_path DataRafayWorkload#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#sensitive DataRafayWorkload#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptions;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsList extends cdktf.ComplexList {
  public internalValue? : DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths[] | cdktf.IResolvable

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
  public get(index: number): DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOutputReference {
    return new DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayWorkloadSpecArtifactArtifactValuesRef {
  /**
  * name of the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#repository DataRafayWorkload#repository}
  */
  readonly repository?: string;
  /**
  * branch or tag in the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#revision DataRafayWorkload#revision}
  */
  readonly revision?: string;
  /**
  * values_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#values_paths DataRafayWorkload#values_paths}
  */
  readonly valuesPaths?: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths[] | cdktf.IResolvable;
}

export function dataRafayWorkloadSpecArtifactArtifactValuesRefToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
    values_paths: cdktf.listMapper(dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsToTerraform, true)(struct!.valuesPaths),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactValuesRefToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactValuesRefOutputReference | DataRafayWorkloadSpecArtifactArtifactValuesRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_paths: {
      value: cdktf.listMapperHcl(dataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsToHclTerraform, true)(struct!.valuesPaths),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactValuesRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifactValuesRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._valuesPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesPaths = this._valuesPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifactValuesRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repository = undefined;
      this._revision = undefined;
      this._valuesPaths.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repository = value.repository;
      this._revision = value.revision;
      this._valuesPaths.internalValue = value.valuesPaths;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // values_paths - computed: false, optional: true, required: false
  private _valuesPaths = new DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPathsList(this, "values_paths", false);
  public get valuesPaths() {
    return this._valuesPaths;
  }
  public putValuesPaths(value: DataRafayWorkloadSpecArtifactArtifactValuesRefValuesPaths[] | cdktf.IResolvable) {
    this._valuesPaths.internalValue = value;
  }
  public resetValuesPaths() {
    this._valuesPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesPathsInput() {
    return this._valuesPaths.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactArtifact {
  /**
  * name of the helm catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#catalog DataRafayWorkload#catalog}
  */
  readonly catalog?: string;
  /**
  * name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#chart_name DataRafayWorkload#chart_name}
  */
  readonly chartName?: string;
  /**
  * version of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#chart_version DataRafayWorkload#chart_version}
  */
  readonly chartVersion?: string;
  /**
  * relative path from the root to kustomization directory in the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#directory DataRafayWorkload#directory}
  */
  readonly directory?: string;
  /**
  * relative path to kustomization directory from the root directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#path DataRafayWorkload#path}
  */
  readonly path?: string;
  /**
  * project name of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#project DataRafayWorkload#project}
  */
  readonly project?: string;
  /**
  * name of the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#repository DataRafayWorkload#repository}
  */
  readonly repository?: string;
  /**
  * branch or tag in the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#revision DataRafayWorkload#revision}
  */
  readonly revision?: string;
  /**
  * url of the manifest YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#url DataRafayWorkload#url}
  */
  readonly url?: string[];
  /**
  * chart_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#chart_path DataRafayWorkload#chart_path}
  */
  readonly chartPath?: DataRafayWorkloadSpecArtifactArtifactChartPath;
  /**
  * configmap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#configmap DataRafayWorkload#configmap}
  */
  readonly configmap?: DataRafayWorkloadSpecArtifactArtifactConfigmap;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#configuration DataRafayWorkload#configuration}
  */
  readonly configuration?: DataRafayWorkloadSpecArtifactArtifactConfiguration;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#file DataRafayWorkload#file}
  */
  readonly file?: DataRafayWorkloadSpecArtifactArtifactFile;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#paths DataRafayWorkload#paths}
  */
  readonly paths?: DataRafayWorkloadSpecArtifactArtifactPaths[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#secret DataRafayWorkload#secret}
  */
  readonly secret?: DataRafayWorkloadSpecArtifactArtifactSecret;
  /**
  * statefulset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#statefulset DataRafayWorkload#statefulset}
  */
  readonly statefulset?: DataRafayWorkloadSpecArtifactArtifactStatefulset;
  /**
  * values_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#values_paths DataRafayWorkload#values_paths}
  */
  readonly valuesPaths?: DataRafayWorkloadSpecArtifactArtifactValuesPaths[] | cdktf.IResolvable;
  /**
  * values_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#values_ref DataRafayWorkload#values_ref}
  */
  readonly valuesRef?: DataRafayWorkloadSpecArtifactArtifactValuesRef;
}

export function dataRafayWorkloadSpecArtifactArtifactToTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactOutputReference | DataRafayWorkloadSpecArtifactArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    chart_name: cdktf.stringToTerraform(struct!.chartName),
    chart_version: cdktf.stringToTerraform(struct!.chartVersion),
    directory: cdktf.stringToTerraform(struct!.directory),
    path: cdktf.stringToTerraform(struct!.path),
    project: cdktf.stringToTerraform(struct!.project),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
    url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.url),
    chart_path: dataRafayWorkloadSpecArtifactArtifactChartPathToTerraform(struct!.chartPath),
    configmap: dataRafayWorkloadSpecArtifactArtifactConfigmapToTerraform(struct!.configmap),
    configuration: dataRafayWorkloadSpecArtifactArtifactConfigurationToTerraform(struct!.configuration),
    file: dataRafayWorkloadSpecArtifactArtifactFileToTerraform(struct!.file),
    paths: cdktf.listMapper(dataRafayWorkloadSpecArtifactArtifactPathsToTerraform, true)(struct!.paths),
    secret: dataRafayWorkloadSpecArtifactArtifactSecretToTerraform(struct!.secret),
    statefulset: dataRafayWorkloadSpecArtifactArtifactStatefulsetToTerraform(struct!.statefulset),
    values_paths: cdktf.listMapper(dataRafayWorkloadSpecArtifactArtifactValuesPathsToTerraform, true)(struct!.valuesPaths),
    values_ref: dataRafayWorkloadSpecArtifactArtifactValuesRefToTerraform(struct!.valuesRef),
  }
}


export function dataRafayWorkloadSpecArtifactArtifactToHclTerraform(struct?: DataRafayWorkloadSpecArtifactArtifactOutputReference | DataRafayWorkloadSpecArtifactArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_name: {
      value: cdktf.stringToHclTerraform(struct!.chartName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_version: {
      value: cdktf.stringToHclTerraform(struct!.chartVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
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
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.url),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    chart_path: {
      value: dataRafayWorkloadSpecArtifactArtifactChartPathToHclTerraform(struct!.chartPath),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactChartPathList",
    },
    configmap: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigmapToHclTerraform(struct!.configmap),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigmapList",
    },
    configuration: {
      value: dataRafayWorkloadSpecArtifactArtifactConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactConfigurationList",
    },
    file: {
      value: dataRafayWorkloadSpecArtifactArtifactFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactFileList",
    },
    paths: {
      value: cdktf.listMapperHcl(dataRafayWorkloadSpecArtifactArtifactPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactPathsList",
    },
    secret: {
      value: dataRafayWorkloadSpecArtifactArtifactSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactSecretList",
    },
    statefulset: {
      value: dataRafayWorkloadSpecArtifactArtifactStatefulsetToHclTerraform(struct!.statefulset),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactStatefulsetList",
    },
    values_paths: {
      value: cdktf.listMapperHcl(dataRafayWorkloadSpecArtifactArtifactValuesPathsToHclTerraform, true)(struct!.valuesPaths),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesPathsList",
    },
    values_ref: {
      value: dataRafayWorkloadSpecArtifactArtifactValuesRefToHclTerraform(struct!.valuesRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactValuesRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._chartName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartName = this._chartName;
    }
    if (this._chartVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartVersion = this._chartVersion;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._chartPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartPath = this._chartPath?.internalValue;
    }
    if (this._configmap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmap = this._configmap?.internalValue;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._statefulset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulset = this._statefulset?.internalValue;
    }
    if (this._valuesPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesPaths = this._valuesPaths?.internalValue;
    }
    if (this._valuesRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesRef = this._valuesRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifactArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._chartName = undefined;
      this._chartVersion = undefined;
      this._directory = undefined;
      this._path = undefined;
      this._project = undefined;
      this._repository = undefined;
      this._revision = undefined;
      this._url = undefined;
      this._chartPath.internalValue = undefined;
      this._configmap.internalValue = undefined;
      this._configuration.internalValue = undefined;
      this._file.internalValue = undefined;
      this._paths.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._statefulset.internalValue = undefined;
      this._valuesPaths.internalValue = undefined;
      this._valuesRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._chartName = value.chartName;
      this._chartVersion = value.chartVersion;
      this._directory = value.directory;
      this._path = value.path;
      this._project = value.project;
      this._repository = value.repository;
      this._revision = value.revision;
      this._url = value.url;
      this._chartPath.internalValue = value.chartPath;
      this._configmap.internalValue = value.configmap;
      this._configuration.internalValue = value.configuration;
      this._file.internalValue = value.file;
      this._paths.internalValue = value.paths;
      this._secret.internalValue = value.secret;
      this._statefulset.internalValue = value.statefulset;
      this._valuesPaths.internalValue = value.valuesPaths;
      this._valuesRef.internalValue = value.valuesRef;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // chart_name - computed: false, optional: true, required: false
  private _chartName?: string; 
  public get chartName() {
    return this.getStringAttribute('chart_name');
  }
  public set chartName(value: string) {
    this._chartName = value;
  }
  public resetChartName() {
    this._chartName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartNameInput() {
    return this._chartName;
  }

  // chart_version - computed: false, optional: true, required: false
  private _chartVersion?: string; 
  public get chartVersion() {
    return this.getStringAttribute('chart_version');
  }
  public set chartVersion(value: string) {
    this._chartVersion = value;
  }
  public resetChartVersion() {
    this._chartVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartVersionInput() {
    return this._chartVersion;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
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

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string[]; 
  public get url() {
    return this.getListAttribute('url');
  }
  public set url(value: string[]) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // chart_path - computed: false, optional: true, required: false
  private _chartPath = new DataRafayWorkloadSpecArtifactArtifactChartPathOutputReference(this, "chart_path");
  public get chartPath() {
    return this._chartPath;
  }
  public putChartPath(value: DataRafayWorkloadSpecArtifactArtifactChartPath) {
    this._chartPath.internalValue = value;
  }
  public resetChartPath() {
    this._chartPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartPathInput() {
    return this._chartPath.internalValue;
  }

  // configmap - computed: false, optional: true, required: false
  private _configmap = new DataRafayWorkloadSpecArtifactArtifactConfigmapOutputReference(this, "configmap");
  public get configmap() {
    return this._configmap;
  }
  public putConfigmap(value: DataRafayWorkloadSpecArtifactArtifactConfigmap) {
    this._configmap.internalValue = value;
  }
  public resetConfigmap() {
    this._configmap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmapInput() {
    return this._configmap.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataRafayWorkloadSpecArtifactArtifactConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataRafayWorkloadSpecArtifactArtifactConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataRafayWorkloadSpecArtifactArtifactFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataRafayWorkloadSpecArtifactArtifactFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new DataRafayWorkloadSpecArtifactArtifactPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: DataRafayWorkloadSpecArtifactArtifactPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataRafayWorkloadSpecArtifactArtifactSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataRafayWorkloadSpecArtifactArtifactSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // statefulset - computed: false, optional: true, required: false
  private _statefulset = new DataRafayWorkloadSpecArtifactArtifactStatefulsetOutputReference(this, "statefulset");
  public get statefulset() {
    return this._statefulset;
  }
  public putStatefulset(value: DataRafayWorkloadSpecArtifactArtifactStatefulset) {
    this._statefulset.internalValue = value;
  }
  public resetStatefulset() {
    this._statefulset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulsetInput() {
    return this._statefulset.internalValue;
  }

  // values_paths - computed: false, optional: true, required: false
  private _valuesPaths = new DataRafayWorkloadSpecArtifactArtifactValuesPathsList(this, "values_paths", false);
  public get valuesPaths() {
    return this._valuesPaths;
  }
  public putValuesPaths(value: DataRafayWorkloadSpecArtifactArtifactValuesPaths[] | cdktf.IResolvable) {
    this._valuesPaths.internalValue = value;
  }
  public resetValuesPaths() {
    this._valuesPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesPathsInput() {
    return this._valuesPaths.internalValue;
  }

  // values_ref - computed: false, optional: true, required: false
  private _valuesRef = new DataRafayWorkloadSpecArtifactArtifactValuesRefOutputReference(this, "values_ref");
  public get valuesRef() {
    return this._valuesRef;
  }
  public putValuesRef(value: DataRafayWorkloadSpecArtifactArtifactValuesRef) {
    this._valuesRef.internalValue = value;
  }
  public resetValuesRef() {
    this._valuesRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesRefInput() {
    return this._valuesRef.internalValue;
  }
}
export interface DataRafayWorkloadSpecArtifactOptions {
  /**
  * deploy Helm artifact with atomic flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#atomic DataRafayWorkload#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * cleanup deployed resources when chart fails to deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#clean_up_on_fail DataRafayWorkload#clean_up_on_fail}
  */
  readonly cleanUpOnFail?: boolean | cdktf.IResolvable;
  /**
  * custom description for the release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#description DataRafayWorkload#description}
  */
  readonly description?: string;
  /**
  * disable OpenAPI validation while deploying the YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#disable_open_api_validation DataRafayWorkload#disable_open_api_validation}
  */
  readonly disableOpenApiValidation?: boolean | cdktf.IResolvable;
  /**
  * deploy YAML artifact with force flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#force DataRafayWorkload#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * keep release history after uninstalling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#keep_history DataRafayWorkload#keep_history}
  */
  readonly keepHistory?: boolean | cdktf.IResolvable;
  /**
  * limit Helm artifact history
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#max_history DataRafayWorkload#max_history}
  */
  readonly maxHistory?: number;
  /**
  * deploy Helm artifact without hooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#no_hooks DataRafayWorkload#no_hooks}
  */
  readonly noHooks?: boolean | cdktf.IResolvable;
  /**
  * render sub chart notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#render_sub_chart_notes DataRafayWorkload#render_sub_chart_notes}
  */
  readonly renderSubChartNotes?: boolean | cdktf.IResolvable;
  /**
  * reset existing helm values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#reset_values DataRafayWorkload#reset_values}
  */
  readonly resetValues?: boolean | cdktf.IResolvable;
  /**
  * reuse existing values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#reuse_values DataRafayWorkload#reuse_values}
  */
  readonly reuseValues?: boolean | cdktf.IResolvable;
  /**
  * pass custom helm values as key=value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#set_string DataRafayWorkload#set_string}
  */
  readonly setString?: string[];
  /**
  * skip deploying crds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#skip_crd DataRafayWorkload#skip_crd}
  */
  readonly skipCrd?: boolean | cdktf.IResolvable;
  /**
  * timeout for waiting for the resources to become ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#timeout DataRafayWorkload#timeout}
  */
  readonly timeout?: string;
  /**
  * deploy Helm artifact with wait flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#wait DataRafayWorkload#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * deploy Helm artifact with --wait-for-jobs flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#wait_for_jobs DataRafayWorkload#wait_for_jobs}
  */
  readonly waitForJobs?: boolean | cdktf.IResolvable;
  /**
  * uninstall Helm artifact with --wait flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#wait_for_uninstall DataRafayWorkload#wait_for_uninstall}
  */
  readonly waitForUninstall?: boolean | cdktf.IResolvable;
}

export function dataRafayWorkloadSpecArtifactOptionsToTerraform(struct?: DataRafayWorkloadSpecArtifactOptionsOutputReference | DataRafayWorkloadSpecArtifactOptions): any {
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


export function dataRafayWorkloadSpecArtifactOptionsToHclTerraform(struct?: DataRafayWorkloadSpecArtifactOptionsOutputReference | DataRafayWorkloadSpecArtifactOptions): any {
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

export class DataRafayWorkloadSpecArtifactOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifactOptions | undefined {
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

  public set internalValue(value: DataRafayWorkloadSpecArtifactOptions | undefined) {
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
export interface DataRafayWorkloadSpecArtifact {
  /**
  * type of the artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#type DataRafayWorkload#type}
  */
  readonly type?: string;
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#artifact DataRafayWorkload#artifact}
  */
  readonly artifact?: DataRafayWorkloadSpecArtifactArtifact;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#options DataRafayWorkload#options}
  */
  readonly options?: DataRafayWorkloadSpecArtifactOptions;
}

export function dataRafayWorkloadSpecArtifactToTerraform(struct?: DataRafayWorkloadSpecArtifactOutputReference | DataRafayWorkloadSpecArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    artifact: dataRafayWorkloadSpecArtifactArtifactToTerraform(struct!.artifact),
    options: dataRafayWorkloadSpecArtifactOptionsToTerraform(struct!.options),
  }
}


export function dataRafayWorkloadSpecArtifactToHclTerraform(struct?: DataRafayWorkloadSpecArtifactOutputReference | DataRafayWorkloadSpecArtifact): any {
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
    artifact: {
      value: dataRafayWorkloadSpecArtifactArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactArtifactList",
    },
    options: {
      value: dataRafayWorkloadSpecArtifactOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._artifact.internalValue = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._artifact.internalValue = value.artifact;
      this._options.internalValue = value.options;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new DataRafayWorkloadSpecArtifactArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: DataRafayWorkloadSpecArtifactArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataRafayWorkloadSpecArtifactOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataRafayWorkloadSpecArtifactOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataRafayWorkloadSpecDrift {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#action DataRafayWorkload#action}
  */
  readonly action?: string;
  /**
  * flag to specify if drift reconcillation is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#enabled DataRafayWorkload#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataRafayWorkloadSpecDriftToTerraform(struct?: DataRafayWorkloadSpecDriftOutputReference | DataRafayWorkloadSpecDrift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataRafayWorkloadSpecDriftToHclTerraform(struct?: DataRafayWorkloadSpecDriftOutputReference | DataRafayWorkloadSpecDrift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataRafayWorkloadSpecDriftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecDrift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecDrift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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
export interface DataRafayWorkloadSpecPlacementEnvironment {
  /**
  * Name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#name DataRafayWorkload#name}
  */
  readonly name?: string;
}

export function dataRafayWorkloadSpecPlacementEnvironmentToTerraform(struct?: DataRafayWorkloadSpecPlacementEnvironmentOutputReference | DataRafayWorkloadSpecPlacementEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataRafayWorkloadSpecPlacementEnvironmentToHclTerraform(struct?: DataRafayWorkloadSpecPlacementEnvironmentOutputReference | DataRafayWorkloadSpecPlacementEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataRafayWorkloadSpecPlacementEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecPlacementEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecPlacementEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DataRafayWorkloadSpecPlacementLabels {
  /**
  * Key of the placement label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#key DataRafayWorkload#key}
  */
  readonly key?: string;
  /**
  * Value of the placement label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#value DataRafayWorkload#value}
  */
  readonly value?: string;
}

export function dataRafayWorkloadSpecPlacementLabelsToTerraform(struct?: DataRafayWorkloadSpecPlacementLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataRafayWorkloadSpecPlacementLabelsToHclTerraform(struct?: DataRafayWorkloadSpecPlacementLabels | cdktf.IResolvable): any {
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

export class DataRafayWorkloadSpecPlacementLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayWorkloadSpecPlacementLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayWorkloadSpecPlacementLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataRafayWorkloadSpecPlacementLabelsList extends cdktf.ComplexList {
  public internalValue? : DataRafayWorkloadSpecPlacementLabels[] | cdktf.IResolvable

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
  public get(index: number): DataRafayWorkloadSpecPlacementLabelsOutputReference {
    return new DataRafayWorkloadSpecPlacementLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayWorkloadSpecPlacement {
  /**
  * Kubernetes style label selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#selector DataRafayWorkload#selector}
  */
  readonly selector?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#environment DataRafayWorkload#environment}
  */
  readonly environment?: DataRafayWorkloadSpecPlacementEnvironment;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#labels DataRafayWorkload#labels}
  */
  readonly labels?: DataRafayWorkloadSpecPlacementLabels[] | cdktf.IResolvable;
}

export function dataRafayWorkloadSpecPlacementToTerraform(struct?: DataRafayWorkloadSpecPlacementOutputReference | DataRafayWorkloadSpecPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    environment: dataRafayWorkloadSpecPlacementEnvironmentToTerraform(struct!.environment),
    labels: cdktf.listMapper(dataRafayWorkloadSpecPlacementLabelsToTerraform, true)(struct!.labels),
  }
}


export function dataRafayWorkloadSpecPlacementToHclTerraform(struct?: DataRafayWorkloadSpecPlacementOutputReference | DataRafayWorkloadSpecPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: dataRafayWorkloadSpecPlacementEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecPlacementEnvironmentList",
    },
    labels: {
      value: cdktf.listMapperHcl(dataRafayWorkloadSpecPlacementLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecPlacementLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpecPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpecPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
      this._environment.internalValue = undefined;
      this._labels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
      this._environment.internalValue = value.environment;
      this._labels.internalValue = value.labels;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataRafayWorkloadSpecPlacementEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataRafayWorkloadSpecPlacementEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataRafayWorkloadSpecPlacementLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataRafayWorkloadSpecPlacementLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}
export interface DataRafayWorkloadSpec {
  /**
  * namespace of the workload resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#namespace DataRafayWorkload#namespace}
  */
  readonly namespace?: string;
  /**
  * version of the workload resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#version DataRafayWorkload#version}
  */
  readonly version?: string;
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#artifact DataRafayWorkload#artifact}
  */
  readonly artifact?: DataRafayWorkloadSpecArtifact;
  /**
  * drift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#drift DataRafayWorkload#drift}
  */
  readonly drift?: DataRafayWorkloadSpecDrift;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#placement DataRafayWorkload#placement}
  */
  readonly placement?: DataRafayWorkloadSpecPlacement;
}

export function dataRafayWorkloadSpecToTerraform(struct?: DataRafayWorkloadSpecOutputReference | DataRafayWorkloadSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
    artifact: dataRafayWorkloadSpecArtifactToTerraform(struct!.artifact),
    drift: dataRafayWorkloadSpecDriftToTerraform(struct!.drift),
    placement: dataRafayWorkloadSpecPlacementToTerraform(struct!.placement),
  }
}


export function dataRafayWorkloadSpecToHclTerraform(struct?: DataRafayWorkloadSpecOutputReference | DataRafayWorkloadSpec): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact: {
      value: dataRafayWorkloadSpecArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecArtifactList",
    },
    drift: {
      value: dataRafayWorkloadSpecDriftToHclTerraform(struct!.drift),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecDriftList",
    },
    placement: {
      value: dataRafayWorkloadSpecPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayWorkloadSpecPlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayWorkloadSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._drift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drift = this._drift?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
      this._version = undefined;
      this._artifact.internalValue = undefined;
      this._drift.internalValue = undefined;
      this._placement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
      this._version = value.version;
      this._artifact.internalValue = value.artifact;
      this._drift.internalValue = value.drift;
      this._placement.internalValue = value.placement;
    }
  }

  // namespace - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new DataRafayWorkloadSpecArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: DataRafayWorkloadSpecArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // drift - computed: false, optional: true, required: false
  private _drift = new DataRafayWorkloadSpecDriftOutputReference(this, "drift");
  public get drift() {
    return this._drift;
  }
  public putDrift(value: DataRafayWorkloadSpecDrift) {
    this._drift.internalValue = value;
  }
  public resetDrift() {
    this._drift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftInput() {
    return this._drift.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new DataRafayWorkloadSpecPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataRafayWorkloadSpecPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }
}
export interface DataRafayWorkloadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#read DataRafayWorkload#read}
  */
  readonly read?: string;
}

export function dataRafayWorkloadTimeoutsToTerraform(struct?: DataRafayWorkloadTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayWorkloadTimeoutsToHclTerraform(struct?: DataRafayWorkloadTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayWorkloadTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayWorkloadTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayWorkloadTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload rafay_workload}
*/
export class DataRafayWorkload extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayWorkload to import
  * @param importFromId The id of the existing DataRafayWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/workload rafay_workload} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayWorkloadConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRafayWorkloadConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_workload',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.55',
        providerVersionConstraint: '1.1.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._condition = config.condition;
    this._conditionStatus = config.conditionStatus;
    this._id = config.id;
    this._impersonate = config.impersonate;
    this._reason = config.reason;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // condition_status - computed: false, optional: true, required: false
  private _conditionStatus?: string; 
  public get conditionStatus() {
    return this.getStringAttribute('condition_status');
  }
  public set conditionStatus(value: string) {
    this._conditionStatus = value;
  }
  public resetConditionStatus() {
    this._conditionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionStatusInput() {
    return this._conditionStatus;
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

  // impersonate - computed: false, optional: true, required: false
  private _impersonate?: string; 
  public get impersonate() {
    return this.getStringAttribute('impersonate');
  }
  public set impersonate(value: string) {
    this._impersonate = value;
  }
  public resetImpersonate() {
    this._impersonate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateInput() {
    return this._impersonate;
  }

  // reason - computed: false, optional: true, required: false
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataRafayWorkloadMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataRafayWorkloadMetadata) {
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
  private _spec = new DataRafayWorkloadSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataRafayWorkloadSpec) {
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
  private _timeouts = new DataRafayWorkloadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayWorkloadTimeouts) {
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
      condition: cdktf.stringToTerraform(this._condition),
      condition_status: cdktf.stringToTerraform(this._conditionStatus),
      id: cdktf.stringToTerraform(this._id),
      impersonate: cdktf.stringToTerraform(this._impersonate),
      reason: cdktf.stringToTerraform(this._reason),
      metadata: dataRafayWorkloadMetadataToTerraform(this._metadata.internalValue),
      spec: dataRafayWorkloadSpecToTerraform(this._spec.internalValue),
      timeouts: dataRafayWorkloadTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_status: {
        value: cdktf.stringToHclTerraform(this._conditionStatus),
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
      impersonate: {
        value: cdktf.stringToHclTerraform(this._impersonate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: dataRafayWorkloadMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayWorkloadMetadataList",
      },
      spec: {
        value: dataRafayWorkloadSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayWorkloadSpecList",
      },
      timeouts: {
        value: dataRafayWorkloadTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayWorkloadTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
