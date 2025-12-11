// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * apiVersion of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#api_version GkeCluster#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#id GkeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * kind of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#kind GkeCluster#kind}
  */
  readonly kind?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#metadata GkeCluster#metadata}
  */
  readonly metadata?: GkeClusterMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#spec GkeCluster#spec}
  */
  readonly spec?: GkeClusterSpec[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#timeouts GkeCluster#timeouts}
  */
  readonly timeouts?: GkeClusterTimeouts;
}
export interface GkeClusterMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#id GkeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#is_sso_user GkeCluster#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#username GkeCluster#username}
  */
  readonly username?: string;
}

export function gkeClusterMetadataCreatedByToTerraform(struct?: GkeClusterMetadataCreatedByOutputReference | GkeClusterMetadataCreatedBy): any {
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


export function gkeClusterMetadataCreatedByToHclTerraform(struct?: GkeClusterMetadataCreatedByOutputReference | GkeClusterMetadataCreatedBy): any {
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

export class GkeClusterMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterMetadataCreatedBy | undefined {
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

  public set internalValue(value: GkeClusterMetadataCreatedBy | undefined) {
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
export interface GkeClusterMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#id GkeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#is_sso_user GkeCluster#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#username GkeCluster#username}
  */
  readonly username?: string;
}

export function gkeClusterMetadataModifiedByToTerraform(struct?: GkeClusterMetadataModifiedByOutputReference | GkeClusterMetadataModifiedBy): any {
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


export function gkeClusterMetadataModifiedByToHclTerraform(struct?: GkeClusterMetadataModifiedByOutputReference | GkeClusterMetadataModifiedBy): any {
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

export class GkeClusterMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterMetadataModifiedBy | undefined {
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

  public set internalValue(value: GkeClusterMetadataModifiedBy | undefined) {
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
export interface GkeClusterMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#annotations GkeCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#description GkeCluster#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#display_name GkeCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#labels GkeCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#project GkeCluster#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#created_by GkeCluster#created_by}
  */
  readonly createdBy?: GkeClusterMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#modified_by GkeCluster#modified_by}
  */
  readonly modifiedBy?: GkeClusterMetadataModifiedBy;
}

export function gkeClusterMetadataToTerraform(struct?: GkeClusterMetadataOutputReference | GkeClusterMetadata): any {
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
    created_by: gkeClusterMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: gkeClusterMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function gkeClusterMetadataToHclTerraform(struct?: GkeClusterMetadataOutputReference | GkeClusterMetadata): any {
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
      value: gkeClusterMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterMetadataCreatedByList",
    },
    modified_by: {
      value: gkeClusterMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterMetadata | undefined {
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

  public set internalValue(value: GkeClusterMetadata | undefined) {
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
  private _createdBy = new GkeClusterMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: GkeClusterMetadataCreatedBy) {
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
  private _modifiedBy = new GkeClusterMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: GkeClusterMetadataModifiedBy) {
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
export interface GkeClusterSpecBlueprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#version GkeCluster#version}
  */
  readonly version?: string;
}

export function gkeClusterSpecBlueprintToTerraform(struct?: GkeClusterSpecBlueprintOutputReference | GkeClusterSpecBlueprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function gkeClusterSpecBlueprintToHclTerraform(struct?: GkeClusterSpecBlueprintOutputReference | GkeClusterSpecBlueprint): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecBlueprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecBlueprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecBlueprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
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
}
export interface GkeClusterSpecConfigFeatures {
  /**
  * List of components for cloud logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#cloud_logging_components GkeCluster#cloud_logging_components}
  */
  readonly cloudLoggingComponents?: string[];
  /**
  * List of components for cloud monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#cloud_monitoring_components GkeCluster#cloud_monitoring_components}
  */
  readonly cloudMonitoringComponents?: string[];
  /**
  * Application Manager is a GKE controller for managing the lifecycle of applications. It enables application delivery and updates following Kubernetes and GitOps best practices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_application_manager_beta GkeCluster#enable_application_manager_beta}
  */
  readonly enableApplicationManagerBeta?: boolean | cdktf.IResolvable;
  /**
  * Backup for GKE allows you to back up and restore GKE workloads. There is no cost for enabling this feature, but you are charged for backups based on the size of the data and the number of pods you protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_backup_for_gke GkeCluster#enable_backup_for_gke}
  */
  readonly enableBackupForGke?: boolean | cdktf.IResolvable;
  /**
  * Logging collects logs emitted by your applications and by GKE infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_cloud_logging GkeCluster#enable_cloud_logging}
  */
  readonly enableCloudLogging?: boolean | cdktf.IResolvable;
  /**
  * Monitoring collects metrics emitted by your applications and by GKE infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_cloud_monitoring GkeCluster#enable_cloud_monitoring}
  */
  readonly enableCloudMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Enable to automatically deploy and manage the Compute Engine Persistent Disk CSI Driver. This feature is an alternative to using the gcePersistentDisk in-tree volume plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_compute_engine_persistent_disk_csi_driver GkeCluster#enable_compute_engine_persistent_disk_csi_driver}
  */
  readonly enableComputeEnginePersistentDiskCsiDriver?: boolean | cdktf.IResolvable;
  /**
  * Enable to automatically deploy and manage the Filestore CSI Driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_filestore_csi_driver GkeCluster#enable_filestore_csi_driver}
  */
  readonly enableFilestoreCsiDriver?: boolean | cdktf.IResolvable;
  /**
  * Image streaming allows your workloads to initialize without waiting for the entire image to download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_image_streaming GkeCluster#enable_image_streaming}
  */
  readonly enableImageStreaming?: boolean | cdktf.IResolvable;
  /**
  * This option deploys managed collectors for Prometheus metrics within this cluster. These collectors must be configured using PodMonitoring resources. To enable Managed Service for Prometheus here, you'll need. Cluster version of 1.21.4-gke.300 or greater
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_managed_service_prometheus GkeCluster#enable_managed_service_prometheus}
  */
  readonly enableManagedServicePrometheus?: boolean | cdktf.IResolvable;
}

export function gkeClusterSpecConfigFeaturesToTerraform(struct?: GkeClusterSpecConfigFeaturesOutputReference | GkeClusterSpecConfigFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_logging_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudLoggingComponents),
    cloud_monitoring_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudMonitoringComponents),
    enable_application_manager_beta: cdktf.booleanToTerraform(struct!.enableApplicationManagerBeta),
    enable_backup_for_gke: cdktf.booleanToTerraform(struct!.enableBackupForGke),
    enable_cloud_logging: cdktf.booleanToTerraform(struct!.enableCloudLogging),
    enable_cloud_monitoring: cdktf.booleanToTerraform(struct!.enableCloudMonitoring),
    enable_compute_engine_persistent_disk_csi_driver: cdktf.booleanToTerraform(struct!.enableComputeEnginePersistentDiskCsiDriver),
    enable_filestore_csi_driver: cdktf.booleanToTerraform(struct!.enableFilestoreCsiDriver),
    enable_image_streaming: cdktf.booleanToTerraform(struct!.enableImageStreaming),
    enable_managed_service_prometheus: cdktf.booleanToTerraform(struct!.enableManagedServicePrometheus),
  }
}


export function gkeClusterSpecConfigFeaturesToHclTerraform(struct?: GkeClusterSpecConfigFeaturesOutputReference | GkeClusterSpecConfigFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_logging_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudLoggingComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_monitoring_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudMonitoringComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_application_manager_beta: {
      value: cdktf.booleanToHclTerraform(struct!.enableApplicationManagerBeta),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_backup_for_gke: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackupForGke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cloud_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableCloudLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cloud_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableCloudMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_compute_engine_persistent_disk_csi_driver: {
      value: cdktf.booleanToHclTerraform(struct!.enableComputeEnginePersistentDiskCsiDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_filestore_csi_driver: {
      value: cdktf.booleanToHclTerraform(struct!.enableFilestoreCsiDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_image_streaming: {
      value: cdktf.booleanToHclTerraform(struct!.enableImageStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_managed_service_prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.enableManagedServicePrometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudLoggingComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLoggingComponents = this._cloudLoggingComponents;
    }
    if (this._cloudMonitoringComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudMonitoringComponents = this._cloudMonitoringComponents;
    }
    if (this._enableApplicationManagerBeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableApplicationManagerBeta = this._enableApplicationManagerBeta;
    }
    if (this._enableBackupForGke !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackupForGke = this._enableBackupForGke;
    }
    if (this._enableCloudLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudLogging = this._enableCloudLogging;
    }
    if (this._enableCloudMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudMonitoring = this._enableCloudMonitoring;
    }
    if (this._enableComputeEnginePersistentDiskCsiDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComputeEnginePersistentDiskCsiDriver = this._enableComputeEnginePersistentDiskCsiDriver;
    }
    if (this._enableFilestoreCsiDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFilestoreCsiDriver = this._enableFilestoreCsiDriver;
    }
    if (this._enableImageStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImageStreaming = this._enableImageStreaming;
    }
    if (this._enableManagedServicePrometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableManagedServicePrometheus = this._enableManagedServicePrometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudLoggingComponents = undefined;
      this._cloudMonitoringComponents = undefined;
      this._enableApplicationManagerBeta = undefined;
      this._enableBackupForGke = undefined;
      this._enableCloudLogging = undefined;
      this._enableCloudMonitoring = undefined;
      this._enableComputeEnginePersistentDiskCsiDriver = undefined;
      this._enableFilestoreCsiDriver = undefined;
      this._enableImageStreaming = undefined;
      this._enableManagedServicePrometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudLoggingComponents = value.cloudLoggingComponents;
      this._cloudMonitoringComponents = value.cloudMonitoringComponents;
      this._enableApplicationManagerBeta = value.enableApplicationManagerBeta;
      this._enableBackupForGke = value.enableBackupForGke;
      this._enableCloudLogging = value.enableCloudLogging;
      this._enableCloudMonitoring = value.enableCloudMonitoring;
      this._enableComputeEnginePersistentDiskCsiDriver = value.enableComputeEnginePersistentDiskCsiDriver;
      this._enableFilestoreCsiDriver = value.enableFilestoreCsiDriver;
      this._enableImageStreaming = value.enableImageStreaming;
      this._enableManagedServicePrometheus = value.enableManagedServicePrometheus;
    }
  }

  // cloud_logging_components - computed: false, optional: true, required: false
  private _cloudLoggingComponents?: string[]; 
  public get cloudLoggingComponents() {
    return this.getListAttribute('cloud_logging_components');
  }
  public set cloudLoggingComponents(value: string[]) {
    this._cloudLoggingComponents = value;
  }
  public resetCloudLoggingComponents() {
    this._cloudLoggingComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLoggingComponentsInput() {
    return this._cloudLoggingComponents;
  }

  // cloud_monitoring_components - computed: false, optional: true, required: false
  private _cloudMonitoringComponents?: string[]; 
  public get cloudMonitoringComponents() {
    return this.getListAttribute('cloud_monitoring_components');
  }
  public set cloudMonitoringComponents(value: string[]) {
    this._cloudMonitoringComponents = value;
  }
  public resetCloudMonitoringComponents() {
    this._cloudMonitoringComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMonitoringComponentsInput() {
    return this._cloudMonitoringComponents;
  }

  // enable_application_manager_beta - computed: false, optional: true, required: false
  private _enableApplicationManagerBeta?: boolean | cdktf.IResolvable; 
  public get enableApplicationManagerBeta() {
    return this.getBooleanAttribute('enable_application_manager_beta');
  }
  public set enableApplicationManagerBeta(value: boolean | cdktf.IResolvable) {
    this._enableApplicationManagerBeta = value;
  }
  public resetEnableApplicationManagerBeta() {
    this._enableApplicationManagerBeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApplicationManagerBetaInput() {
    return this._enableApplicationManagerBeta;
  }

  // enable_backup_for_gke - computed: false, optional: true, required: false
  private _enableBackupForGke?: boolean | cdktf.IResolvable; 
  public get enableBackupForGke() {
    return this.getBooleanAttribute('enable_backup_for_gke');
  }
  public set enableBackupForGke(value: boolean | cdktf.IResolvable) {
    this._enableBackupForGke = value;
  }
  public resetEnableBackupForGke() {
    this._enableBackupForGke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupForGkeInput() {
    return this._enableBackupForGke;
  }

  // enable_cloud_logging - computed: false, optional: true, required: false
  private _enableCloudLogging?: boolean | cdktf.IResolvable; 
  public get enableCloudLogging() {
    return this.getBooleanAttribute('enable_cloud_logging');
  }
  public set enableCloudLogging(value: boolean | cdktf.IResolvable) {
    this._enableCloudLogging = value;
  }
  public resetEnableCloudLogging() {
    this._enableCloudLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudLoggingInput() {
    return this._enableCloudLogging;
  }

  // enable_cloud_monitoring - computed: false, optional: true, required: false
  private _enableCloudMonitoring?: boolean | cdktf.IResolvable; 
  public get enableCloudMonitoring() {
    return this.getBooleanAttribute('enable_cloud_monitoring');
  }
  public set enableCloudMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableCloudMonitoring = value;
  }
  public resetEnableCloudMonitoring() {
    this._enableCloudMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudMonitoringInput() {
    return this._enableCloudMonitoring;
  }

  // enable_compute_engine_persistent_disk_csi_driver - computed: false, optional: true, required: false
  private _enableComputeEnginePersistentDiskCsiDriver?: boolean | cdktf.IResolvable; 
  public get enableComputeEnginePersistentDiskCsiDriver() {
    return this.getBooleanAttribute('enable_compute_engine_persistent_disk_csi_driver');
  }
  public set enableComputeEnginePersistentDiskCsiDriver(value: boolean | cdktf.IResolvable) {
    this._enableComputeEnginePersistentDiskCsiDriver = value;
  }
  public resetEnableComputeEnginePersistentDiskCsiDriver() {
    this._enableComputeEnginePersistentDiskCsiDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComputeEnginePersistentDiskCsiDriverInput() {
    return this._enableComputeEnginePersistentDiskCsiDriver;
  }

  // enable_filestore_csi_driver - computed: false, optional: true, required: false
  private _enableFilestoreCsiDriver?: boolean | cdktf.IResolvable; 
  public get enableFilestoreCsiDriver() {
    return this.getBooleanAttribute('enable_filestore_csi_driver');
  }
  public set enableFilestoreCsiDriver(value: boolean | cdktf.IResolvable) {
    this._enableFilestoreCsiDriver = value;
  }
  public resetEnableFilestoreCsiDriver() {
    this._enableFilestoreCsiDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFilestoreCsiDriverInput() {
    return this._enableFilestoreCsiDriver;
  }

  // enable_image_streaming - computed: false, optional: true, required: false
  private _enableImageStreaming?: boolean | cdktf.IResolvable; 
  public get enableImageStreaming() {
    return this.getBooleanAttribute('enable_image_streaming');
  }
  public set enableImageStreaming(value: boolean | cdktf.IResolvable) {
    this._enableImageStreaming = value;
  }
  public resetEnableImageStreaming() {
    this._enableImageStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImageStreamingInput() {
    return this._enableImageStreaming;
  }

  // enable_managed_service_prometheus - computed: false, optional: true, required: false
  private _enableManagedServicePrometheus?: boolean | cdktf.IResolvable; 
  public get enableManagedServicePrometheus() {
    return this.getBooleanAttribute('enable_managed_service_prometheus');
  }
  public set enableManagedServicePrometheus(value: boolean | cdktf.IResolvable) {
    this._enableManagedServicePrometheus = value;
  }
  public resetEnableManagedServicePrometheus() {
    this._enableManagedServicePrometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedServicePrometheusInput() {
    return this._enableManagedServicePrometheus;
  }
}
export interface GkeClusterSpecConfigLocationConfig {
  /**
  * Regional location in which the cluster's control plane and nodes are located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#region GkeCluster#region}
  */
  readonly region?: string;
  /**
  * Zone in the region where bootstrap VM is created for cluster provisioning 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#zone GkeCluster#zone}
  */
  readonly zone?: string;
}

export function gkeClusterSpecConfigLocationConfigToTerraform(struct?: GkeClusterSpecConfigLocationConfigOutputReference | GkeClusterSpecConfigLocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function gkeClusterSpecConfigLocationConfigToHclTerraform(struct?: GkeClusterSpecConfigLocationConfigOutputReference | GkeClusterSpecConfigLocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigLocationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigLocationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigLocationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._zone = value.zone;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface GkeClusterSpecConfigLocationDefaultNodeLocations {
  /**
  * Enable providing default node locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enabled GkeCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of zones. Increase availability by providing more than one zone. The same number of nodes will be deployed to each zone in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#zones GkeCluster#zones}
  */
  readonly zones?: string[];
}

export function gkeClusterSpecConfigLocationDefaultNodeLocationsToTerraform(struct?: GkeClusterSpecConfigLocationDefaultNodeLocationsOutputReference | GkeClusterSpecConfigLocationDefaultNodeLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function gkeClusterSpecConfigLocationDefaultNodeLocationsToHclTerraform(struct?: GkeClusterSpecConfigLocationDefaultNodeLocationsOutputReference | GkeClusterSpecConfigLocationDefaultNodeLocations): any {
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
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigLocationDefaultNodeLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigLocationDefaultNodeLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigLocationDefaultNodeLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._zones = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._zones = value.zones;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface GkeClusterSpecConfigLocation {
  /**
  * GKE Cluster location can be either zonal or regional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#type GkeCluster#type}
  */
  readonly type?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#config GkeCluster#config}
  */
  readonly config?: GkeClusterSpecConfigLocationConfig;
  /**
  * default_node_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#default_node_locations GkeCluster#default_node_locations}
  */
  readonly defaultNodeLocations?: GkeClusterSpecConfigLocationDefaultNodeLocations;
}

export function gkeClusterSpecConfigLocationToTerraform(struct?: GkeClusterSpecConfigLocationOutputReference | GkeClusterSpecConfigLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: gkeClusterSpecConfigLocationConfigToTerraform(struct!.config),
    default_node_locations: gkeClusterSpecConfigLocationDefaultNodeLocationsToTerraform(struct!.defaultNodeLocations),
  }
}


export function gkeClusterSpecConfigLocationToHclTerraform(struct?: GkeClusterSpecConfigLocationOutputReference | GkeClusterSpecConfigLocation): any {
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
      value: gkeClusterSpecConfigLocationConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigLocationConfigList",
    },
    default_node_locations: {
      value: gkeClusterSpecConfigLocationDefaultNodeLocationsToHclTerraform(struct!.defaultNodeLocations),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigLocationDefaultNodeLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigLocation | undefined {
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
    if (this._defaultNodeLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNodeLocations = this._defaultNodeLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
      this._defaultNodeLocations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
      this._defaultNodeLocations.internalValue = value.defaultNodeLocations;
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

  // config - computed: false, optional: true, required: false
  private _config = new GkeClusterSpecConfigLocationConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GkeClusterSpecConfigLocationConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // default_node_locations - computed: false, optional: true, required: false
  private _defaultNodeLocations = new GkeClusterSpecConfigLocationDefaultNodeLocationsOutputReference(this, "default_node_locations");
  public get defaultNodeLocations() {
    return this._defaultNodeLocations;
  }
  public putDefaultNodeLocations(value: GkeClusterSpecConfigLocationDefaultNodeLocations) {
    this._defaultNodeLocations.internalValue = value;
  }
  public resetDefaultNodeLocations() {
    this._defaultNodeLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodeLocationsInput() {
    return this._defaultNodeLocations.internalValue;
  }
}
export interface GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#ports GkeCluster#ports}
  */
  readonly ports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#protocol GkeCluster#protocol}
  */
  readonly protocol?: string;
}

export function gkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesToTerraform(struct?: GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function gkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesToHclTerraform(struct?: GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports = value.ports;
      this._protocol = value.protocol;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesOutputReference {
    return new GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigNetworkAccessConfigFirewallRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#action GkeCluster#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#description GkeCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#destination_ranges GkeCluster#destination_ranges}
  */
  readonly destinationRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#direction GkeCluster#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#network GkeCluster#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#priority GkeCluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#source_ranges GkeCluster#source_ranges}
  */
  readonly sourceRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#target_tags GkeCluster#target_tags}
  */
  readonly targetTags?: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#rules GkeCluster#rules}
  */
  readonly rules?: GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules[] | cdktf.IResolvable;
}

export function gkeClusterSpecConfigNetworkAccessConfigFirewallRulesToTerraform(struct?: GkeClusterSpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    destination_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationRanges),
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    priority: cdktf.numberToTerraform(struct!.priority),
    source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRanges),
    target_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetTags),
    rules: cdktf.listMapper(gkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function gkeClusterSpecConfigNetworkAccessConfigFirewallRulesToHclTerraform(struct?: GkeClusterSpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNetworkAccessConfigFirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRanges = this._destinationRanges;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRanges = this._sourceRanges;
    }
    if (this._targetTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTags = this._targetTags;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._destinationRanges = undefined;
      this._direction = undefined;
      this._name = undefined;
      this._network = undefined;
      this._priority = undefined;
      this._sourceRanges = undefined;
      this._targetTags = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._destinationRanges = value.destinationRanges;
      this._direction = value.direction;
      this._name = value.name;
      this._network = value.network;
      this._priority = value.priority;
      this._sourceRanges = value.sourceRanges;
      this._targetTags = value.targetTags;
      this._rules.internalValue = value.rules;
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

  // destination_ranges - computed: false, optional: true, required: false
  private _destinationRanges?: string[]; 
  public get destinationRanges() {
    return this.getListAttribute('destination_ranges');
  }
  public set destinationRanges(value: string[]) {
    this._destinationRanges = value;
  }
  public resetDestinationRanges() {
    this._destinationRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRangesInput() {
    return this._destinationRanges;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // source_ranges - computed: false, optional: true, required: false
  private _sourceRanges?: string[]; 
  public get sourceRanges() {
    return this.getListAttribute('source_ranges');
  }
  public set sourceRanges(value: string[]) {
    this._sourceRanges = value;
  }
  public resetSourceRanges() {
    this._sourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangesInput() {
    return this._sourceRanges;
  }

  // target_tags - computed: false, optional: true, required: false
  private _targetTags?: string[]; 
  public get targetTags() {
    return this.getListAttribute('target_tags');
  }
  public set targetTags(value: string[]) {
    this._targetTags = value;
  }
  public resetTargetTags() {
    this._targetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GkeClusterSpecConfigNetworkAccessConfigFirewallRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class GkeClusterSpecConfigNetworkAccessConfigFirewallRulesList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNetworkAccessConfigFirewallRules[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNetworkAccessConfigFirewallRulesOutputReference {
    return new GkeClusterSpecConfigNetworkAccessConfigFirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigNetworkAccessConfig {
  /**
  * Control plane IP range is for the control plane VPC. The control plane range must not overlap with any subnet in your cluster's VPC. The control plane and your cluster use VPC peering to communicate privately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#control_plane_ip_range GkeCluster#control_plane_ip_range}
  */
  readonly controlPlaneIpRange?: string;
  /**
  * To use Privately Used Public IPs (PUPI) ranges, the default source NAT used for IP masquerading needs to be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#disable_snat GkeCluster#disable_snat}
  */
  readonly disableSnat?: boolean | cdktf.IResolvable;
  /**
  * Disabling this option locks down external access to the cluster control plane. There is still an external IP address used by Google for cluster management purposes, but the IP address is not accessible to anyone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_access_control_plane_external_ip GkeCluster#enable_access_control_plane_external_ip}
  */
  readonly enableAccessControlPlaneExternalIp?: boolean | cdktf.IResolvable;
  /**
  * With control plane global access, you can access the control plane's private endpoint from any GCP region or on-premises environment no matter what the private cluster's region is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_access_control_plane_global GkeCluster#enable_access_control_plane_global}
  */
  readonly enableAccessControlPlaneGlobal?: boolean | cdktf.IResolvable;
  /**
  * Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.If control plane cidr block is provided then enablePrivateNodes must be TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_private_nodes GkeCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * Subnet to provision the master's private endpoint during cluster creation.If control plane cidr block is provided then PrivateEndpointSubnetwork must be unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#private_endpoint_subnetwork_name GkeCluster#private_endpoint_subnetwork_name}
  */
  readonly privateEndpointSubnetworkName?: string;
  /**
  * firewall_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#firewall_rules GkeCluster#firewall_rules}
  */
  readonly firewallRules?: GkeClusterSpecConfigNetworkAccessConfigFirewallRules[] | cdktf.IResolvable;
}

export function gkeClusterSpecConfigNetworkAccessConfigToTerraform(struct?: GkeClusterSpecConfigNetworkAccessConfigOutputReference | GkeClusterSpecConfigNetworkAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_ip_range: cdktf.stringToTerraform(struct!.controlPlaneIpRange),
    disable_snat: cdktf.booleanToTerraform(struct!.disableSnat),
    enable_access_control_plane_external_ip: cdktf.booleanToTerraform(struct!.enableAccessControlPlaneExternalIp),
    enable_access_control_plane_global: cdktf.booleanToTerraform(struct!.enableAccessControlPlaneGlobal),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    private_endpoint_subnetwork_name: cdktf.stringToTerraform(struct!.privateEndpointSubnetworkName),
    firewall_rules: cdktf.listMapper(gkeClusterSpecConfigNetworkAccessConfigFirewallRulesToTerraform, true)(struct!.firewallRules),
  }
}


export function gkeClusterSpecConfigNetworkAccessConfigToHclTerraform(struct?: GkeClusterSpecConfigNetworkAccessConfigOutputReference | GkeClusterSpecConfigNetworkAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_snat: {
      value: cdktf.booleanToHclTerraform(struct!.disableSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_access_control_plane_external_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableAccessControlPlaneExternalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_access_control_plane_global: {
      value: cdktf.booleanToHclTerraform(struct!.enableAccessControlPlaneGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_endpoint_subnetwork_name: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointSubnetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_rules: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNetworkAccessConfigFirewallRulesToHclTerraform, true)(struct!.firewallRules),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNetworkAccessConfigFirewallRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNetworkAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNetworkAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneIpRange = this._controlPlaneIpRange;
    }
    if (this._disableSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSnat = this._disableSnat;
    }
    if (this._enableAccessControlPlaneExternalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAccessControlPlaneExternalIp = this._enableAccessControlPlaneExternalIp;
    }
    if (this._enableAccessControlPlaneGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAccessControlPlaneGlobal = this._enableAccessControlPlaneGlobal;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._privateEndpointSubnetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointSubnetworkName = this._privateEndpointSubnetworkName;
    }
    if (this._firewallRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallRules = this._firewallRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNetworkAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneIpRange = undefined;
      this._disableSnat = undefined;
      this._enableAccessControlPlaneExternalIp = undefined;
      this._enableAccessControlPlaneGlobal = undefined;
      this._enablePrivateNodes = undefined;
      this._privateEndpointSubnetworkName = undefined;
      this._firewallRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneIpRange = value.controlPlaneIpRange;
      this._disableSnat = value.disableSnat;
      this._enableAccessControlPlaneExternalIp = value.enableAccessControlPlaneExternalIp;
      this._enableAccessControlPlaneGlobal = value.enableAccessControlPlaneGlobal;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._privateEndpointSubnetworkName = value.privateEndpointSubnetworkName;
      this._firewallRules.internalValue = value.firewallRules;
    }
  }

  // control_plane_ip_range - computed: false, optional: true, required: false
  private _controlPlaneIpRange?: string; 
  public get controlPlaneIpRange() {
    return this.getStringAttribute('control_plane_ip_range');
  }
  public set controlPlaneIpRange(value: string) {
    this._controlPlaneIpRange = value;
  }
  public resetControlPlaneIpRange() {
    this._controlPlaneIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIpRangeInput() {
    return this._controlPlaneIpRange;
  }

  // disable_snat - computed: false, optional: true, required: false
  private _disableSnat?: boolean | cdktf.IResolvable; 
  public get disableSnat() {
    return this.getBooleanAttribute('disable_snat');
  }
  public set disableSnat(value: boolean | cdktf.IResolvable) {
    this._disableSnat = value;
  }
  public resetDisableSnat() {
    this._disableSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSnatInput() {
    return this._disableSnat;
  }

  // enable_access_control_plane_external_ip - computed: false, optional: true, required: false
  private _enableAccessControlPlaneExternalIp?: boolean | cdktf.IResolvable; 
  public get enableAccessControlPlaneExternalIp() {
    return this.getBooleanAttribute('enable_access_control_plane_external_ip');
  }
  public set enableAccessControlPlaneExternalIp(value: boolean | cdktf.IResolvable) {
    this._enableAccessControlPlaneExternalIp = value;
  }
  public resetEnableAccessControlPlaneExternalIp() {
    this._enableAccessControlPlaneExternalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessControlPlaneExternalIpInput() {
    return this._enableAccessControlPlaneExternalIp;
  }

  // enable_access_control_plane_global - computed: false, optional: true, required: false
  private _enableAccessControlPlaneGlobal?: boolean | cdktf.IResolvable; 
  public get enableAccessControlPlaneGlobal() {
    return this.getBooleanAttribute('enable_access_control_plane_global');
  }
  public set enableAccessControlPlaneGlobal(value: boolean | cdktf.IResolvable) {
    this._enableAccessControlPlaneGlobal = value;
  }
  public resetEnableAccessControlPlaneGlobal() {
    this._enableAccessControlPlaneGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessControlPlaneGlobalInput() {
    return this._enableAccessControlPlaneGlobal;
  }

  // enable_private_nodes - computed: false, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktf.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // private_endpoint_subnetwork_name - computed: false, optional: true, required: false
  private _privateEndpointSubnetworkName?: string; 
  public get privateEndpointSubnetworkName() {
    return this.getStringAttribute('private_endpoint_subnetwork_name');
  }
  public set privateEndpointSubnetworkName(value: string) {
    this._privateEndpointSubnetworkName = value;
  }
  public resetPrivateEndpointSubnetworkName() {
    this._privateEndpointSubnetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointSubnetworkNameInput() {
    return this._privateEndpointSubnetworkName;
  }

  // firewall_rules - computed: false, optional: true, required: false
  private _firewallRules = new GkeClusterSpecConfigNetworkAccessConfigFirewallRulesList(this, "firewall_rules", false);
  public get firewallRules() {
    return this._firewallRules;
  }
  public putFirewallRules(value: GkeClusterSpecConfigNetworkAccessConfigFirewallRules[] | cdktf.IResolvable) {
    this._firewallRules.internalValue = value;
  }
  public resetFirewallRules() {
    this._firewallRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRulesInput() {
    return this._firewallRules.internalValue;
  }
}
export interface GkeClusterSpecConfigNetworkAccess {
  /**
  * Choose the type of network you want to allow to access your cluster's workloads. private or public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#type GkeCluster#type}
  */
  readonly type?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#config GkeCluster#config}
  */
  readonly config?: GkeClusterSpecConfigNetworkAccessConfig;
}

export function gkeClusterSpecConfigNetworkAccessToTerraform(struct?: GkeClusterSpecConfigNetworkAccessOutputReference | GkeClusterSpecConfigNetworkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: gkeClusterSpecConfigNetworkAccessConfigToTerraform(struct!.config),
  }
}


export function gkeClusterSpecConfigNetworkAccessToHclTerraform(struct?: GkeClusterSpecConfigNetworkAccessOutputReference | GkeClusterSpecConfigNetworkAccess): any {
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
      value: gkeClusterSpecConfigNetworkAccessConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNetworkAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNetworkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNetworkAccess | undefined {
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

  public set internalValue(value: GkeClusterSpecConfigNetworkAccess | undefined) {
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

  // config - computed: false, optional: true, required: false
  private _config = new GkeClusterSpecConfigNetworkAccessConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GkeClusterSpecConfigNetworkAccessConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork {
  /**
  * CIDR Example: 198.51.100.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#cidr GkeCluster#cidr}
  */
  readonly cidr?: string;
  /**
  * Name of the Authorized Network Example: Corporate Office
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name?: string;
}

export function gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToTerraform(struct?: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToHclTerraform(struct?: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._name = value.name;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

export class GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkOutputReference {
    return new GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetwork {
  /**
  * Enable Control Plane Authorized Network. Configure the Networks now or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enabled GkeCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * authorized_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#authorized_network GkeCluster#authorized_network}
  */
  readonly authorizedNetwork?: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork[] | cdktf.IResolvable;
}

export function gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkToTerraform(struct?: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference | GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    authorized_network: cdktf.listMapper(gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToTerraform, true)(struct!.authorizedNetwork),
  }
}


export function gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkToHclTerraform(struct?: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference | GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetwork): any {
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
    authorized_network: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToHclTerraform, true)(struct!.authorizedNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._authorizedNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedNetwork = this._authorizedNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._authorizedNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._authorizedNetwork.internalValue = value.authorizedNetwork;
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

  // authorized_network - computed: false, optional: true, required: false
  private _authorizedNetwork = new GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkList(this, "authorized_network", false);
  public get authorizedNetwork() {
    return this._authorizedNetwork;
  }
  public putAuthorizedNetwork(value: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork[] | cdktf.IResolvable) {
    this._authorizedNetwork.internalValue = value;
  }
  public resetAuthorizedNetwork() {
    this._authorizedNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworkInput() {
    return this._authorizedNetwork.internalValue;
  }
}
export interface GkeClusterSpecConfigNetwork {
  /**
  * Dataplane V2 is optimized for Kubernetes networking kwhich is implemented using eBPF. Possible values: ADVANCED_DATAPATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#data_plane_v_2 GkeCluster#data_plane_v_2}
  */
  readonly dataPlaneV2?: string;
  /**
  * Dataplane V2 metrics brings better insight into the traffic between your Kubernetes workloads. Understand how your services communicate, identify issues with the network health, verify Kubernetes policies and more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_data_plane_v_2_metrics GkeCluster#enable_data_plane_v_2_metrics}
  */
  readonly enableDataPlaneV2Metrics?: boolean | cdktf.IResolvable;
  /**
  * Dataplane V2 observability provides Managed Hubble CLI solution that lets you observe network flows between your Kubernetes workloads in real time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_data_plane_v_2_observability GkeCluster#enable_data_plane_v_2_observability}
  */
  readonly enableDataPlaneV2Observability?: boolean | cdktf.IResolvable;
  /**
  * This feature uses alias IP and provides a more secure integration with Google Cloud Platform services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_vpc_nativetraffic GkeCluster#enable_vpc_nativetraffic}
  */
  readonly enableVpcNativetraffic?: boolean | cdktf.IResolvable;
  /**
  * This value is used to optimize the partitioning of cluster's IP address range to sub-ranges at node level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#max_pods_per_node GkeCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Name of the network that the cluster is in. It determines which other Compute Engine resource it is able to communicate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes Network Policy API allows the cluster administrator to specify what pods are allowed to communicate with each other. Possible values: CALICO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#network_policy GkeCluster#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master,it does not track whether network policy is enabled for the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#network_policy_config GkeCluster#network_policy_config}
  */
  readonly networkPolicyConfig?: boolean | cdktf.IResolvable;
  /**
  * All pods in the cluster are assigned an IP address from this range. Enter a range (in CIDR notation) within a network range, a mask, or leave this field blank to use a default range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#pod_address_range GkeCluster#pod_address_range}
  */
  readonly podAddressRange?: string;
  /**
  * Cluster pods are assigned an IP from the selected node subnet's secondary CIDR address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#pod_secondary_range_name GkeCluster#pod_secondary_range_name}
  */
  readonly podSecondaryRangeName?: string;
  /**
  * Cluster services will be assigned an IP address from this IP address range. Enter a range (in CIDR notation) within a network range, a mask, or leave this field blank to use a default range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#service_address_range GkeCluster#service_address_range}
  */
  readonly serviceAddressRange?: string;
  /**
  * Cluster services are assigned an IP from the selected node subnetes secondary CIDR address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#service_secondary_range_name GkeCluster#service_secondary_range_name}
  */
  readonly serviceSecondaryRangeName?: string;
  /**
  * Subnetwork to which the Kubernetes cluster will belong. When VPC native is enabled, the subnetwork must contain at least two secondary ranges which are not used by other Kubernetes clusters. Subnet is permanent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#subnet_name GkeCluster#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#access GkeCluster#access}
  */
  readonly access?: GkeClusterSpecConfigNetworkAccess;
  /**
  * control_plane_authorized_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#control_plane_authorized_network GkeCluster#control_plane_authorized_network}
  */
  readonly controlPlaneAuthorizedNetwork?: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetwork;
}

export function gkeClusterSpecConfigNetworkToTerraform(struct?: GkeClusterSpecConfigNetworkOutputReference | GkeClusterSpecConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_plane_v_2: cdktf.stringToTerraform(struct!.dataPlaneV2),
    enable_data_plane_v_2_metrics: cdktf.booleanToTerraform(struct!.enableDataPlaneV2Metrics),
    enable_data_plane_v_2_observability: cdktf.booleanToTerraform(struct!.enableDataPlaneV2Observability),
    enable_vpc_nativetraffic: cdktf.booleanToTerraform(struct!.enableVpcNativetraffic),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktf.stringToTerraform(struct!.name),
    network_policy: cdktf.stringToTerraform(struct!.networkPolicy),
    network_policy_config: cdktf.booleanToTerraform(struct!.networkPolicyConfig),
    pod_address_range: cdktf.stringToTerraform(struct!.podAddressRange),
    pod_secondary_range_name: cdktf.stringToTerraform(struct!.podSecondaryRangeName),
    service_address_range: cdktf.stringToTerraform(struct!.serviceAddressRange),
    service_secondary_range_name: cdktf.stringToTerraform(struct!.serviceSecondaryRangeName),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    access: gkeClusterSpecConfigNetworkAccessToTerraform(struct!.access),
    control_plane_authorized_network: gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkToTerraform(struct!.controlPlaneAuthorizedNetwork),
  }
}


export function gkeClusterSpecConfigNetworkToHclTerraform(struct?: GkeClusterSpecConfigNetworkOutputReference | GkeClusterSpecConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_plane_v_2: {
      value: cdktf.stringToHclTerraform(struct!.dataPlaneV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_data_plane_v_2_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableDataPlaneV2Metrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_data_plane_v_2_observability: {
      value: cdktf.booleanToHclTerraform(struct!.enableDataPlaneV2Observability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vpc_nativetraffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableVpcNativetraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy_config: {
      value: cdktf.booleanToHclTerraform(struct!.networkPolicyConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_address_range: {
      value: cdktf.stringToHclTerraform(struct!.podAddressRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_secondary_range_name: {
      value: cdktf.stringToHclTerraform(struct!.podSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_address_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceAddressRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_secondary_range_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access: {
      value: gkeClusterSpecConfigNetworkAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNetworkAccessList",
    },
    control_plane_authorized_network: {
      value: gkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkToHclTerraform(struct!.controlPlaneAuthorizedNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPlaneV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPlaneV2 = this._dataPlaneV2;
    }
    if (this._enableDataPlaneV2Metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDataPlaneV2Metrics = this._enableDataPlaneV2Metrics;
    }
    if (this._enableDataPlaneV2Observability !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDataPlaneV2Observability = this._enableDataPlaneV2Observability;
    }
    if (this._enableVpcNativetraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVpcNativetraffic = this._enableVpcNativetraffic;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy;
    }
    if (this._networkPolicyConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyConfig = this._networkPolicyConfig;
    }
    if (this._podAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAddressRange = this._podAddressRange;
    }
    if (this._podSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecondaryRangeName = this._podSecondaryRangeName;
    }
    if (this._serviceAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddressRange = this._serviceAddressRange;
    }
    if (this._serviceSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSecondaryRangeName = this._serviceSecondaryRangeName;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._controlPlaneAuthorizedNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneAuthorizedNetwork = this._controlPlaneAuthorizedNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataPlaneV2 = undefined;
      this._enableDataPlaneV2Metrics = undefined;
      this._enableDataPlaneV2Observability = undefined;
      this._enableVpcNativetraffic = undefined;
      this._maxPodsPerNode = undefined;
      this._name = undefined;
      this._networkPolicy = undefined;
      this._networkPolicyConfig = undefined;
      this._podAddressRange = undefined;
      this._podSecondaryRangeName = undefined;
      this._serviceAddressRange = undefined;
      this._serviceSecondaryRangeName = undefined;
      this._subnetName = undefined;
      this._access.internalValue = undefined;
      this._controlPlaneAuthorizedNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataPlaneV2 = value.dataPlaneV2;
      this._enableDataPlaneV2Metrics = value.enableDataPlaneV2Metrics;
      this._enableDataPlaneV2Observability = value.enableDataPlaneV2Observability;
      this._enableVpcNativetraffic = value.enableVpcNativetraffic;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._name = value.name;
      this._networkPolicy = value.networkPolicy;
      this._networkPolicyConfig = value.networkPolicyConfig;
      this._podAddressRange = value.podAddressRange;
      this._podSecondaryRangeName = value.podSecondaryRangeName;
      this._serviceAddressRange = value.serviceAddressRange;
      this._serviceSecondaryRangeName = value.serviceSecondaryRangeName;
      this._subnetName = value.subnetName;
      this._access.internalValue = value.access;
      this._controlPlaneAuthorizedNetwork.internalValue = value.controlPlaneAuthorizedNetwork;
    }
  }

  // data_plane_v_2 - computed: false, optional: true, required: false
  private _dataPlaneV2?: string; 
  public get dataPlaneV2() {
    return this.getStringAttribute('data_plane_v_2');
  }
  public set dataPlaneV2(value: string) {
    this._dataPlaneV2 = value;
  }
  public resetDataPlaneV2() {
    this._dataPlaneV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneV2Input() {
    return this._dataPlaneV2;
  }

  // enable_data_plane_v_2_metrics - computed: false, optional: true, required: false
  private _enableDataPlaneV2Metrics?: boolean | cdktf.IResolvable; 
  public get enableDataPlaneV2Metrics() {
    return this.getBooleanAttribute('enable_data_plane_v_2_metrics');
  }
  public set enableDataPlaneV2Metrics(value: boolean | cdktf.IResolvable) {
    this._enableDataPlaneV2Metrics = value;
  }
  public resetEnableDataPlaneV2Metrics() {
    this._enableDataPlaneV2Metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDataPlaneV2MetricsInput() {
    return this._enableDataPlaneV2Metrics;
  }

  // enable_data_plane_v_2_observability - computed: false, optional: true, required: false
  private _enableDataPlaneV2Observability?: boolean | cdktf.IResolvable; 
  public get enableDataPlaneV2Observability() {
    return this.getBooleanAttribute('enable_data_plane_v_2_observability');
  }
  public set enableDataPlaneV2Observability(value: boolean | cdktf.IResolvable) {
    this._enableDataPlaneV2Observability = value;
  }
  public resetEnableDataPlaneV2Observability() {
    this._enableDataPlaneV2Observability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDataPlaneV2ObservabilityInput() {
    return this._enableDataPlaneV2Observability;
  }

  // enable_vpc_nativetraffic - computed: false, optional: true, required: false
  private _enableVpcNativetraffic?: boolean | cdktf.IResolvable; 
  public get enableVpcNativetraffic() {
    return this.getBooleanAttribute('enable_vpc_nativetraffic');
  }
  public set enableVpcNativetraffic(value: boolean | cdktf.IResolvable) {
    this._enableVpcNativetraffic = value;
  }
  public resetEnableVpcNativetraffic() {
    this._enableVpcNativetraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpcNativetrafficInput() {
    return this._enableVpcNativetraffic;
  }

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
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

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // network_policy_config - computed: false, optional: true, required: false
  private _networkPolicyConfig?: boolean | cdktf.IResolvable; 
  public get networkPolicyConfig() {
    return this.getBooleanAttribute('network_policy_config');
  }
  public set networkPolicyConfig(value: boolean | cdktf.IResolvable) {
    this._networkPolicyConfig = value;
  }
  public resetNetworkPolicyConfig() {
    this._networkPolicyConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyConfigInput() {
    return this._networkPolicyConfig;
  }

  // pod_address_range - computed: false, optional: true, required: false
  private _podAddressRange?: string; 
  public get podAddressRange() {
    return this.getStringAttribute('pod_address_range');
  }
  public set podAddressRange(value: string) {
    this._podAddressRange = value;
  }
  public resetPodAddressRange() {
    this._podAddressRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAddressRangeInput() {
    return this._podAddressRange;
  }

  // pod_secondary_range_name - computed: false, optional: true, required: false
  private _podSecondaryRangeName?: string; 
  public get podSecondaryRangeName() {
    return this.getStringAttribute('pod_secondary_range_name');
  }
  public set podSecondaryRangeName(value: string) {
    this._podSecondaryRangeName = value;
  }
  public resetPodSecondaryRangeName() {
    this._podSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecondaryRangeNameInput() {
    return this._podSecondaryRangeName;
  }

  // service_address_range - computed: false, optional: true, required: false
  private _serviceAddressRange?: string; 
  public get serviceAddressRange() {
    return this.getStringAttribute('service_address_range');
  }
  public set serviceAddressRange(value: string) {
    this._serviceAddressRange = value;
  }
  public resetServiceAddressRange() {
    this._serviceAddressRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressRangeInput() {
    return this._serviceAddressRange;
  }

  // service_secondary_range_name - computed: false, optional: true, required: false
  private _serviceSecondaryRangeName?: string; 
  public get serviceSecondaryRangeName() {
    return this.getStringAttribute('service_secondary_range_name');
  }
  public set serviceSecondaryRangeName(value: string) {
    this._serviceSecondaryRangeName = value;
  }
  public resetServiceSecondaryRangeName() {
    this._serviceSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSecondaryRangeNameInput() {
    return this._serviceSecondaryRangeName;
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // access - computed: false, optional: true, required: false
  private _access = new GkeClusterSpecConfigNetworkAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: GkeClusterSpecConfigNetworkAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // control_plane_authorized_network - computed: false, optional: true, required: false
  private _controlPlaneAuthorizedNetwork = new GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference(this, "control_plane_authorized_network");
  public get controlPlaneAuthorizedNetwork() {
    return this._controlPlaneAuthorizedNetwork;
  }
  public putControlPlaneAuthorizedNetwork(value: GkeClusterSpecConfigNetworkControlPlaneAuthorizedNetwork) {
    this._controlPlaneAuthorizedNetwork.internalValue = value;
  }
  public resetControlPlaneAuthorizedNetwork() {
    this._controlPlaneAuthorizedNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneAuthorizedNetworkInput() {
    return this._controlPlaneAuthorizedNetwork.internalValue;
  }
}
export interface GkeClusterSpecConfigNodePoolsAutoScaling {
  /**
  * Maximum number of nodes (per zone)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#max_nodes GkeCluster#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Minimum number of nodes (per zone)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#min_nodes GkeCluster#min_nodes}
  */
  readonly minNodes?: number;
}

export function gkeClusterSpecConfigNodePoolsAutoScalingToTerraform(struct?: GkeClusterSpecConfigNodePoolsAutoScalingOutputReference | GkeClusterSpecConfigNodePoolsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_nodes: cdktf.numberToTerraform(struct!.maxNodes),
    min_nodes: cdktf.numberToTerraform(struct!.minNodes),
  }
}


export function gkeClusterSpecConfigNodePoolsAutoScalingToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsAutoScalingOutputReference | GkeClusterSpecConfigNodePoolsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_nodes: {
      value: cdktf.numberToHclTerraform(struct!.maxNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_nodes: {
      value: cdktf.numberToHclTerraform(struct!.minNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodes = this._maxNodes;
    }
    if (this._minNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodes = this._minNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodes = undefined;
      this._minNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodes = value.maxNodes;
      this._minNodes = value.minNodes;
    }
  }

  // max_nodes - computed: false, optional: true, required: false
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  public resetMaxNodes() {
    this._maxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: false, optional: true, required: false
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  public resetMinNodes() {
    this._minNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
  }
}
export interface GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing {
  /**
  * The max number of clients that can share a physical GPU device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#max_shared_clients GkeCluster#max_shared_clients}
  */
  readonly maxSharedClients?: number;
  /**
  * The strategy to use for sharing GPUs . Example: Time-Sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#strategy GkeCluster#strategy}
  */
  readonly strategy?: string;
}

export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_shared_clients: cdktf.numberToTerraform(struct!.maxSharedClients),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_shared_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxSharedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSharedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClients = this._maxSharedClients;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSharedClients = undefined;
      this._strategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSharedClients = value.maxSharedClients;
      this._strategy = value.strategy;
    }
  }

  // max_shared_clients - computed: false, optional: true, required: false
  private _maxSharedClients?: number; 
  public get maxSharedClients() {
    return this.getNumberAttribute('max_shared_clients');
  }
  public set maxSharedClients(value: number) {
    this._maxSharedClients = value;
  }
  public resetMaxSharedClients() {
    this._maxSharedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsInput() {
    return this._maxSharedClients;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig {
  /**
  * The version of the GPU driver to install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#version GkeCluster#version}
  */
  readonly version?: string;
}

export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
    }
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
}
export interface GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation {
  /**
  * Choose how GPU drivers will be installed for GPU enabled VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#type GkeCluster#type}
  */
  readonly type?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#config GkeCluster#config}
  */
  readonly config?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig;
}

export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToTerraform(struct!.config),
  }
}


export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation): any {
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
      value: gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation | undefined {
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

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation | undefined) {
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

  // config - computed: false, optional: true, required: false
  private _config = new GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GkeClusterSpecConfigNodePoolsMachineConfigAccelerators {
  /**
  * Number of GPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#count GkeCluster#count}
  */
  readonly count?: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the guide - https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#gpu_partition_size GkeCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * GPU Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#type GkeCluster#type}
  */
  readonly type?: string;
  /**
  * accelerator_sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#accelerator_sharing GkeCluster#accelerator_sharing}
  */
  readonly acceleratorSharing?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing;
  /**
  * gpu_driver_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#gpu_driver_installation GkeCluster#gpu_driver_installation}
  */
  readonly gpuDriverInstallation?: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation;
}

export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsToTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
    accelerator_sharing: gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToTerraform(struct!.acceleratorSharing),
    gpu_driver_installation: gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToTerraform(struct!.gpuDriverInstallation),
  }
}


export function gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_partition_size: {
      value: cdktf.stringToHclTerraform(struct!.gpuPartitionSize),
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
    accelerator_sharing: {
      value: gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToHclTerraform(struct!.acceleratorSharing),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingList",
    },
    gpu_driver_installation: {
      value: gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToHclTerraform(struct!.gpuDriverInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._acceleratorSharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorSharing = this._acceleratorSharing?.internalValue;
    }
    if (this._gpuDriverInstallation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallation = this._gpuDriverInstallation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
      this._acceleratorSharing.internalValue = undefined;
      this._gpuDriverInstallation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
      this._acceleratorSharing.internalValue = value.acceleratorSharing;
      this._gpuDriverInstallation.internalValue = value.gpuDriverInstallation;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: false, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
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

  // accelerator_sharing - computed: false, optional: true, required: false
  private _acceleratorSharing = new GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference(this, "accelerator_sharing");
  public get acceleratorSharing() {
    return this._acceleratorSharing;
  }
  public putAcceleratorSharing(value: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing) {
    this._acceleratorSharing.internalValue = value;
  }
  public resetAcceleratorSharing() {
    this._acceleratorSharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorSharingInput() {
    return this._acceleratorSharing.internalValue;
  }

  // gpu_driver_installation - computed: false, optional: true, required: false
  private _gpuDriverInstallation = new GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference(this, "gpu_driver_installation");
  public get gpuDriverInstallation() {
    return this._gpuDriverInstallation;
  }
  public putGpuDriverInstallation(value: GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation) {
    this._gpuDriverInstallation.internalValue = value;
  }
  public resetGpuDriverInstallation() {
    this._gpuDriverInstallation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationInput() {
    return this._gpuDriverInstallation.internalValue;
  }
}

export class GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNodePoolsMachineConfigAccelerators[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsOutputReference {
    return new GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinity {
  /**
  * Type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#consume_reservation_type GkeCluster#consume_reservation_type}
  */
  readonly consumeReservationType?: string;
  /**
  * The name of the Reservation to be consumed. Only mandatory when consumeReservationType is set to specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#reservation_name GkeCluster#reservation_name}
  */
  readonly reservationName?: string;
}

export function gkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityToTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    reservation_name: cdktf.stringToTerraform(struct!.reservationName),
  }
}


export function gkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityOutputReference | GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeReservationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_name: {
      value: cdktf.stringToHclTerraform(struct!.reservationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._reservationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationName = this._reservationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._reservationName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._reservationName = value.reservationName;
    }
  }

  // consume_reservation_type - computed: false, optional: true, required: false
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  public resetConsumeReservationType() {
    this._consumeReservationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
  }

  // reservation_name - computed: false, optional: true, required: false
  private _reservationName?: string; 
  public get reservationName() {
    return this.getStringAttribute('reservation_name');
  }
  public set reservationName(value: string) {
    this._reservationName = value;
  }
  public resetReservationName() {
    this._reservationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationNameInput() {
    return this._reservationName;
  }
}
export interface GkeClusterSpecConfigNodePoolsMachineConfig {
  /**
  * Select Boot disk size. Boot disk size is permanent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#boot_disk_size GkeCluster#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Select Boot disk type. Storage space is less expensive for a standard persistent disk. An SSD persistent disk is better for random IOPS or for streaming throughput with low latency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#boot_disk_type GkeCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Choose which operating system image you want to run on each node of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#image_type GkeCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * Choose the machine type that will best fit the resource needs of your cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#machine_type GkeCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#accelerators GkeCluster#accelerators}
  */
  readonly accelerators?: GkeClusterSpecConfigNodePoolsMachineConfigAccelerators[] | cdktf.IResolvable;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#reservation_affinity GkeCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinity;
}

export function gkeClusterSpecConfigNodePoolsMachineConfigToTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigOutputReference | GkeClusterSpecConfigNodePoolsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    accelerators: cdktf.listMapper(gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsToTerraform, true)(struct!.accelerators),
    reservation_affinity: gkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityToTerraform(struct!.reservationAffinity),
  }
}


export function gkeClusterSpecConfigNodePoolsMachineConfigToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMachineConfigOutputReference | GkeClusterSpecConfigNodePoolsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accelerators: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsToHclTerraform, true)(struct!.accelerators),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsList",
    },
    reservation_affinity: {
      value: gkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSize = undefined;
      this._bootDiskType = undefined;
      this._imageType = undefined;
      this._machineType = undefined;
      this._accelerators.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSize = value.bootDiskSize;
      this._bootDiskType = value.bootDiskType;
      this._imageType = value.imageType;
      this._machineType = value.machineType;
      this._accelerators.internalValue = value.accelerators;
      this._reservationAffinity.internalValue = value.reservationAffinity;
    }
  }

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new GkeClusterSpecConfigNodePoolsMachineConfigAcceleratorsList(this, "accelerators", false);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: GkeClusterSpecConfigNodePoolsMachineConfigAccelerators[] | cdktf.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GkeClusterSpecConfigNodePoolsMachineConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }
}
export interface GkeClusterSpecConfigNodePoolsManagement {
  /**
  * Whether the nodes will be automatically upgraded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#auto_upgrade GkeCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function gkeClusterSpecConfigNodePoolsManagementToTerraform(struct?: GkeClusterSpecConfigNodePoolsManagementOutputReference | GkeClusterSpecConfigNodePoolsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function gkeClusterSpecConfigNodePoolsManagementToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsManagementOutputReference | GkeClusterSpecConfigNodePoolsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }
}
export interface GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata {
  /**
  * Key for this metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#key GkeCluster#key}
  */
  readonly key?: string;
  /**
  * Value for this metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#value GkeCluster#value}
  */
  readonly value?: string;
}

export function gkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataToTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable): any {
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

export class GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable | undefined) {
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

export class GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataOutputReference {
    return new GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels {
  /**
  * Key for this kubernetes label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#key GkeCluster#key}
  */
  readonly key?: string;
  /**
  * Value for this kubernetes lable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#value GkeCluster#value}
  */
  readonly value?: string;
}

export function gkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsToTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable): any {
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

export class GkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable | undefined) {
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

export class GkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsOutputReference {
    return new GkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigNodePoolsMetadataNodeTaints {
  /**
  * Available effects are NoSchedule, PreferNoSchedule, NoExecute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#effect GkeCluster#effect}
  */
  readonly effect?: string;
  /**
  * Key for this Taint effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#key GkeCluster#key}
  */
  readonly key?: string;
  /**
  * Value for this Taint effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#value GkeCluster#value}
  */
  readonly value?: string;
}

export function gkeClusterSpecConfigNodePoolsMetadataNodeTaintsToTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeClusterSpecConfigNodePoolsMetadataNodeTaintsToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GkeClusterSpecConfigNodePoolsMetadataNodeTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
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

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

export class GkeClusterSpecConfigNodePoolsMetadataNodeTaintsList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNodePoolsMetadataNodeTaints[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNodePoolsMetadataNodeTaintsOutputReference {
    return new GkeClusterSpecConfigNodePoolsMetadataNodeTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigNodePoolsMetadata {
  /**
  * gce_instance_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#gce_instance_metadata GkeCluster#gce_instance_metadata}
  */
  readonly gceInstanceMetadata?: GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata[] | cdktf.IResolvable;
  /**
  * kubernetes_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#kubernetes_labels GkeCluster#kubernetes_labels}
  */
  readonly kubernetesLabels?: GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels[] | cdktf.IResolvable;
  /**
  * node_taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#node_taints GkeCluster#node_taints}
  */
  readonly nodeTaints?: GkeClusterSpecConfigNodePoolsMetadataNodeTaints[] | cdktf.IResolvable;
}

export function gkeClusterSpecConfigNodePoolsMetadataToTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataOutputReference | GkeClusterSpecConfigNodePoolsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gce_instance_metadata: cdktf.listMapper(gkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataToTerraform, true)(struct!.gceInstanceMetadata),
    kubernetes_labels: cdktf.listMapper(gkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsToTerraform, true)(struct!.kubernetesLabels),
    node_taints: cdktf.listMapper(gkeClusterSpecConfigNodePoolsMetadataNodeTaintsToTerraform, true)(struct!.nodeTaints),
  }
}


export function gkeClusterSpecConfigNodePoolsMetadataToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsMetadataOutputReference | GkeClusterSpecConfigNodePoolsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gce_instance_metadata: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataToHclTerraform, true)(struct!.gceInstanceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataList",
    },
    kubernetes_labels: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsToHclTerraform, true)(struct!.kubernetesLabels),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsList",
    },
    node_taints: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNodePoolsMetadataNodeTaintsToHclTerraform, true)(struct!.nodeTaints),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMetadataNodeTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gceInstanceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceInstanceMetadata = this._gceInstanceMetadata?.internalValue;
    }
    if (this._kubernetesLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesLabels = this._kubernetesLabels?.internalValue;
    }
    if (this._nodeTaints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaints = this._nodeTaints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gceInstanceMetadata.internalValue = undefined;
      this._kubernetesLabels.internalValue = undefined;
      this._nodeTaints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gceInstanceMetadata.internalValue = value.gceInstanceMetadata;
      this._kubernetesLabels.internalValue = value.kubernetesLabels;
      this._nodeTaints.internalValue = value.nodeTaints;
    }
  }

  // gce_instance_metadata - computed: false, optional: true, required: false
  private _gceInstanceMetadata = new GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadataList(this, "gce_instance_metadata", false);
  public get gceInstanceMetadata() {
    return this._gceInstanceMetadata;
  }
  public putGceInstanceMetadata(value: GkeClusterSpecConfigNodePoolsMetadataGceInstanceMetadata[] | cdktf.IResolvable) {
    this._gceInstanceMetadata.internalValue = value;
  }
  public resetGceInstanceMetadata() {
    this._gceInstanceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceInstanceMetadataInput() {
    return this._gceInstanceMetadata.internalValue;
  }

  // kubernetes_labels - computed: false, optional: true, required: false
  private _kubernetesLabels = new GkeClusterSpecConfigNodePoolsMetadataKubernetesLabelsList(this, "kubernetes_labels", false);
  public get kubernetesLabels() {
    return this._kubernetesLabels;
  }
  public putKubernetesLabels(value: GkeClusterSpecConfigNodePoolsMetadataKubernetesLabels[] | cdktf.IResolvable) {
    this._kubernetesLabels.internalValue = value;
  }
  public resetKubernetesLabels() {
    this._kubernetesLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesLabelsInput() {
    return this._kubernetesLabels.internalValue;
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints = new GkeClusterSpecConfigNodePoolsMetadataNodeTaintsList(this, "node_taints", false);
  public get nodeTaints() {
    return this._nodeTaints;
  }
  public putNodeTaints(value: GkeClusterSpecConfigNodePoolsMetadataNodeTaints[] | cdktf.IResolvable) {
    this._nodeTaints.internalValue = value;
  }
  public resetNodeTaints() {
    this._nodeTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints.internalValue;
  }
}
export interface GkeClusterSpecConfigNodePoolsNetworking {
  /**
  * This value is used to optimize the partitioning of cluster's IP address range to sub-ranges at node level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#max_pods_per_node GkeCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * This value is used to optimize the partitioning of cluster's IP address range to sub-ranges at node level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#network_tags GkeCluster#network_tags}
  */
  readonly networkTags?: string[];
}

export function gkeClusterSpecConfigNodePoolsNetworkingToTerraform(struct?: GkeClusterSpecConfigNodePoolsNetworkingOutputReference | GkeClusterSpecConfigNodePoolsNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
  }
}


export function gkeClusterSpecConfigNodePoolsNetworkingToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsNetworkingOutputReference | GkeClusterSpecConfigNodePoolsNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPodsPerNode = undefined;
      this._networkTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._networkTags = value.networkTags;
    }
  }

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags?: string[]; 
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  public resetNetworkTags() {
    this._networkTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
  }
}
export interface GkeClusterSpecConfigNodePoolsNodeLocations {
  /**
  * Enable providing node locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enabled GkeCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of zones. Additional node zones must be from the same region as the original zone. Kubernetes Engine allocates the same resource footprint for each zone. The Node pool setting overrides the defaults set in Cluster basics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#zones GkeCluster#zones}
  */
  readonly zones?: string[];
}

export function gkeClusterSpecConfigNodePoolsNodeLocationsToTerraform(struct?: GkeClusterSpecConfigNodePoolsNodeLocationsOutputReference | GkeClusterSpecConfigNodePoolsNodeLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function gkeClusterSpecConfigNodePoolsNodeLocationsToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsNodeLocationsOutputReference | GkeClusterSpecConfigNodePoolsNodeLocations): any {
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
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsNodeLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsNodeLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsNodeLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._zones = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._zones = value.zones;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface GkeClusterSpecConfigNodePoolsSecurity {
  /**
  * Integrity monitoring lets you monitor and verify the runtime boot integrity of your shielded nodes using Cloud Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_integrity_monitoring GkeCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Secure boot helps protect your nodes against boot-level and kernel-level malware and rootkits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_secure_boot GkeCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function gkeClusterSpecConfigNodePoolsSecurityToTerraform(struct?: GkeClusterSpecConfigNodePoolsSecurityOutputReference | GkeClusterSpecConfigNodePoolsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function gkeClusterSpecConfigNodePoolsSecurityToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsSecurityOutputReference | GkeClusterSpecConfigNodePoolsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GkeClusterSpecConfigNodePoolsUpgradeSettingsConfig {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#batch_node_count GkeCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Soak time after each batch gets drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#batch_soak_duration GkeCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
  /**
  * The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#max_surge GkeCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#max_unavailable GkeCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#node_pool_soak_duration GkeCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
}

export function gkeClusterSpecConfigNodePoolsUpgradeSettingsConfigToTerraform(struct?: GkeClusterSpecConfigNodePoolsUpgradeSettingsConfigOutputReference | GkeClusterSpecConfigNodePoolsUpgradeSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktf.numberToTerraform(struct!.batchNodeCount),
    batch_soak_duration: cdktf.stringToTerraform(struct!.batchSoakDuration),
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    node_pool_soak_duration: cdktf.stringToTerraform(struct!.nodePoolSoakDuration),
  }
}


export function gkeClusterSpecConfigNodePoolsUpgradeSettingsConfigToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsUpgradeSettingsConfigOutputReference | GkeClusterSpecConfigNodePoolsUpgradeSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktf.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_pool_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsUpgradeSettingsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsUpgradeSettingsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsUpgradeSettingsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchSoakDuration = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._nodePoolSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchSoakDuration = value.batchSoakDuration;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
    }
  }

  // batch_node_count - computed: false, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_soak_duration - computed: false, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // node_pool_soak_duration - computed: false, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }
}
export interface GkeClusterSpecConfigNodePoolsUpgradeSettings {
  /**
  * Update strategy of the node pool. Possible values are SURGE and BLUE_GREEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#strategy GkeCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#config GkeCluster#config}
  */
  readonly config?: GkeClusterSpecConfigNodePoolsUpgradeSettingsConfig;
}

export function gkeClusterSpecConfigNodePoolsUpgradeSettingsToTerraform(struct?: GkeClusterSpecConfigNodePoolsUpgradeSettingsOutputReference | GkeClusterSpecConfigNodePoolsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    config: gkeClusterSpecConfigNodePoolsUpgradeSettingsConfigToTerraform(struct!.config),
  }
}


export function gkeClusterSpecConfigNodePoolsUpgradeSettingsToHclTerraform(struct?: GkeClusterSpecConfigNodePoolsUpgradeSettingsOutputReference | GkeClusterSpecConfigNodePoolsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: gkeClusterSpecConfigNodePoolsUpgradeSettingsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsUpgradeSettingsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigNodePoolsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePoolsUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategy = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategy = value.strategy;
      this._config.internalValue = value.config;
    }
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GkeClusterSpecConfigNodePoolsUpgradeSettingsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GkeClusterSpecConfigNodePoolsUpgradeSettingsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GkeClusterSpecConfigNodePools {
  /**
  * Node pool names must start with a lowercase letter followed by up to 39 lowercase letters, numbers, or hyphens. They can't end with a hyphen. You cannot change the node pool's name once it's created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name?: string;
  /**
  * Specify Node k8s version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#node_version GkeCluster#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * Labels are key-value pairs that are attached to GKE clusters. Labels can be used to group clusters and filter them in the UI or API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#resource_labels GkeCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * Pod address range limits the maximum size of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#size GkeCluster#size}
  */
  readonly size?: number;
  /**
  * auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#auto_scaling GkeCluster#auto_scaling}
  */
  readonly autoScaling?: GkeClusterSpecConfigNodePoolsAutoScaling;
  /**
  * machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#machine_config GkeCluster#machine_config}
  */
  readonly machineConfig?: GkeClusterSpecConfigNodePoolsMachineConfig;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#management GkeCluster#management}
  */
  readonly management?: GkeClusterSpecConfigNodePoolsManagement;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#metadata GkeCluster#metadata}
  */
  readonly metadata?: GkeClusterSpecConfigNodePoolsMetadata;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#networking GkeCluster#networking}
  */
  readonly networking?: GkeClusterSpecConfigNodePoolsNetworking;
  /**
  * node_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#node_locations GkeCluster#node_locations}
  */
  readonly nodeLocations?: GkeClusterSpecConfigNodePoolsNodeLocations;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#security GkeCluster#security}
  */
  readonly security?: GkeClusterSpecConfigNodePoolsSecurity;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#upgrade_settings GkeCluster#upgrade_settings}
  */
  readonly upgradeSettings?: GkeClusterSpecConfigNodePoolsUpgradeSettings;
}

export function gkeClusterSpecConfigNodePoolsToTerraform(struct?: GkeClusterSpecConfigNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_version: cdktf.stringToTerraform(struct!.nodeVersion),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    size: cdktf.numberToTerraform(struct!.size),
    auto_scaling: gkeClusterSpecConfigNodePoolsAutoScalingToTerraform(struct!.autoScaling),
    machine_config: gkeClusterSpecConfigNodePoolsMachineConfigToTerraform(struct!.machineConfig),
    management: gkeClusterSpecConfigNodePoolsManagementToTerraform(struct!.management),
    metadata: gkeClusterSpecConfigNodePoolsMetadataToTerraform(struct!.metadata),
    networking: gkeClusterSpecConfigNodePoolsNetworkingToTerraform(struct!.networking),
    node_locations: gkeClusterSpecConfigNodePoolsNodeLocationsToTerraform(struct!.nodeLocations),
    security: gkeClusterSpecConfigNodePoolsSecurityToTerraform(struct!.security),
    upgrade_settings: gkeClusterSpecConfigNodePoolsUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function gkeClusterSpecConfigNodePoolsToHclTerraform(struct?: GkeClusterSpecConfigNodePools | cdktf.IResolvable): any {
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
    node_version: {
      value: cdktf.stringToHclTerraform(struct!.nodeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_scaling: {
      value: gkeClusterSpecConfigNodePoolsAutoScalingToHclTerraform(struct!.autoScaling),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsAutoScalingList",
    },
    machine_config: {
      value: gkeClusterSpecConfigNodePoolsMachineConfigToHclTerraform(struct!.machineConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMachineConfigList",
    },
    management: {
      value: gkeClusterSpecConfigNodePoolsManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsManagementList",
    },
    metadata: {
      value: gkeClusterSpecConfigNodePoolsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsMetadataList",
    },
    networking: {
      value: gkeClusterSpecConfigNodePoolsNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsNetworkingList",
    },
    node_locations: {
      value: gkeClusterSpecConfigNodePoolsNodeLocationsToHclTerraform(struct!.nodeLocations),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsNodeLocationsList",
    },
    security: {
      value: gkeClusterSpecConfigNodePoolsSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsSecurityList",
    },
    upgrade_settings: {
      value: gkeClusterSpecConfigNodePoolsUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfigNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVersion = this._nodeVersion;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._autoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling?.internalValue;
    }
    if (this._machineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineConfig = this._machineConfig?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    if (this._nodeLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocations = this._nodeLocations?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nodeVersion = undefined;
      this._resourceLabels = undefined;
      this._size = undefined;
      this._autoScaling.internalValue = undefined;
      this._machineConfig.internalValue = undefined;
      this._management.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._networking.internalValue = undefined;
      this._nodeLocations.internalValue = undefined;
      this._security.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nodeVersion = value.nodeVersion;
      this._resourceLabels = value.resourceLabels;
      this._size = value.size;
      this._autoScaling.internalValue = value.autoScaling;
      this._machineConfig.internalValue = value.machineConfig;
      this._management.internalValue = value.management;
      this._metadata.internalValue = value.metadata;
      this._networking.internalValue = value.networking;
      this._nodeLocations.internalValue = value.nodeLocations;
      this._security.internalValue = value.security;
      this._upgradeSettings.internalValue = value.upgradeSettings;
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

  // node_version - computed: false, optional: true, required: false
  private _nodeVersion?: string; 
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }
  public set nodeVersion(value: string) {
    this._nodeVersion = value;
  }
  public resetNodeVersion() {
    this._nodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVersionInput() {
    return this._nodeVersion;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // auto_scaling - computed: false, optional: true, required: false
  private _autoScaling = new GkeClusterSpecConfigNodePoolsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: GkeClusterSpecConfigNodePoolsAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  public resetAutoScaling() {
    this._autoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }

  // machine_config - computed: false, optional: true, required: false
  private _machineConfig = new GkeClusterSpecConfigNodePoolsMachineConfigOutputReference(this, "machine_config");
  public get machineConfig() {
    return this._machineConfig;
  }
  public putMachineConfig(value: GkeClusterSpecConfigNodePoolsMachineConfig) {
    this._machineConfig.internalValue = value;
  }
  public resetMachineConfig() {
    this._machineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConfigInput() {
    return this._machineConfig.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new GkeClusterSpecConfigNodePoolsManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GkeClusterSpecConfigNodePoolsManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new GkeClusterSpecConfigNodePoolsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: GkeClusterSpecConfigNodePoolsMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new GkeClusterSpecConfigNodePoolsNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: GkeClusterSpecConfigNodePoolsNetworking) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // node_locations - computed: false, optional: true, required: false
  private _nodeLocations = new GkeClusterSpecConfigNodePoolsNodeLocationsOutputReference(this, "node_locations");
  public get nodeLocations() {
    return this._nodeLocations;
  }
  public putNodeLocations(value: GkeClusterSpecConfigNodePoolsNodeLocations) {
    this._nodeLocations.internalValue = value;
  }
  public resetNodeLocations() {
    this._nodeLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new GkeClusterSpecConfigNodePoolsSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: GkeClusterSpecConfigNodePoolsSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new GkeClusterSpecConfigNodePoolsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GkeClusterSpecConfigNodePoolsUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}

export class GkeClusterSpecConfigNodePoolsList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfigNodePools[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigNodePoolsOutputReference {
    return new GkeClusterSpecConfigNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecConfigSecurity {
  /**
  * Google Groups for RBAC allows you to grant roles to all members of a Google Workspace group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_google_groups_for_rbac GkeCluster#enable_google_groups_for_rbac}
  */
  readonly enableGoogleGroupsForRbac?: boolean | cdktf.IResolvable;
  /**
  * Enable legacy authorization to support in-cluster permissions for existing clusters or workflows. Prevents full RBAC support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_legacy_authorization GkeCluster#enable_legacy_authorization}
  */
  readonly enableLegacyAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Workload Identity lets you connect securely to Google APIs from Kubernetes Engine workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enable_workload_identity GkeCluster#enable_workload_identity}
  */
  readonly enableWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Clients use this base64-encoded public certificate to authenticate to the cluster endpoint. Certificates don’t rotate automatically and are difficult to revoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#issue_client_certificate GkeCluster#issue_client_certificate}
  */
  readonly issueClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Provide the security groups here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#security_group GkeCluster#security_group}
  */
  readonly securityGroup?: string;
}

export function gkeClusterSpecConfigSecurityToTerraform(struct?: GkeClusterSpecConfigSecurityOutputReference | GkeClusterSpecConfigSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_google_groups_for_rbac: cdktf.booleanToTerraform(struct!.enableGoogleGroupsForRbac),
    enable_legacy_authorization: cdktf.booleanToTerraform(struct!.enableLegacyAuthorization),
    enable_workload_identity: cdktf.booleanToTerraform(struct!.enableWorkloadIdentity),
    issue_client_certificate: cdktf.booleanToTerraform(struct!.issueClientCertificate),
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
  }
}


export function gkeClusterSpecConfigSecurityToHclTerraform(struct?: GkeClusterSpecConfigSecurityOutputReference | GkeClusterSpecConfigSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_google_groups_for_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableGoogleGroupsForRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_legacy_authorization: {
      value: cdktf.booleanToHclTerraform(struct!.enableLegacyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_workload_identity: {
      value: cdktf.booleanToHclTerraform(struct!.enableWorkloadIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issue_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.issueClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecConfigSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGoogleGroupsForRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGoogleGroupsForRbac = this._enableGoogleGroupsForRbac;
    }
    if (this._enableLegacyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLegacyAuthorization = this._enableLegacyAuthorization;
    }
    if (this._enableWorkloadIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWorkloadIdentity = this._enableWorkloadIdentity;
    }
    if (this._issueClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueClientCertificate = this._issueClientCertificate;
    }
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfigSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableGoogleGroupsForRbac = undefined;
      this._enableLegacyAuthorization = undefined;
      this._enableWorkloadIdentity = undefined;
      this._issueClientCertificate = undefined;
      this._securityGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableGoogleGroupsForRbac = value.enableGoogleGroupsForRbac;
      this._enableLegacyAuthorization = value.enableLegacyAuthorization;
      this._enableWorkloadIdentity = value.enableWorkloadIdentity;
      this._issueClientCertificate = value.issueClientCertificate;
      this._securityGroup = value.securityGroup;
    }
  }

  // enable_google_groups_for_rbac - computed: false, optional: true, required: false
  private _enableGoogleGroupsForRbac?: boolean | cdktf.IResolvable; 
  public get enableGoogleGroupsForRbac() {
    return this.getBooleanAttribute('enable_google_groups_for_rbac');
  }
  public set enableGoogleGroupsForRbac(value: boolean | cdktf.IResolvable) {
    this._enableGoogleGroupsForRbac = value;
  }
  public resetEnableGoogleGroupsForRbac() {
    this._enableGoogleGroupsForRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGoogleGroupsForRbacInput() {
    return this._enableGoogleGroupsForRbac;
  }

  // enable_legacy_authorization - computed: false, optional: true, required: false
  private _enableLegacyAuthorization?: boolean | cdktf.IResolvable; 
  public get enableLegacyAuthorization() {
    return this.getBooleanAttribute('enable_legacy_authorization');
  }
  public set enableLegacyAuthorization(value: boolean | cdktf.IResolvable) {
    this._enableLegacyAuthorization = value;
  }
  public resetEnableLegacyAuthorization() {
    this._enableLegacyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyAuthorizationInput() {
    return this._enableLegacyAuthorization;
  }

  // enable_workload_identity - computed: false, optional: true, required: false
  private _enableWorkloadIdentity?: boolean | cdktf.IResolvable; 
  public get enableWorkloadIdentity() {
    return this.getBooleanAttribute('enable_workload_identity');
  }
  public set enableWorkloadIdentity(value: boolean | cdktf.IResolvable) {
    this._enableWorkloadIdentity = value;
  }
  public resetEnableWorkloadIdentity() {
    this._enableWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWorkloadIdentityInput() {
    return this._enableWorkloadIdentity;
  }

  // issue_client_certificate - computed: false, optional: true, required: false
  private _issueClientCertificate?: boolean | cdktf.IResolvable; 
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }
  public set issueClientCertificate(value: boolean | cdktf.IResolvable) {
    this._issueClientCertificate = value;
  }
  public resetIssueClientCertificate() {
    this._issueClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueClientCertificateInput() {
    return this._issueClientCertificate;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }
}
export interface GkeClusterSpecConfig {
  /**
  * Kubernetes version of ControlPlane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#control_plane_version GkeCluster#control_plane_version}
  */
  readonly controlPlaneVersion?: string;
  /**
  * GCP Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#gcp_project GkeCluster#gcp_project}
  */
  readonly gcpProject?: string;
  /**
  * Commands will be executed every time Cluster nodes come up. Example: Node Creation, Node Restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#pre_bootstrap_commands GkeCluster#pre_bootstrap_commands}
  */
  readonly preBootstrapCommands?: string[];
  /**
  * Labels are key-value pairs that are attached to GKE clusters. Labels can be used to group clusters and filter them in the UI or API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#resource_labels GkeCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#features GkeCluster#features}
  */
  readonly features?: GkeClusterSpecConfigFeatures;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#location GkeCluster#location}
  */
  readonly location?: GkeClusterSpecConfigLocation;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#network GkeCluster#network}
  */
  readonly network?: GkeClusterSpecConfigNetwork;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#node_pools GkeCluster#node_pools}
  */
  readonly nodePools?: GkeClusterSpecConfigNodePools[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#security GkeCluster#security}
  */
  readonly security?: GkeClusterSpecConfigSecurity;
}

export function gkeClusterSpecConfigToTerraform(struct?: GkeClusterSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_version: cdktf.stringToTerraform(struct!.controlPlaneVersion),
    gcp_project: cdktf.stringToTerraform(struct!.gcpProject),
    pre_bootstrap_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preBootstrapCommands),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    features: gkeClusterSpecConfigFeaturesToTerraform(struct!.features),
    location: gkeClusterSpecConfigLocationToTerraform(struct!.location),
    network: gkeClusterSpecConfigNetworkToTerraform(struct!.network),
    node_pools: cdktf.listMapper(gkeClusterSpecConfigNodePoolsToTerraform, true)(struct!.nodePools),
    security: gkeClusterSpecConfigSecurityToTerraform(struct!.security),
  }
}


export function gkeClusterSpecConfigToHclTerraform(struct?: GkeClusterSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_version: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_project: {
      value: cdktf.stringToHclTerraform(struct!.gcpProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_bootstrap_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preBootstrapCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    features: {
      value: gkeClusterSpecConfigFeaturesToHclTerraform(struct!.features),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigFeaturesList",
    },
    location: {
      value: gkeClusterSpecConfigLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigLocationList",
    },
    network: {
      value: gkeClusterSpecConfigNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNetworkList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigNodePoolsList",
    },
    security: {
      value: gkeClusterSpecConfigSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneVersion = this._controlPlaneVersion;
    }
    if (this._gcpProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProject = this._gcpProject;
    }
    if (this._preBootstrapCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.preBootstrapCommands = this._preBootstrapCommands;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneVersion = undefined;
      this._gcpProject = undefined;
      this._preBootstrapCommands = undefined;
      this._resourceLabels = undefined;
      this._features.internalValue = undefined;
      this._location.internalValue = undefined;
      this._network.internalValue = undefined;
      this._nodePools.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneVersion = value.controlPlaneVersion;
      this._gcpProject = value.gcpProject;
      this._preBootstrapCommands = value.preBootstrapCommands;
      this._resourceLabels = value.resourceLabels;
      this._features.internalValue = value.features;
      this._location.internalValue = value.location;
      this._network.internalValue = value.network;
      this._nodePools.internalValue = value.nodePools;
      this._security.internalValue = value.security;
    }
  }

  // control_plane_version - computed: false, optional: true, required: false
  private _controlPlaneVersion?: string; 
  public get controlPlaneVersion() {
    return this.getStringAttribute('control_plane_version');
  }
  public set controlPlaneVersion(value: string) {
    this._controlPlaneVersion = value;
  }
  public resetControlPlaneVersion() {
    this._controlPlaneVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVersionInput() {
    return this._controlPlaneVersion;
  }

  // gcp_project - computed: false, optional: true, required: false
  private _gcpProject?: string; 
  public get gcpProject() {
    return this.getStringAttribute('gcp_project');
  }
  public set gcpProject(value: string) {
    this._gcpProject = value;
  }
  public resetGcpProject() {
    this._gcpProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectInput() {
    return this._gcpProject;
  }

  // pre_bootstrap_commands - computed: false, optional: true, required: false
  private _preBootstrapCommands?: string[]; 
  public get preBootstrapCommands() {
    return this.getListAttribute('pre_bootstrap_commands');
  }
  public set preBootstrapCommands(value: string[]) {
    this._preBootstrapCommands = value;
  }
  public resetPreBootstrapCommands() {
    this._preBootstrapCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBootstrapCommandsInput() {
    return this._preBootstrapCommands;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // features - computed: false, optional: true, required: false
  private _features = new GkeClusterSpecConfigFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: GkeClusterSpecConfigFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GkeClusterSpecConfigLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: GkeClusterSpecConfigLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new GkeClusterSpecConfigNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: GkeClusterSpecConfigNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new GkeClusterSpecConfigNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: GkeClusterSpecConfigNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new GkeClusterSpecConfigSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: GkeClusterSpecConfigSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}

export class GkeClusterSpecConfigList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecConfig[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecConfigOutputReference {
    return new GkeClusterSpecConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#allow_insecure_bootstrap GkeCluster#allow_insecure_bootstrap}
  */
  readonly allowInsecureBootstrap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#bootstrap_ca GkeCluster#bootstrap_ca}
  */
  readonly bootstrapCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enabled GkeCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#http_proxy GkeCluster#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#https_proxy GkeCluster#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#no_proxy GkeCluster#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#proxy_auth GkeCluster#proxy_auth}
  */
  readonly proxyAuth?: string;
}

export function gkeClusterSpecProxyToTerraform(struct?: GkeClusterSpecProxyOutputReference | GkeClusterSpecProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_bootstrap: cdktf.booleanToTerraform(struct!.allowInsecureBootstrap),
    bootstrap_ca: cdktf.stringToTerraform(struct!.bootstrapCa),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_auth: cdktf.stringToTerraform(struct!.proxyAuth),
  }
}


export function gkeClusterSpecProxyToHclTerraform(struct?: GkeClusterSpecProxyOutputReference | GkeClusterSpecProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_bootstrap: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureBootstrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bootstrap_ca: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapCa),
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
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_auth: {
      value: cdktf.stringToHclTerraform(struct!.proxyAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureBootstrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureBootstrap = this._allowInsecureBootstrap;
    }
    if (this._bootstrapCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapCa = this._bootstrapCa;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._proxyAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAuth = this._proxyAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecureBootstrap = undefined;
      this._bootstrapCa = undefined;
      this._enabled = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._proxyAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecureBootstrap = value.allowInsecureBootstrap;
      this._bootstrapCa = value.bootstrapCa;
      this._enabled = value.enabled;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._proxyAuth = value.proxyAuth;
    }
  }

  // allow_insecure_bootstrap - computed: false, optional: true, required: false
  private _allowInsecureBootstrap?: boolean | cdktf.IResolvable; 
  public get allowInsecureBootstrap() {
    return this.getBooleanAttribute('allow_insecure_bootstrap');
  }
  public set allowInsecureBootstrap(value: boolean | cdktf.IResolvable) {
    this._allowInsecureBootstrap = value;
  }
  public resetAllowInsecureBootstrap() {
    this._allowInsecureBootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureBootstrapInput() {
    return this._allowInsecureBootstrap;
  }

  // bootstrap_ca - computed: false, optional: true, required: false
  private _bootstrapCa?: string; 
  public get bootstrapCa() {
    return this.getStringAttribute('bootstrap_ca');
  }
  public set bootstrapCa(value: string) {
    this._bootstrapCa = value;
  }
  public resetBootstrapCa() {
    this._bootstrapCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapCaInput() {
    return this._bootstrapCa;
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

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // proxy_auth - computed: false, optional: true, required: false
  private _proxyAuth?: string; 
  public get proxyAuth() {
    return this.getStringAttribute('proxy_auth');
  }
  public set proxyAuth(value: string) {
    this._proxyAuth = value;
  }
  public resetProxyAuth() {
    this._proxyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthInput() {
    return this._proxyAuth;
  }
}
export interface GkeClusterSpecSharingProjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name?: string;
}

export function gkeClusterSpecSharingProjectsToTerraform(struct?: GkeClusterSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gkeClusterSpecSharingProjectsToHclTerraform(struct?: GkeClusterSpecSharingProjects | cdktf.IResolvable): any {
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

export class GkeClusterSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpecSharingProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecSharingProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class GkeClusterSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecSharingProjectsOutputReference {
    return new GkeClusterSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterSpecSharing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#enabled GkeCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#projects GkeCluster#projects}
  */
  readonly projects?: GkeClusterSpecSharingProjects[] | cdktf.IResolvable;
}

export function gkeClusterSpecSharingToTerraform(struct?: GkeClusterSpecSharingOutputReference | GkeClusterSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(gkeClusterSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function gkeClusterSpecSharingToHclTerraform(struct?: GkeClusterSpecSharingOutputReference | GkeClusterSpecSharing): any {
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
    projects: {
      value: cdktf.listMapperHcl(gkeClusterSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "GkeClusterSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeClusterSpecSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpecSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._projects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._projects.internalValue = value.projects;
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

  // projects - computed: false, optional: true, required: false
  private _projects = new GkeClusterSpecSharingProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: GkeClusterSpecSharingProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface GkeClusterSpec {
  /**
  * The credentials to be used to interact with the cloud infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#cloud_credentials GkeCluster#cloud_credentials}
  */
  readonly cloudCredentials?: string;
  /**
  * The type of the cluster this spec corresponds to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#type GkeCluster#type}
  */
  readonly type?: string;
  /**
  * blueprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#blueprint GkeCluster#blueprint}
  */
  readonly blueprint?: GkeClusterSpecBlueprint;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#config GkeCluster#config}
  */
  readonly config?: GkeClusterSpecConfig[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#proxy GkeCluster#proxy}
  */
  readonly proxy?: GkeClusterSpecProxy;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#sharing GkeCluster#sharing}
  */
  readonly sharing?: GkeClusterSpecSharing;
}

export function gkeClusterSpecToTerraform(struct?: GkeClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_credentials: cdktf.stringToTerraform(struct!.cloudCredentials),
    type: cdktf.stringToTerraform(struct!.type),
    blueprint: gkeClusterSpecBlueprintToTerraform(struct!.blueprint),
    config: cdktf.listMapper(gkeClusterSpecConfigToTerraform, true)(struct!.config),
    proxy: gkeClusterSpecProxyToTerraform(struct!.proxy),
    sharing: gkeClusterSpecSharingToTerraform(struct!.sharing),
  }
}


export function gkeClusterSpecToHclTerraform(struct?: GkeClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_credentials: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentials),
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
    blueprint: {
      value: gkeClusterSpecBlueprintToHclTerraform(struct!.blueprint),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecBlueprintList",
    },
    config: {
      value: cdktf.listMapperHcl(gkeClusterSpecConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecConfigList",
    },
    proxy: {
      value: gkeClusterSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecProxyList",
    },
    sharing: {
      value: gkeClusterSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "GkeClusterSpecSharingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeClusterSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentials = this._cloudCredentials;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._blueprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredentials = undefined;
      this._type = undefined;
      this._blueprint.internalValue = undefined;
      this._config.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._sharing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredentials = value.cloudCredentials;
      this._type = value.type;
      this._blueprint.internalValue = value.blueprint;
      this._config.internalValue = value.config;
      this._proxy.internalValue = value.proxy;
      this._sharing.internalValue = value.sharing;
    }
  }

  // cloud_credentials - computed: false, optional: true, required: false
  private _cloudCredentials?: string; 
  public get cloudCredentials() {
    return this.getStringAttribute('cloud_credentials');
  }
  public set cloudCredentials(value: string) {
    this._cloudCredentials = value;
  }
  public resetCloudCredentials() {
    this._cloudCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsInput() {
    return this._cloudCredentials;
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

  // blueprint - computed: false, optional: true, required: false
  private _blueprint = new GkeClusterSpecBlueprintOutputReference(this, "blueprint");
  public get blueprint() {
    return this._blueprint;
  }
  public putBlueprint(value: GkeClusterSpecBlueprint) {
    this._blueprint.internalValue = value;
  }
  public resetBlueprint() {
    this._blueprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GkeClusterSpecConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: GkeClusterSpecConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new GkeClusterSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: GkeClusterSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new GkeClusterSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: GkeClusterSpecSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }
}

export class GkeClusterSpecList extends cdktf.ComplexList {
  public internalValue? : GkeClusterSpec[] | cdktf.IResolvable

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
  public get(index: number): GkeClusterSpecOutputReference {
    return new GkeClusterSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#create GkeCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#delete GkeCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#update GkeCluster#update}
  */
  readonly update?: string;
}

export function gkeClusterTimeoutsToTerraform(struct?: GkeClusterTimeouts | cdktf.IResolvable): any {
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


export function gkeClusterTimeoutsToHclTerraform(struct?: GkeClusterTimeouts | cdktf.IResolvable): any {
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

export class GkeClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster rafay_gke_cluster}
*/
export class GkeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_gke_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeCluster to import
  * @param importFromId The id of the existing GkeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_gke_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/gke_cluster rafay_gke_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GkeClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_gke_cluster',
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
    this._apiVersion = config.apiVersion;
    this._id = config.id;
    this._kind = config.kind;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new GkeClusterMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: GkeClusterMetadata) {
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
  private _spec = new GkeClusterSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GkeClusterSpec[] | cdktf.IResolvable) {
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
  private _timeouts = new GkeClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeClusterTimeouts) {
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      metadata: gkeClusterMetadataToTerraform(this._metadata.internalValue),
      spec: cdktf.listMapper(gkeClusterSpecToTerraform, true)(this._spec.internalValue),
      timeouts: gkeClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: gkeClusterMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeClusterMetadataList",
      },
      spec: {
        value: cdktf.listMapperHcl(gkeClusterSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeClusterSpecList",
      },
      timeouts: {
        value: gkeClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
