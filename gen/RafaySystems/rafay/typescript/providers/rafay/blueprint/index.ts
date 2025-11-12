// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#id Blueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#metadata Blueprint#metadata}
  */
  readonly metadata?: BlueprintMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#spec Blueprint#spec}
  */
  readonly spec?: BlueprintSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#timeouts Blueprint#timeouts}
  */
  readonly timeouts?: BlueprintTimeouts;
}
export interface BlueprintMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#id Blueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#is_sso_user Blueprint#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#username Blueprint#username}
  */
  readonly username?: string;
}

export function blueprintMetadataCreatedByToTerraform(struct?: BlueprintMetadataCreatedByOutputReference | BlueprintMetadataCreatedBy): any {
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


export function blueprintMetadataCreatedByToHclTerraform(struct?: BlueprintMetadataCreatedByOutputReference | BlueprintMetadataCreatedBy): any {
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

export class BlueprintMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintMetadataCreatedBy | undefined {
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

  public set internalValue(value: BlueprintMetadataCreatedBy | undefined) {
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
export interface BlueprintMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#id Blueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#is_sso_user Blueprint#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#username Blueprint#username}
  */
  readonly username?: string;
}

export function blueprintMetadataModifiedByToTerraform(struct?: BlueprintMetadataModifiedByOutputReference | BlueprintMetadataModifiedBy): any {
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


export function blueprintMetadataModifiedByToHclTerraform(struct?: BlueprintMetadataModifiedByOutputReference | BlueprintMetadataModifiedBy): any {
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

export class BlueprintMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintMetadataModifiedBy | undefined {
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

  public set internalValue(value: BlueprintMetadataModifiedBy | undefined) {
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
export interface BlueprintMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#annotations Blueprint#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#description Blueprint#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#display_name Blueprint#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#labels Blueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#project Blueprint#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#created_by Blueprint#created_by}
  */
  readonly createdBy?: BlueprintMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#modified_by Blueprint#modified_by}
  */
  readonly modifiedBy?: BlueprintMetadataModifiedBy;
}

export function blueprintMetadataToTerraform(struct?: BlueprintMetadataOutputReference | BlueprintMetadata): any {
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
    created_by: blueprintMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: blueprintMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function blueprintMetadataToHclTerraform(struct?: BlueprintMetadataOutputReference | BlueprintMetadata): any {
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
      value: blueprintMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintMetadataCreatedByList",
    },
    modified_by: {
      value: blueprintMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintMetadata | undefined {
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

  public set internalValue(value: BlueprintMetadata | undefined) {
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
  private _createdBy = new BlueprintMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: BlueprintMetadataCreatedBy) {
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
  private _modifiedBy = new BlueprintMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: BlueprintMetadataModifiedBy) {
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
export interface BlueprintSpecBase {
  /**
  * name of the blueprint base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * version of the blueprint base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
}

export function blueprintSpecBaseToTerraform(struct?: BlueprintSpecBaseOutputReference | BlueprintSpecBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function blueprintSpecBaseToHclTerraform(struct?: BlueprintSpecBaseOutputReference | BlueprintSpecBase): any {
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

export class BlueprintSpecBaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecBase | undefined {
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

  public set internalValue(value: BlueprintSpecBase | undefined) {
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

  // version - computed: true, optional: true, required: false
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
export interface BlueprintSpecComponentsCriticality {
  /**
  * Component Type of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#component_type Blueprint#component_type}
  */
  readonly componentType?: string;
  /**
  * Dependent resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#depends_on Blueprint#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * Check for Global resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#is_global Blueprint#is_global}
  */
  readonly isGlobal?: boolean | cdktf.IResolvable;
  /**
  * API Version of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * Published Generation of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#published_generation Blueprint#published_generation}
  */
  readonly publishedGeneration?: string;
  /**
  * Revision of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#revision Blueprint#revision}
  */
  readonly revision?: string;
  /**
  * Selector of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#selector Blueprint#selector}
  */
  readonly selector?: string;
  /**
  * Version of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
  /**
  * Workload ID of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#workload_id Blueprint#workload_id}
  */
  readonly workloadId?: string;
}

export function blueprintSpecComponentsCriticalityToTerraform(struct?: BlueprintSpecComponentsCriticality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_type: cdktf.stringToTerraform(struct!.componentType),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    is_global: cdktf.booleanToTerraform(struct!.isGlobal),
    name: cdktf.stringToTerraform(struct!.name),
    published_generation: cdktf.stringToTerraform(struct!.publishedGeneration),
    revision: cdktf.stringToTerraform(struct!.revision),
    selector: cdktf.stringToTerraform(struct!.selector),
    version: cdktf.stringToTerraform(struct!.version),
    workload_id: cdktf.stringToTerraform(struct!.workloadId),
  }
}


export function blueprintSpecComponentsCriticalityToHclTerraform(struct?: BlueprintSpecComponentsCriticality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_type: {
      value: cdktf.stringToHclTerraform(struct!.componentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_global: {
      value: cdktf.booleanToHclTerraform(struct!.isGlobal),
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
    published_generation: {
      value: cdktf.stringToHclTerraform(struct!.publishedGeneration),
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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
    workload_id: {
      value: cdktf.stringToHclTerraform(struct!.workloadId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecComponentsCriticalityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlueprintSpecComponentsCriticality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._isGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGlobal = this._isGlobal;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publishedGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishedGeneration = this._publishedGeneration;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._workloadId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadId = this._workloadId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecComponentsCriticality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentType = undefined;
      this._dependsOn = undefined;
      this._isGlobal = undefined;
      this._name = undefined;
      this._publishedGeneration = undefined;
      this._revision = undefined;
      this._selector = undefined;
      this._version = undefined;
      this._workloadId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentType = value.componentType;
      this._dependsOn = value.dependsOn;
      this._isGlobal = value.isGlobal;
      this._name = value.name;
      this._publishedGeneration = value.publishedGeneration;
      this._revision = value.revision;
      this._selector = value.selector;
      this._version = value.version;
      this._workloadId = value.workloadId;
    }
  }

  // component_type - computed: false, optional: true, required: false
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  public resetComponentType() {
    this._componentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
  }

  // is_global - computed: false, optional: true, required: false
  private _isGlobal?: boolean | cdktf.IResolvable; 
  public get isGlobal() {
    return this.getBooleanAttribute('is_global');
  }
  public set isGlobal(value: boolean | cdktf.IResolvable) {
    this._isGlobal = value;
  }
  public resetIsGlobal() {
    this._isGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGlobalInput() {
    return this._isGlobal;
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

  // published_generation - computed: false, optional: true, required: false
  private _publishedGeneration?: string; 
  public get publishedGeneration() {
    return this.getStringAttribute('published_generation');
  }
  public set publishedGeneration(value: string) {
    this._publishedGeneration = value;
  }
  public resetPublishedGeneration() {
    this._publishedGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedGenerationInput() {
    return this._publishedGeneration;
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

  // workload_id - computed: false, optional: true, required: false
  private _workloadId?: string; 
  public get workloadId() {
    return this.getStringAttribute('workload_id');
  }
  public set workloadId(value: string) {
    this._workloadId = value;
  }
  public resetWorkloadId() {
    this._workloadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdInput() {
    return this._workloadId;
  }
}

export class BlueprintSpecComponentsCriticalityList extends cdktf.ComplexList {
  public internalValue? : BlueprintSpecComponentsCriticality[] | cdktf.IResolvable

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
  public get(index: number): BlueprintSpecComponentsCriticalityOutputReference {
    return new BlueprintSpecComponentsCriticalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlueprintSpecCostProfile {
  /**
  * name of the cost profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * version of the cost profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
}

export function blueprintSpecCostProfileToTerraform(struct?: BlueprintSpecCostProfileOutputReference | BlueprintSpecCostProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function blueprintSpecCostProfileToHclTerraform(struct?: BlueprintSpecCostProfileOutputReference | BlueprintSpecCostProfile): any {
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

export class BlueprintSpecCostProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecCostProfile | undefined {
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

  public set internalValue(value: BlueprintSpecCostProfile | undefined) {
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
export interface BlueprintSpecCustomAddons {
  /**
  * other addons current addons depends on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#depends_on Blueprint#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * name of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * version of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
}

export function blueprintSpecCustomAddonsToTerraform(struct?: BlueprintSpecCustomAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function blueprintSpecCustomAddonsToHclTerraform(struct?: BlueprintSpecCustomAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class BlueprintSpecCustomAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlueprintSpecCustomAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
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

  public set internalValue(value: BlueprintSpecCustomAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependsOn = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependsOn = value.dependsOn;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

export class BlueprintSpecCustomAddonsList extends cdktf.ComplexList {
  public internalValue? : BlueprintSpecCustomAddons[] | cdktf.IResolvable

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
  public get(index: number): BlueprintSpecCustomAddonsOutputReference {
    return new BlueprintSpecCustomAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#aws Blueprint#aws}
  */
  readonly aws?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#vault Blueprint#vault}
  */
  readonly vault?: boolean | cdktf.IResolvable;
}

export function blueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToTerraform(struct?: BlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference | BlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: cdktf.booleanToTerraform(struct!.aws),
    vault: cdktf.booleanToTerraform(struct!.vault),
  }
}


export function blueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToHclTerraform(struct?: BlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference | BlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: cdktf.booleanToHclTerraform(struct!.aws),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vault: {
      value: cdktf.booleanToHclTerraform(struct!.vault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aws = undefined;
      this._vault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aws = value.aws;
      this._vault = value.vault;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws?: boolean | cdktf.IResolvable; 
  public get aws() {
    return this.getBooleanAttribute('aws');
  }
  public set aws(value: boolean | cdktf.IResolvable) {
    this._aws = value;
  }
  public resetAws() {
    this._aws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws;
  }

  // vault - computed: false, optional: true, required: false
  private _vault?: boolean | cdktf.IResolvable; 
  public get vault() {
    return this.getBooleanAttribute('vault');
  }
  public set vault(value: boolean | cdktf.IResolvable) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}
export interface BlueprintSpecDefaultAddonsCsiSecretStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_secret_rotation Blueprint#enable_secret_rotation}
  */
  readonly enableSecretRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#rotation_poll_interval Blueprint#rotation_poll_interval}
  */
  readonly rotationPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#sync_secrets Blueprint#sync_secrets}
  */
  readonly syncSecrets?: boolean | cdktf.IResolvable;
  /**
  * providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#providers Blueprint#providers}
  */
  readonly providers?: BlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders;
}

export function blueprintSpecDefaultAddonsCsiSecretStoreConfigToTerraform(struct?: BlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference | BlueprintSpecDefaultAddonsCsiSecretStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_secret_rotation: cdktf.booleanToTerraform(struct!.enableSecretRotation),
    rotation_poll_interval: cdktf.stringToTerraform(struct!.rotationPollInterval),
    sync_secrets: cdktf.booleanToTerraform(struct!.syncSecrets),
    providers: blueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToTerraform(struct!.providers),
  }
}


export function blueprintSpecDefaultAddonsCsiSecretStoreConfigToHclTerraform(struct?: BlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference | BlueprintSpecDefaultAddonsCsiSecretStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_secret_rotation: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecretRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotation_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.syncSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    providers: {
      value: blueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToHclTerraform(struct!.providers),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsCsiSecretStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSecretRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecretRotation = this._enableSecretRotation;
    }
    if (this._rotationPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPollInterval = this._rotationPollInterval;
    }
    if (this._syncSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSecrets = this._syncSecrets;
    }
    if (this._providers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsCsiSecretStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSecretRotation = undefined;
      this._rotationPollInterval = undefined;
      this._syncSecrets = undefined;
      this._providers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSecretRotation = value.enableSecretRotation;
      this._rotationPollInterval = value.rotationPollInterval;
      this._syncSecrets = value.syncSecrets;
      this._providers.internalValue = value.providers;
    }
  }

  // enable_secret_rotation - computed: false, optional: true, required: false
  private _enableSecretRotation?: boolean | cdktf.IResolvable; 
  public get enableSecretRotation() {
    return this.getBooleanAttribute('enable_secret_rotation');
  }
  public set enableSecretRotation(value: boolean | cdktf.IResolvable) {
    this._enableSecretRotation = value;
  }
  public resetEnableSecretRotation() {
    this._enableSecretRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretRotationInput() {
    return this._enableSecretRotation;
  }

  // rotation_poll_interval - computed: false, optional: true, required: false
  private _rotationPollInterval?: string; 
  public get rotationPollInterval() {
    return this.getStringAttribute('rotation_poll_interval');
  }
  public set rotationPollInterval(value: string) {
    this._rotationPollInterval = value;
  }
  public resetRotationPollInterval() {
    this._rotationPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPollIntervalInput() {
    return this._rotationPollInterval;
  }

  // sync_secrets - computed: false, optional: true, required: false
  private _syncSecrets?: boolean | cdktf.IResolvable; 
  public get syncSecrets() {
    return this.getBooleanAttribute('sync_secrets');
  }
  public set syncSecrets(value: boolean | cdktf.IResolvable) {
    this._syncSecrets = value;
  }
  public resetSyncSecrets() {
    this._syncSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSecretsInput() {
    return this._syncSecrets;
  }

  // providers - computed: false, optional: true, required: false
  private _providers = new BlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference(this, "providers");
  public get providers() {
    return this._providers;
  }
  public putProviders(value: BlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders) {
    this._providers.internalValue = value;
  }
  public resetProviders() {
    this._providers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#labels Blueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#namespace Blueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#resource Blueprint#resource}
  */
  readonly resource?: string;
}

export function blueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function blueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._resource = value.resource;
    }
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringGpuOperator {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#customization_enabled Blueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#discovery Blueprint#discovery}
  */
  readonly discovery?: BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery;
}

export function blueprintSpecDefaultAddonsMonitoringGpuOperatorToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference | BlueprintSpecDefaultAddonsMonitoringGpuOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: blueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToTerraform(struct!.discovery),
  }
}


export function blueprintSpecDefaultAddonsMonitoringGpuOperatorToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference | BlueprintSpecDefaultAddonsMonitoringGpuOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: blueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringGpuOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationEnabled = this._customizationEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringGpuOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customizationEnabled = undefined;
      this._enabled = undefined;
      this._discovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customizationEnabled = value.customizationEnabled;
      this._enabled = value.enabled;
      this._discovery.internalValue = value.discovery;
    }
  }

  // customization_enabled - computed: false, optional: true, required: false
  private _customizationEnabled?: boolean | cdktf.IResolvable; 
  public get customizationEnabled() {
    return this.getBooleanAttribute('customization_enabled');
  }
  public set customizationEnabled(value: boolean | cdktf.IResolvable) {
    this._customizationEnabled = value;
  }
  public resetCustomizationEnabled() {
    this._customizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationEnabledInput() {
    return this._customizationEnabled;
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

  // discovery - computed: false, optional: true, required: false
  private _discovery = new BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: BlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#labels Blueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#namespace Blueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#resource Blueprint#resource}
  */
  readonly resource?: string;
}

export function blueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function blueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._resource = value.resource;
    }
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringHelmExporter {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#customization_enabled Blueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#discovery Blueprint#discovery}
  */
  readonly discovery?: BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery;
}

export function blueprintSpecDefaultAddonsMonitoringHelmExporterToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference | BlueprintSpecDefaultAddonsMonitoringHelmExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: blueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToTerraform(struct!.discovery),
  }
}


export function blueprintSpecDefaultAddonsMonitoringHelmExporterToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference | BlueprintSpecDefaultAddonsMonitoringHelmExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: blueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringHelmExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationEnabled = this._customizationEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringHelmExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customizationEnabled = undefined;
      this._enabled = undefined;
      this._discovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customizationEnabled = value.customizationEnabled;
      this._enabled = value.enabled;
      this._discovery.internalValue = value.discovery;
    }
  }

  // customization_enabled - computed: false, optional: true, required: false
  private _customizationEnabled?: boolean | cdktf.IResolvable; 
  public get customizationEnabled() {
    return this.getBooleanAttribute('customization_enabled');
  }
  public set customizationEnabled(value: boolean | cdktf.IResolvable) {
    this._customizationEnabled = value;
  }
  public resetCustomizationEnabled() {
    this._customizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationEnabledInput() {
    return this._customizationEnabled;
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

  // discovery - computed: false, optional: true, required: false
  private _discovery = new BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: BlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#labels Blueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#namespace Blueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#resource Blueprint#resource}
  */
  readonly resource?: string;
}

export function blueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function blueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._resource = value.resource;
    }
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringKubeStateMetrics {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#customization_enabled Blueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#discovery Blueprint#discovery}
  */
  readonly discovery?: BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery;
}

export function blueprintSpecDefaultAddonsMonitoringKubeStateMetricsToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference | BlueprintSpecDefaultAddonsMonitoringKubeStateMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: blueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToTerraform(struct!.discovery),
  }
}


export function blueprintSpecDefaultAddonsMonitoringKubeStateMetricsToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference | BlueprintSpecDefaultAddonsMonitoringKubeStateMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: blueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringKubeStateMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationEnabled = this._customizationEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringKubeStateMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customizationEnabled = undefined;
      this._enabled = undefined;
      this._discovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customizationEnabled = value.customizationEnabled;
      this._enabled = value.enabled;
      this._discovery.internalValue = value.discovery;
    }
  }

  // customization_enabled - computed: false, optional: true, required: false
  private _customizationEnabled?: boolean | cdktf.IResolvable; 
  public get customizationEnabled() {
    return this.getBooleanAttribute('customization_enabled');
  }
  public set customizationEnabled(value: boolean | cdktf.IResolvable) {
    this._customizationEnabled = value;
  }
  public resetCustomizationEnabled() {
    this._customizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationEnabledInput() {
    return this._customizationEnabled;
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

  // discovery - computed: false, optional: true, required: false
  private _discovery = new BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#labels Blueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#namespace Blueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#resource Blueprint#resource}
  */
  readonly resource?: string;
}

export function blueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function blueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._resource = value.resource;
    }
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringMetricsServer {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#customization_enabled Blueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#discovery Blueprint#discovery}
  */
  readonly discovery?: BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery;
}

export function blueprintSpecDefaultAddonsMonitoringMetricsServerToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference | BlueprintSpecDefaultAddonsMonitoringMetricsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: blueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToTerraform(struct!.discovery),
  }
}


export function blueprintSpecDefaultAddonsMonitoringMetricsServerToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference | BlueprintSpecDefaultAddonsMonitoringMetricsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: blueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringMetricsServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationEnabled = this._customizationEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringMetricsServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customizationEnabled = undefined;
      this._enabled = undefined;
      this._discovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customizationEnabled = value.customizationEnabled;
      this._enabled = value.enabled;
      this._discovery.internalValue = value.discovery;
    }
  }

  // customization_enabled - computed: false, optional: true, required: false
  private _customizationEnabled?: boolean | cdktf.IResolvable; 
  public get customizationEnabled() {
    return this.getBooleanAttribute('customization_enabled');
  }
  public set customizationEnabled(value: boolean | cdktf.IResolvable) {
    this._customizationEnabled = value;
  }
  public resetCustomizationEnabled() {
    this._customizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationEnabledInput() {
    return this._customizationEnabled;
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

  // discovery - computed: false, optional: true, required: false
  private _discovery = new BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: BlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#labels Blueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#namespace Blueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#resource Blueprint#resource}
  */
  readonly resource?: string;
}

export function blueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function blueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._resource = value.resource;
    }
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringNodeExporter {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#customization_enabled Blueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#discovery Blueprint#discovery}
  */
  readonly discovery?: BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery;
}

export function blueprintSpecDefaultAddonsMonitoringNodeExporterToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference | BlueprintSpecDefaultAddonsMonitoringNodeExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: blueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToTerraform(struct!.discovery),
  }
}


export function blueprintSpecDefaultAddonsMonitoringNodeExporterToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference | BlueprintSpecDefaultAddonsMonitoringNodeExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: blueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringNodeExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationEnabled = this._customizationEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringNodeExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customizationEnabled = undefined;
      this._enabled = undefined;
      this._discovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customizationEnabled = value.customizationEnabled;
      this._enabled = value.enabled;
      this._discovery.internalValue = value.discovery;
    }
  }

  // customization_enabled - computed: false, optional: true, required: false
  private _customizationEnabled?: boolean | cdktf.IResolvable; 
  public get customizationEnabled() {
    return this.getBooleanAttribute('customization_enabled');
  }
  public set customizationEnabled(value: boolean | cdktf.IResolvable) {
    this._customizationEnabled = value;
  }
  public resetCustomizationEnabled() {
    this._customizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationEnabledInput() {
    return this._customizationEnabled;
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

  // discovery - computed: false, optional: true, required: false
  private _discovery = new BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: BlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#labels Blueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#namespace Blueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#resource Blueprint#resource}
  */
  readonly resource?: string;
}

export function blueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function blueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference | BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._resource = value.resource;
    }
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringPrometheusAdapter {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#customization_enabled Blueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#discovery Blueprint#discovery}
  */
  readonly discovery?: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery;
}

export function blueprintSpecDefaultAddonsMonitoringPrometheusAdapterToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference | BlueprintSpecDefaultAddonsMonitoringPrometheusAdapter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: blueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToTerraform(struct!.discovery),
  }
}


