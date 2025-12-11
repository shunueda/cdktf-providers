// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayClusterBlueprintStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#id DataRafayClusterBlueprintStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#metadata DataRafayClusterBlueprintStatus#metadata}
  */
  readonly metadata?: DataRafayClusterBlueprintStatusMetadata;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#status DataRafayClusterBlueprintStatus#status}
  */
  readonly status?: DataRafayClusterBlueprintStatusStatus[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#timeouts DataRafayClusterBlueprintStatus#timeouts}
  */
  readonly timeouts?: DataRafayClusterBlueprintStatusTimeouts;
}
export interface DataRafayClusterBlueprintStatusMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#id DataRafayClusterBlueprintStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#is_sso_user DataRafayClusterBlueprintStatus#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#username DataRafayClusterBlueprintStatus#username}
  */
  readonly username?: string;
}

export function dataRafayClusterBlueprintStatusMetadataCreatedByToTerraform(struct?: DataRafayClusterBlueprintStatusMetadataCreatedByOutputReference | DataRafayClusterBlueprintStatusMetadataCreatedBy): any {
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


export function dataRafayClusterBlueprintStatusMetadataCreatedByToHclTerraform(struct?: DataRafayClusterBlueprintStatusMetadataCreatedByOutputReference | DataRafayClusterBlueprintStatusMetadataCreatedBy): any {
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

export class DataRafayClusterBlueprintStatusMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayClusterBlueprintStatusMetadataCreatedBy | undefined {
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

  public set internalValue(value: DataRafayClusterBlueprintStatusMetadataCreatedBy | undefined) {
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
export interface DataRafayClusterBlueprintStatusMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#id DataRafayClusterBlueprintStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#is_sso_user DataRafayClusterBlueprintStatus#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#username DataRafayClusterBlueprintStatus#username}
  */
  readonly username?: string;
}

export function dataRafayClusterBlueprintStatusMetadataModifiedByToTerraform(struct?: DataRafayClusterBlueprintStatusMetadataModifiedByOutputReference | DataRafayClusterBlueprintStatusMetadataModifiedBy): any {
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


export function dataRafayClusterBlueprintStatusMetadataModifiedByToHclTerraform(struct?: DataRafayClusterBlueprintStatusMetadataModifiedByOutputReference | DataRafayClusterBlueprintStatusMetadataModifiedBy): any {
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

export class DataRafayClusterBlueprintStatusMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayClusterBlueprintStatusMetadataModifiedBy | undefined {
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

  public set internalValue(value: DataRafayClusterBlueprintStatusMetadataModifiedBy | undefined) {
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
export interface DataRafayClusterBlueprintStatusMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#annotations DataRafayClusterBlueprintStatus#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#description DataRafayClusterBlueprintStatus#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#display_name DataRafayClusterBlueprintStatus#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#labels DataRafayClusterBlueprintStatus#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#name DataRafayClusterBlueprintStatus#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#project DataRafayClusterBlueprintStatus#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#created_by DataRafayClusterBlueprintStatus#created_by}
  */
  readonly createdBy?: DataRafayClusterBlueprintStatusMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#modified_by DataRafayClusterBlueprintStatus#modified_by}
  */
  readonly modifiedBy?: DataRafayClusterBlueprintStatusMetadataModifiedBy;
}

export function dataRafayClusterBlueprintStatusMetadataToTerraform(struct?: DataRafayClusterBlueprintStatusMetadataOutputReference | DataRafayClusterBlueprintStatusMetadata): any {
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
    created_by: dataRafayClusterBlueprintStatusMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: dataRafayClusterBlueprintStatusMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function dataRafayClusterBlueprintStatusMetadataToHclTerraform(struct?: DataRafayClusterBlueprintStatusMetadataOutputReference | DataRafayClusterBlueprintStatusMetadata): any {
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
      value: dataRafayClusterBlueprintStatusMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayClusterBlueprintStatusMetadataCreatedByList",
    },
    modified_by: {
      value: dataRafayClusterBlueprintStatusMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayClusterBlueprintStatusMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayClusterBlueprintStatusMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayClusterBlueprintStatusMetadata | undefined {
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

  public set internalValue(value: DataRafayClusterBlueprintStatusMetadata | undefined) {
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
  private _createdBy = new DataRafayClusterBlueprintStatusMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: DataRafayClusterBlueprintStatusMetadataCreatedBy) {
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
  private _modifiedBy = new DataRafayClusterBlueprintStatusMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: DataRafayClusterBlueprintStatusMetadataModifiedBy) {
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
export interface DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures {
  /**
  * component failure message of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#message DataRafayClusterBlueprintStatus#message}
  */
  readonly message?: string;
  /**
  * component name blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#name DataRafayClusterBlueprintStatus#name}
  */
  readonly name?: string;
  /**
  * component failure reason the blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#reason DataRafayClusterBlueprintStatus#reason}
  */
  readonly reason?: string;
  /**
  * component failure timestamp of the blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#timestamp DataRafayClusterBlueprintStatus#timestamp}
  */
  readonly timestamp?: string;
}

export function dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresToTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    reason: cdktf.stringToTerraform(struct!.reason),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
  }
}


export function dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresToHclTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._name = undefined;
      this._reason = undefined;
      this._timestamp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._name = value.name;
      this._reason = value.reason;
      this._timestamp = value.timestamp;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresList extends cdktf.ComplexList {
  public internalValue? : DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures[] | cdktf.IResolvable

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
  public get(index: number): DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresOutputReference {
    return new DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents {
  /**
  * component name of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#name DataRafayClusterBlueprintStatus#name}
  */
  readonly name?: string;
  /**
  * component failure reason of the blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#reason DataRafayClusterBlueprintStatus#reason}
  */
  readonly reason?: string;
  /**
  * failures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#failures DataRafayClusterBlueprintStatus#failures}
  */
  readonly failures?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures[] | cdktf.IResolvable;
}

export function dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsToTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    reason: cdktf.stringToTerraform(struct!.reason),
    failures: cdktf.listMapper(dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresToTerraform, true)(struct!.failures),
  }
}


export function dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsToHclTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents | cdktf.IResolvable): any {
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
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failures: {
      value: cdktf.listMapperHcl(dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresToHclTerraform, true)(struct!.failures),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._failures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failures = this._failures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._reason = undefined;
      this._failures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._reason = value.reason;
      this._failures.internalValue = value.failures;
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

  // failures - computed: false, optional: true, required: false
  private _failures = new DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailuresList(this, "failures", false);
  public get failures() {
    return this._failures;
  }
  public putFailures(value: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsFailures[] | cdktf.IResolvable) {
    this._failures.internalValue = value;
  }
  public resetFailures() {
    this._failures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failuresInput() {
    return this._failures.internalValue;
  }
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsList extends cdktf.ComplexList {
  public internalValue? : DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents[] | cdktf.IResolvable

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
  public get(index: number): DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsOutputReference {
    return new DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayClusterBlueprintStatusStatusAddonStatusListConditions {
  /**
  * condition updated time of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#last_updated DataRafayClusterBlueprintStatus#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * maxium retry count of blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#max_retrycount DataRafayClusterBlueprintStatus#max_retrycount}
  */
  readonly maxRetrycount?: number;
  /**
  * condition reason of the blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#reason DataRafayClusterBlueprintStatus#reason}
  */
  readonly reason?: string;
  /**
  * retry count of blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#retrycount DataRafayClusterBlueprintStatus#retrycount}
  */
  readonly retrycount?: number;
  /**
  * condition status of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#status DataRafayClusterBlueprintStatus#status}
  */
  readonly status?: string;
  /**
  * condition type of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#type DataRafayClusterBlueprintStatus#type}
  */
  readonly type?: string;
  /**
  * components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#components DataRafayClusterBlueprintStatus#components}
  */
  readonly components?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents[] | cdktf.IResolvable;
}

export function dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsToTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_updated: cdktf.stringToTerraform(struct!.lastUpdated),
    max_retrycount: cdktf.numberToTerraform(struct!.maxRetrycount),
    reason: cdktf.stringToTerraform(struct!.reason),
    retrycount: cdktf.numberToTerraform(struct!.retrycount),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    components: cdktf.listMapper(dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsToTerraform, true)(struct!.components),
  }
}


export function dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsToHclTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_updated: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retrycount: {
      value: cdktf.numberToHclTerraform(struct!.maxRetrycount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrycount: {
      value: cdktf.numberToHclTerraform(struct!.retrycount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    components: {
      value: cdktf.listMapperHcl(dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsToHclTerraform, true)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayClusterBlueprintStatusStatusAddonStatusListConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._maxRetrycount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetrycount = this._maxRetrycount;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._retrycount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrycount = this._retrycount;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayClusterBlueprintStatusStatusAddonStatusListConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastUpdated = undefined;
      this._maxRetrycount = undefined;
      this._reason = undefined;
      this._retrycount = undefined;
      this._status = undefined;
      this._type = undefined;
      this._components.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastUpdated = value.lastUpdated;
      this._maxRetrycount = value.maxRetrycount;
      this._reason = value.reason;
      this._retrycount = value.retrycount;
      this._status = value.status;
      this._type = value.type;
      this._components.internalValue = value.components;
    }
  }

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // max_retrycount - computed: false, optional: true, required: false
  private _maxRetrycount?: number; 
  public get maxRetrycount() {
    return this.getNumberAttribute('max_retrycount');
  }
  public set maxRetrycount(value: number) {
    this._maxRetrycount = value;
  }
  public resetMaxRetrycount() {
    this._maxRetrycount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetrycountInput() {
    return this._maxRetrycount;
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

  // retrycount - computed: false, optional: true, required: false
  private _retrycount?: number; 
  public get retrycount() {
    return this.getNumberAttribute('retrycount');
  }
  public set retrycount(value: number) {
    this._retrycount = value;
  }
  public resetRetrycount() {
    this._retrycount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrycountInput() {
    return this._retrycount;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // components - computed: false, optional: true, required: false
  private _components = new DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsList extends cdktf.ComplexList {
  public internalValue? : DataRafayClusterBlueprintStatusStatusAddonStatusListConditions[] | cdktf.IResolvable

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
  public get(index: number): DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsOutputReference {
    return new DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayClusterBlueprintStatusStatusAddonStatusListStruct {
  /**
  * name of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#addon_name DataRafayClusterBlueprintStatus#addon_name}
  */
  readonly addonName?: string;
  /**
  * namespce of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#namespace DataRafayClusterBlueprintStatus#namespace}
  */
  readonly namespace?: string;
  /**
  * status of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#publish_status DataRafayClusterBlueprintStatus#publish_status}
  */
  readonly publishStatus?: string;
  /**
  * time of the blueprint addon publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#publish_time DataRafayClusterBlueprintStatus#publish_time}
  */
  readonly publishTime?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#conditions DataRafayClusterBlueprintStatus#conditions}
  */
  readonly conditions?: DataRafayClusterBlueprintStatusStatusAddonStatusListConditions[] | cdktf.IResolvable;
}

export function dataRafayClusterBlueprintStatusStatusAddonStatusListStructToTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_name: cdktf.stringToTerraform(struct!.addonName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    publish_status: cdktf.stringToTerraform(struct!.publishStatus),
    publish_time: cdktf.stringToTerraform(struct!.publishTime),
    conditions: cdktf.listMapper(dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsToTerraform, true)(struct!.conditions),
  }
}


export function dataRafayClusterBlueprintStatusStatusAddonStatusListStructToHclTerraform(struct?: DataRafayClusterBlueprintStatusStatusAddonStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_name: {
      value: cdktf.stringToHclTerraform(struct!.addonName),
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
    publish_status: {
      value: cdktf.stringToHclTerraform(struct!.publishStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_time: {
      value: cdktf.stringToHclTerraform(struct!.publishTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataRafayClusterBlueprintStatusStatusAddonStatusListConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayClusterBlueprintStatusStatusAddonStatusListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonName = this._addonName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._publishStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishStatus = this._publishStatus;
    }
    if (this._publishTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishTime = this._publishTime;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayClusterBlueprintStatusStatusAddonStatusListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addonName = undefined;
      this._namespace = undefined;
      this._publishStatus = undefined;
      this._publishTime = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addonName = value.addonName;
      this._namespace = value.namespace;
      this._publishStatus = value.publishStatus;
      this._publishTime = value.publishTime;
      this._conditions.internalValue = value.conditions;
    }
  }

  // addon_name - computed: false, optional: true, required: false
  private _addonName?: string; 
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }
  public set addonName(value: string) {
    this._addonName = value;
  }
  public resetAddonName() {
    this._addonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameInput() {
    return this._addonName;
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

  // publish_status - computed: false, optional: true, required: false
  private _publishStatus?: string; 
  public get publishStatus() {
    return this.getStringAttribute('publish_status');
  }
  public set publishStatus(value: string) {
    this._publishStatus = value;
  }
  public resetPublishStatus() {
    this._publishStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishStatusInput() {
    return this._publishStatus;
  }

  // publish_time - computed: false, optional: true, required: false
  private _publishTime?: string; 
  public get publishTime() {
    return this.getStringAttribute('publish_time');
  }
  public set publishTime(value: string) {
    this._publishTime = value;
  }
  public resetPublishTime() {
    this._publishTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishTimeInput() {
    return this._publishTime;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataRafayClusterBlueprintStatusStatusAddonStatusListConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataRafayClusterBlueprintStatusStatusAddonStatusListConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class DataRafayClusterBlueprintStatusStatusAddonStatusListStructList extends cdktf.ComplexList {
  public internalValue? : DataRafayClusterBlueprintStatusStatusAddonStatusListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataRafayClusterBlueprintStatusStatusAddonStatusListStructOutputReference {
    return new DataRafayClusterBlueprintStatusStatusAddonStatusListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayClusterBlueprintStatusStatus {
  /**
  * addon_status_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#addon_status_list DataRafayClusterBlueprintStatus#addon_status_list}
  */
  readonly addonStatusList?: DataRafayClusterBlueprintStatusStatusAddonStatusListStruct[] | cdktf.IResolvable;
}

export function dataRafayClusterBlueprintStatusStatusToTerraform(struct?: DataRafayClusterBlueprintStatusStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_status_list: cdktf.listMapper(dataRafayClusterBlueprintStatusStatusAddonStatusListStructToTerraform, true)(struct!.addonStatusList),
  }
}


export function dataRafayClusterBlueprintStatusStatusToHclTerraform(struct?: DataRafayClusterBlueprintStatusStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_status_list: {
      value: cdktf.listMapperHcl(dataRafayClusterBlueprintStatusStatusAddonStatusListStructToHclTerraform, true)(struct!.addonStatusList),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayClusterBlueprintStatusStatusAddonStatusListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayClusterBlueprintStatusStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayClusterBlueprintStatusStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonStatusList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonStatusList = this._addonStatusList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayClusterBlueprintStatusStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addonStatusList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addonStatusList.internalValue = value.addonStatusList;
    }
  }

  // addon_status_list - computed: false, optional: true, required: false
  private _addonStatusList = new DataRafayClusterBlueprintStatusStatusAddonStatusListStructList(this, "addon_status_list", false);
  public get addonStatusList() {
    return this._addonStatusList;
  }
  public putAddonStatusList(value: DataRafayClusterBlueprintStatusStatusAddonStatusListStruct[] | cdktf.IResolvable) {
    this._addonStatusList.internalValue = value;
  }
  public resetAddonStatusList() {
    this._addonStatusList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonStatusListInput() {
    return this._addonStatusList.internalValue;
  }
}

export class DataRafayClusterBlueprintStatusStatusList extends cdktf.ComplexList {
  public internalValue? : DataRafayClusterBlueprintStatusStatus[] | cdktf.IResolvable

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
  public get(index: number): DataRafayClusterBlueprintStatusStatusOutputReference {
    return new DataRafayClusterBlueprintStatusStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayClusterBlueprintStatusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#read DataRafayClusterBlueprintStatus#read}
  */
  readonly read?: string;
}

export function dataRafayClusterBlueprintStatusTimeoutsToTerraform(struct?: DataRafayClusterBlueprintStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayClusterBlueprintStatusTimeoutsToHclTerraform(struct?: DataRafayClusterBlueprintStatusTimeouts | cdktf.IResolvable): any {
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

export class DataRafayClusterBlueprintStatusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayClusterBlueprintStatusTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayClusterBlueprintStatusTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status rafay_cluster_blueprint_status}
*/
export class DataRafayClusterBlueprintStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_cluster_blueprint_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayClusterBlueprintStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayClusterBlueprintStatus to import
  * @param importFromId The id of the existing DataRafayClusterBlueprintStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayClusterBlueprintStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_cluster_blueprint_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/cluster_blueprint_status rafay_cluster_blueprint_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayClusterBlueprintStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRafayClusterBlueprintStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_cluster_blueprint_status',
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
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._status.internalValue = config.status;
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
  private _metadata = new DataRafayClusterBlueprintStatusMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataRafayClusterBlueprintStatusMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataRafayClusterBlueprintStatusStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
  public putStatus(value: DataRafayClusterBlueprintStatusStatus[] | cdktf.IResolvable) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataRafayClusterBlueprintStatusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayClusterBlueprintStatusTimeouts) {
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
      metadata: dataRafayClusterBlueprintStatusMetadataToTerraform(this._metadata.internalValue),
      status: cdktf.listMapper(dataRafayClusterBlueprintStatusStatusToTerraform, true)(this._status.internalValue),
      timeouts: dataRafayClusterBlueprintStatusTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: dataRafayClusterBlueprintStatusMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayClusterBlueprintStatusMetadataList",
      },
      status: {
        value: cdktf.listMapperHcl(dataRafayClusterBlueprintStatusStatusToHclTerraform, true)(this._status.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayClusterBlueprintStatusStatusList",
      },
      timeouts: {
        value: dataRafayClusterBlueprintStatusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayClusterBlueprintStatusTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
