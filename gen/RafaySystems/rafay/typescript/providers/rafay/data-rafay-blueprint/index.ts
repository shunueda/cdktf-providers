// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#id DataRafayBlueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#metadata DataRafayBlueprint#metadata}
  */
  readonly metadata?: DataRafayBlueprintMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#spec DataRafayBlueprint#spec}
  */
  readonly spec?: DataRafayBlueprintSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#timeouts DataRafayBlueprint#timeouts}
  */
  readonly timeouts?: DataRafayBlueprintTimeouts;
}
export interface DataRafayBlueprintMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#id DataRafayBlueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#is_sso_user DataRafayBlueprint#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#username DataRafayBlueprint#username}
  */
  readonly username?: string;
}

export function dataRafayBlueprintMetadataCreatedByToTerraform(struct?: DataRafayBlueprintMetadataCreatedByOutputReference | DataRafayBlueprintMetadataCreatedBy): any {
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


export function dataRafayBlueprintMetadataCreatedByToHclTerraform(struct?: DataRafayBlueprintMetadataCreatedByOutputReference | DataRafayBlueprintMetadataCreatedBy): any {
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

export class DataRafayBlueprintMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintMetadataCreatedBy | undefined {
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

  public set internalValue(value: DataRafayBlueprintMetadataCreatedBy | undefined) {
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
export interface DataRafayBlueprintMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#id DataRafayBlueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#is_sso_user DataRafayBlueprint#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#username DataRafayBlueprint#username}
  */
  readonly username?: string;
}

export function dataRafayBlueprintMetadataModifiedByToTerraform(struct?: DataRafayBlueprintMetadataModifiedByOutputReference | DataRafayBlueprintMetadataModifiedBy): any {
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


export function dataRafayBlueprintMetadataModifiedByToHclTerraform(struct?: DataRafayBlueprintMetadataModifiedByOutputReference | DataRafayBlueprintMetadataModifiedBy): any {
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

export class DataRafayBlueprintMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintMetadataModifiedBy | undefined {
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

  public set internalValue(value: DataRafayBlueprintMetadataModifiedBy | undefined) {
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
export interface DataRafayBlueprintMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#annotations DataRafayBlueprint#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#description DataRafayBlueprint#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#display_name DataRafayBlueprint#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#labels DataRafayBlueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#project DataRafayBlueprint#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#created_by DataRafayBlueprint#created_by}
  */
  readonly createdBy?: DataRafayBlueprintMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#modified_by DataRafayBlueprint#modified_by}
  */
  readonly modifiedBy?: DataRafayBlueprintMetadataModifiedBy;
}

export function dataRafayBlueprintMetadataToTerraform(struct?: DataRafayBlueprintMetadataOutputReference | DataRafayBlueprintMetadata): any {
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
    created_by: dataRafayBlueprintMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: dataRafayBlueprintMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function dataRafayBlueprintMetadataToHclTerraform(struct?: DataRafayBlueprintMetadataOutputReference | DataRafayBlueprintMetadata): any {
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
      value: dataRafayBlueprintMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintMetadataCreatedByList",
    },
    modified_by: {
      value: dataRafayBlueprintMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintMetadata | undefined {
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

  public set internalValue(value: DataRafayBlueprintMetadata | undefined) {
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
  private _createdBy = new DataRafayBlueprintMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: DataRafayBlueprintMetadataCreatedBy) {
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
  private _modifiedBy = new DataRafayBlueprintMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: DataRafayBlueprintMetadataModifiedBy) {
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
export interface DataRafayBlueprintSpecBase {
  /**
  * name of the blueprint base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * version of the blueprint base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
}

export function dataRafayBlueprintSpecBaseToTerraform(struct?: DataRafayBlueprintSpecBaseOutputReference | DataRafayBlueprintSpecBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataRafayBlueprintSpecBaseToHclTerraform(struct?: DataRafayBlueprintSpecBaseOutputReference | DataRafayBlueprintSpecBase): any {
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

export class DataRafayBlueprintSpecBaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecBase | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecBase | undefined) {
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
export interface DataRafayBlueprintSpecComponentsCriticality {
  /**
  * Component Type of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#component_type DataRafayBlueprint#component_type}
  */
  readonly componentType?: string;
  /**
  * Dependent resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#depends_on DataRafayBlueprint#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * Check for Global resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#is_global DataRafayBlueprint#is_global}
  */
  readonly isGlobal?: boolean | cdktf.IResolvable;
  /**
  * API Version of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * Published Generation of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#published_generation DataRafayBlueprint#published_generation}
  */
  readonly publishedGeneration?: string;
  /**
  * Revision of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#revision DataRafayBlueprint#revision}
  */
  readonly revision?: string;
  /**
  * Selector of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#selector DataRafayBlueprint#selector}
  */
  readonly selector?: string;
  /**
  * Version of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
  /**
  * Workload ID of the blueprint list resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#workload_id DataRafayBlueprint#workload_id}
  */
  readonly workloadId?: string;
}

export function dataRafayBlueprintSpecComponentsCriticalityToTerraform(struct?: DataRafayBlueprintSpecComponentsCriticality | cdktf.IResolvable): any {
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


export function dataRafayBlueprintSpecComponentsCriticalityToHclTerraform(struct?: DataRafayBlueprintSpecComponentsCriticality | cdktf.IResolvable): any {
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

export class DataRafayBlueprintSpecComponentsCriticalityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayBlueprintSpecComponentsCriticality | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecComponentsCriticality | cdktf.IResolvable | undefined) {
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

export class DataRafayBlueprintSpecComponentsCriticalityList extends cdktf.ComplexList {
  public internalValue? : DataRafayBlueprintSpecComponentsCriticality[] | cdktf.IResolvable

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
  public get(index: number): DataRafayBlueprintSpecComponentsCriticalityOutputReference {
    return new DataRafayBlueprintSpecComponentsCriticalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayBlueprintSpecCostProfile {
  /**
  * name of the cost profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * version of the cost profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
}

export function dataRafayBlueprintSpecCostProfileToTerraform(struct?: DataRafayBlueprintSpecCostProfileOutputReference | DataRafayBlueprintSpecCostProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataRafayBlueprintSpecCostProfileToHclTerraform(struct?: DataRafayBlueprintSpecCostProfileOutputReference | DataRafayBlueprintSpecCostProfile): any {
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

export class DataRafayBlueprintSpecCostProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecCostProfile | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecCostProfile | undefined) {
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
export interface DataRafayBlueprintSpecCustomAddons {
  /**
  * other addons current addons depends on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#depends_on DataRafayBlueprint#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * name of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * version of the blueprint addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
}

export function dataRafayBlueprintSpecCustomAddonsToTerraform(struct?: DataRafayBlueprintSpecCustomAddons | cdktf.IResolvable): any {
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


export function dataRafayBlueprintSpecCustomAddonsToHclTerraform(struct?: DataRafayBlueprintSpecCustomAddons | cdktf.IResolvable): any {
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

export class DataRafayBlueprintSpecCustomAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayBlueprintSpecCustomAddons | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecCustomAddons | cdktf.IResolvable | undefined) {
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

export class DataRafayBlueprintSpecCustomAddonsList extends cdktf.ComplexList {
  public internalValue? : DataRafayBlueprintSpecCustomAddons[] | cdktf.IResolvable

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
  public get(index: number): DataRafayBlueprintSpecCustomAddonsOutputReference {
    return new DataRafayBlueprintSpecCustomAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#aws DataRafayBlueprint#aws}
  */
  readonly aws?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#vault DataRafayBlueprint#vault}
  */
  readonly vault?: boolean | cdktf.IResolvable;
}

export function dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference | DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: cdktf.booleanToTerraform(struct!.aws),
    vault: cdktf.booleanToTerraform(struct!.vault),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference | DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders): any {
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

export class DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_secret_rotation DataRafayBlueprint#enable_secret_rotation}
  */
  readonly enableSecretRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#rotation_poll_interval DataRafayBlueprint#rotation_poll_interval}
  */
  readonly rotationPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#sync_secrets DataRafayBlueprint#sync_secrets}
  */
  readonly syncSecrets?: boolean | cdktf.IResolvable;
  /**
  * providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#providers DataRafayBlueprint#providers}
  */
  readonly providers?: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders;
}

export function dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference | DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_secret_rotation: cdktf.booleanToTerraform(struct!.enableSecretRotation),
    rotation_poll_interval: cdktf.stringToTerraform(struct!.rotationPollInterval),
    sync_secrets: cdktf.booleanToTerraform(struct!.syncSecrets),
    providers: dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToTerraform(struct!.providers),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference | DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfig): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersToHclTerraform(struct!.providers),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfig | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfig | undefined) {
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
  private _providers = new DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProvidersOutputReference(this, "providers");
  public get providers() {
    return this._providers;
  }
  public putProviders(value: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigProviders) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#labels DataRafayBlueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#namespace DataRafayBlueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#resource DataRafayBlueprint#resource}
  */
  readonly resource?: string;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery): any {
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


export function dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery): any {
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

export class DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperator {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#customization_enabled DataRafayBlueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#discovery DataRafayBlueprint#discovery}
  */
  readonly discovery?: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToTerraform(struct!.discovery),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperator): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperator | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperator | undefined) {
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
  private _discovery = new DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorDiscovery) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#labels DataRafayBlueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#namespace DataRafayBlueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#resource DataRafayBlueprint#resource}
  */
  readonly resource?: string;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery): any {
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


export function dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery): any {
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

export class DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporter {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#customization_enabled DataRafayBlueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#discovery DataRafayBlueprint#discovery}
  */
  readonly discovery?: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToTerraform(struct!.discovery),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporter): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporter | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporter | undefined) {
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
  private _discovery = new DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterDiscovery) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#labels DataRafayBlueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#namespace DataRafayBlueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#resource DataRafayBlueprint#resource}
  */
  readonly resource?: string;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery): any {
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


export function dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery): any {
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

export class DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetrics {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#customization_enabled DataRafayBlueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#discovery DataRafayBlueprint#discovery}
  */
  readonly discovery?: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToTerraform(struct!.discovery),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetrics): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetrics | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetrics | undefined) {
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
  private _discovery = new DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsDiscovery) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#labels DataRafayBlueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#namespace DataRafayBlueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#resource DataRafayBlueprint#resource}
  */
  readonly resource?: string;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery): any {
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


export function dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery): any {
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

export class DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServer {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#customization_enabled DataRafayBlueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#discovery DataRafayBlueprint#discovery}
  */
  readonly discovery?: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToTerraform(struct!.discovery),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServer): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServer | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServer | undefined) {
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
  private _discovery = new DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerDiscovery) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#labels DataRafayBlueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#namespace DataRafayBlueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#resource DataRafayBlueprint#resource}
  */
  readonly resource?: string;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery): any {
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


export function dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery): any {
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

export class DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporter {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#customization_enabled DataRafayBlueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#discovery DataRafayBlueprint#discovery}
  */
  readonly discovery?: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToTerraform(struct!.discovery),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporter): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporter | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporter | undefined) {
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
  private _discovery = new DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterDiscovery) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery {
  /**
  * labels of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#labels DataRafayBlueprint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * namespace of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#namespace DataRafayBlueprint#namespace}
  */
  readonly namespace?: string;
  /**
  * resource name of the monitoring component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#resource DataRafayBlueprint#resource}
  */
  readonly resource?: string;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery): any {
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


export function dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery): any {
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

export class DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapter {
  /**
  * flag to specify if monitoring component customization is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#customization_enabled DataRafayBlueprint#customization_enabled}
  */
  readonly customizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * flag to specify if monitoring component is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#discovery DataRafayBlueprint#discovery}
  */
  readonly discovery?: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_enabled: cdktf.booleanToTerraform(struct!.customizationEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    discovery: dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToTerraform(struct!.discovery),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapter): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapter | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapter | undefined) {
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
  private _discovery = new DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterDiscovery) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimits {
  /**
  * quantity of CPU in cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#cpu DataRafayBlueprint#cpu}
  */
  readonly cpu?: string;
  /**
  * quantity of memory in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#memory DataRafayBlueprint#memory}
  */
  readonly memory?: string;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimits): any {
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

export class DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimits | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimits | undefined) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoringResources {
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#limits DataRafayBlueprint#limits}
  */
  readonly limits?: DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimits;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsToTerraform(struct!.limits),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoringResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoringResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoringResources | undefined) {
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
  private _limits = new DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesLimits) {
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
export interface DataRafayBlueprintSpecDefaultAddonsMonitoring {
  /**
  * gpu_operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#gpu_operator DataRafayBlueprint#gpu_operator}
  */
  readonly gpuOperator?: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperator;
  /**
  * helm_exporter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#helm_exporter DataRafayBlueprint#helm_exporter}
  */
  readonly helmExporter?: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporter;
  /**
  * kube_state_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#kube_state_metrics DataRafayBlueprint#kube_state_metrics}
  */
  readonly kubeStateMetrics?: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetrics;
  /**
  * metrics_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#metrics_server DataRafayBlueprint#metrics_server}
  */
  readonly metricsServer?: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServer;
  /**
  * node_exporter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#node_exporter DataRafayBlueprint#node_exporter}
  */
  readonly nodeExporter?: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporter;
  /**
  * prometheus_adapter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#prometheus_adapter DataRafayBlueprint#prometheus_adapter}
  */
  readonly prometheusAdapter?: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapter;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#resources DataRafayBlueprint#resources}
  */
  readonly resources?: DataRafayBlueprintSpecDefaultAddonsMonitoringResources;
}

export function dataRafayBlueprintSpecDefaultAddonsMonitoringToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_operator: dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorToTerraform(struct!.gpuOperator),
    helm_exporter: dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterToTerraform(struct!.helmExporter),
    kube_state_metrics: dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsToTerraform(struct!.kubeStateMetrics),
    metrics_server: dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerToTerraform(struct!.metricsServer),
    node_exporter: dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterToTerraform(struct!.nodeExporter),
    prometheus_adapter: dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterToTerraform(struct!.prometheusAdapter),
    resources: dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesToTerraform(struct!.resources),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsMonitoringToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsMonitoringOutputReference | DataRafayBlueprintSpecDefaultAddonsMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_operator: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorToHclTerraform(struct!.gpuOperator),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorList",
    },
    helm_exporter: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterToHclTerraform(struct!.helmExporter),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterList",
    },
    kube_state_metrics: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsToHclTerraform(struct!.kubeStateMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsList",
    },
    metrics_server: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerToHclTerraform(struct!.metricsServer),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerList",
    },
    node_exporter: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterToHclTerraform(struct!.nodeExporter),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterList",
    },
    prometheus_adapter: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterToHclTerraform(struct!.prometheusAdapter),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterList",
    },
    resources: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddonsMonitoring | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddonsMonitoring | undefined) {
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
  private _gpuOperator = new DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperatorOutputReference(this, "gpu_operator");
  public get gpuOperator() {
    return this._gpuOperator;
  }
  public putGpuOperator(value: DataRafayBlueprintSpecDefaultAddonsMonitoringGpuOperator) {
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
  private _helmExporter = new DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporterOutputReference(this, "helm_exporter");
  public get helmExporter() {
    return this._helmExporter;
  }
  public putHelmExporter(value: DataRafayBlueprintSpecDefaultAddonsMonitoringHelmExporter) {
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
  private _kubeStateMetrics = new DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetricsOutputReference(this, "kube_state_metrics");
  public get kubeStateMetrics() {
    return this._kubeStateMetrics;
  }
  public putKubeStateMetrics(value: DataRafayBlueprintSpecDefaultAddonsMonitoringKubeStateMetrics) {
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
  private _metricsServer = new DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServerOutputReference(this, "metrics_server");
  public get metricsServer() {
    return this._metricsServer;
  }
  public putMetricsServer(value: DataRafayBlueprintSpecDefaultAddonsMonitoringMetricsServer) {
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
  private _nodeExporter = new DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporterOutputReference(this, "node_exporter");
  public get nodeExporter() {
    return this._nodeExporter;
  }
  public putNodeExporter(value: DataRafayBlueprintSpecDefaultAddonsMonitoringNodeExporter) {
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
  private _prometheusAdapter = new DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapterOutputReference(this, "prometheus_adapter");
  public get prometheusAdapter() {
    return this._prometheusAdapter;
  }
  public putPrometheusAdapter(value: DataRafayBlueprintSpecDefaultAddonsMonitoringPrometheusAdapter) {
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
  private _resources = new DataRafayBlueprintSpecDefaultAddonsMonitoringResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataRafayBlueprintSpecDefaultAddonsMonitoringResources) {
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
export interface DataRafayBlueprintSpecDefaultAddons {
  /**
  * enable calico cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_calico_cni DataRafayBlueprint#enable_calico_cni}
  */
  readonly enableCalicoCni?: boolean | cdktf.IResolvable;
  /**
  * enable cilium cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_cilium_cni DataRafayBlueprint#enable_cilium_cni}
  */
  readonly enableCiliumCni?: boolean | cdktf.IResolvable;
  /**
  * enable cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_cni DataRafayBlueprint#enable_cni}
  */
  readonly enableCni?: boolean | cdktf.IResolvable;
  /**
  * enable csi secret store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_csi_secret_store DataRafayBlueprint#enable_csi_secret_store}
  */
  readonly enableCsiSecretStore?: boolean | cdktf.IResolvable;
  /**
  * enable default ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_ingress DataRafayBlueprint#enable_ingress}
  */
  readonly enableIngress?: boolean | cdktf.IResolvable;
  /**
  * enable kubeovn cilium chaining cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_kubeovn_chaning_cni DataRafayBlueprint#enable_kubeovn_chaning_cni}
  */
  readonly enableKubeovnChaningCni?: boolean | cdktf.IResolvable;
  /**
  * enable kubeovn cni config add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_kubeovn_cni DataRafayBlueprint#enable_kubeovn_cni}
  */
  readonly enableKubeovnCni?: boolean | cdktf.IResolvable;
  /**
  * enable default logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_logging DataRafayBlueprint#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * enable default monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_monitoring DataRafayBlueprint#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * enable rook ceph storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_rook_ceph DataRafayBlueprint#enable_rook_ceph}
  */
  readonly enableRookCeph?: boolean | cdktf.IResolvable;
  /**
  * enable virtual machine workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_vm DataRafayBlueprint#enable_vm}
  */
  readonly enableVm?: boolean | cdktf.IResolvable;
  /**
  * csi_secret_store_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#csi_secret_store_config DataRafayBlueprint#csi_secret_store_config}
  */
  readonly csiSecretStoreConfig?: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfig;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#monitoring DataRafayBlueprint#monitoring}
  */
  readonly monitoring?: DataRafayBlueprintSpecDefaultAddonsMonitoring;
}

export function dataRafayBlueprintSpecDefaultAddonsToTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsOutputReference | DataRafayBlueprintSpecDefaultAddons): any {
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
    csi_secret_store_config: dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigToTerraform(struct!.csiSecretStoreConfig),
    monitoring: dataRafayBlueprintSpecDefaultAddonsMonitoringToTerraform(struct!.monitoring),
  }
}


export function dataRafayBlueprintSpecDefaultAddonsToHclTerraform(struct?: DataRafayBlueprintSpecDefaultAddonsOutputReference | DataRafayBlueprintSpecDefaultAddons): any {
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
      value: dataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigToHclTerraform(struct!.csiSecretStoreConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigList",
    },
    monitoring: {
      value: dataRafayBlueprintSpecDefaultAddonsMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsMonitoringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecDefaultAddonsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDefaultAddons | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDefaultAddons | undefined) {
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
  private _csiSecretStoreConfig = new DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfigOutputReference(this, "csi_secret_store_config");
  public get csiSecretStoreConfig() {
    return this._csiSecretStoreConfig;
  }
  public putCsiSecretStoreConfig(value: DataRafayBlueprintSpecDefaultAddonsCsiSecretStoreConfig) {
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
  private _monitoring = new DataRafayBlueprintSpecDefaultAddonsMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataRafayBlueprintSpecDefaultAddonsMonitoring) {
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
export interface DataRafayBlueprintSpecDrift {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#action DataRafayBlueprint#action}
  */
  readonly action?: string;
  /**
  * flag to specify if drift reconcillation is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataRafayBlueprintSpecDriftToTerraform(struct?: DataRafayBlueprintSpecDriftOutputReference | DataRafayBlueprintSpecDrift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataRafayBlueprintSpecDriftToHclTerraform(struct?: DataRafayBlueprintSpecDriftOutputReference | DataRafayBlueprintSpecDrift): any {
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

export class DataRafayBlueprintSpecDriftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDrift | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecDrift | undefined) {
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
export interface DataRafayBlueprintSpecDriftWebhook {
  /**
  * enable drift 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataRafayBlueprintSpecDriftWebhookToTerraform(struct?: DataRafayBlueprintSpecDriftWebhookOutputReference | DataRafayBlueprintSpecDriftWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataRafayBlueprintSpecDriftWebhookToHclTerraform(struct?: DataRafayBlueprintSpecDriftWebhookOutputReference | DataRafayBlueprintSpecDriftWebhook): any {
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

export class DataRafayBlueprintSpecDriftWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecDriftWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayBlueprintSpecDriftWebhook | undefined) {
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
export interface DataRafayBlueprintSpecNamespaceConfig {
  /**
  * flag to enable namespace sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enable_sync DataRafayBlueprint#enable_sync}
  */
  readonly enableSync?: boolean | cdktf.IResolvable;
  /**
  * Synchronizing type as managed or unmanaged namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#sync_type DataRafayBlueprint#sync_type}
  */
  readonly syncType?: string;
}

export function dataRafayBlueprintSpecNamespaceConfigToTerraform(struct?: DataRafayBlueprintSpecNamespaceConfigOutputReference | DataRafayBlueprintSpecNamespaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_sync: cdktf.booleanToTerraform(struct!.enableSync),
    sync_type: cdktf.stringToTerraform(struct!.syncType),
  }
}


export function dataRafayBlueprintSpecNamespaceConfigToHclTerraform(struct?: DataRafayBlueprintSpecNamespaceConfigOutputReference | DataRafayBlueprintSpecNamespaceConfig): any {
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

export class DataRafayBlueprintSpecNamespaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecNamespaceConfig | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecNamespaceConfig | undefined) {
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
export interface DataRafayBlueprintSpecNetworkPolicyPolicies {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#system_catalog DataRafayBlueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version_state DataRafayBlueprint#version_state}
  */
  readonly versionState?: string;
}

export function dataRafayBlueprintSpecNetworkPolicyPoliciesToTerraform(struct?: DataRafayBlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable): any {
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


export function dataRafayBlueprintSpecNetworkPolicyPoliciesToHclTerraform(struct?: DataRafayBlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable): any {
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

export class DataRafayBlueprintSpecNetworkPolicyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayBlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecNetworkPolicyPolicies | cdktf.IResolvable | undefined) {
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

export class DataRafayBlueprintSpecNetworkPolicyPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataRafayBlueprintSpecNetworkPolicyPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataRafayBlueprintSpecNetworkPolicyPoliciesOutputReference {
    return new DataRafayBlueprintSpecNetworkPolicyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayBlueprintSpecNetworkPolicyProfile {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#system_catalog DataRafayBlueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version_state DataRafayBlueprint#version_state}
  */
  readonly versionState?: string;
}

export function dataRafayBlueprintSpecNetworkPolicyProfileToTerraform(struct?: DataRafayBlueprintSpecNetworkPolicyProfileOutputReference | DataRafayBlueprintSpecNetworkPolicyProfile): any {
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


export function dataRafayBlueprintSpecNetworkPolicyProfileToHclTerraform(struct?: DataRafayBlueprintSpecNetworkPolicyProfileOutputReference | DataRafayBlueprintSpecNetworkPolicyProfile): any {
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

export class DataRafayBlueprintSpecNetworkPolicyProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecNetworkPolicyProfile | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecNetworkPolicyProfile | undefined) {
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
export interface DataRafayBlueprintSpecNetworkPolicy {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#policies DataRafayBlueprint#policies}
  */
  readonly policies?: DataRafayBlueprintSpecNetworkPolicyPolicies[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#profile DataRafayBlueprint#profile}
  */
  readonly profile?: DataRafayBlueprintSpecNetworkPolicyProfile;
}

export function dataRafayBlueprintSpecNetworkPolicyToTerraform(struct?: DataRafayBlueprintSpecNetworkPolicyOutputReference | DataRafayBlueprintSpecNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataRafayBlueprintSpecNetworkPolicyPoliciesToTerraform, true)(struct!.policies),
    profile: dataRafayBlueprintSpecNetworkPolicyProfileToTerraform(struct!.profile),
  }
}


export function dataRafayBlueprintSpecNetworkPolicyToHclTerraform(struct?: DataRafayBlueprintSpecNetworkPolicyOutputReference | DataRafayBlueprintSpecNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataRafayBlueprintSpecNetworkPolicyPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecNetworkPolicyPoliciesList",
    },
    profile: {
      value: dataRafayBlueprintSpecNetworkPolicyProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecNetworkPolicyProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecNetworkPolicy | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecNetworkPolicy | undefined) {
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
  private _policies = new DataRafayBlueprintSpecNetworkPolicyPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataRafayBlueprintSpecNetworkPolicyPolicies[] | cdktf.IResolvable) {
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
  private _profile = new DataRafayBlueprintSpecNetworkPolicyProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataRafayBlueprintSpecNetworkPolicyProfile) {
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
export interface DataRafayBlueprintSpecOpaPolicyOpaPolicy {
  /**
  * name of the opa policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * version of the opa policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
}

export function dataRafayBlueprintSpecOpaPolicyOpaPolicyToTerraform(struct?: DataRafayBlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataRafayBlueprintSpecOpaPolicyOpaPolicyToHclTerraform(struct?: DataRafayBlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable): any {
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

export class DataRafayBlueprintSpecOpaPolicyOpaPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayBlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecOpaPolicyOpaPolicy | cdktf.IResolvable | undefined) {
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

export class DataRafayBlueprintSpecOpaPolicyOpaPolicyList extends cdktf.ComplexList {
  public internalValue? : DataRafayBlueprintSpecOpaPolicyOpaPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataRafayBlueprintSpecOpaPolicyOpaPolicyOutputReference {
    return new DataRafayBlueprintSpecOpaPolicyOpaPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayBlueprintSpecOpaPolicyProfile {
  /**
  * name of the opa profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * version of the opa profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
}

export function dataRafayBlueprintSpecOpaPolicyProfileToTerraform(struct?: DataRafayBlueprintSpecOpaPolicyProfileOutputReference | DataRafayBlueprintSpecOpaPolicyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataRafayBlueprintSpecOpaPolicyProfileToHclTerraform(struct?: DataRafayBlueprintSpecOpaPolicyProfileOutputReference | DataRafayBlueprintSpecOpaPolicyProfile): any {
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

export class DataRafayBlueprintSpecOpaPolicyProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecOpaPolicyProfile | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecOpaPolicyProfile | undefined) {
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
export interface DataRafayBlueprintSpecOpaPolicy {
  /**
  * opa_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#opa_policy DataRafayBlueprint#opa_policy}
  */
  readonly opaPolicy?: DataRafayBlueprintSpecOpaPolicyOpaPolicy[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#profile DataRafayBlueprint#profile}
  */
  readonly profile?: DataRafayBlueprintSpecOpaPolicyProfile;
}

export function dataRafayBlueprintSpecOpaPolicyToTerraform(struct?: DataRafayBlueprintSpecOpaPolicyOutputReference | DataRafayBlueprintSpecOpaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opa_policy: cdktf.listMapper(dataRafayBlueprintSpecOpaPolicyOpaPolicyToTerraform, true)(struct!.opaPolicy),
    profile: dataRafayBlueprintSpecOpaPolicyProfileToTerraform(struct!.profile),
  }
}


export function dataRafayBlueprintSpecOpaPolicyToHclTerraform(struct?: DataRafayBlueprintSpecOpaPolicyOutputReference | DataRafayBlueprintSpecOpaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opa_policy: {
      value: cdktf.listMapperHcl(dataRafayBlueprintSpecOpaPolicyOpaPolicyToHclTerraform, true)(struct!.opaPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecOpaPolicyOpaPolicyList",
    },
    profile: {
      value: dataRafayBlueprintSpecOpaPolicyProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecOpaPolicyProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecOpaPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecOpaPolicy | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecOpaPolicy | undefined) {
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
  private _opaPolicy = new DataRafayBlueprintSpecOpaPolicyOpaPolicyList(this, "opa_policy", false);
  public get opaPolicy() {
    return this._opaPolicy;
  }
  public putOpaPolicy(value: DataRafayBlueprintSpecOpaPolicyOpaPolicy[] | cdktf.IResolvable) {
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
  private _profile = new DataRafayBlueprintSpecOpaPolicyProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataRafayBlueprintSpecOpaPolicyProfile) {
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
export interface DataRafayBlueprintSpecPlacement {
  /**
  * Bool value of autoPublish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#auto_publish DataRafayBlueprint#auto_publish}
  */
  readonly autoPublish?: boolean | cdktf.IResolvable;
  /**
  * Array of Fleet value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#fleet_values DataRafayBlueprint#fleet_values}
  */
  readonly fleetValues?: string[];
}

export function dataRafayBlueprintSpecPlacementToTerraform(struct?: DataRafayBlueprintSpecPlacementOutputReference | DataRafayBlueprintSpecPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_publish: cdktf.booleanToTerraform(struct!.autoPublish),
    fleet_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fleetValues),
  }
}


export function dataRafayBlueprintSpecPlacementToHclTerraform(struct?: DataRafayBlueprintSpecPlacementOutputReference | DataRafayBlueprintSpecPlacement): any {
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

export class DataRafayBlueprintSpecPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecPlacement | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecPlacement | undefined) {
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
export interface DataRafayBlueprintSpecPrivateKubeApiProxies {
  /**
  * name of the kubernetes proxy network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
}

export function dataRafayBlueprintSpecPrivateKubeApiProxiesToTerraform(struct?: DataRafayBlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataRafayBlueprintSpecPrivateKubeApiProxiesToHclTerraform(struct?: DataRafayBlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable): any {
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

export class DataRafayBlueprintSpecPrivateKubeApiProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayBlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecPrivateKubeApiProxies | cdktf.IResolvable | undefined) {
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

export class DataRafayBlueprintSpecPrivateKubeApiProxiesList extends cdktf.ComplexList {
  public internalValue? : DataRafayBlueprintSpecPrivateKubeApiProxies[] | cdktf.IResolvable

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
  public get(index: number): DataRafayBlueprintSpecPrivateKubeApiProxiesOutputReference {
    return new DataRafayBlueprintSpecPrivateKubeApiProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayBlueprintSpecPsp {
  /**
  * flag to specify if PSP is enabled for blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * names of the PSPs to be added for the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#names DataRafayBlueprint#names}
  */
  readonly names?: string[];
  /**
  * scope of the PSP for the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#scope DataRafayBlueprint#scope}
  */
  readonly scope?: string;
}

export function dataRafayBlueprintSpecPspToTerraform(struct?: DataRafayBlueprintSpecPspOutputReference | DataRafayBlueprintSpecPsp): any {
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


export function dataRafayBlueprintSpecPspToHclTerraform(struct?: DataRafayBlueprintSpecPspOutputReference | DataRafayBlueprintSpecPsp): any {
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

export class DataRafayBlueprintSpecPspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecPsp | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecPsp | undefined) {
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
export interface DataRafayBlueprintSpecServiceMeshPolicies {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#system_catalog DataRafayBlueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version_state DataRafayBlueprint#version_state}
  */
  readonly versionState?: string;
}

export function dataRafayBlueprintSpecServiceMeshPoliciesToTerraform(struct?: DataRafayBlueprintSpecServiceMeshPolicies | cdktf.IResolvable): any {
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


export function dataRafayBlueprintSpecServiceMeshPoliciesToHclTerraform(struct?: DataRafayBlueprintSpecServiceMeshPolicies | cdktf.IResolvable): any {
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

export class DataRafayBlueprintSpecServiceMeshPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayBlueprintSpecServiceMeshPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecServiceMeshPolicies | cdktf.IResolvable | undefined) {
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

export class DataRafayBlueprintSpecServiceMeshPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataRafayBlueprintSpecServiceMeshPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataRafayBlueprintSpecServiceMeshPoliciesOutputReference {
    return new DataRafayBlueprintSpecServiceMeshPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayBlueprintSpecServiceMeshProfile {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#system_catalog DataRafayBlueprint#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version_state DataRafayBlueprint#version_state}
  */
  readonly versionState?: string;
}

export function dataRafayBlueprintSpecServiceMeshProfileToTerraform(struct?: DataRafayBlueprintSpecServiceMeshProfileOutputReference | DataRafayBlueprintSpecServiceMeshProfile): any {
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


export function dataRafayBlueprintSpecServiceMeshProfileToHclTerraform(struct?: DataRafayBlueprintSpecServiceMeshProfileOutputReference | DataRafayBlueprintSpecServiceMeshProfile): any {
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

export class DataRafayBlueprintSpecServiceMeshProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecServiceMeshProfile | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecServiceMeshProfile | undefined) {
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
export interface DataRafayBlueprintSpecServiceMesh {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#policies DataRafayBlueprint#policies}
  */
  readonly policies?: DataRafayBlueprintSpecServiceMeshPolicies[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#profile DataRafayBlueprint#profile}
  */
  readonly profile?: DataRafayBlueprintSpecServiceMeshProfile;
}

export function dataRafayBlueprintSpecServiceMeshToTerraform(struct?: DataRafayBlueprintSpecServiceMeshOutputReference | DataRafayBlueprintSpecServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataRafayBlueprintSpecServiceMeshPoliciesToTerraform, true)(struct!.policies),
    profile: dataRafayBlueprintSpecServiceMeshProfileToTerraform(struct!.profile),
  }
}


export function dataRafayBlueprintSpecServiceMeshToHclTerraform(struct?: DataRafayBlueprintSpecServiceMeshOutputReference | DataRafayBlueprintSpecServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataRafayBlueprintSpecServiceMeshPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecServiceMeshPoliciesList",
    },
    profile: {
      value: dataRafayBlueprintSpecServiceMeshProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecServiceMeshProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecServiceMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecServiceMesh | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecServiceMesh | undefined) {
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
  private _policies = new DataRafayBlueprintSpecServiceMeshPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataRafayBlueprintSpecServiceMeshPolicies[] | cdktf.IResolvable) {
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
  private _profile = new DataRafayBlueprintSpecServiceMeshProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataRafayBlueprintSpecServiceMeshProfile) {
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
export interface DataRafayBlueprintSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#name DataRafayBlueprint#name}
  */
  readonly name?: string;
}

export function dataRafayBlueprintSpecSharingProjectsToTerraform(struct?: DataRafayBlueprintSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataRafayBlueprintSpecSharingProjectsToHclTerraform(struct?: DataRafayBlueprintSpecSharingProjects | cdktf.IResolvable): any {
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

export class DataRafayBlueprintSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayBlueprintSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class DataRafayBlueprintSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : DataRafayBlueprintSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): DataRafayBlueprintSpecSharingProjectsOutputReference {
    return new DataRafayBlueprintSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayBlueprintSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#enabled DataRafayBlueprint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#projects DataRafayBlueprint#projects}
  */
  readonly projects?: DataRafayBlueprintSpecSharingProjects[] | cdktf.IResolvable;
}

export function dataRafayBlueprintSpecSharingToTerraform(struct?: DataRafayBlueprintSpecSharingOutputReference | DataRafayBlueprintSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(dataRafayBlueprintSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function dataRafayBlueprintSpecSharingToHclTerraform(struct?: DataRafayBlueprintSpecSharingOutputReference | DataRafayBlueprintSpecSharing): any {
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
      value: cdktf.listMapperHcl(dataRafayBlueprintSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "DataRafayBlueprintSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpecSharing | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpecSharing | undefined) {
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
  private _projects = new DataRafayBlueprintSpecSharingProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: DataRafayBlueprintSpecSharingProjects[] | cdktf.IResolvable) {
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
export interface DataRafayBlueprintSpec {
  /**
  * Blueprint Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#type DataRafayBlueprint#type}
  */
  readonly type?: string;
  /**
  * version of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version DataRafayBlueprint#version}
  */
  readonly version?: string;
  /**
  * version state of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#version_state DataRafayBlueprint#version_state}
  */
  readonly versionState?: string;
  /**
  * base block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#base DataRafayBlueprint#base}
  */
  readonly base?: DataRafayBlueprintSpecBase;
  /**
  * components_criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#components_criticality DataRafayBlueprint#components_criticality}
  */
  readonly componentsCriticality?: DataRafayBlueprintSpecComponentsCriticality[] | cdktf.IResolvable;
  /**
  * cost_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#cost_profile DataRafayBlueprint#cost_profile}
  */
  readonly costProfile?: DataRafayBlueprintSpecCostProfile;
  /**
  * custom_addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#custom_addons DataRafayBlueprint#custom_addons}
  */
  readonly customAddons?: DataRafayBlueprintSpecCustomAddons[] | cdktf.IResolvable;
  /**
  * default_addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#default_addons DataRafayBlueprint#default_addons}
  */
  readonly defaultAddons?: DataRafayBlueprintSpecDefaultAddons;
  /**
  * drift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#drift DataRafayBlueprint#drift}
  */
  readonly drift?: DataRafayBlueprintSpecDrift;
  /**
  * drift_webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#drift_webhook DataRafayBlueprint#drift_webhook}
  */
  readonly driftWebhook?: DataRafayBlueprintSpecDriftWebhook;
  /**
  * namespace_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#namespace_config DataRafayBlueprint#namespace_config}
  */
  readonly namespaceConfig?: DataRafayBlueprintSpecNamespaceConfig;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#network_policy DataRafayBlueprint#network_policy}
  */
  readonly networkPolicy?: DataRafayBlueprintSpecNetworkPolicy;
  /**
  * opa_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#opa_policy DataRafayBlueprint#opa_policy}
  */
  readonly opaPolicy?: DataRafayBlueprintSpecOpaPolicy;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#placement DataRafayBlueprint#placement}
  */
  readonly placement?: DataRafayBlueprintSpecPlacement;
  /**
  * private_kube_api_proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#private_kube_api_proxies DataRafayBlueprint#private_kube_api_proxies}
  */
  readonly privateKubeApiProxies?: DataRafayBlueprintSpecPrivateKubeApiProxies[] | cdktf.IResolvable;
  /**
  * psp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#psp DataRafayBlueprint#psp}
  */
  readonly psp?: DataRafayBlueprintSpecPsp;
  /**
  * service_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#service_mesh DataRafayBlueprint#service_mesh}
  */
  readonly serviceMesh?: DataRafayBlueprintSpecServiceMesh;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#sharing DataRafayBlueprint#sharing}
  */
  readonly sharing?: DataRafayBlueprintSpecSharing;
}

export function dataRafayBlueprintSpecToTerraform(struct?: DataRafayBlueprintSpecOutputReference | DataRafayBlueprintSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
    base: dataRafayBlueprintSpecBaseToTerraform(struct!.base),
    components_criticality: cdktf.listMapper(dataRafayBlueprintSpecComponentsCriticalityToTerraform, true)(struct!.componentsCriticality),
    cost_profile: dataRafayBlueprintSpecCostProfileToTerraform(struct!.costProfile),
    custom_addons: cdktf.listMapper(dataRafayBlueprintSpecCustomAddonsToTerraform, true)(struct!.customAddons),
    default_addons: dataRafayBlueprintSpecDefaultAddonsToTerraform(struct!.defaultAddons),
    drift: dataRafayBlueprintSpecDriftToTerraform(struct!.drift),
    drift_webhook: dataRafayBlueprintSpecDriftWebhookToTerraform(struct!.driftWebhook),
    namespace_config: dataRafayBlueprintSpecNamespaceConfigToTerraform(struct!.namespaceConfig),
    network_policy: dataRafayBlueprintSpecNetworkPolicyToTerraform(struct!.networkPolicy),
    opa_policy: dataRafayBlueprintSpecOpaPolicyToTerraform(struct!.opaPolicy),
    placement: dataRafayBlueprintSpecPlacementToTerraform(struct!.placement),
    private_kube_api_proxies: cdktf.listMapper(dataRafayBlueprintSpecPrivateKubeApiProxiesToTerraform, true)(struct!.privateKubeApiProxies),
    psp: dataRafayBlueprintSpecPspToTerraform(struct!.psp),
    service_mesh: dataRafayBlueprintSpecServiceMeshToTerraform(struct!.serviceMesh),
    sharing: dataRafayBlueprintSpecSharingToTerraform(struct!.sharing),
  }
}


export function dataRafayBlueprintSpecToHclTerraform(struct?: DataRafayBlueprintSpecOutputReference | DataRafayBlueprintSpec): any {
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
      value: dataRafayBlueprintSpecBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecBaseList",
    },
    components_criticality: {
      value: cdktf.listMapperHcl(dataRafayBlueprintSpecComponentsCriticalityToHclTerraform, true)(struct!.componentsCriticality),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecComponentsCriticalityList",
    },
    cost_profile: {
      value: dataRafayBlueprintSpecCostProfileToHclTerraform(struct!.costProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecCostProfileList",
    },
    custom_addons: {
      value: cdktf.listMapperHcl(dataRafayBlueprintSpecCustomAddonsToHclTerraform, true)(struct!.customAddons),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecCustomAddonsList",
    },
    default_addons: {
      value: dataRafayBlueprintSpecDefaultAddonsToHclTerraform(struct!.defaultAddons),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDefaultAddonsList",
    },
    drift: {
      value: dataRafayBlueprintSpecDriftToHclTerraform(struct!.drift),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDriftList",
    },
    drift_webhook: {
      value: dataRafayBlueprintSpecDriftWebhookToHclTerraform(struct!.driftWebhook),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecDriftWebhookList",
    },
    namespace_config: {
      value: dataRafayBlueprintSpecNamespaceConfigToHclTerraform(struct!.namespaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecNamespaceConfigList",
    },
    network_policy: {
      value: dataRafayBlueprintSpecNetworkPolicyToHclTerraform(struct!.networkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecNetworkPolicyList",
    },
    opa_policy: {
      value: dataRafayBlueprintSpecOpaPolicyToHclTerraform(struct!.opaPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecOpaPolicyList",
    },
    placement: {
      value: dataRafayBlueprintSpecPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecPlacementList",
    },
    private_kube_api_proxies: {
      value: cdktf.listMapperHcl(dataRafayBlueprintSpecPrivateKubeApiProxiesToHclTerraform, true)(struct!.privateKubeApiProxies),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecPrivateKubeApiProxiesList",
    },
    psp: {
      value: dataRafayBlueprintSpecPspToHclTerraform(struct!.psp),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecPspList",
    },
    service_mesh: {
      value: dataRafayBlueprintSpecServiceMeshToHclTerraform(struct!.serviceMesh),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecServiceMeshList",
    },
    sharing: {
      value: dataRafayBlueprintSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayBlueprintSpecSharingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayBlueprintSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayBlueprintSpec | undefined {
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

  public set internalValue(value: DataRafayBlueprintSpec | undefined) {
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
  private _base = new DataRafayBlueprintSpecBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: DataRafayBlueprintSpecBase) {
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
  private _componentsCriticality = new DataRafayBlueprintSpecComponentsCriticalityList(this, "components_criticality", false);
  public get componentsCriticality() {
    return this._componentsCriticality;
  }
  public putComponentsCriticality(value: DataRafayBlueprintSpecComponentsCriticality[] | cdktf.IResolvable) {
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
  private _costProfile = new DataRafayBlueprintSpecCostProfileOutputReference(this, "cost_profile");
  public get costProfile() {
    return this._costProfile;
  }
  public putCostProfile(value: DataRafayBlueprintSpecCostProfile) {
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
  private _customAddons = new DataRafayBlueprintSpecCustomAddonsList(this, "custom_addons", false);
  public get customAddons() {
    return this._customAddons;
  }
  public putCustomAddons(value: DataRafayBlueprintSpecCustomAddons[] | cdktf.IResolvable) {
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
  private _defaultAddons = new DataRafayBlueprintSpecDefaultAddonsOutputReference(this, "default_addons");
  public get defaultAddons() {
    return this._defaultAddons;
  }
  public putDefaultAddons(value: DataRafayBlueprintSpecDefaultAddons) {
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
  private _drift = new DataRafayBlueprintSpecDriftOutputReference(this, "drift");
  public get drift() {
    return this._drift;
  }
  public putDrift(value: DataRafayBlueprintSpecDrift) {
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
  private _driftWebhook = new DataRafayBlueprintSpecDriftWebhookOutputReference(this, "drift_webhook");
  public get driftWebhook() {
    return this._driftWebhook;
  }
  public putDriftWebhook(value: DataRafayBlueprintSpecDriftWebhook) {
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
  private _namespaceConfig = new DataRafayBlueprintSpecNamespaceConfigOutputReference(this, "namespace_config");
  public get namespaceConfig() {
    return this._namespaceConfig;
  }
  public putNamespaceConfig(value: DataRafayBlueprintSpecNamespaceConfig) {
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
  private _networkPolicy = new DataRafayBlueprintSpecNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: DataRafayBlueprintSpecNetworkPolicy) {
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
  private _opaPolicy = new DataRafayBlueprintSpecOpaPolicyOutputReference(this, "opa_policy");
  public get opaPolicy() {
    return this._opaPolicy;
  }
  public putOpaPolicy(value: DataRafayBlueprintSpecOpaPolicy) {
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
  private _placement = new DataRafayBlueprintSpecPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataRafayBlueprintSpecPlacement) {
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
  private _privateKubeApiProxies = new DataRafayBlueprintSpecPrivateKubeApiProxiesList(this, "private_kube_api_proxies", false);
  public get privateKubeApiProxies() {
    return this._privateKubeApiProxies;
  }
  public putPrivateKubeApiProxies(value: DataRafayBlueprintSpecPrivateKubeApiProxies[] | cdktf.IResolvable) {
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
  private _psp = new DataRafayBlueprintSpecPspOutputReference(this, "psp");
  public get psp() {
    return this._psp;
  }
  public putPsp(value: DataRafayBlueprintSpecPsp) {
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
  private _serviceMesh = new DataRafayBlueprintSpecServiceMeshOutputReference(this, "service_mesh");
  public get serviceMesh() {
    return this._serviceMesh;
  }
  public putServiceMesh(value: DataRafayBlueprintSpecServiceMesh) {
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
  private _sharing = new DataRafayBlueprintSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: DataRafayBlueprintSpecSharing) {
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
export interface DataRafayBlueprintTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#read DataRafayBlueprint#read}
  */
  readonly read?: string;
}

export function dataRafayBlueprintTimeoutsToTerraform(struct?: DataRafayBlueprintTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayBlueprintTimeoutsToHclTerraform(struct?: DataRafayBlueprintTimeouts | cdktf.IResolvable): any {
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

export class DataRafayBlueprintTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayBlueprintTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRafayBlueprintTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint rafay_blueprint}
*/
export class DataRafayBlueprint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayBlueprint to import
  * @param importFromId The id of the existing DataRafayBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/blueprint rafay_blueprint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayBlueprintConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRafayBlueprintConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_blueprint',
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
  private _metadata = new DataRafayBlueprintMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataRafayBlueprintMetadata) {
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
  private _spec = new DataRafayBlueprintSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataRafayBlueprintSpec) {
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
  private _timeouts = new DataRafayBlueprintTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayBlueprintTimeouts) {
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
      metadata: dataRafayBlueprintMetadataToTerraform(this._metadata.internalValue),
      spec: dataRafayBlueprintSpecToTerraform(this._spec.internalValue),
      timeouts: dataRafayBlueprintTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: dataRafayBlueprintMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayBlueprintMetadataList",
      },
      spec: {
        value: dataRafayBlueprintSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayBlueprintSpecList",
      },
      timeouts: {
        value: dataRafayBlueprintTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayBlueprintTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
