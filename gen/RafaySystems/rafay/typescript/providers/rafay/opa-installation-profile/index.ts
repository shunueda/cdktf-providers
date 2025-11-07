// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpaInstallationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#id OpaInstallationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#metadata OpaInstallationProfile#metadata}
  */
  readonly metadata?: OpaInstallationProfileMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#spec OpaInstallationProfile#spec}
  */
  readonly spec?: OpaInstallationProfileSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#timeouts OpaInstallationProfile#timeouts}
  */
  readonly timeouts?: OpaInstallationProfileTimeouts;
}
export interface OpaInstallationProfileMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#id OpaInstallationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#is_sso_user OpaInstallationProfile#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#username OpaInstallationProfile#username}
  */
  readonly username?: string;
}

export function opaInstallationProfileMetadataCreatedByToTerraform(struct?: OpaInstallationProfileMetadataCreatedByOutputReference | OpaInstallationProfileMetadataCreatedBy): any {
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


export function opaInstallationProfileMetadataCreatedByToHclTerraform(struct?: OpaInstallationProfileMetadataCreatedByOutputReference | OpaInstallationProfileMetadataCreatedBy): any {
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

export class OpaInstallationProfileMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpaInstallationProfileMetadataCreatedBy | undefined {
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

  public set internalValue(value: OpaInstallationProfileMetadataCreatedBy | undefined) {
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
export interface OpaInstallationProfileMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#id OpaInstallationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#is_sso_user OpaInstallationProfile#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#username OpaInstallationProfile#username}
  */
  readonly username?: string;
}

export function opaInstallationProfileMetadataModifiedByToTerraform(struct?: OpaInstallationProfileMetadataModifiedByOutputReference | OpaInstallationProfileMetadataModifiedBy): any {
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


export function opaInstallationProfileMetadataModifiedByToHclTerraform(struct?: OpaInstallationProfileMetadataModifiedByOutputReference | OpaInstallationProfileMetadataModifiedBy): any {
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

export class OpaInstallationProfileMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpaInstallationProfileMetadataModifiedBy | undefined {
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

  public set internalValue(value: OpaInstallationProfileMetadataModifiedBy | undefined) {
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
export interface OpaInstallationProfileMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#annotations OpaInstallationProfile#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#description OpaInstallationProfile#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#display_name OpaInstallationProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#labels OpaInstallationProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#name OpaInstallationProfile#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#project OpaInstallationProfile#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#created_by OpaInstallationProfile#created_by}
  */
  readonly createdBy?: OpaInstallationProfileMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#modified_by OpaInstallationProfile#modified_by}
  */
  readonly modifiedBy?: OpaInstallationProfileMetadataModifiedBy;
}

export function opaInstallationProfileMetadataToTerraform(struct?: OpaInstallationProfileMetadataOutputReference | OpaInstallationProfileMetadata): any {
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
    created_by: opaInstallationProfileMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: opaInstallationProfileMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function opaInstallationProfileMetadataToHclTerraform(struct?: OpaInstallationProfileMetadataOutputReference | OpaInstallationProfileMetadata): any {
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
      value: opaInstallationProfileMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileMetadataCreatedByList",
    },
    modified_by: {
      value: opaInstallationProfileMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpaInstallationProfileMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpaInstallationProfileMetadata | undefined {
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

  public set internalValue(value: OpaInstallationProfileMetadata | undefined) {
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
  private _createdBy = new OpaInstallationProfileMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: OpaInstallationProfileMetadataCreatedBy) {
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
  private _modifiedBy = new OpaInstallationProfileMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: OpaInstallationProfileMetadataModifiedBy) {
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
export interface OpaInstallationProfileSpecExcludedNamespacesNamespaces {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#name OpaInstallationProfile#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#system_catalog OpaInstallationProfile#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
}

export function opaInstallationProfileSpecExcludedNamespacesNamespacesToTerraform(struct?: OpaInstallationProfileSpecExcludedNamespacesNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
  }
}


export function opaInstallationProfileSpecExcludedNamespacesNamespacesToHclTerraform(struct?: OpaInstallationProfileSpecExcludedNamespacesNamespaces | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpaInstallationProfileSpecExcludedNamespacesNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpaInstallationProfileSpecExcludedNamespacesNamespaces | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpaInstallationProfileSpecExcludedNamespacesNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
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
}

export class OpaInstallationProfileSpecExcludedNamespacesNamespacesList extends cdktf.ComplexList {
  public internalValue? : OpaInstallationProfileSpecExcludedNamespacesNamespaces[] | cdktf.IResolvable

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
  public get(index: number): OpaInstallationProfileSpecExcludedNamespacesNamespacesOutputReference {
    return new OpaInstallationProfileSpecExcludedNamespacesNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpaInstallationProfileSpecExcludedNamespaces {
  /**
  * List of processes to be excluding namespace from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#processes OpaInstallationProfile#processes}
  */
  readonly processes?: string[];
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#namespaces OpaInstallationProfile#namespaces}
  */
  readonly namespaces?: OpaInstallationProfileSpecExcludedNamespacesNamespaces[] | cdktf.IResolvable;
}

export function opaInstallationProfileSpecExcludedNamespacesToTerraform(struct?: OpaInstallationProfileSpecExcludedNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processes),
    namespaces: cdktf.listMapper(opaInstallationProfileSpecExcludedNamespacesNamespacesToTerraform, true)(struct!.namespaces),
  }
}


export function opaInstallationProfileSpecExcludedNamespacesToHclTerraform(struct?: OpaInstallationProfileSpecExcludedNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktf.listMapperHcl(opaInstallationProfileSpecExcludedNamespacesNamespacesToHclTerraform, true)(struct!.namespaces),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileSpecExcludedNamespacesNamespacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpaInstallationProfileSpecExcludedNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpaInstallationProfileSpecExcludedNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processes !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes;
    }
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpaInstallationProfileSpecExcludedNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processes = undefined;
      this._namespaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processes = value.processes;
      this._namespaces.internalValue = value.namespaces;
    }
  }

  // processes - computed: false, optional: true, required: false
  private _processes?: string[]; 
  public get processes() {
    return this.getListAttribute('processes');
  }
  public set processes(value: string[]) {
    this._processes = value;
  }
  public resetProcesses() {
    this._processes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new OpaInstallationProfileSpecExcludedNamespacesNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: OpaInstallationProfileSpecExcludedNamespacesNamespaces[] | cdktf.IResolvable) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }
}

export class OpaInstallationProfileSpecExcludedNamespacesList extends cdktf.ComplexList {
  public internalValue? : OpaInstallationProfileSpecExcludedNamespaces[] | cdktf.IResolvable

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
  public get(index: number): OpaInstallationProfileSpecExcludedNamespacesOutputReference {
    return new OpaInstallationProfileSpecExcludedNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpaInstallationProfileSpecInstallationParams {
  /**
  * audit chunk size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#audit_chunk_size OpaInstallationProfile#audit_chunk_size}
  */
  readonly auditChunkSize?: number;
  /**
  * use cache for audit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#audit_from_cache OpaInstallationProfile#audit_from_cache}
  */
  readonly auditFromCache?: boolean | cdktf.IResolvable;
  /**
  * time(seconds) after which audit will happen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#audit_interval OpaInstallationProfile#audit_interval}
  */
  readonly auditInterval?: number;
  /**
  * audit match kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#audit_match_kind_only OpaInstallationProfile#audit_match_kind_only}
  */
  readonly auditMatchKindOnly?: boolean | cdktf.IResolvable;
  /**
  * number of violations to be listed in constraint status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#constraint_violations_limit OpaInstallationProfile#constraint_violations_limit}
  */
  readonly constraintViolationsLimit?: number;
  /**
  * emit admission events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#emit_admission_events OpaInstallationProfile#emit_admission_events}
  */
  readonly emitAdmissionEvents?: boolean | cdktf.IResolvable;
  /**
  * emit audit events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#emit_audit_events OpaInstallationProfile#emit_audit_events}
  */
  readonly emitAuditEvents?: boolean | cdktf.IResolvable;
  /**
  * enable delete operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#enable_delete_operations OpaInstallationProfile#enable_delete_operations}
  */
  readonly enableDeleteOperations?: boolean | cdktf.IResolvable;
  /**
  * enable mutation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#experimental_enable_mutation OpaInstallationProfile#experimental_enable_mutation}
  */
  readonly experimentalEnableMutation?: boolean | cdktf.IResolvable;
  /**
  * log denies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#log_denies OpaInstallationProfile#log_denies}
  */
  readonly logDenies?: boolean | cdktf.IResolvable;
}

export function opaInstallationProfileSpecInstallationParamsToTerraform(struct?: OpaInstallationProfileSpecInstallationParamsOutputReference | OpaInstallationProfileSpecInstallationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_chunk_size: cdktf.numberToTerraform(struct!.auditChunkSize),
    audit_from_cache: cdktf.booleanToTerraform(struct!.auditFromCache),
    audit_interval: cdktf.numberToTerraform(struct!.auditInterval),
    audit_match_kind_only: cdktf.booleanToTerraform(struct!.auditMatchKindOnly),
    constraint_violations_limit: cdktf.numberToTerraform(struct!.constraintViolationsLimit),
    emit_admission_events: cdktf.booleanToTerraform(struct!.emitAdmissionEvents),
    emit_audit_events: cdktf.booleanToTerraform(struct!.emitAuditEvents),
    enable_delete_operations: cdktf.booleanToTerraform(struct!.enableDeleteOperations),
    experimental_enable_mutation: cdktf.booleanToTerraform(struct!.experimentalEnableMutation),
    log_denies: cdktf.booleanToTerraform(struct!.logDenies),
  }
}


export function opaInstallationProfileSpecInstallationParamsToHclTerraform(struct?: OpaInstallationProfileSpecInstallationParamsOutputReference | OpaInstallationProfileSpecInstallationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_chunk_size: {
      value: cdktf.numberToHclTerraform(struct!.auditChunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audit_from_cache: {
      value: cdktf.booleanToHclTerraform(struct!.auditFromCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_interval: {
      value: cdktf.numberToHclTerraform(struct!.auditInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audit_match_kind_only: {
      value: cdktf.booleanToHclTerraform(struct!.auditMatchKindOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    constraint_violations_limit: {
      value: cdktf.numberToHclTerraform(struct!.constraintViolationsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emit_admission_events: {
      value: cdktf.booleanToHclTerraform(struct!.emitAdmissionEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    emit_audit_events: {
      value: cdktf.booleanToHclTerraform(struct!.emitAuditEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_delete_operations: {
      value: cdktf.booleanToHclTerraform(struct!.enableDeleteOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    experimental_enable_mutation: {
      value: cdktf.booleanToHclTerraform(struct!.experimentalEnableMutation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_denies: {
      value: cdktf.booleanToHclTerraform(struct!.logDenies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpaInstallationProfileSpecInstallationParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpaInstallationProfileSpecInstallationParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditChunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditChunkSize = this._auditChunkSize;
    }
    if (this._auditFromCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditFromCache = this._auditFromCache;
    }
    if (this._auditInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditInterval = this._auditInterval;
    }
    if (this._auditMatchKindOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditMatchKindOnly = this._auditMatchKindOnly;
    }
    if (this._constraintViolationsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintViolationsLimit = this._constraintViolationsLimit;
    }
    if (this._emitAdmissionEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitAdmissionEvents = this._emitAdmissionEvents;
    }
    if (this._emitAuditEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitAuditEvents = this._emitAuditEvents;
    }
    if (this._enableDeleteOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDeleteOperations = this._enableDeleteOperations;
    }
    if (this._experimentalEnableMutation !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalEnableMutation = this._experimentalEnableMutation;
    }
    if (this._logDenies !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDenies = this._logDenies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpaInstallationProfileSpecInstallationParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditChunkSize = undefined;
      this._auditFromCache = undefined;
      this._auditInterval = undefined;
      this._auditMatchKindOnly = undefined;
      this._constraintViolationsLimit = undefined;
      this._emitAdmissionEvents = undefined;
      this._emitAuditEvents = undefined;
      this._enableDeleteOperations = undefined;
      this._experimentalEnableMutation = undefined;
      this._logDenies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditChunkSize = value.auditChunkSize;
      this._auditFromCache = value.auditFromCache;
      this._auditInterval = value.auditInterval;
      this._auditMatchKindOnly = value.auditMatchKindOnly;
      this._constraintViolationsLimit = value.constraintViolationsLimit;
      this._emitAdmissionEvents = value.emitAdmissionEvents;
      this._emitAuditEvents = value.emitAuditEvents;
      this._enableDeleteOperations = value.enableDeleteOperations;
      this._experimentalEnableMutation = value.experimentalEnableMutation;
      this._logDenies = value.logDenies;
    }
  }

  // audit_chunk_size - computed: false, optional: true, required: false
  private _auditChunkSize?: number; 
  public get auditChunkSize() {
    return this.getNumberAttribute('audit_chunk_size');
  }
  public set auditChunkSize(value: number) {
    this._auditChunkSize = value;
  }
  public resetAuditChunkSize() {
    this._auditChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditChunkSizeInput() {
    return this._auditChunkSize;
  }

  // audit_from_cache - computed: false, optional: true, required: false
  private _auditFromCache?: boolean | cdktf.IResolvable; 
  public get auditFromCache() {
    return this.getBooleanAttribute('audit_from_cache');
  }
  public set auditFromCache(value: boolean | cdktf.IResolvable) {
    this._auditFromCache = value;
  }
  public resetAuditFromCache() {
    this._auditFromCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFromCacheInput() {
    return this._auditFromCache;
  }

  // audit_interval - computed: false, optional: true, required: false
  private _auditInterval?: number; 
  public get auditInterval() {
    return this.getNumberAttribute('audit_interval');
  }
  public set auditInterval(value: number) {
    this._auditInterval = value;
  }
  public resetAuditInterval() {
    this._auditInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditIntervalInput() {
    return this._auditInterval;
  }

  // audit_match_kind_only - computed: false, optional: true, required: false
  private _auditMatchKindOnly?: boolean | cdktf.IResolvable; 
  public get auditMatchKindOnly() {
    return this.getBooleanAttribute('audit_match_kind_only');
  }
  public set auditMatchKindOnly(value: boolean | cdktf.IResolvable) {
    this._auditMatchKindOnly = value;
  }
  public resetAuditMatchKindOnly() {
    this._auditMatchKindOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditMatchKindOnlyInput() {
    return this._auditMatchKindOnly;
  }

  // constraint_violations_limit - computed: false, optional: true, required: false
  private _constraintViolationsLimit?: number; 
  public get constraintViolationsLimit() {
    return this.getNumberAttribute('constraint_violations_limit');
  }
  public set constraintViolationsLimit(value: number) {
    this._constraintViolationsLimit = value;
  }
  public resetConstraintViolationsLimit() {
    this._constraintViolationsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintViolationsLimitInput() {
    return this._constraintViolationsLimit;
  }

  // emit_admission_events - computed: false, optional: true, required: false
  private _emitAdmissionEvents?: boolean | cdktf.IResolvable; 
  public get emitAdmissionEvents() {
    return this.getBooleanAttribute('emit_admission_events');
  }
  public set emitAdmissionEvents(value: boolean | cdktf.IResolvable) {
    this._emitAdmissionEvents = value;
  }
  public resetEmitAdmissionEvents() {
    this._emitAdmissionEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitAdmissionEventsInput() {
    return this._emitAdmissionEvents;
  }

  // emit_audit_events - computed: false, optional: true, required: false
  private _emitAuditEvents?: boolean | cdktf.IResolvable; 
  public get emitAuditEvents() {
    return this.getBooleanAttribute('emit_audit_events');
  }
  public set emitAuditEvents(value: boolean | cdktf.IResolvable) {
    this._emitAuditEvents = value;
  }
  public resetEmitAuditEvents() {
    this._emitAuditEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitAuditEventsInput() {
    return this._emitAuditEvents;
  }

  // enable_delete_operations - computed: false, optional: true, required: false
  private _enableDeleteOperations?: boolean | cdktf.IResolvable; 
  public get enableDeleteOperations() {
    return this.getBooleanAttribute('enable_delete_operations');
  }
  public set enableDeleteOperations(value: boolean | cdktf.IResolvable) {
    this._enableDeleteOperations = value;
  }
  public resetEnableDeleteOperations() {
    this._enableDeleteOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeleteOperationsInput() {
    return this._enableDeleteOperations;
  }

  // experimental_enable_mutation - computed: false, optional: true, required: false
  private _experimentalEnableMutation?: boolean | cdktf.IResolvable; 
  public get experimentalEnableMutation() {
    return this.getBooleanAttribute('experimental_enable_mutation');
  }
  public set experimentalEnableMutation(value: boolean | cdktf.IResolvable) {
    this._experimentalEnableMutation = value;
  }
  public resetExperimentalEnableMutation() {
    this._experimentalEnableMutation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalEnableMutationInput() {
    return this._experimentalEnableMutation;
  }

  // log_denies - computed: false, optional: true, required: false
  private _logDenies?: boolean | cdktf.IResolvable; 
  public get logDenies() {
    return this.getBooleanAttribute('log_denies');
  }
  public set logDenies(value: boolean | cdktf.IResolvable) {
    this._logDenies = value;
  }
  public resetLogDenies() {
    this._logDenies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeniesInput() {
    return this._logDenies;
  }
}
export interface OpaInstallationProfileSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#name OpaInstallationProfile#name}
  */
  readonly name?: string;
}

export function opaInstallationProfileSpecSharingProjectsToTerraform(struct?: OpaInstallationProfileSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function opaInstallationProfileSpecSharingProjectsToHclTerraform(struct?: OpaInstallationProfileSpecSharingProjects | cdktf.IResolvable): any {
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

export class OpaInstallationProfileSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpaInstallationProfileSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpaInstallationProfileSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class OpaInstallationProfileSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : OpaInstallationProfileSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): OpaInstallationProfileSpecSharingProjectsOutputReference {
    return new OpaInstallationProfileSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpaInstallationProfileSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#enabled OpaInstallationProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#projects OpaInstallationProfile#projects}
  */
  readonly projects?: OpaInstallationProfileSpecSharingProjects[] | cdktf.IResolvable;
}

export function opaInstallationProfileSpecSharingToTerraform(struct?: OpaInstallationProfileSpecSharingOutputReference | OpaInstallationProfileSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(opaInstallationProfileSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function opaInstallationProfileSpecSharingToHclTerraform(struct?: OpaInstallationProfileSpecSharingOutputReference | OpaInstallationProfileSpecSharing): any {
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
      value: cdktf.listMapperHcl(opaInstallationProfileSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpaInstallationProfileSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpaInstallationProfileSpecSharing | undefined {
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

  public set internalValue(value: OpaInstallationProfileSpecSharing | undefined) {
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
  private _projects = new OpaInstallationProfileSpecSharingProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: OpaInstallationProfileSpecSharingProjects[] | cdktf.IResolvable) {
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
export interface OpaInstallationProfileSpecSyncObjects {
  /**
  * group of k8s object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#group OpaInstallationProfile#group}
  */
  readonly group?: string;
  /**
  * kind of k8s object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#kind OpaInstallationProfile#kind}
  */
  readonly kind?: string;
  /**
  * version of k8s object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#version OpaInstallationProfile#version}
  */
  readonly version?: string;
}

export function opaInstallationProfileSpecSyncObjectsToTerraform(struct?: OpaInstallationProfileSpecSyncObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function opaInstallationProfileSpecSyncObjectsToHclTerraform(struct?: OpaInstallationProfileSpecSyncObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class OpaInstallationProfileSpecSyncObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpaInstallationProfileSpecSyncObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpaInstallationProfileSpecSyncObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

export class OpaInstallationProfileSpecSyncObjectsList extends cdktf.ComplexList {
  public internalValue? : OpaInstallationProfileSpecSyncObjects[] | cdktf.IResolvable

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
  public get(index: number): OpaInstallationProfileSpecSyncObjectsOutputReference {
    return new OpaInstallationProfileSpecSyncObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpaInstallationProfileSpec {
  /**
  * version of the OPA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#opa_version OpaInstallationProfile#opa_version}
  */
  readonly opaVersion?: string;
  /**
  * version of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#version OpaInstallationProfile#version}
  */
  readonly version?: string;
  /**
  * excluded_namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#excluded_namespaces OpaInstallationProfile#excluded_namespaces}
  */
  readonly excludedNamespaces?: OpaInstallationProfileSpecExcludedNamespaces[] | cdktf.IResolvable;
  /**
  * installation_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#installation_params OpaInstallationProfile#installation_params}
  */
  readonly installationParams?: OpaInstallationProfileSpecInstallationParams;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#sharing OpaInstallationProfile#sharing}
  */
  readonly sharing?: OpaInstallationProfileSpecSharing;
  /**
  * sync_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#sync_objects OpaInstallationProfile#sync_objects}
  */
  readonly syncObjects?: OpaInstallationProfileSpecSyncObjects[] | cdktf.IResolvable;
}

export function opaInstallationProfileSpecToTerraform(struct?: OpaInstallationProfileSpecOutputReference | OpaInstallationProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opa_version: cdktf.stringToTerraform(struct!.opaVersion),
    version: cdktf.stringToTerraform(struct!.version),
    excluded_namespaces: cdktf.listMapper(opaInstallationProfileSpecExcludedNamespacesToTerraform, true)(struct!.excludedNamespaces),
    installation_params: opaInstallationProfileSpecInstallationParamsToTerraform(struct!.installationParams),
    sharing: opaInstallationProfileSpecSharingToTerraform(struct!.sharing),
    sync_objects: cdktf.listMapper(opaInstallationProfileSpecSyncObjectsToTerraform, true)(struct!.syncObjects),
  }
}


export function opaInstallationProfileSpecToHclTerraform(struct?: OpaInstallationProfileSpecOutputReference | OpaInstallationProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opa_version: {
      value: cdktf.stringToHclTerraform(struct!.opaVersion),
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
    excluded_namespaces: {
      value: cdktf.listMapperHcl(opaInstallationProfileSpecExcludedNamespacesToHclTerraform, true)(struct!.excludedNamespaces),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileSpecExcludedNamespacesList",
    },
    installation_params: {
      value: opaInstallationProfileSpecInstallationParamsToHclTerraform(struct!.installationParams),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileSpecInstallationParamsList",
    },
    sharing: {
      value: opaInstallationProfileSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileSpecSharingList",
    },
    sync_objects: {
      value: cdktf.listMapperHcl(opaInstallationProfileSpecSyncObjectsToHclTerraform, true)(struct!.syncObjects),
      isBlock: true,
      type: "list",
      storageClassType: "OpaInstallationProfileSpecSyncObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpaInstallationProfileSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpaInstallationProfileSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaVersion = this._opaVersion;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._excludedNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces?.internalValue;
    }
    if (this._installationParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationParams = this._installationParams?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    if (this._syncObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncObjects = this._syncObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpaInstallationProfileSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._opaVersion = undefined;
      this._version = undefined;
      this._excludedNamespaces.internalValue = undefined;
      this._installationParams.internalValue = undefined;
      this._sharing.internalValue = undefined;
      this._syncObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._opaVersion = value.opaVersion;
      this._version = value.version;
      this._excludedNamespaces.internalValue = value.excludedNamespaces;
      this._installationParams.internalValue = value.installationParams;
      this._sharing.internalValue = value.sharing;
      this._syncObjects.internalValue = value.syncObjects;
    }
  }

  // opa_version - computed: false, optional: true, required: false
  private _opaVersion?: string; 
  public get opaVersion() {
    return this.getStringAttribute('opa_version');
  }
  public set opaVersion(value: string) {
    this._opaVersion = value;
  }
  public resetOpaVersion() {
    this._opaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaVersionInput() {
    return this._opaVersion;
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

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces = new OpaInstallationProfileSpecExcludedNamespacesList(this, "excluded_namespaces", false);
  public get excludedNamespaces() {
    return this._excludedNamespaces;
  }
  public putExcludedNamespaces(value: OpaInstallationProfileSpecExcludedNamespaces[] | cdktf.IResolvable) {
    this._excludedNamespaces.internalValue = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces.internalValue;
  }

  // installation_params - computed: false, optional: true, required: false
  private _installationParams = new OpaInstallationProfileSpecInstallationParamsOutputReference(this, "installation_params");
  public get installationParams() {
    return this._installationParams;
  }
  public putInstallationParams(value: OpaInstallationProfileSpecInstallationParams) {
    this._installationParams.internalValue = value;
  }
  public resetInstallationParams() {
    this._installationParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationParamsInput() {
    return this._installationParams.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new OpaInstallationProfileSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: OpaInstallationProfileSpecSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // sync_objects - computed: false, optional: true, required: false
  private _syncObjects = new OpaInstallationProfileSpecSyncObjectsList(this, "sync_objects", false);
  public get syncObjects() {
    return this._syncObjects;
  }
  public putSyncObjects(value: OpaInstallationProfileSpecSyncObjects[] | cdktf.IResolvable) {
    this._syncObjects.internalValue = value;
  }
  public resetSyncObjects() {
    this._syncObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncObjectsInput() {
    return this._syncObjects.internalValue;
  }
}
export interface OpaInstallationProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#create OpaInstallationProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#delete OpaInstallationProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#update OpaInstallationProfile#update}
  */
  readonly update?: string;
}

export function opaInstallationProfileTimeoutsToTerraform(struct?: OpaInstallationProfileTimeouts | cdktf.IResolvable): any {
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


export function opaInstallationProfileTimeoutsToHclTerraform(struct?: OpaInstallationProfileTimeouts | cdktf.IResolvable): any {
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

export class OpaInstallationProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpaInstallationProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpaInstallationProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile rafay_opa_installation_profile}
*/
export class OpaInstallationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_opa_installation_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpaInstallationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpaInstallationProfile to import
  * @param importFromId The id of the existing OpaInstallationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpaInstallationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_opa_installation_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/opa_installation_profile rafay_opa_installation_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpaInstallationProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpaInstallationProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_opa_installation_profile',
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
  private _metadata = new OpaInstallationProfileMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: OpaInstallationProfileMetadata) {
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
  private _spec = new OpaInstallationProfileSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: OpaInstallationProfileSpec) {
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
  private _timeouts = new OpaInstallationProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpaInstallationProfileTimeouts) {
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
      metadata: opaInstallationProfileMetadataToTerraform(this._metadata.internalValue),
      spec: opaInstallationProfileSpecToTerraform(this._spec.internalValue),
      timeouts: opaInstallationProfileTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: opaInstallationProfileMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpaInstallationProfileMetadataList",
      },
      spec: {
        value: opaInstallationProfileSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpaInstallationProfileSpecList",
      },
      timeouts: {
        value: opaInstallationProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpaInstallationProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