export function blueprintSpecDefaultAddonsMonitoringPrometheusAdapterToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference | BlueprintSpecDefaultAddonsMonitoringPrometheusAdapter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: blueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringPrometheusAdapter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationEnabled = this._customizationEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customizationEnabled = undefined;
      this._enabled = undefined;
      this._discovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customizationEnabled = value.customizationEnabled;
      this._enabled = value.enabled;
      this._discovery.internalValue = value.discovery;
    }
  }

  // customization_enabled - computed: false, optional: true, required: false
  private _customizationEnabled?: boolean | cdktf.IResolvable; 
  public get customizationEnabled() {
    return this.getBooleanAttribute('customization_enabled');
  }
  public set customizationEnabled(value: boolean | cdktf.IResolvable) {
    this._customizationEnabled = value;
  }
  public resetCustomizationEnabled() {
    this._customizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationEnabledInput() {
    return this._customizationEnabled;
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

  // discovery - computed: false, optional: true, required: false
  private _discovery = new BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoringResourcesLimits {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#cpu Blueprint#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#memory Blueprint#memory}
  */
  readonly memory?: string;
}

export function blueprintSpecDefaultAddonsMonitoringResourcesLimitsToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference | BlueprintSpecDefaultAddonsMonitoringResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function blueprintSpecDefaultAddonsMonitoringResourcesLimitsToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference | BlueprintSpecDefaultAddonsMonitoringResourcesLimits): any {
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

export class BlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringResourcesLimits | undefined {
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

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringResourcesLimits | undefined) {
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
export interface BlueprintSpecDefaultAddonsMonitoringResources {
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#limits Blueprint#limits}
  */
  readonly limits?: BlueprintSpecDefaultAddonsMonitoringResourcesLimits;
}

export function blueprintSpecDefaultAddonsMonitoringResourcesToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringResourcesOutputReference | BlueprintSpecDefaultAddonsMonitoringResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: blueprintSpecDefaultAddonsMonitoringResourcesLimitsToTerraform(struct!.limits),
  }
}


export function blueprintSpecDefaultAddonsMonitoringResourcesToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringResourcesOutputReference | BlueprintSpecDefaultAddonsMonitoringResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: blueprintSpecDefaultAddonsMonitoringResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringResourcesLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoringResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoringResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits.internalValue = value.limits;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new BlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: BlueprintSpecDefaultAddonsMonitoringResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }
}
export interface BlueprintSpecDefaultAddonsMonitoring {
  /**
  * gpu_operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#gpu_operator Blueprint#gpu_operator}
  */
  readonly gpuOperator?: BlueprintSpecDefaultAddonsMonitoringGpuOperator;
  /**
  * helm_exporter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#helm_exporter Blueprint#helm_exporter}
  */
  readonly helmExporter?: BlueprintSpecDefaultAddonsMonitoringHelmExporter;
  /**
  * kube_state_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#kube_state_metrics Blueprint#kube_state_metrics}
  */
  readonly kubeStateMetrics?: BlueprintSpecDefaultAddonsMonitoringKubeStateMetrics;
  /**
  * metrics_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#metrics_server Blueprint#metrics_server}
  */
  readonly metricsServer?: BlueprintSpecDefaultAddonsMonitoringMetricsServer;
  /**
  * node_exporter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#node_exporter Blueprint#node_exporter}
  */
  readonly nodeExporter?: BlueprintSpecDefaultAddonsMonitoringNodeExporter;
  /**
  * prometheus_adapter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#prometheus_adapter Blueprint#prometheus_adapter}
  */
  readonly prometheusAdapter?: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapter;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#resources Blueprint#resources}
  */
  readonly resources?: BlueprintSpecDefaultAddonsMonitoringResources;
}

