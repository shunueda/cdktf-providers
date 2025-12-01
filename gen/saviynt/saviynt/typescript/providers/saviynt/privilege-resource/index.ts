// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivilegeResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the endpoint to which the entitlement type belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#endpoint PrivilegeResource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Name of the entitlement type for the privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#entitlement_type PrivilegeResource#entitlement_type}
  */
  readonly entitlementType: string;
  /**
  * Map of privileges to create/manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#privileges PrivilegeResource#privileges}
  */
  readonly privileges: { [key: string]: PrivilegeResourcePrivileges } | cdktf.IResolvable;
  /**
  * Name of the security system to which the endpoint belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#security_system PrivilegeResource#security_system}
  */
  readonly securitySystem: string;
}
export interface PrivilegeResourcePrivileges {
  /**
  * Action string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#action_string PrivilegeResource#action_string}
  */
  readonly actionString?: string;
  /**
  * Configuration type for the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#attribute_config PrivilegeResource#attribute_config}
  */
  readonly attributeConfig: string;
  /**
  * Attribute group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#attribute_group PrivilegeResource#attribute_group}
  */
  readonly attributeGroup?: string;
  /**
  * Attribute name for the privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#attribute_name PrivilegeResource#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Type of the attribute/privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#attribute_type PrivilegeResource#attribute_type}
  */
  readonly attributeType: string;
  /**
  * Child action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#child_action PrivilegeResource#child_action}
  */
  readonly childAction?: string;
  /**
  * Default value for the privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#default_value PrivilegeResource#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description for the privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#description PrivilegeResource#description}
  */
  readonly description?: string;
  /**
  * Hide on create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#hide_on_create PrivilegeResource#hide_on_create}
  */
  readonly hideOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Hide on update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#hide_on_update PrivilegeResource#hide_on_update}
  */
  readonly hideOnUpdate?: boolean | cdktf.IResolvable;
  /**
  * Label for the privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#label PrivilegeResource#label}
  */
  readonly label?: string;
  /**
  * Order index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#order_index PrivilegeResource#order_index}
  */
  readonly orderIndex?: string;
  /**
  * Parent attribute for the given privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#parent_attribute PrivilegeResource#parent_attribute}
  */
  readonly parentAttribute?: string;
  /**
  * Is requestable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#requestable PrivilegeResource#requestable}
  */
  readonly requestable?: boolean | cdktf.IResolvable;
  /**
  * Is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#required PrivilegeResource#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function privilegeResourcePrivilegesToTerraform(struct?: PrivilegeResourcePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_string: cdktf.stringToTerraform(struct!.actionString),
    attribute_config: cdktf.stringToTerraform(struct!.attributeConfig),
    attribute_group: cdktf.stringToTerraform(struct!.attributeGroup),
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
    child_action: cdktf.stringToTerraform(struct!.childAction),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    hide_on_create: cdktf.booleanToTerraform(struct!.hideOnCreate),
    hide_on_update: cdktf.booleanToTerraform(struct!.hideOnUpdate),
    label: cdktf.stringToTerraform(struct!.label),
    order_index: cdktf.stringToTerraform(struct!.orderIndex),
    parent_attribute: cdktf.stringToTerraform(struct!.parentAttribute),
    requestable: cdktf.booleanToTerraform(struct!.requestable),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function privilegeResourcePrivilegesToHclTerraform(struct?: PrivilegeResourcePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_string: {
      value: cdktf.stringToHclTerraform(struct!.actionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_config: {
      value: cdktf.stringToHclTerraform(struct!.attributeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_group: {
      value: cdktf.stringToHclTerraform(struct!.attributeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    child_action: {
      value: cdktf.stringToHclTerraform(struct!.childAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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
    hide_on_create: {
      value: cdktf.booleanToHclTerraform(struct!.hideOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_on_update: {
      value: cdktf.booleanToHclTerraform(struct!.hideOnUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_index: {
      value: cdktf.stringToHclTerraform(struct!.orderIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_attribute: {
      value: cdktf.stringToHclTerraform(struct!.parentAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requestable: {
      value: cdktf.booleanToHclTerraform(struct!.requestable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegeResourcePrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PrivilegeResourcePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionString = this._actionString;
    }
    if (this._attributeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeConfig = this._attributeConfig;
    }
    if (this._attributeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeGroup = this._attributeGroup;
    }
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._childAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.childAction = this._childAction;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hideOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOnCreate = this._hideOnCreate;
    }
    if (this._hideOnUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOnUpdate = this._hideOnUpdate;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._orderIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderIndex = this._orderIndex;
    }
    if (this._parentAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentAttribute = this._parentAttribute;
    }
    if (this._requestable !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestable = this._requestable;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegeResourcePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionString = undefined;
      this._attributeConfig = undefined;
      this._attributeGroup = undefined;
      this._attributeName = undefined;
      this._attributeType = undefined;
      this._childAction = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._hideOnCreate = undefined;
      this._hideOnUpdate = undefined;
      this._label = undefined;
      this._orderIndex = undefined;
      this._parentAttribute = undefined;
      this._requestable = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionString = value.actionString;
      this._attributeConfig = value.attributeConfig;
      this._attributeGroup = value.attributeGroup;
      this._attributeName = value.attributeName;
      this._attributeType = value.attributeType;
      this._childAction = value.childAction;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._hideOnCreate = value.hideOnCreate;
      this._hideOnUpdate = value.hideOnUpdate;
      this._label = value.label;
      this._orderIndex = value.orderIndex;
      this._parentAttribute = value.parentAttribute;
      this._requestable = value.requestable;
      this._required = value.required;
    }
  }

  // action_string - computed: true, optional: true, required: false
  private _actionString?: string; 
  public get actionString() {
    return this.getStringAttribute('action_string');
  }
  public set actionString(value: string) {
    this._actionString = value;
  }
  public resetActionString() {
    this._actionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionStringInput() {
    return this._actionString;
  }

  // attribute_config - computed: false, optional: false, required: true
  private _attributeConfig?: string; 
  public get attributeConfig() {
    return this.getStringAttribute('attribute_config');
  }
  public set attributeConfig(value: string) {
    this._attributeConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeConfigInput() {
    return this._attributeConfig;
  }

  // attribute_group - computed: true, optional: true, required: false
  private _attributeGroup?: string; 
  public get attributeGroup() {
    return this.getStringAttribute('attribute_group');
  }
  public set attributeGroup(value: string) {
    this._attributeGroup = value;
  }
  public resetAttributeGroup() {
    this._attributeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeGroupInput() {
    return this._attributeGroup;
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_type - computed: false, optional: false, required: true
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // child_action - computed: true, optional: true, required: false
  private _childAction?: string; 
  public get childAction() {
    return this.getStringAttribute('child_action');
  }
  public set childAction(value: string) {
    this._childAction = value;
  }
  public resetChildAction() {
    this._childAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childActionInput() {
    return this._childAction;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: true, optional: true, required: false
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

  // hide_on_create - computed: true, optional: true, required: false
  private _hideOnCreate?: boolean | cdktf.IResolvable; 
  public get hideOnCreate() {
    return this.getBooleanAttribute('hide_on_create');
  }
  public set hideOnCreate(value: boolean | cdktf.IResolvable) {
    this._hideOnCreate = value;
  }
  public resetHideOnCreate() {
    this._hideOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOnCreateInput() {
    return this._hideOnCreate;
  }

  // hide_on_update - computed: true, optional: true, required: false
  private _hideOnUpdate?: boolean | cdktf.IResolvable; 
  public get hideOnUpdate() {
    return this.getBooleanAttribute('hide_on_update');
  }
  public set hideOnUpdate(value: boolean | cdktf.IResolvable) {
    this._hideOnUpdate = value;
  }
  public resetHideOnUpdate() {
    this._hideOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOnUpdateInput() {
    return this._hideOnUpdate;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // order_index - computed: true, optional: true, required: false
  private _orderIndex?: string; 
  public get orderIndex() {
    return this.getStringAttribute('order_index');
  }
  public set orderIndex(value: string) {
    this._orderIndex = value;
  }
  public resetOrderIndex() {
    this._orderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIndexInput() {
    return this._orderIndex;
  }

  // parent_attribute - computed: true, optional: true, required: false
  private _parentAttribute?: string; 
  public get parentAttribute() {
    return this.getStringAttribute('parent_attribute');
  }
  public set parentAttribute(value: string) {
    this._parentAttribute = value;
  }
  public resetParentAttribute() {
    this._parentAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAttributeInput() {
    return this._parentAttribute;
  }

  // requestable - computed: true, optional: true, required: false
  private _requestable?: boolean | cdktf.IResolvable; 
  public get requestable() {
    return this.getBooleanAttribute('requestable');
  }
  public set requestable(value: boolean | cdktf.IResolvable) {
    this._requestable = value;
  }
  public resetRequestable() {
    this._requestable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestableInput() {
    return this._requestable;
  }

  // required - computed: true, optional: true, required: false
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
}

export class PrivilegeResourcePrivilegesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PrivilegeResourcePrivileges } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PrivilegeResourcePrivilegesOutputReference {
    return new PrivilegeResourcePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource saviynt_privilege_resource}
*/
export class PrivilegeResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_privilege_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivilegeResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivilegeResource to import
  * @param importFromId The id of the existing PrivilegeResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivilegeResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_privilege_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/privilege_resource saviynt_privilege_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivilegeResourceConfig
  */
  public constructor(scope: Construct, id: string, config: PrivilegeResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_privilege_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpoint = config.endpoint;
    this._entitlementType = config.entitlementType;
    this._privileges.internalValue = config.privileges;
    this._securitySystem = config.securitySystem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // entitlement_type - computed: false, optional: false, required: true
  private _entitlementType?: string; 
  public get entitlementType() {
    return this.getStringAttribute('entitlement_type');
  }
  public set entitlementType(value: string) {
    this._entitlementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementTypeInput() {
    return this._entitlementType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges = new PrivilegeResourcePrivilegesMap(this, "privileges");
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: { [key: string]: PrivilegeResourcePrivileges } | cdktf.IResolvable) {
    this._privileges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges.internalValue;
  }

  // security_system - computed: false, optional: false, required: true
  private _securitySystem?: string; 
  public get securitySystem() {
    return this.getStringAttribute('security_system');
  }
  public set securitySystem(value: string) {
    this._securitySystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySystemInput() {
    return this._securitySystem;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      entitlement_type: cdktf.stringToTerraform(this._entitlementType),
      privileges: cdktf.hashMapper(privilegeResourcePrivilegesToTerraform)(this._privileges.internalValue),
      security_system: cdktf.stringToTerraform(this._securitySystem),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_type: {
        value: cdktf.stringToHclTerraform(this._entitlementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.hashMapperHcl(privilegeResourcePrivilegesToHclTerraform)(this._privileges.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PrivilegeResourcePrivilegesMap",
      },
      security_system: {
        value: cdktf.stringToHclTerraform(this._securitySystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
