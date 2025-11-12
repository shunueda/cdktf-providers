// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#id CostProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#metadata CostProfile#metadata}
  */
  readonly metadata?: CostProfileMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#spec CostProfile#spec}
  */
  readonly spec?: CostProfileSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#timeouts CostProfile#timeouts}
  */
  readonly timeouts?: CostProfileTimeouts;
}
export interface CostProfileMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#id CostProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#is_sso_user CostProfile#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#username CostProfile#username}
  */
  readonly username?: string;
}

export function costProfileMetadataCreatedByToTerraform(struct?: CostProfileMetadataCreatedByOutputReference | CostProfileMetadataCreatedBy): any {
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


export function costProfileMetadataCreatedByToHclTerraform(struct?: CostProfileMetadataCreatedByOutputReference | CostProfileMetadataCreatedBy): any {
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

export class CostProfileMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileMetadataCreatedBy | undefined {
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

  public set internalValue(value: CostProfileMetadataCreatedBy | undefined) {
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
export interface CostProfileMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#id CostProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#is_sso_user CostProfile#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#username CostProfile#username}
  */
  readonly username?: string;
}

export function costProfileMetadataModifiedByToTerraform(struct?: CostProfileMetadataModifiedByOutputReference | CostProfileMetadataModifiedBy): any {
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


export function costProfileMetadataModifiedByToHclTerraform(struct?: CostProfileMetadataModifiedByOutputReference | CostProfileMetadataModifiedBy): any {
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

export class CostProfileMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileMetadataModifiedBy | undefined {
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

  public set internalValue(value: CostProfileMetadataModifiedBy | undefined) {
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
export interface CostProfileMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#annotations CostProfile#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#description CostProfile#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#display_name CostProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#labels CostProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#name CostProfile#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#project CostProfile#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#created_by CostProfile#created_by}
  */
  readonly createdBy?: CostProfileMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#modified_by CostProfile#modified_by}
  */
  readonly modifiedBy?: CostProfileMetadataModifiedBy;
}

export function costProfileMetadataToTerraform(struct?: CostProfileMetadataOutputReference | CostProfileMetadata): any {
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
    created_by: costProfileMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: costProfileMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function costProfileMetadataToHclTerraform(struct?: CostProfileMetadataOutputReference | CostProfileMetadata): any {
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
      value: costProfileMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileMetadataCreatedByList",
    },
    modified_by: {
      value: costProfileMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileMetadata | undefined {
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

  public set internalValue(value: CostProfileMetadata | undefined) {
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
  private _createdBy = new CostProfileMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: CostProfileMetadataCreatedBy) {
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
  private _modifiedBy = new CostProfileMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: CostProfileMetadataModifiedBy) {
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
export interface CostProfileSpecInstallationParamsAwsAwsCredentials {
  /**
  * Aws Service Key Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_service_key_name CostProfile#aws_service_key_name}
  */
  readonly awsServiceKeyName?: string;
  /**
  * Aws Service Key Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_service_key_secret CostProfile#aws_service_key_secret}
  */
  readonly awsServiceKeySecret?: string;
  /**
  * cloud credentials id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cloud_credentials_name CostProfile#cloud_credentials_name}
  */
  readonly cloudCredentialsName?: string;
  /**
  * Use Cluster Credntial when BP is attached to the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cluster_cred CostProfile#cluster_cred}
  */
  readonly clusterCred?: boolean | cdktf.IResolvable;
  /**
  * Aws role arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#role_arn CostProfile#role_arn}
  */
  readonly roleArn?: string;
}

export function costProfileSpecInstallationParamsAwsAwsCredentialsToTerraform(struct?: CostProfileSpecInstallationParamsAwsAwsCredentialsOutputReference | CostProfileSpecInstallationParamsAwsAwsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_service_key_name: cdktf.stringToTerraform(struct!.awsServiceKeyName),
    aws_service_key_secret: cdktf.stringToTerraform(struct!.awsServiceKeySecret),
    cloud_credentials_name: cdktf.stringToTerraform(struct!.cloudCredentialsName),
    cluster_cred: cdktf.booleanToTerraform(struct!.clusterCred),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function costProfileSpecInstallationParamsAwsAwsCredentialsToHclTerraform(struct?: CostProfileSpecInstallationParamsAwsAwsCredentialsOutputReference | CostProfileSpecInstallationParamsAwsAwsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_service_key_name: {
      value: cdktf.stringToHclTerraform(struct!.awsServiceKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_service_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.awsServiceKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_credentials_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_cred: {
      value: cdktf.booleanToHclTerraform(struct!.clusterCred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAwsAwsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAwsAwsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsServiceKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsServiceKeyName = this._awsServiceKeyName;
    }
    if (this._awsServiceKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsServiceKeySecret = this._awsServiceKeySecret;
    }
    if (this._cloudCredentialsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialsName = this._cloudCredentialsName;
    }
    if (this._clusterCred !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCred = this._clusterCred;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAwsAwsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsServiceKeyName = undefined;
      this._awsServiceKeySecret = undefined;
      this._cloudCredentialsName = undefined;
      this._clusterCred = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsServiceKeyName = value.awsServiceKeyName;
      this._awsServiceKeySecret = value.awsServiceKeySecret;
      this._cloudCredentialsName = value.cloudCredentialsName;
      this._clusterCred = value.clusterCred;
      this._roleArn = value.roleArn;
    }
  }

  // aws_service_key_name - computed: false, optional: true, required: false
  private _awsServiceKeyName?: string; 
  public get awsServiceKeyName() {
    return this.getStringAttribute('aws_service_key_name');
  }
  public set awsServiceKeyName(value: string) {
    this._awsServiceKeyName = value;
  }
  public resetAwsServiceKeyName() {
    this._awsServiceKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceKeyNameInput() {
    return this._awsServiceKeyName;
  }

  // aws_service_key_secret - computed: false, optional: true, required: false
  private _awsServiceKeySecret?: string; 
  public get awsServiceKeySecret() {
    return this.getStringAttribute('aws_service_key_secret');
  }
  public set awsServiceKeySecret(value: string) {
    this._awsServiceKeySecret = value;
  }
  public resetAwsServiceKeySecret() {
    this._awsServiceKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceKeySecretInput() {
    return this._awsServiceKeySecret;
  }

  // cloud_credentials_name - computed: false, optional: true, required: false
  private _cloudCredentialsName?: string; 
  public get cloudCredentialsName() {
    return this.getStringAttribute('cloud_credentials_name');
  }
  public set cloudCredentialsName(value: string) {
    this._cloudCredentialsName = value;
  }
  public resetCloudCredentialsName() {
    this._cloudCredentialsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsNameInput() {
    return this._cloudCredentialsName;
  }

  // cluster_cred - computed: false, optional: true, required: false
  private _clusterCred?: boolean | cdktf.IResolvable; 
  public get clusterCred() {
    return this.getBooleanAttribute('cluster_cred');
  }
  public set clusterCred(value: boolean | cdktf.IResolvable) {
    this._clusterCred = value;
  }
  public resetClusterCred() {
    this._clusterCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCredInput() {
    return this._clusterCred;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface CostProfileSpecInstallationParamsAwsCurIntegration {
  /**
  * Aws Athena Bucket Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#athena_bucket_name CostProfile#athena_bucket_name}
  */
  readonly athenaBucketName?: string;
  /**
  * Aws Athena Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#athena_database CostProfile#athena_database}
  */
  readonly athenaDatabase?: string;
  /**
  * Aws Athena Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#athena_region CostProfile#athena_region}
  */
  readonly athenaRegion?: string;
  /**
  * Aws Athena Table Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#athena_table CostProfile#athena_table}
  */
  readonly athenaTable?: string;
  /**
  * Aws Account ID. DEPRECATED. Will not be used even if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_account_id CostProfile#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Master Payer Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#master_payer_arn CostProfile#master_payer_arn}
  */
  readonly masterPayerArn?: string;
}

export function costProfileSpecInstallationParamsAwsCurIntegrationToTerraform(struct?: CostProfileSpecInstallationParamsAwsCurIntegrationOutputReference | CostProfileSpecInstallationParamsAwsCurIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    athena_bucket_name: cdktf.stringToTerraform(struct!.athenaBucketName),
    athena_database: cdktf.stringToTerraform(struct!.athenaDatabase),
    athena_region: cdktf.stringToTerraform(struct!.athenaRegion),
    athena_table: cdktf.stringToTerraform(struct!.athenaTable),
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    master_payer_arn: cdktf.stringToTerraform(struct!.masterPayerArn),
  }
}


export function costProfileSpecInstallationParamsAwsCurIntegrationToHclTerraform(struct?: CostProfileSpecInstallationParamsAwsCurIntegrationOutputReference | CostProfileSpecInstallationParamsAwsCurIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    athena_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.athenaBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    athena_database: {
      value: cdktf.stringToHclTerraform(struct!.athenaDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    athena_region: {
      value: cdktf.stringToHclTerraform(struct!.athenaRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    athena_table: {
      value: cdktf.stringToHclTerraform(struct!.athenaTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_account_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_payer_arn: {
      value: cdktf.stringToHclTerraform(struct!.masterPayerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAwsCurIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAwsCurIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._athenaBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaBucketName = this._athenaBucketName;
    }
    if (this._athenaDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaDatabase = this._athenaDatabase;
    }
    if (this._athenaRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaRegion = this._athenaRegion;
    }
    if (this._athenaTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaTable = this._athenaTable;
    }
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._masterPayerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPayerArn = this._masterPayerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAwsCurIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._athenaBucketName = undefined;
      this._athenaDatabase = undefined;
      this._athenaRegion = undefined;
      this._athenaTable = undefined;
      this._awsAccountId = undefined;
      this._masterPayerArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._athenaBucketName = value.athenaBucketName;
      this._athenaDatabase = value.athenaDatabase;
      this._athenaRegion = value.athenaRegion;
      this._athenaTable = value.athenaTable;
      this._awsAccountId = value.awsAccountId;
      this._masterPayerArn = value.masterPayerArn;
    }
  }

  // athena_bucket_name - computed: false, optional: true, required: false
  private _athenaBucketName?: string; 
  public get athenaBucketName() {
    return this.getStringAttribute('athena_bucket_name');
  }
  public set athenaBucketName(value: string) {
    this._athenaBucketName = value;
  }
  public resetAthenaBucketName() {
    this._athenaBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaBucketNameInput() {
    return this._athenaBucketName;
  }

  // athena_database - computed: false, optional: true, required: false
  private _athenaDatabase?: string; 
  public get athenaDatabase() {
    return this.getStringAttribute('athena_database');
  }
  public set athenaDatabase(value: string) {
    this._athenaDatabase = value;
  }
  public resetAthenaDatabase() {
    this._athenaDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaDatabaseInput() {
    return this._athenaDatabase;
  }

  // athena_region - computed: false, optional: true, required: false
  private _athenaRegion?: string; 
  public get athenaRegion() {
    return this.getStringAttribute('athena_region');
  }
  public set athenaRegion(value: string) {
    this._athenaRegion = value;
  }
  public resetAthenaRegion() {
    this._athenaRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaRegionInput() {
    return this._athenaRegion;
  }

  // athena_table - computed: false, optional: true, required: false
  private _athenaTable?: string; 
  public get athenaTable() {
    return this.getStringAttribute('athena_table');
  }
  public set athenaTable(value: string) {
    this._athenaTable = value;
  }
  public resetAthenaTable() {
    this._athenaTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaTableInput() {
    return this._athenaTable;
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // master_payer_arn - computed: false, optional: true, required: false
  private _masterPayerArn?: string; 
  public get masterPayerArn() {
    return this.getStringAttribute('master_payer_arn');
  }
  public set masterPayerArn(value: string) {
    this._masterPayerArn = value;
  }
  public resetMasterPayerArn() {
    this._masterPayerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPayerArnInput() {
    return this._masterPayerArn;
  }
}
export interface CostProfileSpecInstallationParamsAwsSpotIntegration {
  /**
  * Aws Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_account_id CostProfile#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Aws Spot Data Bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_spot_data_bucket CostProfile#aws_spot_data_bucket}
  */
  readonly awsSpotDataBucket?: string;
  /**
  * Aws Spot Data Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_spot_data_prefix CostProfile#aws_spot_data_prefix}
  */
  readonly awsSpotDataPrefix?: string;
  /**
  * Aws Spot Data Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_spot_data_region CostProfile#aws_spot_data_region}
  */
  readonly awsSpotDataRegion?: string;
  /**
  * Aws Spot Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#spot_label CostProfile#spot_label}
  */
  readonly spotLabel?: string;
  /**
  * Aws Spot Label Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#spot_label_value CostProfile#spot_label_value}
  */
  readonly spotLabelValue?: string;
}

export function costProfileSpecInstallationParamsAwsSpotIntegrationToTerraform(struct?: CostProfileSpecInstallationParamsAwsSpotIntegrationOutputReference | CostProfileSpecInstallationParamsAwsSpotIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    aws_spot_data_bucket: cdktf.stringToTerraform(struct!.awsSpotDataBucket),
    aws_spot_data_prefix: cdktf.stringToTerraform(struct!.awsSpotDataPrefix),
    aws_spot_data_region: cdktf.stringToTerraform(struct!.awsSpotDataRegion),
    spot_label: cdktf.stringToTerraform(struct!.spotLabel),
    spot_label_value: cdktf.stringToTerraform(struct!.spotLabelValue),
  }
}


export function costProfileSpecInstallationParamsAwsSpotIntegrationToHclTerraform(struct?: CostProfileSpecInstallationParamsAwsSpotIntegrationOutputReference | CostProfileSpecInstallationParamsAwsSpotIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_spot_data_bucket: {
      value: cdktf.stringToHclTerraform(struct!.awsSpotDataBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_spot_data_prefix: {
      value: cdktf.stringToHclTerraform(struct!.awsSpotDataPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_spot_data_region: {
      value: cdktf.stringToHclTerraform(struct!.awsSpotDataRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_label: {
      value: cdktf.stringToHclTerraform(struct!.spotLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_label_value: {
      value: cdktf.stringToHclTerraform(struct!.spotLabelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAwsSpotIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAwsSpotIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._awsSpotDataBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSpotDataBucket = this._awsSpotDataBucket;
    }
    if (this._awsSpotDataPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSpotDataPrefix = this._awsSpotDataPrefix;
    }
    if (this._awsSpotDataRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSpotDataRegion = this._awsSpotDataRegion;
    }
    if (this._spotLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotLabel = this._spotLabel;
    }
    if (this._spotLabelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotLabelValue = this._spotLabelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAwsSpotIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccountId = undefined;
      this._awsSpotDataBucket = undefined;
      this._awsSpotDataPrefix = undefined;
      this._awsSpotDataRegion = undefined;
      this._spotLabel = undefined;
      this._spotLabelValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccountId = value.awsAccountId;
      this._awsSpotDataBucket = value.awsSpotDataBucket;
      this._awsSpotDataPrefix = value.awsSpotDataPrefix;
      this._awsSpotDataRegion = value.awsSpotDataRegion;
      this._spotLabel = value.spotLabel;
      this._spotLabelValue = value.spotLabelValue;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_spot_data_bucket - computed: false, optional: true, required: false
  private _awsSpotDataBucket?: string; 
  public get awsSpotDataBucket() {
    return this.getStringAttribute('aws_spot_data_bucket');
  }
  public set awsSpotDataBucket(value: string) {
    this._awsSpotDataBucket = value;
  }
  public resetAwsSpotDataBucket() {
    this._awsSpotDataBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSpotDataBucketInput() {
    return this._awsSpotDataBucket;
  }

  // aws_spot_data_prefix - computed: false, optional: true, required: false
  private _awsSpotDataPrefix?: string; 
  public get awsSpotDataPrefix() {
    return this.getStringAttribute('aws_spot_data_prefix');
  }
  public set awsSpotDataPrefix(value: string) {
    this._awsSpotDataPrefix = value;
  }
  public resetAwsSpotDataPrefix() {
    this._awsSpotDataPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSpotDataPrefixInput() {
    return this._awsSpotDataPrefix;
  }

  // aws_spot_data_region - computed: false, optional: true, required: false
  private _awsSpotDataRegion?: string; 
  public get awsSpotDataRegion() {
    return this.getStringAttribute('aws_spot_data_region');
  }
  public set awsSpotDataRegion(value: string) {
    this._awsSpotDataRegion = value;
  }
  public resetAwsSpotDataRegion() {
    this._awsSpotDataRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSpotDataRegionInput() {
    return this._awsSpotDataRegion;
  }

  // spot_label - computed: false, optional: true, required: false
  private _spotLabel?: string; 
  public get spotLabel() {
    return this.getStringAttribute('spot_label');
  }
  public set spotLabel(value: string) {
    this._spotLabel = value;
  }
  public resetSpotLabel() {
    this._spotLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotLabelInput() {
    return this._spotLabel;
  }

  // spot_label_value - computed: false, optional: true, required: false
  private _spotLabelValue?: string; 
  public get spotLabelValue() {
    return this.getStringAttribute('spot_label_value');
  }
  public set spotLabelValue(value: string) {
    this._spotLabelValue = value;
  }
  public resetSpotLabelValue() {
    this._spotLabelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotLabelValueInput() {
    return this._spotLabelValue;
  }
}
export interface CostProfileSpecInstallationParamsAws {
  /**
  * aws_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws_credentials CostProfile#aws_credentials}
  */
  readonly awsCredentials?: CostProfileSpecInstallationParamsAwsAwsCredentials;
  /**
  * cur_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cur_integration CostProfile#cur_integration}
  */
  readonly curIntegration?: CostProfileSpecInstallationParamsAwsCurIntegration;
  /**
  * spot_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#spot_integration CostProfile#spot_integration}
  */
  readonly spotIntegration?: CostProfileSpecInstallationParamsAwsSpotIntegration;
}

export function costProfileSpecInstallationParamsAwsToTerraform(struct?: CostProfileSpecInstallationParamsAwsOutputReference | CostProfileSpecInstallationParamsAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_credentials: costProfileSpecInstallationParamsAwsAwsCredentialsToTerraform(struct!.awsCredentials),
    cur_integration: costProfileSpecInstallationParamsAwsCurIntegrationToTerraform(struct!.curIntegration),
    spot_integration: costProfileSpecInstallationParamsAwsSpotIntegrationToTerraform(struct!.spotIntegration),
  }
}


export function costProfileSpecInstallationParamsAwsToHclTerraform(struct?: CostProfileSpecInstallationParamsAwsOutputReference | CostProfileSpecInstallationParamsAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_credentials: {
      value: costProfileSpecInstallationParamsAwsAwsCredentialsToHclTerraform(struct!.awsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAwsAwsCredentialsList",
    },
    cur_integration: {
      value: costProfileSpecInstallationParamsAwsCurIntegrationToHclTerraform(struct!.curIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAwsCurIntegrationList",
    },
    spot_integration: {
      value: costProfileSpecInstallationParamsAwsSpotIntegrationToHclTerraform(struct!.spotIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAwsSpotIntegrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCredentials = this._awsCredentials?.internalValue;
    }
    if (this._curIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.curIntegration = this._curIntegration?.internalValue;
    }
    if (this._spotIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotIntegration = this._spotIntegration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCredentials.internalValue = undefined;
      this._curIntegration.internalValue = undefined;
      this._spotIntegration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCredentials.internalValue = value.awsCredentials;
      this._curIntegration.internalValue = value.curIntegration;
      this._spotIntegration.internalValue = value.spotIntegration;
    }
  }

  // aws_credentials - computed: false, optional: true, required: false
  private _awsCredentials = new CostProfileSpecInstallationParamsAwsAwsCredentialsOutputReference(this, "aws_credentials");
  public get awsCredentials() {
    return this._awsCredentials;
  }
  public putAwsCredentials(value: CostProfileSpecInstallationParamsAwsAwsCredentials) {
    this._awsCredentials.internalValue = value;
  }
  public resetAwsCredentials() {
    this._awsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredentialsInput() {
    return this._awsCredentials.internalValue;
  }

  // cur_integration - computed: false, optional: true, required: false
  private _curIntegration = new CostProfileSpecInstallationParamsAwsCurIntegrationOutputReference(this, "cur_integration");
  public get curIntegration() {
    return this._curIntegration;
  }
  public putCurIntegration(value: CostProfileSpecInstallationParamsAwsCurIntegration) {
    this._curIntegration.internalValue = value;
  }
  public resetCurIntegration() {
    this._curIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curIntegrationInput() {
    return this._curIntegration.internalValue;
  }

  // spot_integration - computed: false, optional: true, required: false
  private _spotIntegration = new CostProfileSpecInstallationParamsAwsSpotIntegrationOutputReference(this, "spot_integration");
  public get spotIntegration() {
    return this._spotIntegration;
  }
  public putSpotIntegration(value: CostProfileSpecInstallationParamsAwsSpotIntegration) {
    this._spotIntegration.internalValue = value;
  }
  public resetSpotIntegration() {
    this._spotIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotIntegrationInput() {
    return this._spotIntegration.internalValue;
  }
}
export interface CostProfileSpecInstallationParamsAzureCustomPricingSpotInstance {
  /**
  * spot Lable 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#spot_label CostProfile#spot_label}
  */
  readonly spotLabel?: string;
  /**
  * spot Label Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#spot_label_value CostProfile#spot_label_value}
  */
  readonly spotLabelValue?: string;
}

export function costProfileSpecInstallationParamsAzureCustomPricingSpotInstanceToTerraform(struct?: CostProfileSpecInstallationParamsAzureCustomPricingSpotInstanceOutputReference | CostProfileSpecInstallationParamsAzureCustomPricingSpotInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spot_label: cdktf.stringToTerraform(struct!.spotLabel),
    spot_label_value: cdktf.stringToTerraform(struct!.spotLabelValue),
  }
}


export function costProfileSpecInstallationParamsAzureCustomPricingSpotInstanceToHclTerraform(struct?: CostProfileSpecInstallationParamsAzureCustomPricingSpotInstanceOutputReference | CostProfileSpecInstallationParamsAzureCustomPricingSpotInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spot_label: {
      value: cdktf.stringToHclTerraform(struct!.spotLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_label_value: {
      value: cdktf.stringToHclTerraform(struct!.spotLabelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAzureCustomPricingSpotInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAzureCustomPricingSpotInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spotLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotLabel = this._spotLabel;
    }
    if (this._spotLabelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotLabelValue = this._spotLabelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAzureCustomPricingSpotInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spotLabel = undefined;
      this._spotLabelValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spotLabel = value.spotLabel;
      this._spotLabelValue = value.spotLabelValue;
    }
  }

  // spot_label - computed: false, optional: true, required: false
  private _spotLabel?: string; 
  public get spotLabel() {
    return this.getStringAttribute('spot_label');
  }
  public set spotLabel(value: string) {
    this._spotLabel = value;
  }
  public resetSpotLabel() {
    this._spotLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotLabelInput() {
    return this._spotLabel;
  }

  // spot_label_value - computed: false, optional: true, required: false
  private _spotLabelValue?: string; 
  public get spotLabelValue() {
    return this.getStringAttribute('spot_label_value');
  }
  public set spotLabelValue(value: string) {
    this._spotLabelValue = value;
  }
  public resetSpotLabelValue() {
    this._spotLabelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotLabelValueInput() {
    return this._spotLabelValue;
  }
}
export interface CostProfileSpecInstallationParamsAzureCustomPricing {
  /**
  * Azure Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#azure_client_id CostProfile#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * Azure Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#azure_client_secret CostProfile#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Azure Subscription ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#azure_subscription_id CostProfile#azure_subscription_id}
  */
  readonly azureSubscriptionId?: string;
  /**
  * Azure Tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#azure_tenant_id CostProfile#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Billing Account ID. DEPRECATED. Will not be used even if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#billing_account_id CostProfile#billing_account_id}
  */
  readonly billingAccountId?: string;
  /**
  * cloud credentials id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cloud_credentials_name CostProfile#cloud_credentials_name}
  */
  readonly cloudCredentialsName?: string;
  /**
  * Use Cluster Credntial when BP is attached to the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cluster_cred CostProfile#cluster_cred}
  */
  readonly clusterCred?: boolean | cdktf.IResolvable;
  /**
  * Offer ID. DEPRECATED. Will not be used even if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#offer_id CostProfile#offer_id}
  */
  readonly offerId?: string;
  /**
  * spot_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#spot_instance CostProfile#spot_instance}
  */
  readonly spotInstance?: CostProfileSpecInstallationParamsAzureCustomPricingSpotInstance;
}

export function costProfileSpecInstallationParamsAzureCustomPricingToTerraform(struct?: CostProfileSpecInstallationParamsAzureCustomPricingOutputReference | CostProfileSpecInstallationParamsAzureCustomPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_client_id: cdktf.stringToTerraform(struct!.azureClientId),
    azure_client_secret: cdktf.stringToTerraform(struct!.azureClientSecret),
    azure_subscription_id: cdktf.stringToTerraform(struct!.azureSubscriptionId),
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    billing_account_id: cdktf.stringToTerraform(struct!.billingAccountId),
    cloud_credentials_name: cdktf.stringToTerraform(struct!.cloudCredentialsName),
    cluster_cred: cdktf.booleanToTerraform(struct!.clusterCred),
    offer_id: cdktf.stringToTerraform(struct!.offerId),
    spot_instance: costProfileSpecInstallationParamsAzureCustomPricingSpotInstanceToTerraform(struct!.spotInstance),
  }
}


export function costProfileSpecInstallationParamsAzureCustomPricingToHclTerraform(struct?: CostProfileSpecInstallationParamsAzureCustomPricingOutputReference | CostProfileSpecInstallationParamsAzureCustomPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_client_id: {
      value: cdktf.stringToHclTerraform(struct!.azureClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.azureClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.azureSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billing_account_id: {
      value: cdktf.stringToHclTerraform(struct!.billingAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_credentials_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_cred: {
      value: cdktf.booleanToHclTerraform(struct!.clusterCred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    offer_id: {
      value: cdktf.stringToHclTerraform(struct!.offerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance: {
      value: costProfileSpecInstallationParamsAzureCustomPricingSpotInstanceToHclTerraform(struct!.spotInstance),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAzureCustomPricingSpotInstanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAzureCustomPricingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAzureCustomPricing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientId = this._azureClientId;
    }
    if (this._azureClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientSecret = this._azureClientSecret;
    }
    if (this._azureSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSubscriptionId = this._azureSubscriptionId;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._billingAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingAccountId = this._billingAccountId;
    }
    if (this._cloudCredentialsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialsName = this._cloudCredentialsName;
    }
    if (this._clusterCred !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCred = this._clusterCred;
    }
    if (this._offerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.offerId = this._offerId;
    }
    if (this._spotInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstance = this._spotInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAzureCustomPricing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureClientId = undefined;
      this._azureClientSecret = undefined;
      this._azureSubscriptionId = undefined;
      this._azureTenantId = undefined;
      this._billingAccountId = undefined;
      this._cloudCredentialsName = undefined;
      this._clusterCred = undefined;
      this._offerId = undefined;
      this._spotInstance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureClientId = value.azureClientId;
      this._azureClientSecret = value.azureClientSecret;
      this._azureSubscriptionId = value.azureSubscriptionId;
      this._azureTenantId = value.azureTenantId;
      this._billingAccountId = value.billingAccountId;
      this._cloudCredentialsName = value.cloudCredentialsName;
      this._clusterCred = value.clusterCred;
      this._offerId = value.offerId;
      this._spotInstance.internalValue = value.spotInstance;
    }
  }

  // azure_client_id - computed: false, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_subscription_id - computed: false, optional: true, required: false
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  public resetAzureSubscriptionId() {
    this._azureSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // billing_account_id - computed: false, optional: true, required: false
  private _billingAccountId?: string; 
  public get billingAccountId() {
    return this.getStringAttribute('billing_account_id');
  }
  public set billingAccountId(value: string) {
    this._billingAccountId = value;
  }
  public resetBillingAccountId() {
    this._billingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountIdInput() {
    return this._billingAccountId;
  }

  // cloud_credentials_name - computed: false, optional: true, required: false
  private _cloudCredentialsName?: string; 
  public get cloudCredentialsName() {
    return this.getStringAttribute('cloud_credentials_name');
  }
  public set cloudCredentialsName(value: string) {
    this._cloudCredentialsName = value;
  }
  public resetCloudCredentialsName() {
    this._cloudCredentialsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsNameInput() {
    return this._cloudCredentialsName;
  }

  // cluster_cred - computed: false, optional: true, required: false
  private _clusterCred?: boolean | cdktf.IResolvable; 
  public get clusterCred() {
    return this.getBooleanAttribute('cluster_cred');
  }
  public set clusterCred(value: boolean | cdktf.IResolvable) {
    this._clusterCred = value;
  }
  public resetClusterCred() {
    this._clusterCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCredInput() {
    return this._clusterCred;
  }

  // offer_id - computed: false, optional: true, required: false
  private _offerId?: string; 
  public get offerId() {
    return this.getStringAttribute('offer_id');
  }
  public set offerId(value: string) {
    this._offerId = value;
  }
  public resetOfferId() {
    this._offerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerIdInput() {
    return this._offerId;
  }

  // spot_instance - computed: false, optional: true, required: false
  private _spotInstance = new CostProfileSpecInstallationParamsAzureCustomPricingSpotInstanceOutputReference(this, "spot_instance");
  public get spotInstance() {
    return this._spotInstance;
  }
  public putSpotInstance(value: CostProfileSpecInstallationParamsAzureCustomPricingSpotInstance) {
    this._spotInstance.internalValue = value;
  }
  public resetSpotInstance() {
    this._spotInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceInput() {
    return this._spotInstance.internalValue;
  }
}
export interface CostProfileSpecInstallationParamsAzureGpuEstimates {
  /**
  * gpu Lable 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#gpu_label CostProfile#gpu_label}
  */
  readonly gpuLabel?: string;
  /**
  * gpu Label Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#gpu_label_value CostProfile#gpu_label_value}
  */
  readonly gpuLabelValue?: string;
}

export function costProfileSpecInstallationParamsAzureGpuEstimatesToTerraform(struct?: CostProfileSpecInstallationParamsAzureGpuEstimatesOutputReference | CostProfileSpecInstallationParamsAzureGpuEstimates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_label: cdktf.stringToTerraform(struct!.gpuLabel),
    gpu_label_value: cdktf.stringToTerraform(struct!.gpuLabelValue),
  }
}


export function costProfileSpecInstallationParamsAzureGpuEstimatesToHclTerraform(struct?: CostProfileSpecInstallationParamsAzureGpuEstimatesOutputReference | CostProfileSpecInstallationParamsAzureGpuEstimates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_label: {
      value: cdktf.stringToHclTerraform(struct!.gpuLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_label_value: {
      value: cdktf.stringToHclTerraform(struct!.gpuLabelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAzureGpuEstimatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAzureGpuEstimates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuLabel = this._gpuLabel;
    }
    if (this._gpuLabelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuLabelValue = this._gpuLabelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAzureGpuEstimates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuLabel = undefined;
      this._gpuLabelValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuLabel = value.gpuLabel;
      this._gpuLabelValue = value.gpuLabelValue;
    }
  }

  // gpu_label - computed: false, optional: true, required: false
  private _gpuLabel?: string; 
  public get gpuLabel() {
    return this.getStringAttribute('gpu_label');
  }
  public set gpuLabel(value: string) {
    this._gpuLabel = value;
  }
  public resetGpuLabel() {
    this._gpuLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuLabelInput() {
    return this._gpuLabel;
  }

  // gpu_label_value - computed: false, optional: true, required: false
  private _gpuLabelValue?: string; 
  public get gpuLabelValue() {
    return this.getStringAttribute('gpu_label_value');
  }
  public set gpuLabelValue(value: string) {
    this._gpuLabelValue = value;
  }
  public resetGpuLabelValue() {
    this._gpuLabelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuLabelValueInput() {
    return this._gpuLabelValue;
  }
}
export interface CostProfileSpecInstallationParamsAzure {
  /**
  * custom_pricing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#custom_pricing CostProfile#custom_pricing}
  */
  readonly customPricing?: CostProfileSpecInstallationParamsAzureCustomPricing;
  /**
  * gpu_estimates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#gpu_estimates CostProfile#gpu_estimates}
  */
  readonly gpuEstimates?: CostProfileSpecInstallationParamsAzureGpuEstimates;
}

export function costProfileSpecInstallationParamsAzureToTerraform(struct?: CostProfileSpecInstallationParamsAzureOutputReference | CostProfileSpecInstallationParamsAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pricing: costProfileSpecInstallationParamsAzureCustomPricingToTerraform(struct!.customPricing),
    gpu_estimates: costProfileSpecInstallationParamsAzureGpuEstimatesToTerraform(struct!.gpuEstimates),
  }
}


export function costProfileSpecInstallationParamsAzureToHclTerraform(struct?: CostProfileSpecInstallationParamsAzureOutputReference | CostProfileSpecInstallationParamsAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pricing: {
      value: costProfileSpecInstallationParamsAzureCustomPricingToHclTerraform(struct!.customPricing),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAzureCustomPricingList",
    },
    gpu_estimates: {
      value: costProfileSpecInstallationParamsAzureGpuEstimatesToHclTerraform(struct!.gpuEstimates),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAzureGpuEstimatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPricing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPricing = this._customPricing?.internalValue;
    }
    if (this._gpuEstimates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuEstimates = this._gpuEstimates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customPricing.internalValue = undefined;
      this._gpuEstimates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customPricing.internalValue = value.customPricing;
      this._gpuEstimates.internalValue = value.gpuEstimates;
    }
  }

  // custom_pricing - computed: false, optional: true, required: false
  private _customPricing = new CostProfileSpecInstallationParamsAzureCustomPricingOutputReference(this, "custom_pricing");
  public get customPricing() {
    return this._customPricing;
  }
  public putCustomPricing(value: CostProfileSpecInstallationParamsAzureCustomPricing) {
    this._customPricing.internalValue = value;
  }
  public resetCustomPricing() {
    this._customPricing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPricingInput() {
    return this._customPricing.internalValue;
  }

  // gpu_estimates - computed: false, optional: true, required: false
  private _gpuEstimates = new CostProfileSpecInstallationParamsAzureGpuEstimatesOutputReference(this, "gpu_estimates");
  public get gpuEstimates() {
    return this._gpuEstimates;
  }
  public putGpuEstimates(value: CostProfileSpecInstallationParamsAzureGpuEstimates) {
    this._gpuEstimates.internalValue = value;
  }
  public resetGpuEstimates() {
    this._gpuEstimates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuEstimatesInput() {
    return this._gpuEstimates.internalValue;
  }
}
export interface CostProfileSpecInstallationParamsGcpGcpCredentials {
  /**
  * cloud credentials id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cloud_credentials_name CostProfile#cloud_credentials_name}
  */
  readonly cloudCredentialsName?: string;
  /**
  * Use Cluster Credntial when BP is attached to the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cluster_cred CostProfile#cluster_cred}
  */
  readonly clusterCred?: boolean | cdktf.IResolvable;
}

export function costProfileSpecInstallationParamsGcpGcpCredentialsToTerraform(struct?: CostProfileSpecInstallationParamsGcpGcpCredentialsOutputReference | CostProfileSpecInstallationParamsGcpGcpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_credentials_name: cdktf.stringToTerraform(struct!.cloudCredentialsName),
    cluster_cred: cdktf.booleanToTerraform(struct!.clusterCred),
  }
}


export function costProfileSpecInstallationParamsGcpGcpCredentialsToHclTerraform(struct?: CostProfileSpecInstallationParamsGcpGcpCredentialsOutputReference | CostProfileSpecInstallationParamsGcpGcpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_credentials_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_cred: {
      value: cdktf.booleanToHclTerraform(struct!.clusterCred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsGcpGcpCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsGcpGcpCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredentialsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialsName = this._cloudCredentialsName;
    }
    if (this._clusterCred !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCred = this._clusterCred;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsGcpGcpCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudCredentialsName = undefined;
      this._clusterCred = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudCredentialsName = value.cloudCredentialsName;
      this._clusterCred = value.clusterCred;
    }
  }

  // cloud_credentials_name - computed: false, optional: true, required: false
  private _cloudCredentialsName?: string; 
  public get cloudCredentialsName() {
    return this.getStringAttribute('cloud_credentials_name');
  }
  public set cloudCredentialsName(value: string) {
    this._cloudCredentialsName = value;
  }
  public resetCloudCredentialsName() {
    this._cloudCredentialsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsNameInput() {
    return this._cloudCredentialsName;
  }

  // cluster_cred - computed: false, optional: true, required: false
  private _clusterCred?: boolean | cdktf.IResolvable; 
  public get clusterCred() {
    return this.getBooleanAttribute('cluster_cred');
  }
  public set clusterCred(value: boolean | cdktf.IResolvable) {
    this._clusterCred = value;
  }
  public resetClusterCred() {
    this._clusterCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCredInput() {
    return this._clusterCred;
  }
}
export interface CostProfileSpecInstallationParamsGcp {
  /**
  * gcp_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#gcp_credentials CostProfile#gcp_credentials}
  */
  readonly gcpCredentials?: CostProfileSpecInstallationParamsGcpGcpCredentials;
}

export function costProfileSpecInstallationParamsGcpToTerraform(struct?: CostProfileSpecInstallationParamsGcpOutputReference | CostProfileSpecInstallationParamsGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_credentials: costProfileSpecInstallationParamsGcpGcpCredentialsToTerraform(struct!.gcpCredentials),
  }
}


export function costProfileSpecInstallationParamsGcpToHclTerraform(struct?: CostProfileSpecInstallationParamsGcpOutputReference | CostProfileSpecInstallationParamsGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_credentials: {
      value: costProfileSpecInstallationParamsGcpGcpCredentialsToHclTerraform(struct!.gcpCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsGcpGcpCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpCredentials = this._gcpCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpCredentials.internalValue = value.gcpCredentials;
    }
  }

  // gcp_credentials - computed: false, optional: true, required: false
  private _gcpCredentials = new CostProfileSpecInstallationParamsGcpGcpCredentialsOutputReference(this, "gcp_credentials");
  public get gcpCredentials() {
    return this._gcpCredentials;
  }
  public putGcpCredentials(value: CostProfileSpecInstallationParamsGcpGcpCredentials) {
    this._gcpCredentials.internalValue = value;
  }
  public resetGcpCredentials() {
    this._gcpCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredentialsInput() {
    return this._gcpCredentials.internalValue;
  }
}
export interface CostProfileSpecInstallationParamsOther {
  /**
  * The cost of cpu per hour 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#cpu CostProfile#cpu}
  */
  readonly cpu?: string;
  /**
  * The cost of gpu per hour 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#gpu CostProfile#gpu}
  */
  readonly gpu?: string;
  /**
  * The cost of memory per hour 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#memory CostProfile#memory}
  */
  readonly memory?: string;
}

export function costProfileSpecInstallationParamsOtherToTerraform(struct?: CostProfileSpecInstallationParamsOtherOutputReference | CostProfileSpecInstallationParamsOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    gpu: cdktf.stringToTerraform(struct!.gpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function costProfileSpecInstallationParamsOtherToHclTerraform(struct?: CostProfileSpecInstallationParamsOtherOutputReference | CostProfileSpecInstallationParamsOther): any {
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
    gpu: {
      value: cdktf.stringToHclTerraform(struct!.gpu),
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

export class CostProfileSpecInstallationParamsOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParamsOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._gpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpu = this._gpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParamsOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._gpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._gpu = value.gpu;
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

  // gpu - computed: false, optional: true, required: false
  private _gpu?: string; 
  public get gpu() {
    return this.getStringAttribute('gpu');
  }
  public set gpu(value: string) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
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
export interface CostProfileSpecInstallationParams {
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#aws CostProfile#aws}
  */
  readonly aws?: CostProfileSpecInstallationParamsAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#azure CostProfile#azure}
  */
  readonly azure?: CostProfileSpecInstallationParamsAzure;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#gcp CostProfile#gcp}
  */
  readonly gcp?: CostProfileSpecInstallationParamsGcp;
  /**
  * other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#other CostProfile#other}
  */
  readonly other?: CostProfileSpecInstallationParamsOther;
}

export function costProfileSpecInstallationParamsToTerraform(struct?: CostProfileSpecInstallationParamsOutputReference | CostProfileSpecInstallationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: costProfileSpecInstallationParamsAwsToTerraform(struct!.aws),
    azure: costProfileSpecInstallationParamsAzureToTerraform(struct!.azure),
    gcp: costProfileSpecInstallationParamsGcpToTerraform(struct!.gcp),
    other: costProfileSpecInstallationParamsOtherToTerraform(struct!.other),
  }
}


export function costProfileSpecInstallationParamsToHclTerraform(struct?: CostProfileSpecInstallationParamsOutputReference | CostProfileSpecInstallationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: costProfileSpecInstallationParamsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAwsList",
    },
    azure: {
      value: costProfileSpecInstallationParamsAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsAzureList",
    },
    gcp: {
      value: costProfileSpecInstallationParamsGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsGcpList",
    },
    other: {
      value: costProfileSpecInstallationParamsOtherToHclTerraform(struct!.other),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsOtherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecInstallationParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecInstallationParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._other?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpecInstallationParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._other.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._gcp.internalValue = value.gcp;
      this._other.internalValue = value.other;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new CostProfileSpecInstallationParamsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: CostProfileSpecInstallationParamsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new CostProfileSpecInstallationParamsAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: CostProfileSpecInstallationParamsAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new CostProfileSpecInstallationParamsGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: CostProfileSpecInstallationParamsGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // other - computed: false, optional: true, required: false
  private _other = new CostProfileSpecInstallationParamsOtherOutputReference(this, "other");
  public get other() {
    return this._other;
  }
  public putOther(value: CostProfileSpecInstallationParamsOther) {
    this._other.internalValue = value;
  }
  public resetOther() {
    this._other.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other.internalValue;
  }
}
export interface CostProfileSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#name CostProfile#name}
  */
  readonly name?: string;
}

export function costProfileSpecSharingProjectsToTerraform(struct?: CostProfileSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function costProfileSpecSharingProjectsToHclTerraform(struct?: CostProfileSpecSharingProjects | cdktf.IResolvable): any {
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

export class CostProfileSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CostProfileSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CostProfileSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class CostProfileSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : CostProfileSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): CostProfileSpecSharingProjectsOutputReference {
    return new CostProfileSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CostProfileSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#enabled CostProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#projects CostProfile#projects}
  */
  readonly projects?: CostProfileSpecSharingProjects[] | cdktf.IResolvable;
}

export function costProfileSpecSharingToTerraform(struct?: CostProfileSpecSharingOutputReference | CostProfileSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(costProfileSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function costProfileSpecSharingToHclTerraform(struct?: CostProfileSpecSharingOutputReference | CostProfileSpecSharing): any {
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
      value: cdktf.listMapperHcl(costProfileSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpecSharing | undefined {
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

  public set internalValue(value: CostProfileSpecSharing | undefined) {
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
  private _projects = new CostProfileSpecSharingProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: CostProfileSpecSharingProjects[] | cdktf.IResolvable) {
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
export interface CostProfileSpec {
  /**
  * provider type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#provider_type CostProfile#provider_type}
  */
  readonly providerType?: string;
  /**
  * version of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#version CostProfile#version}
  */
  readonly version?: string;
  /**
  * installation_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#installation_params CostProfile#installation_params}
  */
  readonly installationParams?: CostProfileSpecInstallationParams;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#sharing CostProfile#sharing}
  */
  readonly sharing?: CostProfileSpecSharing;
}

export function costProfileSpecToTerraform(struct?: CostProfileSpecOutputReference | CostProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_type: cdktf.stringToTerraform(struct!.providerType),
    version: cdktf.stringToTerraform(struct!.version),
    installation_params: costProfileSpecInstallationParamsToTerraform(struct!.installationParams),
    sharing: costProfileSpecSharingToTerraform(struct!.sharing),
  }
}


export function costProfileSpecToHclTerraform(struct?: CostProfileSpecOutputReference | CostProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_type: {
      value: cdktf.stringToHclTerraform(struct!.providerType),
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
    installation_params: {
      value: costProfileSpecInstallationParamsToHclTerraform(struct!.installationParams),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecInstallationParamsList",
    },
    sharing: {
      value: costProfileSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "CostProfileSpecSharingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostProfileSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostProfileSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._installationParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationParams = this._installationParams?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostProfileSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._providerType = undefined;
      this._version = undefined;
      this._installationParams.internalValue = undefined;
      this._sharing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._providerType = value.providerType;
      this._version = value.version;
      this._installationParams.internalValue = value.installationParams;
      this._sharing.internalValue = value.sharing;
    }
  }

  // provider_type - computed: false, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
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

  // installation_params - computed: false, optional: true, required: false
  private _installationParams = new CostProfileSpecInstallationParamsOutputReference(this, "installation_params");
  public get installationParams() {
    return this._installationParams;
  }
  public putInstallationParams(value: CostProfileSpecInstallationParams) {
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
  private _sharing = new CostProfileSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: CostProfileSpecSharing) {
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
export interface CostProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#create CostProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#delete CostProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#update CostProfile#update}
  */
  readonly update?: string;
}

export function costProfileTimeoutsToTerraform(struct?: CostProfileTimeouts | cdktf.IResolvable): any {
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


export function costProfileTimeoutsToHclTerraform(struct?: CostProfileTimeouts | cdktf.IResolvable): any {
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

export class CostProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CostProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CostProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile rafay_cost_profile}
*/
export class CostProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_cost_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CostProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CostProfile to import
  * @param importFromId The id of the existing CostProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CostProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_cost_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cost_profile rafay_cost_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CostProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_cost_profile',
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
  private _metadata = new CostProfileMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CostProfileMetadata) {
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
  private _spec = new CostProfileSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CostProfileSpec) {
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
  private _timeouts = new CostProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CostProfileTimeouts) {
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
      metadata: costProfileMetadataToTerraform(this._metadata.internalValue),
      spec: costProfileSpecToTerraform(this._spec.internalValue),
      timeouts: costProfileTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: costProfileMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CostProfileMetadataList",
      },
      spec: {
        value: costProfileSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CostProfileSpecList",
      },
      timeouts: {
        value: costProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CostProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
