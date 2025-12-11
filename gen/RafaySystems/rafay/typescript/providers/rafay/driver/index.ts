// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DriverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#id Driver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#metadata Driver#metadata}
  */
  readonly metadata?: DriverMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#spec Driver#spec}
  */
  readonly spec?: DriverSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#timeouts Driver#timeouts}
  */
  readonly timeouts?: DriverTimeouts;
}
export interface DriverMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#id Driver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#is_sso_user Driver#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#username Driver#username}
  */
  readonly username?: string;
}

export function driverMetadataCreatedByToTerraform(struct?: DriverMetadataCreatedByOutputReference | DriverMetadataCreatedBy): any {
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


export function driverMetadataCreatedByToHclTerraform(struct?: DriverMetadataCreatedByOutputReference | DriverMetadataCreatedBy): any {
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

export class DriverMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverMetadataCreatedBy | undefined {
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

  public set internalValue(value: DriverMetadataCreatedBy | undefined) {
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
export interface DriverMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#id Driver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#is_sso_user Driver#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#username Driver#username}
  */
  readonly username?: string;
}

export function driverMetadataModifiedByToTerraform(struct?: DriverMetadataModifiedByOutputReference | DriverMetadataModifiedBy): any {
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


export function driverMetadataModifiedByToHclTerraform(struct?: DriverMetadataModifiedByOutputReference | DriverMetadataModifiedBy): any {
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

export class DriverMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverMetadataModifiedBy | undefined {
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

  public set internalValue(value: DriverMetadataModifiedBy | undefined) {
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
export interface DriverMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#annotations Driver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#description Driver#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#display_name Driver#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#labels Driver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#name Driver#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#project Driver#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#created_by Driver#created_by}
  */
  readonly createdBy?: DriverMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#modified_by Driver#modified_by}
  */
  readonly modifiedBy?: DriverMetadataModifiedBy;
}

export function driverMetadataToTerraform(struct?: DriverMetadataOutputReference | DriverMetadata): any {
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
    created_by: driverMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: driverMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function driverMetadataToHclTerraform(struct?: DriverMetadataOutputReference | DriverMetadata): any {
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
      value: driverMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "DriverMetadataCreatedByList",
    },
    modified_by: {
      value: driverMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "DriverMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverMetadata | undefined {
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

  public set internalValue(value: DriverMetadata | undefined) {
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
  private _createdBy = new DriverMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: DriverMetadataCreatedBy) {
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
  private _modifiedBy = new DriverMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: DriverMetadataModifiedBy) {
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
export interface DriverSpecConfigContainerImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#password Driver#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#registry Driver#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#username Driver#username}
  */
  readonly username?: string;
}

export function driverSpecConfigContainerImagePullCredentialsToTerraform(struct?: DriverSpecConfigContainerImagePullCredentialsOutputReference | DriverSpecConfigContainerImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function driverSpecConfigContainerImagePullCredentialsToHclTerraform(struct?: DriverSpecConfigContainerImagePullCredentialsOutputReference | DriverSpecConfigContainerImagePullCredentials): any {
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
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
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

export class DriverSpecConfigContainerImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerImagePullCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerImagePullCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._registry = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._registry = value.registry;
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

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
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
export interface DriverSpecConfigContainerKubeConfigOptions {
  /**
  * Specify the kube config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#kube_config Driver#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Specify if out of cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#out_of_cluster Driver#out_of_cluster}
  */
  readonly outOfCluster?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeConfigOptionsToTerraform(struct?: DriverSpecConfigContainerKubeConfigOptionsOutputReference | DriverSpecConfigContainerKubeConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_config: cdktf.stringToTerraform(struct!.kubeConfig),
    out_of_cluster: cdktf.booleanToTerraform(struct!.outOfCluster),
  }
}


export function driverSpecConfigContainerKubeConfigOptionsToHclTerraform(struct?: DriverSpecConfigContainerKubeConfigOptionsOutputReference | DriverSpecConfigContainerKubeConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_config: {
      value: cdktf.stringToHclTerraform(struct!.kubeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_of_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.outOfCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeConfigOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeConfigOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig;
    }
    if (this._outOfCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfCluster = this._outOfCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeConfigOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubeConfig = undefined;
      this._outOfCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubeConfig = value.kubeConfig;
      this._outOfCluster = value.outOfCluster;
    }
  }

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // out_of_cluster - computed: false, optional: true, required: false
  private _outOfCluster?: boolean | cdktf.IResolvable; 
  public get outOfCluster() {
    return this.getBooleanAttribute('out_of_cluster');
  }
  public set outOfCluster(value: boolean | cdktf.IResolvable) {
    this._outOfCluster = value;
  }
  public resetOutOfCluster() {
    this._outOfCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfClusterInput() {
    return this._outOfCluster;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_fields Driver#match_fields}
  */
  readonly matchFields?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#weight Driver#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preference Driver#preference}
  */
  readonly preference?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._preference.internalValue = value.preference;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_fields Driver#match_fields}
  */
  readonly matchFields?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#node_selector_terms Driver#node_selector_terms}
  */
  readonly nodeSelectorTerms?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preferred_during_scheduling_ignored_during_execution Driver#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required_during_scheduling_ignored_during_execution Driver#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: driverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#weight Driver#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_affinity_term Driver#pod_affinity_term}
  */
  readonly podAffinityTerm?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preferred_during_scheduling_ignored_during_execution Driver#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required_during_scheduling_ignored_during_execution Driver#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#weight Driver#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_affinity_term Driver#pod_affinity_term}
  */
  readonly podAffinityTerm?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preferred_during_scheduling_ignored_during_execution Driver#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required_during_scheduling_ignored_during_execution Driver#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#node_affinity Driver#node_affinity}
  */
  readonly nodeAffinity?: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_affinity Driver#pod_affinity}
  */
  readonly podAffinity?: DriverSpecConfigContainerKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_anti_affinity Driver#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinity;
}

export function driverSpecConfigContainerKubeOptionsAffinityToTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: driverSpecConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: driverSpecConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function driverSpecConfigContainerKubeOptionsAffinityToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsAffinityOutputReference | DriverSpecConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: driverSpecConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: driverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DriverSpecConfigContainerKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DriverSpecConfigContainerKubeOptionsAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DriverSpecConfigContainerKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DriverSpecConfigContainerKubeOptionsAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DriverSpecConfigContainerKubeOptionsAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct?: DriverSpecConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | DriverSpecConfigContainerKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function driverSpecConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | DriverSpecConfigContainerKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsSecurityContextPrivileged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function driverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface DriverSpecConfigContainerKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#privileged Driver#privileged}
  */
  readonly privileged?: DriverSpecConfigContainerKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#read_only_root_file_system Driver#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function driverSpecConfigContainerKubeOptionsSecurityContextToTerraform(struct?: DriverSpecConfigContainerKubeOptionsSecurityContextOutputReference | DriverSpecConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: driverSpecConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: driverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function driverSpecConfigContainerKubeOptionsSecurityContextToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsSecurityContextOutputReference | DriverSpecConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: driverSpecConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: driverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptionsSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged?.internalValue;
    }
    if (this._readOnlyRootFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileged.internalValue = undefined;
      this._readOnlyRootFileSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileged.internalValue = value.privileged;
      this._readOnlyRootFileSystem.internalValue = value.readOnlyRootFileSystem;
    }
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged = new DriverSpecConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: DriverSpecConfigContainerKubeOptionsSecurityContextPrivileged) {
    this._privileged.internalValue = value;
  }
  public resetPrivileged() {
    this._privileged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged.internalValue;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem = new DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: DriverSpecConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem) {
    this._readOnlyRootFileSystem.internalValue = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem.internalValue;
  }
}
export interface DriverSpecConfigContainerKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#effect Driver#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#toleration_seconds Driver#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: string;
}

export function driverSpecConfigContainerKubeOptionsTolerationsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function driverSpecConfigContainerKubeOptionsTolerationsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DriverSpecConfigContainerKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
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
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DriverSpecConfigContainerKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerKubeOptionsTolerationsOutputReference {
    return new DriverSpecConfigContainerKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainerKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#labels Driver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace Driver#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#node_selector Driver#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#resources Driver#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#service_account_name Driver#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#affinity Driver#affinity}
  */
  readonly affinity?: DriverSpecConfigContainerKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#security_context Driver#security_context}
  */
  readonly securityContext?: DriverSpecConfigContainerKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#tolerations Driver#tolerations}
  */
  readonly tolerations?: DriverSpecConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerKubeOptionsToTerraform(struct?: DriverSpecConfigContainerKubeOptionsOutputReference | DriverSpecConfigContainerKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    affinity: driverSpecConfigContainerKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: driverSpecConfigContainerKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(driverSpecConfigContainerKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function driverSpecConfigContainerKubeOptionsToHclTerraform(struct?: DriverSpecConfigContainerKubeOptionsOutputReference | DriverSpecConfigContainerKubeOptions): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: driverSpecConfigContainerKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsAffinityList",
    },
    security_context: {
      value: driverSpecConfigContainerKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerKubeOptions | undefined {
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
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerKubeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._nodeSelector = undefined;
      this._resources = undefined;
      this._serviceAccountName = undefined;
      this._affinity.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._nodeSelector = value.nodeSelector;
      this._resources = value.resources;
      this._serviceAccountName = value.serviceAccountName;
      this._affinity.internalValue = value.affinity;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
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

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DriverSpecConfigContainerKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DriverSpecConfigContainerKubeOptionsAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DriverSpecConfigContainerKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DriverSpecConfigContainerKubeOptionsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DriverSpecConfigContainerKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DriverSpecConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DriverSpecConfigContainerVolumeOptionsUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigContainerVolumeOptionsUsePvcToTerraform(struct?: DriverSpecConfigContainerVolumeOptionsUsePvcOutputReference | DriverSpecConfigContainerVolumeOptionsUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function driverSpecConfigContainerVolumeOptionsUsePvcToHclTerraform(struct?: DriverSpecConfigContainerVolumeOptionsUsePvcOutputReference | DriverSpecConfigContainerVolumeOptionsUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerVolumeOptionsUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerVolumeOptionsUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerVolumeOptionsUsePvc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface DriverSpecConfigContainerVolumeOptions {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#enable_backup_and_restore Driver#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#mount_path Driver#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pvc_size_gb Driver#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pvc_storage_class Driver#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#use_pvc Driver#use_pvc}
  */
  readonly usePvc?: DriverSpecConfigContainerVolumeOptionsUsePvc;
}

export function driverSpecConfigContainerVolumeOptionsToTerraform(struct?: DriverSpecConfigContainerVolumeOptionsOutputReference | DriverSpecConfigContainerVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: driverSpecConfigContainerVolumeOptionsUsePvcToTerraform(struct!.usePvc),
  }
}


export function driverSpecConfigContainerVolumeOptionsToHclTerraform(struct?: DriverSpecConfigContainerVolumeOptionsOutputReference | DriverSpecConfigContainerVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_backup_and_restore: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackupAndRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.pvcSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pvc: {
      value: driverSpecConfigContainerVolumeOptionsUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerVolumeOptionsUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerVolumeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerVolumeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBackupAndRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackupAndRestore = this._enableBackupAndRestore;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._pvcSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcSizeGb = this._pvcSizeGb;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    if (this._usePvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePvc = this._usePvc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerVolumeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableBackupAndRestore = undefined;
      this._mountPath = undefined;
      this._pvcSizeGb = undefined;
      this._pvcStorageClass = undefined;
      this._usePvc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableBackupAndRestore = value.enableBackupAndRestore;
      this._mountPath = value.mountPath;
      this._pvcSizeGb = value.pvcSizeGb;
      this._pvcStorageClass = value.pvcStorageClass;
      this._usePvc.internalValue = value.usePvc;
    }
  }

  // enable_backup_and_restore - computed: false, optional: true, required: false
  private _enableBackupAndRestore?: boolean | cdktf.IResolvable; 
  public get enableBackupAndRestore() {
    return this.getBooleanAttribute('enable_backup_and_restore');
  }
  public set enableBackupAndRestore(value: boolean | cdktf.IResolvable) {
    this._enableBackupAndRestore = value;
  }
  public resetEnableBackupAndRestore() {
    this._enableBackupAndRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupAndRestoreInput() {
    return this._enableBackupAndRestore;
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

  // pvc_size_gb - computed: false, optional: true, required: false
  private _pvcSizeGb?: string; 
  public get pvcSizeGb() {
    return this.getStringAttribute('pvc_size_gb');
  }
  public set pvcSizeGb(value: string) {
    this._pvcSizeGb = value;
  }
  public resetPvcSizeGb() {
    this._pvcSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcSizeGbInput() {
    return this._pvcSizeGb;
  }

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }

  // use_pvc - computed: false, optional: true, required: false
  private _usePvc = new DriverSpecConfigContainerVolumeOptionsUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: DriverSpecConfigContainerVolumeOptionsUsePvc) {
    this._usePvc.internalValue = value;
  }
  public resetUsePvc() {
    this._usePvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePvcInput() {
    return this._usePvc.internalValue;
  }
}
export interface DriverSpecConfigContainerVolumesUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigContainerVolumesUsePvcToTerraform(struct?: DriverSpecConfigContainerVolumesUsePvcOutputReference | DriverSpecConfigContainerVolumesUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function driverSpecConfigContainerVolumesUsePvcToHclTerraform(struct?: DriverSpecConfigContainerVolumesUsePvcOutputReference | DriverSpecConfigContainerVolumesUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerVolumesUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainerVolumesUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerVolumesUsePvc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface DriverSpecConfigContainerVolumes {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#enable_backup_and_restore Driver#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#mount_path Driver#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pvc_size_gb Driver#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pvc_storage_class Driver#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#use_pvc Driver#use_pvc}
  */
  readonly usePvc?: DriverSpecConfigContainerVolumesUsePvc;
}

export function driverSpecConfigContainerVolumesToTerraform(struct?: DriverSpecConfigContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: driverSpecConfigContainerVolumesUsePvcToTerraform(struct!.usePvc),
  }
}


export function driverSpecConfigContainerVolumesToHclTerraform(struct?: DriverSpecConfigContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_backup_and_restore: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackupAndRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.pvcSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pvc: {
      value: driverSpecConfigContainerVolumesUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerVolumesUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigContainerVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBackupAndRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackupAndRestore = this._enableBackupAndRestore;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._pvcSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcSizeGb = this._pvcSizeGb;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    if (this._usePvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePvc = this._usePvc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainerVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableBackupAndRestore = undefined;
      this._mountPath = undefined;
      this._pvcSizeGb = undefined;
      this._pvcStorageClass = undefined;
      this._usePvc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableBackupAndRestore = value.enableBackupAndRestore;
      this._mountPath = value.mountPath;
      this._pvcSizeGb = value.pvcSizeGb;
      this._pvcStorageClass = value.pvcStorageClass;
      this._usePvc.internalValue = value.usePvc;
    }
  }

  // enable_backup_and_restore - computed: false, optional: true, required: false
  private _enableBackupAndRestore?: boolean | cdktf.IResolvable; 
  public get enableBackupAndRestore() {
    return this.getBooleanAttribute('enable_backup_and_restore');
  }
  public set enableBackupAndRestore(value: boolean | cdktf.IResolvable) {
    this._enableBackupAndRestore = value;
  }
  public resetEnableBackupAndRestore() {
    this._enableBackupAndRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupAndRestoreInput() {
    return this._enableBackupAndRestore;
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

  // pvc_size_gb - computed: false, optional: true, required: false
  private _pvcSizeGb?: string; 
  public get pvcSizeGb() {
    return this.getStringAttribute('pvc_size_gb');
  }
  public set pvcSizeGb(value: string) {
    this._pvcSizeGb = value;
  }
  public resetPvcSizeGb() {
    this._pvcSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcSizeGbInput() {
    return this._pvcSizeGb;
  }

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }

  // use_pvc - computed: false, optional: true, required: false
  private _usePvc = new DriverSpecConfigContainerVolumesUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: DriverSpecConfigContainerVolumesUsePvc) {
    this._usePvc.internalValue = value;
  }
  public resetUsePvc() {
    this._usePvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePvcInput() {
    return this._usePvc.internalValue;
  }
}

export class DriverSpecConfigContainerVolumesList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigContainerVolumes[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigContainerVolumesOutputReference {
    return new DriverSpecConfigContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigContainer {
  /**
  * Specify the set of arguments to be passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#arguments Driver#arguments}
  */
  readonly arguments?: string[];
  /**
  * Specify the set of commands to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#commands Driver#commands}
  */
  readonly commands?: string[];
  /**
  * Specify the cpu limit in milli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#cpu_limit_milli Driver#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the environment variables to be set in key,value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#env_vars Driver#env_vars}
  */
  readonly envVars?: { [key: string]: string };
  /**
  * Specify the file data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#files Driver#files}
  */
  readonly files?: { [key: string]: string };
  /**
  * Specify the container image for the driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#image Driver#image}
  */
  readonly image?: string;
  /**
  * Specify the memory limit to be allocated in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#memory_limit_mb Driver#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the working directory path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#working_dir_path Driver#working_dir_path}
  */
  readonly workingDirPath?: string;
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#image_pull_credentials Driver#image_pull_credentials}
  */
  readonly imagePullCredentials?: DriverSpecConfigContainerImagePullCredentials;
  /**
  * kube_config_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#kube_config_options Driver#kube_config_options}
  */
  readonly kubeConfigOptions?: DriverSpecConfigContainerKubeConfigOptions;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#kube_options Driver#kube_options}
  */
  readonly kubeOptions?: DriverSpecConfigContainerKubeOptions;
  /**
  * volume_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#volume_options Driver#volume_options}
  */
  readonly volumeOptions?: DriverSpecConfigContainerVolumeOptions;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#volumes Driver#volumes}
  */
  readonly volumes?: DriverSpecConfigContainerVolumes[] | cdktf.IResolvable;
}

export function driverSpecConfigContainerToTerraform(struct?: DriverSpecConfigContainerOutputReference | DriverSpecConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envVars),
    files: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.files),
    image: cdktf.stringToTerraform(struct!.image),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    working_dir_path: cdktf.stringToTerraform(struct!.workingDirPath),
    image_pull_credentials: driverSpecConfigContainerImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_config_options: driverSpecConfigContainerKubeConfigOptionsToTerraform(struct!.kubeConfigOptions),
    kube_options: driverSpecConfigContainerKubeOptionsToTerraform(struct!.kubeOptions),
    volume_options: driverSpecConfigContainerVolumeOptionsToTerraform(struct!.volumeOptions),
    volumes: cdktf.listMapper(driverSpecConfigContainerVolumesToTerraform, true)(struct!.volumes),
  }
}


export function driverSpecConfigContainerToHclTerraform(struct?: DriverSpecConfigContainerOutputReference | DriverSpecConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    files: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.files),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.workingDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_credentials: {
      value: driverSpecConfigContainerImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerImagePullCredentialsList",
    },
    kube_config_options: {
      value: driverSpecConfigContainerKubeConfigOptionsToHclTerraform(struct!.kubeConfigOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeConfigOptionsList",
    },
    kube_options: {
      value: driverSpecConfigContainerKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerKubeOptionsList",
    },
    volume_options: {
      value: driverSpecConfigContainerVolumeOptionsToHclTerraform(struct!.volumeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerVolumeOptionsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(driverSpecConfigContainerVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._envVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._workingDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirPath = this._workingDirPath;
    }
    if (this._imagePullCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentials = this._imagePullCredentials?.internalValue;
    }
    if (this._kubeConfigOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfigOptions = this._kubeConfigOptions?.internalValue;
    }
    if (this._kubeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeOptions = this._kubeOptions?.internalValue;
    }
    if (this._volumeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeOptions = this._volumeOptions?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._commands = undefined;
      this._cpuLimitMilli = undefined;
      this._envVars = undefined;
      this._files = undefined;
      this._image = undefined;
      this._memoryLimitMb = undefined;
      this._workingDirPath = undefined;
      this._imagePullCredentials.internalValue = undefined;
      this._kubeConfigOptions.internalValue = undefined;
      this._kubeOptions.internalValue = undefined;
      this._volumeOptions.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._commands = value.commands;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._envVars = value.envVars;
      this._files = value.files;
      this._image = value.image;
      this._memoryLimitMb = value.memoryLimitMb;
      this._workingDirPath = value.workingDirPath;
      this._imagePullCredentials.internalValue = value.imagePullCredentials;
      this._kubeConfigOptions.internalValue = value.kubeConfigOptions;
      this._kubeOptions.internalValue = value.kubeOptions;
      this._volumeOptions.internalValue = value.volumeOptions;
      this._volumes.internalValue = value.volumes;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars?: { [key: string]: string }; 
  public get envVars() {
    return this.getStringMapAttribute('env_vars');
  }
  public set envVars(value: { [key: string]: string }) {
    this._envVars = value;
  }
  public resetEnvVars() {
    this._envVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars;
  }

  // files - computed: false, optional: true, required: false
  private _files?: { [key: string]: string }; 
  public get files() {
    return this.getStringMapAttribute('files');
  }
  public set files(value: { [key: string]: string }) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
  }

  // working_dir_path - computed: false, optional: true, required: false
  private _workingDirPath?: string; 
  public get workingDirPath() {
    return this.getStringAttribute('working_dir_path');
  }
  public set workingDirPath(value: string) {
    this._workingDirPath = value;
  }
  public resetWorkingDirPath() {
    this._workingDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirPathInput() {
    return this._workingDirPath;
  }

  // image_pull_credentials - computed: false, optional: true, required: false
  private _imagePullCredentials = new DriverSpecConfigContainerImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: DriverSpecConfigContainerImagePullCredentials) {
    this._imagePullCredentials.internalValue = value;
  }
  public resetImagePullCredentials() {
    this._imagePullCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsInput() {
    return this._imagePullCredentials.internalValue;
  }

  // kube_config_options - computed: false, optional: true, required: false
  private _kubeConfigOptions = new DriverSpecConfigContainerKubeConfigOptionsOutputReference(this, "kube_config_options");
  public get kubeConfigOptions() {
    return this._kubeConfigOptions;
  }
  public putKubeConfigOptions(value: DriverSpecConfigContainerKubeConfigOptions) {
    this._kubeConfigOptions.internalValue = value;
  }
  public resetKubeConfigOptions() {
    this._kubeConfigOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigOptionsInput() {
    return this._kubeConfigOptions.internalValue;
  }

  // kube_options - computed: false, optional: true, required: false
  private _kubeOptions = new DriverSpecConfigContainerKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: DriverSpecConfigContainerKubeOptions) {
    this._kubeOptions.internalValue = value;
  }
  public resetKubeOptions() {
    this._kubeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeOptionsInput() {
    return this._kubeOptions.internalValue;
  }

  // volume_options - computed: false, optional: true, required: false
  private _volumeOptions = new DriverSpecConfigContainerVolumeOptionsOutputReference(this, "volume_options");
  public get volumeOptions() {
    return this._volumeOptions;
  }
  public putVolumeOptions(value: DriverSpecConfigContainerVolumeOptions) {
    this._volumeOptions.internalValue = value;
  }
  public resetVolumeOptions() {
    this._volumeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeOptionsInput() {
    return this._volumeOptions.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DriverSpecConfigContainerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DriverSpecConfigContainerVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DriverSpecConfigFunctionImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#password Driver#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#registry Driver#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#username Driver#username}
  */
  readonly username?: string;
}

export function driverSpecConfigFunctionImagePullCredentialsToTerraform(struct?: DriverSpecConfigFunctionImagePullCredentialsOutputReference | DriverSpecConfigFunctionImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function driverSpecConfigFunctionImagePullCredentialsToHclTerraform(struct?: DriverSpecConfigFunctionImagePullCredentialsOutputReference | DriverSpecConfigFunctionImagePullCredentials): any {
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
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
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

export class DriverSpecConfigFunctionImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionImagePullCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionImagePullCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._registry = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._registry = value.registry;
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

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
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
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_fields Driver#match_fields}
  */
  readonly matchFields?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#weight Driver#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preference Driver#preference}
  */
  readonly preference?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._preference.internalValue = value.preference;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_fields Driver#match_fields}
  */
  readonly matchFields?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#node_selector_terms Driver#node_selector_terms}
  */
  readonly nodeSelectorTerms?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preferred_during_scheduling_ignored_during_execution Driver#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required_during_scheduling_ignored_during_execution Driver#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#weight Driver#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_affinity_term Driver#pod_affinity_term}
  */
  readonly podAffinityTerm?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preferred_during_scheduling_ignored_during_execution Driver#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required_during_scheduling_ignored_during_execution Driver#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#weight Driver#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_affinity_term Driver#pod_affinity_term}
  */
  readonly podAffinityTerm?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#values Driver#values}
  */
  readonly values?: string[];
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_labels Driver#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#match_expressions Driver#match_expressions}
  */
  readonly matchExpressions?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespaces Driver#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#topology_key Driver#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#label_selector Driver#label_selector}
  */
  readonly labelSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace_selector Driver#namespace_selector}
  */
  readonly namespaceSelector?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#preferred_during_scheduling_ignored_during_execution Driver#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required_during_scheduling_ignored_during_execution Driver#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#node_affinity Driver#node_affinity}
  */
  readonly nodeAffinity?: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_affinity Driver#pod_affinity}
  */
  readonly podAffinity?: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#pod_anti_affinity Driver#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinity;
}

export function driverSpecConfigFunctionKubeOptionsAffinityToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function driverSpecConfigFunctionKubeOptionsAffinityToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsAffinityOutputReference | DriverSpecConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: driverSpecConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: driverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DriverSpecConfigFunctionKubeOptionsAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DriverSpecConfigFunctionKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DriverSpecConfigFunctionKubeOptionsAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | DriverSpecConfigFunctionKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function driverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | DriverSpecConfigFunctionKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsSecurityContextPrivileged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function driverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface DriverSpecConfigFunctionKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#privileged Driver#privileged}
  */
  readonly privileged?: DriverSpecConfigFunctionKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#read_only_root_file_system Driver#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function driverSpecConfigFunctionKubeOptionsSecurityContextToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsSecurityContextOutputReference | DriverSpecConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: driverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: driverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function driverSpecConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsSecurityContextOutputReference | DriverSpecConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: driverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: driverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged?.internalValue;
    }
    if (this._readOnlyRootFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileged.internalValue = undefined;
      this._readOnlyRootFileSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileged.internalValue = value.privileged;
      this._readOnlyRootFileSystem.internalValue = value.readOnlyRootFileSystem;
    }
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged = new DriverSpecConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: DriverSpecConfigFunctionKubeOptionsSecurityContextPrivileged) {
    this._privileged.internalValue = value;
  }
  public resetPrivileged() {
    this._privileged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged.internalValue;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem = new DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: DriverSpecConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem) {
    this._readOnlyRootFileSystem.internalValue = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem.internalValue;
  }
}
export interface DriverSpecConfigFunctionKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#effect Driver#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#operator Driver#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#toleration_seconds Driver#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: string;
}

export function driverSpecConfigFunctionKubeOptionsTolerationsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function driverSpecConfigFunctionKubeOptionsTolerationsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DriverSpecConfigFunctionKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
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
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DriverSpecConfigFunctionKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecConfigFunctionKubeOptionsTolerationsOutputReference {
    return new DriverSpecConfigFunctionKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecConfigFunctionKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#labels Driver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#namespace Driver#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#node_selector Driver#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#resources Driver#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#service_account_name Driver#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#affinity Driver#affinity}
  */
  readonly affinity?: DriverSpecConfigFunctionKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#security_context Driver#security_context}
  */
  readonly securityContext?: DriverSpecConfigFunctionKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#tolerations Driver#tolerations}
  */
  readonly tolerations?: DriverSpecConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function driverSpecConfigFunctionKubeOptionsToTerraform(struct?: DriverSpecConfigFunctionKubeOptionsOutputReference | DriverSpecConfigFunctionKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    affinity: driverSpecConfigFunctionKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: driverSpecConfigFunctionKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(driverSpecConfigFunctionKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function driverSpecConfigFunctionKubeOptionsToHclTerraform(struct?: DriverSpecConfigFunctionKubeOptionsOutputReference | DriverSpecConfigFunctionKubeOptions): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: driverSpecConfigFunctionKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsAffinityList",
    },
    security_context: {
      value: driverSpecConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(driverSpecConfigFunctionKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionKubeOptions | undefined {
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
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionKubeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._nodeSelector = undefined;
      this._resources = undefined;
      this._serviceAccountName = undefined;
      this._affinity.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._nodeSelector = value.nodeSelector;
      this._resources = value.resources;
      this._serviceAccountName = value.serviceAccountName;
      this._affinity.internalValue = value.affinity;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
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

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DriverSpecConfigFunctionKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DriverSpecConfigFunctionKubeOptionsAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DriverSpecConfigFunctionKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DriverSpecConfigFunctionKubeOptionsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DriverSpecConfigFunctionKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DriverSpecConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DriverSpecConfigFunctionSkipBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function driverSpecConfigFunctionSkipBuildToTerraform(struct?: DriverSpecConfigFunctionSkipBuildOutputReference | DriverSpecConfigFunctionSkipBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function driverSpecConfigFunctionSkipBuildToHclTerraform(struct?: DriverSpecConfigFunctionSkipBuildOutputReference | DriverSpecConfigFunctionSkipBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionSkipBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunctionSkipBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunctionSkipBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface DriverSpecConfigFunction {
  /**
  * Configure the CPU Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#cpu_limit_milli Driver#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the function dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#function_dependencies Driver#function_dependencies}
  */
  readonly functionDependencies?: string[];
  /**
  * Image of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#image Driver#image}
  */
  readonly image?: string;
  /**
  * Configure the inactivity timeout in seconds. After this time, the function will be terminated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#inactivity_timeout_seconds Driver#inactivity_timeout_seconds}
  */
  readonly inactivityTimeoutSeconds?: number;
  /**
  * Specify the language of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#language Driver#language}
  */
  readonly language?: string;
  /**
  * Specify the language version for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#language_version Driver#language_version}
  */
  readonly languageVersion?: string;
  /**
  * Specify the maximum number of concurrent requests that can be handled by the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#max_concurrency Driver#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Configure the Memory Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#memory_limit_mb Driver#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the name of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#name Driver#name}
  */
  readonly name?: string;
  /**
  * Specify the number of replicas for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#num_replicas Driver#num_replicas}
  */
  readonly numReplicas?: number;
  /**
  * Specify the source of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#source Driver#source}
  */
  readonly source?: string;
  /**
  * Specify the system packages for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#system_packages Driver#system_packages}
  */
  readonly systemPackages?: string[];
  /**
  * Specify the target platforms for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#target_platforms Driver#target_platforms}
  */
  readonly targetPlatforms?: string[];
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#image_pull_credentials Driver#image_pull_credentials}
  */
  readonly imagePullCredentials?: DriverSpecConfigFunctionImagePullCredentials;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#kube_options Driver#kube_options}
  */
  readonly kubeOptions?: DriverSpecConfigFunctionKubeOptions;
  /**
  * skip_build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#skip_build Driver#skip_build}
  */
  readonly skipBuild?: DriverSpecConfigFunctionSkipBuild;
}

export function driverSpecConfigFunctionToTerraform(struct?: DriverSpecConfigFunctionOutputReference | DriverSpecConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    function_dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionDependencies),
    image: cdktf.stringToTerraform(struct!.image),
    inactivity_timeout_seconds: cdktf.numberToTerraform(struct!.inactivityTimeoutSeconds),
    language: cdktf.stringToTerraform(struct!.language),
    language_version: cdktf.stringToTerraform(struct!.languageVersion),
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    name: cdktf.stringToTerraform(struct!.name),
    num_replicas: cdktf.numberToTerraform(struct!.numReplicas),
    source: cdktf.stringToTerraform(struct!.source),
    system_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemPackages),
    target_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetPlatforms),
    image_pull_credentials: driverSpecConfigFunctionImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_options: driverSpecConfigFunctionKubeOptionsToTerraform(struct!.kubeOptions),
    skip_build: driverSpecConfigFunctionSkipBuildToTerraform(struct!.skipBuild),
  }
}


export function driverSpecConfigFunctionToHclTerraform(struct?: DriverSpecConfigFunctionOutputReference | DriverSpecConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functionDependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.inactivityTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_version: {
      value: cdktf.stringToHclTerraform(struct!.languageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
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
    num_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetPlatforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_pull_credentials: {
      value: driverSpecConfigFunctionImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionImagePullCredentialsList",
    },
    kube_options: {
      value: driverSpecConfigFunctionKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionKubeOptionsList",
    },
    skip_build: {
      value: driverSpecConfigFunctionSkipBuildToHclTerraform(struct!.skipBuild),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionSkipBuildList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._functionDependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionDependencies = this._functionDependencies;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inactivityTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeoutSeconds = this._inactivityTimeoutSeconds;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._languageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageVersion = this._languageVersion;
    }
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numReplicas = this._numReplicas;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._systemPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPackages = this._systemPackages;
    }
    if (this._targetPlatforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPlatforms = this._targetPlatforms;
    }
    if (this._imagePullCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentials = this._imagePullCredentials?.internalValue;
    }
    if (this._kubeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeOptions = this._kubeOptions?.internalValue;
    }
    if (this._skipBuild?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBuild = this._skipBuild?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuLimitMilli = undefined;
      this._functionDependencies = undefined;
      this._image = undefined;
      this._inactivityTimeoutSeconds = undefined;
      this._language = undefined;
      this._languageVersion = undefined;
      this._maxConcurrency = undefined;
      this._memoryLimitMb = undefined;
      this._name = undefined;
      this._numReplicas = undefined;
      this._source = undefined;
      this._systemPackages = undefined;
      this._targetPlatforms = undefined;
      this._imagePullCredentials.internalValue = undefined;
      this._kubeOptions.internalValue = undefined;
      this._skipBuild.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._functionDependencies = value.functionDependencies;
      this._image = value.image;
      this._inactivityTimeoutSeconds = value.inactivityTimeoutSeconds;
      this._language = value.language;
      this._languageVersion = value.languageVersion;
      this._maxConcurrency = value.maxConcurrency;
      this._memoryLimitMb = value.memoryLimitMb;
      this._name = value.name;
      this._numReplicas = value.numReplicas;
      this._source = value.source;
      this._systemPackages = value.systemPackages;
      this._targetPlatforms = value.targetPlatforms;
      this._imagePullCredentials.internalValue = value.imagePullCredentials;
      this._kubeOptions.internalValue = value.kubeOptions;
      this._skipBuild.internalValue = value.skipBuild;
    }
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // function_dependencies - computed: false, optional: true, required: false
  private _functionDependencies?: string[]; 
  public get functionDependencies() {
    return this.getListAttribute('function_dependencies');
  }
  public set functionDependencies(value: string[]) {
    this._functionDependencies = value;
  }
  public resetFunctionDependencies() {
    this._functionDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDependenciesInput() {
    return this._functionDependencies;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inactivity_timeout_seconds - computed: false, optional: true, required: false
  private _inactivityTimeoutSeconds?: number; 
  public get inactivityTimeoutSeconds() {
    return this.getNumberAttribute('inactivity_timeout_seconds');
  }
  public set inactivityTimeoutSeconds(value: number) {
    this._inactivityTimeoutSeconds = value;
  }
  public resetInactivityTimeoutSeconds() {
    this._inactivityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutSecondsInput() {
    return this._inactivityTimeoutSeconds;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // language_version - computed: false, optional: true, required: false
  private _languageVersion?: string; 
  public get languageVersion() {
    return this.getStringAttribute('language_version');
  }
  public set languageVersion(value: string) {
    this._languageVersion = value;
  }
  public resetLanguageVersion() {
    this._languageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageVersionInput() {
    return this._languageVersion;
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
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

  // num_replicas - computed: false, optional: true, required: false
  private _numReplicas?: number; 
  public get numReplicas() {
    return this.getNumberAttribute('num_replicas');
  }
  public set numReplicas(value: number) {
    this._numReplicas = value;
  }
  public resetNumReplicas() {
    this._numReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicasInput() {
    return this._numReplicas;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[]; 
  public get systemPackages() {
    return this.getListAttribute('system_packages');
  }
  public set systemPackages(value: string[]) {
    this._systemPackages = value;
  }
  public resetSystemPackages() {
    this._systemPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPackagesInput() {
    return this._systemPackages;
  }

  // target_platforms - computed: false, optional: true, required: false
  private _targetPlatforms?: string[]; 
  public get targetPlatforms() {
    return this.getListAttribute('target_platforms');
  }
  public set targetPlatforms(value: string[]) {
    this._targetPlatforms = value;
  }
  public resetTargetPlatforms() {
    this._targetPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPlatformsInput() {
    return this._targetPlatforms;
  }

  // image_pull_credentials - computed: false, optional: true, required: false
  private _imagePullCredentials = new DriverSpecConfigFunctionImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: DriverSpecConfigFunctionImagePullCredentials) {
    this._imagePullCredentials.internalValue = value;
  }
  public resetImagePullCredentials() {
    this._imagePullCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsInput() {
    return this._imagePullCredentials.internalValue;
  }

  // kube_options - computed: false, optional: true, required: false
  private _kubeOptions = new DriverSpecConfigFunctionKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: DriverSpecConfigFunctionKubeOptions) {
    this._kubeOptions.internalValue = value;
  }
  public resetKubeOptions() {
    this._kubeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeOptionsInput() {
    return this._kubeOptions.internalValue;
  }

  // skip_build - computed: false, optional: true, required: false
  private _skipBuild = new DriverSpecConfigFunctionSkipBuildOutputReference(this, "skip_build");
  public get skipBuild() {
    return this._skipBuild;
  }
  public putSkipBuild(value: DriverSpecConfigFunctionSkipBuild) {
    this._skipBuild.internalValue = value;
  }
  public resetSkipBuild() {
    this._skipBuild.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBuildInput() {
    return this._skipBuild.internalValue;
  }
}
export interface DriverSpecConfigHttp {
  /**
  * Specify the request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#body Driver#body}
  */
  readonly body?: string;
  /**
  * Provide ca cert for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#ca_cert Driver#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specify the http endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#endpoint Driver#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Specify the http headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#headers Driver#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Provide skip TLS verify for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#insecure Driver#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Specify the http method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#method Driver#method}
  */
  readonly method?: string;
}

export function driverSpecConfigHttpToTerraform(struct?: DriverSpecConfigHttpOutputReference | DriverSpecConfigHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function driverSpecConfigHttpToHclTerraform(struct?: DriverSpecConfigHttpOutputReference | DriverSpecConfigHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._caCert = undefined;
      this._endpoint = undefined;
      this._headers = undefined;
      this._insecure = undefined;
      this._method = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._caCert = value.caCert;
      this._endpoint = value.endpoint;
      this._headers = value.headers;
      this._insecure = value.insecure;
      this._method = value.method;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}
export interface DriverSpecConfigPollingConfig {
  /**
  * Specify the repeat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#repeat Driver#repeat}
  */
  readonly repeat?: string;
  /**
  * Specify the until
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#until Driver#until}
  */
  readonly until?: string;
}

export function driverSpecConfigPollingConfigToTerraform(struct?: DriverSpecConfigPollingConfigOutputReference | DriverSpecConfigPollingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat: cdktf.stringToTerraform(struct!.repeat),
    until: cdktf.stringToTerraform(struct!.until),
  }
}


export function driverSpecConfigPollingConfigToHclTerraform(struct?: DriverSpecConfigPollingConfigOutputReference | DriverSpecConfigPollingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    until: {
      value: cdktf.stringToHclTerraform(struct!.until),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigPollingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfigPollingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._until !== undefined) {
      hasAnyValues = true;
      internalValueResult.until = this._until;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfigPollingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repeat = undefined;
      this._until = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repeat = value.repeat;
      this._until = value.until;
    }
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // until - computed: false, optional: true, required: false
  private _until?: string; 
  public get until() {
    return this.getStringAttribute('until');
  }
  public set until(value: string) {
    this._until = value;
  }
  public resetUntil() {
    this._until = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilInput() {
    return this._until;
  }
}
export interface DriverSpecConfig {
  /**
  * Specify the max retry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#max_retry_count Driver#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * Specify the success condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#success_condition Driver#success_condition}
  */
  readonly successCondition?: string;
  /**
  * Specify the timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#timeout_seconds Driver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Specify the type of driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#type Driver#type}
  */
  readonly type?: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#container Driver#container}
  */
  readonly container?: DriverSpecConfigContainer;
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#function Driver#function}
  */
  readonly function?: DriverSpecConfigFunction;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#http Driver#http}
  */
  readonly http?: DriverSpecConfigHttp;
  /**
  * polling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#polling_config Driver#polling_config}
  */
  readonly pollingConfig?: DriverSpecConfigPollingConfig;
}

export function driverSpecConfigToTerraform(struct?: DriverSpecConfigOutputReference | DriverSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retry_count: cdktf.numberToTerraform(struct!.maxRetryCount),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    container: driverSpecConfigContainerToTerraform(struct!.container),
    function: driverSpecConfigFunctionToTerraform(struct!.function),
    http: driverSpecConfigHttpToTerraform(struct!.http),
    polling_config: driverSpecConfigPollingConfigToTerraform(struct!.pollingConfig),
  }
}


export function driverSpecConfigToHclTerraform(struct?: DriverSpecConfigOutputReference | DriverSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_condition: {
      value: cdktf.stringToHclTerraform(struct!.successCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: driverSpecConfigContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigContainerList",
    },
    function: {
      value: driverSpecConfigFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigFunctionList",
    },
    http: {
      value: driverSpecConfigHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigHttpList",
    },
    polling_config: {
      value: driverSpecConfigPollingConfigToHclTerraform(struct!.pollingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigPollingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryCount = this._maxRetryCount;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._pollingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingConfig = this._pollingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRetryCount = undefined;
      this._successCondition = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
      this._container.internalValue = undefined;
      this._function.internalValue = undefined;
      this._http.internalValue = undefined;
      this._pollingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRetryCount = value.maxRetryCount;
      this._successCondition = value.successCondition;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
      this._container.internalValue = value.container;
      this._function.internalValue = value.function;
      this._http.internalValue = value.http;
      this._pollingConfig.internalValue = value.pollingConfig;
    }
  }

  // max_retry_count - computed: false, optional: true, required: false
  private _maxRetryCount?: number; 
  public get maxRetryCount() {
    return this.getNumberAttribute('max_retry_count');
  }
  public set maxRetryCount(value: number) {
    this._maxRetryCount = value;
  }
  public resetMaxRetryCount() {
    this._maxRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryCountInput() {
    return this._maxRetryCount;
  }

  // success_condition - computed: false, optional: true, required: false
  private _successCondition?: string; 
  public get successCondition() {
    return this.getStringAttribute('success_condition');
  }
  public set successCondition(value: string) {
    this._successCondition = value;
  }
  public resetSuccessCondition() {
    this._successCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionInput() {
    return this._successCondition;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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

  // container - computed: false, optional: true, required: false
  private _container = new DriverSpecConfigContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DriverSpecConfigContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // function - computed: false, optional: true, required: false
  private _function = new DriverSpecConfigFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: DriverSpecConfigFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DriverSpecConfigHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DriverSpecConfigHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // polling_config - computed: false, optional: true, required: false
  private _pollingConfig = new DriverSpecConfigPollingConfigOutputReference(this, "polling_config");
  public get pollingConfig() {
    return this._pollingConfig;
  }
  public putPollingConfig(value: DriverSpecConfigPollingConfig) {
    this._pollingConfig.internalValue = value;
  }
  public resetPollingConfig() {
    this._pollingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingConfigInput() {
    return this._pollingConfig.internalValue;
  }
}
export interface DriverSpecInputsDataEnvsOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#display_overridden Driver#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#restricted_key_values Driver#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#restricted_values Driver#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#selectors Driver#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#type Driver#type}
  */
  readonly type?: string;
}

export function driverSpecInputsDataEnvsOptionsOverrideToTerraform(struct?: DriverSpecInputsDataEnvsOptionsOverrideOutputReference | DriverSpecInputsDataEnvsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_overridden: cdktf.booleanToTerraform(struct!.displayOverridden),
    restricted_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.restrictedKeyValues),
    restricted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedValues),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function driverSpecInputsDataEnvsOptionsOverrideToHclTerraform(struct?: DriverSpecInputsDataEnvsOptionsOverrideOutputReference | DriverSpecInputsDataEnvsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_overridden: {
      value: cdktf.booleanToHclTerraform(struct!.displayOverridden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_key_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.restrictedKeyValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restricted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DriverSpecInputsDataEnvsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataEnvsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayOverridden !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOverridden = this._displayOverridden;
    }
    if (this._restrictedKeyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedKeyValues = this._restrictedKeyValues;
    }
    if (this._restrictedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedValues = this._restrictedValues;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecInputsDataEnvsOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayOverridden = undefined;
      this._restrictedKeyValues = undefined;
      this._restrictedValues = undefined;
      this._selectors = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayOverridden = value.displayOverridden;
      this._restrictedKeyValues = value.restrictedKeyValues;
      this._restrictedValues = value.restrictedValues;
      this._selectors = value.selectors;
      this._type = value.type;
    }
  }

  // display_overridden - computed: false, optional: true, required: false
  private _displayOverridden?: boolean | cdktf.IResolvable; 
  public get displayOverridden() {
    return this.getBooleanAttribute('display_overridden');
  }
  public set displayOverridden(value: boolean | cdktf.IResolvable) {
    this._displayOverridden = value;
  }
  public resetDisplayOverridden() {
    this._displayOverridden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOverriddenInput() {
    return this._displayOverridden;
  }

  // restricted_key_values - computed: false, optional: true, required: false
  private _restrictedKeyValues?: { [key: string]: string }; 
  public get restrictedKeyValues() {
    return this.getStringMapAttribute('restricted_key_values');
  }
  public set restrictedKeyValues(value: { [key: string]: string }) {
    this._restrictedKeyValues = value;
  }
  public resetRestrictedKeyValues() {
    this._restrictedKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedKeyValuesInput() {
    return this._restrictedKeyValues;
  }

  // restricted_values - computed: false, optional: true, required: false
  private _restrictedValues?: string[]; 
  public get restrictedValues() {
    return this.getListAttribute('restricted_values');
  }
  public set restrictedValues(value: string[]) {
    this._restrictedValues = value;
  }
  public resetRestrictedValues() {
    this._restrictedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedValuesInput() {
    return this._restrictedValues;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
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
export interface DriverSpecInputsDataEnvsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#jsonschema Driver#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#uischema Driver#uischema}
  */
  readonly uischema?: string;
}

export function driverSpecInputsDataEnvsOptionsSchemaToTerraform(struct?: DriverSpecInputsDataEnvsOptionsSchemaOutputReference | DriverSpecInputsDataEnvsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function driverSpecInputsDataEnvsOptionsSchemaToHclTerraform(struct?: DriverSpecInputsDataEnvsOptionsSchemaOutputReference | DriverSpecInputsDataEnvsOptionsSchema): any {
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

export class DriverSpecInputsDataEnvsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataEnvsOptionsSchema | undefined {
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

  public set internalValue(value: DriverSpecInputsDataEnvsOptionsSchema | undefined) {
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
export interface DriverSpecInputsDataEnvsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#description Driver#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render environment variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#display_metadata Driver#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the environment variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#immutable Driver#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the variable is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required Driver#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sensitive Driver#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#override Driver#override}
  */
  readonly override?: DriverSpecInputsDataEnvsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#schema Driver#schema}
  */
  readonly schema?: DriverSpecInputsDataEnvsOptionsSchema;
}

export function driverSpecInputsDataEnvsOptionsToTerraform(struct?: DriverSpecInputsDataEnvsOptionsOutputReference | DriverSpecInputsDataEnvsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: driverSpecInputsDataEnvsOptionsOverrideToTerraform(struct!.override),
    schema: driverSpecInputsDataEnvsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function driverSpecInputsDataEnvsOptionsToHclTerraform(struct?: DriverSpecInputsDataEnvsOptionsOutputReference | DriverSpecInputsDataEnvsOptions): any {
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
    immutable: {
      value: cdktf.booleanToHclTerraform(struct!.immutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: driverSpecInputsDataEnvsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataEnvsOptionsOverrideList",
    },
    schema: {
      value: driverSpecInputsDataEnvsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataEnvsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsDataEnvsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataEnvsOptions | undefined {
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
    if (this._immutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutable = this._immutable;
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

  public set internalValue(value: DriverSpecInputsDataEnvsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._immutable = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._immutable = value.immutable;
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

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
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
  private _override = new DriverSpecInputsDataEnvsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DriverSpecInputsDataEnvsOptionsOverride) {
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
  private _schema = new DriverSpecInputsDataEnvsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DriverSpecInputsDataEnvsOptionsSchema) {
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
export interface DriverSpecInputsDataEnvs {
  /**
  * Key of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#key Driver#key}
  */
  readonly key?: string;
  /**
  * Deprecated: use options.sensitive. Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sensitive Driver#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#options Driver#options}
  */
  readonly options?: DriverSpecInputsDataEnvsOptions;
}

export function driverSpecInputsDataEnvsToTerraform(struct?: DriverSpecInputsDataEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
    options: driverSpecInputsDataEnvsOptionsToTerraform(struct!.options),
  }
}


export function driverSpecInputsDataEnvsToHclTerraform(struct?: DriverSpecInputsDataEnvs | cdktf.IResolvable): any {
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: driverSpecInputsDataEnvsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataEnvsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsDataEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecInputsDataEnvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecInputsDataEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._sensitive = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._sensitive = value.sensitive;
      this._value = value.value;
      this._options.internalValue = value.options;
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

  // options - computed: false, optional: true, required: false
  private _options = new DriverSpecInputsDataEnvsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DriverSpecInputsDataEnvsOptions) {
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

export class DriverSpecInputsDataEnvsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecInputsDataEnvs[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecInputsDataEnvsOutputReference {
    return new DriverSpecInputsDataEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecInputsDataFilesOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#type Driver#type}
  */
  readonly type?: string;
}

export function driverSpecInputsDataFilesOptionsOverrideToTerraform(struct?: DriverSpecInputsDataFilesOptionsOverrideOutputReference | DriverSpecInputsDataFilesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function driverSpecInputsDataFilesOptionsOverrideToHclTerraform(struct?: DriverSpecInputsDataFilesOptionsOverrideOutputReference | DriverSpecInputsDataFilesOptionsOverride): any {
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

export class DriverSpecInputsDataFilesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataFilesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecInputsDataFilesOptionsOverride | undefined) {
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
export interface DriverSpecInputsDataFilesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#jsonschema Driver#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#uischema Driver#uischema}
  */
  readonly uischema?: string;
}

export function driverSpecInputsDataFilesOptionsSchemaToTerraform(struct?: DriverSpecInputsDataFilesOptionsSchemaOutputReference | DriverSpecInputsDataFilesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function driverSpecInputsDataFilesOptionsSchemaToHclTerraform(struct?: DriverSpecInputsDataFilesOptionsSchemaOutputReference | DriverSpecInputsDataFilesOptionsSchema): any {
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

export class DriverSpecInputsDataFilesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataFilesOptionsSchema | undefined {
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

  public set internalValue(value: DriverSpecInputsDataFilesOptionsSchema | undefined) {
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
export interface DriverSpecInputsDataFilesOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#description Driver#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#display_metadata Driver#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required Driver#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sensitive Driver#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#override Driver#override}
  */
  readonly override?: DriverSpecInputsDataFilesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#schema Driver#schema}
  */
  readonly schema?: DriverSpecInputsDataFilesOptionsSchema;
}

export function driverSpecInputsDataFilesOptionsToTerraform(struct?: DriverSpecInputsDataFilesOptionsOutputReference | DriverSpecInputsDataFilesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: driverSpecInputsDataFilesOptionsOverrideToTerraform(struct!.override),
    schema: driverSpecInputsDataFilesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function driverSpecInputsDataFilesOptionsToHclTerraform(struct?: DriverSpecInputsDataFilesOptionsOutputReference | DriverSpecInputsDataFilesOptions): any {
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
      value: driverSpecInputsDataFilesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataFilesOptionsOverrideList",
    },
    schema: {
      value: driverSpecInputsDataFilesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataFilesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsDataFilesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataFilesOptions | undefined {
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

  public set internalValue(value: DriverSpecInputsDataFilesOptions | undefined) {
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
  private _override = new DriverSpecInputsDataFilesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DriverSpecInputsDataFilesOptionsOverride) {
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
  private _schema = new DriverSpecInputsDataFilesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DriverSpecInputsDataFilesOptionsSchema) {
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
export interface DriverSpecInputsDataFiles {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#data Driver#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#mount_path Driver#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#name Driver#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sensitive Driver#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#options Driver#options}
  */
  readonly options?: DriverSpecInputsDataFilesOptions;
}

export function driverSpecInputsDataFilesToTerraform(struct?: DriverSpecInputsDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: driverSpecInputsDataFilesOptionsToTerraform(struct!.options),
  }
}


export function driverSpecInputsDataFilesToHclTerraform(struct?: DriverSpecInputsDataFiles | cdktf.IResolvable): any {
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
      value: driverSpecInputsDataFilesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataFilesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsDataFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecInputsDataFiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DriverSpecInputsDataFiles | cdktf.IResolvable | undefined) {
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
  private _options = new DriverSpecInputsDataFilesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DriverSpecInputsDataFilesOptions) {
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

export class DriverSpecInputsDataFilesList extends cdktf.ComplexList {
  public internalValue? : DriverSpecInputsDataFiles[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecInputsDataFilesOutputReference {
    return new DriverSpecInputsDataFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecInputsDataVariablesOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#display_overridden Driver#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#restricted_key_values Driver#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#restricted_values Driver#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#selectors Driver#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#type Driver#type}
  */
  readonly type?: string;
}

export function driverSpecInputsDataVariablesOptionsOverrideToTerraform(struct?: DriverSpecInputsDataVariablesOptionsOverrideOutputReference | DriverSpecInputsDataVariablesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_overridden: cdktf.booleanToTerraform(struct!.displayOverridden),
    restricted_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.restrictedKeyValues),
    restricted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedValues),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function driverSpecInputsDataVariablesOptionsOverrideToHclTerraform(struct?: DriverSpecInputsDataVariablesOptionsOverrideOutputReference | DriverSpecInputsDataVariablesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_overridden: {
      value: cdktf.booleanToHclTerraform(struct!.displayOverridden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_key_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.restrictedKeyValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restricted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DriverSpecInputsDataVariablesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataVariablesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayOverridden !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOverridden = this._displayOverridden;
    }
    if (this._restrictedKeyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedKeyValues = this._restrictedKeyValues;
    }
    if (this._restrictedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedValues = this._restrictedValues;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecInputsDataVariablesOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayOverridden = undefined;
      this._restrictedKeyValues = undefined;
      this._restrictedValues = undefined;
      this._selectors = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayOverridden = value.displayOverridden;
      this._restrictedKeyValues = value.restrictedKeyValues;
      this._restrictedValues = value.restrictedValues;
      this._selectors = value.selectors;
      this._type = value.type;
    }
  }

  // display_overridden - computed: false, optional: true, required: false
  private _displayOverridden?: boolean | cdktf.IResolvable; 
  public get displayOverridden() {
    return this.getBooleanAttribute('display_overridden');
  }
  public set displayOverridden(value: boolean | cdktf.IResolvable) {
    this._displayOverridden = value;
  }
  public resetDisplayOverridden() {
    this._displayOverridden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOverriddenInput() {
    return this._displayOverridden;
  }

  // restricted_key_values - computed: false, optional: true, required: false
  private _restrictedKeyValues?: { [key: string]: string }; 
  public get restrictedKeyValues() {
    return this.getStringMapAttribute('restricted_key_values');
  }
  public set restrictedKeyValues(value: { [key: string]: string }) {
    this._restrictedKeyValues = value;
  }
  public resetRestrictedKeyValues() {
    this._restrictedKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedKeyValuesInput() {
    return this._restrictedKeyValues;
  }

  // restricted_values - computed: false, optional: true, required: false
  private _restrictedValues?: string[]; 
  public get restrictedValues() {
    return this.getListAttribute('restricted_values');
  }
  public set restrictedValues(value: string[]) {
    this._restrictedValues = value;
  }
  public resetRestrictedValues() {
    this._restrictedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedValuesInput() {
    return this._restrictedValues;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
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
export interface DriverSpecInputsDataVariablesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#jsonschema Driver#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#uischema Driver#uischema}
  */
  readonly uischema?: string;
}

export function driverSpecInputsDataVariablesOptionsSchemaToTerraform(struct?: DriverSpecInputsDataVariablesOptionsSchemaOutputReference | DriverSpecInputsDataVariablesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function driverSpecInputsDataVariablesOptionsSchemaToHclTerraform(struct?: DriverSpecInputsDataVariablesOptionsSchemaOutputReference | DriverSpecInputsDataVariablesOptionsSchema): any {
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

export class DriverSpecInputsDataVariablesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataVariablesOptionsSchema | undefined {
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

  public set internalValue(value: DriverSpecInputsDataVariablesOptionsSchema | undefined) {
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
export interface DriverSpecInputsDataVariablesOptions {
  /**
  * Description of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#description Driver#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#display_metadata Driver#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#immutable Driver#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Specify whether this variable is required or optional, by default it is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required Driver#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sensitive Driver#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#override Driver#override}
  */
  readonly override?: DriverSpecInputsDataVariablesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#schema Driver#schema}
  */
  readonly schema?: DriverSpecInputsDataVariablesOptionsSchema;
}

export function driverSpecInputsDataVariablesOptionsToTerraform(struct?: DriverSpecInputsDataVariablesOptionsOutputReference | DriverSpecInputsDataVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: driverSpecInputsDataVariablesOptionsOverrideToTerraform(struct!.override),
    schema: driverSpecInputsDataVariablesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function driverSpecInputsDataVariablesOptionsToHclTerraform(struct?: DriverSpecInputsDataVariablesOptionsOutputReference | DriverSpecInputsDataVariablesOptions): any {
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
    immutable: {
      value: cdktf.booleanToHclTerraform(struct!.immutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: driverSpecInputsDataVariablesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataVariablesOptionsOverrideList",
    },
    schema: {
      value: driverSpecInputsDataVariablesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataVariablesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsDataVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsDataVariablesOptions | undefined {
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
    if (this._immutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutable = this._immutable;
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

  public set internalValue(value: DriverSpecInputsDataVariablesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._immutable = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._immutable = value.immutable;
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

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
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
  private _override = new DriverSpecInputsDataVariablesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DriverSpecInputsDataVariablesOptionsOverride) {
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
  private _schema = new DriverSpecInputsDataVariablesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DriverSpecInputsDataVariablesOptionsSchema) {
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
export interface DriverSpecInputsDataVariables {
  /**
  * Name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#name Driver#name}
  */
  readonly name: string;
  /**
  * Value of the variable in the specified format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value Driver#value}
  */
  readonly value?: string;
  /**
  * Specify the variable value type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#value_type Driver#value_type}
  */
  readonly valueType: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#options Driver#options}
  */
  readonly options?: DriverSpecInputsDataVariablesOptions;
}

export function driverSpecInputsDataVariablesToTerraform(struct?: DriverSpecInputsDataVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    options: driverSpecInputsDataVariablesOptionsToTerraform(struct!.options),
  }
}


export function driverSpecInputsDataVariablesToHclTerraform(struct?: DriverSpecInputsDataVariables | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: driverSpecInputsDataVariablesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsDataVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecInputsDataVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecInputsDataVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueType = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueType = value.valueType;
      this._options.internalValue = value.options;
    }
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

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DriverSpecInputsDataVariablesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DriverSpecInputsDataVariablesOptions) {
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

export class DriverSpecInputsDataVariablesList extends cdktf.ComplexList {
  public internalValue? : DriverSpecInputsDataVariables[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecInputsDataVariablesOutputReference {
    return new DriverSpecInputsDataVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecInputsData {
  /**
  * envs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#envs Driver#envs}
  */
  readonly envs?: DriverSpecInputsDataEnvs[] | cdktf.IResolvable;
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#files Driver#files}
  */
  readonly files?: DriverSpecInputsDataFiles[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#variables Driver#variables}
  */
  readonly variables?: DriverSpecInputsDataVariables[] | cdktf.IResolvable;
}

export function driverSpecInputsDataToTerraform(struct?: DriverSpecInputsDataOutputReference | DriverSpecInputsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envs: cdktf.listMapper(driverSpecInputsDataEnvsToTerraform, true)(struct!.envs),
    files: cdktf.listMapper(driverSpecInputsDataFilesToTerraform, true)(struct!.files),
    variables: cdktf.listMapper(driverSpecInputsDataVariablesToTerraform, true)(struct!.variables),
  }
}


export function driverSpecInputsDataToHclTerraform(struct?: DriverSpecInputsDataOutputReference | DriverSpecInputsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envs: {
      value: cdktf.listMapperHcl(driverSpecInputsDataEnvsToHclTerraform, true)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataEnvsList",
    },
    files: {
      value: cdktf.listMapperHcl(driverSpecInputsDataFilesToHclTerraform, true)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataFilesList",
    },
    variables: {
      value: cdktf.listMapperHcl(driverSpecInputsDataVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecInputsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecInputsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._envs.internalValue = undefined;
      this._files.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._envs.internalValue = value.envs;
      this._files.internalValue = value.files;
      this._variables.internalValue = value.variables;
    }
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new DriverSpecInputsDataEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: DriverSpecInputsDataEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // files - computed: false, optional: true, required: false
  private _files = new DriverSpecInputsDataFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: DriverSpecInputsDataFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DriverSpecInputsDataVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DriverSpecInputsDataVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface DriverSpecInputs {
  /**
  * Name of the config context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#name Driver#name}
  */
  readonly name?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#data Driver#data}
  */
  readonly data?: DriverSpecInputsData;
}

export function driverSpecInputsToTerraform(struct?: DriverSpecInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    data: driverSpecInputsDataToTerraform(struct!.data),
  }
}


export function driverSpecInputsToHclTerraform(struct?: DriverSpecInputs | cdktf.IResolvable): any {
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
    data: {
      value: driverSpecInputsDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._data.internalValue = value.data;
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

  // data - computed: false, optional: true, required: false
  private _data = new DriverSpecInputsDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DriverSpecInputsData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}

export class DriverSpecInputsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecInputs[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecInputsOutputReference {
    return new DriverSpecInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecSecretOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#type Driver#type}
  */
  readonly type?: string;
}

export function driverSpecSecretOptionsOverrideToTerraform(struct?: DriverSpecSecretOptionsOverrideOutputReference | DriverSpecSecretOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function driverSpecSecretOptionsOverrideToHclTerraform(struct?: DriverSpecSecretOptionsOverrideOutputReference | DriverSpecSecretOptionsOverride): any {
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

export class DriverSpecSecretOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecSecretOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpecSecretOptionsOverride | undefined) {
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
export interface DriverSpecSecretOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#jsonschema Driver#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#uischema Driver#uischema}
  */
  readonly uischema?: string;
}

export function driverSpecSecretOptionsSchemaToTerraform(struct?: DriverSpecSecretOptionsSchemaOutputReference | DriverSpecSecretOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function driverSpecSecretOptionsSchemaToHclTerraform(struct?: DriverSpecSecretOptionsSchemaOutputReference | DriverSpecSecretOptionsSchema): any {
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

export class DriverSpecSecretOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecSecretOptionsSchema | undefined {
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

  public set internalValue(value: DriverSpecSecretOptionsSchema | undefined) {
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
export interface DriverSpecSecretOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#description Driver#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#display_metadata Driver#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#required Driver#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sensitive Driver#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#override Driver#override}
  */
  readonly override?: DriverSpecSecretOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#schema Driver#schema}
  */
  readonly schema?: DriverSpecSecretOptionsSchema;
}

export function driverSpecSecretOptionsToTerraform(struct?: DriverSpecSecretOptionsOutputReference | DriverSpecSecretOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: driverSpecSecretOptionsOverrideToTerraform(struct!.override),
    schema: driverSpecSecretOptionsSchemaToTerraform(struct!.schema),
  }
}


export function driverSpecSecretOptionsToHclTerraform(struct?: DriverSpecSecretOptionsOutputReference | DriverSpecSecretOptions): any {
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
      value: driverSpecSecretOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecSecretOptionsOverrideList",
    },
    schema: {
      value: driverSpecSecretOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecSecretOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecSecretOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecSecretOptions | undefined {
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

  public set internalValue(value: DriverSpecSecretOptions | undefined) {
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
  private _override = new DriverSpecSecretOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DriverSpecSecretOptionsOverride) {
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
  private _schema = new DriverSpecSecretOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DriverSpecSecretOptionsSchema) {
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
export interface DriverSpecSecret {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#data Driver#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#mount_path Driver#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#name Driver#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sensitive Driver#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#options Driver#options}
  */
  readonly options?: DriverSpecSecretOptions;
}

export function driverSpecSecretToTerraform(struct?: DriverSpecSecretOutputReference | DriverSpecSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: driverSpecSecretOptionsToTerraform(struct!.options),
  }
}


export function driverSpecSecretToHclTerraform(struct?: DriverSpecSecretOutputReference | DriverSpecSecret): any {
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
      value: driverSpecSecretOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecSecretOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecSecret | undefined {
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

  public set internalValue(value: DriverSpecSecret | undefined) {
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
  private _options = new DriverSpecSecretOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DriverSpecSecretOptions) {
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
export interface DriverSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#name Driver#name}
  */
  readonly name?: string;
}

export function driverSpecSharingProjectsToTerraform(struct?: DriverSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function driverSpecSharingProjectsToHclTerraform(struct?: DriverSpecSharingProjects | cdktf.IResolvable): any {
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

export class DriverSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriverSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DriverSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class DriverSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : DriverSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): DriverSpecSharingProjectsOutputReference {
    return new DriverSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriverSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#enabled Driver#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#projects Driver#projects}
  */
  readonly projects?: DriverSpecSharingProjects[] | cdktf.IResolvable;
}

export function driverSpecSharingToTerraform(struct?: DriverSpecSharingOutputReference | DriverSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(driverSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function driverSpecSharingToHclTerraform(struct?: DriverSpecSharingOutputReference | DriverSpecSharing): any {
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
      value: cdktf.listMapperHcl(driverSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "DriverSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpecSharing | undefined {
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

  public set internalValue(value: DriverSpecSharing | undefined) {
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
  private _projects = new DriverSpecSharingProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: DriverSpecSharingProjects[] | cdktf.IResolvable) {
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
export interface DriverSpec {
  /**
  * URL of the icon to be used for the driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#icon_url Driver#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Specify the output data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#outputs Driver#outputs}
  */
  readonly outputs?: string;
  /**
  * Readme for using the driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#readme Driver#readme}
  */
  readonly readme?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#config Driver#config}
  */
  readonly config?: DriverSpecConfig;
  /**
  * inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#inputs Driver#inputs}
  */
  readonly inputs?: DriverSpecInputs[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#secret Driver#secret}
  */
  readonly secret?: DriverSpecSecret;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#sharing Driver#sharing}
  */
  readonly sharing?: DriverSpecSharing;
}

export function driverSpecToTerraform(struct?: DriverSpecOutputReference | DriverSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon_url: cdktf.stringToTerraform(struct!.iconUrl),
    outputs: cdktf.stringToTerraform(struct!.outputs),
    readme: cdktf.stringToTerraform(struct!.readme),
    config: driverSpecConfigToTerraform(struct!.config),
    inputs: cdktf.listMapper(driverSpecInputsToTerraform, true)(struct!.inputs),
    secret: driverSpecSecretToTerraform(struct!.secret),
    sharing: driverSpecSharingToTerraform(struct!.sharing),
  }
}


export function driverSpecToHclTerraform(struct?: DriverSpecOutputReference | DriverSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon_url: {
      value: cdktf.stringToHclTerraform(struct!.iconUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: cdktf.stringToHclTerraform(struct!.outputs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readme: {
      value: cdktf.stringToHclTerraform(struct!.readme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: driverSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecConfigList",
    },
    inputs: {
      value: cdktf.listMapperHcl(driverSpecInputsToHclTerraform, true)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecInputsList",
    },
    secret: {
      value: driverSpecSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecSecretList",
    },
    sharing: {
      value: driverSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "DriverSpecSharingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriverSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DriverSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iconUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUrl = this._iconUrl;
    }
    if (this._outputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs;
    }
    if (this._readme !== undefined) {
      hasAnyValues = true;
      internalValueResult.readme = this._readme;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriverSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iconUrl = undefined;
      this._outputs = undefined;
      this._readme = undefined;
      this._config.internalValue = undefined;
      this._inputs.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._sharing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iconUrl = value.iconUrl;
      this._outputs = value.outputs;
      this._readme = value.readme;
      this._config.internalValue = value.config;
      this._inputs.internalValue = value.inputs;
      this._secret.internalValue = value.secret;
      this._sharing.internalValue = value.sharing;
    }
  }

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: string; 
  public get outputs() {
    return this.getStringAttribute('outputs');
  }
  public set outputs(value: string) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs;
  }

  // readme - computed: false, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DriverSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DriverSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new DriverSpecInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: DriverSpecInputs[] | cdktf.IResolvable) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DriverSpecSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DriverSpecSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new DriverSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: DriverSpecSharing) {
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
export interface DriverTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#create Driver#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#delete Driver#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#update Driver#update}
  */
  readonly update?: string;
}

export function driverTimeoutsToTerraform(struct?: DriverTimeouts | cdktf.IResolvable): any {
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


export function driverTimeoutsToHclTerraform(struct?: DriverTimeouts | cdktf.IResolvable): any {
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

export class DriverTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DriverTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DriverTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver rafay_driver}
*/
export class Driver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_driver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Driver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Driver to import
  * @param importFromId The id of the existing Driver that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Driver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_driver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/driver rafay_driver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DriverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DriverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_driver',
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
  private _metadata = new DriverMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DriverMetadata) {
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
  private _spec = new DriverSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DriverSpec) {
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
  private _timeouts = new DriverTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DriverTimeouts) {
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
      metadata: driverMetadataToTerraform(this._metadata.internalValue),
      spec: driverSpecToTerraform(this._spec.internalValue),
      timeouts: driverTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: driverMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DriverMetadataList",
      },
      spec: {
        value: driverSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DriverSpecList",
      },
      timeouts: {
        value: driverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DriverTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
