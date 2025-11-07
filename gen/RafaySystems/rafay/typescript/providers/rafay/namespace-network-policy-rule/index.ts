// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceNetworkPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#id NamespaceNetworkPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#metadata NamespaceNetworkPolicyRule#metadata}
  */
  readonly metadata?: NamespaceNetworkPolicyRuleMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#spec NamespaceNetworkPolicyRule#spec}
  */
  readonly spec?: NamespaceNetworkPolicyRuleSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#timeouts NamespaceNetworkPolicyRule#timeouts}
  */
  readonly timeouts?: NamespaceNetworkPolicyRuleTimeouts;
}
export interface NamespaceNetworkPolicyRuleMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#id NamespaceNetworkPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#is_sso_user NamespaceNetworkPolicyRule#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#username NamespaceNetworkPolicyRule#username}
  */
  readonly username?: string;
}

export function namespaceNetworkPolicyRuleMetadataCreatedByToTerraform(struct?: NamespaceNetworkPolicyRuleMetadataCreatedByOutputReference | NamespaceNetworkPolicyRuleMetadataCreatedBy): any {
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


export function namespaceNetworkPolicyRuleMetadataCreatedByToHclTerraform(struct?: NamespaceNetworkPolicyRuleMetadataCreatedByOutputReference | NamespaceNetworkPolicyRuleMetadataCreatedBy): any {
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

export class NamespaceNetworkPolicyRuleMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleMetadataCreatedBy | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleMetadataCreatedBy | undefined) {
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
export interface NamespaceNetworkPolicyRuleMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#id NamespaceNetworkPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#is_sso_user NamespaceNetworkPolicyRule#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#username NamespaceNetworkPolicyRule#username}
  */
  readonly username?: string;
}

export function namespaceNetworkPolicyRuleMetadataModifiedByToTerraform(struct?: NamespaceNetworkPolicyRuleMetadataModifiedByOutputReference | NamespaceNetworkPolicyRuleMetadataModifiedBy): any {
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


export function namespaceNetworkPolicyRuleMetadataModifiedByToHclTerraform(struct?: NamespaceNetworkPolicyRuleMetadataModifiedByOutputReference | NamespaceNetworkPolicyRuleMetadataModifiedBy): any {
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

export class NamespaceNetworkPolicyRuleMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleMetadataModifiedBy | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleMetadataModifiedBy | undefined) {
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
export interface NamespaceNetworkPolicyRuleMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#annotations NamespaceNetworkPolicyRule#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_name NamespaceNetworkPolicyRule#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#labels NamespaceNetworkPolicyRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#project NamespaceNetworkPolicyRule#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#created_by NamespaceNetworkPolicyRule#created_by}
  */
  readonly createdBy?: NamespaceNetworkPolicyRuleMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#modified_by NamespaceNetworkPolicyRule#modified_by}
  */
  readonly modifiedBy?: NamespaceNetworkPolicyRuleMetadataModifiedBy;
}

export function namespaceNetworkPolicyRuleMetadataToTerraform(struct?: NamespaceNetworkPolicyRuleMetadataOutputReference | NamespaceNetworkPolicyRuleMetadata): any {
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
    created_by: namespaceNetworkPolicyRuleMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: namespaceNetworkPolicyRuleMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function namespaceNetworkPolicyRuleMetadataToHclTerraform(struct?: NamespaceNetworkPolicyRuleMetadataOutputReference | NamespaceNetworkPolicyRuleMetadata): any {
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
      value: namespaceNetworkPolicyRuleMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleMetadataCreatedByList",
    },
    modified_by: {
      value: namespaceNetworkPolicyRuleMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleMetadata | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleMetadata | undefined) {
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
  private _createdBy = new NamespaceNetworkPolicyRuleMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: NamespaceNetworkPolicyRuleMetadataCreatedBy) {
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
  private _modifiedBy = new NamespaceNetworkPolicyRuleMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: NamespaceNetworkPolicyRuleMetadataModifiedBy) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPath {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPath): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPath | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPath | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOptions) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmap {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmap): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmap | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmap | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOptions) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactConfiguration {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactConfiguration): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactConfiguration | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfiguration | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOptions) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactPathsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths | cdktf.IResolvable): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths | cdktf.IResolvable | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOptions) {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsList extends cdktf.ComplexList {
  public internalValue? : NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths[] | cdktf.IResolvable

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
  public get(index: number): NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOutputReference {
    return new NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactSecret {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactSecretToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactSecret): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactSecret | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecret | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOptions) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulset {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulset): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulset | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulset | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOptions) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths | cdktf.IResolvable): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths | cdktf.IResolvable | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOptions) {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsList extends cdktf.ComplexList {
  public internalValue? : NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths[] | cdktf.IResolvable

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
  public get(index: number): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOutputReference {
    return new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverride): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverride | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#jsonschema NamespaceNetworkPolicyRule#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#uischema NamespaceNetworkPolicyRule#uischema}
  */
  readonly uischema?: string;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchema): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchema | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchema | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#display_metadata NamespaceNetworkPolicyRule#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#required NamespaceNetworkPolicyRule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#override NamespaceNetworkPolicyRule#override}
  */
  readonly override?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#schema NamespaceNetworkPolicyRule#schema}
  */
  readonly schema?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchema;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToTerraform(struct!.override),
    schema: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptions): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideList",
    },
    schema: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptions | undefined) {
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
  private _override = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOverride) {
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
  private _schema = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsSchema) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#data NamespaceNetworkPolicyRule#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#mount_path NamespaceNetworkPolicyRule#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sensitive NamespaceNetworkPolicyRule#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths | cdktf.IResolvable | undefined) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOptions) {
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

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsList extends cdktf.ComplexList {
  public internalValue? : NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths[] | cdktf.IResolvable

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
  public get(index: number): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOutputReference {
    return new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRef {
  /**
  * name of the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#repository NamespaceNetworkPolicyRule#repository}
  */
  readonly repository?: string;
  /**
  * branch or tag in the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#revision NamespaceNetworkPolicyRule#revision}
  */
  readonly revision?: string;
  /**
  * values_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#values_paths NamespaceNetworkPolicyRule#values_paths}
  */
  readonly valuesPaths?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths[] | cdktf.IResolvable;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
    values_paths: cdktf.listMapper(namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsToTerraform, true)(struct!.valuesPaths),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRef): any {
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
      value: cdktf.listMapperHcl(namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsToHclTerraform, true)(struct!.valuesPaths),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRef | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRef | undefined) {
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
  private _valuesPaths = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPathsList(this, "values_paths", false);
  public get valuesPaths() {
    return this._valuesPaths;
  }
  public putValuesPaths(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefValuesPaths[] | cdktf.IResolvable) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactArtifact {
  /**
  * name of the helm catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#catalog NamespaceNetworkPolicyRule#catalog}
  */
  readonly catalog?: string;
  /**
  * name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#chart_name NamespaceNetworkPolicyRule#chart_name}
  */
  readonly chartName?: string;
  /**
  * version of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#chart_version NamespaceNetworkPolicyRule#chart_version}
  */
  readonly chartVersion?: string;
  /**
  * project name of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#project NamespaceNetworkPolicyRule#project}
  */
  readonly project?: string;
  /**
  * name of the helm repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#repository NamespaceNetworkPolicyRule#repository}
  */
  readonly repository?: string;
  /**
  * branch or tag in the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#revision NamespaceNetworkPolicyRule#revision}
  */
  readonly revision?: string;
  /**
  * chart_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#chart_path NamespaceNetworkPolicyRule#chart_path}
  */
  readonly chartPath?: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPath;
  /**
  * configmap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#configmap NamespaceNetworkPolicyRule#configmap}
  */
  readonly configmap?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmap;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#configuration NamespaceNetworkPolicyRule#configuration}
  */
  readonly configuration?: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfiguration;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#paths NamespaceNetworkPolicyRule#paths}
  */
  readonly paths?: NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#secret NamespaceNetworkPolicyRule#secret}
  */
  readonly secret?: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecret;
  /**
  * statefulset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#statefulset NamespaceNetworkPolicyRule#statefulset}
  */
  readonly statefulset?: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulset;
  /**
  * values_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#values_paths NamespaceNetworkPolicyRule#values_paths}
  */
  readonly valuesPaths?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths[] | cdktf.IResolvable;
  /**
  * values_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#values_ref NamespaceNetworkPolicyRule#values_ref}
  */
  readonly valuesRef?: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRef;
}

export function namespaceNetworkPolicyRuleSpecArtifactArtifactToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    chart_name: cdktf.stringToTerraform(struct!.chartName),
    chart_version: cdktf.stringToTerraform(struct!.chartVersion),
    project: cdktf.stringToTerraform(struct!.project),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
    chart_path: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathToTerraform(struct!.chartPath),
    configmap: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapToTerraform(struct!.configmap),
    configuration: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationToTerraform(struct!.configuration),
    paths: cdktf.listMapper(namespaceNetworkPolicyRuleSpecArtifactArtifactPathsToTerraform, true)(struct!.paths),
    secret: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretToTerraform(struct!.secret),
    statefulset: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetToTerraform(struct!.statefulset),
    values_paths: cdktf.listMapper(namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsToTerraform, true)(struct!.valuesPaths),
    values_ref: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefToTerraform(struct!.valuesRef),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactArtifactToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactArtifactOutputReference | NamespaceNetworkPolicyRuleSpecArtifactArtifact): any {
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
    chart_path: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactChartPathToHclTerraform(struct!.chartPath),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathList",
    },
    configmap: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapToHclTerraform(struct!.configmap),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapList",
    },
    configuration: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationList",
    },
    paths: {
      value: cdktf.listMapperHcl(namespaceNetworkPolicyRuleSpecArtifactArtifactPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsList",
    },
    secret: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretList",
    },
    statefulset: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetToHclTerraform(struct!.statefulset),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetList",
    },
    values_paths: {
      value: cdktf.listMapperHcl(namespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsToHclTerraform, true)(struct!.valuesPaths),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsList",
    },
    values_ref: {
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefToHclTerraform(struct!.valuesRef),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactArtifact | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._chartName = undefined;
      this._chartVersion = undefined;
      this._project = undefined;
      this._repository = undefined;
      this._revision = undefined;
      this._chartPath.internalValue = undefined;
      this._configmap.internalValue = undefined;
      this._configuration.internalValue = undefined;
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
      this._project = value.project;
      this._repository = value.repository;
      this._revision = value.revision;
      this._chartPath.internalValue = value.chartPath;
      this._configmap.internalValue = value.configmap;
      this._configuration.internalValue = value.configuration;
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

  // chart_path - computed: false, optional: true, required: false
  private _chartPath = new NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPathOutputReference(this, "chart_path");
  public get chartPath() {
    return this._chartPath;
  }
  public putChartPath(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactChartPath) {
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
  private _configmap = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmapOutputReference(this, "configmap");
  public get configmap() {
    return this._configmap;
  }
  public putConfigmap(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigmap) {
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
  private _configuration = new NamespaceNetworkPolicyRuleSpecArtifactArtifactConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new NamespaceNetworkPolicyRuleSpecArtifactArtifactPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactPaths[] | cdktf.IResolvable) {
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
  private _secret = new NamespaceNetworkPolicyRuleSpecArtifactArtifactSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactSecret) {
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
  private _statefulset = new NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulsetOutputReference(this, "statefulset");
  public get statefulset() {
    return this._statefulset;
  }
  public putStatefulset(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactStatefulset) {
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
  private _valuesPaths = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPathsList(this, "values_paths", false);
  public get valuesPaths() {
    return this._valuesPaths;
  }
  public putValuesPaths(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesPaths[] | cdktf.IResolvable) {
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
  private _valuesRef = new NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRefOutputReference(this, "values_ref");
  public get valuesRef() {
    return this._valuesRef;
  }
  public putValuesRef(value: NamespaceNetworkPolicyRuleSpecArtifactArtifactValuesRef) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifactOptions {
  /**
  * deploy Helm artifact with atomic flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#atomic NamespaceNetworkPolicyRule#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * cleanup deployed resources when chart fails to deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#clean_up_on_fail NamespaceNetworkPolicyRule#clean_up_on_fail}
  */
  readonly cleanUpOnFail?: boolean | cdktf.IResolvable;
  /**
  * custom description for the release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#description NamespaceNetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * disable OpenAPI validation while deploying the YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#disable_open_api_validation NamespaceNetworkPolicyRule#disable_open_api_validation}
  */
  readonly disableOpenApiValidation?: boolean | cdktf.IResolvable;
  /**
  * deploy YAML artifact with force flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#force NamespaceNetworkPolicyRule#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * keep release history after uninstalling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#keep_history NamespaceNetworkPolicyRule#keep_history}
  */
  readonly keepHistory?: boolean | cdktf.IResolvable;
  /**
  * limit Helm artifact history
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#max_history NamespaceNetworkPolicyRule#max_history}
  */
  readonly maxHistory?: number;
  /**
  * deploy Helm artifact without hooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#no_hooks NamespaceNetworkPolicyRule#no_hooks}
  */
  readonly noHooks?: boolean | cdktf.IResolvable;
  /**
  * render sub chart notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#render_sub_chart_notes NamespaceNetworkPolicyRule#render_sub_chart_notes}
  */
  readonly renderSubChartNotes?: boolean | cdktf.IResolvable;
  /**
  * reset existing helm values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#reset_values NamespaceNetworkPolicyRule#reset_values}
  */
  readonly resetValues?: boolean | cdktf.IResolvable;
  /**
  * reuse existing values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#reuse_values NamespaceNetworkPolicyRule#reuse_values}
  */
  readonly reuseValues?: boolean | cdktf.IResolvable;
  /**
  * pass custom helm values as key=value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#set_string NamespaceNetworkPolicyRule#set_string}
  */
  readonly setString?: string[];
  /**
  * skip deploying crds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#skip_crd NamespaceNetworkPolicyRule#skip_crd}
  */
  readonly skipCrd?: boolean | cdktf.IResolvable;
  /**
  * timeout for waiting for the resources to become ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#timeout NamespaceNetworkPolicyRule#timeout}
  */
  readonly timeout?: string;
  /**
  * deploy Helm artifact with wait flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#wait NamespaceNetworkPolicyRule#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * deploy Helm artifact with --wait-for-jobs flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#wait_for_jobs NamespaceNetworkPolicyRule#wait_for_jobs}
  */
  readonly waitForJobs?: boolean | cdktf.IResolvable;
  /**
  * uninstall Helm artifact with --wait flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#wait_for_uninstall NamespaceNetworkPolicyRule#wait_for_uninstall}
  */
  readonly waitForUninstall?: boolean | cdktf.IResolvable;
}

export function namespaceNetworkPolicyRuleSpecArtifactOptionsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactOptions): any {
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


export function namespaceNetworkPolicyRuleSpecArtifactOptionsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactOptionsOutputReference | NamespaceNetworkPolicyRuleSpecArtifactOptions): any {
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

export class NamespaceNetworkPolicyRuleSpecArtifactOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifactOptions | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifactOptions | undefined) {
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
export interface NamespaceNetworkPolicyRuleSpecArtifact {
  /**
  * type of the artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#type NamespaceNetworkPolicyRule#type}
  */
  readonly type?: string;
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#artifact NamespaceNetworkPolicyRule#artifact}
  */
  readonly artifact?: NamespaceNetworkPolicyRuleSpecArtifactArtifact;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#options NamespaceNetworkPolicyRule#options}
  */
  readonly options?: NamespaceNetworkPolicyRuleSpecArtifactOptions;
}

export function namespaceNetworkPolicyRuleSpecArtifactToTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactOutputReference | NamespaceNetworkPolicyRuleSpecArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    artifact: namespaceNetworkPolicyRuleSpecArtifactArtifactToTerraform(struct!.artifact),
    options: namespaceNetworkPolicyRuleSpecArtifactOptionsToTerraform(struct!.options),
  }
}


export function namespaceNetworkPolicyRuleSpecArtifactToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecArtifactOutputReference | NamespaceNetworkPolicyRuleSpecArtifact): any {
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
      value: namespaceNetworkPolicyRuleSpecArtifactArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactArtifactList",
    },
    options: {
      value: namespaceNetworkPolicyRuleSpecArtifactOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecArtifact | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecArtifact | undefined) {
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
  private _artifact = new NamespaceNetworkPolicyRuleSpecArtifactArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: NamespaceNetworkPolicyRuleSpecArtifactArtifact) {
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
  private _options = new NamespaceNetworkPolicyRuleSpecArtifactOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NamespaceNetworkPolicyRuleSpecArtifactOptions) {
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
export interface NamespaceNetworkPolicyRuleSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#name NamespaceNetworkPolicyRule#name}
  */
  readonly name?: string;
}

export function namespaceNetworkPolicyRuleSpecSharingProjectsToTerraform(struct?: NamespaceNetworkPolicyRuleSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function namespaceNetworkPolicyRuleSpecSharingProjectsToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecSharingProjects | cdktf.IResolvable): any {
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

export class NamespaceNetworkPolicyRuleSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceNetworkPolicyRuleSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class NamespaceNetworkPolicyRuleSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : NamespaceNetworkPolicyRuleSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): NamespaceNetworkPolicyRuleSpecSharingProjectsOutputReference {
    return new NamespaceNetworkPolicyRuleSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceNetworkPolicyRuleSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#enabled NamespaceNetworkPolicyRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#projects NamespaceNetworkPolicyRule#projects}
  */
  readonly projects?: NamespaceNetworkPolicyRuleSpecSharingProjects[] | cdktf.IResolvable;
}

export function namespaceNetworkPolicyRuleSpecSharingToTerraform(struct?: NamespaceNetworkPolicyRuleSpecSharingOutputReference | NamespaceNetworkPolicyRuleSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(namespaceNetworkPolicyRuleSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function namespaceNetworkPolicyRuleSpecSharingToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecSharingOutputReference | NamespaceNetworkPolicyRuleSpecSharing): any {
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
      value: cdktf.listMapperHcl(namespaceNetworkPolicyRuleSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpecSharing | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleSpecSharing | undefined) {
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
  private _projects = new NamespaceNetworkPolicyRuleSpecSharingProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: NamespaceNetworkPolicyRuleSpecSharingProjects[] | cdktf.IResolvable) {
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
export interface NamespaceNetworkPolicyRuleSpec {
  /**
  * version of the namespace policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#version NamespaceNetworkPolicyRule#version}
  */
  readonly version?: string;
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#artifact NamespaceNetworkPolicyRule#artifact}
  */
  readonly artifact?: NamespaceNetworkPolicyRuleSpecArtifact;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#sharing NamespaceNetworkPolicyRule#sharing}
  */
  readonly sharing?: NamespaceNetworkPolicyRuleSpecSharing;
}

export function namespaceNetworkPolicyRuleSpecToTerraform(struct?: NamespaceNetworkPolicyRuleSpecOutputReference | NamespaceNetworkPolicyRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    artifact: namespaceNetworkPolicyRuleSpecArtifactToTerraform(struct!.artifact),
    sharing: namespaceNetworkPolicyRuleSpecSharingToTerraform(struct!.sharing),
  }
}


export function namespaceNetworkPolicyRuleSpecToHclTerraform(struct?: NamespaceNetworkPolicyRuleSpecOutputReference | NamespaceNetworkPolicyRuleSpec): any {
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
    artifact: {
      value: namespaceNetworkPolicyRuleSpecArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecArtifactList",
    },
    sharing: {
      value: namespaceNetworkPolicyRuleSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceNetworkPolicyRuleSpecSharingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNetworkPolicyRuleSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNetworkPolicyRuleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
      this._artifact.internalValue = undefined;
      this._sharing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
      this._artifact.internalValue = value.artifact;
      this._sharing.internalValue = value.sharing;
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

  // artifact - computed: false, optional: true, required: false
  private _artifact = new NamespaceNetworkPolicyRuleSpecArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: NamespaceNetworkPolicyRuleSpecArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new NamespaceNetworkPolicyRuleSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: NamespaceNetworkPolicyRuleSpecSharing) {
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
export interface NamespaceNetworkPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#create NamespaceNetworkPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#delete NamespaceNetworkPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#update NamespaceNetworkPolicyRule#update}
  */
  readonly update?: string;
}

export function namespaceNetworkPolicyRuleTimeoutsToTerraform(struct?: NamespaceNetworkPolicyRuleTimeouts | cdktf.IResolvable): any {
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


export function namespaceNetworkPolicyRuleTimeoutsToHclTerraform(struct?: NamespaceNetworkPolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class NamespaceNetworkPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceNetworkPolicyRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceNetworkPolicyRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule rafay_namespace_network_policy_rule}
*/
export class NamespaceNetworkPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_namespace_network_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamespaceNetworkPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamespaceNetworkPolicyRule to import
  * @param importFromId The id of the existing NamespaceNetworkPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamespaceNetworkPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_namespace_network_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/namespace_network_policy_rule rafay_namespace_network_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceNetworkPolicyRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NamespaceNetworkPolicyRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_namespace_network_policy_rule',
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
  private _metadata = new NamespaceNetworkPolicyRuleMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NamespaceNetworkPolicyRuleMetadata) {
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
  private _spec = new NamespaceNetworkPolicyRuleSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: NamespaceNetworkPolicyRuleSpec) {
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
  private _timeouts = new NamespaceNetworkPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NamespaceNetworkPolicyRuleTimeouts) {
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
      metadata: namespaceNetworkPolicyRuleMetadataToTerraform(this._metadata.internalValue),
      spec: namespaceNetworkPolicyRuleSpecToTerraform(this._spec.internalValue),
      timeouts: namespaceNetworkPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: namespaceNetworkPolicyRuleMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceNetworkPolicyRuleMetadataList",
      },
      spec: {
        value: namespaceNetworkPolicyRuleSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceNetworkPolicyRuleSpecList",
      },
      timeouts: {
        value: namespaceNetworkPolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceNetworkPolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
