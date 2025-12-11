// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetplanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#id Fleetplan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#metadata Fleetplan#metadata}
  */
  readonly metadata?: FleetplanMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#spec Fleetplan#spec}
  */
  readonly spec?: FleetplanSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#timeouts Fleetplan#timeouts}
  */
  readonly timeouts?: FleetplanTimeouts;
}
export interface FleetplanMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#id Fleetplan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#is_sso_user Fleetplan#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#username Fleetplan#username}
  */
  readonly username?: string;
}

export function fleetplanMetadataCreatedByToTerraform(struct?: FleetplanMetadataCreatedByOutputReference | FleetplanMetadataCreatedBy): any {
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


export function fleetplanMetadataCreatedByToHclTerraform(struct?: FleetplanMetadataCreatedByOutputReference | FleetplanMetadataCreatedBy): any {
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

export class FleetplanMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanMetadataCreatedBy | undefined {
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

  public set internalValue(value: FleetplanMetadataCreatedBy | undefined) {
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
export interface FleetplanMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#id Fleetplan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#is_sso_user Fleetplan#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#username Fleetplan#username}
  */
  readonly username?: string;
}

export function fleetplanMetadataModifiedByToTerraform(struct?: FleetplanMetadataModifiedByOutputReference | FleetplanMetadataModifiedBy): any {
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


export function fleetplanMetadataModifiedByToHclTerraform(struct?: FleetplanMetadataModifiedByOutputReference | FleetplanMetadataModifiedBy): any {
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

export class FleetplanMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanMetadataModifiedBy | undefined {
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

  public set internalValue(value: FleetplanMetadataModifiedBy | undefined) {
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
export interface FleetplanMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#annotations Fleetplan#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#description Fleetplan#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#display_name Fleetplan#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#labels Fleetplan#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#project Fleetplan#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#created_by Fleetplan#created_by}
  */
  readonly createdBy?: FleetplanMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#modified_by Fleetplan#modified_by}
  */
  readonly modifiedBy?: FleetplanMetadataModifiedBy;
}

export function fleetplanMetadataToTerraform(struct?: FleetplanMetadataOutputReference | FleetplanMetadata): any {
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
    created_by: fleetplanMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: fleetplanMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function fleetplanMetadataToHclTerraform(struct?: FleetplanMetadataOutputReference | FleetplanMetadata): any {
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
      value: fleetplanMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanMetadataCreatedByList",
    },
    modified_by: {
      value: fleetplanMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanMetadata | undefined {
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

  public set internalValue(value: FleetplanMetadata | undefined) {
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
  private _createdBy = new FleetplanMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: FleetplanMetadataCreatedBy) {
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
  private _modifiedBy = new FleetplanMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: FleetplanMetadataModifiedBy) {
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
export interface FleetplanSpecAgents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
}

export function fleetplanSpecAgentsToTerraform(struct?: FleetplanSpecAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetplanSpecAgentsToHclTerraform(struct?: FleetplanSpecAgents | cdktf.IResolvable): any {
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

export class FleetplanSpecAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecAgents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetplanSpecAgents | cdktf.IResolvable | undefined) {
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

export class FleetplanSpecAgentsList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecAgents[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecAgentsOutputReference {
    return new FleetplanSpecAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecFleetProjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
}

export function fleetplanSpecFleetProjectsToTerraform(struct?: FleetplanSpecFleetProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetplanSpecFleetProjectsToHclTerraform(struct?: FleetplanSpecFleetProjects | cdktf.IResolvable): any {
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

export class FleetplanSpecFleetProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecFleetProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetplanSpecFleetProjects | cdktf.IResolvable | undefined) {
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

export class FleetplanSpecFleetProjectsList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecFleetProjects[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecFleetProjectsOutputReference {
    return new FleetplanSpecFleetProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecFleet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#kind Fleetplan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#labels Fleetplan#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#projects Fleetplan#projects}
  */
  readonly projects?: FleetplanSpecFleetProjects[] | cdktf.IResolvable;
}

export function fleetplanSpecFleetToTerraform(struct?: FleetplanSpecFleetOutputReference | FleetplanSpecFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    projects: cdktf.listMapper(fleetplanSpecFleetProjectsToTerraform, true)(struct!.projects),
  }
}


export function fleetplanSpecFleetToHclTerraform(struct?: FleetplanSpecFleetOutputReference | FleetplanSpecFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    projects: {
      value: cdktf.listMapperHcl(fleetplanSpecFleetProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecFleetProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._labels = undefined;
      this._projects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._labels = value.labels;
      this._projects.internalValue = value.projects;
    }
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

  // projects - computed: false, optional: true, required: false
  private _projects = new FleetplanSpecFleetProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: FleetplanSpecFleetProjects[] | cdktf.IResolvable) {
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
export interface FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#version Fleetplan#version}
  */
  readonly version?: string;
}

export function fleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfig): any {
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

export class FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfig | undefined {
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

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfig | undefined) {
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
export interface FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#version Fleetplan#version}
  */
  readonly version?: string;
}

export function fleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfig): any {
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

export class FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfig | undefined) {
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
export interface FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#version Fleetplan#version}
  */
  readonly version?: string;
}

export function fleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfig): any {
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

export class FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfig | undefined) {
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
export interface FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#names Fleetplan#names}
  */
  readonly names?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#version Fleetplan#version}
  */
  readonly version?: string;
}

export function fleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigOutputReference | FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._names = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._names = value.names;
      this._version = value.version;
    }
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
export interface FleetplanSpecOperationWorkflowOperationsActionPatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#op Fleetplan#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#path Fleetplan#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#value Fleetplan#value}
  */
  readonly value?: string;
}

export function fleetplanSpecOperationWorkflowOperationsActionPatchConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionPatchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fleetplanSpecOperationWorkflowOperationsActionPatchConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionPatchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class FleetplanSpecOperationWorkflowOperationsActionPatchConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsActionPatchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsActionPatchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class FleetplanSpecOperationWorkflowOperationsActionPatchConfigList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecOperationWorkflowOperationsActionPatchConfig[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecOperationWorkflowOperationsActionPatchConfigOutputReference {
    return new FleetplanSpecOperationWorkflowOperationsActionPatchConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecOperationWorkflowOperationsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#continue_on_failure Fleetplan#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#description Fleetplan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#type Fleetplan#type}
  */
  readonly type?: string;
  /**
  * blueprint_update_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#blueprint_update_config Fleetplan#blueprint_update_config}
  */
  readonly blueprintUpdateConfig?: FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfig;
  /**
  * control_plane_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#control_plane_upgrade_config Fleetplan#control_plane_upgrade_config}
  */
  readonly controlPlaneUpgradeConfig?: FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfig;
  /**
  * node_groups_and_control_plane_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#node_groups_and_control_plane_upgrade_config Fleetplan#node_groups_and_control_plane_upgrade_config}
  */
  readonly nodeGroupsAndControlPlaneUpgradeConfig?: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfig;
  /**
  * node_groups_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#node_groups_upgrade_config Fleetplan#node_groups_upgrade_config}
  */
  readonly nodeGroupsUpgradeConfig?: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfig;
  /**
  * patch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#patch_config Fleetplan#patch_config}
  */
  readonly patchConfig?: FleetplanSpecOperationWorkflowOperationsActionPatchConfig[] | cdktf.IResolvable;
}

export function fleetplanSpecOperationWorkflowOperationsActionToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionOutputReference | FleetplanSpecOperationWorkflowOperationsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    blueprint_update_config: fleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigToTerraform(struct!.blueprintUpdateConfig),
    control_plane_upgrade_config: fleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigToTerraform(struct!.controlPlaneUpgradeConfig),
    node_groups_and_control_plane_upgrade_config: fleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigToTerraform(struct!.nodeGroupsAndControlPlaneUpgradeConfig),
    node_groups_upgrade_config: fleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigToTerraform(struct!.nodeGroupsUpgradeConfig),
    patch_config: cdktf.listMapper(fleetplanSpecOperationWorkflowOperationsActionPatchConfigToTerraform, true)(struct!.patchConfig),
  }
}


export function fleetplanSpecOperationWorkflowOperationsActionToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsActionOutputReference | FleetplanSpecOperationWorkflowOperationsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.continueOnFailure),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    blueprint_update_config: {
      value: fleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigToHclTerraform(struct!.blueprintUpdateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigList",
    },
    control_plane_upgrade_config: {
      value: fleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigToHclTerraform(struct!.controlPlaneUpgradeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigList",
    },
    node_groups_and_control_plane_upgrade_config: {
      value: fleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigToHclTerraform(struct!.nodeGroupsAndControlPlaneUpgradeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigList",
    },
    node_groups_upgrade_config: {
      value: fleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigToHclTerraform(struct!.nodeGroupsUpgradeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigList",
    },
    patch_config: {
      value: cdktf.listMapperHcl(fleetplanSpecOperationWorkflowOperationsActionPatchConfigToHclTerraform, true)(struct!.patchConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsActionPatchConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._blueprintUpdateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintUpdateConfig = this._blueprintUpdateConfig?.internalValue;
    }
    if (this._controlPlaneUpgradeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneUpgradeConfig = this._controlPlaneUpgradeConfig?.internalValue;
    }
    if (this._nodeGroupsAndControlPlaneUpgradeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupsAndControlPlaneUpgradeConfig = this._nodeGroupsAndControlPlaneUpgradeConfig?.internalValue;
    }
    if (this._nodeGroupsUpgradeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupsUpgradeConfig = this._nodeGroupsUpgradeConfig?.internalValue;
    }
    if (this._patchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchConfig = this._patchConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueOnFailure = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
      this._blueprintUpdateConfig.internalValue = undefined;
      this._controlPlaneUpgradeConfig.internalValue = undefined;
      this._nodeGroupsAndControlPlaneUpgradeConfig.internalValue = undefined;
      this._nodeGroupsUpgradeConfig.internalValue = undefined;
      this._patchConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueOnFailure = value.continueOnFailure;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
      this._blueprintUpdateConfig.internalValue = value.blueprintUpdateConfig;
      this._controlPlaneUpgradeConfig.internalValue = value.controlPlaneUpgradeConfig;
      this._nodeGroupsAndControlPlaneUpgradeConfig.internalValue = value.nodeGroupsAndControlPlaneUpgradeConfig;
      this._nodeGroupsUpgradeConfig.internalValue = value.nodeGroupsUpgradeConfig;
      this._patchConfig.internalValue = value.patchConfig;
    }
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure');
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure;
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

  // blueprint_update_config - computed: false, optional: true, required: false
  private _blueprintUpdateConfig = new FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfigOutputReference(this, "blueprint_update_config");
  public get blueprintUpdateConfig() {
    return this._blueprintUpdateConfig;
  }
  public putBlueprintUpdateConfig(value: FleetplanSpecOperationWorkflowOperationsActionBlueprintUpdateConfig) {
    this._blueprintUpdateConfig.internalValue = value;
  }
  public resetBlueprintUpdateConfig() {
    this._blueprintUpdateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintUpdateConfigInput() {
    return this._blueprintUpdateConfig.internalValue;
  }

  // control_plane_upgrade_config - computed: false, optional: true, required: false
  private _controlPlaneUpgradeConfig = new FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfigOutputReference(this, "control_plane_upgrade_config");
  public get controlPlaneUpgradeConfig() {
    return this._controlPlaneUpgradeConfig;
  }
  public putControlPlaneUpgradeConfig(value: FleetplanSpecOperationWorkflowOperationsActionControlPlaneUpgradeConfig) {
    this._controlPlaneUpgradeConfig.internalValue = value;
  }
  public resetControlPlaneUpgradeConfig() {
    this._controlPlaneUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneUpgradeConfigInput() {
    return this._controlPlaneUpgradeConfig.internalValue;
  }

  // node_groups_and_control_plane_upgrade_config - computed: false, optional: true, required: false
  private _nodeGroupsAndControlPlaneUpgradeConfig = new FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfigOutputReference(this, "node_groups_and_control_plane_upgrade_config");
  public get nodeGroupsAndControlPlaneUpgradeConfig() {
    return this._nodeGroupsAndControlPlaneUpgradeConfig;
  }
  public putNodeGroupsAndControlPlaneUpgradeConfig(value: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsAndControlPlaneUpgradeConfig) {
    this._nodeGroupsAndControlPlaneUpgradeConfig.internalValue = value;
  }
  public resetNodeGroupsAndControlPlaneUpgradeConfig() {
    this._nodeGroupsAndControlPlaneUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsAndControlPlaneUpgradeConfigInput() {
    return this._nodeGroupsAndControlPlaneUpgradeConfig.internalValue;
  }

  // node_groups_upgrade_config - computed: false, optional: true, required: false
  private _nodeGroupsUpgradeConfig = new FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfigOutputReference(this, "node_groups_upgrade_config");
  public get nodeGroupsUpgradeConfig() {
    return this._nodeGroupsUpgradeConfig;
  }
  public putNodeGroupsUpgradeConfig(value: FleetplanSpecOperationWorkflowOperationsActionNodeGroupsUpgradeConfig) {
    this._nodeGroupsUpgradeConfig.internalValue = value;
  }
  public resetNodeGroupsUpgradeConfig() {
    this._nodeGroupsUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsUpgradeConfigInput() {
    return this._nodeGroupsUpgradeConfig.internalValue;
  }

  // patch_config - computed: false, optional: true, required: false
  private _patchConfig = new FleetplanSpecOperationWorkflowOperationsActionPatchConfigList(this, "patch_config", false);
  public get patchConfig() {
    return this._patchConfig;
  }
  public putPatchConfig(value: FleetplanSpecOperationWorkflowOperationsActionPatchConfig[] | cdktf.IResolvable) {
    this._patchConfig.internalValue = value;
  }
  public resetPatchConfig() {
    this._patchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchConfigInput() {
    return this._patchConfig.internalValue;
  }
}
export interface FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#effect Fleetplan#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#key Fleetplan#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#operator Fleetplan#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#toleration_seconds Fleetplan#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#value Fleetplan#value}
  */
  readonly value?: string;
}

export function fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations | cdktf.IResolvable): any {
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


export function fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations | cdktf.IResolvable): any {
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

export class FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations | cdktf.IResolvable | undefined) {
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

export class FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsOutputReference {
    return new FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#node_selector Fleetplan#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#type Fleetplan#type}
  */
  readonly type?: string;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#tolerations Fleetplan#tolerations}
  */
  readonly tolerations?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations[] | cdktf.IResolvable;
}

export function fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerOutputReference | FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    type: cdktf.stringToTerraform(struct!.type),
    tolerations: cdktf.listMapper(fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerOutputReference | FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._type = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._type = value.type;
      this._tolerations.internalValue = value.tolerations;
    }
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerTolerations[] | cdktf.IResolvable) {
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
export interface FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#arguments Fleetplan#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#commands Fleetplan#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#cpu_limit_milli Fleetplan#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#env Fleetplan#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#image Fleetplan#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#memory_limit_mb Fleetplan#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#working_dir_path Fleetplan#working_dir_path}
  */
  readonly workingDirPath?: string;
  /**
  * runner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#runner Fleetplan#runner}
  */
  readonly runner?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunner;
}

export function fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    working_dir_path: cdktf.stringToTerraform(struct!.workingDirPath),
    runner: fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerToTerraform(struct!.runner),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfig): any {
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
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
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
    runner: {
      value: fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerToHclTerraform(struct!.runner),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfig | undefined {
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
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
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
    if (this._runner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runner = this._runner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._commands = undefined;
      this._cpuLimitMilli = undefined;
      this._env = undefined;
      this._image = undefined;
      this._memoryLimitMb = undefined;
      this._workingDirPath = undefined;
      this._runner.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._commands = value.commands;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._env = value.env;
      this._image = value.image;
      this._memoryLimitMb = value.memoryLimitMb;
      this._workingDirPath = value.workingDirPath;
      this._runner.internalValue = value.runner;
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // runner - computed: false, optional: true, required: false
  private _runner = new FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunnerOutputReference(this, "runner");
  public get runner() {
    return this._runner;
  }
  public putRunner(value: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigRunner) {
    this._runner.internalValue = value;
  }
  public resetRunner() {
    this._runner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerInput() {
    return this._runner.internalValue;
  }
}
export interface FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#body Fleetplan#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#endpoint Fleetplan#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#headers Fleetplan#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#method Fleetplan#method}
  */
  readonly method?: string;
}

export function fleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfig): any {
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

export class FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._endpoint = undefined;
      this._headers = undefined;
      this._method = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._endpoint = value.endpoint;
      this._headers = value.headers;
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
export interface FleetplanSpecOperationWorkflowOperationsPosthooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#continue_on_failure Fleetplan#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#description Fleetplan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#inject Fleetplan#inject}
  */
  readonly inject?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#success_condition Fleetplan#success_condition}
  */
  readonly successCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#timeout_seconds Fleetplan#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#container_config Fleetplan#container_config}
  */
  readonly containerConfig?: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfig;
  /**
  * http_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#http_config Fleetplan#http_config}
  */
  readonly httpConfig?: FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfig;
}

export function fleetplanSpecOperationWorkflowOperationsPosthooksToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    description: cdktf.stringToTerraform(struct!.description),
    inject: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inject),
    name: cdktf.stringToTerraform(struct!.name),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    container_config: fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigToTerraform(struct!.containerConfig),
    http_config: fleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigToTerraform(struct!.httpConfig),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPosthooksToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPosthooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.continueOnFailure),
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
    inject: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inject),
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
    container_config: {
      value: fleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigList",
    },
    http_config: {
      value: fleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsPosthooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPosthooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inject !== undefined) {
      hasAnyValues = true;
      internalValueResult.inject = this._inject;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPosthooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continueOnFailure = undefined;
      this._description = undefined;
      this._inject = undefined;
      this._name = undefined;
      this._successCondition = undefined;
      this._timeoutSeconds = undefined;
      this._containerConfig.internalValue = undefined;
      this._httpConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continueOnFailure = value.continueOnFailure;
      this._description = value.description;
      this._inject = value.inject;
      this._name = value.name;
      this._successCondition = value.successCondition;
      this._timeoutSeconds = value.timeoutSeconds;
      this._containerConfig.internalValue = value.containerConfig;
      this._httpConfig.internalValue = value.httpConfig;
    }
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure');
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure;
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

  // inject - computed: false, optional: true, required: false
  private _inject?: string[]; 
  public get inject() {
    return this.getListAttribute('inject');
  }
  public set inject(value: string[]) {
    this._inject = value;
  }
  public resetInject() {
    this._inject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectInput() {
    return this._inject;
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

  // container_config - computed: false, optional: true, required: false
  private _containerConfig = new FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: FleetplanSpecOperationWorkflowOperationsPosthooksContainerConfig) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: FleetplanSpecOperationWorkflowOperationsPosthooksHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }
}

export class FleetplanSpecOperationWorkflowOperationsPosthooksList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecOperationWorkflowOperationsPosthooks[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecOperationWorkflowOperationsPosthooksOutputReference {
    return new FleetplanSpecOperationWorkflowOperationsPosthooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#effect Fleetplan#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#key Fleetplan#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#operator Fleetplan#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#toleration_seconds Fleetplan#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#value Fleetplan#value}
  */
  readonly value?: string;
}

export function fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations | cdktf.IResolvable): any {
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


export function fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations | cdktf.IResolvable): any {
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

export class FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations | cdktf.IResolvable | undefined) {
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

export class FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsOutputReference {
    return new FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#node_selector Fleetplan#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#type Fleetplan#type}
  */
  readonly type?: string;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#tolerations Fleetplan#tolerations}
  */
  readonly tolerations?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations[] | cdktf.IResolvable;
}

export function fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerOutputReference | FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    type: cdktf.stringToTerraform(struct!.type),
    tolerations: cdktf.listMapper(fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerOutputReference | FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._type = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._type = value.type;
      this._tolerations.internalValue = value.tolerations;
    }
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerTolerations[] | cdktf.IResolvable) {
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
export interface FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#arguments Fleetplan#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#commands Fleetplan#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#cpu_limit_milli Fleetplan#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#env Fleetplan#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#image Fleetplan#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#memory_limit_mb Fleetplan#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#working_dir_path Fleetplan#working_dir_path}
  */
  readonly workingDirPath?: string;
  /**
  * runner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#runner Fleetplan#runner}
  */
  readonly runner?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunner;
}

export function fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    working_dir_path: cdktf.stringToTerraform(struct!.workingDirPath),
    runner: fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerToTerraform(struct!.runner),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfig): any {
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
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
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
    runner: {
      value: fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerToHclTerraform(struct!.runner),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfig | undefined {
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
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
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
    if (this._runner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runner = this._runner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._commands = undefined;
      this._cpuLimitMilli = undefined;
      this._env = undefined;
      this._image = undefined;
      this._memoryLimitMb = undefined;
      this._workingDirPath = undefined;
      this._runner.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._commands = value.commands;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._env = value.env;
      this._image = value.image;
      this._memoryLimitMb = value.memoryLimitMb;
      this._workingDirPath = value.workingDirPath;
      this._runner.internalValue = value.runner;
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // runner - computed: false, optional: true, required: false
  private _runner = new FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunnerOutputReference(this, "runner");
  public get runner() {
    return this._runner;
  }
  public putRunner(value: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigRunner) {
    this._runner.internalValue = value;
  }
  public resetRunner() {
    this._runner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerInput() {
    return this._runner.internalValue;
  }
}
export interface FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#body Fleetplan#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#endpoint Fleetplan#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#headers Fleetplan#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#method Fleetplan#method}
  */
  readonly method?: string;
}

export function fleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigOutputReference | FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfig): any {
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

export class FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._endpoint = undefined;
      this._headers = undefined;
      this._method = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._endpoint = value.endpoint;
      this._headers = value.headers;
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
export interface FleetplanSpecOperationWorkflowOperationsPrehooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#continue_on_failure Fleetplan#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#description Fleetplan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#inject Fleetplan#inject}
  */
  readonly inject?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#success_condition Fleetplan#success_condition}
  */
  readonly successCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#timeout_seconds Fleetplan#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#container_config Fleetplan#container_config}
  */
  readonly containerConfig?: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfig;
  /**
  * http_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#http_config Fleetplan#http_config}
  */
  readonly httpConfig?: FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfig;
}

export function fleetplanSpecOperationWorkflowOperationsPrehooksToTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    description: cdktf.stringToTerraform(struct!.description),
    inject: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inject),
    name: cdktf.stringToTerraform(struct!.name),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    container_config: fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigToTerraform(struct!.containerConfig),
    http_config: fleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigToTerraform(struct!.httpConfig),
  }
}


export function fleetplanSpecOperationWorkflowOperationsPrehooksToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperationsPrehooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.continueOnFailure),
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
    inject: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inject),
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
    container_config: {
      value: fleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigList",
    },
    http_config: {
      value: fleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsPrehooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecOperationWorkflowOperationsPrehooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inject !== undefined) {
      hasAnyValues = true;
      internalValueResult.inject = this._inject;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperationsPrehooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continueOnFailure = undefined;
      this._description = undefined;
      this._inject = undefined;
      this._name = undefined;
      this._successCondition = undefined;
      this._timeoutSeconds = undefined;
      this._containerConfig.internalValue = undefined;
      this._httpConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continueOnFailure = value.continueOnFailure;
      this._description = value.description;
      this._inject = value.inject;
      this._name = value.name;
      this._successCondition = value.successCondition;
      this._timeoutSeconds = value.timeoutSeconds;
      this._containerConfig.internalValue = value.containerConfig;
      this._httpConfig.internalValue = value.httpConfig;
    }
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure');
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure;
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

  // inject - computed: false, optional: true, required: false
  private _inject?: string[]; 
  public get inject() {
    return this.getListAttribute('inject');
  }
  public set inject(value: string[]) {
    this._inject = value;
  }
  public resetInject() {
    this._inject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectInput() {
    return this._inject;
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

  // container_config - computed: false, optional: true, required: false
  private _containerConfig = new FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: FleetplanSpecOperationWorkflowOperationsPrehooksContainerConfig) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: FleetplanSpecOperationWorkflowOperationsPrehooksHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }
}

export class FleetplanSpecOperationWorkflowOperationsPrehooksList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecOperationWorkflowOperationsPrehooks[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecOperationWorkflowOperationsPrehooksOutputReference {
    return new FleetplanSpecOperationWorkflowOperationsPrehooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecOperationWorkflowOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#name Fleetplan#name}
  */
  readonly name?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#action Fleetplan#action}
  */
  readonly action?: FleetplanSpecOperationWorkflowOperationsAction;
  /**
  * posthooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#posthooks Fleetplan#posthooks}
  */
  readonly posthooks?: FleetplanSpecOperationWorkflowOperationsPosthooks[] | cdktf.IResolvable;
  /**
  * prehooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#prehooks Fleetplan#prehooks}
  */
  readonly prehooks?: FleetplanSpecOperationWorkflowOperationsPrehooks[] | cdktf.IResolvable;
}

export function fleetplanSpecOperationWorkflowOperationsToTerraform(struct?: FleetplanSpecOperationWorkflowOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    action: fleetplanSpecOperationWorkflowOperationsActionToTerraform(struct!.action),
    posthooks: cdktf.listMapper(fleetplanSpecOperationWorkflowOperationsPosthooksToTerraform, true)(struct!.posthooks),
    prehooks: cdktf.listMapper(fleetplanSpecOperationWorkflowOperationsPrehooksToTerraform, true)(struct!.prehooks),
  }
}


export function fleetplanSpecOperationWorkflowOperationsToHclTerraform(struct?: FleetplanSpecOperationWorkflowOperations | cdktf.IResolvable): any {
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
    action: {
      value: fleetplanSpecOperationWorkflowOperationsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsActionList",
    },
    posthooks: {
      value: cdktf.listMapperHcl(fleetplanSpecOperationWorkflowOperationsPosthooksToHclTerraform, true)(struct!.posthooks),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPosthooksList",
    },
    prehooks: {
      value: cdktf.listMapperHcl(fleetplanSpecOperationWorkflowOperationsPrehooksToHclTerraform, true)(struct!.prehooks),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsPrehooksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetplanSpecOperationWorkflowOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._posthooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posthooks = this._posthooks?.internalValue;
    }
    if (this._prehooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prehooks = this._prehooks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflowOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._posthooks.internalValue = undefined;
      this._prehooks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._posthooks.internalValue = value.posthooks;
      this._prehooks.internalValue = value.prehooks;
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

  // action - computed: false, optional: true, required: false
  private _action = new FleetplanSpecOperationWorkflowOperationsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: FleetplanSpecOperationWorkflowOperationsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // posthooks - computed: false, optional: true, required: false
  private _posthooks = new FleetplanSpecOperationWorkflowOperationsPosthooksList(this, "posthooks", false);
  public get posthooks() {
    return this._posthooks;
  }
  public putPosthooks(value: FleetplanSpecOperationWorkflowOperationsPosthooks[] | cdktf.IResolvable) {
    this._posthooks.internalValue = value;
  }
  public resetPosthooks() {
    this._posthooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posthooksInput() {
    return this._posthooks.internalValue;
  }

  // prehooks - computed: false, optional: true, required: false
  private _prehooks = new FleetplanSpecOperationWorkflowOperationsPrehooksList(this, "prehooks", false);
  public get prehooks() {
    return this._prehooks;
  }
  public putPrehooks(value: FleetplanSpecOperationWorkflowOperationsPrehooks[] | cdktf.IResolvable) {
    this._prehooks.internalValue = value;
  }
  public resetPrehooks() {
    this._prehooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prehooksInput() {
    return this._prehooks.internalValue;
  }
}

export class FleetplanSpecOperationWorkflowOperationsList extends cdktf.ComplexList {
  public internalValue? : FleetplanSpecOperationWorkflowOperations[] | cdktf.IResolvable

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
  public get(index: number): FleetplanSpecOperationWorkflowOperationsOutputReference {
    return new FleetplanSpecOperationWorkflowOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetplanSpecOperationWorkflow {
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#operations Fleetplan#operations}
  */
  readonly operations?: FleetplanSpecOperationWorkflowOperations[] | cdktf.IResolvable;
}

export function fleetplanSpecOperationWorkflowToTerraform(struct?: FleetplanSpecOperationWorkflowOutputReference | FleetplanSpecOperationWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(fleetplanSpecOperationWorkflowOperationsToTerraform, true)(struct!.operations),
  }
}


export function fleetplanSpecOperationWorkflowToHclTerraform(struct?: FleetplanSpecOperationWorkflowOutputReference | FleetplanSpecOperationWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(fleetplanSpecOperationWorkflowOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOperationWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpecOperationWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpecOperationWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operations.internalValue = value.operations;
    }
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new FleetplanSpecOperationWorkflowOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: FleetplanSpecOperationWorkflowOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface FleetplanSpec {
  /**
  * agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#agents Fleetplan#agents}
  */
  readonly agents?: FleetplanSpecAgents[] | cdktf.IResolvable;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#fleet Fleetplan#fleet}
  */
  readonly fleet?: FleetplanSpecFleet;
  /**
  * operation_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#operation_workflow Fleetplan#operation_workflow}
  */
  readonly operationWorkflow?: FleetplanSpecOperationWorkflow;
}

export function fleetplanSpecToTerraform(struct?: FleetplanSpecOutputReference | FleetplanSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agents: cdktf.listMapper(fleetplanSpecAgentsToTerraform, true)(struct!.agents),
    fleet: fleetplanSpecFleetToTerraform(struct!.fleet),
    operation_workflow: fleetplanSpecOperationWorkflowToTerraform(struct!.operationWorkflow),
  }
}


export function fleetplanSpecToHclTerraform(struct?: FleetplanSpecOutputReference | FleetplanSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agents: {
      value: cdktf.listMapperHcl(fleetplanSpecAgentsToHclTerraform, true)(struct!.agents),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecAgentsList",
    },
    fleet: {
      value: fleetplanSpecFleetToHclTerraform(struct!.fleet),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecFleetList",
    },
    operation_workflow: {
      value: fleetplanSpecOperationWorkflowToHclTerraform(struct!.operationWorkflow),
      isBlock: true,
      type: "list",
      storageClassType: "FleetplanSpecOperationWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetplanSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetplanSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agents = this._agents?.internalValue;
    }
    if (this._fleet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleet = this._fleet?.internalValue;
    }
    if (this._operationWorkflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationWorkflow = this._operationWorkflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetplanSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agents.internalValue = undefined;
      this._fleet.internalValue = undefined;
      this._operationWorkflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agents.internalValue = value.agents;
      this._fleet.internalValue = value.fleet;
      this._operationWorkflow.internalValue = value.operationWorkflow;
    }
  }

  // agents - computed: false, optional: true, required: false
  private _agents = new FleetplanSpecAgentsList(this, "agents", false);
  public get agents() {
    return this._agents;
  }
  public putAgents(value: FleetplanSpecAgents[] | cdktf.IResolvable) {
    this._agents.internalValue = value;
  }
  public resetAgents() {
    this._agents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents.internalValue;
  }

  // fleet - computed: false, optional: true, required: false
  private _fleet = new FleetplanSpecFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: FleetplanSpecFleet) {
    this._fleet.internalValue = value;
  }
  public resetFleet() {
    this._fleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // operation_workflow - computed: false, optional: true, required: false
  private _operationWorkflow = new FleetplanSpecOperationWorkflowOutputReference(this, "operation_workflow");
  public get operationWorkflow() {
    return this._operationWorkflow;
  }
  public putOperationWorkflow(value: FleetplanSpecOperationWorkflow) {
    this._operationWorkflow.internalValue = value;
  }
  public resetOperationWorkflow() {
    this._operationWorkflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationWorkflowInput() {
    return this._operationWorkflow.internalValue;
  }
}
export interface FleetplanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#create Fleetplan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#delete Fleetplan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#update Fleetplan#update}
  */
  readonly update?: string;
}

export function fleetplanTimeoutsToTerraform(struct?: FleetplanTimeouts | cdktf.IResolvable): any {
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


export function fleetplanTimeoutsToHclTerraform(struct?: FleetplanTimeouts | cdktf.IResolvable): any {
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

export class FleetplanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetplanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetplanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan rafay_fleetplan}
*/
export class Fleetplan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_fleetplan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fleetplan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fleetplan to import
  * @param importFromId The id of the existing Fleetplan that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fleetplan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_fleetplan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/fleetplan rafay_fleetplan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetplanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FleetplanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_fleetplan',
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
  private _metadata = new FleetplanMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: FleetplanMetadata) {
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
  private _spec = new FleetplanSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: FleetplanSpec) {
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
  private _timeouts = new FleetplanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetplanTimeouts) {
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
      metadata: fleetplanMetadataToTerraform(this._metadata.internalValue),
      spec: fleetplanSpecToTerraform(this._spec.internalValue),
      timeouts: fleetplanTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: fleetplanMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetplanMetadataList",
      },
      spec: {
        value: fleetplanSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetplanSpecList",
      },
      timeouts: {
        value: fleetplanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetplanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
