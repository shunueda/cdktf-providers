import * as cdktf from 'cdktf';
export interface AksClusterV3MetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#is_sso_user AksClusterV3#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#username AksClusterV3#username}
  */
  readonly username?: string;
}

export function aksClusterV3MetadataCreatedByToTerraform(struct?: AksClusterV3MetadataCreatedByOutputReference | AksClusterV3MetadataCreatedBy): any {
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


export function aksClusterV3MetadataCreatedByToHclTerraform(struct?: AksClusterV3MetadataCreatedByOutputReference | AksClusterV3MetadataCreatedBy): any {
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

export class AksClusterV3MetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3MetadataCreatedBy | undefined {
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

  public set internalValue(value: AksClusterV3MetadataCreatedBy | undefined) {
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
export interface AksClusterV3MetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#is_sso_user AksClusterV3#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#username AksClusterV3#username}
  */
  readonly username?: string;
}

export function aksClusterV3MetadataModifiedByToTerraform(struct?: AksClusterV3MetadataModifiedByOutputReference | AksClusterV3MetadataModifiedBy): any {
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


export function aksClusterV3MetadataModifiedByToHclTerraform(struct?: AksClusterV3MetadataModifiedByOutputReference | AksClusterV3MetadataModifiedBy): any {
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

export class AksClusterV3MetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3MetadataModifiedBy | undefined {
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

  public set internalValue(value: AksClusterV3MetadataModifiedBy | undefined) {
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
export interface AksClusterV3Metadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#annotations AksClusterV3#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#description AksClusterV3#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#display_name AksClusterV3#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#labels AksClusterV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#project AksClusterV3#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#created_by AksClusterV3#created_by}
  */
  readonly createdBy?: AksClusterV3MetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#modified_by AksClusterV3#modified_by}
  */
  readonly modifiedBy?: AksClusterV3MetadataModifiedBy;
}

export function aksClusterV3MetadataToTerraform(struct?: AksClusterV3MetadataOutputReference | AksClusterV3Metadata): any {
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
    created_by: aksClusterV3MetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: aksClusterV3MetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function aksClusterV3MetadataToHclTerraform(struct?: AksClusterV3MetadataOutputReference | AksClusterV3Metadata): any {
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
      value: aksClusterV3MetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3MetadataCreatedByList",
    },
    modified_by: {
      value: aksClusterV3MetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3MetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3Metadata | undefined {
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

  public set internalValue(value: AksClusterV3Metadata | undefined) {
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
  private _createdBy = new AksClusterV3MetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: AksClusterV3MetadataCreatedBy) {
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
  private _modifiedBy = new AksClusterV3MetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: AksClusterV3MetadataModifiedBy) {
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
export interface AksClusterV3SpecBlueprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
}

export function aksClusterV3SpecBlueprintToTerraform(struct?: AksClusterV3SpecBlueprintOutputReference | AksClusterV3SpecBlueprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function aksClusterV3SpecBlueprintToHclTerraform(struct?: AksClusterV3SpecBlueprintOutputReference | AksClusterV3SpecBlueprint): any {
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

export class AksClusterV3SpecBlueprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecBlueprint | undefined {
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

  public set internalValue(value: AksClusterV3SpecBlueprint | undefined) {
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
export interface AksClusterV3SpecBlueprintConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
}

export function aksClusterV3SpecBlueprintConfigToTerraform(struct?: AksClusterV3SpecBlueprintConfigOutputReference | AksClusterV3SpecBlueprintConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function aksClusterV3SpecBlueprintConfigToHclTerraform(struct?: AksClusterV3SpecBlueprintConfigOutputReference | AksClusterV3SpecBlueprintConfig): any {
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

export class AksClusterV3SpecBlueprintConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecBlueprintConfig | undefined {
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

  public set internalValue(value: AksClusterV3SpecBlueprintConfig | undefined) {
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
export interface AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecret {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretToTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretOutputReference | AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretToHclTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretOutputReference | AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecret): any {
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

export class AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
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
export interface AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFrom {
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#secret AksClusterV3#secret}
  */
  readonly secret?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecret;
}

export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromToTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromOutputReference | AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretToTerraform(struct!.secret),
  }
}


export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromToHclTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromOutputReference | AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret.internalValue = value.secret;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles {
  /**
  * Append to the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#append AksClusterV3#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Content of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#content AksClusterV3#content}
  */
  readonly content?: string;
  /**
  * Encoding of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#encoding AksClusterV3#encoding}
  */
  readonly encoding?: string;
  /**
  * Owner of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#owner AksClusterV3#owner}
  */
  readonly owner?: string;
  /**
  * Path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#path AksClusterV3#path}
  */
  readonly path?: string;
  /**
  * Permissions of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#permissions AksClusterV3#permissions}
  */
  readonly permissions?: string;
  /**
  * content_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#content_from AksClusterV3#content_from}
  */
  readonly contentFrom?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFrom;
}

export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesToTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    content: cdktf.stringToTerraform(struct!.content),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    owner: cdktf.stringToTerraform(struct!.owner),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    content_from: aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromToTerraform(struct!.contentFrom),
  }
}


export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesToHclTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_from: {
      value: aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromToHclTerraform(struct!.contentFrom),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._contentFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFrom = this._contentFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._content = undefined;
      this._encoding = undefined;
      this._owner = undefined;
      this._path = undefined;
      this._permissions = undefined;
      this._contentFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._content = value.content;
      this._encoding = value.encoding;
      this._owner = value.owner;
      this._path = value.path;
      this._permissions = value.permissions;
      this._contentFrom.internalValue = value.contentFrom;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // content_from - computed: false, optional: true, required: false
  private _contentFrom = new AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFromOutputReference(this, "content_from");
  public get contentFrom() {
    return this._contentFrom;
  }
  public putContentFrom(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesContentFrom) {
    this._contentFrom.internalValue = value;
  }
  public resetContentFrom() {
    this._contentFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFromInput() {
    return this._contentFrom.internalValue;
  }
}

export class AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesOutputReference {
    return new AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigControlPlaneKubeadmConfigSpec {
  /**
  * Prekubeadmcommands to run on the nodepools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#pre_kubeadm_commands AksClusterV3#pre_kubeadm_commands}
  */
  readonly preKubeadmCommands?: string[];
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#files AksClusterV3#files}
  */
  readonly files?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecToTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecOutputReference | AksClusterV3SpecConfigControlPlaneKubeadmConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pre_kubeadm_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preKubeadmCommands),
    files: cdktf.listMapper(aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesToTerraform, true)(struct!.files),
  }
}


export function aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecToHclTerraform(struct?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecOutputReference | AksClusterV3SpecConfigControlPlaneKubeadmConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pre_kubeadm_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preKubeadmCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    files: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesToHclTerraform, true)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigControlPlaneKubeadmConfigSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preKubeadmCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.preKubeadmCommands = this._preKubeadmCommands;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preKubeadmCommands = undefined;
      this._files.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preKubeadmCommands = value.preKubeadmCommands;
      this._files.internalValue = value.files;
    }
  }

  // pre_kubeadm_commands - computed: false, optional: true, required: false
  private _preKubeadmCommands?: string[]; 
  public get preKubeadmCommands() {
    return this.getListAttribute('pre_kubeadm_commands');
  }
  public set preKubeadmCommands(value: string[]) {
    this._preKubeadmCommands = value;
  }
  public resetPreKubeadmCommands() {
    this._preKubeadmCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preKubeadmCommandsInput() {
    return this._preKubeadmCommands;
  }

  // files - computed: false, optional: true, required: false
  private _files = new AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }
}
export interface AksClusterV3SpecConfigControlPlane {
  /**
  * Hard Disk size of a node in GiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#disk_gi_b AksClusterV3#disk_gi_b}
  */
  readonly diskGiB?: number;
  /**
  * Node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#machine_count AksClusterV3#machine_count}
  */
  readonly machineCount?: number;
  /**
  * Memory size of a node in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#memory_mi_b AksClusterV3#memory_mi_b}
  */
  readonly memoryMiB?: number;
  /**
  * Cpu count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#num_cp_us AksClusterV3#num_cp_us}
  */
  readonly numCpUs?: number;
  /**
  * Public key to configure remote SSH access to the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#ssh_authorized_keys AksClusterV3#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys?: string[];
  /**
  * Kubernetes version of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
  /**
  * kubeadm_config_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kubeadm_config_spec AksClusterV3#kubeadm_config_spec}
  */
  readonly kubeadmConfigSpec?: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpec;
}

export function aksClusterV3SpecConfigControlPlaneToTerraform(struct?: AksClusterV3SpecConfigControlPlaneOutputReference | AksClusterV3SpecConfigControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_gi_b: cdktf.numberToTerraform(struct!.diskGiB),
    machine_count: cdktf.numberToTerraform(struct!.machineCount),
    memory_mi_b: cdktf.numberToTerraform(struct!.memoryMiB),
    num_cp_us: cdktf.numberToTerraform(struct!.numCpUs),
    ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshAuthorizedKeys),
    version: cdktf.stringToTerraform(struct!.version),
    kubeadm_config_spec: aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecToTerraform(struct!.kubeadmConfigSpec),
  }
}


export function aksClusterV3SpecConfigControlPlaneToHclTerraform(struct?: AksClusterV3SpecConfigControlPlaneOutputReference | AksClusterV3SpecConfigControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.diskGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_count: {
      value: cdktf.numberToHclTerraform(struct!.machineCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_mi_b: {
      value: cdktf.numberToHclTerraform(struct!.memoryMiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_cp_us: {
      value: cdktf.numberToHclTerraform(struct!.numCpUs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshAuthorizedKeys),
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
    kubeadm_config_spec: {
      value: aksClusterV3SpecConfigControlPlaneKubeadmConfigSpecToHclTerraform(struct!.kubeadmConfigSpec),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGiB = this._diskGiB;
    }
    if (this._machineCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineCount = this._machineCount;
    }
    if (this._memoryMiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMiB = this._memoryMiB;
    }
    if (this._numCpUs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpUs = this._numCpUs;
    }
    if (this._sshAuthorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthorizedKeys = this._sshAuthorizedKeys;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._kubeadmConfigSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeadmConfigSpec = this._kubeadmConfigSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskGiB = undefined;
      this._machineCount = undefined;
      this._memoryMiB = undefined;
      this._numCpUs = undefined;
      this._sshAuthorizedKeys = undefined;
      this._version = undefined;
      this._kubeadmConfigSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskGiB = value.diskGiB;
      this._machineCount = value.machineCount;
      this._memoryMiB = value.memoryMiB;
      this._numCpUs = value.numCpUs;
      this._sshAuthorizedKeys = value.sshAuthorizedKeys;
      this._version = value.version;
      this._kubeadmConfigSpec.internalValue = value.kubeadmConfigSpec;
    }
  }

  // disk_gi_b - computed: false, optional: true, required: false
  private _diskGiB?: number; 
  public get diskGiB() {
    return this.getNumberAttribute('disk_gi_b');
  }
  public set diskGiB(value: number) {
    this._diskGiB = value;
  }
  public resetDiskGiB() {
    this._diskGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGiBInput() {
    return this._diskGiB;
  }

  // machine_count - computed: false, optional: true, required: false
  private _machineCount?: number; 
  public get machineCount() {
    return this.getNumberAttribute('machine_count');
  }
  public set machineCount(value: number) {
    this._machineCount = value;
  }
  public resetMachineCount() {
    this._machineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCountInput() {
    return this._machineCount;
  }

  // memory_mi_b - computed: false, optional: true, required: false
  private _memoryMiB?: number; 
  public get memoryMiB() {
    return this.getNumberAttribute('memory_mi_b');
  }
  public set memoryMiB(value: number) {
    this._memoryMiB = value;
  }
  public resetMemoryMiB() {
    this._memoryMiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMiBInput() {
    return this._memoryMiB;
  }

  // num_cp_us - computed: false, optional: true, required: false
  private _numCpUs?: number; 
  public get numCpUs() {
    return this.getNumberAttribute('num_cp_us');
  }
  public set numCpUs(value: number) {
    this._numCpUs = value;
  }
  public resetNumCpUs() {
    this._numCpUs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpUsInput() {
    return this._numCpUs;
  }

  // ssh_authorized_keys - computed: false, optional: true, required: false
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  public resetSshAuthorizedKeys() {
    this._sshAuthorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
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

  // kubeadm_config_spec - computed: false, optional: true, required: false
  private _kubeadmConfigSpec = new AksClusterV3SpecConfigControlPlaneKubeadmConfigSpecOutputReference(this, "kubeadm_config_spec");
  public get kubeadmConfigSpec() {
    return this._kubeadmConfigSpec;
  }
  public putKubeadmConfigSpec(value: AksClusterV3SpecConfigControlPlaneKubeadmConfigSpec) {
    this._kubeadmConfigSpec.internalValue = value;
  }
  public resetKubeadmConfigSpec() {
    this._kubeadmConfigSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeadmConfigSpecInput() {
    return this._kubeadmConfigSpec.internalValue;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigMetadata {
  /**
  * EKSA Cluster Annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#annotations AksClusterV3#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * EKSA Cluster Labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#labels AksClusterV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * EKSA Cluster Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigMetadataToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigMetadataOutputReference | AksClusterV3SpecConfigEksaClusterConfigMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigMetadataToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigMetadataOutputReference | AksClusterV3SpecConfigEksaClusterConfigMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
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
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCilium {
  /**
  * PolicyEnforcementMode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#policy_enforcement_mode AksClusterV3#policy_enforcement_mode}
  */
  readonly policyEnforcementMode?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_enforcement_mode: cdktf.stringToTerraform(struct!.policyEnforcementMode),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.policyEnforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCilium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyEnforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyEnforcementMode = this._policyEnforcementMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCilium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyEnforcementMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyEnforcementMode = value.policyEnforcementMode;
    }
  }

  // policy_enforcement_mode - computed: false, optional: true, required: false
  private _policyEnforcementMode?: string; 
  public get policyEnforcementMode() {
    return this.getStringAttribute('policy_enforcement_mode');
  }
  public set policyEnforcementMode(value: string) {
    this._policyEnforcementMode = value;
  }
  public resetPolicyEnforcementMode() {
    this._policyEnforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementModeInput() {
    return this._policyEnforcementMode;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetd {
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfig {
  /**
  * cilium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cilium AksClusterV3#cilium}
  */
  readonly cilium?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCilium;
  /**
  * kindnetd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kindnetd AksClusterV3#kindnetd}
  */
  readonly kindnetd?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetd;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cilium: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumToTerraform(struct!.cilium),
    kindnetd: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdToTerraform(struct!.kindnetd),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cilium: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumToHclTerraform(struct!.cilium),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumList",
    },
    kindnetd: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdToHclTerraform(struct!.kindnetd),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cilium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cilium = this._cilium?.internalValue;
    }
    if (this._kindnetd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kindnetd = this._kindnetd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cilium.internalValue = undefined;
      this._kindnetd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cilium.internalValue = value.cilium;
      this._kindnetd.internalValue = value.kindnetd;
    }
  }

  // cilium - computed: false, optional: true, required: false
  private _cilium = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCiliumOutputReference(this, "cilium");
  public get cilium() {
    return this._cilium;
  }
  public putCilium(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigCilium) {
    this._cilium.internalValue = value;
  }
  public resetCilium() {
    this._cilium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciliumInput() {
    return this._cilium.internalValue;
  }

  // kindnetd - computed: false, optional: true, required: false
  private _kindnetd = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetdOutputReference(this, "kindnetd");
  public get kindnetd() {
    return this._kindnetd;
  }
  public putKindnetd(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigKindnetd) {
    this._kindnetd.internalValue = value;
  }
  public resetKindnetd() {
    this._kindnetd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindnetdInput() {
    return this._kindnetd.internalValue;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodes {
  /**
  * CidrMaskSize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cidr_mask_size AksClusterV3#cidr_mask_size}
  */
  readonly cidrMaskSize?: number;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_mask_size: cdktf.numberToTerraform(struct!.cidrMaskSize),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_mask_size: {
      value: cdktf.numberToHclTerraform(struct!.cidrMaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrMaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrMaskSize = this._cidrMaskSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrMaskSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrMaskSize = value.cidrMaskSize;
    }
  }

  // cidr_mask_size - computed: false, optional: true, required: false
  private _cidrMaskSize?: number; 
  public get cidrMaskSize() {
    return this.getNumberAttribute('cidr_mask_size');
  }
  public set cidrMaskSize(value: number) {
    this._cidrMaskSize = value;
  }
  public resetCidrMaskSize() {
    this._cidrMaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrMaskSizeInput() {
    return this._cidrMaskSize;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPods {
  /**
  * Subnet used by pods in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cidr_blocks AksClusterV3#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxy {
  /**
  * AllowInsecureBootstrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#allow_insecure_bootstrap AksClusterV3#allow_insecure_bootstrap}
  */
  readonly allowInsecureBootstrap?: boolean | cdktf.IResolvable;
  /**
  * BootStrapCA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#boot_strap_ca AksClusterV3#boot_strap_ca}
  */
  readonly bootStrapCa?: string;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * HttpProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#http_proxy AksClusterV3#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HttpsProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#https_proxy AksClusterV3#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * NoProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#no_proxy AksClusterV3#no_proxy}
  */
  readonly noProxy?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_bootstrap: cdktf.booleanToTerraform(struct!.allowInsecureBootstrap),
    boot_strap_ca: cdktf.stringToTerraform(struct!.bootStrapCa),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxy): any {
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
    boot_strap_ca: {
      value: cdktf.stringToHclTerraform(struct!.bootStrapCa),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureBootstrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureBootstrap = this._allowInsecureBootstrap;
    }
    if (this._bootStrapCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootStrapCa = this._bootStrapCa;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecureBootstrap = undefined;
      this._bootStrapCa = undefined;
      this._enabled = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecureBootstrap = value.allowInsecureBootstrap;
      this._bootStrapCa = value.bootStrapCa;
      this._enabled = value.enabled;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
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

  // boot_strap_ca - computed: false, optional: true, required: false
  private _bootStrapCa?: string; 
  public get bootStrapCa() {
    return this.getStringAttribute('boot_strap_ca');
  }
  public set bootStrapCa(value: string) {
    this._bootStrapCa = value;
  }
  public resetBootStrapCa() {
    this._bootStrapCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootStrapCaInput() {
    return this._bootStrapCa;
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
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServices {
  /**
  * Subnet used by pods in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cidr_blocks AksClusterV3#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetwork {
  /**
  * cni_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cni_config AksClusterV3#cni_config}
  */
  readonly cniConfig?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfig;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#nodes AksClusterV3#nodes}
  */
  readonly nodes?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodes;
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#pods AksClusterV3#pods}
  */
  readonly pods?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPods;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#proxy AksClusterV3#proxy}
  */
  readonly proxy?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxy;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#services AksClusterV3#services}
  */
  readonly services?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServices;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cni_config: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigToTerraform(struct!.cniConfig),
    nodes: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesToTerraform(struct!.nodes),
    pods: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsToTerraform(struct!.pods),
    proxy: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyToTerraform(struct!.proxy),
    services: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesToTerraform(struct!.services),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cni_config: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigToHclTerraform(struct!.cniConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigList",
    },
    nodes: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesToHclTerraform(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesList",
    },
    pods: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsList",
    },
    proxy: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyList",
    },
    services: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cniConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniConfig = this._cniConfig?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cniConfig.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cniConfig.internalValue = value.cniConfig;
      this._nodes.internalValue = value.nodes;
      this._pods.internalValue = value.pods;
      this._proxy.internalValue = value.proxy;
      this._services.internalValue = value.services;
    }
  }

  // cni_config - computed: false, optional: true, required: false
  private _cniConfig = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfigOutputReference(this, "cni_config");
  public get cniConfig() {
    return this._cniConfig;
  }
  public putCniConfig(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkCniConfig) {
    this._cniConfig.internalValue = value;
  }
  public resetCniConfig() {
    this._cniConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniConfigInput() {
    return this._cniConfig.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkNodes) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpoint {
  /**
  * A unique IP you want to use for the control plane in your EKS Anywhere cluster. Choose an IP in your network range that does not conflict with other machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#host AksClusterV3#host}
  */
  readonly host?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRef {
  /**
  * Refers to the kind of resource to be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * Refers to the name of resource to be associated with of above kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRef): any {
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

export class AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
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
export interface AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdate {
  /**
  * Maximum number of machines that can be scheduled above the desired number of machines - Default: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_surge AksClusterV3#max_surge}
  */
  readonly maxSurge?: number;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
    }
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
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategy {
  /**
  * Rollout strategy type - Default: 'RollingUpdate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#rolling_update AksClusterV3#rolling_update}
  */
  readonly rollingUpdate?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdate;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rolling_update: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategy): any {
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
    rolling_update: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._rollingUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._rollingUpdate.internalValue = value.rollingUpdate;
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

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfiguration {
  /**
  * Number of control plane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#count AksClusterV3#count}
  */
  readonly count?: number;
  /**
  * A list of labels to apply to the control plane nodes of the cluster. This is in addition to the labels that EKS Anywhere will add by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#labels AksClusterV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A list of taints to apply to the control plane nodes of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#taints AksClusterV3#taints}
  */
  readonly taints?: { [key: string]: string };
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#endpoint AksClusterV3#endpoint}
  */
  readonly endpoint?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpoint;
  /**
  * machine_group_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#machine_group_ref AksClusterV3#machine_group_ref}
  */
  readonly machineGroupRef?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRef;
  /**
  * rollout_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#rollout_strategy AksClusterV3#rollout_strategy}
  */
  readonly rolloutStrategy?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategy;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    taints: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.taints),
    endpoint: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointToTerraform(struct!.endpoint),
    machine_group_ref: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefToTerraform(struct!.machineGroupRef),
    rollout_strategy: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyToTerraform(struct!.rolloutStrategy),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfiguration): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    taints: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.taints),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointList",
    },
    machine_group_ref: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefToHclTerraform(struct!.machineGroupRef),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefList",
    },
    rollout_strategy: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyToHclTerraform(struct!.rolloutStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._machineGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineGroupRef = this._machineGroupRef?.internalValue;
    }
    if (this._rolloutStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutStrategy = this._rolloutStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._labels = undefined;
      this._taints = undefined;
      this._endpoint.internalValue = undefined;
      this._machineGroupRef.internalValue = undefined;
      this._rolloutStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._labels = value.labels;
      this._taints = value.taints;
      this._endpoint.internalValue = value.endpoint;
      this._machineGroupRef.internalValue = value.machineGroupRef;
      this._rolloutStrategy.internalValue = value.rolloutStrategy;
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

  // taints - computed: false, optional: true, required: false
  private _taints?: { [key: string]: string }; 
  public get taints() {
    return this.getStringMapAttribute('taints');
  }
  public set taints(value: { [key: string]: string }) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // machine_group_ref - computed: false, optional: true, required: false
  private _machineGroupRef = new AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRefOutputReference(this, "machine_group_ref");
  public get machineGroupRef() {
    return this._machineGroupRef;
  }
  public putMachineGroupRef(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationMachineGroupRef) {
    this._machineGroupRef.internalValue = value;
  }
  public resetMachineGroupRef() {
    this._machineGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGroupRefInput() {
    return this._machineGroupRef.internalValue;
  }

  // rollout_strategy - computed: false, optional: true, required: false
  private _rolloutStrategy = new AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategyOutputReference(this, "rollout_strategy");
  public get rolloutStrategy() {
    return this._rolloutStrategy;
  }
  public putRolloutStrategy(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationRolloutStrategy) {
    this._rolloutStrategy.internalValue = value;
  }
  public resetRolloutStrategy() {
    this._rolloutStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutStrategyInput() {
    return this._rolloutStrategy.internalValue;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRef {
  /**
  * Refers to the kind of resource to be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * Refers to the name of resource to be associated with of above kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRef): any {
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

export class AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
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
export interface AksClusterV3SpecConfigEksaClusterConfigSpecManagementCluster {
  /**
  * Identifies the name of the management cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecManagementCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecManagementCluster): any {
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

export class AksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecManagementCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecManagementCluster | undefined) {
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
export interface AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRef {
  /**
  * Refers to the kind of resource to be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * Refers to the name of resource to be associated with of above kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRef): any {
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

export class AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
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
export interface AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdate {
  /**
  * Maximum number of machines that can be scheduled above the desired number of machines - Default: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_surge AksClusterV3#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * Maximum number of machines that can be unavailable during the upgrade - Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_unavailable AksClusterV3#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
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
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategy {
  /**
  * Rollout strategy type - Default: 'RollingUpdate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#rolling_update AksClusterV3#rolling_update}
  */
  readonly rollingUpdate?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdate;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rolling_update: aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategy): any {
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
    rolling_update: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._rollingUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._rollingUpdate.internalValue = value.rollingUpdate;
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

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations {
  /**
  * Number of worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#count AksClusterV3#count}
  */
  readonly count?: number;
  /**
  * A list of labels to apply to the nodes in the worker node group. This is in addition to the labels that EKS Anywhere will add by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#labels AksClusterV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Worker node group's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * A list of taints to apply to the nodes in the worker node group. At least one node group must not have NoSchedule or NoExecute taints applied to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#taints AksClusterV3#taints}
  */
  readonly taints?: { [key: string]: string };
  /**
  * machine_group_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#machine_group_ref AksClusterV3#machine_group_ref}
  */
  readonly machineGroupRef?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRef;
  /**
  * rollout_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#rollout_strategy AksClusterV3#rollout_strategy}
  */
  readonly rolloutStrategy?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategy;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    taints: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.taints),
    machine_group_ref: aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefToTerraform(struct!.machineGroupRef),
    rollout_strategy: aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyToTerraform(struct!.rolloutStrategy),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations | cdktf.IResolvable): any {
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
    taints: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.taints),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    machine_group_ref: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefToHclTerraform(struct!.machineGroupRef),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefList",
    },
    rollout_strategy: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyToHclTerraform(struct!.rolloutStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    if (this._machineGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineGroupRef = this._machineGroupRef?.internalValue;
    }
    if (this._rolloutStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutStrategy = this._rolloutStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._taints = undefined;
      this._machineGroupRef.internalValue = undefined;
      this._rolloutStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._labels = value.labels;
      this._name = value.name;
      this._taints = value.taints;
      this._machineGroupRef.internalValue = value.machineGroupRef;
      this._rolloutStrategy.internalValue = value.rolloutStrategy;
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

  // taints - computed: false, optional: true, required: false
  private _taints?: { [key: string]: string }; 
  public get taints() {
    return this.getStringMapAttribute('taints');
  }
  public set taints(value: { [key: string]: string }) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // machine_group_ref - computed: false, optional: true, required: false
  private _machineGroupRef = new AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRefOutputReference(this, "machine_group_ref");
  public get machineGroupRef() {
    return this._machineGroupRef;
  }
  public putMachineGroupRef(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsMachineGroupRef) {
    this._machineGroupRef.internalValue = value;
  }
  public resetMachineGroupRef() {
    this._machineGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGroupRefInput() {
    return this._machineGroupRef.internalValue;
  }

  // rollout_strategy - computed: false, optional: true, required: false
  private _rolloutStrategy = new AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategyOutputReference(this, "rollout_strategy");
  public get rolloutStrategy() {
    return this._rolloutStrategy;
  }
  public putRolloutStrategy(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsRolloutStrategy) {
    this._rolloutStrategy.internalValue = value;
  }
  public resetRolloutStrategy() {
    this._rolloutStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutStrategyInput() {
    return this._rolloutStrategy.internalValue;
  }
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsOutputReference {
    return new AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfigSpec {
  /**
  * The Kubernetes version you want to use for your cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kubernetes_version AksClusterV3#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * cluster_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cluster_network AksClusterV3#cluster_network}
  */
  readonly clusterNetwork?: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetwork;
  /**
  * control_plane_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#control_plane_configuration AksClusterV3#control_plane_configuration}
  */
  readonly controlPlaneConfiguration?: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfiguration;
  /**
  * data_center_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#data_center_ref AksClusterV3#data_center_ref}
  */
  readonly dataCenterRef?: AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRef;
  /**
  * management_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#management_cluster AksClusterV3#management_cluster}
  */
  readonly managementCluster?: AksClusterV3SpecConfigEksaClusterConfigSpecManagementCluster;
  /**
  * worker_node_group_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#worker_node_group_configurations AksClusterV3#worker_node_group_configurations}
  */
  readonly workerNodeGroupConfigurations?: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigEksaClusterConfigSpecToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    cluster_network: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkToTerraform(struct!.clusterNetwork),
    control_plane_configuration: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationToTerraform(struct!.controlPlaneConfiguration),
    data_center_ref: aksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefToTerraform(struct!.dataCenterRef),
    management_cluster: aksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterToTerraform(struct!.managementCluster),
    worker_node_group_configurations: cdktf.listMapper(aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsToTerraform, true)(struct!.workerNodeGroupConfigurations),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigSpecToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigSpecOutputReference | AksClusterV3SpecConfigEksaClusterConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_network: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkToHclTerraform(struct!.clusterNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkList",
    },
    control_plane_configuration: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationToHclTerraform(struct!.controlPlaneConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationList",
    },
    data_center_ref: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefToHclTerraform(struct!.dataCenterRef),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefList",
    },
    management_cluster: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterToHclTerraform(struct!.managementCluster),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterList",
    },
    worker_node_group_configurations: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsToHclTerraform, true)(struct!.workerNodeGroupConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfigSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._clusterNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNetwork = this._clusterNetwork?.internalValue;
    }
    if (this._controlPlaneConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneConfiguration = this._controlPlaneConfiguration?.internalValue;
    }
    if (this._dataCenterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCenterRef = this._dataCenterRef?.internalValue;
    }
    if (this._managementCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementCluster = this._managementCluster?.internalValue;
    }
    if (this._workerNodeGroupConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeGroupConfigurations = this._workerNodeGroupConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfigSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetesVersion = undefined;
      this._clusterNetwork.internalValue = undefined;
      this._controlPlaneConfiguration.internalValue = undefined;
      this._dataCenterRef.internalValue = undefined;
      this._managementCluster.internalValue = undefined;
      this._workerNodeGroupConfigurations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetesVersion = value.kubernetesVersion;
      this._clusterNetwork.internalValue = value.clusterNetwork;
      this._controlPlaneConfiguration.internalValue = value.controlPlaneConfiguration;
      this._dataCenterRef.internalValue = value.dataCenterRef;
      this._managementCluster.internalValue = value.managementCluster;
      this._workerNodeGroupConfigurations.internalValue = value.workerNodeGroupConfigurations;
    }
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // cluster_network - computed: false, optional: true, required: false
  private _clusterNetwork = new AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetworkOutputReference(this, "cluster_network");
  public get clusterNetwork() {
    return this._clusterNetwork;
  }
  public putClusterNetwork(value: AksClusterV3SpecConfigEksaClusterConfigSpecClusterNetwork) {
    this._clusterNetwork.internalValue = value;
  }
  public resetClusterNetwork() {
    this._clusterNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkInput() {
    return this._clusterNetwork.internalValue;
  }

  // control_plane_configuration - computed: false, optional: true, required: false
  private _controlPlaneConfiguration = new AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfigurationOutputReference(this, "control_plane_configuration");
  public get controlPlaneConfiguration() {
    return this._controlPlaneConfiguration;
  }
  public putControlPlaneConfiguration(value: AksClusterV3SpecConfigEksaClusterConfigSpecControlPlaneConfiguration) {
    this._controlPlaneConfiguration.internalValue = value;
  }
  public resetControlPlaneConfiguration() {
    this._controlPlaneConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneConfigurationInput() {
    return this._controlPlaneConfiguration.internalValue;
  }

  // data_center_ref - computed: false, optional: true, required: false
  private _dataCenterRef = new AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRefOutputReference(this, "data_center_ref");
  public get dataCenterRef() {
    return this._dataCenterRef;
  }
  public putDataCenterRef(value: AksClusterV3SpecConfigEksaClusterConfigSpecDataCenterRef) {
    this._dataCenterRef.internalValue = value;
  }
  public resetDataCenterRef() {
    this._dataCenterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterRefInput() {
    return this._dataCenterRef.internalValue;
  }

  // management_cluster - computed: false, optional: true, required: false
  private _managementCluster = new AksClusterV3SpecConfigEksaClusterConfigSpecManagementClusterOutputReference(this, "management_cluster");
  public get managementCluster() {
    return this._managementCluster;
  }
  public putManagementCluster(value: AksClusterV3SpecConfigEksaClusterConfigSpecManagementCluster) {
    this._managementCluster.internalValue = value;
  }
  public resetManagementCluster() {
    this._managementCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterInput() {
    return this._managementCluster.internalValue;
  }

  // worker_node_group_configurations - computed: false, optional: true, required: false
  private _workerNodeGroupConfigurations = new AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurationsList(this, "worker_node_group_configurations", false);
  public get workerNodeGroupConfigurations() {
    return this._workerNodeGroupConfigurations;
  }
  public putWorkerNodeGroupConfigurations(value: AksClusterV3SpecConfigEksaClusterConfigSpecWorkerNodeGroupConfigurations[] | cdktf.IResolvable) {
    this._workerNodeGroupConfigurations.internalValue = value;
  }
  public resetWorkerNodeGroupConfigurations() {
    this._workerNodeGroupConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeGroupConfigurationsInput() {
    return this._workerNodeGroupConfigurations.internalValue;
  }
}
export interface AksClusterV3SpecConfigEksaClusterConfig {
  /**
  * Api version of EKSA cluster resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of EKSA cluster resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#metadata AksClusterV3#metadata}
  */
  readonly metadata?: AksClusterV3SpecConfigEksaClusterConfigMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#spec AksClusterV3#spec}
  */
  readonly spec?: AksClusterV3SpecConfigEksaClusterConfigSpec;
}

export function aksClusterV3SpecConfigEksaClusterConfigToTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigOutputReference | AksClusterV3SpecConfigEksaClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: aksClusterV3SpecConfigEksaClusterConfigMetadataToTerraform(struct!.metadata),
    spec: aksClusterV3SpecConfigEksaClusterConfigSpecToTerraform(struct!.spec),
  }
}


export function aksClusterV3SpecConfigEksaClusterConfigToHclTerraform(struct?: AksClusterV3SpecConfigEksaClusterConfigOutputReference | AksClusterV3SpecConfigEksaClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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
    metadata: {
      value: aksClusterV3SpecConfigEksaClusterConfigMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigMetadataList",
    },
    spec: {
      value: aksClusterV3SpecConfigEksaClusterConfigSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigEksaClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigEksaClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigEksaClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

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
  private _metadata = new AksClusterV3SpecConfigEksaClusterConfigMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterV3SpecConfigEksaClusterConfigMetadata) {
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
  private _spec = new AksClusterV3SpecConfigEksaClusterConfigSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AksClusterV3SpecConfigEksaClusterConfigSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface AksClusterV3SpecConfigFeatures {
  /**
  * List of components for cloud logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cloud_logging_components AksClusterV3#cloud_logging_components}
  */
  readonly cloudLoggingComponents?: string[];
  /**
  * List of components for cloud monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cloud_monitoring_components AksClusterV3#cloud_monitoring_components}
  */
  readonly cloudMonitoringComponents?: string[];
  /**
  * Application Manager is a GKE controller for managing the lifecycle of applications. It enables application delivery and updates following Kubernetes and GitOps best practices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_application_manager_beta AksClusterV3#enable_application_manager_beta}
  */
  readonly enableApplicationManagerBeta?: boolean | cdktf.IResolvable;
  /**
  * Backup for GKE allows you to back up and restore GKE workloads. There is no cost for enabling this feature, but you are charged for backups based on the size of the data and the number of pods you protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_backup_for_gke AksClusterV3#enable_backup_for_gke}
  */
  readonly enableBackupForGke?: boolean | cdktf.IResolvable;
  /**
  * Logging collects logs emitted by your applications and by GKE infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_cloud_logging AksClusterV3#enable_cloud_logging}
  */
  readonly enableCloudLogging?: boolean | cdktf.IResolvable;
  /**
  * Monitoring collects metrics emitted by your applications and by GKE infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_cloud_monitoring AksClusterV3#enable_cloud_monitoring}
  */
  readonly enableCloudMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Enable to automatically deploy and manage the Compute Engine Persistent Disk CSI Driver. This feature is an alternative to using the gcePersistentDisk in-tree volume plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_compute_engine_persistent_disk_csi_driver AksClusterV3#enable_compute_engine_persistent_disk_csi_driver}
  */
  readonly enableComputeEnginePersistentDiskCsiDriver?: boolean | cdktf.IResolvable;
  /**
  * Enable to automatically deploy and manage the Filestore CSI Driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_filestore_csi_driver AksClusterV3#enable_filestore_csi_driver}
  */
  readonly enableFilestoreCsiDriver?: boolean | cdktf.IResolvable;
  /**
  * Image streaming allows your workloads to initialize without waiting for the entire image to download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_image_streaming AksClusterV3#enable_image_streaming}
  */
  readonly enableImageStreaming?: boolean | cdktf.IResolvable;
  /**
  * This option deploys managed collectors for Prometheus metrics within this cluster. These collectors must be configured using PodMonitoring resources. To enable Managed Service for Prometheus here, you'll need. Cluster version of 1.21.4-gke.300 or greater
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_managed_service_prometheus AksClusterV3#enable_managed_service_prometheus}
  */
  readonly enableManagedServicePrometheus?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigFeaturesToTerraform(struct?: AksClusterV3SpecConfigFeaturesOutputReference | AksClusterV3SpecConfigFeatures): any {
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


export function aksClusterV3SpecConfigFeaturesToHclTerraform(struct?: AksClusterV3SpecConfigFeaturesOutputReference | AksClusterV3SpecConfigFeatures): any {
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

export class AksClusterV3SpecConfigFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigFeatures | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigFeatures | undefined) {
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
export interface AksClusterV3SpecConfigLocationConfig {
  /**
  * Regional location in which the cluster's control plane and nodes are located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#region AksClusterV3#region}
  */
  readonly region?: string;
  /**
  * Zone in the region where bootstrap VM is created for cluster provisioning 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#zone AksClusterV3#zone}
  */
  readonly zone?: string;
}

export function aksClusterV3SpecConfigLocationConfigToTerraform(struct?: AksClusterV3SpecConfigLocationConfigOutputReference | AksClusterV3SpecConfigLocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function aksClusterV3SpecConfigLocationConfigToHclTerraform(struct?: AksClusterV3SpecConfigLocationConfigOutputReference | AksClusterV3SpecConfigLocationConfig): any {
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

export class AksClusterV3SpecConfigLocationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigLocationConfig | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigLocationConfig | undefined) {
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
export interface AksClusterV3SpecConfigLocationDefaultNodeLocations {
  /**
  * Enable providing default node locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of zones. Increase availability by providing more than one zone. The same number of nodes will be deployed to each zone in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#zones AksClusterV3#zones}
  */
  readonly zones?: string[];
}

export function aksClusterV3SpecConfigLocationDefaultNodeLocationsToTerraform(struct?: AksClusterV3SpecConfigLocationDefaultNodeLocationsOutputReference | AksClusterV3SpecConfigLocationDefaultNodeLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function aksClusterV3SpecConfigLocationDefaultNodeLocationsToHclTerraform(struct?: AksClusterV3SpecConfigLocationDefaultNodeLocationsOutputReference | AksClusterV3SpecConfigLocationDefaultNodeLocations): any {
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

export class AksClusterV3SpecConfigLocationDefaultNodeLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigLocationDefaultNodeLocations | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigLocationDefaultNodeLocations | undefined) {
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
export interface AksClusterV3SpecConfigLocation {
  /**
  * GKE Cluster location can be either zonal or regional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfigLocationConfig;
  /**
  * default_node_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#default_node_locations AksClusterV3#default_node_locations}
  */
  readonly defaultNodeLocations?: AksClusterV3SpecConfigLocationDefaultNodeLocations;
}

export function aksClusterV3SpecConfigLocationToTerraform(struct?: AksClusterV3SpecConfigLocationOutputReference | AksClusterV3SpecConfigLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: aksClusterV3SpecConfigLocationConfigToTerraform(struct!.config),
    default_node_locations: aksClusterV3SpecConfigLocationDefaultNodeLocationsToTerraform(struct!.defaultNodeLocations),
  }
}


export function aksClusterV3SpecConfigLocationToHclTerraform(struct?: AksClusterV3SpecConfigLocationOutputReference | AksClusterV3SpecConfigLocation): any {
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
      value: aksClusterV3SpecConfigLocationConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigLocationConfigList",
    },
    default_node_locations: {
      value: aksClusterV3SpecConfigLocationDefaultNodeLocationsToHclTerraform(struct!.defaultNodeLocations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigLocationDefaultNodeLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigLocation | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigLocation | undefined) {
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
  private _config = new AksClusterV3SpecConfigLocationConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfigLocationConfig) {
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
  private _defaultNodeLocations = new AksClusterV3SpecConfigLocationDefaultNodeLocationsOutputReference(this, "default_node_locations");
  public get defaultNodeLocations() {
    return this._defaultNodeLocations;
  }
  public putDefaultNodeLocations(value: AksClusterV3SpecConfigLocationDefaultNodeLocations) {
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
export interface AksClusterV3SpecConfigMachineHealthChecksRemediationStrategy {
  /**
  * MaxRetry is the maximum number of remediation attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_retry AksClusterV3#max_retry}
  */
  readonly maxRetry?: number;
  /**
  * MinHealthyPeriod is the minimum time to wait before remediation is attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#min_healthy_period AksClusterV3#min_healthy_period}
  */
  readonly minHealthyPeriod?: string;
  /**
  * RetryPeriod is the time to wait between remediation attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#retry_period AksClusterV3#retry_period}
  */
  readonly retryPeriod?: string;
}

export function aksClusterV3SpecConfigMachineHealthChecksRemediationStrategyToTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksRemediationStrategyOutputReference | AksClusterV3SpecConfigMachineHealthChecksRemediationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retry: cdktf.numberToTerraform(struct!.maxRetry),
    min_healthy_period: cdktf.stringToTerraform(struct!.minHealthyPeriod),
    retry_period: cdktf.stringToTerraform(struct!.retryPeriod),
  }
}


export function aksClusterV3SpecConfigMachineHealthChecksRemediationStrategyToHclTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksRemediationStrategyOutputReference | AksClusterV3SpecConfigMachineHealthChecksRemediationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retry: {
      value: cdktf.numberToHclTerraform(struct!.maxRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_healthy_period: {
      value: cdktf.stringToHclTerraform(struct!.minHealthyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_period: {
      value: cdktf.stringToHclTerraform(struct!.retryPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigMachineHealthChecksRemediationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigMachineHealthChecksRemediationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetry = this._maxRetry;
    }
    if (this._minHealthyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthyPeriod = this._minHealthyPeriod;
    }
    if (this._retryPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPeriod = this._retryPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigMachineHealthChecksRemediationStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRetry = undefined;
      this._minHealthyPeriod = undefined;
      this._retryPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRetry = value.maxRetry;
      this._minHealthyPeriod = value.minHealthyPeriod;
      this._retryPeriod = value.retryPeriod;
    }
  }

  // max_retry - computed: false, optional: true, required: false
  private _maxRetry?: number; 
  public get maxRetry() {
    return this.getNumberAttribute('max_retry');
  }
  public set maxRetry(value: number) {
    this._maxRetry = value;
  }
  public resetMaxRetry() {
    this._maxRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryInput() {
    return this._maxRetry;
  }

  // min_healthy_period - computed: false, optional: true, required: false
  private _minHealthyPeriod?: string; 
  public get minHealthyPeriod() {
    return this.getStringAttribute('min_healthy_period');
  }
  public set minHealthyPeriod(value: string) {
    this._minHealthyPeriod = value;
  }
  public resetMinHealthyPeriod() {
    this._minHealthyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthyPeriodInput() {
    return this._minHealthyPeriod;
  }

  // retry_period - computed: false, optional: true, required: false
  private _retryPeriod?: string; 
  public get retryPeriod() {
    return this.getStringAttribute('retry_period');
  }
  public set retryPeriod(value: string) {
    this._retryPeriod = value;
  }
  public resetRetryPeriod() {
    this._retryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPeriodInput() {
    return this._retryPeriod;
  }
}
export interface AksClusterV3SpecConfigMachineHealthChecksRemediationTemplate {
  /**
  * APIVersion defines the versioned schema of this representation of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * FieldPath is the path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#field_path AksClusterV3#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind is a string value representing the REST resource this object represents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#namespace AksClusterV3#namespace}
  */
  readonly namespace?: string;
  /**
  * ResourceVersion is an opaque identifier that is used to distinguish between multiple versions of a same resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#resource_version AksClusterV3#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID is a unique id generated by the server on successful creation of a resource and is not propagated to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#u_id AksClusterV3#u_id}
  */
  readonly uId?: string;
}

export function aksClusterV3SpecConfigMachineHealthChecksRemediationTemplateToTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksRemediationTemplateOutputReference | AksClusterV3SpecConfigMachineHealthChecksRemediationTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    u_id: cdktf.stringToTerraform(struct!.uId),
  }
}


export function aksClusterV3SpecConfigMachineHealthChecksRemediationTemplateToHclTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksRemediationTemplateOutputReference | AksClusterV3SpecConfigMachineHealthChecksRemediationTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    u_id: {
      value: cdktf.stringToHclTerraform(struct!.uId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigMachineHealthChecksRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigMachineHealthChecksRemediationTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uId = this._uId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigMachineHealthChecksRemediationTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uId = value.uId;
    }
  }

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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // u_id - computed: false, optional: true, required: false
  private _uId?: string; 
  public get uId() {
    return this.getStringAttribute('u_id');
  }
  public set uId(value: string) {
    this._uId = value;
  }
  public resetUId() {
    this._uId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uIdInput() {
    return this._uId;
  }
}
export interface AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions {
  /**
  * Key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#operator AksClusterV3#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#values AksClusterV3#values}
  */
  readonly values?: string[];
}

export function aksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsToTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function aksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsToHclTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsOutputReference {
    return new AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigMachineHealthChecksSelector {
  /**
  * MatchLabels is a map of {key,value} pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#match_labels AksClusterV3#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#match_expressions AksClusterV3#match_expressions}
  */
  readonly matchExpressions?: AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigMachineHealthChecksSelectorToTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksSelectorOutputReference | AksClusterV3SpecConfigMachineHealthChecksSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(aksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function aksClusterV3SpecConfigMachineHealthChecksSelectorToHclTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksSelectorOutputReference | AksClusterV3SpecConfigMachineHealthChecksSelector): any {
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
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigMachineHealthChecksSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigMachineHealthChecksSelector | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigMachineHealthChecksSelector | undefined) {
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
  private _matchExpressions = new AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: AksClusterV3SpecConfigMachineHealthChecksSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions {
  /**
  * Status indicates the state of the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#status AksClusterV3#status}
  */
  readonly status?: string;
  /**
  * Timeout for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#timeout AksClusterV3#timeout}
  */
  readonly timeout?: string;
  /**
  * Type of the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
}

export function aksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsToTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function aksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsToHclTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._timeout = value.timeout;
      this._type = value.type;
    }
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

export class AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsOutputReference {
    return new AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigMachineHealthChecks {
  /**
  * Machines selected by selector are not healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_un_healthy AksClusterV3#max_un_healthy}
  */
  readonly maxUnHealthy?: string;
  /**
  * Name of the MachineHealthCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  *  Machines older than this duration without a node will be considered to have failed and will be remediated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#node_startup_timeout AksClusterV3#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * UnhealthyRange specifies the range of machine health check failures that will be tolerated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#unhealthy_range AksClusterV3#unhealthy_range}
  */
  readonly unhealthyRange?: string;
  /**
  * remediation_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#remediation_strategy AksClusterV3#remediation_strategy}
  */
  readonly remediationStrategy?: AksClusterV3SpecConfigMachineHealthChecksRemediationStrategy;
  /**
  * remediation_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#remediation_template AksClusterV3#remediation_template}
  */
  readonly remediationTemplate?: AksClusterV3SpecConfigMachineHealthChecksRemediationTemplate;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#selector AksClusterV3#selector}
  */
  readonly selector?: AksClusterV3SpecConfigMachineHealthChecksSelector;
  /**
  * unhealthy_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#unhealthy_conditions AksClusterV3#unhealthy_conditions}
  */
  readonly unhealthyConditions?: AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigMachineHealthChecksToTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_un_healthy: cdktf.stringToTerraform(struct!.maxUnHealthy),
    name: cdktf.stringToTerraform(struct!.name),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    unhealthy_range: cdktf.stringToTerraform(struct!.unhealthyRange),
    remediation_strategy: aksClusterV3SpecConfigMachineHealthChecksRemediationStrategyToTerraform(struct!.remediationStrategy),
    remediation_template: aksClusterV3SpecConfigMachineHealthChecksRemediationTemplateToTerraform(struct!.remediationTemplate),
    selector: aksClusterV3SpecConfigMachineHealthChecksSelectorToTerraform(struct!.selector),
    unhealthy_conditions: cdktf.listMapper(aksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsToTerraform, true)(struct!.unhealthyConditions),
  }
}


export function aksClusterV3SpecConfigMachineHealthChecksToHclTerraform(struct?: AksClusterV3SpecConfigMachineHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_un_healthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnHealthy),
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
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_range: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remediation_strategy: {
      value: aksClusterV3SpecConfigMachineHealthChecksRemediationStrategyToHclTerraform(struct!.remediationStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigMachineHealthChecksRemediationStrategyList",
    },
    remediation_template: {
      value: aksClusterV3SpecConfigMachineHealthChecksRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigMachineHealthChecksRemediationTemplateList",
    },
    selector: {
      value: aksClusterV3SpecConfigMachineHealthChecksSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigMachineHealthChecksSelectorList",
    },
    unhealthy_conditions: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsToHclTerraform, true)(struct!.unhealthyConditions),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigMachineHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigMachineHealthChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnHealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnHealthy = this._maxUnHealthy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._unhealthyRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyRange = this._unhealthyRange;
    }
    if (this._remediationStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationStrategy = this._remediationStrategy?.internalValue;
    }
    if (this._remediationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTemplate = this._remediationTemplate?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._unhealthyConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyConditions = this._unhealthyConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigMachineHealthChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnHealthy = undefined;
      this._name = undefined;
      this._nodeStartupTimeout = undefined;
      this._unhealthyRange = undefined;
      this._remediationStrategy.internalValue = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._unhealthyConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnHealthy = value.maxUnHealthy;
      this._name = value.name;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._unhealthyRange = value.unhealthyRange;
      this._remediationStrategy.internalValue = value.remediationStrategy;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._selector.internalValue = value.selector;
      this._unhealthyConditions.internalValue = value.unhealthyConditions;
    }
  }

  // max_un_healthy - computed: false, optional: true, required: false
  private _maxUnHealthy?: string; 
  public get maxUnHealthy() {
    return this.getStringAttribute('max_un_healthy');
  }
  public set maxUnHealthy(value: string) {
    this._maxUnHealthy = value;
  }
  public resetMaxUnHealthy() {
    this._maxUnHealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnHealthyInput() {
    return this._maxUnHealthy;
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

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // unhealthy_range - computed: false, optional: true, required: false
  private _unhealthyRange?: string; 
  public get unhealthyRange() {
    return this.getStringAttribute('unhealthy_range');
  }
  public set unhealthyRange(value: string) {
    this._unhealthyRange = value;
  }
  public resetUnhealthyRange() {
    this._unhealthyRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyRangeInput() {
    return this._unhealthyRange;
  }

  // remediation_strategy - computed: false, optional: true, required: false
  private _remediationStrategy = new AksClusterV3SpecConfigMachineHealthChecksRemediationStrategyOutputReference(this, "remediation_strategy");
  public get remediationStrategy() {
    return this._remediationStrategy;
  }
  public putRemediationStrategy(value: AksClusterV3SpecConfigMachineHealthChecksRemediationStrategy) {
    this._remediationStrategy.internalValue = value;
  }
  public resetRemediationStrategy() {
    this._remediationStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationStrategyInput() {
    return this._remediationStrategy.internalValue;
  }

  // remediation_template - computed: false, optional: true, required: false
  private _remediationTemplate = new AksClusterV3SpecConfigMachineHealthChecksRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: AksClusterV3SpecConfigMachineHealthChecksRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  public resetRemediationTemplate() {
    this._remediationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new AksClusterV3SpecConfigMachineHealthChecksSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: AksClusterV3SpecConfigMachineHealthChecksSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // unhealthy_conditions - computed: false, optional: true, required: false
  private _unhealthyConditions = new AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditionsList(this, "unhealthy_conditions", false);
  public get unhealthyConditions() {
    return this._unhealthyConditions;
  }
  public putUnhealthyConditions(value: AksClusterV3SpecConfigMachineHealthChecksUnhealthyConditions[] | cdktf.IResolvable) {
    this._unhealthyConditions.internalValue = value;
  }
  public resetUnhealthyConditions() {
    this._unhealthyConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyConditionsInput() {
    return this._unhealthyConditions.internalValue;
  }
}

export class AksClusterV3SpecConfigMachineHealthChecksList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigMachineHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigMachineHealthChecksOutputReference {
    return new AksClusterV3SpecConfigMachineHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigMetadataToTerraform(struct?: AksClusterV3SpecConfigMetadataOutputReference | AksClusterV3SpecConfigMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigMetadataToHclTerraform(struct?: AksClusterV3SpecConfigMetadataOutputReference | AksClusterV3SpecConfigMetadata): any {
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

export class AksClusterV3SpecConfigMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigMetadata | undefined) {
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
export interface AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#ports AksClusterV3#ports}
  */
  readonly ports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#protocol AksClusterV3#protocol}
  */
  readonly protocol?: string;
}

export function aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesToTerraform(struct?: AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesToHclTerraform(struct?: AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable): any {
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

export class AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules | cdktf.IResolvable | undefined) {
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

export class AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesOutputReference {
    return new AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigNetworkAccessConfigFirewallRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#action AksClusterV3#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#description AksClusterV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#destination_ranges AksClusterV3#destination_ranges}
  */
  readonly destinationRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#direction AksClusterV3#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network AksClusterV3#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#priority AksClusterV3#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#source_ranges AksClusterV3#source_ranges}
  */
  readonly sourceRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#target_tags AksClusterV3#target_tags}
  */
  readonly targetTags?: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#rules AksClusterV3#rules}
  */
  readonly rules?: AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesToTerraform(struct?: AksClusterV3SpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable): any {
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
    rules: cdktf.listMapper(aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesToHclTerraform(struct?: AksClusterV3SpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNetworkAccessConfigFirewallRules | cdktf.IResolvable | undefined) {
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
  private _rules = new AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesRules[] | cdktf.IResolvable) {
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

export class AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNetworkAccessConfigFirewallRules[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesOutputReference {
    return new AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigNetworkAccessConfig {
  /**
  * Control plane IP range is for the control plane VPC. The control plane range must not overlap with any subnet in your cluster's VPC. The control plane and your cluster use VPC peering to communicate privately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#control_plane_ip_range AksClusterV3#control_plane_ip_range}
  */
  readonly controlPlaneIpRange?: string;
  /**
  * To use Privately Used Public IPs (PUPI) ranges, the default source NAT used for IP masquerading needs to be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#disable_snat AksClusterV3#disable_snat}
  */
  readonly disableSnat?: boolean | cdktf.IResolvable;
  /**
  * Disabling this option locks down external access to the cluster control plane. There is still an external IP address used by Google for cluster management purposes, but the IP address is not accessible to anyone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_access_control_plane_external_ip AksClusterV3#enable_access_control_plane_external_ip}
  */
  readonly enableAccessControlPlaneExternalIp?: boolean | cdktf.IResolvable;
  /**
  * With control plane global access, you can access the control plane's private endpoint from any GCP region or on-premises environment no matter what the private cluster's region is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_access_control_plane_global AksClusterV3#enable_access_control_plane_global}
  */
  readonly enableAccessControlPlaneGlobal?: boolean | cdktf.IResolvable;
  /**
  * Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.If control plane cidr block is provided then enablePrivateNodes must be TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_private_nodes AksClusterV3#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * Subnet to provision the master's private endpoint during cluster creation.If control plane cidr block is provided then PrivateEndpointSubnetwork must be unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#private_endpoint_subnetwork_name AksClusterV3#private_endpoint_subnetwork_name}
  */
  readonly privateEndpointSubnetworkName?: string;
  /**
  * firewall_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#firewall_rules AksClusterV3#firewall_rules}
  */
  readonly firewallRules?: AksClusterV3SpecConfigNetworkAccessConfigFirewallRules[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigNetworkAccessConfigToTerraform(struct?: AksClusterV3SpecConfigNetworkAccessConfigOutputReference | AksClusterV3SpecConfigNetworkAccessConfig): any {
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
    firewall_rules: cdktf.listMapper(aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesToTerraform, true)(struct!.firewallRules),
  }
}


export function aksClusterV3SpecConfigNetworkAccessConfigToHclTerraform(struct?: AksClusterV3SpecConfigNetworkAccessConfigOutputReference | AksClusterV3SpecConfigNetworkAccessConfig): any {
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
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNetworkAccessConfigFirewallRulesToHclTerraform, true)(struct!.firewallRules),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNetworkAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNetworkAccessConfig | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNetworkAccessConfig | undefined) {
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
  private _firewallRules = new AksClusterV3SpecConfigNetworkAccessConfigFirewallRulesList(this, "firewall_rules", false);
  public get firewallRules() {
    return this._firewallRules;
  }
  public putFirewallRules(value: AksClusterV3SpecConfigNetworkAccessConfigFirewallRules[] | cdktf.IResolvable) {
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
export interface AksClusterV3SpecConfigNetworkAccess {
  /**
  * Choose the type of network you want to allow to access your cluster's workloads. private or public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfigNetworkAccessConfig;
}

export function aksClusterV3SpecConfigNetworkAccessToTerraform(struct?: AksClusterV3SpecConfigNetworkAccessOutputReference | AksClusterV3SpecConfigNetworkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: aksClusterV3SpecConfigNetworkAccessConfigToTerraform(struct!.config),
  }
}


export function aksClusterV3SpecConfigNetworkAccessToHclTerraform(struct?: AksClusterV3SpecConfigNetworkAccessOutputReference | AksClusterV3SpecConfigNetworkAccess): any {
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
      value: aksClusterV3SpecConfigNetworkAccessConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNetworkAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNetworkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNetworkAccess | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNetworkAccess | undefined) {
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
  private _config = new AksClusterV3SpecConfigNetworkAccessConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfigNetworkAccessConfig) {
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
export interface AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork {
  /**
  * CIDR Example: 198.51.100.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#cidr AksClusterV3#cidr}
  */
  readonly cidr?: string;
  /**
  * Name of the Authorized Network Example: Corporate Office
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToTerraform(struct?: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToHclTerraform(struct?: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable): any {
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

export class AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork | cdktf.IResolvable | undefined) {
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

export class AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkOutputReference {
    return new AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetwork {
  /**
  * Enable Control Plane Authorized Network. Configure the Networks now or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * authorized_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#authorized_network AksClusterV3#authorized_network}
  */
  readonly authorizedNetwork?: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkToTerraform(struct?: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference | AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    authorized_network: cdktf.listMapper(aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToTerraform, true)(struct!.authorizedNetwork),
  }
}


export function aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkToHclTerraform(struct?: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference | AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetwork): any {
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
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkToHclTerraform, true)(struct!.authorizedNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetwork | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetwork | undefined) {
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
  private _authorizedNetwork = new AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetworkList(this, "authorized_network", false);
  public get authorizedNetwork() {
    return this._authorizedNetwork;
  }
  public putAuthorizedNetwork(value: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkAuthorizedNetwork[] | cdktf.IResolvable) {
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
export interface AksClusterV3SpecConfigNetwork {
  /**
  * Dataplane V2 is optimized for Kubernetes networking kwhich is implemented using eBPF. Possible values: ADVANCED_DATAPATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#data_plane_v_2 AksClusterV3#data_plane_v_2}
  */
  readonly dataPlaneV2?: string;
  /**
  * Dataplane V2 metrics brings better insight into the traffic between your Kubernetes workloads. Understand how your services communicate, identify issues with the network health, verify Kubernetes policies and more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_data_plane_v_2_metrics AksClusterV3#enable_data_plane_v_2_metrics}
  */
  readonly enableDataPlaneV2Metrics?: boolean | cdktf.IResolvable;
  /**
  * Dataplane V2 observability provides Managed Hubble CLI solution that lets you observe network flows between your Kubernetes workloads in real time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_data_plane_v_2_observability AksClusterV3#enable_data_plane_v_2_observability}
  */
  readonly enableDataPlaneV2Observability?: boolean | cdktf.IResolvable;
  /**
  * This feature uses alias IP and provides a more secure integration with Google Cloud Platform services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_vpc_nativetraffic AksClusterV3#enable_vpc_nativetraffic}
  */
  readonly enableVpcNativetraffic?: boolean | cdktf.IResolvable;
  /**
  * This value is used to optimize the partitioning of cluster's IP address range to sub-ranges at node level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_pods_per_node AksClusterV3#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Name of the network that the cluster is in. It determines which other Compute Engine resource it is able to communicate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes Network Policy API allows the cluster administrator to specify what pods are allowed to communicate with each other. Possible values: CALICO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_policy AksClusterV3#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master,it does not track whether network policy is enabled for the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_policy_config AksClusterV3#network_policy_config}
  */
  readonly networkPolicyConfig?: boolean | cdktf.IResolvable;
  /**
  * All pods in the cluster are assigned an IP address from this range. Enter a range (in CIDR notation) within a network range, a mask, or leave this field blank to use a default range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#pod_address_range AksClusterV3#pod_address_range}
  */
  readonly podAddressRange?: string;
  /**
  * Cluster pods are assigned an IP from the selected node subnet's secondary CIDR address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#pod_secondary_range_name AksClusterV3#pod_secondary_range_name}
  */
  readonly podSecondaryRangeName?: string;
  /**
  * Cluster services will be assigned an IP address from this IP address range. Enter a range (in CIDR notation) within a network range, a mask, or leave this field blank to use a default range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#service_address_range AksClusterV3#service_address_range}
  */
  readonly serviceAddressRange?: string;
  /**
  * Cluster services are assigned an IP from the selected node subnetes secondary CIDR address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#service_secondary_range_name AksClusterV3#service_secondary_range_name}
  */
  readonly serviceSecondaryRangeName?: string;
  /**
  * Subnetwork to which the Kubernetes cluster will belong. When VPC native is enabled, the subnetwork must contain at least two secondary ranges which are not used by other Kubernetes clusters. Subnet is permanent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#subnet_name AksClusterV3#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#access AksClusterV3#access}
  */
  readonly access?: AksClusterV3SpecConfigNetworkAccess;
  /**
  * control_plane_authorized_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#control_plane_authorized_network AksClusterV3#control_plane_authorized_network}
  */
  readonly controlPlaneAuthorizedNetwork?: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetwork;
}

export function aksClusterV3SpecConfigNetworkToTerraform(struct?: AksClusterV3SpecConfigNetworkOutputReference | AksClusterV3SpecConfigNetwork): any {
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
    access: aksClusterV3SpecConfigNetworkAccessToTerraform(struct!.access),
    control_plane_authorized_network: aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkToTerraform(struct!.controlPlaneAuthorizedNetwork),
  }
}


export function aksClusterV3SpecConfigNetworkToHclTerraform(struct?: AksClusterV3SpecConfigNetworkOutputReference | AksClusterV3SpecConfigNetwork): any {
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
      value: aksClusterV3SpecConfigNetworkAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNetworkAccessList",
    },
    control_plane_authorized_network: {
      value: aksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkToHclTerraform(struct!.controlPlaneAuthorizedNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNetwork | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNetwork | undefined) {
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
  private _access = new AksClusterV3SpecConfigNetworkAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: AksClusterV3SpecConfigNetworkAccess) {
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
  private _controlPlaneAuthorizedNetwork = new AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetworkOutputReference(this, "control_plane_authorized_network");
  public get controlPlaneAuthorizedNetwork() {
    return this._controlPlaneAuthorizedNetwork;
  }
  public putControlPlaneAuthorizedNetwork(value: AksClusterV3SpecConfigNetworkControlPlaneAuthorizedNetwork) {
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
export interface AksClusterV3SpecConfigNodePoolsAutoScaling {
  /**
  * Maximum number of nodes (per zone)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_nodes AksClusterV3#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Minimum number of nodes (per zone)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#min_nodes AksClusterV3#min_nodes}
  */
  readonly minNodes?: number;
}

export function aksClusterV3SpecConfigNodePoolsAutoScalingToTerraform(struct?: AksClusterV3SpecConfigNodePoolsAutoScalingOutputReference | AksClusterV3SpecConfigNodePoolsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_nodes: cdktf.numberToTerraform(struct!.maxNodes),
    min_nodes: cdktf.numberToTerraform(struct!.minNodes),
  }
}


export function aksClusterV3SpecConfigNodePoolsAutoScalingToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsAutoScalingOutputReference | AksClusterV3SpecConfigNodePoolsAutoScaling): any {
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

export class AksClusterV3SpecConfigNodePoolsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsAutoScaling | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsAutoScaling | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing {
  /**
  * The max number of clients that can share a physical GPU device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_shared_clients AksClusterV3#max_shared_clients}
  */
  readonly maxSharedClients?: number;
  /**
  * The strategy to use for sharing GPUs . Example: Time-Sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#strategy AksClusterV3#strategy}
  */
  readonly strategy?: string;
}

export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_shared_clients: cdktf.numberToTerraform(struct!.maxSharedClients),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing): any {
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

export class AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig {
  /**
  * The version of the GPU driver to install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
}

export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig): any {
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

export class AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation {
  /**
  * Choose how GPU drivers will be installed for GPU enabled VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig;
}

export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToTerraform(struct!.config),
  }
}


export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation): any {
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
      value: aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation | undefined) {
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
  private _config = new AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationConfig) {
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
export interface AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators {
  /**
  * Number of GPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#count AksClusterV3#count}
  */
  readonly count?: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the guide - https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#gpu_partition_size AksClusterV3#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * GPU Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * accelerator_sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#accelerator_sharing AksClusterV3#accelerator_sharing}
  */
  readonly acceleratorSharing?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing;
  /**
  * gpu_driver_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#gpu_driver_installation AksClusterV3#gpu_driver_installation}
  */
  readonly gpuDriverInstallation?: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation;
}

export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
    accelerator_sharing: aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToTerraform(struct!.acceleratorSharing),
    gpu_driver_installation: aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToTerraform(struct!.gpuDriverInstallation),
  }
}


export function aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable): any {
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
      value: aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingToHclTerraform(struct!.acceleratorSharing),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingList",
    },
    gpu_driver_installation: {
      value: aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationToHclTerraform(struct!.gpuDriverInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators | cdktf.IResolvable | undefined) {
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
  private _acceleratorSharing = new AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharingOutputReference(this, "accelerator_sharing");
  public get acceleratorSharing() {
    return this._acceleratorSharing;
  }
  public putAcceleratorSharing(value: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsAcceleratorSharing) {
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
  private _gpuDriverInstallation = new AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallationOutputReference(this, "gpu_driver_installation");
  public get gpuDriverInstallation() {
    return this._gpuDriverInstallation;
  }
  public putGpuDriverInstallation(value: AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsGpuDriverInstallation) {
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

export class AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsOutputReference {
    return new AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinity {
  /**
  * Type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#consume_reservation_type AksClusterV3#consume_reservation_type}
  */
  readonly consumeReservationType?: string;
  /**
  * The name of the Reservation to be consumed. Only mandatory when consumeReservationType is set to specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#reservation_name AksClusterV3#reservation_name}
  */
  readonly reservationName?: string;
}

export function aksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    reservation_name: cdktf.stringToTerraform(struct!.reservationName),
  }
}


export function aksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinity): any {
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

export class AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinity | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinity | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsMachineConfig {
  /**
  * Select Boot disk size. Boot disk size is permanent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#boot_disk_size AksClusterV3#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Select Boot disk type. Storage space is less expensive for a standard persistent disk. An SSD persistent disk is better for random IOPS or for streaming throughput with low latency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#boot_disk_type AksClusterV3#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Choose which operating system image you want to run on each node of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#image_type AksClusterV3#image_type}
  */
  readonly imageType?: string;
  /**
  * Choose the machine type that will best fit the resource needs of your cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#machine_type AksClusterV3#machine_type}
  */
  readonly machineType?: string;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#accelerators AksClusterV3#accelerators}
  */
  readonly accelerators?: AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators[] | cdktf.IResolvable;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#reservation_affinity AksClusterV3#reservation_affinity}
  */
  readonly reservationAffinity?: AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinity;
}

export function aksClusterV3SpecConfigNodePoolsMachineConfigToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    accelerators: cdktf.listMapper(aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsToTerraform, true)(struct!.accelerators),
    reservation_affinity: aksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityToTerraform(struct!.reservationAffinity),
  }
}


export function aksClusterV3SpecConfigNodePoolsMachineConfigToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMachineConfigOutputReference | AksClusterV3SpecConfigNodePoolsMachineConfig): any {
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
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsToHclTerraform, true)(struct!.accelerators),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsList",
    },
    reservation_affinity: {
      value: aksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNodePoolsMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMachineConfig | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMachineConfig | undefined) {
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
  private _accelerators = new AksClusterV3SpecConfigNodePoolsMachineConfigAcceleratorsList(this, "accelerators", false);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: AksClusterV3SpecConfigNodePoolsMachineConfigAccelerators[] | cdktf.IResolvable) {
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
  private _reservationAffinity = new AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: AksClusterV3SpecConfigNodePoolsMachineConfigReservationAffinity) {
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
export interface AksClusterV3SpecConfigNodePoolsManagement {
  /**
  * Whether the nodes will be automatically upgraded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#auto_upgrade AksClusterV3#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigNodePoolsManagementToTerraform(struct?: AksClusterV3SpecConfigNodePoolsManagementOutputReference | AksClusterV3SpecConfigNodePoolsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function aksClusterV3SpecConfigNodePoolsManagementToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsManagementOutputReference | AksClusterV3SpecConfigNodePoolsManagement): any {
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

export class AksClusterV3SpecConfigNodePoolsManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsManagement | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata {
  /**
  * Key for this metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Value for this metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#value AksClusterV3#value}
  */
  readonly value?: string;
}

export function aksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function aksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable): any {
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

export class AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata | cdktf.IResolvable | undefined) {
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

export class AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataOutputReference {
    return new AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels {
  /**
  * Key for this kubernetes label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Value for this kubernetes lable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#value AksClusterV3#value}
  */
  readonly value?: string;
}

export function aksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function aksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable): any {
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

export class AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels | cdktf.IResolvable | undefined) {
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

export class AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsOutputReference {
    return new AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigNodePoolsMetadataNodeTaints {
  /**
  * Available effects are NoSchedule, PreferNoSchedule, NoExecute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#effect AksClusterV3#effect}
  */
  readonly effect?: string;
  /**
  * Key for this Taint effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Value for this Taint effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#value AksClusterV3#value}
  */
  readonly value?: string;
}

export function aksClusterV3SpecConfigNodePoolsMetadataNodeTaintsToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable): any {
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


export function aksClusterV3SpecConfigNodePoolsMetadataNodeTaintsToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable): any {
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

export class AksClusterV3SpecConfigNodePoolsMetadataNodeTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMetadataNodeTaints | cdktf.IResolvable | undefined) {
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

export class AksClusterV3SpecConfigNodePoolsMetadataNodeTaintsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNodePoolsMetadataNodeTaints[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNodePoolsMetadataNodeTaintsOutputReference {
    return new AksClusterV3SpecConfigNodePoolsMetadataNodeTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigNodePoolsMetadata {
  /**
  * gce_instance_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#gce_instance_metadata AksClusterV3#gce_instance_metadata}
  */
  readonly gceInstanceMetadata?: AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata[] | cdktf.IResolvable;
  /**
  * kubernetes_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kubernetes_labels AksClusterV3#kubernetes_labels}
  */
  readonly kubernetesLabels?: AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels[] | cdktf.IResolvable;
  /**
  * node_taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#node_taints AksClusterV3#node_taints}
  */
  readonly nodeTaints?: AksClusterV3SpecConfigNodePoolsMetadataNodeTaints[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigNodePoolsMetadataToTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataOutputReference | AksClusterV3SpecConfigNodePoolsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gce_instance_metadata: cdktf.listMapper(aksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataToTerraform, true)(struct!.gceInstanceMetadata),
    kubernetes_labels: cdktf.listMapper(aksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsToTerraform, true)(struct!.kubernetesLabels),
    node_taints: cdktf.listMapper(aksClusterV3SpecConfigNodePoolsMetadataNodeTaintsToTerraform, true)(struct!.nodeTaints),
  }
}


export function aksClusterV3SpecConfigNodePoolsMetadataToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsMetadataOutputReference | AksClusterV3SpecConfigNodePoolsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gce_instance_metadata: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataToHclTerraform, true)(struct!.gceInstanceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataList",
    },
    kubernetes_labels: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsToHclTerraform, true)(struct!.kubernetesLabels),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsList",
    },
    node_taints: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNodePoolsMetadataNodeTaintsToHclTerraform, true)(struct!.nodeTaints),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMetadataNodeTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNodePoolsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsMetadata | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsMetadata | undefined) {
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
  private _gceInstanceMetadata = new AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadataList(this, "gce_instance_metadata", false);
  public get gceInstanceMetadata() {
    return this._gceInstanceMetadata;
  }
  public putGceInstanceMetadata(value: AksClusterV3SpecConfigNodePoolsMetadataGceInstanceMetadata[] | cdktf.IResolvable) {
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
  private _kubernetesLabels = new AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabelsList(this, "kubernetes_labels", false);
  public get kubernetesLabels() {
    return this._kubernetesLabels;
  }
  public putKubernetesLabels(value: AksClusterV3SpecConfigNodePoolsMetadataKubernetesLabels[] | cdktf.IResolvable) {
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
  private _nodeTaints = new AksClusterV3SpecConfigNodePoolsMetadataNodeTaintsList(this, "node_taints", false);
  public get nodeTaints() {
    return this._nodeTaints;
  }
  public putNodeTaints(value: AksClusterV3SpecConfigNodePoolsMetadataNodeTaints[] | cdktf.IResolvable) {
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
export interface AksClusterV3SpecConfigNodePoolsNetworking {
  /**
  * This value is used to optimize the partitioning of cluster's IP address range to sub-ranges at node level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_pods_per_node AksClusterV3#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * This value is used to optimize the partitioning of cluster's IP address range to sub-ranges at node level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_tags AksClusterV3#network_tags}
  */
  readonly networkTags?: string[];
}

export function aksClusterV3SpecConfigNodePoolsNetworkingToTerraform(struct?: AksClusterV3SpecConfigNodePoolsNetworkingOutputReference | AksClusterV3SpecConfigNodePoolsNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
  }
}


export function aksClusterV3SpecConfigNodePoolsNetworkingToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsNetworkingOutputReference | AksClusterV3SpecConfigNodePoolsNetworking): any {
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

export class AksClusterV3SpecConfigNodePoolsNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsNetworking | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsNetworking | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsNodeLocations {
  /**
  * Enable providing node locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of zones. Additional node zones must be from the same region as the original zone. Kubernetes Engine allocates the same resource footprint for each zone. The Node pool setting overrides the defaults set in Cluster basics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#zones AksClusterV3#zones}
  */
  readonly zones?: string[];
}

export function aksClusterV3SpecConfigNodePoolsNodeLocationsToTerraform(struct?: AksClusterV3SpecConfigNodePoolsNodeLocationsOutputReference | AksClusterV3SpecConfigNodePoolsNodeLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function aksClusterV3SpecConfigNodePoolsNodeLocationsToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsNodeLocationsOutputReference | AksClusterV3SpecConfigNodePoolsNodeLocations): any {
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

export class AksClusterV3SpecConfigNodePoolsNodeLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsNodeLocations | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsNodeLocations | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsSecurity {
  /**
  * Integrity monitoring lets you monitor and verify the runtime boot integrity of your shielded nodes using Cloud Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_integrity_monitoring AksClusterV3#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Secure boot helps protect your nodes against boot-level and kernel-level malware and rootkits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_secure_boot AksClusterV3#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigNodePoolsSecurityToTerraform(struct?: AksClusterV3SpecConfigNodePoolsSecurityOutputReference | AksClusterV3SpecConfigNodePoolsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function aksClusterV3SpecConfigNodePoolsSecurityToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsSecurityOutputReference | AksClusterV3SpecConfigNodePoolsSecurity): any {
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

export class AksClusterV3SpecConfigNodePoolsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsSecurity | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsSecurity | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfig {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#batch_node_count AksClusterV3#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Soak time after each batch gets drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#batch_soak_duration AksClusterV3#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
  /**
  * The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_surge AksClusterV3#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_unavailable AksClusterV3#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#node_pool_soak_duration AksClusterV3#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
}

export function aksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigToTerraform(struct?: AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigOutputReference | AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfig): any {
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


export function aksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigOutputReference | AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfig): any {
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

export class AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfig | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfig | undefined) {
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
export interface AksClusterV3SpecConfigNodePoolsUpgradeSettings {
  /**
  * Update strategy of the node pool. Possible values are SURGE and BLUE_GREEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#strategy AksClusterV3#strategy}
  */
  readonly strategy?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfig;
}

export function aksClusterV3SpecConfigNodePoolsUpgradeSettingsToTerraform(struct?: AksClusterV3SpecConfigNodePoolsUpgradeSettingsOutputReference | AksClusterV3SpecConfigNodePoolsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    config: aksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigToTerraform(struct!.config),
  }
}


export function aksClusterV3SpecConfigNodePoolsUpgradeSettingsToHclTerraform(struct?: AksClusterV3SpecConfigNodePoolsUpgradeSettingsOutputReference | AksClusterV3SpecConfigNodePoolsUpgradeSettings): any {
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
      value: aksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNodePoolsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigNodePoolsUpgradeSettings | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePoolsUpgradeSettings | undefined) {
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
  private _config = new AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfigNodePoolsUpgradeSettingsConfig) {
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
export interface AksClusterV3SpecConfigNodePools {
  /**
  * Node pool names must start with a lowercase letter followed by up to 39 lowercase letters, numbers, or hyphens. They can't end with a hyphen. You cannot change the node pool's name once it's created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Specify Node k8s version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#node_version AksClusterV3#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * Labels are key-value pairs that are attached to GKE clusters. Labels can be used to group clusters and filter them in the UI or API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#resource_labels AksClusterV3#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * Pod address range limits the maximum size of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#size AksClusterV3#size}
  */
  readonly size?: number;
  /**
  * auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#auto_scaling AksClusterV3#auto_scaling}
  */
  readonly autoScaling?: AksClusterV3SpecConfigNodePoolsAutoScaling;
  /**
  * machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#machine_config AksClusterV3#machine_config}
  */
  readonly machineConfig?: AksClusterV3SpecConfigNodePoolsMachineConfig;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#management AksClusterV3#management}
  */
  readonly management?: AksClusterV3SpecConfigNodePoolsManagement;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#metadata AksClusterV3#metadata}
  */
  readonly metadata?: AksClusterV3SpecConfigNodePoolsMetadata;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#networking AksClusterV3#networking}
  */
  readonly networking?: AksClusterV3SpecConfigNodePoolsNetworking;
  /**
  * node_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#node_locations AksClusterV3#node_locations}
  */
  readonly nodeLocations?: AksClusterV3SpecConfigNodePoolsNodeLocations;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#security AksClusterV3#security}
  */
  readonly security?: AksClusterV3SpecConfigNodePoolsSecurity;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#upgrade_settings AksClusterV3#upgrade_settings}
  */
  readonly upgradeSettings?: AksClusterV3SpecConfigNodePoolsUpgradeSettings;
}

export function aksClusterV3SpecConfigNodePoolsToTerraform(struct?: AksClusterV3SpecConfigNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_version: cdktf.stringToTerraform(struct!.nodeVersion),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    size: cdktf.numberToTerraform(struct!.size),
    auto_scaling: aksClusterV3SpecConfigNodePoolsAutoScalingToTerraform(struct!.autoScaling),
    machine_config: aksClusterV3SpecConfigNodePoolsMachineConfigToTerraform(struct!.machineConfig),
    management: aksClusterV3SpecConfigNodePoolsManagementToTerraform(struct!.management),
    metadata: aksClusterV3SpecConfigNodePoolsMetadataToTerraform(struct!.metadata),
    networking: aksClusterV3SpecConfigNodePoolsNetworkingToTerraform(struct!.networking),
    node_locations: aksClusterV3SpecConfigNodePoolsNodeLocationsToTerraform(struct!.nodeLocations),
    security: aksClusterV3SpecConfigNodePoolsSecurityToTerraform(struct!.security),
    upgrade_settings: aksClusterV3SpecConfigNodePoolsUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function aksClusterV3SpecConfigNodePoolsToHclTerraform(struct?: AksClusterV3SpecConfigNodePools | cdktf.IResolvable): any {
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
      value: aksClusterV3SpecConfigNodePoolsAutoScalingToHclTerraform(struct!.autoScaling),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsAutoScalingList",
    },
    machine_config: {
      value: aksClusterV3SpecConfigNodePoolsMachineConfigToHclTerraform(struct!.machineConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMachineConfigList",
    },
    management: {
      value: aksClusterV3SpecConfigNodePoolsManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsManagementList",
    },
    metadata: {
      value: aksClusterV3SpecConfigNodePoolsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsMetadataList",
    },
    networking: {
      value: aksClusterV3SpecConfigNodePoolsNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsNetworkingList",
    },
    node_locations: {
      value: aksClusterV3SpecConfigNodePoolsNodeLocationsToHclTerraform(struct!.nodeLocations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsNodeLocationsList",
    },
    security: {
      value: aksClusterV3SpecConfigNodePoolsSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsSecurityList",
    },
    upgrade_settings: {
      value: aksClusterV3SpecConfigNodePoolsUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigNodePools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigNodePools | cdktf.IResolvable | undefined) {
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
  private _autoScaling = new AksClusterV3SpecConfigNodePoolsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: AksClusterV3SpecConfigNodePoolsAutoScaling) {
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
  private _machineConfig = new AksClusterV3SpecConfigNodePoolsMachineConfigOutputReference(this, "machine_config");
  public get machineConfig() {
    return this._machineConfig;
  }
  public putMachineConfig(value: AksClusterV3SpecConfigNodePoolsMachineConfig) {
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
  private _management = new AksClusterV3SpecConfigNodePoolsManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: AksClusterV3SpecConfigNodePoolsManagement) {
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
  private _metadata = new AksClusterV3SpecConfigNodePoolsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterV3SpecConfigNodePoolsMetadata) {
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
  private _networking = new AksClusterV3SpecConfigNodePoolsNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: AksClusterV3SpecConfigNodePoolsNetworking) {
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
  private _nodeLocations = new AksClusterV3SpecConfigNodePoolsNodeLocationsOutputReference(this, "node_locations");
  public get nodeLocations() {
    return this._nodeLocations;
  }
  public putNodeLocations(value: AksClusterV3SpecConfigNodePoolsNodeLocations) {
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
  private _security = new AksClusterV3SpecConfigNodePoolsSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: AksClusterV3SpecConfigNodePoolsSecurity) {
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
  private _upgradeSettings = new AksClusterV3SpecConfigNodePoolsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: AksClusterV3SpecConfigNodePoolsUpgradeSettings) {
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

export class AksClusterV3SpecConfigNodePoolsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigNodePools[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigNodePoolsOutputReference {
    return new AksClusterV3SpecConfigNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigProxy {
  /**
  * AllowInsecureBootstrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#allow_insecure_bootstrap AksClusterV3#allow_insecure_bootstrap}
  */
  readonly allowInsecureBootstrap?: boolean | cdktf.IResolvable;
  /**
  * BootStrapCA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#bootstrap_ca AksClusterV3#bootstrap_ca}
  */
  readonly bootstrapCa?: string;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * HttpProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#http_proxy AksClusterV3#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HttpsProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#https_proxy AksClusterV3#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * NoProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#no_proxy AksClusterV3#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * ProxyAuth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#proxy_auth AksClusterV3#proxy_auth}
  */
  readonly proxyAuth?: string;
}

export function aksClusterV3SpecConfigProxyToTerraform(struct?: AksClusterV3SpecConfigProxyOutputReference | AksClusterV3SpecConfigProxy): any {
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


export function aksClusterV3SpecConfigProxyToHclTerraform(struct?: AksClusterV3SpecConfigProxyOutputReference | AksClusterV3SpecConfigProxy): any {
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

export class AksClusterV3SpecConfigProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigProxy | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigProxy | undefined) {
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
export interface AksClusterV3SpecConfigSecurity {
  /**
  * Google Groups for RBAC allows you to grant roles to all members of a Google Workspace group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_google_groups_for_rbac AksClusterV3#enable_google_groups_for_rbac}
  */
  readonly enableGoogleGroupsForRbac?: boolean | cdktf.IResolvable;
  /**
  * Enable legacy authorization to support in-cluster permissions for existing clusters or workflows. Prevents full RBAC support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_legacy_authorization AksClusterV3#enable_legacy_authorization}
  */
  readonly enableLegacyAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Workload Identity lets you connect securely to Google APIs from Kubernetes Engine workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_workload_identity AksClusterV3#enable_workload_identity}
  */
  readonly enableWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Clients use this base64-encoded public certificate to authenticate to the cluster endpoint. Certificates don’t rotate automatically and are difficult to revoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#issue_client_certificate AksClusterV3#issue_client_certificate}
  */
  readonly issueClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Provide the security groups here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#security_group AksClusterV3#security_group}
  */
  readonly securityGroup?: string;
}

export function aksClusterV3SpecConfigSecurityToTerraform(struct?: AksClusterV3SpecConfigSecurityOutputReference | AksClusterV3SpecConfigSecurity): any {
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


export function aksClusterV3SpecConfigSecurityToHclTerraform(struct?: AksClusterV3SpecConfigSecurityOutputReference | AksClusterV3SpecConfigSecurity): any {
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

export class AksClusterV3SpecConfigSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSecurity | undefined {
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

  public set internalValue(value: AksClusterV3SpecConfigSecurity | undefined) {
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
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#end AksClusterV3#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#start AksClusterV3#start}
  */
  readonly start?: string;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference {
    return new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#day_of_month AksClusterV3#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#interval_months AksClusterV3#interval_months}
  */
  readonly intervalMonths?: number;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    interval_months: cdktf.numberToTerraform(struct!.intervalMonths),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_months: {
      value: cdktf.numberToHclTerraform(struct!.intervalMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._intervalMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMonths = this._intervalMonths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._intervalMonths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._intervalMonths = value.intervalMonths;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // interval_months - computed: false, optional: true, required: false
  private _intervalMonths?: number; 
  public get intervalMonths() {
    return this.getNumberAttribute('interval_months');
  }
  public set intervalMonths(value: number) {
    this._intervalMonths = value;
  }
  public resetIntervalMonths() {
    this._intervalMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMonthsInput() {
    return this._intervalMonths;
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#interval_days AksClusterV3#interval_days}
  */
  readonly intervalDays?: number;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_days: cdktf.numberToTerraform(struct!.intervalDays),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_days: {
      value: cdktf.numberToHclTerraform(struct!.intervalDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalDays = this._intervalDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalDays = value.intervalDays;
    }
  }

  // interval_days - computed: false, optional: true, required: false
  private _intervalDays?: number; 
  public get intervalDays() {
    return this.getNumberAttribute('interval_days');
  }
  public set intervalDays(value: number) {
    this._intervalDays = value;
  }
  public resetIntervalDays() {
    this._intervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDaysInput() {
    return this._intervalDays;
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#day_of_week AksClusterV3#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#interval_months AksClusterV3#interval_months}
  */
  readonly intervalMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#week_index AksClusterV3#week_index}
  */
  readonly weekIndex?: string;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    interval_months: cdktf.numberToTerraform(struct!.intervalMonths),
    week_index: cdktf.stringToTerraform(struct!.weekIndex),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_months: {
      value: cdktf.numberToHclTerraform(struct!.intervalMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    week_index: {
      value: cdktf.stringToHclTerraform(struct!.weekIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._intervalMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMonths = this._intervalMonths;
    }
    if (this._weekIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekIndex = this._weekIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._intervalMonths = undefined;
      this._weekIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._intervalMonths = value.intervalMonths;
      this._weekIndex = value.weekIndex;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // interval_months - computed: false, optional: true, required: false
  private _intervalMonths?: number; 
  public get intervalMonths() {
    return this.getNumberAttribute('interval_months');
  }
  public set intervalMonths(value: number) {
    this._intervalMonths = value;
  }
  public resetIntervalMonths() {
    this._intervalMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMonthsInput() {
    return this._intervalMonths;
  }

  // week_index - computed: false, optional: true, required: false
  private _weekIndex?: string; 
  public get weekIndex() {
    return this.getStringAttribute('week_index');
  }
  public set weekIndex(value: string) {
    this._weekIndex = value;
  }
  public resetWeekIndex() {
    this._weekIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekIndexInput() {
    return this._weekIndex;
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#day_of_week AksClusterV3#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#interval_weeks AksClusterV3#interval_weeks}
  */
  readonly intervalWeeks?: number;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    interval_weeks: cdktf.numberToTerraform(struct!.intervalWeeks),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_weeks: {
      value: cdktf.numberToHclTerraform(struct!.intervalWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._intervalWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalWeeks = this._intervalWeeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._intervalWeeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._intervalWeeks = value.intervalWeeks;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // interval_weeks - computed: false, optional: true, required: false
  private _intervalWeeks?: number; 
  public get intervalWeeks() {
    return this.getNumberAttribute('interval_weeks');
  }
  public set intervalWeeks(value: number) {
    this._intervalWeeks = value;
  }
  public resetIntervalWeeks() {
    this._intervalWeeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalWeeksInput() {
    return this._intervalWeeks;
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule {
  /**
  * absolute_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#absolute_monthly AksClusterV3#absolute_monthly}
  */
  readonly absoluteMonthly?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly;
  /**
  * daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#daily AksClusterV3#daily}
  */
  readonly daily?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily;
  /**
  * relative_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#relative_monthly AksClusterV3#relative_monthly}
  */
  readonly relativeMonthly?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly;
  /**
  * weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#weekly AksClusterV3#weekly}
  */
  readonly weekly?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_monthly: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToTerraform(struct!.absoluteMonthly),
    daily: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToTerraform(struct!.daily),
    relative_monthly: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToTerraform(struct!.relativeMonthly),
    weekly: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToTerraform(struct!.weekly),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_monthly: {
      value: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToHclTerraform(struct!.absoluteMonthly),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyList",
    },
    daily: {
      value: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyList",
    },
    relative_monthly: {
      value: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToHclTerraform(struct!.relativeMonthly),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyList",
    },
    weekly: {
      value: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteMonthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteMonthly = this._absoluteMonthly?.internalValue;
    }
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._relativeMonthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeMonthly = this._relativeMonthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absoluteMonthly.internalValue = undefined;
      this._daily.internalValue = undefined;
      this._relativeMonthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absoluteMonthly.internalValue = value.absoluteMonthly;
      this._daily.internalValue = value.daily;
      this._relativeMonthly.internalValue = value.relativeMonthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // absolute_monthly - computed: false, optional: true, required: false
  private _absoluteMonthly = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference(this, "absolute_monthly");
  public get absoluteMonthly() {
    return this._absoluteMonthly;
  }
  public putAbsoluteMonthly(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly) {
    this._absoluteMonthly.internalValue = value;
  }
  public resetAbsoluteMonthly() {
    this._absoluteMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteMonthlyInput() {
    return this._absoluteMonthly.internalValue;
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // relative_monthly - computed: false, optional: true, required: false
  private _relativeMonthly = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference(this, "relative_monthly");
  public get relativeMonthly() {
    return this._relativeMonthly;
  }
  public putRelativeMonthly(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly) {
    this._relativeMonthly.internalValue = value;
  }
  public resetRelativeMonthly() {
    this._relativeMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeMonthlyInput() {
    return this._relativeMonthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#duration_hours AksClusterV3#duration_hours}
  */
  readonly durationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#start_date AksClusterV3#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#start_time AksClusterV3#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#utc_offset AksClusterV3#utc_offset}
  */
  readonly utcOffset?: string;
  /**
  * not_allowed_dates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#not_allowed_dates AksClusterV3#not_allowed_dates}
  */
  readonly notAllowedDates?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#schedule AksClusterV3#schedule}
  */
  readonly schedule?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_hours: cdktf.numberToTerraform(struct!.durationHours),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    utc_offset: cdktf.stringToTerraform(struct!.utcOffset),
    not_allowed_dates: cdktf.listMapper(aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToTerraform, true)(struct!.notAllowedDates),
    schedule: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToTerraform(struct!.schedule),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_hours: {
      value: cdktf.numberToHclTerraform(struct!.durationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc_offset: {
      value: cdktf.stringToHclTerraform(struct!.utcOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_allowed_dates: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToHclTerraform, true)(struct!.notAllowedDates),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList",
    },
    schedule: {
      value: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationHours = this._durationHours;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._utcOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.utcOffset = this._utcOffset;
    }
    if (this._notAllowedDates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowedDates = this._notAllowedDates?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationHours = undefined;
      this._startDate = undefined;
      this._startTime = undefined;
      this._utcOffset = undefined;
      this._notAllowedDates.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationHours = value.durationHours;
      this._startDate = value.startDate;
      this._startTime = value.startTime;
      this._utcOffset = value.utcOffset;
      this._notAllowedDates.internalValue = value.notAllowedDates;
      this._schedule.internalValue = value.schedule;
    }
  }

  // duration_hours - computed: false, optional: true, required: false
  private _durationHours?: number; 
  public get durationHours() {
    return this.getNumberAttribute('duration_hours');
  }
  public set durationHours(value: number) {
    this._durationHours = value;
  }
  public resetDurationHours() {
    this._durationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationHoursInput() {
    return this._durationHours;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // utc_offset - computed: false, optional: true, required: false
  private _utcOffset?: string; 
  public get utcOffset() {
    return this.getStringAttribute('utc_offset');
  }
  public set utcOffset(value: string) {
    this._utcOffset = value;
  }
  public resetUtcOffset() {
    this._utcOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcOffsetInput() {
    return this._utcOffset;
  }

  // not_allowed_dates - computed: false, optional: true, required: false
  private _notAllowedDates = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList(this, "not_allowed_dates", false);
  public get notAllowedDates() {
    return this._notAllowedDates;
  }
  public putNotAllowedDates(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable) {
    this._notAllowedDates.internalValue = value;
  }
  public resetNotAllowedDates() {
    this._notAllowedDates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedDatesInput() {
    return this._notAllowedDates.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#end AksClusterV3#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#start AksClusterV3#start}
  */
  readonly start?: string;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference {
    return new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#day AksClusterV3#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#hour_slots AksClusterV3#hour_slots}
  */
  readonly hourSlots?: number[];
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour_slots: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hourSlots),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_slots: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hourSlots),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hourSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourSlots = this._hourSlots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hourSlots = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hourSlots = value.hourSlots;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour_slots - computed: false, optional: true, required: false
  private _hourSlots?: number[]; 
  public get hourSlots() {
    return this.getNumberListAttribute('hour_slots');
  }
  public set hourSlots(value: number[]) {
    this._hourSlots = value;
  }
  public resetHourSlots() {
    this._hourSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourSlotsInput() {
    return this._hourSlots;
  }
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference {
    return new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurationsProperties {
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#maintenance_window AksClusterV3#maintenance_window}
  */
  readonly maintenanceWindow?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow;
  /**
  * not_allowed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#not_allowed_time AksClusterV3#not_allowed_time}
  */
  readonly notAllowedTime?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable;
  /**
  * time_in_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#time_in_week AksClusterV3#time_in_week}
  */
  readonly timeInWeek?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    not_allowed_time: cdktf.listMapper(aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToTerraform, true)(struct!.notAllowedTime),
    time_in_week: cdktf.listMapper(aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToTerraform, true)(struct!.timeInWeek),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesOutputReference | AksClusterV3SpecConfigSpecMaintenanceConfigurationsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window: {
      value: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowList",
    },
    not_allowed_time: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToHclTerraform, true)(struct!.notAllowedTime),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList",
    },
    time_in_week: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToHclTerraform, true)(struct!.timeInWeek),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurationsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._notAllowedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowedTime = this._notAllowedTime?.internalValue;
    }
    if (this._timeInWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInWeek = this._timeInWeek?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindow.internalValue = undefined;
      this._notAllowedTime.internalValue = undefined;
      this._timeInWeek.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._notAllowedTime.internalValue = value.notAllowedTime;
      this._timeInWeek.internalValue = value.timeInWeek;
    }
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // not_allowed_time - computed: false, optional: true, required: false
  private _notAllowedTime = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList(this, "not_allowed_time", false);
  public get notAllowedTime() {
    return this._notAllowedTime;
  }
  public putNotAllowedTime(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable) {
    this._notAllowedTime.internalValue = value;
  }
  public resetNotAllowedTime() {
    this._notAllowedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedTimeInput() {
    return this._notAllowedTime.internalValue;
  }

  // time_in_week - computed: false, optional: true, required: false
  private _timeInWeek = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList(this, "time_in_week", false);
  public get timeInWeek() {
    return this._timeInWeek;
  }
  public putTimeInWeek(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable) {
    this._timeInWeek.internalValue = value;
  }
  public resetTimeInWeek() {
    this._timeInWeek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInWeekInput() {
    return this._timeInWeek.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecMaintenanceConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#properties AksClusterV3#properties}
  */
  readonly properties?: AksClusterV3SpecConfigSpecMaintenanceConfigurationsProperties;
}

export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsToTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesToTerraform(struct!.properties),
  }
}


export function aksClusterV3SpecConfigSpecMaintenanceConfigurationsToHclTerraform(struct?: AksClusterV3SpecConfigSpecMaintenanceConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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
    properties: {
      value: aksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecMaintenanceConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecMaintenanceConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._name = undefined;
      this._type = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._name = value.name;
      this._type = value.type;
      this._properties.internalValue = value.properties;
    }
  }

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

  // properties - computed: false, optional: true, required: false
  private _properties = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: AksClusterV3SpecConfigSpecMaintenanceConfigurationsProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class AksClusterV3SpecConfigSpecMaintenanceConfigurationsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecMaintenanceConfigurationsOutputReference {
    return new AksClusterV3SpecConfigSpecMaintenanceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries {
  /**
  * The name of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#acr_name AksClusterV3#acr_name}
  */
  readonly acrName?: string;
  /**
  * If not specified, defaults to the resource group of the managed cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#resource_group_name AksClusterV3#resource_group_name}
  */
  readonly resourceGroupName?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_name: cdktf.stringToTerraform(struct!.acrName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_name: {
      value: cdktf.stringToHclTerraform(struct!.acrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrName = this._acrName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrName = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrName = value.acrName;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // acr_name - computed: false, optional: true, required: false
  private _acrName?: string; 
  public get acrName() {
    return this.getStringAttribute('acr_name');
  }
  public set acrName(value: string) {
    this._acrName = value;
  }
  public resetAcrName() {
    this._acrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrNameInput() {
    return this._acrName;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfile {
  /**
  * The name of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#acr_name AksClusterV3#acr_name}
  */
  readonly acrName?: string;
  /**
  * If not specified, defaults to the resource group of the managed cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#resource_group_name AksClusterV3#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#registries AksClusterV3#registries}
  */
  readonly registries?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_name: cdktf.stringToTerraform(struct!.acrName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    registries: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToTerraform, true)(struct!.registries),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_name: {
      value: cdktf.stringToHclTerraform(struct!.acrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registries: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToHclTerraform, true)(struct!.registries),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrName = this._acrName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._registries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registries = this._registries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acrName = undefined;
      this._resourceGroupName = undefined;
      this._registries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acrName = value.acrName;
      this._resourceGroupName = value.resourceGroupName;
      this._registries.internalValue = value.registries;
    }
  }

  // acr_name - computed: false, optional: true, required: false
  private _acrName?: string; 
  public get acrName() {
    return this.getStringAttribute('acr_name');
  }
  public set acrName(value: string) {
    this._acrName = value;
  }
  public resetAcrName() {
    this._acrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrNameInput() {
    return this._acrName;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // registries - computed: false, optional: true, required: false
  private _registries = new AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList(this, "registries", false);
  public get registries() {
    return this._registries;
  }
  public putRegistries(value: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable) {
    this._registries.internalValue = value;
  }
  public resetRegistries() {
    this._registries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata {
  /**
  * If not specified, defaults to the resource group of the managed cluster. Valid only if the Log analytics workspace is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#oms_workspace_location AksClusterV3#oms_workspace_location}
  */
  readonly omsWorkspaceLocation?: string;
  /**
  * acr_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#acr_profile AksClusterV3#acr_profile}
  */
  readonly acrProfile?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfile;
}

export function aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataOutputReference | AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oms_workspace_location: cdktf.stringToTerraform(struct!.omsWorkspaceLocation),
    acr_profile: aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileToTerraform(struct!.acrProfile),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataOutputReference | AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oms_workspace_location: {
      value: cdktf.stringToHclTerraform(struct!.omsWorkspaceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acr_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileToHclTerraform(struct!.acrProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._omsWorkspaceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.omsWorkspaceLocation = this._omsWorkspaceLocation;
    }
    if (this._acrProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrProfile = this._acrProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._omsWorkspaceLocation = undefined;
      this._acrProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._omsWorkspaceLocation = value.omsWorkspaceLocation;
      this._acrProfile.internalValue = value.acrProfile;
    }
  }

  // oms_workspace_location - computed: false, optional: true, required: false
  private _omsWorkspaceLocation?: string; 
  public get omsWorkspaceLocation() {
    return this.getStringAttribute('oms_workspace_location');
  }
  public set omsWorkspaceLocation(value: string) {
    this._omsWorkspaceLocation = value;
  }
  public resetOmsWorkspaceLocation() {
    this._omsWorkspaceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omsWorkspaceLocationInput() {
    return this._omsWorkspaceLocation;
  }

  // acr_profile - computed: false, optional: true, required: false
  private _acrProfile = new AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference(this, "acr_profile");
  public get acrProfile() {
    return this._acrProfile;
  }
  public putAcrProfile(value: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataAcrProfile) {
    this._acrProfile.internalValue = value;
  }
  public resetAcrProfile() {
    this._acrProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrProfileInput() {
    return this._acrProfile.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterExtendedLocation {
  /**
  * The name of the extended location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * The type of the extended location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterExtendedLocationToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterExtendedLocationOutputReference | AksClusterV3SpecConfigSpecManagedClusterExtendedLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterExtendedLocationToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterExtendedLocationOutputReference | AksClusterV3SpecConfigSpecManagedClusterExtendedLocation): any {
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

export class AksClusterV3SpecConfigSpecManagedClusterExtendedLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterExtendedLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterExtendedLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
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
export interface AksClusterV3SpecConfigSpecManagedClusterIdentity {
  /**
  * For more information see use managed identities in AKS. Valid values are SystemAssigned, UserAssigned, None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * The keys must be ARM resource IDs in the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#user_assigned_identities AksClusterV3#user_assigned_identities}
  */
  readonly userAssignedIdentities?: { [key: string]: string };
}

export function aksClusterV3SpecConfigSpecManagedClusterIdentityToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identities: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userAssignedIdentities),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterIdentityToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterIdentity): any {
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
    user_assigned_identities: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userAssignedIdentities),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssignedIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentities = this._userAssignedIdentities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._userAssignedIdentities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._userAssignedIdentities = value.userAssignedIdentities;
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

  // user_assigned_identities - computed: false, optional: true, required: false
  private _userAssignedIdentities?: { [key: string]: string }; 
  public get userAssignedIdentities() {
    return this.getStringMapAttribute('user_assigned_identities');
  }
  public set userAssignedIdentities(value: { [key: string]: string }) {
    this._userAssignedIdentities = value;
  }
  public resetUserAssignedIdentities() {
    this._userAssignedIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentitiesInput() {
    return this._userAssignedIdentities;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile {
  /**
  * The list of AAD group object IDs that will have admin role of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#admin_group_object_ids AksClusterV3#admin_group_object_ids}
  */
  readonly adminGroupObjectIds?: string[];
  /**
  * The client AAD application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#client_app_id AksClusterV3#client_app_id}
  */
  readonly clientAppId?: string;
  /**
  * Whether to enable Azure RBAC for Kubernetes authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_azure_rbac AksClusterV3#enable_azure_rbac}
  */
  readonly enableAzureRbac?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable managed AAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#managed AksClusterV3#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * The server AAD application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#server_app_id AksClusterV3#server_app_id}
  */
  readonly serverAppId?: string;
  /**
  * The server AAD application secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#server_app_secret AksClusterV3#server_app_secret}
  */
  readonly serverAppSecret?: string;
  /**
  * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#tenant_id AksClusterV3#tenant_id}
  */
  readonly tenantId?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroupObjectIds),
    client_app_id: cdktf.stringToTerraform(struct!.clientAppId),
    enable_azure_rbac: cdktf.booleanToTerraform(struct!.enableAzureRbac),
    managed: cdktf.booleanToTerraform(struct!.managed),
    server_app_id: cdktf.stringToTerraform(struct!.serverAppId),
    server_app_secret: cdktf.stringToTerraform(struct!.serverAppSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_group_object_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroupObjectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_app_id: {
      value: cdktf.stringToHclTerraform(struct!.clientAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_azure_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableAzureRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_app_id: {
      value: cdktf.stringToHclTerraform(struct!.serverAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_app_secret: {
      value: cdktf.stringToHclTerraform(struct!.serverAppSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroupObjectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroupObjectIds = this._adminGroupObjectIds;
    }
    if (this._clientAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAppId = this._clientAppId;
    }
    if (this._enableAzureRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAzureRbac = this._enableAzureRbac;
    }
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._serverAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAppId = this._serverAppId;
    }
    if (this._serverAppSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAppSecret = this._serverAppSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminGroupObjectIds = undefined;
      this._clientAppId = undefined;
      this._enableAzureRbac = undefined;
      this._managed = undefined;
      this._serverAppId = undefined;
      this._serverAppSecret = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminGroupObjectIds = value.adminGroupObjectIds;
      this._clientAppId = value.clientAppId;
      this._enableAzureRbac = value.enableAzureRbac;
      this._managed = value.managed;
      this._serverAppId = value.serverAppId;
      this._serverAppSecret = value.serverAppSecret;
      this._tenantId = value.tenantId;
    }
  }

  // admin_group_object_ids - computed: false, optional: true, required: false
  private _adminGroupObjectIds?: string[]; 
  public get adminGroupObjectIds() {
    return this.getListAttribute('admin_group_object_ids');
  }
  public set adminGroupObjectIds(value: string[]) {
    this._adminGroupObjectIds = value;
  }
  public resetAdminGroupObjectIds() {
    this._adminGroupObjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupObjectIdsInput() {
    return this._adminGroupObjectIds;
  }

  // client_app_id - computed: false, optional: true, required: false
  private _clientAppId?: string; 
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }
  public set clientAppId(value: string) {
    this._clientAppId = value;
  }
  public resetClientAppId() {
    this._clientAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppIdInput() {
    return this._clientAppId;
  }

  // enable_azure_rbac - computed: false, optional: true, required: false
  private _enableAzureRbac?: boolean | cdktf.IResolvable; 
  public get enableAzureRbac() {
    return this.getBooleanAttribute('enable_azure_rbac');
  }
  public set enableAzureRbac(value: boolean | cdktf.IResolvable) {
    this._enableAzureRbac = value;
  }
  public resetEnableAzureRbac() {
    this._enableAzureRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAzureRbacInput() {
    return this._enableAzureRbac;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // server_app_id - computed: false, optional: true, required: false
  private _serverAppId?: string; 
  public get serverAppId() {
    return this.getStringAttribute('server_app_id');
  }
  public set serverAppId(value: string) {
    this._serverAppId = value;
  }
  public resetServerAppId() {
    this._serverAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAppIdInput() {
    return this._serverAppId;
  }

  // server_app_secret - computed: false, optional: true, required: false
  private _serverAppSecret?: string; 
  public get serverAppSecret() {
    return this.getStringAttribute('server_app_secret');
  }
  public set serverAppSecret(value: string) {
    this._serverAppSecret = value;
  }
  public resetServerAppSecret() {
    this._serverAppSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAppSecretInput() {
    return this._serverAppSecret;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_secret_rotation AksClusterV3#enable_secret_rotation}
  */
  readonly enableSecretRotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#rotation_poll_interval AksClusterV3#rotation_poll_interval}
  */
  readonly rotationPollInterval?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_secret_rotation: cdktf.stringToTerraform(struct!.enableSecretRotation),
    rotation_poll_interval: cdktf.stringToTerraform(struct!.rotationPollInterval),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_secret_rotation: {
      value: cdktf.stringToHclTerraform(struct!.enableSecretRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSecretRotation = undefined;
      this._rotationPollInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSecretRotation = value.enableSecretRotation;
      this._rotationPollInterval = value.rotationPollInterval;
    }
  }

  // enable_secret_rotation - computed: false, optional: true, required: false
  private _enableSecretRotation?: string; 
  public get enableSecretRotation() {
    return this.getStringAttribute('enable_secret_rotation');
  }
  public set enableSecretRotation(value: string) {
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
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider {
  /**
  * Whether the addon profile is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToTerraform(struct!.config),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider): any {
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
    config: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._config.internalValue = value.config;
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

  // config - computed: false, optional: true, required: false
  private _config = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig) {
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
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy {
  /**
  * Whether the addon profile is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy): any {
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

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | undefined) {
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
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting {
  /**
  * Whether the addon profile is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting): any {
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

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | undefined) {
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
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#application_gateway_id AksClusterV3#application_gateway_id}
  */
  readonly applicationGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#application_gateway_name AksClusterV3#application_gateway_name}
  */
  readonly applicationGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#subnet_cidr AksClusterV3#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#subnet_id AksClusterV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#watch_namespace AksClusterV3#watch_namespace}
  */
  readonly watchNamespace?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_gateway_id: cdktf.stringToTerraform(struct!.applicationGatewayId),
    application_gateway_name: cdktf.stringToTerraform(struct!.applicationGatewayName),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    watch_namespace: cdktf.stringToTerraform(struct!.watchNamespace),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watch_namespace: {
      value: cdktf.stringToHclTerraform(struct!.watchNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGatewayId = this._applicationGatewayId;
    }
    if (this._applicationGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGatewayName = this._applicationGatewayName;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._watchNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchNamespace = this._watchNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationGatewayId = undefined;
      this._applicationGatewayName = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._watchNamespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationGatewayId = value.applicationGatewayId;
      this._applicationGatewayName = value.applicationGatewayName;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._watchNamespace = value.watchNamespace;
    }
  }

  // application_gateway_id - computed: false, optional: true, required: false
  private _applicationGatewayId?: string; 
  public get applicationGatewayId() {
    return this.getStringAttribute('application_gateway_id');
  }
  public set applicationGatewayId(value: string) {
    this._applicationGatewayId = value;
  }
  public resetApplicationGatewayId() {
    this._applicationGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGatewayIdInput() {
    return this._applicationGatewayId;
  }

  // application_gateway_name - computed: false, optional: true, required: false
  private _applicationGatewayName?: string; 
  public get applicationGatewayName() {
    return this.getStringAttribute('application_gateway_name');
  }
  public set applicationGatewayName(value: string) {
    this._applicationGatewayName = value;
  }
  public resetApplicationGatewayName() {
    this._applicationGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGatewayNameInput() {
    return this._applicationGatewayName;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // watch_namespace - computed: false, optional: true, required: false
  private _watchNamespace?: string; 
  public get watchNamespace() {
    return this.getStringAttribute('watch_namespace');
  }
  public set watchNamespace(value: string) {
    this._watchNamespace = value;
  }
  public resetWatchNamespace() {
    this._watchNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchNamespaceInput() {
    return this._watchNamespace;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway {
  /**
  * whether addon profile is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToTerraform(struct!.config),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway): any {
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
    config: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._config.internalValue = value.config;
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

  // config - computed: false, optional: true, required: false
  private _config = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig) {
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
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#log_analytics_workspace_resource_id AksClusterV3#log_analytics_workspace_resource_id}
  */
  readonly logAnalyticsWorkspaceResourceId?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_resource_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceResourceId),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_workspace_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceResourceId = this._logAnalyticsWorkspaceResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsWorkspaceResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsWorkspaceResourceId = value.logAnalyticsWorkspaceResourceId;
    }
  }

  // log_analytics_workspace_resource_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceResourceId?: string; 
  public get logAnalyticsWorkspaceResourceId() {
    return this.getStringAttribute('log_analytics_workspace_resource_id');
  }
  public set logAnalyticsWorkspaceResourceId(value: string) {
    this._logAnalyticsWorkspaceResourceId = value;
  }
  public resetLogAnalyticsWorkspaceResourceId() {
    this._logAnalyticsWorkspaceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceResourceIdInput() {
    return this._logAnalyticsWorkspaceResourceId;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent {
  /**
  * Whether the addon profile is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToTerraform(struct!.config),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent): any {
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
    config: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._config.internalValue = value.config;
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

  // config - computed: false, optional: true, required: false
  private _config = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig) {
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
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles {
  /**
  * azure_keyvault_secrets_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#azure_keyvault_secrets_provider AksClusterV3#azure_keyvault_secrets_provider}
  */
  readonly azureKeyvaultSecretsProvider?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider;
  /**
  * azure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#azure_policy AksClusterV3#azure_policy}
  */
  readonly azurePolicy?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy;
  /**
  * http_application_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#http_application_routing AksClusterV3#http_application_routing}
  */
  readonly httpApplicationRouting?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting;
  /**
  * ingress_application_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#ingress_application_gateway AksClusterV3#ingress_application_gateway}
  */
  readonly ingressApplicationGateway?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway;
  /**
  * oms_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#oms_agent AksClusterV3#oms_agent}
  */
  readonly omsAgent?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_keyvault_secrets_provider: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToTerraform(struct!.azureKeyvaultSecretsProvider),
    azure_policy: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToTerraform(struct!.azurePolicy),
    http_application_routing: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToTerraform(struct!.httpApplicationRouting),
    ingress_application_gateway: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToTerraform(struct!.ingressApplicationGateway),
    oms_agent: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToTerraform(struct!.omsAgent),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_keyvault_secrets_provider: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToHclTerraform(struct!.azureKeyvaultSecretsProvider),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderList",
    },
    azure_policy: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToHclTerraform(struct!.azurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyList",
    },
    http_application_routing: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToHclTerraform(struct!.httpApplicationRouting),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingList",
    },
    ingress_application_gateway: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToHclTerraform(struct!.ingressApplicationGateway),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayList",
    },
    oms_agent: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToHclTerraform(struct!.omsAgent),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureKeyvaultSecretsProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyvaultSecretsProvider = this._azureKeyvaultSecretsProvider?.internalValue;
    }
    if (this._azurePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePolicy = this._azurePolicy?.internalValue;
    }
    if (this._httpApplicationRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpApplicationRouting = this._httpApplicationRouting?.internalValue;
    }
    if (this._ingressApplicationGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressApplicationGateway = this._ingressApplicationGateway?.internalValue;
    }
    if (this._omsAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.omsAgent = this._omsAgent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureKeyvaultSecretsProvider.internalValue = undefined;
      this._azurePolicy.internalValue = undefined;
      this._httpApplicationRouting.internalValue = undefined;
      this._ingressApplicationGateway.internalValue = undefined;
      this._omsAgent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureKeyvaultSecretsProvider.internalValue = value.azureKeyvaultSecretsProvider;
      this._azurePolicy.internalValue = value.azurePolicy;
      this._httpApplicationRouting.internalValue = value.httpApplicationRouting;
      this._ingressApplicationGateway.internalValue = value.ingressApplicationGateway;
      this._omsAgent.internalValue = value.omsAgent;
    }
  }

  // azure_keyvault_secrets_provider - computed: false, optional: true, required: false
  private _azureKeyvaultSecretsProvider = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference(this, "azure_keyvault_secrets_provider");
  public get azureKeyvaultSecretsProvider() {
    return this._azureKeyvaultSecretsProvider;
  }
  public putAzureKeyvaultSecretsProvider(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider) {
    this._azureKeyvaultSecretsProvider.internalValue = value;
  }
  public resetAzureKeyvaultSecretsProvider() {
    this._azureKeyvaultSecretsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyvaultSecretsProviderInput() {
    return this._azureKeyvaultSecretsProvider.internalValue;
  }

  // azure_policy - computed: false, optional: true, required: false
  private _azurePolicy = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference(this, "azure_policy");
  public get azurePolicy() {
    return this._azurePolicy;
  }
  public putAzurePolicy(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy) {
    this._azurePolicy.internalValue = value;
  }
  public resetAzurePolicy() {
    this._azurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyInput() {
    return this._azurePolicy.internalValue;
  }

  // http_application_routing - computed: false, optional: true, required: false
  private _httpApplicationRouting = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference(this, "http_application_routing");
  public get httpApplicationRouting() {
    return this._httpApplicationRouting;
  }
  public putHttpApplicationRouting(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting) {
    this._httpApplicationRouting.internalValue = value;
  }
  public resetHttpApplicationRouting() {
    this._httpApplicationRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpApplicationRoutingInput() {
    return this._httpApplicationRouting.internalValue;
  }

  // ingress_application_gateway - computed: false, optional: true, required: false
  private _ingressApplicationGateway = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference(this, "ingress_application_gateway");
  public get ingressApplicationGateway() {
    return this._ingressApplicationGateway;
  }
  public putIngressApplicationGateway(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway) {
    this._ingressApplicationGateway.internalValue = value;
  }
  public resetIngressApplicationGateway() {
    this._ingressApplicationGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressApplicationGatewayInput() {
    return this._ingressApplicationGateway.internalValue;
  }

  // oms_agent - computed: false, optional: true, required: false
  private _omsAgent = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference(this, "oms_agent");
  public get omsAgent() {
    return this._omsAgent;
  }
  public putOmsAgent(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent) {
    this._omsAgent.internalValue = value;
  }
  public resetOmsAgent() {
    this._omsAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omsAgentInput() {
    return this._omsAgent.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile {
  /**
  * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see API server authorized IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#authorized_ip_ranges AksClusterV3#authorized_ip_ranges}
  */
  readonly authorizedIpRanges?: string[];
  /**
  * Whether to disable run command for the cluster or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#disable_run_command AksClusterV3#disable_run_command}
  */
  readonly disableRunCommand?: boolean | cdktf.IResolvable;
  /**
  * For more details, see https://learn.microsoft.com/en-us/azure/aks/private-clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_private_cluster AksClusterV3#enable_private_cluster}
  */
  readonly enablePrivateCluster?: boolean | cdktf.IResolvable;
  /**
  * Whether to create additional public FQDN for private cluster or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_private_cluster_public_fqdn AksClusterV3#enable_private_cluster_public_fqdn}
  */
  readonly enablePrivateClusterPublicFqdn?: boolean | cdktf.IResolvable;
  /**
  * The default is System. For more details see configure private DNS zone. Allowed values are system and none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#private_dns_zone AksClusterV3#private_dns_zone}
  */
  readonly privateDnsZone?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedIpRanges),
    disable_run_command: cdktf.booleanToTerraform(struct!.disableRunCommand),
    enable_private_cluster: cdktf.booleanToTerraform(struct!.enablePrivateCluster),
    enable_private_cluster_public_fqdn: cdktf.booleanToTerraform(struct!.enablePrivateClusterPublicFqdn),
    private_dns_zone: cdktf.stringToTerraform(struct!.privateDnsZone),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_run_command: {
      value: cdktf.booleanToHclTerraform(struct!.disableRunCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_cluster_public_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateClusterPublicFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_dns_zone: {
      value: cdktf.stringToHclTerraform(struct!.privateDnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedIpRanges = this._authorizedIpRanges;
    }
    if (this._disableRunCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRunCommand = this._disableRunCommand;
    }
    if (this._enablePrivateCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateCluster = this._enablePrivateCluster;
    }
    if (this._enablePrivateClusterPublicFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateClusterPublicFqdn = this._enablePrivateClusterPublicFqdn;
    }
    if (this._privateDnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDnsZone = this._privateDnsZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedIpRanges = undefined;
      this._disableRunCommand = undefined;
      this._enablePrivateCluster = undefined;
      this._enablePrivateClusterPublicFqdn = undefined;
      this._privateDnsZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedIpRanges = value.authorizedIpRanges;
      this._disableRunCommand = value.disableRunCommand;
      this._enablePrivateCluster = value.enablePrivateCluster;
      this._enablePrivateClusterPublicFqdn = value.enablePrivateClusterPublicFqdn;
      this._privateDnsZone = value.privateDnsZone;
    }
  }

  // authorized_ip_ranges - computed: false, optional: true, required: false
  private _authorizedIpRanges?: string[]; 
  public get authorizedIpRanges() {
    return this.getListAttribute('authorized_ip_ranges');
  }
  public set authorizedIpRanges(value: string[]) {
    this._authorizedIpRanges = value;
  }
  public resetAuthorizedIpRanges() {
    this._authorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedIpRangesInput() {
    return this._authorizedIpRanges;
  }

  // disable_run_command - computed: false, optional: true, required: false
  private _disableRunCommand?: boolean | cdktf.IResolvable; 
  public get disableRunCommand() {
    return this.getBooleanAttribute('disable_run_command');
  }
  public set disableRunCommand(value: boolean | cdktf.IResolvable) {
    this._disableRunCommand = value;
  }
  public resetDisableRunCommand() {
    this._disableRunCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRunCommandInput() {
    return this._disableRunCommand;
  }

  // enable_private_cluster - computed: false, optional: true, required: false
  private _enablePrivateCluster?: boolean | cdktf.IResolvable; 
  public get enablePrivateCluster() {
    return this.getBooleanAttribute('enable_private_cluster');
  }
  public set enablePrivateCluster(value: boolean | cdktf.IResolvable) {
    this._enablePrivateCluster = value;
  }
  public resetEnablePrivateCluster() {
    this._enablePrivateCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateClusterInput() {
    return this._enablePrivateCluster;
  }

  // enable_private_cluster_public_fqdn - computed: false, optional: true, required: false
  private _enablePrivateClusterPublicFqdn?: boolean | cdktf.IResolvable; 
  public get enablePrivateClusterPublicFqdn() {
    return this.getBooleanAttribute('enable_private_cluster_public_fqdn');
  }
  public set enablePrivateClusterPublicFqdn(value: boolean | cdktf.IResolvable) {
    this._enablePrivateClusterPublicFqdn = value;
  }
  public resetEnablePrivateClusterPublicFqdn() {
    this._enablePrivateClusterPublicFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateClusterPublicFqdnInput() {
    return this._enablePrivateClusterPublicFqdn;
  }

  // private_dns_zone - computed: false, optional: true, required: false
  private _privateDnsZone?: string; 
  public get privateDnsZone() {
    return this.getStringAttribute('private_dns_zone');
  }
  public set privateDnsZone(value: string) {
    this._privateDnsZone = value;
  }
  public resetPrivateDnsZone() {
    this._privateDnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneInput() {
    return this._privateDnsZone;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile {
  /**
  * Valid values are true and false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#balance_similar_node_groups AksClusterV3#balance_similar_node_groups}
  */
  readonly balanceSimilarNodeGroups?: string;
  /**
  * If not specified, the default is random. See https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders for more information. Valid values are least-waste, most-pods, priority, random.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#expander AksClusterV3#expander}
  */
  readonly expander?: string;
  /**
  * The default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_empty_bulk_delete AksClusterV3#max_empty_bulk_delete}
  */
  readonly maxEmptyBulkDelete?: string;
  /**
  * The default is 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_graceful_termination_sec AksClusterV3#max_graceful_termination_sec}
  */
  readonly maxGracefulTerminationSec?: string;
  /**
  * The default is 15m. Values must be an integer followed by an m. No unit of time other than minutes (m) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_node_provision_time AksClusterV3#max_node_provision_time}
  */
  readonly maxNodeProvisionTime?: string;
  /**
  * The default is 45. The maximum is 100 and the minimum is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#max_total_unready_percentage AksClusterV3#max_total_unready_percentage}
  */
  readonly maxTotalUnreadyPercentage?: string;
  /**
  * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is 0s. Values must be an integer followed by a unit (s for seconds, m for minutes, h for hours, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#new_pod_scale_up_delay AksClusterV3#new_pod_scale_up_delay}
  */
  readonly newPodScaleUpDelay?: string;
  /**
  * This must be an integer. The default is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#ok_total_unready_count AksClusterV3#ok_total_unready_count}
  */
  readonly okTotalUnreadyCount?: string;
  /**
  * The default is 10m. Values must be an integer followed by an m. No unit of time other than minutes (m) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#scale_down_delay_after_add AksClusterV3#scale_down_delay_after_add}
  */
  readonly scaleDownDelayAfterAdd?: string;
  /**
  * The default is the scan-interval. Values must be an integer followed by an m. No unit of time other than minutes (m) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#scale_down_delay_after_delete AksClusterV3#scale_down_delay_after_delete}
  */
  readonly scaleDownDelayAfterDelete?: string;
  /**
  * The default is 3m. Values must be an integer followed by an m. No unit of time other than minutes (m) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#scale_down_delay_after_failure AksClusterV3#scale_down_delay_after_failure}
  */
  readonly scaleDownDelayAfterFailure?: string;
  /**
  * The default is 10m. Values must be an integer followed by an m. No unit of time other than minutes (m) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#scale_down_unneeded_time AksClusterV3#scale_down_unneeded_time}
  */
  readonly scaleDownUnneededTime?: string;
  /**
  * The default is 20m. Values must be an integer followed by an m. No unit of time other than minutes (m) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#scale_down_unready_time AksClusterV3#scale_down_unready_time}
  */
  readonly scaleDownUnreadyTime?: string;
  /**
  * The default is 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#scale_down_utilization_threshold AksClusterV3#scale_down_utilization_threshold}
  */
  readonly scaleDownUtilizationThreshold?: string;
  /**
  * The default is 10. Values must be an integer number of seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#scan_interval AksClusterV3#scan_interval}
  */
  readonly scanInterval?: string;
  /**
  * The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#skip_nodes_with_local_storage AksClusterV3#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: string;
  /**
  * The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#skip_nodes_with_system_pods AksClusterV3#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balance_similar_node_groups: cdktf.stringToTerraform(struct!.balanceSimilarNodeGroups),
    expander: cdktf.stringToTerraform(struct!.expander),
    max_empty_bulk_delete: cdktf.stringToTerraform(struct!.maxEmptyBulkDelete),
    max_graceful_termination_sec: cdktf.stringToTerraform(struct!.maxGracefulTerminationSec),
    max_node_provision_time: cdktf.stringToTerraform(struct!.maxNodeProvisionTime),
    max_total_unready_percentage: cdktf.stringToTerraform(struct!.maxTotalUnreadyPercentage),
    new_pod_scale_up_delay: cdktf.stringToTerraform(struct!.newPodScaleUpDelay),
    ok_total_unready_count: cdktf.stringToTerraform(struct!.okTotalUnreadyCount),
    scale_down_delay_after_add: cdktf.stringToTerraform(struct!.scaleDownDelayAfterAdd),
    scale_down_delay_after_delete: cdktf.stringToTerraform(struct!.scaleDownDelayAfterDelete),
    scale_down_delay_after_failure: cdktf.stringToTerraform(struct!.scaleDownDelayAfterFailure),
    scale_down_unneeded_time: cdktf.stringToTerraform(struct!.scaleDownUnneededTime),
    scale_down_unready_time: cdktf.stringToTerraform(struct!.scaleDownUnreadyTime),
    scale_down_utilization_threshold: cdktf.stringToTerraform(struct!.scaleDownUtilizationThreshold),
    scan_interval: cdktf.stringToTerraform(struct!.scanInterval),
    skip_nodes_with_local_storage: cdktf.stringToTerraform(struct!.skipNodesWithLocalStorage),
    skip_nodes_with_system_pods: cdktf.stringToTerraform(struct!.skipNodesWithSystemPods),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balance_similar_node_groups: {
      value: cdktf.stringToHclTerraform(struct!.balanceSimilarNodeGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expander: {
      value: cdktf.stringToHclTerraform(struct!.expander),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_empty_bulk_delete: {
      value: cdktf.stringToHclTerraform(struct!.maxEmptyBulkDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_graceful_termination_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxGracefulTerminationSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_provision_time: {
      value: cdktf.stringToHclTerraform(struct!.maxNodeProvisionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_total_unready_percentage: {
      value: cdktf.stringToHclTerraform(struct!.maxTotalUnreadyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_pod_scale_up_delay: {
      value: cdktf.stringToHclTerraform(struct!.newPodScaleUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ok_total_unready_count: {
      value: cdktf.stringToHclTerraform(struct!.okTotalUnreadyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_add: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_delete: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_failure: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_unneeded_time: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUnneededTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_unready_time: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUnreadyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_utilization_threshold: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUtilizationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_interval: {
      value: cdktf.stringToHclTerraform(struct!.scanInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_nodes_with_local_storage: {
      value: cdktf.stringToHclTerraform(struct!.skipNodesWithLocalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_nodes_with_system_pods: {
      value: cdktf.stringToHclTerraform(struct!.skipNodesWithSystemPods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balanceSimilarNodeGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.balanceSimilarNodeGroups = this._balanceSimilarNodeGroups;
    }
    if (this._expander !== undefined) {
      hasAnyValues = true;
      internalValueResult.expander = this._expander;
    }
    if (this._maxEmptyBulkDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEmptyBulkDelete = this._maxEmptyBulkDelete;
    }
    if (this._maxGracefulTerminationSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGracefulTerminationSec = this._maxGracefulTerminationSec;
    }
    if (this._maxNodeProvisionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeProvisionTime = this._maxNodeProvisionTime;
    }
    if (this._maxTotalUnreadyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalUnreadyPercentage = this._maxTotalUnreadyPercentage;
    }
    if (this._newPodScaleUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPodScaleUpDelay = this._newPodScaleUpDelay;
    }
    if (this._okTotalUnreadyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.okTotalUnreadyCount = this._okTotalUnreadyCount;
    }
    if (this._scaleDownDelayAfterAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterAdd = this._scaleDownDelayAfterAdd;
    }
    if (this._scaleDownDelayAfterDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterDelete = this._scaleDownDelayAfterDelete;
    }
    if (this._scaleDownDelayAfterFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterFailure = this._scaleDownDelayAfterFailure;
    }
    if (this._scaleDownUnneededTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUnneededTime = this._scaleDownUnneededTime;
    }
    if (this._scaleDownUnreadyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUnreadyTime = this._scaleDownUnreadyTime;
    }
    if (this._scaleDownUtilizationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUtilizationThreshold = this._scaleDownUtilizationThreshold;
    }
    if (this._scanInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanInterval = this._scanInterval;
    }
    if (this._skipNodesWithLocalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithLocalStorage = this._skipNodesWithLocalStorage;
    }
    if (this._skipNodesWithSystemPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithSystemPods = this._skipNodesWithSystemPods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._balanceSimilarNodeGroups = undefined;
      this._expander = undefined;
      this._maxEmptyBulkDelete = undefined;
      this._maxGracefulTerminationSec = undefined;
      this._maxNodeProvisionTime = undefined;
      this._maxTotalUnreadyPercentage = undefined;
      this._newPodScaleUpDelay = undefined;
      this._okTotalUnreadyCount = undefined;
      this._scaleDownDelayAfterAdd = undefined;
      this._scaleDownDelayAfterDelete = undefined;
      this._scaleDownDelayAfterFailure = undefined;
      this._scaleDownUnneededTime = undefined;
      this._scaleDownUnreadyTime = undefined;
      this._scaleDownUtilizationThreshold = undefined;
      this._scanInterval = undefined;
      this._skipNodesWithLocalStorage = undefined;
      this._skipNodesWithSystemPods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._balanceSimilarNodeGroups = value.balanceSimilarNodeGroups;
      this._expander = value.expander;
      this._maxEmptyBulkDelete = value.maxEmptyBulkDelete;
      this._maxGracefulTerminationSec = value.maxGracefulTerminationSec;
      this._maxNodeProvisionTime = value.maxNodeProvisionTime;
      this._maxTotalUnreadyPercentage = value.maxTotalUnreadyPercentage;
      this._newPodScaleUpDelay = value.newPodScaleUpDelay;
      this._okTotalUnreadyCount = value.okTotalUnreadyCount;
      this._scaleDownDelayAfterAdd = value.scaleDownDelayAfterAdd;
      this._scaleDownDelayAfterDelete = value.scaleDownDelayAfterDelete;
      this._scaleDownDelayAfterFailure = value.scaleDownDelayAfterFailure;
      this._scaleDownUnneededTime = value.scaleDownUnneededTime;
      this._scaleDownUnreadyTime = value.scaleDownUnreadyTime;
      this._scaleDownUtilizationThreshold = value.scaleDownUtilizationThreshold;
      this._scanInterval = value.scanInterval;
      this._skipNodesWithLocalStorage = value.skipNodesWithLocalStorage;
      this._skipNodesWithSystemPods = value.skipNodesWithSystemPods;
    }
  }

  // balance_similar_node_groups - computed: false, optional: true, required: false
  private _balanceSimilarNodeGroups?: string; 
  public get balanceSimilarNodeGroups() {
    return this.getStringAttribute('balance_similar_node_groups');
  }
  public set balanceSimilarNodeGroups(value: string) {
    this._balanceSimilarNodeGroups = value;
  }
  public resetBalanceSimilarNodeGroups() {
    this._balanceSimilarNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceSimilarNodeGroupsInput() {
    return this._balanceSimilarNodeGroups;
  }

  // expander - computed: false, optional: true, required: false
  private _expander?: string; 
  public get expander() {
    return this.getStringAttribute('expander');
  }
  public set expander(value: string) {
    this._expander = value;
  }
  public resetExpander() {
    this._expander = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expanderInput() {
    return this._expander;
  }

  // max_empty_bulk_delete - computed: false, optional: true, required: false
  private _maxEmptyBulkDelete?: string; 
  public get maxEmptyBulkDelete() {
    return this.getStringAttribute('max_empty_bulk_delete');
  }
  public set maxEmptyBulkDelete(value: string) {
    this._maxEmptyBulkDelete = value;
  }
  public resetMaxEmptyBulkDelete() {
    this._maxEmptyBulkDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEmptyBulkDeleteInput() {
    return this._maxEmptyBulkDelete;
  }

  // max_graceful_termination_sec - computed: false, optional: true, required: false
  private _maxGracefulTerminationSec?: string; 
  public get maxGracefulTerminationSec() {
    return this.getStringAttribute('max_graceful_termination_sec');
  }
  public set maxGracefulTerminationSec(value: string) {
    this._maxGracefulTerminationSec = value;
  }
  public resetMaxGracefulTerminationSec() {
    this._maxGracefulTerminationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGracefulTerminationSecInput() {
    return this._maxGracefulTerminationSec;
  }

  // max_node_provision_time - computed: false, optional: true, required: false
  private _maxNodeProvisionTime?: string; 
  public get maxNodeProvisionTime() {
    return this.getStringAttribute('max_node_provision_time');
  }
  public set maxNodeProvisionTime(value: string) {
    this._maxNodeProvisionTime = value;
  }
  public resetMaxNodeProvisionTime() {
    this._maxNodeProvisionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeProvisionTimeInput() {
    return this._maxNodeProvisionTime;
  }

  // max_total_unready_percentage - computed: false, optional: true, required: false
  private _maxTotalUnreadyPercentage?: string; 
  public get maxTotalUnreadyPercentage() {
    return this.getStringAttribute('max_total_unready_percentage');
  }
  public set maxTotalUnreadyPercentage(value: string) {
    this._maxTotalUnreadyPercentage = value;
  }
  public resetMaxTotalUnreadyPercentage() {
    this._maxTotalUnreadyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalUnreadyPercentageInput() {
    return this._maxTotalUnreadyPercentage;
  }

  // new_pod_scale_up_delay - computed: false, optional: true, required: false
  private _newPodScaleUpDelay?: string; 
  public get newPodScaleUpDelay() {
    return this.getStringAttribute('new_pod_scale_up_delay');
  }
  public set newPodScaleUpDelay(value: string) {
    this._newPodScaleUpDelay = value;
  }
  public resetNewPodScaleUpDelay() {
    this._newPodScaleUpDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPodScaleUpDelayInput() {
    return this._newPodScaleUpDelay;
  }

  // ok_total_unready_count - computed: false, optional: true, required: false
  private _okTotalUnreadyCount?: string; 
  public get okTotalUnreadyCount() {
    return this.getStringAttribute('ok_total_unready_count');
  }
  public set okTotalUnreadyCount(value: string) {
    this._okTotalUnreadyCount = value;
  }
  public resetOkTotalUnreadyCount() {
    this._okTotalUnreadyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okTotalUnreadyCountInput() {
    return this._okTotalUnreadyCount;
  }

  // scale_down_delay_after_add - computed: false, optional: true, required: false
  private _scaleDownDelayAfterAdd?: string; 
  public get scaleDownDelayAfterAdd() {
    return this.getStringAttribute('scale_down_delay_after_add');
  }
  public set scaleDownDelayAfterAdd(value: string) {
    this._scaleDownDelayAfterAdd = value;
  }
  public resetScaleDownDelayAfterAdd() {
    this._scaleDownDelayAfterAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterAddInput() {
    return this._scaleDownDelayAfterAdd;
  }

  // scale_down_delay_after_delete - computed: false, optional: true, required: false
  private _scaleDownDelayAfterDelete?: string; 
  public get scaleDownDelayAfterDelete() {
    return this.getStringAttribute('scale_down_delay_after_delete');
  }
  public set scaleDownDelayAfterDelete(value: string) {
    this._scaleDownDelayAfterDelete = value;
  }
  public resetScaleDownDelayAfterDelete() {
    this._scaleDownDelayAfterDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterDeleteInput() {
    return this._scaleDownDelayAfterDelete;
  }

  // scale_down_delay_after_failure - computed: false, optional: true, required: false
  private _scaleDownDelayAfterFailure?: string; 
  public get scaleDownDelayAfterFailure() {
    return this.getStringAttribute('scale_down_delay_after_failure');
  }
  public set scaleDownDelayAfterFailure(value: string) {
    this._scaleDownDelayAfterFailure = value;
  }
  public resetScaleDownDelayAfterFailure() {
    this._scaleDownDelayAfterFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterFailureInput() {
    return this._scaleDownDelayAfterFailure;
  }

  // scale_down_unneeded_time - computed: false, optional: true, required: false
  private _scaleDownUnneededTime?: string; 
  public get scaleDownUnneededTime() {
    return this.getStringAttribute('scale_down_unneeded_time');
  }
  public set scaleDownUnneededTime(value: string) {
    this._scaleDownUnneededTime = value;
  }
  public resetScaleDownUnneededTime() {
    this._scaleDownUnneededTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnneededTimeInput() {
    return this._scaleDownUnneededTime;
  }

  // scale_down_unready_time - computed: false, optional: true, required: false
  private _scaleDownUnreadyTime?: string; 
  public get scaleDownUnreadyTime() {
    return this.getStringAttribute('scale_down_unready_time');
  }
  public set scaleDownUnreadyTime(value: string) {
    this._scaleDownUnreadyTime = value;
  }
  public resetScaleDownUnreadyTime() {
    this._scaleDownUnreadyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnreadyTimeInput() {
    return this._scaleDownUnreadyTime;
  }

  // scale_down_utilization_threshold - computed: false, optional: true, required: false
  private _scaleDownUtilizationThreshold?: string; 
  public get scaleDownUtilizationThreshold() {
    return this.getStringAttribute('scale_down_utilization_threshold');
  }
  public set scaleDownUtilizationThreshold(value: string) {
    this._scaleDownUtilizationThreshold = value;
  }
  public resetScaleDownUtilizationThreshold() {
    this._scaleDownUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUtilizationThresholdInput() {
    return this._scaleDownUtilizationThreshold;
  }

  // scan_interval - computed: false, optional: true, required: false
  private _scanInterval?: string; 
  public get scanInterval() {
    return this.getStringAttribute('scan_interval');
  }
  public set scanInterval(value: string) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // skip_nodes_with_local_storage - computed: false, optional: true, required: false
  private _skipNodesWithLocalStorage?: string; 
  public get skipNodesWithLocalStorage() {
    return this.getStringAttribute('skip_nodes_with_local_storage');
  }
  public set skipNodesWithLocalStorage(value: string) {
    this._skipNodesWithLocalStorage = value;
  }
  public resetSkipNodesWithLocalStorage() {
    this._skipNodesWithLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithLocalStorageInput() {
    return this._skipNodesWithLocalStorage;
  }

  // skip_nodes_with_system_pods - computed: false, optional: true, required: false
  private _skipNodesWithSystemPods?: string; 
  public get skipNodesWithSystemPods() {
    return this.getStringAttribute('skip_nodes_with_system_pods');
  }
  public set skipNodesWithSystemPods(value: string) {
    this._skipNodesWithSystemPods = value;
  }
  public resetSkipNodesWithSystemPods() {
    this._skipNodesWithSystemPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithSystemPodsInput() {
    return this._skipNodesWithSystemPods;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile {
  /**
  * Valid values are None, Unmanaged, NodeImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#node_os_upgrade_channel AksClusterV3#node_os_upgrade_channel}
  */
  readonly nodeOsUpgradeChannel?: string;
  /**
  * Valid values are rapid, stable, patch, node-image, none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#upgrade_channel AksClusterV3#upgrade_channel}
  */
  readonly upgradeChannel?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_os_upgrade_channel: cdktf.stringToTerraform(struct!.nodeOsUpgradeChannel),
    upgrade_channel: cdktf.stringToTerraform(struct!.upgradeChannel),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_os_upgrade_channel: {
      value: cdktf.stringToHclTerraform(struct!.nodeOsUpgradeChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_channel: {
      value: cdktf.stringToHclTerraform(struct!.upgradeChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeOsUpgradeChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeOsUpgradeChannel = this._nodeOsUpgradeChannel;
    }
    if (this._upgradeChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeChannel = this._upgradeChannel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeOsUpgradeChannel = undefined;
      this._upgradeChannel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeOsUpgradeChannel = value.nodeOsUpgradeChannel;
      this._upgradeChannel = value.upgradeChannel;
    }
  }

  // node_os_upgrade_channel - computed: false, optional: true, required: false
  private _nodeOsUpgradeChannel?: string; 
  public get nodeOsUpgradeChannel() {
    return this.getStringAttribute('node_os_upgrade_channel');
  }
  public set nodeOsUpgradeChannel(value: string) {
    this._nodeOsUpgradeChannel = value;
  }
  public resetNodeOsUpgradeChannel() {
    this._nodeOsUpgradeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsUpgradeChannelInput() {
    return this._nodeOsUpgradeChannel;
  }

  // upgrade_channel - computed: false, optional: true, required: false
  private _upgradeChannel?: string; 
  public get upgradeChannel() {
    return this.getStringAttribute('upgrade_channel');
  }
  public set upgradeChannel(value: string) {
    this._upgradeChannel = value;
  }
  public resetUpgradeChannel() {
    this._upgradeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeChannelInput() {
    return this._upgradeChannel;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig {
  /**
  * The HTTP proxy server endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#http_proxy AksClusterV3#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The HTTPS proxy server endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#https_proxy AksClusterV3#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The endpoints that should not go through proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#no_proxy AksClusterV3#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Alternative CA cert to use for connecting to proxy servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#trusted_ca AksClusterV3#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noProxy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._trustedCa = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._trustedCa = value.trustedCa;
    }
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
  private _noProxy?: string[]; 
  public get noProxy() {
    return this.getListAttribute('no_proxy');
  }
  public set noProxy(value: string[]) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity {
  /**
  * value must be ARM resource ID in the form: /subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<identity-name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#resource_id AksClusterV3#resource_id}
  */
  readonly resourceId?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile {
  /**
  * kubelet_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#kubelet_identity AksClusterV3#kubelet_identity}
  */
  readonly kubeletIdentity?: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubelet_identity: aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToTerraform(struct!.kubeletIdentity),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubelet_identity: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToHclTerraform(struct!.kubeletIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeletIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletIdentity = this._kubeletIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubeletIdentity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubeletIdentity.internalValue = value.kubeletIdentity;
    }
  }

  // kubelet_identity - computed: false, optional: true, required: false
  private _kubeletIdentity = new AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference(this, "kubelet_identity");
  public get kubeletIdentity() {
    return this._kubeletIdentity;
  }
  public putKubeletIdentity(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity) {
    this._kubeletIdentity.internalValue = value;
  }
  public resetKubeletIdentity() {
    this._kubeletIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletIdentityInput() {
    return this._kubeletIdentity.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys {
  /**
  * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key_data AksClusterV3#key_data}
  */
  readonly keyData?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyData = value.keyData;
    }
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSsh {
  /**
  * public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#public_keys AksClusterV3#public_keys}
  */
  readonly publicKeys?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_keys: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToTerraform, true)(struct!.publicKeys),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_keys: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToHclTerraform, true)(struct!.publicKeys),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKeys.internalValue = value.publicKeys;
    }
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys = new AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysList(this, "public_keys", false);
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys[] | cdktf.IResolvable) {
    this._publicKeys.internalValue = value;
  }
  public resetPublicKeys() {
    this._publicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile {
  /**
  * The administrator username to use for Linux VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#admin_username AksClusterV3#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#ssh AksClusterV3#ssh}
  */
  readonly ssh?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSsh;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh: aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshToTerraform(struct!.ssh),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._ssh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._ssh.internalValue = value.ssh;
    }
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPs {
  /**
  * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#count AksClusterV3#count}
  */
  readonly count?: number;
  /**
  * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#count_i_pv_6 AksClusterV3#count_i_pv_6}
  */
  readonly countIPv6?: number;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    count_i_pv_6: cdktf.numberToTerraform(struct!.countIPv6),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPs): any {
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
    count_i_pv_6: {
      value: cdktf.numberToHclTerraform(struct!.countIPv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._countIPv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.countIPv6 = this._countIPv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._countIPv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._countIPv6 = value.countIPv6;
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

  // count_i_pv_6 - computed: false, optional: true, required: false
  private _countIPv6?: number; 
  public get countIPv6() {
    return this.getNumberAttribute('count_i_pv_6');
  }
  public set countIPv6(value: number) {
    this._countIPv6 = value;
  }
  public resetCountIPv6() {
    this._countIPv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countIPv6Input() {
    return this._countIPv6;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPs {
  /**
  * public_i_ps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#public_i_ps AksClusterV3#public_i_ps}
  */
  readonly publicIPs?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_i_ps: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsToTerraform, true)(struct!.publicIPs),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_i_ps: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsToHclTerraform, true)(struct!.publicIPs),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIPs = this._publicIPs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIPs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIPs.internalValue = value.publicIPs;
    }
  }

  // public_i_ps - computed: false, optional: true, required: false
  private _publicIPs = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPsList(this, "public_i_ps", false);
  public get publicIPs() {
    return this._publicIPs;
  }
  public putPublicIPs(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsPublicIPs[] | cdktf.IResolvable) {
    this._publicIPs.internalValue = value;
  }
  public resetPublicIPs() {
    this._publicIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIPsInput() {
    return this._publicIPs.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes {
  /**
  * public_ip_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#public_ip_prefixes AksClusterV3#public_ip_prefixes}
  */
  readonly publicIpPrefixes?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip_prefixes: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToTerraform, true)(struct!.publicIpPrefixes),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip_prefixes: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToHclTerraform, true)(struct!.publicIpPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIpPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpPrefixes = this._publicIpPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIpPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIpPrefixes.internalValue = value.publicIpPrefixes;
    }
  }

  // public_ip_prefixes - computed: false, optional: true, required: false
  private _publicIpPrefixes = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList(this, "public_ip_prefixes", false);
  public get publicIpPrefixes() {
    return this._publicIpPrefixes;
  }
  public putPublicIpPrefixes(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable) {
    this._publicIpPrefixes.internalValue = value;
  }
  public resetPublicIpPrefixes() {
    this._publicIpPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixesInput() {
    return this._publicIpPrefixes.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile {
  /**
  * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#allocated_outbound_ports AksClusterV3#allocated_outbound_ports}
  */
  readonly allocatedOutboundPorts?: number;
  /**
  * Enable multiple standard load balancers per AKS cluster or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enable_multiple_standard_load_balancers AksClusterV3#enable_multiple_standard_load_balancers}
  */
  readonly enableMultipleStandardLoadBalancers?: boolean | cdktf.IResolvable;
  /**
  * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#idle_timeout_in_minutes AksClusterV3#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * effective_outbound_i_ps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#effective_outbound_i_ps AksClusterV3#effective_outbound_i_ps}
  */
  readonly effectiveOutboundIPs?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs[] | cdktf.IResolvable;
  /**
  * managed_outbound_i_ps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#managed_outbound_i_ps AksClusterV3#managed_outbound_i_ps}
  */
  readonly managedOutboundIPs?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPs;
  /**
  * outbound_i_ps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#outbound_i_ps AksClusterV3#outbound_i_ps}
  */
  readonly outboundIPs?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPs;
  /**
  * outbound_ip_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#outbound_ip_prefixes AksClusterV3#outbound_ip_prefixes}
  */
  readonly outboundIpPrefixes?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_outbound_ports: cdktf.numberToTerraform(struct!.allocatedOutboundPorts),
    enable_multiple_standard_load_balancers: cdktf.booleanToTerraform(struct!.enableMultipleStandardLoadBalancers),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    effective_outbound_i_ps: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsToTerraform, true)(struct!.effectiveOutboundIPs),
    managed_outbound_i_ps: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsToTerraform(struct!.managedOutboundIPs),
    outbound_i_ps: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsToTerraform(struct!.outboundIPs),
    outbound_ip_prefixes: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToTerraform(struct!.outboundIpPrefixes),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_outbound_ports: {
      value: cdktf.numberToHclTerraform(struct!.allocatedOutboundPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_multiple_standard_load_balancers: {
      value: cdktf.booleanToHclTerraform(struct!.enableMultipleStandardLoadBalancers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    effective_outbound_i_ps: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsToHclTerraform, true)(struct!.effectiveOutboundIPs),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsList",
    },
    managed_outbound_i_ps: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsToHclTerraform(struct!.managedOutboundIPs),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsList",
    },
    outbound_i_ps: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsToHclTerraform(struct!.outboundIPs),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsList",
    },
    outbound_ip_prefixes: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToHclTerraform(struct!.outboundIpPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedOutboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedOutboundPorts = this._allocatedOutboundPorts;
    }
    if (this._enableMultipleStandardLoadBalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleStandardLoadBalancers = this._enableMultipleStandardLoadBalancers;
    }
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._effectiveOutboundIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveOutboundIPs = this._effectiveOutboundIPs?.internalValue;
    }
    if (this._managedOutboundIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedOutboundIPs = this._managedOutboundIPs?.internalValue;
    }
    if (this._outboundIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIPs = this._outboundIPs?.internalValue;
    }
    if (this._outboundIpPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpPrefixes = this._outboundIpPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedOutboundPorts = undefined;
      this._enableMultipleStandardLoadBalancers = undefined;
      this._idleTimeoutInMinutes = undefined;
      this._effectiveOutboundIPs.internalValue = undefined;
      this._managedOutboundIPs.internalValue = undefined;
      this._outboundIPs.internalValue = undefined;
      this._outboundIpPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedOutboundPorts = value.allocatedOutboundPorts;
      this._enableMultipleStandardLoadBalancers = value.enableMultipleStandardLoadBalancers;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._effectiveOutboundIPs.internalValue = value.effectiveOutboundIPs;
      this._managedOutboundIPs.internalValue = value.managedOutboundIPs;
      this._outboundIPs.internalValue = value.outboundIPs;
      this._outboundIpPrefixes.internalValue = value.outboundIpPrefixes;
    }
  }

  // allocated_outbound_ports - computed: false, optional: true, required: false
  private _allocatedOutboundPorts?: number; 
  public get allocatedOutboundPorts() {
    return this.getNumberAttribute('allocated_outbound_ports');
  }
  public set allocatedOutboundPorts(value: number) {
    this._allocatedOutboundPorts = value;
  }
  public resetAllocatedOutboundPorts() {
    this._allocatedOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedOutboundPortsInput() {
    return this._allocatedOutboundPorts;
  }

  // enable_multiple_standard_load_balancers - computed: false, optional: true, required: false
  private _enableMultipleStandardLoadBalancers?: boolean | cdktf.IResolvable; 
  public get enableMultipleStandardLoadBalancers() {
    return this.getBooleanAttribute('enable_multiple_standard_load_balancers');
  }
  public set enableMultipleStandardLoadBalancers(value: boolean | cdktf.IResolvable) {
    this._enableMultipleStandardLoadBalancers = value;
  }
  public resetEnableMultipleStandardLoadBalancers() {
    this._enableMultipleStandardLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleStandardLoadBalancersInput() {
    return this._enableMultipleStandardLoadBalancers;
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // effective_outbound_i_ps - computed: false, optional: true, required: false
  private _effectiveOutboundIPs = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPsList(this, "effective_outbound_i_ps", false);
  public get effectiveOutboundIPs() {
    return this._effectiveOutboundIPs;
  }
  public putEffectiveOutboundIPs(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIPs[] | cdktf.IResolvable) {
    this._effectiveOutboundIPs.internalValue = value;
  }
  public resetEffectiveOutboundIPs() {
    this._effectiveOutboundIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveOutboundIPsInput() {
    return this._effectiveOutboundIPs.internalValue;
  }

  // managed_outbound_i_ps - computed: false, optional: true, required: false
  private _managedOutboundIPs = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPsOutputReference(this, "managed_outbound_i_ps");
  public get managedOutboundIPs() {
    return this._managedOutboundIPs;
  }
  public putManagedOutboundIPs(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIPs) {
    this._managedOutboundIPs.internalValue = value;
  }
  public resetManagedOutboundIPs() {
    this._managedOutboundIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIPsInput() {
    return this._managedOutboundIPs.internalValue;
  }

  // outbound_i_ps - computed: false, optional: true, required: false
  private _outboundIPs = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPsOutputReference(this, "outbound_i_ps");
  public get outboundIPs() {
    return this._outboundIPs;
  }
  public putOutboundIPs(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIPs) {
    this._outboundIPs.internalValue = value;
  }
  public resetOutboundIPs() {
    this._outboundIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIPsInput() {
    return this._outboundIPs.internalValue;
  }

  // outbound_ip_prefixes - computed: false, optional: true, required: false
  private _outboundIpPrefixes = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference(this, "outbound_ip_prefixes");
  public get outboundIpPrefixes() {
    return this._outboundIpPrefixes;
  }
  public putOutboundIpPrefixes(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes) {
    this._outboundIpPrefixes.internalValue = value;
  }
  public resetOutboundIpPrefixes() {
    this._outboundIpPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpPrefixesInput() {
    return this._outboundIpPrefixes.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfile {
  /**
  * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#count AksClusterV3#count}
  */
  readonly count?: number;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfile): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
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
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfile {
  /**
  * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#idle_timeout_in_minutes AksClusterV3#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * effective_outbound_i_ps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#effective_outbound_i_ps AksClusterV3#effective_outbound_i_ps}
  */
  readonly effectiveOutboundIPs?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs[] | cdktf.IResolvable;
  /**
  * managed_outbound_ip_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#managed_outbound_ip_profile AksClusterV3#managed_outbound_ip_profile}
  */
  readonly managedOutboundIpProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfile;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    effective_outbound_i_ps: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsToTerraform, true)(struct!.effectiveOutboundIPs),
    managed_outbound_ip_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileToTerraform(struct!.managedOutboundIpProfile),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    effective_outbound_i_ps: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsToHclTerraform, true)(struct!.effectiveOutboundIPs),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsList",
    },
    managed_outbound_ip_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileToHclTerraform(struct!.managedOutboundIpProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._effectiveOutboundIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveOutboundIPs = this._effectiveOutboundIPs?.internalValue;
    }
    if (this._managedOutboundIpProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedOutboundIpProfile = this._managedOutboundIpProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._effectiveOutboundIPs.internalValue = undefined;
      this._managedOutboundIpProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._effectiveOutboundIPs.internalValue = value.effectiveOutboundIPs;
      this._managedOutboundIpProfile.internalValue = value.managedOutboundIpProfile;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // effective_outbound_i_ps - computed: false, optional: true, required: false
  private _effectiveOutboundIPs = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPsList(this, "effective_outbound_i_ps", false);
  public get effectiveOutboundIPs() {
    return this._effectiveOutboundIPs;
  }
  public putEffectiveOutboundIPs(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileEffectiveOutboundIPs[] | cdktf.IResolvable) {
    this._effectiveOutboundIPs.internalValue = value;
  }
  public resetEffectiveOutboundIPs() {
    this._effectiveOutboundIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveOutboundIPsInput() {
    return this._effectiveOutboundIPs.internalValue;
  }

  // managed_outbound_ip_profile - computed: false, optional: true, required: false
  private _managedOutboundIpProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfileOutputReference(this, "managed_outbound_ip_profile");
  public get managedOutboundIpProfile() {
    return this._managedOutboundIpProfile;
  }
  public putManagedOutboundIpProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileManagedOutboundIpProfile) {
    this._managedOutboundIpProfile.internalValue = value;
  }
  public resetManagedOutboundIpProfile() {
    this._managedOutboundIpProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIpProfileInput() {
    return this._managedOutboundIpProfile.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile {
  /**
  * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#dns_service_ip AksClusterV3#dns_service_ip}
  */
  readonly dnsServiceIp?: string;
  /**
  * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#docker_bridge_cidr AksClusterV3#docker_bridge_cidr}
  */
  readonly dockerBridgeCidr?: string;
  /**
  * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#ip_families AksClusterV3#ip_families}
  */
  readonly ipFamilies?: string[];
  /**
  * The default is standard. See Azure Load Balancer SKUs for more information about the differences between load balancer SKUs. Valid values are standard, basic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#load_balancer_sku AksClusterV3#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Valid values are cilium
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_dataplane AksClusterV3#network_dataplane}
  */
  readonly networkDataplane?: string;
  /**
  * This cannot be specified if networkPlugin is anything other than azure. Valid values are transparent, bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_mode AksClusterV3#network_mode}
  */
  readonly networkMode?: string;
  /**
  * This cannot be specified if networkPlugin is anything other than azure. Valid values are transparent, bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_plugin AksClusterV3#network_plugin}
  */
  readonly networkPlugin?: string;
  /**
  * This cannot be specified if networkPlugin is anything other than azure. Valid values are overlay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_plugin_mode AksClusterV3#network_plugin_mode}
  */
  readonly networkPluginMode?: string;
  /**
  * Network policy used for building the Kubernetes network. Valid values are calico, azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#network_policy AksClusterV3#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * This can only be set at cluster creation time and cannot be changed later. For more information see egress outbound type. Valid values are loadBalancer, userDefinedRouting, managedNATGateway, userAssignedNATGateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#outbound_type AksClusterV3#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#pod_cidr AksClusterV3#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#pod_cidrs AksClusterV3#pod_cidrs}
  */
  readonly podCidrs?: string[];
  /**
  * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#service_cidr AksClusterV3#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#service_cidrs AksClusterV3#service_cidrs}
  */
  readonly serviceCidrs?: string[];
  /**
  * load_balancer_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#load_balancer_profile AksClusterV3#load_balancer_profile}
  */
  readonly loadBalancerProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile;
  /**
  * nat_gateway_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#nat_gateway_profile AksClusterV3#nat_gateway_profile}
  */
  readonly natGatewayProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfile;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_service_ip: cdktf.stringToTerraform(struct!.dnsServiceIp),
    docker_bridge_cidr: cdktf.stringToTerraform(struct!.dockerBridgeCidr),
    ip_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFamilies),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    network_dataplane: cdktf.stringToTerraform(struct!.networkDataplane),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    network_plugin: cdktf.stringToTerraform(struct!.networkPlugin),
    network_plugin_mode: cdktf.stringToTerraform(struct!.networkPluginMode),
    network_policy: cdktf.stringToTerraform(struct!.networkPolicy),
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    pod_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidrs),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
    service_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceCidrs),
    load_balancer_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToTerraform(struct!.loadBalancerProfile),
    nat_gateway_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileToTerraform(struct!.natGatewayProfile),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_bridge_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dockerBridgeCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFamilies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    load_balancer_sku: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_dataplane: {
      value: cdktf.stringToHclTerraform(struct!.networkDataplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin: {
      value: cdktf.stringToHclTerraform(struct!.networkPlugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkPluginMode),
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
    outbound_type: {
      value: cdktf.stringToHclTerraform(struct!.outboundType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    load_balancer_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToHclTerraform(struct!.loadBalancerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileList",
    },
    nat_gateway_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileToHclTerraform(struct!.natGatewayProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServiceIp = this._dnsServiceIp;
    }
    if (this._dockerBridgeCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerBridgeCidr = this._dockerBridgeCidr;
    }
    if (this._ipFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilies = this._ipFamilies;
    }
    if (this._loadBalancerSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSku = this._loadBalancerSku;
    }
    if (this._networkDataplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDataplane = this._networkDataplane;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._networkPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPlugin = this._networkPlugin;
    }
    if (this._networkPluginMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPluginMode = this._networkPluginMode;
    }
    if (this._networkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy;
    }
    if (this._outboundType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundType = this._outboundType;
    }
    if (this._podCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidr = this._podCidr;
    }
    if (this._podCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrs = this._podCidrs;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    if (this._serviceCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidrs = this._serviceCidrs;
    }
    if (this._loadBalancerProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerProfile = this._loadBalancerProfile?.internalValue;
    }
    if (this._natGatewayProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natGatewayProfile = this._natGatewayProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServiceIp = undefined;
      this._dockerBridgeCidr = undefined;
      this._ipFamilies = undefined;
      this._loadBalancerSku = undefined;
      this._networkDataplane = undefined;
      this._networkMode = undefined;
      this._networkPlugin = undefined;
      this._networkPluginMode = undefined;
      this._networkPolicy = undefined;
      this._outboundType = undefined;
      this._podCidr = undefined;
      this._podCidrs = undefined;
      this._serviceCidr = undefined;
      this._serviceCidrs = undefined;
      this._loadBalancerProfile.internalValue = undefined;
      this._natGatewayProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServiceIp = value.dnsServiceIp;
      this._dockerBridgeCidr = value.dockerBridgeCidr;
      this._ipFamilies = value.ipFamilies;
      this._loadBalancerSku = value.loadBalancerSku;
      this._networkDataplane = value.networkDataplane;
      this._networkMode = value.networkMode;
      this._networkPlugin = value.networkPlugin;
      this._networkPluginMode = value.networkPluginMode;
      this._networkPolicy = value.networkPolicy;
      this._outboundType = value.outboundType;
      this._podCidr = value.podCidr;
      this._podCidrs = value.podCidrs;
      this._serviceCidr = value.serviceCidr;
      this._serviceCidrs = value.serviceCidrs;
      this._loadBalancerProfile.internalValue = value.loadBalancerProfile;
      this._natGatewayProfile.internalValue = value.natGatewayProfile;
    }
  }

  // dns_service_ip - computed: false, optional: true, required: false
  private _dnsServiceIp?: string; 
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }
  public set dnsServiceIp(value: string) {
    this._dnsServiceIp = value;
  }
  public resetDnsServiceIp() {
    this._dnsServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceIpInput() {
    return this._dnsServiceIp;
  }

  // docker_bridge_cidr - computed: false, optional: true, required: false
  private _dockerBridgeCidr?: string; 
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }
  public set dockerBridgeCidr(value: string) {
    this._dockerBridgeCidr = value;
  }
  public resetDockerBridgeCidr() {
    this._dockerBridgeCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBridgeCidrInput() {
    return this._dockerBridgeCidr;
  }

  // ip_families - computed: false, optional: true, required: false
  private _ipFamilies?: string[]; 
  public get ipFamilies() {
    return this.getListAttribute('ip_families');
  }
  public set ipFamilies(value: string[]) {
    this._ipFamilies = value;
  }
  public resetIpFamilies() {
    this._ipFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamiliesInput() {
    return this._ipFamilies;
  }

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // network_dataplane - computed: false, optional: true, required: false
  private _networkDataplane?: string; 
  public get networkDataplane() {
    return this.getStringAttribute('network_dataplane');
  }
  public set networkDataplane(value: string) {
    this._networkDataplane = value;
  }
  public resetNetworkDataplane() {
    this._networkDataplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataplaneInput() {
    return this._networkDataplane;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // network_plugin - computed: false, optional: true, required: false
  private _networkPlugin?: string; 
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }
  public set networkPlugin(value: string) {
    this._networkPlugin = value;
  }
  public resetNetworkPlugin() {
    this._networkPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginInput() {
    return this._networkPlugin;
  }

  // network_plugin_mode - computed: false, optional: true, required: false
  private _networkPluginMode?: string; 
  public get networkPluginMode() {
    return this.getStringAttribute('network_plugin_mode');
  }
  public set networkPluginMode(value: string) {
    this._networkPluginMode = value;
  }
  public resetNetworkPluginMode() {
    this._networkPluginMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginModeInput() {
    return this._networkPluginMode;
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

  // outbound_type - computed: false, optional: true, required: false
  private _outboundType?: string; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType;
  }

  // pod_cidr - computed: false, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // pod_cidrs - computed: false, optional: true, required: false
  private _podCidrs?: string[]; 
  public get podCidrs() {
    return this.getListAttribute('pod_cidrs');
  }
  public set podCidrs(value: string[]) {
    this._podCidrs = value;
  }
  public resetPodCidrs() {
    this._podCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrsInput() {
    return this._podCidrs;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // service_cidrs - computed: false, optional: true, required: false
  private _serviceCidrs?: string[]; 
  public get serviceCidrs() {
    return this.getListAttribute('service_cidrs');
  }
  public set serviceCidrs(value: string[]) {
    this._serviceCidrs = value;
  }
  public resetServiceCidrs() {
    this._serviceCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrsInput() {
    return this._serviceCidrs;
  }

  // load_balancer_profile - computed: false, optional: true, required: false
  private _loadBalancerProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference(this, "load_balancer_profile");
  public get loadBalancerProfile() {
    return this._loadBalancerProfile;
  }
  public putLoadBalancerProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile) {
    this._loadBalancerProfile.internalValue = value;
  }
  public resetLoadBalancerProfile() {
    this._loadBalancerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerProfileInput() {
    return this._loadBalancerProfile.internalValue;
  }

  // nat_gateway_profile - computed: false, optional: true, required: false
  private _natGatewayProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfileOutputReference(this, "nat_gateway_profile");
  public get natGatewayProfile() {
    return this._natGatewayProfile;
  }
  public putNatGatewayProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileNatGatewayProfile) {
    this._natGatewayProfile.internalValue = value;
  }
  public resetNatGatewayProfile() {
    this._natGatewayProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayProfileInput() {
    return this._natGatewayProfile.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile {
  /**
  * The enabled field within the oidcIssuerProfile configuration of Azure Kubernetes Service (AKS) determines whether the AKS cluster functions as an OpenID Connect (OIDC) issuer. When this field is set to true, the cluster becomes an OIDC-compliant identity provider, capable of issuing OIDC tokens that can be used for secure authentication and authorization of applications and services interacting with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile): any {
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

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile | undefined) {
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
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity {
  /**
  * The client ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#client_id AksClusterV3#client_id}
  */
  readonly clientId?: string;
  /**
  * The object ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#object_id AksClusterV3#object_id}
  */
  readonly objectId?: string;
  /**
  * The resource ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#resource_id AksClusterV3#resource_id}
  */
  readonly resourceId?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._objectId = undefined;
      this._resourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._objectId = value.objectId;
      this._resourceId = value.resourceId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities {
  /**
  * The binding selector to use for the AzureIdentityBinding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#binding_selector AksClusterV3#binding_selector}
  */
  readonly bindingSelector?: string;
  /**
  * The name of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * The namespace of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#namespace AksClusterV3#namespace}
  */
  readonly namespace?: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#identity AksClusterV3#identity}
  */
  readonly identity?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_selector: cdktf.stringToTerraform(struct!.bindingSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    identity: aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToTerraform(struct!.identity),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_selector: {
      value: cdktf.stringToHclTerraform(struct!.bindingSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToHclTerraform(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingSelector = this._bindingSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindingSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._identity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindingSelector = value.bindingSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._identity.internalValue = value.identity;
    }
  }

  // binding_selector - computed: false, optional: true, required: false
  private _bindingSelector?: string; 
  public get bindingSelector() {
    return this.getStringAttribute('binding_selector');
  }
  public set bindingSelector(value: string) {
    this._bindingSelector = value;
  }
  public resetBindingSelector() {
    this._bindingSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingSelectorInput() {
    return this._bindingSelector;
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

  // identity - computed: false, optional: true, required: false
  private _identity = new AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions {
  /**
  * The name of the pod identity exception.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * The namespace of the pod identity exception.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#namespace AksClusterV3#namespace}
  */
  readonly namespace?: string;
  /**
  * The pod labels to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#pod_labels AksClusterV3#pod_labels}
  */
  readonly podLabels?: { [key: string]: string };
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podLabels),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._podLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLabels = this._podLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._podLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._podLabels = value.podLabels;
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

  // pod_labels - computed: false, optional: true, required: false
  private _podLabels?: { [key: string]: string }; 
  public get podLabels() {
    return this.getStringMapAttribute('pod_labels');
  }
  public set podLabels(value: { [key: string]: string }) {
    this._podLabels = value;
  }
  public resetPodLabels() {
    this._podLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLabelsInput() {
    return this._podLabels;
  }
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile {
  /**
  * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See https://learn.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#allow_network_plugin_kubenet AksClusterV3#allow_network_plugin_kubenet}
  */
  readonly allowNetworkPluginKubenet?: boolean | cdktf.IResolvable;
  /**
  * Whether the pod identity addon is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * user_assigned_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#user_assigned_identities AksClusterV3#user_assigned_identities}
  */
  readonly userAssignedIdentities?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable;
  /**
  * user_assigned_identity_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#user_assigned_identity_exceptions AksClusterV3#user_assigned_identity_exceptions}
  */
  readonly userAssignedIdentityExceptions?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_network_plugin_kubenet: cdktf.booleanToTerraform(struct!.allowNetworkPluginKubenet),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    user_assigned_identities: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToTerraform, true)(struct!.userAssignedIdentities),
    user_assigned_identity_exceptions: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToTerraform, true)(struct!.userAssignedIdentityExceptions),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_network_plugin_kubenet: {
      value: cdktf.booleanToHclTerraform(struct!.allowNetworkPluginKubenet),
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
    user_assigned_identities: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToHclTerraform, true)(struct!.userAssignedIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList",
    },
    user_assigned_identity_exceptions: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToHclTerraform, true)(struct!.userAssignedIdentityExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNetworkPluginKubenet !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNetworkPluginKubenet = this._allowNetworkPluginKubenet;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._userAssignedIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentities = this._userAssignedIdentities?.internalValue;
    }
    if (this._userAssignedIdentityExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityExceptions = this._userAssignedIdentityExceptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowNetworkPluginKubenet = undefined;
      this._enabled = undefined;
      this._userAssignedIdentities.internalValue = undefined;
      this._userAssignedIdentityExceptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowNetworkPluginKubenet = value.allowNetworkPluginKubenet;
      this._enabled = value.enabled;
      this._userAssignedIdentities.internalValue = value.userAssignedIdentities;
      this._userAssignedIdentityExceptions.internalValue = value.userAssignedIdentityExceptions;
    }
  }

  // allow_network_plugin_kubenet - computed: false, optional: true, required: false
  private _allowNetworkPluginKubenet?: boolean | cdktf.IResolvable; 
  public get allowNetworkPluginKubenet() {
    return this.getBooleanAttribute('allow_network_plugin_kubenet');
  }
  public set allowNetworkPluginKubenet(value: boolean | cdktf.IResolvable) {
    this._allowNetworkPluginKubenet = value;
  }
  public resetAllowNetworkPluginKubenet() {
    this._allowNetworkPluginKubenet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNetworkPluginKubenetInput() {
    return this._allowNetworkPluginKubenet;
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

  // user_assigned_identities - computed: false, optional: true, required: false
  private _userAssignedIdentities = new AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList(this, "user_assigned_identities", false);
  public get userAssignedIdentities() {
    return this._userAssignedIdentities;
  }
  public putUserAssignedIdentities(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable) {
    this._userAssignedIdentities.internalValue = value;
  }
  public resetUserAssignedIdentities() {
    this._userAssignedIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentitiesInput() {
    return this._userAssignedIdentities.internalValue;
  }

  // user_assigned_identity_exceptions - computed: false, optional: true, required: false
  private _userAssignedIdentityExceptions = new AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList(this, "user_assigned_identity_exceptions", false);
  public get userAssignedIdentityExceptions() {
    return this._userAssignedIdentityExceptions;
  }
  public putUserAssignedIdentityExceptions(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable) {
    this._userAssignedIdentityExceptions.internalValue = value;
  }
  public resetUserAssignedIdentityExceptions() {
    this._userAssignedIdentityExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityExceptionsInput() {
    return this._userAssignedIdentityExceptions.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState {
  /**
  * Tells whether the cluster is Running or Stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#code AksClusterV3#code}
  */
  readonly code?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources {
  /**
  * The group ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#group_id AksClusterV3#group_id}
  */
  readonly groupId?: string;
  /**
  * The ID of the private link resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the private link resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * The RequiredMembers of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#required_members AksClusterV3#required_members}
  */
  readonly requiredMembers?: string[];
  /**
  * The resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    required_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredMembers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    required_members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredMembers),
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

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requiredMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredMembers = this._requiredMembers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._requiredMembers = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._id = value.id;
      this._name = value.name;
      this._requiredMembers = value.requiredMembers;
      this._type = value.type;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // required_members - computed: false, optional: true, required: false
  private _requiredMembers?: string[]; 
  public get requiredMembers() {
    return this.getListAttribute('required_members');
  }
  public set requiredMembers(value: string[]) {
    this._requiredMembers = value;
  }
  public resetRequiredMembers() {
    this._requiredMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredMembersInput() {
    return this._requiredMembers;
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

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference {
    return new AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms {
  /**
  * Whether to enable Azure Key Vault key management service. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Identifier of Azure Key Vault key. See key identifier format for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key_id AksClusterV3#key_id}
  */
  readonly keyId?: string;
  /**
  * Network access of key vault. The possible values are Public and Private. Public means the key vault allows public access from all networks. Private means the key vault disables public access and enables private link. The default value is Public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key_vault_network_access AksClusterV3#key_vault_network_access}
  */
  readonly keyVaultNetworkAccess?: string;
  /**
  * Resource ID of key vault. When keyVaultNetworkAccess is Private, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is Public, leave the field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster_v3#key_vault_resource_id AksClusterV3#key_vault_resource_id}
  */
  readonly keyVaultResourceId?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_vault_network_access: cdktf.stringToTerraform(struct!.keyVaultNetworkAccess),
    key_vault_resource_id: cdktf.stringToTerraform(struct!.keyVaultResourceId),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms): any {
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
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_network_access: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultNetworkAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyVaultNetworkAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultNetworkAccess = this._keyVaultNetworkAccess;
    }
    if (this._keyVaultResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultResourceId = this._keyVaultResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._keyId = undefined;
      this._keyVaultNetworkAccess = undefined;
      this._keyVaultResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._keyId = value.keyId;
      this._keyVaultNetworkAccess = value.keyVaultNetworkAccess;
      this._keyVaultResourceId = value.keyVaultResourceId;
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

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_vault_network_access - computed: false, optional: true, required: false
  private _keyVaultNetworkAccess?: string; 
  public get keyVaultNetworkAccess() {
    return this.getStringAttribute('key_vault_network_access');
  }
  public set keyVaultNetworkAccess(value: string) {
    this._keyVaultNetworkAccess = value;
  }
  public resetKeyVaultNetworkAccess() {
    this._keyVaultNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultNetworkAccessInput() {
    return this._keyVaultNetworkAccess;
  }

  // key_vault_resource_id - computed: false, optional: true, required: false
  private _keyVaultResourceId?: string; 
  public get keyVaultResourceId() {
    return this.getStringAttribute('key_vault_resource_id');
  }
  public set keyVaultResourceId(value: string) {
    this._keyVaultResourceId = value;
  }
  public resetKeyVaultResourceId() {
    this._keyVaultResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultResourceIdInput() {
    return this._keyVaultResourceId;
  }
}
