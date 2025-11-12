// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformDefaultNotificationTemplateSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for Default Notification Template Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#description PlatformDefaultNotificationTemplateSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#id PlatformDefaultNotificationTemplateSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of Default Notification Template Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#identifier PlatformDefaultNotificationTemplateSet#identifier}
  */
  readonly identifier: string;
  /**
  * Name of Default Notification Template Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#name PlatformDefaultNotificationTemplateSet#name}
  */
  readonly name: string;
  /**
  * Type of channel (e.g. SLACK, EMAIL, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#notification_channel_type PlatformDefaultNotificationTemplateSet#notification_channel_type}
  */
  readonly notificationChannelType: string;
  /**
  * Type of the entity (e.g. PIPELINE, SERVICE, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#notification_entity PlatformDefaultNotificationTemplateSet#notification_entity}
  */
  readonly notificationEntity: string;
  /**
  * Key-value tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#tags PlatformDefaultNotificationTemplateSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * event_template_configuration_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#event_template_configuration_set PlatformDefaultNotificationTemplateSet#event_template_configuration_set}
  */
  readonly eventTemplateConfigurationSet: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet[] | cdktf.IResolvable;
}
export interface PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#name PlatformDefaultNotificationTemplateSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#type PlatformDefaultNotificationTemplateSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#value PlatformDefaultNotificationTemplateSet#value}
  */
  readonly value: string;
}

export function platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesToTerraform(struct?: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesToHclTerraform(struct?: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables | cdktf.IResolvable): any {
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

export class PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
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

export class PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesList extends cdktf.ComplexList {
  public internalValue? : PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables[] | cdktf.IResolvable

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
  public get(index: number): PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesOutputReference {
    return new PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#template_ref PlatformDefaultNotificationTemplateSet#template_ref}
  */
  readonly templateRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#version_label PlatformDefaultNotificationTemplateSet#version_label}
  */
  readonly versionLabel: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#variables PlatformDefaultNotificationTemplateSet#variables}
  */
  readonly variables?: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables[] | cdktf.IResolvable;
}

export function platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateToTerraform(struct?: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateOutputReference | PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_ref: cdktf.stringToTerraform(struct!.templateRef),
    version_label: cdktf.stringToTerraform(struct!.versionLabel),
    variables: cdktf.listMapper(platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesToTerraform, true)(struct!.variables),
  }
}


export function platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateToHclTerraform(struct?: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateOutputReference | PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_ref: {
      value: cdktf.stringToHclTerraform(struct!.templateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_label: {
      value: cdktf.stringToHclTerraform(struct!.versionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef;
    }
    if (this._versionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionLabel = this._versionLabel;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateRef = undefined;
      this._versionLabel = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateRef = value.templateRef;
      this._versionLabel = value.versionLabel;
      this._variables.internalValue = value.variables;
    }
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

  // variables - computed: false, optional: true, required: false
  private _variables = new PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateVariables[] | cdktf.IResolvable) {
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
export interface PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet {
  /**
  * List of notification events like PIPELINE_START
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#notification_events PlatformDefaultNotificationTemplateSet#notification_events}
  */
  readonly notificationEvents: string[];
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#template PlatformDefaultNotificationTemplateSet#template}
  */
  readonly template: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplate;
}

export function platformDefaultNotificationTemplateSetEventTemplateConfigurationSetToTerraform(struct?: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationEvents),
    template: platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateToTerraform(struct!.template),
  }
}


export function platformDefaultNotificationTemplateSetEventTemplateConfigurationSetToHclTerraform(struct?: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template: {
      value: platformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEvents = this._notificationEvents;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationEvents = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationEvents = value.notificationEvents;
      this._template.internalValue = value.template;
    }
  }

  // notification_events - computed: false, optional: false, required: true
  private _notificationEvents?: string[]; 
  public get notificationEvents() {
    return this.getListAttribute('notification_events');
  }
  public set notificationEvents(value: string[]) {
    this._notificationEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEventsInput() {
    return this._notificationEvents;
  }

  // template - computed: false, optional: false, required: true
  private _template = new PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetList extends cdktf.ComplexList {
  public internalValue? : PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet[] | cdktf.IResolvable

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
  public get(index: number): PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetOutputReference {
    return new PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set harness_platform_default_notification_template_set}
*/
export class PlatformDefaultNotificationTemplateSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_default_notification_template_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformDefaultNotificationTemplateSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformDefaultNotificationTemplateSet to import
  * @param importFromId The id of the existing PlatformDefaultNotificationTemplateSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformDefaultNotificationTemplateSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_default_notification_template_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_default_notification_template_set harness_platform_default_notification_template_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformDefaultNotificationTemplateSetConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformDefaultNotificationTemplateSetConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_default_notification_template_set',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._notificationChannelType = config.notificationChannelType;
    this._notificationEntity = config.notificationEntity;
    this._tags = config.tags;
    this._eventTemplateConfigurationSet.internalValue = config.eventTemplateConfigurationSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
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

  // notification_channel_type - computed: false, optional: false, required: true
  private _notificationChannelType?: string; 
  public get notificationChannelType() {
    return this.getStringAttribute('notification_channel_type');
  }
  public set notificationChannelType(value: string) {
    this._notificationChannelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelTypeInput() {
    return this._notificationChannelType;
  }

  // notification_entity - computed: false, optional: false, required: true
  private _notificationEntity?: string; 
  public get notificationEntity() {
    return this.getStringAttribute('notification_entity');
  }
  public set notificationEntity(value: string) {
    this._notificationEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEntityInput() {
    return this._notificationEntity;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // event_template_configuration_set - computed: false, optional: false, required: true
  private _eventTemplateConfigurationSet = new PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetList(this, "event_template_configuration_set", false);
  public get eventTemplateConfigurationSet() {
    return this._eventTemplateConfigurationSet;
  }
  public putEventTemplateConfigurationSet(value: PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSet[] | cdktf.IResolvable) {
    this._eventTemplateConfigurationSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTemplateConfigurationSetInput() {
    return this._eventTemplateConfigurationSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      notification_channel_type: cdktf.stringToTerraform(this._notificationChannelType),
      notification_entity: cdktf.stringToTerraform(this._notificationEntity),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      event_template_configuration_set: cdktf.listMapper(platformDefaultNotificationTemplateSetEventTemplateConfigurationSetToTerraform, true)(this._eventTemplateConfigurationSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      notification_channel_type: {
        value: cdktf.stringToHclTerraform(this._notificationChannelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_entity: {
        value: cdktf.stringToHclTerraform(this._notificationEntity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      event_template_configuration_set: {
        value: cdktf.listMapperHcl(platformDefaultNotificationTemplateSetEventTemplateConfigurationSetToHclTerraform, true)(this._eventTemplateConfigurationSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformDefaultNotificationTemplateSetEventTemplateConfigurationSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
