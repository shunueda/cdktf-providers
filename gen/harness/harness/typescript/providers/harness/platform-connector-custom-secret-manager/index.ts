// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorCustomSecretManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#delegate_selectors PlatformConnectorCustomSecretManager#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#description PlatformConnectorCustomSecretManager#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#id PlatformConnectorCustomSecretManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#identifier PlatformConnectorCustomSecretManager#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#name PlatformConnectorCustomSecretManager#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#on_delegate PlatformConnectorCustomSecretManager#on_delegate}
  */
  readonly onDelegate?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#org_id PlatformConnectorCustomSecretManager#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#project_id PlatformConnectorCustomSecretManager#project_id}
  */
  readonly projectId?: string;
  /**
  * SSH secret reference for the custom secrets manager, required if 'on_delegate' is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#ssh_secret_ref PlatformConnectorCustomSecretManager#ssh_secret_ref}
  */
  readonly sshSecretRef?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#tags PlatformConnectorCustomSecretManager#tags}
  */
  readonly tags?: string[];
  /**
  * Host where the custom secrets manager is located, required if 'on_delegate' is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#target_host PlatformConnectorCustomSecretManager#target_host}
  */
  readonly targetHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#template_ref PlatformConnectorCustomSecretManager#template_ref}
  */
  readonly templateRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#timeout PlatformConnectorCustomSecretManager#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#type PlatformConnectorCustomSecretManager#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#version_label PlatformConnectorCustomSecretManager#version_label}
  */
  readonly versionLabel: string;
  /**
  * The working directory for operations, required if 'on_delegate' is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#working_directory PlatformConnectorCustomSecretManager#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * template_inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#template_inputs PlatformConnectorCustomSecretManager#template_inputs}
  */
  readonly templateInputs?: PlatformConnectorCustomSecretManagerTemplateInputs[] | cdktf.IResolvable;
}
export interface PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#default PlatformConnectorCustomSecretManager#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#name PlatformConnectorCustomSecretManager#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#type PlatformConnectorCustomSecretManager#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#value PlatformConnectorCustomSecretManager#value}
  */
  readonly value: string;
}

export function platformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableToTerraform(struct?: PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableToHclTerraform(struct?: PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableOutputReference {
    return new PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformConnectorCustomSecretManagerTemplateInputs {
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#environment_variable PlatformConnectorCustomSecretManager#environment_variable}
  */
  readonly environmentVariable?: PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable[] | cdktf.IResolvable;
}

export function platformConnectorCustomSecretManagerTemplateInputsToTerraform(struct?: PlatformConnectorCustomSecretManagerTemplateInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_variable: cdktf.listMapper(platformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableToTerraform, true)(struct!.environmentVariable),
  }
}


export function platformConnectorCustomSecretManagerTemplateInputsToHclTerraform(struct?: PlatformConnectorCustomSecretManagerTemplateInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_variable: {
      value: cdktf.listMapperHcl(platformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableToHclTerraform, true)(struct!.environmentVariable),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorCustomSecretManagerTemplateInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorCustomSecretManagerTemplateInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariable = this._environmentVariable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorCustomSecretManagerTemplateInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentVariable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentVariable.internalValue = value.environmentVariable;
    }
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariableList(this, "environment_variable", false);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: PlatformConnectorCustomSecretManagerTemplateInputsEnvironmentVariable[] | cdktf.IResolvable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }
}

export class PlatformConnectorCustomSecretManagerTemplateInputsList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorCustomSecretManagerTemplateInputs[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorCustomSecretManagerTemplateInputsOutputReference {
    return new PlatformConnectorCustomSecretManagerTemplateInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager harness_platform_connector_custom_secret_manager}
*/
export class PlatformConnectorCustomSecretManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_custom_secret_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorCustomSecretManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorCustomSecretManager to import
  * @param importFromId The id of the existing PlatformConnectorCustomSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorCustomSecretManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_custom_secret_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_custom_secret_manager harness_platform_connector_custom_secret_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorCustomSecretManagerConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorCustomSecretManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_custom_secret_manager',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._onDelegate = config.onDelegate;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._sshSecretRef = config.sshSecretRef;
    this._tags = config.tags;
    this._targetHost = config.targetHost;
    this._templateRef = config.templateRef;
    this._timeout = config.timeout;
    this._type = config.type;
    this._versionLabel = config.versionLabel;
    this._workingDirectory = config.workingDirectory;
    this._templateInputs.internalValue = config.templateInputs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // on_delegate - computed: false, optional: true, required: false
  private _onDelegate?: boolean | cdktf.IResolvable; 
  public get onDelegate() {
    return this.getBooleanAttribute('on_delegate');
  }
  public set onDelegate(value: boolean | cdktf.IResolvable) {
    this._onDelegate = value;
  }
  public resetOnDelegate() {
    this._onDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDelegateInput() {
    return this._onDelegate;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // ssh_secret_ref - computed: false, optional: true, required: false
  private _sshSecretRef?: string; 
  public get sshSecretRef() {
    return this.getStringAttribute('ssh_secret_ref');
  }
  public set sshSecretRef(value: string) {
    this._sshSecretRef = value;
  }
  public resetSshSecretRef() {
    this._sshSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshSecretRefInput() {
    return this._sshSecretRef;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_host - computed: false, optional: true, required: false
  private _targetHost?: string; 
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }
  public set targetHost(value: string) {
    this._targetHost = value;
  }
  public resetTargetHost() {
    this._targetHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostInput() {
    return this._targetHost;
  }

  // template_ref - computed: false, optional: false, required: true
  private _templateRef?: string; 
  public get templateRef() {
    return this.getStringAttribute('template_ref');
  }
  public set templateRef(value: string) {
    this._templateRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
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

  // version_label - computed: false, optional: false, required: true
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // template_inputs - computed: false, optional: true, required: false
  private _templateInputs = new PlatformConnectorCustomSecretManagerTemplateInputsList(this, "template_inputs", false);
  public get templateInputs() {
    return this._templateInputs;
  }
  public putTemplateInputs(value: PlatformConnectorCustomSecretManagerTemplateInputs[] | cdktf.IResolvable) {
    this._templateInputs.internalValue = value;
  }
  public resetTemplateInputs() {
    this._templateInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInputsInput() {
    return this._templateInputs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      on_delegate: cdktf.booleanToTerraform(this._onDelegate),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      ssh_secret_ref: cdktf.stringToTerraform(this._sshSecretRef),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_host: cdktf.stringToTerraform(this._targetHost),
      template_ref: cdktf.stringToTerraform(this._templateRef),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      version_label: cdktf.stringToTerraform(this._versionLabel),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      template_inputs: cdktf.listMapper(platformConnectorCustomSecretManagerTemplateInputsToTerraform, true)(this._templateInputs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_delegate: {
        value: cdktf.booleanToHclTerraform(this._onDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_secret_ref: {
        value: cdktf.stringToHclTerraform(this._sshSecretRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_host: {
        value: cdktf.stringToHclTerraform(this._targetHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_ref: {
        value: cdktf.stringToHclTerraform(this._templateRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_label: {
        value: cdktf.stringToHclTerraform(this._versionLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_inputs: {
        value: cdktf.listMapperHcl(platformConnectorCustomSecretManagerTemplateInputsToHclTerraform, true)(this._templateInputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorCustomSecretManagerTemplateInputsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