export function blueprintSpecDefaultAddonsMonitoringToTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringOutputReference | BlueprintSpecDefaultAddonsMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_operator: blueprintSpecDefaultAddonsMonitoringGpuOperatorToTerraform(struct!.gpuOperator),
    helm_exporter: blueprintSpecDefaultAddonsMonitoringHelmExporterToTerraform(struct!.helmExporter),
    kube_state_metrics: blueprintSpecDefaultAddonsMonitoringKubeStateMetricsToTerraform(struct!.kubeStateMetrics),
    metrics_server: blueprintSpecDefaultAddonsMonitoringMetricsServerToTerraform(struct!.metricsServer),
    node_exporter: blueprintSpecDefaultAddonsMonitoringNodeExporterToTerraform(struct!.nodeExporter),
    prometheus_adapter: blueprintSpecDefaultAddonsMonitoringPrometheusAdapterToTerraform(struct!.prometheusAdapter),
    resources: blueprintSpecDefaultAddonsMonitoringResourcesToTerraform(struct!.resources),
  }
}


export function blueprintSpecDefaultAddonsMonitoringToHclTerraform(struct?: BlueprintSpecDefaultAddonsMonitoringOutputReference | BlueprintSpecDefaultAddonsMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_operator: {
      value: blueprintSpecDefaultAddonsMonitoringGpuOperatorToHclTerraform(struct!.gpuOperator),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringGpuOperatorList",
    },
    helm_exporter: {
      value: blueprintSpecDefaultAddonsMonitoringHelmExporterToHclTerraform(struct!.helmExporter),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringHelmExporterList",
    },
    kube_state_metrics: {
      value: blueprintSpecDefaultAddonsMonitoringKubeStateMetricsToHclTerraform(struct!.kubeStateMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsList",
    },
    metrics_server: {
      value: blueprintSpecDefaultAddonsMonitoringMetricsServerToHclTerraform(struct!.metricsServer),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringMetricsServerList",
    },
    node_exporter: {
      value: blueprintSpecDefaultAddonsMonitoringNodeExporterToHclTerraform(struct!.nodeExporter),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringNodeExporterList",
    },
    prometheus_adapter: {
      value: blueprintSpecDefaultAddonsMonitoringPrometheusAdapterToHclTerraform(struct!.prometheusAdapter),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterList",
    },
    resources: {
      value: blueprintSpecDefaultAddonsMonitoringResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddonsMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuOperator = this._gpuOperator?.internalValue;
    }
    if (this._helmExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmExporter = this._helmExporter?.internalValue;
    }
    if (this._kubeStateMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeStateMetrics = this._kubeStateMetrics?.internalValue;
    }
    if (this._metricsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsServer = this._metricsServer?.internalValue;
    }
    if (this._nodeExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter?.internalValue;
    }
    if (this._prometheusAdapter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusAdapter = this._prometheusAdapter?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddonsMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuOperator.internalValue = undefined;
      this._helmExporter.internalValue = undefined;
      this._kubeStateMetrics.internalValue = undefined;
      this._metricsServer.internalValue = undefined;
      this._nodeExporter.internalValue = undefined;
      this._prometheusAdapter.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuOperator.internalValue = value.gpuOperator;
      this._helmExporter.internalValue = value.helmExporter;
      this._kubeStateMetrics.internalValue = value.kubeStateMetrics;
      this._metricsServer.internalValue = value.metricsServer;
      this._nodeExporter.internalValue = value.nodeExporter;
      this._prometheusAdapter.internalValue = value.prometheusAdapter;
      this._resources.internalValue = value.resources;
    }
  }

  // gpu_operator - computed: false, optional: true, required: false
  private _gpuOperator = new BlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference(this, "gpu_operator");
  public get gpuOperator() {
    return this._gpuOperator;
  }
  public putGpuOperator(value: BlueprintSpecDefaultAddonsMonitoringGpuOperator) {
    this._gpuOperator.internalValue = value;
  }
  public resetGpuOperator() {
    this._gpuOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuOperatorInput() {
    return this._gpuOperator.internalValue;
  }

  // helm_exporter - computed: false, optional: true, required: false
  private _helmExporter = new BlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference(this, "helm_exporter");
  public get helmExporter() {
    return this._helmExporter;
  }
  public putHelmExporter(value: BlueprintSpecDefaultAddonsMonitoringHelmExporter) {
    this._helmExporter.internalValue = value;
  }
  public resetHelmExporter() {
    this._helmExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmExporterInput() {
    return this._helmExporter.internalValue;
  }

  // kube_state_metrics - computed: false, optional: true, required: false
  private _kubeStateMetrics = new BlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference(this, "kube_state_metrics");
  public get kubeStateMetrics() {
    return this._kubeStateMetrics;
  }
  public putKubeStateMetrics(value: BlueprintSpecDefaultAddonsMonitoringKubeStateMetrics) {
    this._kubeStateMetrics.internalValue = value;
  }
  public resetKubeStateMetrics() {
    this._kubeStateMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeStateMetricsInput() {
    return this._kubeStateMetrics.internalValue;
  }

  // metrics_server - computed: false, optional: true, required: false
  private _metricsServer = new BlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference(this, "metrics_server");
  public get metricsServer() {
    return this._metricsServer;
  }
  public putMetricsServer(value: BlueprintSpecDefaultAddonsMonitoringMetricsServer) {
    this._metricsServer.internalValue = value;
  }
  public resetMetricsServer() {
    this._metricsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsServerInput() {
    return this._metricsServer.internalValue;
  }

  // node_exporter - computed: false, optional: true, required: false
  private _nodeExporter = new BlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference(this, "node_exporter");
  public get nodeExporter() {
    return this._nodeExporter;
  }
  public putNodeExporter(value: BlueprintSpecDefaultAddonsMonitoringNodeExporter) {
    this._nodeExporter.internalValue = value;
  }
  public resetNodeExporter() {
    this._nodeExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter.internalValue;
  }

  // prometheus_adapter - computed: false, optional: true, required: false
  private _prometheusAdapter = new BlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference(this, "prometheus_adapter");
  public get prometheusAdapter() {
    return this._prometheusAdapter;
  }
  public putPrometheusAdapter(value: BlueprintSpecDefaultAddonsMonitoringPrometheusAdapter) {
    this._prometheusAdapter.internalValue = value;
  }
  public resetPrometheusAdapter() {
    this._prometheusAdapter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusAdapterInput() {
    return this._prometheusAdapter.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new BlueprintSpecDefaultAddonsMonitoringResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: BlueprintSpecDefaultAddonsMonitoringResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface BlueprintSpecDefaultAddons {
  /**
  * enable calico cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_calico_cni Blueprint#enable_calico_cni}
  */
  readonly enableCalicoCni?: boolean | cdktf.IResolvable;
  /**
  * enable cilium cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_cilium_cni Blueprint#enable_cilium_cni}
  */
  readonly enableCiliumCni?: boolean | cdktf.IResolvable;
  /**
  * enable cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_cni Blueprint#enable_cni}
  */
  readonly enableCni?: boolean | cdktf.IResolvable;
  /**
  * enable csi secret store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_csi_secret_store Blueprint#enable_csi_secret_store}
  */
  readonly enableCsiSecretStore?: boolean | cdktf.IResolvable;
  /**
  * enable default ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_ingress Blueprint#enable_ingress}
  */
  readonly enableIngress?: boolean | cdktf.IResolvable;
  /**
  * enable kubeovn cilium chaining cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_kubeovn_chaning_cni Blueprint#enable_kubeovn_chaning_cni}
  */
  readonly enableKubeovnChaningCni?: boolean | cdktf.IResolvable;
  /**
  * enable kubeovn cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_kubeovn_cni Blueprint#enable_kubeovn_cni}
  */
  readonly enableKubeovnCni?: boolean | cdktf.IResolvable;
  /**
  * enable default logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_logging Blueprint#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * enable default monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_monitoring Blueprint#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * enable rook ceph storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_rook_ceph Blueprint#enable_rook_ceph}
  */
  readonly enableRookCeph?: boolean | cdktf.IResolvable;
  /**
  * enable virtual machine workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_vm Blueprint#enable_vm}
  */
  readonly enableVm?: boolean | cdktf.IResolvable;
  /**
  * csi_secret_store_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#csi_secret_store_config Blueprint#csi_secret_store_config}
  */
  readonly csiSecretStoreConfig?: BlueprintSpecDefaultAddonsCsiSecretStoreConfig;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#monitoring Blueprint#monitoring}
  */
  readonly monitoring?: BlueprintSpecDefaultAddonsMonitoring;
}

export function blueprintSpecDefaultAddonsToTerraform(struct?: BlueprintSpecDefaultAddonsOutputReference | BlueprintSpecDefaultAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_calico_cni: cdktf.booleanToTerraform(struct!.enableCalicoCni),
    enable_cilium_cni: cdktf.booleanToTerraform(struct!.enableCiliumCni),
    enable_cni: cdktf.booleanToTerraform(struct!.enableCni),
    enable_csi_secret_store: cdktf.booleanToTerraform(struct!.enableCsiSecretStore),
    enable_ingress: cdktf.booleanToTerraform(struct!.enableIngress),
    enable_kubeovn_chaning_cni: cdktf.booleanToTerraform(struct!.enableKubeovnChaningCni),
    enable_kubeovn_cni: cdktf.booleanToTerraform(struct!.enableKubeovnCni),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    enable_monitoring: cdktf.booleanToTerraform(struct!.enableMonitoring),
    enable_rook_ceph: cdktf.booleanToTerraform(struct!.enableRookCeph),
    enable_vm: cdktf.booleanToTerraform(struct!.enableVm),
    csi_secret_store_config: blueprintSpecDefaultAddonsCsiSecretStoreConfigToTerraform(struct!.csiSecretStoreConfig),
    monitoring: blueprintSpecDefaultAddonsMonitoringToTerraform(struct!.monitoring),
  }
}


export function blueprintSpecDefaultAddonsToHclTerraform(struct?: BlueprintSpecDefaultAddonsOutputReference | BlueprintSpecDefaultAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_calico_cni: {
      value: cdktf.booleanToHclTerraform(struct!.enableCalicoCni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cilium_cni: {
      value: cdktf.booleanToHclTerraform(struct!.enableCiliumCni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cni: {
      value: cdktf.booleanToHclTerraform(struct!.enableCni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_csi_secret_store: {
      value: cdktf.booleanToHclTerraform(struct!.enableCsiSecretStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.enableIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_kubeovn_chaning_cni: {
      value: cdktf.booleanToHclTerraform(struct!.enableKubeovnChaningCni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_kubeovn_cni: {
      value: cdktf.booleanToHclTerraform(struct!.enableKubeovnCni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rook_ceph: {
      value: cdktf.booleanToHclTerraform(struct!.enableRookCeph),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vm: {
      value: cdktf.booleanToHclTerraform(struct!.enableVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    csi_secret_store_config: {
      value: blueprintSpecDefaultAddonsCsiSecretStoreConfigToHclTerraform(struct!.csiSecretStoreConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsCsiSecretStoreConfigList",
    },
    monitoring: {
      value: blueprintSpecDefaultAddonsMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsMonitoringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecDefaultAddonsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDefaultAddons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCalicoCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCalicoCni = this._enableCalicoCni;
    }
    if (this._enableCiliumCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCiliumCni = this._enableCiliumCni;
    }
    if (this._enableCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCni = this._enableCni;
    }
    if (this._enableCsiSecretStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCsiSecretStore = this._enableCsiSecretStore;
    }
    if (this._enableIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIngress = this._enableIngress;
    }
    if (this._enableKubeovnChaningCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKubeovnChaningCni = this._enableKubeovnChaningCni;
    }
    if (this._enableKubeovnCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKubeovnCni = this._enableKubeovnCni;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._enableMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMonitoring = this._enableMonitoring;
    }
    if (this._enableRookCeph !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRookCeph = this._enableRookCeph;
    }
    if (this._enableVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVm = this._enableVm;
    }
    if (this._csiSecretStoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiSecretStoreConfig = this._csiSecretStoreConfig?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDefaultAddons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCalicoCni = undefined;
      this._enableCiliumCni = undefined;
      this._enableCni = undefined;
      this._enableCsiSecretStore = undefined;
      this._enableIngress = undefined;
      this._enableKubeovnChaningCni = undefined;
      this._enableKubeovnCni = undefined;
      this._enableLogging = undefined;
      this._enableMonitoring = undefined;
      this._enableRookCeph = undefined;
      this._enableVm = undefined;
      this._csiSecretStoreConfig.internalValue = undefined;
      this._monitoring.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCalicoCni = value.enableCalicoCni;
      this._enableCiliumCni = value.enableCiliumCni;
      this._enableCni = value.enableCni;
      this._enableCsiSecretStore = value.enableCsiSecretStore;
      this._enableIngress = value.enableIngress;
      this._enableKubeovnChaningCni = value.enableKubeovnChaningCni;
      this._enableKubeovnCni = value.enableKubeovnCni;
      this._enableLogging = value.enableLogging;
      this._enableMonitoring = value.enableMonitoring;
      this._enableRookCeph = value.enableRookCeph;
      this._enableVm = value.enableVm;
      this._csiSecretStoreConfig.internalValue = value.csiSecretStoreConfig;
      this._monitoring.internalValue = value.monitoring;
    }
  }

  // enable_calico_cni - computed: false, optional: true, required: false
  private _enableCalicoCni?: boolean | cdktf.IResolvable; 
  public get enableCalicoCni() {
    return this.getBooleanAttribute('enable_calico_cni');
  }
  public set enableCalicoCni(value: boolean | cdktf.IResolvable) {
    this._enableCalicoCni = value;
  }
  public resetEnableCalicoCni() {
    this._enableCalicoCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCalicoCniInput() {
    return this._enableCalicoCni;
  }

  // enable_cilium_cni - computed: false, optional: true, required: false
  private _enableCiliumCni?: boolean | cdktf.IResolvable; 
  public get enableCiliumCni() {
    return this.getBooleanAttribute('enable_cilium_cni');
  }
  public set enableCiliumCni(value: boolean | cdktf.IResolvable) {
    this._enableCiliumCni = value;
  }
  public resetEnableCiliumCni() {
    this._enableCiliumCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCiliumCniInput() {
    return this._enableCiliumCni;
  }

  // enable_cni - computed: false, optional: true, required: false
  private _enableCni?: boolean | cdktf.IResolvable; 
  public get enableCni() {
    return this.getBooleanAttribute('enable_cni');
  }
  public set enableCni(value: boolean | cdktf.IResolvable) {
    this._enableCni = value;
  }
  public resetEnableCni() {
    this._enableCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCniInput() {
    return this._enableCni;
  }

  // enable_csi_secret_store - computed: false, optional: true, required: false
  private _enableCsiSecretStore?: boolean | cdktf.IResolvable; 
  public get enableCsiSecretStore() {
    return this.getBooleanAttribute('enable_csi_secret_store');
  }
  public set enableCsiSecretStore(value: boolean | cdktf.IResolvable) {
    this._enableCsiSecretStore = value;
  }
  public resetEnableCsiSecretStore() {
    this._enableCsiSecretStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCsiSecretStoreInput() {
    return this._enableCsiSecretStore;
  }

  // enable_ingress - computed: false, optional: true, required: false
  private _enableIngress?: boolean | cdktf.IResolvable; 
  public get enableIngress() {
    return this.getBooleanAttribute('enable_ingress');
  }
  public set enableIngress(value: boolean | cdktf.IResolvable) {
    this._enableIngress = value;
  }
  public resetEnableIngress() {
    this._enableIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIngressInput() {
    return this._enableIngress;
  }

  // enable_kubeovn_chaning_cni - computed: false, optional: true, required: false
  private _enableKubeovnChaningCni?: boolean | cdktf.IResolvable; 
  public get enableKubeovnChaningCni() {
    return this.getBooleanAttribute('enable_kubeovn_chaning_cni');
  }
  public set enableKubeovnChaningCni(value: boolean | cdktf.IResolvable) {
    this._enableKubeovnChaningCni = value;
  }
  public resetEnableKubeovnChaningCni() {
    this._enableKubeovnChaningCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubeovnChaningCniInput() {
    return this._enableKubeovnChaningCni;
  }

  // enable_kubeovn_cni - computed: false, optional: true, required: false
  private _enableKubeovnCni?: boolean | cdktf.IResolvable; 
  public get enableKubeovnCni() {
    return this.getBooleanAttribute('enable_kubeovn_cni');
  }
  public set enableKubeovnCni(value: boolean | cdktf.IResolvable) {
    this._enableKubeovnCni = value;
  }
  public resetEnableKubeovnCni() {
    this._enableKubeovnCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubeovnCniInput() {
    return this._enableKubeovnCni;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // enable_rook_ceph - computed: false, optional: true, required: false
  private _enableRookCeph?: boolean | cdktf.IResolvable; 
  public get enableRookCeph() {
    return this.getBooleanAttribute('enable_rook_ceph');
  }
  public set enableRookCeph(value: boolean | cdktf.IResolvable) {
    this._enableRookCeph = value;
  }
  public resetEnableRookCeph() {
    this._enableRookCeph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRookCephInput() {
    return this._enableRookCeph;
  }

  // enable_vm - computed: false, optional: true, required: false
  private _enableVm?: boolean | cdktf.IResolvable; 
  public get enableVm() {
    return this.getBooleanAttribute('enable_vm');
  }
  public set enableVm(value: boolean | cdktf.IResolvable) {
    this._enableVm = value;
  }
  public resetEnableVm() {
    this._enableVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVmInput() {
    return this._enableVm;
  }

  // csi_secret_store_config - computed: false, optional: true, required: false
  private _csiSecretStoreConfig = new BlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference(this, "csi_secret_store_config");
  public get csiSecretStoreConfig() {
    return this._csiSecretStoreConfig;
  }
  public putCsiSecretStoreConfig(value: BlueprintSpecDefaultAddonsCsiSecretStoreConfig) {
    this._csiSecretStoreConfig.internalValue = value;
  }
  public resetCsiSecretStoreConfig() {
    this._csiSecretStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiSecretStoreConfigInput() {
    return this._csiSecretStoreConfig.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new BlueprintSpecDefaultAddonsMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: BlueprintSpecDefaultAddonsMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }
}
export interface BlueprintSpecDrift {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#action Blueprint#action}
  */
  readonly action?: string;
  /**
  * flag to specify if drift reconcillation is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function blueprintSpecDriftToTerraform(struct?: BlueprintSpecDriftOutputReference | BlueprintSpecDrift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function blueprintSpecDriftToHclTerraform(struct?: BlueprintSpecDriftOutputReference | BlueprintSpecDrift): any {
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

export class BlueprintSpecDriftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDrift | undefined {
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

  public set internalValue(value: BlueprintSpecDrift | undefined) {
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
export interface BlueprintSpecDriftWebhook {
  /**
  * enable drift 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function blueprintSpecDriftWebhookToTerraform(struct?: BlueprintSpecDriftWebhookOutputReference | BlueprintSpecDriftWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function blueprintSpecDriftWebhookToHclTerraform(struct?: BlueprintSpecDriftWebhookOutputReference | BlueprintSpecDriftWebhook): any {
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

export class BlueprintSpecDriftWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecDriftWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecDriftWebhook | undefined) {
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
export interface BlueprintSpecNamespaceConfig {
  /**
  * flag to enable namespace sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enable_sync Blueprint#enable_sync}
  */
  readonly enableSync?: boolean | cdktf.IResolvable;
  /**
  * Synchronizing type as managed or unmanaged namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#sync_type Blueprint#sync_type}
  */
  readonly syncType?: string;
}

export function blueprintSpecNamespaceConfigToTerraform(struct?: BlueprintSpecNamespaceConfigOutputReference | BlueprintSpecNamespaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_sync: cdktf.booleanToTerraform(struct!.enableSync),
    sync_type: cdktf.stringToTerraform(struct!.syncType),
  }
}


export function blueprintSpecNamespaceConfigToHclTerraform(struct?: BlueprintSpecNamespaceConfigOutputReference | BlueprintSpecNamespaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_sync: {
      value: cdktf.booleanToHclTerraform(struct!.enableSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_type: {
      value: cdktf.stringToHclTerraform(struct!.syncType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecNamespaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecNamespaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSync = this._enableSync;
    }
    if (this._syncType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncType = this._syncType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecNamespaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSync = undefined;
      this._syncType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSync = value.enableSync;
      this._syncType = value.syncType;
    }
  }

  // enable_sync - computed: false, optional: true, required: false
  private _enableSync?: boolean | cdktf.IResolvable; 
  public get enableSync() {
    return this.getBooleanAttribute('enable_sync');
  }
  public set enableSync(value: boolean | cdktf.IResolvable) {
    this._enableSync = value;
  }
  public resetEnableSync() {
    this._enableSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSyncInput() {
    return this._enableSync;
  }

  // sync_type - computed: false, optional: true, required: false
  private _syncType?: string; 
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
  public set syncType(value: string) {
    this._syncType = value;
  }
  public resetSyncType() {
    this._syncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
  }
}
export interface BlueprintSpecNetworkPolicyPolicies {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#system_catalog Blueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version_state Blueprint#version_state}
  */
  readonly versionState?: string;
}

export function blueprintSpecNetworkPolicyPoliciesToTerraform(struct?: BlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable): any {
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


export function blueprintSpecNetworkPolicyPoliciesToHclTerraform(struct?: BlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable): any {
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

export class BlueprintSpecNetworkPolicyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable | undefined) {
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

export class BlueprintSpecNetworkPolicyPoliciesList extends cdktf.ComplexList {
  public internalValue? : BlueprintSpecNetworkPolicyPolicies[] | cdktf.IResolvable

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
  public get(index: number): BlueprintSpecNetworkPolicyPoliciesOutputReference {
    return new BlueprintSpecNetworkPolicyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlueprintSpecNetworkPolicyProfile {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#system_catalog Blueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version_state Blueprint#version_state}
  */
  readonly versionState?: string;
}

export function blueprintSpecNetworkPolicyProfileToTerraform(struct?: BlueprintSpecNetworkPolicyProfileOutputReference | BlueprintSpecNetworkPolicyProfile): any {
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


export function blueprintSpecNetworkPolicyProfileToHclTerraform(struct?: BlueprintSpecNetworkPolicyProfileOutputReference | BlueprintSpecNetworkPolicyProfile): any {
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

export class BlueprintSpecNetworkPolicyProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecNetworkPolicyProfile | undefined {
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

  public set internalValue(value: BlueprintSpecNetworkPolicyProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface BlueprintSpecNetworkPolicy {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#policies Blueprint#policies}
  */
  readonly policies?: BlueprintSpecNetworkPolicyPolicies[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#profile Blueprint#profile}
  */
  readonly profile?: BlueprintSpecNetworkPolicyProfile;
}

export function blueprintSpecNetworkPolicyToTerraform(struct?: BlueprintSpecNetworkPolicyOutputReference | BlueprintSpecNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(blueprintSpecNetworkPolicyPoliciesToTerraform, true)(struct!.policies),
    profile: blueprintSpecNetworkPolicyProfileToTerraform(struct!.profile),
  }
}


export function blueprintSpecNetworkPolicyToHclTerraform(struct?: BlueprintSpecNetworkPolicyOutputReference | BlueprintSpecNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(blueprintSpecNetworkPolicyPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecNetworkPolicyPoliciesList",
    },
    profile: {
      value: blueprintSpecNetworkPolicyProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecNetworkPolicyProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
      this._profile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
      this._profile.internalValue = value.profile;
    }
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new BlueprintSpecNetworkPolicyPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: BlueprintSpecNetworkPolicyPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new BlueprintSpecNetworkPolicyProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: BlueprintSpecNetworkPolicyProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }
}
export interface BlueprintSpecOpaPolicyOpaPolicy {
  /**
  * name of the opa policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * version of the opa policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
}

export function blueprintSpecOpaPolicyOpaPolicyToTerraform(struct?: BlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function blueprintSpecOpaPolicyOpaPolicyToHclTerraform(struct?: BlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable): any {
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

export class BlueprintSpecOpaPolicyOpaPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: BlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class BlueprintSpecOpaPolicyOpaPolicyList extends cdktf.ComplexList {
  public internalValue? : BlueprintSpecOpaPolicyOpaPolicy[] | cdktf.IResolvable

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
  public get(index: number): BlueprintSpecOpaPolicyOpaPolicyOutputReference {
    return new BlueprintSpecOpaPolicyOpaPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlueprintSpecOpaPolicyProfile {
  /**
  * name of the opa profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * version of the opa profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
}

export function blueprintSpecOpaPolicyProfileToTerraform(struct?: BlueprintSpecOpaPolicyProfileOutputReference | BlueprintSpecOpaPolicyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function blueprintSpecOpaPolicyProfileToHclTerraform(struct?: BlueprintSpecOpaPolicyProfileOutputReference | BlueprintSpecOpaPolicyProfile): any {
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

export class BlueprintSpecOpaPolicyProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecOpaPolicyProfile | undefined {
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

  public set internalValue(value: BlueprintSpecOpaPolicyProfile | undefined) {
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
export interface BlueprintSpecOpaPolicy {
  /**
  * opa_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#opa_policy Blueprint#opa_policy}
  */
  readonly opaPolicy?: BlueprintSpecOpaPolicyOpaPolicy[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#profile Blueprint#profile}
  */
  readonly profile?: BlueprintSpecOpaPolicyProfile;
}

export function blueprintSpecOpaPolicyToTerraform(struct?: BlueprintSpecOpaPolicyOutputReference | BlueprintSpecOpaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opa_policy: cdktf.listMapper(blueprintSpecOpaPolicyOpaPolicyToTerraform, true)(struct!.opaPolicy),
    profile: blueprintSpecOpaPolicyProfileToTerraform(struct!.profile),
  }
}


export function blueprintSpecOpaPolicyToHclTerraform(struct?: BlueprintSpecOpaPolicyOutputReference | BlueprintSpecOpaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opa_policy: {
      value: cdktf.listMapperHcl(blueprintSpecOpaPolicyOpaPolicyToHclTerraform, true)(struct!.opaPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecOpaPolicyOpaPolicyList",
    },
    profile: {
      value: blueprintSpecOpaPolicyProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecOpaPolicyProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecOpaPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecOpaPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opaPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaPolicy = this._opaPolicy?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecOpaPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._opaPolicy.internalValue = undefined;
      this._profile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._opaPolicy.internalValue = value.opaPolicy;
      this._profile.internalValue = value.profile;
    }
  }

  // opa_policy - computed: false, optional: true, required: false
  private _opaPolicy = new BlueprintSpecOpaPolicyOpaPolicyList(this, "opa_policy", false);
  public get opaPolicy() {
    return this._opaPolicy;
  }
  public putOpaPolicy(value: BlueprintSpecOpaPolicyOpaPolicy[] | cdktf.IResolvable) {
    this._opaPolicy.internalValue = value;
  }
  public resetOpaPolicy() {
    this._opaPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaPolicyInput() {
    return this._opaPolicy.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new BlueprintSpecOpaPolicyProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: BlueprintSpecOpaPolicyProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }
}
export interface BlueprintSpecPlacement {
  /**
  * Bool value of autoPublish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#auto_publish Blueprint#auto_publish}
  */
  readonly autoPublish?: boolean | cdktf.IResolvable;
  /**
  * Array of Fleet value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#fleet_values Blueprint#fleet_values}
  */
  readonly fleetValues?: string[];
}

export function blueprintSpecPlacementToTerraform(struct?: BlueprintSpecPlacementOutputReference | BlueprintSpecPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_publish: cdktf.booleanToTerraform(struct!.autoPublish),
    fleet_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fleetValues),
  }
}


export function blueprintSpecPlacementToHclTerraform(struct?: BlueprintSpecPlacementOutputReference | BlueprintSpecPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_publish: {
      value: cdktf.booleanToHclTerraform(struct!.autoPublish),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fleet_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fleetValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPublish = this._autoPublish;
    }
    if (this._fleetValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetValues = this._fleetValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPublish = undefined;
      this._fleetValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPublish = value.autoPublish;
      this._fleetValues = value.fleetValues;
    }
  }

  // auto_publish - computed: false, optional: true, required: false
  private _autoPublish?: boolean | cdktf.IResolvable; 
  public get autoPublish() {
    return this.getBooleanAttribute('auto_publish');
  }
  public set autoPublish(value: boolean | cdktf.IResolvable) {
    this._autoPublish = value;
  }
  public resetAutoPublish() {
    this._autoPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPublishInput() {
    return this._autoPublish;
  }

  // fleet_values - computed: false, optional: true, required: false
  private _fleetValues?: string[]; 
  public get fleetValues() {
    return this.getListAttribute('fleet_values');
  }
  public set fleetValues(value: string[]) {
    this._fleetValues = value;
  }
  public resetFleetValues() {
    this._fleetValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetValuesInput() {
    return this._fleetValues;
  }
}
export interface BlueprintSpecPrivateKubeApiProxies {
  /**
  * name of the kubernetes proxy network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
}

export function blueprintSpecPrivateKubeApiProxiesToTerraform(struct?: BlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function blueprintSpecPrivateKubeApiProxiesToHclTerraform(struct?: BlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable): any {
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

export class BlueprintSpecPrivateKubeApiProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable | undefined) {
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

export class BlueprintSpecPrivateKubeApiProxiesList extends cdktf.ComplexList {
  public internalValue? : BlueprintSpecPrivateKubeApiProxies[] | cdktf.IResolvable

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
  public get(index: number): BlueprintSpecPrivateKubeApiProxiesOutputReference {
    return new BlueprintSpecPrivateKubeApiProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlueprintSpecPsp {
  /**
  * flag to specify if PSP is enabled for blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * names of the PSPs to be added for the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#names Blueprint#names}
  */
  readonly names?: string[];
  /**
  * scope of the PSP for the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#scope Blueprint#scope}
  */
  readonly scope?: string;
}

export function blueprintSpecPspToTerraform(struct?: BlueprintSpecPspOutputReference | BlueprintSpecPsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function blueprintSpecPspToHclTerraform(struct?: BlueprintSpecPspOutputReference | BlueprintSpecPsp): any {
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
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecPspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecPsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecPsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._names = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._names = value.names;
      this._scope = value.scope;
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

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface BlueprintSpecServiceMeshPolicies {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#system_catalog Blueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version_state Blueprint#version_state}
  */
  readonly versionState?: string;
}

export function blueprintSpecServiceMeshPoliciesToTerraform(struct?: BlueprintSpecServiceMeshPolicies | cdktf.IResolvable): any {
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


export function blueprintSpecServiceMeshPoliciesToHclTerraform(struct?: BlueprintSpecServiceMeshPolicies | cdktf.IResolvable): any {
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

export class BlueprintSpecServiceMeshPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlueprintSpecServiceMeshPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlueprintSpecServiceMeshPolicies | cdktf.IResolvable | undefined) {
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

export class BlueprintSpecServiceMeshPoliciesList extends cdktf.ComplexList {
  public internalValue? : BlueprintSpecServiceMeshPolicies[] | cdktf.IResolvable

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
  public get(index: number): BlueprintSpecServiceMeshPoliciesOutputReference {
    return new BlueprintSpecServiceMeshPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlueprintSpecServiceMeshProfile {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#system_catalog Blueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version_state Blueprint#version_state}
  */
  readonly versionState?: string;
}

export function blueprintSpecServiceMeshProfileToTerraform(struct?: BlueprintSpecServiceMeshProfileOutputReference | BlueprintSpecServiceMeshProfile): any {
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


export function blueprintSpecServiceMeshProfileToHclTerraform(struct?: BlueprintSpecServiceMeshProfileOutputReference | BlueprintSpecServiceMeshProfile): any {
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

export class BlueprintSpecServiceMeshProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecServiceMeshProfile | undefined {
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

  public set internalValue(value: BlueprintSpecServiceMeshProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface BlueprintSpecServiceMesh {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#policies Blueprint#policies}
  */
  readonly policies?: BlueprintSpecServiceMeshPolicies[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#profile Blueprint#profile}
  */
  readonly profile?: BlueprintSpecServiceMeshProfile;
}

export function blueprintSpecServiceMeshToTerraform(struct?: BlueprintSpecServiceMeshOutputReference | BlueprintSpecServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(blueprintSpecServiceMeshPoliciesToTerraform, true)(struct!.policies),
    profile: blueprintSpecServiceMeshProfileToTerraform(struct!.profile),
  }
}


export function blueprintSpecServiceMeshToHclTerraform(struct?: BlueprintSpecServiceMeshOutputReference | BlueprintSpecServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(blueprintSpecServiceMeshPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecServiceMeshPoliciesList",
    },
    profile: {
      value: blueprintSpecServiceMeshProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecServiceMeshProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecServiceMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecServiceMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpecServiceMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
      this._profile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
      this._profile.internalValue = value.profile;
    }
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new BlueprintSpecServiceMeshPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: BlueprintSpecServiceMeshPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new BlueprintSpecServiceMeshProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: BlueprintSpecServiceMeshProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }
}
export interface BlueprintSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#name Blueprint#name}
  */
  readonly name?: string;
}

export function blueprintSpecSharingProjectsToTerraform(struct?: BlueprintSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function blueprintSpecSharingProjectsToHclTerraform(struct?: BlueprintSpecSharingProjects | cdktf.IResolvable): any {
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

export class BlueprintSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlueprintSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlueprintSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class BlueprintSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : BlueprintSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): BlueprintSpecSharingProjectsOutputReference {
    return new BlueprintSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlueprintSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#enabled Blueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#projects Blueprint#projects}
  */
  readonly projects?: BlueprintSpecSharingProjects[] | cdktf.IResolvable;
}

export function blueprintSpecSharingToTerraform(struct?: BlueprintSpecSharingOutputReference | BlueprintSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(blueprintSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function blueprintSpecSharingToHclTerraform(struct?: BlueprintSpecSharingOutputReference | BlueprintSpecSharing): any {
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
      value: cdktf.listMapperHcl(blueprintSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "BlueprintSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpecSharing | undefined {
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

  public set internalValue(value: BlueprintSpecSharing | undefined) {
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
  private _projects = new BlueprintSpecSharingProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: BlueprintSpecSharingProjects[] | cdktf.IResolvable) {
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
export interface BlueprintSpec {
  /**
  * Blueprint Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#type Blueprint#type}
  */
  readonly type?: string;
  /**
  * version of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version Blueprint#version}
  */
  readonly version?: string;
  /**
  * version state of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#version_state Blueprint#version_state}
  */
  readonly versionState?: string;
  /**
  * base block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#base Blueprint#base}
  */
  readonly base?: BlueprintSpecBase;
  /**
  * components_criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#components_criticality Blueprint#components_criticality}
  */
  readonly componentsCriticality?: BlueprintSpecComponentsCriticality[] | cdktf.IResolvable;
  /**
  * cost_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#cost_profile Blueprint#cost_profile}
  */
  readonly costProfile?: BlueprintSpecCostProfile;
  /**
  * custom_addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#custom_addons Blueprint#custom_addons}
  */
  readonly customAddons?: BlueprintSpecCustomAddons[] | cdktf.IResolvable;
  /**
  * default_addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#default_addons Blueprint#default_addons}
  */
  readonly defaultAddons?: BlueprintSpecDefaultAddons;
  /**
  * drift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#drift Blueprint#drift}
  */
  readonly drift?: BlueprintSpecDrift;
  /**
  * drift_webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#drift_webhook Blueprint#drift_webhook}
  */
  readonly driftWebhook?: BlueprintSpecDriftWebhook;
  /**
  * namespace_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#namespace_config Blueprint#namespace_config}
  */
  readonly namespaceConfig?: BlueprintSpecNamespaceConfig;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#network_policy Blueprint#network_policy}
  */
  readonly networkPolicy?: BlueprintSpecNetworkPolicy;
  /**
  * opa_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#opa_policy Blueprint#opa_policy}
  */
  readonly opaPolicy?: BlueprintSpecOpaPolicy;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#placement Blueprint#placement}
  */
  readonly placement?: BlueprintSpecPlacement;
  /**
  * private_kube_api_proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#private_kube_api_proxies Blueprint#private_kube_api_proxies}
  */
  readonly privateKubeApiProxies?: BlueprintSpecPrivateKubeApiProxies[] | cdktf.IResolvable;
  /**
  * psp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#psp Blueprint#psp}
  */
  readonly psp?: BlueprintSpecPsp;
  /**
  * service_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#service_mesh Blueprint#service_mesh}
  */
  readonly serviceMesh?: BlueprintSpecServiceMesh;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#sharing Blueprint#sharing}
  */
  readonly sharing?: BlueprintSpecSharing;
}

export function blueprintSpecToTerraform(struct?: BlueprintSpecOutputReference | BlueprintSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
    base: blueprintSpecBaseToTerraform(struct!.base),
    components_criticality: cdktf.listMapper(blueprintSpecComponentsCriticalityToTerraform, true)(struct!.componentsCriticality),
    cost_profile: blueprintSpecCostProfileToTerraform(struct!.costProfile),
    custom_addons: cdktf.listMapper(blueprintSpecCustomAddonsToTerraform, true)(struct!.customAddons),
    default_addons: blueprintSpecDefaultAddonsToTerraform(struct!.defaultAddons),
    drift: blueprintSpecDriftToTerraform(struct!.drift),
    drift_webhook: blueprintSpecDriftWebhookToTerraform(struct!.driftWebhook),
    namespace_config: blueprintSpecNamespaceConfigToTerraform(struct!.namespaceConfig),
    network_policy: blueprintSpecNetworkPolicyToTerraform(struct!.networkPolicy),
    opa_policy: blueprintSpecOpaPolicyToTerraform(struct!.opaPolicy),
    placement: blueprintSpecPlacementToTerraform(struct!.placement),
    private_kube_api_proxies: cdktf.listMapper(blueprintSpecPrivateKubeApiProxiesToTerraform, true)(struct!.privateKubeApiProxies),
    psp: blueprintSpecPspToTerraform(struct!.psp),
    service_mesh: blueprintSpecServiceMeshToTerraform(struct!.serviceMesh),
    sharing: blueprintSpecSharingToTerraform(struct!.sharing),
  }
}


export function blueprintSpecToHclTerraform(struct?: BlueprintSpecOutputReference | BlueprintSpec): any {
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
    base: {
      value: blueprintSpecBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecBaseList",
    },
    components_criticality: {
      value: cdktf.listMapperHcl(blueprintSpecComponentsCriticalityToHclTerraform, true)(struct!.componentsCriticality),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecComponentsCriticalityList",
    },
    cost_profile: {
      value: blueprintSpecCostProfileToHclTerraform(struct!.costProfile),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecCostProfileList",
    },
    custom_addons: {
      value: cdktf.listMapperHcl(blueprintSpecCustomAddonsToHclTerraform, true)(struct!.customAddons),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecCustomAddonsList",
    },
    default_addons: {
      value: blueprintSpecDefaultAddonsToHclTerraform(struct!.defaultAddons),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDefaultAddonsList",
    },
    drift: {
      value: blueprintSpecDriftToHclTerraform(struct!.drift),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDriftList",
    },
    drift_webhook: {
      value: blueprintSpecDriftWebhookToHclTerraform(struct!.driftWebhook),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecDriftWebhookList",
    },
    namespace_config: {
      value: blueprintSpecNamespaceConfigToHclTerraform(struct!.namespaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecNamespaceConfigList",
    },
    network_policy: {
      value: blueprintSpecNetworkPolicyToHclTerraform(struct!.networkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecNetworkPolicyList",
    },
    opa_policy: {
      value: blueprintSpecOpaPolicyToHclTerraform(struct!.opaPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecOpaPolicyList",
    },
    placement: {
      value: blueprintSpecPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecPlacementList",
    },
    private_kube_api_proxies: {
      value: cdktf.listMapperHcl(blueprintSpecPrivateKubeApiProxiesToHclTerraform, true)(struct!.privateKubeApiProxies),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecPrivateKubeApiProxiesList",
    },
    psp: {
      value: blueprintSpecPspToHclTerraform(struct!.psp),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecPspList",
    },
    service_mesh: {
      value: blueprintSpecServiceMeshToHclTerraform(struct!.serviceMesh),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecServiceMeshList",
    },
    sharing: {
      value: blueprintSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "BlueprintSpecSharingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlueprintSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueprintSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    if (this._base?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base?.internalValue;
    }
    if (this._componentsCriticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentsCriticality = this._componentsCriticality?.internalValue;
    }
    if (this._costProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costProfile = this._costProfile?.internalValue;
    }
    if (this._customAddons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAddons = this._customAddons?.internalValue;
    }
    if (this._defaultAddons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAddons = this._defaultAddons?.internalValue;
    }
    if (this._drift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drift = this._drift?.internalValue;
    }
    if (this._driftWebhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driftWebhook = this._driftWebhook?.internalValue;
    }
    if (this._namespaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceConfig = this._namespaceConfig?.internalValue;
    }
    if (this._networkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy?.internalValue;
    }
    if (this._opaPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaPolicy = this._opaPolicy?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._privateKubeApiProxies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKubeApiProxies = this._privateKubeApiProxies?.internalValue;
    }
    if (this._psp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.psp = this._psp?.internalValue;
    }
    if (this._serviceMesh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMesh = this._serviceMesh?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueprintSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
      this._versionState = undefined;
      this._base.internalValue = undefined;
      this._componentsCriticality.internalValue = undefined;
      this._costProfile.internalValue = undefined;
      this._customAddons.internalValue = undefined;
      this._defaultAddons.internalValue = undefined;
      this._drift.internalValue = undefined;
      this._driftWebhook.internalValue = undefined;
      this._namespaceConfig.internalValue = undefined;
      this._networkPolicy.internalValue = undefined;
      this._opaPolicy.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._privateKubeApiProxies.internalValue = undefined;
      this._psp.internalValue = undefined;
      this._serviceMesh.internalValue = undefined;
      this._sharing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
      this._versionState = value.versionState;
      this._base.internalValue = value.base;
      this._componentsCriticality.internalValue = value.componentsCriticality;
      this._costProfile.internalValue = value.costProfile;
      this._customAddons.internalValue = value.customAddons;
      this._defaultAddons.internalValue = value.defaultAddons;
      this._drift.internalValue = value.drift;
      this._driftWebhook.internalValue = value.driftWebhook;
      this._namespaceConfig.internalValue = value.namespaceConfig;
      this._networkPolicy.internalValue = value.networkPolicy;
      this._opaPolicy.internalValue = value.opaPolicy;
      this._placement.internalValue = value.placement;
      this._privateKubeApiProxies.internalValue = value.privateKubeApiProxies;
      this._psp.internalValue = value.psp;
      this._serviceMesh.internalValue = value.serviceMesh;
      this._sharing.internalValue = value.sharing;
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

  // base - computed: false, optional: true, required: false
  private _base = new BlueprintSpecBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: BlueprintSpecBase) {
    this._base.internalValue = value;
  }
  public resetBase() {
    this._base.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base.internalValue;
  }

  // components_criticality - computed: false, optional: true, required: false
  private _componentsCriticality = new BlueprintSpecComponentsCriticalityList(this, "components_criticality", false);
  public get componentsCriticality() {
    return this._componentsCriticality;
  }
  public putComponentsCriticality(value: BlueprintSpecComponentsCriticality[] | cdktf.IResolvable) {
    this._componentsCriticality.internalValue = value;
  }
  public resetComponentsCriticality() {
    this._componentsCriticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsCriticalityInput() {
    return this._componentsCriticality.internalValue;
  }

  // cost_profile - computed: false, optional: true, required: false
  private _costProfile = new BlueprintSpecCostProfileOutputReference(this, "cost_profile");
  public get costProfile() {
    return this._costProfile;
  }
  public putCostProfile(value: BlueprintSpecCostProfile) {
    this._costProfile.internalValue = value;
  }
  public resetCostProfile() {
    this._costProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costProfileInput() {
    return this._costProfile.internalValue;
  }

  // custom_addons - computed: false, optional: true, required: false
  private _customAddons = new BlueprintSpecCustomAddonsList(this, "custom_addons", false);
  public get customAddons() {
    return this._customAddons;
  }
  public putCustomAddons(value: BlueprintSpecCustomAddons[] | cdktf.IResolvable) {
    this._customAddons.internalValue = value;
  }
  public resetCustomAddons() {
    this._customAddons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAddonsInput() {
    return this._customAddons.internalValue;
  }

  // default_addons - computed: false, optional: true, required: false
  private _defaultAddons = new BlueprintSpecDefaultAddonsOutputReference(this, "default_addons");
  public get defaultAddons() {
    return this._defaultAddons;
  }
  public putDefaultAddons(value: BlueprintSpecDefaultAddons) {
    this._defaultAddons.internalValue = value;
  }
  public resetDefaultAddons() {
    this._defaultAddons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddonsInput() {
    return this._defaultAddons.internalValue;
  }

  // drift - computed: false, optional: true, required: false
  private _drift = new BlueprintSpecDriftOutputReference(this, "drift");
  public get drift() {
    return this._drift;
  }
  public putDrift(value: BlueprintSpecDrift) {
    this._drift.internalValue = value;
  }
  public resetDrift() {
    this._drift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftInput() {
    return this._drift.internalValue;
  }

  // drift_webhook - computed: false, optional: true, required: false
  private _driftWebhook = new BlueprintSpecDriftWebhookOutputReference(this, "drift_webhook");
  public get driftWebhook() {
    return this._driftWebhook;
  }
  public putDriftWebhook(value: BlueprintSpecDriftWebhook) {
    this._driftWebhook.internalValue = value;
  }
  public resetDriftWebhook() {
    this._driftWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftWebhookInput() {
    return this._driftWebhook.internalValue;
  }

  // namespace_config - computed: false, optional: true, required: false
  private _namespaceConfig = new BlueprintSpecNamespaceConfigOutputReference(this, "namespace_config");
  public get namespaceConfig() {
    return this._namespaceConfig;
  }
  public putNamespaceConfig(value: BlueprintSpecNamespaceConfig) {
    this._namespaceConfig.internalValue = value;
  }
  public resetNamespaceConfig() {
    this._namespaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceConfigInput() {
    return this._namespaceConfig.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new BlueprintSpecNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: BlueprintSpecNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // opa_policy - computed: false, optional: true, required: false
  private _opaPolicy = new BlueprintSpecOpaPolicyOutputReference(this, "opa_policy");
  public get opaPolicy() {
    return this._opaPolicy;
  }
  public putOpaPolicy(value: BlueprintSpecOpaPolicy) {
    this._opaPolicy.internalValue = value;
  }
  public resetOpaPolicy() {
    this._opaPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaPolicyInput() {
    return this._opaPolicy.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new BlueprintSpecPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: BlueprintSpecPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // private_kube_api_proxies - computed: false, optional: true, required: false
  private _privateKubeApiProxies = new BlueprintSpecPrivateKubeApiProxiesList(this, "private_kube_api_proxies", false);
  public get privateKubeApiProxies() {
    return this._privateKubeApiProxies;
  }
  public putPrivateKubeApiProxies(value: BlueprintSpecPrivateKubeApiProxies[] | cdktf.IResolvable) {
    this._privateKubeApiProxies.internalValue = value;
  }
  public resetPrivateKubeApiProxies() {
    this._privateKubeApiProxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKubeApiProxiesInput() {
    return this._privateKubeApiProxies.internalValue;
  }

  // psp - computed: false, optional: true, required: false
  private _psp = new BlueprintSpecPspOutputReference(this, "psp");
  public get psp() {
    return this._psp;
  }
  public putPsp(value: BlueprintSpecPsp) {
    this._psp.internalValue = value;
  }
  public resetPsp() {
    this._psp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pspInput() {
    return this._psp.internalValue;
  }

  // service_mesh - computed: false, optional: true, required: false
  private _serviceMesh = new BlueprintSpecServiceMeshOutputReference(this, "service_mesh");
  public get serviceMesh() {
    return this._serviceMesh;
  }
  public putServiceMesh(value: BlueprintSpecServiceMesh) {
    this._serviceMesh.internalValue = value;
  }
  public resetServiceMesh() {
    this._serviceMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMeshInput() {
    return this._serviceMesh.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new BlueprintSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: BlueprintSpecSharing) {
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
export interface BlueprintTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#create Blueprint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#delete Blueprint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#update Blueprint#update}
  */
  readonly update?: string;
}

export function blueprintTimeoutsToTerraform(struct?: BlueprintTimeouts | cdktf.IResolvable): any {
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


export function blueprintTimeoutsToHclTerraform(struct?: BlueprintTimeouts | cdktf.IResolvable): any {
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

export class BlueprintTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BlueprintTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlueprintTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint rafay_blueprint}
*/
export class Blueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Blueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Blueprint to import
  * @param importFromId The id of the existing Blueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Blueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/blueprint rafay_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlueprintConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BlueprintConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_blueprint',
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
  private _metadata = new BlueprintMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: BlueprintMetadata) {
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
  private _spec = new BlueprintSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: BlueprintSpec) {
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
  private _timeouts = new BlueprintTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BlueprintTimeouts) {
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
      metadata: blueprintMetadataToTerraform(this._metadata.internalValue),
      spec: blueprintSpecToTerraform(this._spec.internalValue),
      timeouts: blueprintTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: blueprintMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlueprintMetadataList",
      },
      spec: {
        value: blueprintSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlueprintSpecList",
      },
      timeouts: {
        value: blueprintTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BlueprintTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
