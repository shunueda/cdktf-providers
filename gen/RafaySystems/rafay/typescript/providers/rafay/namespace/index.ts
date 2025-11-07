// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * impersonate user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#impersonate Namespace#impersonate}
  */
  readonly impersonate?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#metadata Namespace#metadata}
  */
  readonly metadata?: NamespaceMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#spec Namespace#spec}
  */
  readonly spec?: NamespaceSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#timeouts Namespace#timeouts}
  */
  readonly timeouts?: NamespaceTimeouts;
}
export interface NamespaceMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#is_sso_user Namespace#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#username Namespace#username}
  */
  readonly username?: string;
}

export function namespaceMetadataCreatedByToTerraform(struct?: NamespaceMetadataCreatedByOutputReference | NamespaceMetadataCreatedBy): any {
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


export function namespaceMetadataCreatedByToHclTerraform(struct?: NamespaceMetadataCreatedByOutputReference | NamespaceMetadataCreatedBy): any {
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

export class NamespaceMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceMetadataCreatedBy | undefined {
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

  public set internalValue(value: NamespaceMetadataCreatedBy | undefined) {
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
export interface NamespaceMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#is_sso_user Namespace#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#username Namespace#username}
  */
  readonly username?: string;
}

export function namespaceMetadataModifiedByToTerraform(struct?: NamespaceMetadataModifiedByOutputReference | NamespaceMetadataModifiedBy): any {
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


export function namespaceMetadataModifiedByToHclTerraform(struct?: NamespaceMetadataModifiedByOutputReference | NamespaceMetadataModifiedBy): any {
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

export class NamespaceMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceMetadataModifiedBy | undefined {
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

  public set internalValue(value: NamespaceMetadataModifiedBy | undefined) {
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
export interface NamespaceMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#annotations Namespace#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#display_name Namespace#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#labels Namespace#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#name Namespace#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#project Namespace#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#created_by Namespace#created_by}
  */
  readonly createdBy?: NamespaceMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#modified_by Namespace#modified_by}
  */
  readonly modifiedBy?: NamespaceMetadataModifiedBy;
}

export function namespaceMetadataToTerraform(struct?: NamespaceMetadataOutputReference | NamespaceMetadata): any {
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
    created_by: namespaceMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: namespaceMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function namespaceMetadataToHclTerraform(struct?: NamespaceMetadataOutputReference | NamespaceMetadata): any {
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
      value: namespaceMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceMetadataCreatedByList",
    },
    modified_by: {
      value: namespaceMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceMetadata | undefined {
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

  public set internalValue(value: NamespaceMetadata | undefined) {
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
  private _createdBy = new NamespaceMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: NamespaceMetadataCreatedBy) {
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
  private _modifiedBy = new NamespaceMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: NamespaceMetadataModifiedBy) {
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
export interface NamespaceSpecArtifactPathOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#type Namespace#type}
  */
  readonly type?: string;
}

export function namespaceSpecArtifactPathOptionsOverrideToTerraform(struct?: NamespaceSpecArtifactPathOptionsOverrideOutputReference | NamespaceSpecArtifactPathOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceSpecArtifactPathOptionsOverrideToHclTerraform(struct?: NamespaceSpecArtifactPathOptionsOverrideOutputReference | NamespaceSpecArtifactPathOptionsOverride): any {
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

export class NamespaceSpecArtifactPathOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecArtifactPathOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecArtifactPathOptionsOverride | undefined) {
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
export interface NamespaceSpecArtifactPathOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#jsonschema Namespace#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#uischema Namespace#uischema}
  */
  readonly uischema?: string;
}

export function namespaceSpecArtifactPathOptionsSchemaToTerraform(struct?: NamespaceSpecArtifactPathOptionsSchemaOutputReference | NamespaceSpecArtifactPathOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceSpecArtifactPathOptionsSchemaToHclTerraform(struct?: NamespaceSpecArtifactPathOptionsSchemaOutputReference | NamespaceSpecArtifactPathOptionsSchema): any {
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

export class NamespaceSpecArtifactPathOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecArtifactPathOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceSpecArtifactPathOptionsSchema | undefined) {
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
export interface NamespaceSpecArtifactPathOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#display_metadata Namespace#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#required Namespace#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#sensitive Namespace#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#override Namespace#override}
  */
  readonly override?: NamespaceSpecArtifactPathOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#schema Namespace#schema}
  */
  readonly schema?: NamespaceSpecArtifactPathOptionsSchema;
}

export function namespaceSpecArtifactPathOptionsToTerraform(struct?: NamespaceSpecArtifactPathOptionsOutputReference | NamespaceSpecArtifactPathOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceSpecArtifactPathOptionsOverrideToTerraform(struct!.override),
    schema: namespaceSpecArtifactPathOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceSpecArtifactPathOptionsToHclTerraform(struct?: NamespaceSpecArtifactPathOptionsOutputReference | NamespaceSpecArtifactPathOptions): any {
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
      value: namespaceSpecArtifactPathOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecArtifactPathOptionsOverrideList",
    },
    schema: {
      value: namespaceSpecArtifactPathOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecArtifactPathOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecArtifactPathOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecArtifactPathOptions | undefined {
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

  public set internalValue(value: NamespaceSpecArtifactPathOptions | undefined) {
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
  private _override = new NamespaceSpecArtifactPathOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceSpecArtifactPathOptionsOverride) {
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
  private _schema = new NamespaceSpecArtifactPathOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceSpecArtifactPathOptionsSchema) {
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
export interface NamespaceSpecArtifactPath {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#data Namespace#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#mount_path Namespace#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#name Namespace#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#sensitive Namespace#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#options Namespace#options}
  */
  readonly options?: NamespaceSpecArtifactPathOptions;
}

export function namespaceSpecArtifactPathToTerraform(struct?: NamespaceSpecArtifactPathOutputReference | NamespaceSpecArtifactPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceSpecArtifactPathOptionsToTerraform(struct!.options),
  }
}


export function namespaceSpecArtifactPathToHclTerraform(struct?: NamespaceSpecArtifactPathOutputReference | NamespaceSpecArtifactPath): any {
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
      value: namespaceSpecArtifactPathOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecArtifactPathOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecArtifactPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecArtifactPath | undefined {
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

  public set internalValue(value: NamespaceSpecArtifactPath | undefined) {
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
  private _options = new NamespaceSpecArtifactPathOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceSpecArtifactPathOptions) {
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
export interface NamespaceSpecArtifact {
  /**
  * name of the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#repository Namespace#repository}
  */
  readonly repository?: string;
  /**
  * branch or tag in the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#revision Namespace#revision}
  */
  readonly revision?: string;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#path Namespace#path}
  */
  readonly path?: NamespaceSpecArtifactPath;
}

export function namespaceSpecArtifactToTerraform(struct?: NamespaceSpecArtifactOutputReference | NamespaceSpecArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
    path: namespaceSpecArtifactPathToTerraform(struct!.path),
  }
}


export function namespaceSpecArtifactToHclTerraform(struct?: NamespaceSpecArtifactOutputReference | NamespaceSpecArtifact): any {
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
    path: {
      value: namespaceSpecArtifactPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecArtifactPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecArtifact | undefined {
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
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repository = undefined;
      this._revision = undefined;
      this._path.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repository = value.repository;
      this._revision = value.revision;
      this._path.internalValue = value.path;
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

  // path - computed: false, optional: true, required: false
  private _path = new NamespaceSpecArtifactPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: NamespaceSpecArtifactPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}
export interface NamespaceSpecDrift {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#action Namespace#action}
  */
  readonly action?: string;
  /**
  * flag to specify if drift reconcillation is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#enabled Namespace#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function namespaceSpecDriftToTerraform(struct?: NamespaceSpecDriftOutputReference | NamespaceSpecDrift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function namespaceSpecDriftToHclTerraform(struct?: NamespaceSpecDriftOutputReference | NamespaceSpecDrift): any {
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

export class NamespaceSpecDriftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecDrift | undefined {
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

  public set internalValue(value: NamespaceSpecDrift | undefined) {
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
export interface NamespaceSpecLimitRangeContainerDefault {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangeContainerDefaultToTerraform(struct?: NamespaceSpecLimitRangeContainerDefaultOutputReference | NamespaceSpecLimitRangeContainerDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangeContainerDefaultToHclTerraform(struct?: NamespaceSpecLimitRangeContainerDefaultOutputReference | NamespaceSpecLimitRangeContainerDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangeContainerDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangeContainerDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangeContainerDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangeContainerDefaultRequest {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangeContainerDefaultRequestToTerraform(struct?: NamespaceSpecLimitRangeContainerDefaultRequestOutputReference | NamespaceSpecLimitRangeContainerDefaultRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangeContainerDefaultRequestToHclTerraform(struct?: NamespaceSpecLimitRangeContainerDefaultRequestOutputReference | NamespaceSpecLimitRangeContainerDefaultRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangeContainerDefaultRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangeContainerDefaultRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangeContainerDefaultRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangeContainerMax {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangeContainerMaxToTerraform(struct?: NamespaceSpecLimitRangeContainerMaxOutputReference | NamespaceSpecLimitRangeContainerMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangeContainerMaxToHclTerraform(struct?: NamespaceSpecLimitRangeContainerMaxOutputReference | NamespaceSpecLimitRangeContainerMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangeContainerMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangeContainerMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangeContainerMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangeContainerMin {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangeContainerMinToTerraform(struct?: NamespaceSpecLimitRangeContainerMinOutputReference | NamespaceSpecLimitRangeContainerMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangeContainerMinToHclTerraform(struct?: NamespaceSpecLimitRangeContainerMinOutputReference | NamespaceSpecLimitRangeContainerMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangeContainerMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangeContainerMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangeContainerMin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangeContainerRatio {
  /**
  * ratio of cpu requests to limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: number;
  /**
  * ratio of memory requests to limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: number;
}

export function namespaceSpecLimitRangeContainerRatioToTerraform(struct?: NamespaceSpecLimitRangeContainerRatioOutputReference | NamespaceSpecLimitRangeContainerRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangeContainerRatioToHclTerraform(struct?: NamespaceSpecLimitRangeContainerRatioOutputReference | NamespaceSpecLimitRangeContainerRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangeContainerRatioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangeContainerRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangeContainerRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangeContainer {
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#default Namespace#default}
  */
  readonly default?: NamespaceSpecLimitRangeContainerDefault;
  /**
  * default_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#default_request Namespace#default_request}
  */
  readonly defaultRequest?: NamespaceSpecLimitRangeContainerDefaultRequest;
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#max Namespace#max}
  */
  readonly max?: NamespaceSpecLimitRangeContainerMax;
  /**
  * min block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#min Namespace#min}
  */
  readonly min?: NamespaceSpecLimitRangeContainerMin;
  /**
  * ratio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#ratio Namespace#ratio}
  */
  readonly ratio?: NamespaceSpecLimitRangeContainerRatio;
}

export function namespaceSpecLimitRangeContainerToTerraform(struct?: NamespaceSpecLimitRangeContainerOutputReference | NamespaceSpecLimitRangeContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: namespaceSpecLimitRangeContainerDefaultToTerraform(struct!.default),
    default_request: namespaceSpecLimitRangeContainerDefaultRequestToTerraform(struct!.defaultRequest),
    max: namespaceSpecLimitRangeContainerMaxToTerraform(struct!.max),
    min: namespaceSpecLimitRangeContainerMinToTerraform(struct!.min),
    ratio: namespaceSpecLimitRangeContainerRatioToTerraform(struct!.ratio),
  }
}


export function namespaceSpecLimitRangeContainerToHclTerraform(struct?: NamespaceSpecLimitRangeContainerOutputReference | NamespaceSpecLimitRangeContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: namespaceSpecLimitRangeContainerDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangeContainerDefaultList",
    },
    default_request: {
      value: namespaceSpecLimitRangeContainerDefaultRequestToHclTerraform(struct!.defaultRequest),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangeContainerDefaultRequestList",
    },
    max: {
      value: namespaceSpecLimitRangeContainerMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangeContainerMaxList",
    },
    min: {
      value: namespaceSpecLimitRangeContainerMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangeContainerMinList",
    },
    ratio: {
      value: namespaceSpecLimitRangeContainerRatioToHclTerraform(struct!.ratio),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangeContainerRatioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangeContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangeContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._defaultRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRequest = this._defaultRequest?.internalValue;
    }
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._ratio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangeContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default.internalValue = undefined;
      this._defaultRequest.internalValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._ratio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default.internalValue = value.default;
      this._defaultRequest.internalValue = value.defaultRequest;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._ratio.internalValue = value.ratio;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new NamespaceSpecLimitRangeContainerDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: NamespaceSpecLimitRangeContainerDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // default_request - computed: false, optional: true, required: false
  private _defaultRequest = new NamespaceSpecLimitRangeContainerDefaultRequestOutputReference(this, "default_request");
  public get defaultRequest() {
    return this._defaultRequest;
  }
  public putDefaultRequest(value: NamespaceSpecLimitRangeContainerDefaultRequest) {
    this._defaultRequest.internalValue = value;
  }
  public resetDefaultRequest() {
    this._defaultRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRequestInput() {
    return this._defaultRequest.internalValue;
  }

  // max - computed: false, optional: true, required: false
  private _max = new NamespaceSpecLimitRangeContainerMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: NamespaceSpecLimitRangeContainerMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: false, optional: true, required: false
  private _min = new NamespaceSpecLimitRangeContainerMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: NamespaceSpecLimitRangeContainerMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio = new NamespaceSpecLimitRangeContainerRatioOutputReference(this, "ratio");
  public get ratio() {
    return this._ratio;
  }
  public putRatio(value: NamespaceSpecLimitRangeContainerRatio) {
    this._ratio.internalValue = value;
  }
  public resetRatio() {
    this._ratio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio.internalValue;
  }
}
export interface NamespaceSpecLimitRangePodDefault {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangePodDefaultToTerraform(struct?: NamespaceSpecLimitRangePodDefaultOutputReference | NamespaceSpecLimitRangePodDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangePodDefaultToHclTerraform(struct?: NamespaceSpecLimitRangePodDefaultOutputReference | NamespaceSpecLimitRangePodDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangePodDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangePodDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangePodDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangePodDefaultRequest {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangePodDefaultRequestToTerraform(struct?: NamespaceSpecLimitRangePodDefaultRequestOutputReference | NamespaceSpecLimitRangePodDefaultRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangePodDefaultRequestToHclTerraform(struct?: NamespaceSpecLimitRangePodDefaultRequestOutputReference | NamespaceSpecLimitRangePodDefaultRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangePodDefaultRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangePodDefaultRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangePodDefaultRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangePodMax {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangePodMaxToTerraform(struct?: NamespaceSpecLimitRangePodMaxOutputReference | NamespaceSpecLimitRangePodMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangePodMaxToHclTerraform(struct?: NamespaceSpecLimitRangePodMaxOutputReference | NamespaceSpecLimitRangePodMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangePodMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangePodMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangePodMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangePodMin {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: string;
}

export function namespaceSpecLimitRangePodMinToTerraform(struct?: NamespaceSpecLimitRangePodMinOutputReference | NamespaceSpecLimitRangePodMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangePodMinToHclTerraform(struct?: NamespaceSpecLimitRangePodMinOutputReference | NamespaceSpecLimitRangePodMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangePodMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangePodMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangePodMin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangePodRatio {
  /**
  * ratio of cpu requests to limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu Namespace#cpu}
  */
  readonly cpu?: number;
  /**
  * ratio of memory requests to limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory Namespace#memory}
  */
  readonly memory?: number;
}

export function namespaceSpecLimitRangePodRatioToTerraform(struct?: NamespaceSpecLimitRangePodRatioOutputReference | NamespaceSpecLimitRangePodRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function namespaceSpecLimitRangePodRatioToHclTerraform(struct?: NamespaceSpecLimitRangePodRatioOutputReference | NamespaceSpecLimitRangePodRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangePodRatioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangePodRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangePodRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface NamespaceSpecLimitRangePod {
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#default Namespace#default}
  */
  readonly default?: NamespaceSpecLimitRangePodDefault;
  /**
  * default_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#default_request Namespace#default_request}
  */
  readonly defaultRequest?: NamespaceSpecLimitRangePodDefaultRequest;
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#max Namespace#max}
  */
  readonly max?: NamespaceSpecLimitRangePodMax;
  /**
  * min block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#min Namespace#min}
  */
  readonly min?: NamespaceSpecLimitRangePodMin;
  /**
  * ratio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#ratio Namespace#ratio}
  */
  readonly ratio?: NamespaceSpecLimitRangePodRatio;
}

export function namespaceSpecLimitRangePodToTerraform(struct?: NamespaceSpecLimitRangePodOutputReference | NamespaceSpecLimitRangePod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: namespaceSpecLimitRangePodDefaultToTerraform(struct!.default),
    default_request: namespaceSpecLimitRangePodDefaultRequestToTerraform(struct!.defaultRequest),
    max: namespaceSpecLimitRangePodMaxToTerraform(struct!.max),
    min: namespaceSpecLimitRangePodMinToTerraform(struct!.min),
    ratio: namespaceSpecLimitRangePodRatioToTerraform(struct!.ratio),
  }
}


export function namespaceSpecLimitRangePodToHclTerraform(struct?: NamespaceSpecLimitRangePodOutputReference | NamespaceSpecLimitRangePod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: namespaceSpecLimitRangePodDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangePodDefaultList",
    },
    default_request: {
      value: namespaceSpecLimitRangePodDefaultRequestToHclTerraform(struct!.defaultRequest),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangePodDefaultRequestList",
    },
    max: {
      value: namespaceSpecLimitRangePodMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangePodMaxList",
    },
    min: {
      value: namespaceSpecLimitRangePodMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangePodMinList",
    },
    ratio: {
      value: namespaceSpecLimitRangePodRatioToHclTerraform(struct!.ratio),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangePodRatioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangePodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRangePod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._defaultRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRequest = this._defaultRequest?.internalValue;
    }
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._ratio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRangePod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default.internalValue = undefined;
      this._defaultRequest.internalValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._ratio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default.internalValue = value.default;
      this._defaultRequest.internalValue = value.defaultRequest;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._ratio.internalValue = value.ratio;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new NamespaceSpecLimitRangePodDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: NamespaceSpecLimitRangePodDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // default_request - computed: false, optional: true, required: false
  private _defaultRequest = new NamespaceSpecLimitRangePodDefaultRequestOutputReference(this, "default_request");
  public get defaultRequest() {
    return this._defaultRequest;
  }
  public putDefaultRequest(value: NamespaceSpecLimitRangePodDefaultRequest) {
    this._defaultRequest.internalValue = value;
  }
  public resetDefaultRequest() {
    this._defaultRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRequestInput() {
    return this._defaultRequest.internalValue;
  }

  // max - computed: false, optional: true, required: false
  private _max = new NamespaceSpecLimitRangePodMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: NamespaceSpecLimitRangePodMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: false, optional: true, required: false
  private _min = new NamespaceSpecLimitRangePodMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: NamespaceSpecLimitRangePodMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio = new NamespaceSpecLimitRangePodRatioOutputReference(this, "ratio");
  public get ratio() {
    return this._ratio;
  }
  public putRatio(value: NamespaceSpecLimitRangePodRatio) {
    this._ratio.internalValue = value;
  }
  public resetRatio() {
    this._ratio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio.internalValue;
  }
}
export interface NamespaceSpecLimitRange {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#container Namespace#container}
  */
  readonly container?: NamespaceSpecLimitRangeContainer;
  /**
  * pod block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#pod Namespace#pod}
  */
  readonly pod?: NamespaceSpecLimitRangePod;
}

export function namespaceSpecLimitRangeToTerraform(struct?: NamespaceSpecLimitRangeOutputReference | NamespaceSpecLimitRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: namespaceSpecLimitRangeContainerToTerraform(struct!.container),
    pod: namespaceSpecLimitRangePodToTerraform(struct!.pod),
  }
}


export function namespaceSpecLimitRangeToHclTerraform(struct?: NamespaceSpecLimitRangeOutputReference | NamespaceSpecLimitRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: namespaceSpecLimitRangeContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangeContainerList",
    },
    pod: {
      value: namespaceSpecLimitRangePodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangePodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecLimitRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecLimitRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecLimitRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
      this._pod.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
      this._pod.internalValue = value.pod;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new NamespaceSpecLimitRangeContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: NamespaceSpecLimitRangeContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new NamespaceSpecLimitRangePodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: NamespaceSpecLimitRangePod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }
}
export interface NamespaceSpecNamespaceMeshPolicyParamsPolicies {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#name Namespace#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#system_catalog Namespace#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#version Namespace#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#version_state Namespace#version_state}
  */
  readonly versionState?: string;
}

export function namespaceSpecNamespaceMeshPolicyParamsPoliciesToTerraform(struct?: NamespaceSpecNamespaceMeshPolicyParamsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
  }
}


export function namespaceSpecNamespaceMeshPolicyParamsPoliciesToHclTerraform(struct?: NamespaceSpecNamespaceMeshPolicyParamsPolicies | cdktf.IResolvable): any {
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
    system_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.systemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_state: {
      value: cdktf.stringToHclTerraform(struct!.versionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecNamespaceMeshPolicyParamsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceSpecNamespaceMeshPolicyParamsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCatalog = this._systemCatalog;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecNamespaceMeshPolicyParamsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._systemCatalog = value.systemCatalog;
      this._version = value.version;
      this._versionState = value.versionState;
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

  // system_catalog - computed: false, optional: true, required: false
  private _systemCatalog?: boolean | cdktf.IResolvable; 
  public get systemCatalog() {
    return this.getBooleanAttribute('system_catalog');
  }
  public set systemCatalog(value: boolean | cdktf.IResolvable) {
    this._systemCatalog = value;
  }
  public resetSystemCatalog() {
    this._systemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCatalogInput() {
    return this._systemCatalog;
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

  // version_state - computed: false, optional: true, required: false
  private _versionState?: string; 
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
  public set versionState(value: string) {
    this._versionState = value;
  }
  public resetVersionState() {
    this._versionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStateInput() {
    return this._versionState;
  }
}

export class NamespaceSpecNamespaceMeshPolicyParamsPoliciesList extends cdktf.ComplexList {
  public internalValue? : NamespaceSpecNamespaceMeshPolicyParamsPolicies[] | cdktf.IResolvable

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
  public get(index: number): NamespaceSpecNamespaceMeshPolicyParamsPoliciesOutputReference {
    return new NamespaceSpecNamespaceMeshPolicyParamsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceSpecNamespaceMeshPolicyParams {
  /**
  * Service Mesh enabled flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#mesh_enabled Namespace#mesh_enabled}
  */
  readonly meshEnabled?: boolean | cdktf.IResolvable;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#policies Namespace#policies}
  */
  readonly policies?: NamespaceSpecNamespaceMeshPolicyParamsPolicies[] | cdktf.IResolvable;
}

export function namespaceSpecNamespaceMeshPolicyParamsToTerraform(struct?: NamespaceSpecNamespaceMeshPolicyParamsOutputReference | NamespaceSpecNamespaceMeshPolicyParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mesh_enabled: cdktf.booleanToTerraform(struct!.meshEnabled),
    policies: cdktf.listMapper(namespaceSpecNamespaceMeshPolicyParamsPoliciesToTerraform, true)(struct!.policies),
  }
}


export function namespaceSpecNamespaceMeshPolicyParamsToHclTerraform(struct?: NamespaceSpecNamespaceMeshPolicyParamsOutputReference | NamespaceSpecNamespaceMeshPolicyParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mesh_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.meshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policies: {
      value: cdktf.listMapperHcl(namespaceSpecNamespaceMeshPolicyParamsPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecNamespaceMeshPolicyParamsPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecNamespaceMeshPolicyParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecNamespaceMeshPolicyParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._meshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshEnabled = this._meshEnabled;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecNamespaceMeshPolicyParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._meshEnabled = undefined;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._meshEnabled = value.meshEnabled;
      this._policies.internalValue = value.policies;
    }
  }

  // mesh_enabled - computed: false, optional: true, required: false
  private _meshEnabled?: boolean | cdktf.IResolvable; 
  public get meshEnabled() {
    return this.getBooleanAttribute('mesh_enabled');
  }
  public set meshEnabled(value: boolean | cdktf.IResolvable) {
    this._meshEnabled = value;
  }
  public resetMeshEnabled() {
    this._meshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshEnabledInput() {
    return this._meshEnabled;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new NamespaceSpecNamespaceMeshPolicyParamsPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: NamespaceSpecNamespaceMeshPolicyParamsPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface NamespaceSpecNetworkPolicyParamsPolicies {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#name Namespace#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#system_catalog Namespace#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#version Namespace#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#version_state Namespace#version_state}
  */
  readonly versionState?: string;
}

export function namespaceSpecNetworkPolicyParamsPoliciesToTerraform(struct?: NamespaceSpecNetworkPolicyParamsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
  }
}


export function namespaceSpecNetworkPolicyParamsPoliciesToHclTerraform(struct?: NamespaceSpecNetworkPolicyParamsPolicies | cdktf.IResolvable): any {
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
    system_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.systemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_state: {
      value: cdktf.stringToHclTerraform(struct!.versionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecNetworkPolicyParamsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceSpecNetworkPolicyParamsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCatalog = this._systemCatalog;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecNetworkPolicyParamsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._systemCatalog = value.systemCatalog;
      this._version = value.version;
      this._versionState = value.versionState;
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

  // system_catalog - computed: false, optional: true, required: false
  private _systemCatalog?: boolean | cdktf.IResolvable; 
  public get systemCatalog() {
    return this.getBooleanAttribute('system_catalog');
  }
  public set systemCatalog(value: boolean | cdktf.IResolvable) {
    this._systemCatalog = value;
  }
  public resetSystemCatalog() {
    this._systemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCatalogInput() {
    return this._systemCatalog;
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

  // version_state - computed: false, optional: true, required: false
  private _versionState?: string; 
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
  public set versionState(value: string) {
    this._versionState = value;
  }
  public resetVersionState() {
    this._versionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStateInput() {
    return this._versionState;
  }
}

export class NamespaceSpecNetworkPolicyParamsPoliciesList extends cdktf.ComplexList {
  public internalValue? : NamespaceSpecNetworkPolicyParamsPolicies[] | cdktf.IResolvable

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
  public get(index: number): NamespaceSpecNetworkPolicyParamsPoliciesOutputReference {
    return new NamespaceSpecNetworkPolicyParamsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceSpecNetworkPolicyParams {
  /**
  * Network policy enabled flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#network_policy_enabled Namespace#network_policy_enabled}
  */
  readonly networkPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#policies Namespace#policies}
  */
  readonly policies?: NamespaceSpecNetworkPolicyParamsPolicies[] | cdktf.IResolvable;
}

export function namespaceSpecNetworkPolicyParamsToTerraform(struct?: NamespaceSpecNetworkPolicyParamsOutputReference | NamespaceSpecNetworkPolicyParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policy_enabled: cdktf.booleanToTerraform(struct!.networkPolicyEnabled),
    policies: cdktf.listMapper(namespaceSpecNetworkPolicyParamsPoliciesToTerraform, true)(struct!.policies),
  }
}


export function namespaceSpecNetworkPolicyParamsToHclTerraform(struct?: NamespaceSpecNetworkPolicyParamsOutputReference | NamespaceSpecNetworkPolicyParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policy_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.networkPolicyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policies: {
      value: cdktf.listMapperHcl(namespaceSpecNetworkPolicyParamsPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecNetworkPolicyParamsPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecNetworkPolicyParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecNetworkPolicyParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyEnabled = this._networkPolicyEnabled;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecNetworkPolicyParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicyEnabled = undefined;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicyEnabled = value.networkPolicyEnabled;
      this._policies.internalValue = value.policies;
    }
  }

  // network_policy_enabled - computed: false, optional: true, required: false
  private _networkPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get networkPolicyEnabled() {
    return this.getBooleanAttribute('network_policy_enabled');
  }
  public set networkPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._networkPolicyEnabled = value;
  }
  public resetNetworkPolicyEnabled() {
    this._networkPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyEnabledInput() {
    return this._networkPolicyEnabled;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new NamespaceSpecNetworkPolicyParamsPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: NamespaceSpecNetworkPolicyParamsPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface NamespaceSpecPlacementEnvironment {
  /**
  * Name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#name Namespace#name}
  */
  readonly name?: string;
}

export function namespaceSpecPlacementEnvironmentToTerraform(struct?: NamespaceSpecPlacementEnvironmentOutputReference | NamespaceSpecPlacementEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function namespaceSpecPlacementEnvironmentToHclTerraform(struct?: NamespaceSpecPlacementEnvironmentOutputReference | NamespaceSpecPlacementEnvironment): any {
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

export class NamespaceSpecPlacementEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecPlacementEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecPlacementEnvironment | undefined) {
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
export interface NamespaceSpecPlacementLabels {
  /**
  * Key of the placement label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#key Namespace#key}
  */
  readonly key?: string;
  /**
  * Value of the placement label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#value Namespace#value}
  */
  readonly value?: string;
}

export function namespaceSpecPlacementLabelsToTerraform(struct?: NamespaceSpecPlacementLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function namespaceSpecPlacementLabelsToHclTerraform(struct?: NamespaceSpecPlacementLabels | cdktf.IResolvable): any {
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

export class NamespaceSpecPlacementLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceSpecPlacementLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceSpecPlacementLabels | cdktf.IResolvable | undefined) {
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

export class NamespaceSpecPlacementLabelsList extends cdktf.ComplexList {
  public internalValue? : NamespaceSpecPlacementLabels[] | cdktf.IResolvable

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
  public get(index: number): NamespaceSpecPlacementLabelsOutputReference {
    return new NamespaceSpecPlacementLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceSpecPlacement {
  /**
  * Kubernetes style label selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#selector Namespace#selector}
  */
  readonly selector?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#environment Namespace#environment}
  */
  readonly environment?: NamespaceSpecPlacementEnvironment;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#labels Namespace#labels}
  */
  readonly labels?: NamespaceSpecPlacementLabels[] | cdktf.IResolvable;
}

export function namespaceSpecPlacementToTerraform(struct?: NamespaceSpecPlacementOutputReference | NamespaceSpecPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    environment: namespaceSpecPlacementEnvironmentToTerraform(struct!.environment),
    labels: cdktf.listMapper(namespaceSpecPlacementLabelsToTerraform, true)(struct!.labels),
  }
}


export function namespaceSpecPlacementToHclTerraform(struct?: NamespaceSpecPlacementOutputReference | NamespaceSpecPlacement): any {
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
      value: namespaceSpecPlacementEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecPlacementEnvironmentList",
    },
    labels: {
      value: cdktf.listMapperHcl(namespaceSpecPlacementLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecPlacementLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecPlacement | undefined {
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

  public set internalValue(value: NamespaceSpecPlacement | undefined) {
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
  private _environment = new NamespaceSpecPlacementEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: NamespaceSpecPlacementEnvironment) {
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
  private _labels = new NamespaceSpecPlacementLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: NamespaceSpecPlacementLabels[] | cdktf.IResolvable) {
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
export interface NamespaceSpecPsp {
  /**
  * name of the PSP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#name Namespace#name}
  */
  readonly name?: string;
}

export function namespaceSpecPspToTerraform(struct?: NamespaceSpecPspOutputReference | NamespaceSpecPsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function namespaceSpecPspToHclTerraform(struct?: NamespaceSpecPspOutputReference | NamespaceSpecPsp): any {
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

export class NamespaceSpecPspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecPsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecPsp | undefined) {
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
export interface NamespaceSpecResourceQuotas {
  /**
  * The maximum number of ConfigMaps that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#config_maps Namespace#config_maps}
  */
  readonly configMaps?: string;
  /**
  * The maximum amount of CPU (in millicores) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu_limits Namespace#cpu_limits}
  */
  readonly cpuLimits?: string;
  /**
  * The minimum amount of CPU (in millicores) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#cpu_requests Namespace#cpu_requests}
  */
  readonly cpuRequests?: string;
  /**
  * The maximum sum of all storage limits from all pods in the namespace. This caps the total maximum potential storage usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#ephemeral_storage_limits Namespace#ephemeral_storage_limits}
  */
  readonly ephemeralStorageLimits?: string;
  /**
  * The maximum sum of all storage requests from all pods in the namespace. This is the minimum amount of ephemeral storage (in bytes) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#ephemeral_storage_requests Namespace#ephemeral_storage_requests}
  */
  readonly ephemeralStorageRequests?: string;
  /**
  * The maximum amount of GPU (in millicores) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#gpu_limits Namespace#gpu_limits}
  */
  readonly gpuLimits?: string;
  /**
  * The minimum amount of GPU (in millicores) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#gpu_requests Namespace#gpu_requests}
  */
  readonly gpuRequests?: string;
  /**
  * The maximum amount of memory (in bytes) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory_limits Namespace#memory_limits}
  */
  readonly memoryLimits?: string;
  /**
  * The minimum amount of memory (in bytes) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#memory_requests Namespace#memory_requests}
  */
  readonly memoryRequests?: string;
  /**
  * The maximum number of persistent volume claims that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#persistent_volume_claims Namespace#persistent_volume_claims}
  */
  readonly persistentVolumeClaims?: string;
  /**
  * The maximum number of pods that can exist in the project/namespace in a non-terminal state(i.e., pods with a state of .status.phase in (Failed, Succeeded) equal to true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#pods Namespace#pods}
  */
  readonly pods?: string;
  /**
  * The maximum number of replication controllers that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#replication_controllers Namespace#replication_controllers}
  */
  readonly replicationControllers?: string;
  /**
  * The maximum number of secrets that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#secrets Namespace#secrets}
  */
  readonly secrets?: string;
  /**
  * The maximum number of services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#services Namespace#services}
  */
  readonly services?: string;
  /**
  * The maximum number of load balancers services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#services_load_balancers Namespace#services_load_balancers}
  */
  readonly servicesLoadBalancers?: string;
  /**
  * The maximum number of node port services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#services_node_ports Namespace#services_node_ports}
  */
  readonly servicesNodePorts?: string;
  /**
  * The minimum amount of storage (in gigabytes) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#storage_requests Namespace#storage_requests}
  */
  readonly storageRequests?: string;
}

export function namespaceSpecResourceQuotasToTerraform(struct?: NamespaceSpecResourceQuotasOutputReference | NamespaceSpecResourceQuotas): any {
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


export function namespaceSpecResourceQuotasToHclTerraform(struct?: NamespaceSpecResourceQuotasOutputReference | NamespaceSpecResourceQuotas): any {
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

export class NamespaceSpecResourceQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecResourceQuotas | undefined {
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

  public set internalValue(value: NamespaceSpecResourceQuotas | undefined) {
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
export interface NamespaceSpecSyncType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#managed Namespace#managed}
  */
  readonly managed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#unmanaged Namespace#unmanaged}
  */
  readonly unmanaged?: string;
}

export function namespaceSpecSyncTypeToTerraform(struct?: NamespaceSpecSyncTypeOutputReference | NamespaceSpecSyncType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: cdktf.stringToTerraform(struct!.managed),
    unmanaged: cdktf.stringToTerraform(struct!.unmanaged),
  }
}


export function namespaceSpecSyncTypeToHclTerraform(struct?: NamespaceSpecSyncTypeOutputReference | NamespaceSpecSyncType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed: {
      value: cdktf.stringToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unmanaged: {
      value: cdktf.stringToHclTerraform(struct!.unmanaged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecSyncTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpecSyncType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._unmanaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanaged = this._unmanaged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpecSyncType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managed = undefined;
      this._unmanaged = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managed = value.managed;
      this._unmanaged = value.unmanaged;
    }
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // unmanaged - computed: false, optional: true, required: false
  private _unmanaged?: string; 
  public get unmanaged() {
    return this.getStringAttribute('unmanaged');
  }
  public set unmanaged(value: string) {
    this._unmanaged = value;
  }
  public resetUnmanaged() {
    this._unmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInput() {
    return this._unmanaged;
  }
}
export interface NamespaceSpec {
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#artifact Namespace#artifact}
  */
  readonly artifact?: NamespaceSpecArtifact;
  /**
  * drift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#drift Namespace#drift}
  */
  readonly drift?: NamespaceSpecDrift;
  /**
  * limit_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#limit_range Namespace#limit_range}
  */
  readonly limitRange?: NamespaceSpecLimitRange;
  /**
  * namespace_mesh_policy_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#namespace_mesh_policy_params Namespace#namespace_mesh_policy_params}
  */
  readonly namespaceMeshPolicyParams?: NamespaceSpecNamespaceMeshPolicyParams;
  /**
  * network_policy_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#network_policy_params Namespace#network_policy_params}
  */
  readonly networkPolicyParams?: NamespaceSpecNetworkPolicyParams;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#placement Namespace#placement}
  */
  readonly placement?: NamespaceSpecPlacement;
  /**
  * psp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#psp Namespace#psp}
  */
  readonly psp?: NamespaceSpecPsp;
  /**
  * resource_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#resource_quotas Namespace#resource_quotas}
  */
  readonly resourceQuotas?: NamespaceSpecResourceQuotas;
  /**
  * sync_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#sync_type Namespace#sync_type}
  */
  readonly syncType?: NamespaceSpecSyncType;
}

export function namespaceSpecToTerraform(struct?: NamespaceSpecOutputReference | NamespaceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact: namespaceSpecArtifactToTerraform(struct!.artifact),
    drift: namespaceSpecDriftToTerraform(struct!.drift),
    limit_range: namespaceSpecLimitRangeToTerraform(struct!.limitRange),
    namespace_mesh_policy_params: namespaceSpecNamespaceMeshPolicyParamsToTerraform(struct!.namespaceMeshPolicyParams),
    network_policy_params: namespaceSpecNetworkPolicyParamsToTerraform(struct!.networkPolicyParams),
    placement: namespaceSpecPlacementToTerraform(struct!.placement),
    psp: namespaceSpecPspToTerraform(struct!.psp),
    resource_quotas: namespaceSpecResourceQuotasToTerraform(struct!.resourceQuotas),
    sync_type: namespaceSpecSyncTypeToTerraform(struct!.syncType),
  }
}


export function namespaceSpecToHclTerraform(struct?: NamespaceSpecOutputReference | NamespaceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact: {
      value: namespaceSpecArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecArtifactList",
    },
    drift: {
      value: namespaceSpecDriftToHclTerraform(struct!.drift),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecDriftList",
    },
    limit_range: {
      value: namespaceSpecLimitRangeToHclTerraform(struct!.limitRange),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecLimitRangeList",
    },
    namespace_mesh_policy_params: {
      value: namespaceSpecNamespaceMeshPolicyParamsToHclTerraform(struct!.namespaceMeshPolicyParams),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecNamespaceMeshPolicyParamsList",
    },
    network_policy_params: {
      value: namespaceSpecNetworkPolicyParamsToHclTerraform(struct!.networkPolicyParams),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecNetworkPolicyParamsList",
    },
    placement: {
      value: namespaceSpecPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecPlacementList",
    },
    psp: {
      value: namespaceSpecPspToHclTerraform(struct!.psp),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecPspList",
    },
    resource_quotas: {
      value: namespaceSpecResourceQuotasToHclTerraform(struct!.resourceQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecResourceQuotasList",
    },
    sync_type: {
      value: namespaceSpecSyncTypeToHclTerraform(struct!.syncType),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceSpecSyncTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._drift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drift = this._drift?.internalValue;
    }
    if (this._limitRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitRange = this._limitRange?.internalValue;
    }
    if (this._namespaceMeshPolicyParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceMeshPolicyParams = this._namespaceMeshPolicyParams?.internalValue;
    }
    if (this._networkPolicyParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyParams = this._networkPolicyParams?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._psp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.psp = this._psp?.internalValue;
    }
    if (this._resourceQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceQuotas = this._resourceQuotas?.internalValue;
    }
    if (this._syncType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncType = this._syncType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifact.internalValue = undefined;
      this._drift.internalValue = undefined;
      this._limitRange.internalValue = undefined;
      this._namespaceMeshPolicyParams.internalValue = undefined;
      this._networkPolicyParams.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._psp.internalValue = undefined;
      this._resourceQuotas.internalValue = undefined;
      this._syncType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifact.internalValue = value.artifact;
      this._drift.internalValue = value.drift;
      this._limitRange.internalValue = value.limitRange;
      this._namespaceMeshPolicyParams.internalValue = value.namespaceMeshPolicyParams;
      this._networkPolicyParams.internalValue = value.networkPolicyParams;
      this._placement.internalValue = value.placement;
      this._psp.internalValue = value.psp;
      this._resourceQuotas.internalValue = value.resourceQuotas;
      this._syncType.internalValue = value.syncType;
    }
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new NamespaceSpecArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: NamespaceSpecArtifact) {
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
  private _drift = new NamespaceSpecDriftOutputReference(this, "drift");
  public get drift() {
    return this._drift;
  }
  public putDrift(value: NamespaceSpecDrift) {
    this._drift.internalValue = value;
  }
  public resetDrift() {
    this._drift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftInput() {
    return this._drift.internalValue;
  }

  // limit_range - computed: false, optional: true, required: false
  private _limitRange = new NamespaceSpecLimitRangeOutputReference(this, "limit_range");
  public get limitRange() {
    return this._limitRange;
  }
  public putLimitRange(value: NamespaceSpecLimitRange) {
    this._limitRange.internalValue = value;
  }
  public resetLimitRange() {
    this._limitRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRangeInput() {
    return this._limitRange.internalValue;
  }

  // namespace_mesh_policy_params - computed: false, optional: true, required: false
  private _namespaceMeshPolicyParams = new NamespaceSpecNamespaceMeshPolicyParamsOutputReference(this, "namespace_mesh_policy_params");
  public get namespaceMeshPolicyParams() {
    return this._namespaceMeshPolicyParams;
  }
  public putNamespaceMeshPolicyParams(value: NamespaceSpecNamespaceMeshPolicyParams) {
    this._namespaceMeshPolicyParams.internalValue = value;
  }
  public resetNamespaceMeshPolicyParams() {
    this._namespaceMeshPolicyParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceMeshPolicyParamsInput() {
    return this._namespaceMeshPolicyParams.internalValue;
  }

  // network_policy_params - computed: false, optional: true, required: false
  private _networkPolicyParams = new NamespaceSpecNetworkPolicyParamsOutputReference(this, "network_policy_params");
  public get networkPolicyParams() {
    return this._networkPolicyParams;
  }
  public putNetworkPolicyParams(value: NamespaceSpecNetworkPolicyParams) {
    this._networkPolicyParams.internalValue = value;
  }
  public resetNetworkPolicyParams() {
    this._networkPolicyParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyParamsInput() {
    return this._networkPolicyParams.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new NamespaceSpecPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: NamespaceSpecPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // psp - computed: false, optional: true, required: false
  private _psp = new NamespaceSpecPspOutputReference(this, "psp");
  public get psp() {
    return this._psp;
  }
  public putPsp(value: NamespaceSpecPsp) {
    this._psp.internalValue = value;
  }
  public resetPsp() {
    this._psp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pspInput() {
    return this._psp.internalValue;
  }

  // resource_quotas - computed: false, optional: true, required: false
  private _resourceQuotas = new NamespaceSpecResourceQuotasOutputReference(this, "resource_quotas");
  public get resourceQuotas() {
    return this._resourceQuotas;
  }
  public putResourceQuotas(value: NamespaceSpecResourceQuotas) {
    this._resourceQuotas.internalValue = value;
  }
  public resetResourceQuotas() {
    this._resourceQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQuotasInput() {
    return this._resourceQuotas.internalValue;
  }

  // sync_type - computed: false, optional: true, required: false
  private _syncType = new NamespaceSpecSyncTypeOutputReference(this, "sync_type");
  public get syncType() {
    return this._syncType;
  }
  public putSyncType(value: NamespaceSpecSyncType) {
    this._syncType.internalValue = value;
  }
  public resetSyncType() {
    this._syncType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType.internalValue;
  }
}
export interface NamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#create Namespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#delete Namespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#update Namespace#update}
  */
  readonly update?: string;
}

export function namespaceTimeoutsToTerraform(struct?: NamespaceTimeouts | cdktf.IResolvable): any {
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


export function namespaceTimeoutsToHclTerraform(struct?: NamespaceTimeouts | cdktf.IResolvable): any {
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

export class NamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace rafay_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Namespace to import
  * @param importFromId The id of the existing Namespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Namespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace rafay_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_namespace',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.52'
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
    this._impersonate = config.impersonate;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new NamespaceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NamespaceMetadata) {
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
  private _spec = new NamespaceSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: NamespaceSpec) {
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
  private _timeouts = new NamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NamespaceTimeouts) {
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
      impersonate: cdktf.stringToTerraform(this._impersonate),
      metadata: namespaceMetadataToTerraform(this._metadata.internalValue),
      spec: namespaceSpecToTerraform(this._spec.internalValue),
      timeouts: namespaceTimeoutsToTerraform(this._timeouts.internalValue),
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
      impersonate: {
        value: cdktf.stringToHclTerraform(this._impersonate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: namespaceMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceMetadataList",
      },
      spec: {
        value: namespaceSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceSpecList",
      },
      timeouts: {
        value: namespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
