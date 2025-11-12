// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicAttributeResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Error string or structured error details as flattened text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#dynamic_attribute_errors DynamicAttributeResource#dynamic_attribute_errors}
  */
  readonly dynamicAttributeErrors?: string;
  /**
  * Set of dynamic attribute configuration blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#dynamic_attributes DynamicAttributeResource#dynamic_attributes}
  */
  readonly dynamicAttributes: { [key: string]: DynamicAttributeResourceDynamicAttributes } | cdktf.IResolvable;
  /**
  * Endpoint associated with the dynamic attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#endpoint DynamicAttributeResource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Security system associated with the dynamic attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#security_system DynamicAttributeResource#security_system}
  */
  readonly securitySystem: string;
  /**
  * User who last updated the dynamic attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#update_user DynamicAttributeResource#update_user}
  */
  readonly updateUser?: string;
}
export interface DynamicAttributeResourceDynamicAttributes {
  /**
  * Accounts column mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#accounts_column DynamicAttributeResource#accounts_column}
  */
  readonly accountsColumn?: string;
  /**
  * Action string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#action_string DynamicAttributeResource#action_string}
  */
  readonly actionString?: string;
  /**
  * Action to perform when the parent attribute changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#action_to_perform_when_parent_attribute_changes DynamicAttributeResource#action_to_perform_when_parent_attribute_changes}
  */
  readonly actionToPerformWhenParentAttributeChanges?: string;
  /**
  * Group or categorize the attribute in the request form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#attribute_group DynamicAttributeResource#attribute_group}
  */
  readonly attributeGroup?: string;
  /**
  * Name to be shown in the Access Requests form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#attribute_lable DynamicAttributeResource#attribute_lable}
  */
  readonly attributeLable?: string;
  /**
  * Specify the dynamic attribute name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#attribute_name DynamicAttributeResource#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Attribute type used for filtering and display.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#attribute_type DynamicAttributeResource#attribute_type}
  */
  readonly attributeType?: string;
  /**
  * Value options or query for the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#attribute_value DynamicAttributeResource#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Default value for the attribute(Currently not configurable for BOOLEAN attribute type from Terraform).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#default_value DynamicAttributeResource#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of values as CSV.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#description_as_csv DynamicAttributeResource#description_as_csv}
  */
  readonly descriptionAsCsv?: string;
  /**
  * Whether the attribute is editable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#editable DynamicAttributeResource#editable}
  */
  readonly editable?: string;
  /**
  * Whether to hide this attribute on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#hide_on_create DynamicAttributeResource#hide_on_create}
  */
  readonly hideOnCreate?: string;
  /**
  * Whether to hide this attribute on update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#hide_on_update DynamicAttributeResource#hide_on_update}
  */
  readonly hideOnUpdate?: string;
  /**
  * Sequence for display of the dynamic attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#order_index DynamicAttributeResource#order_index}
  */
  readonly orderIndex?: string;
  /**
  * Parent attribute this one depends on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#parent_attribute DynamicAttributeResource#parent_attribute}
  */
  readonly parentAttribute?: string;
  /**
  * Type of request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#request_type DynamicAttributeResource#request_type}
  */
  readonly requestType: string;
  /**
  * Whether this attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#required DynamicAttributeResource#required}
  */
  readonly required?: string;
  /**
  * Whether to show this on child requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#showonchild DynamicAttributeResource#showonchild}
  */
  readonly showonchild?: string;
}

export function dynamicAttributeResourceDynamicAttributesToTerraform(struct?: DynamicAttributeResourceDynamicAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts_column: cdktf.stringToTerraform(struct!.accountsColumn),
    action_string: cdktf.stringToTerraform(struct!.actionString),
    action_to_perform_when_parent_attribute_changes: cdktf.stringToTerraform(struct!.actionToPerformWhenParentAttributeChanges),
    attribute_group: cdktf.stringToTerraform(struct!.attributeGroup),
    attribute_lable: cdktf.stringToTerraform(struct!.attributeLable),
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description_as_csv: cdktf.stringToTerraform(struct!.descriptionAsCsv),
    editable: cdktf.stringToTerraform(struct!.editable),
    hide_on_create: cdktf.stringToTerraform(struct!.hideOnCreate),
    hide_on_update: cdktf.stringToTerraform(struct!.hideOnUpdate),
    order_index: cdktf.stringToTerraform(struct!.orderIndex),
    parent_attribute: cdktf.stringToTerraform(struct!.parentAttribute),
    request_type: cdktf.stringToTerraform(struct!.requestType),
    required: cdktf.stringToTerraform(struct!.required),
    showonchild: cdktf.stringToTerraform(struct!.showonchild),
  }
}


export function dynamicAttributeResourceDynamicAttributesToHclTerraform(struct?: DynamicAttributeResourceDynamicAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts_column: {
      value: cdktf.stringToHclTerraform(struct!.accountsColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_string: {
      value: cdktf.stringToHclTerraform(struct!.actionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_to_perform_when_parent_attribute_changes: {
      value: cdktf.stringToHclTerraform(struct!.actionToPerformWhenParentAttributeChanges),
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
    attribute_lable: {
      value: cdktf.stringToHclTerraform(struct!.attributeLable),
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
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
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
    description_as_csv: {
      value: cdktf.stringToHclTerraform(struct!.descriptionAsCsv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    editable: {
      value: cdktf.stringToHclTerraform(struct!.editable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_on_create: {
      value: cdktf.stringToHclTerraform(struct!.hideOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_on_update: {
      value: cdktf.stringToHclTerraform(struct!.hideOnUpdate),
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
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.stringToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    showonchild: {
      value: cdktf.stringToHclTerraform(struct!.showonchild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicAttributeResourceDynamicAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamicAttributeResourceDynamicAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountsColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountsColumn = this._accountsColumn;
    }
    if (this._actionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionString = this._actionString;
    }
    if (this._actionToPerformWhenParentAttributeChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionToPerformWhenParentAttributeChanges = this._actionToPerformWhenParentAttributeChanges;
    }
    if (this._attributeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeGroup = this._attributeGroup;
    }
    if (this._attributeLable !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeLable = this._attributeLable;
    }
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._descriptionAsCsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionAsCsv = this._descriptionAsCsv;
    }
    if (this._editable !== undefined) {
      hasAnyValues = true;
      internalValueResult.editable = this._editable;
    }
    if (this._hideOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOnCreate = this._hideOnCreate;
    }
    if (this._hideOnUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOnUpdate = this._hideOnUpdate;
    }
    if (this._orderIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderIndex = this._orderIndex;
    }
    if (this._parentAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentAttribute = this._parentAttribute;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._showonchild !== undefined) {
      hasAnyValues = true;
      internalValueResult.showonchild = this._showonchild;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicAttributeResourceDynamicAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountsColumn = undefined;
      this._actionString = undefined;
      this._actionToPerformWhenParentAttributeChanges = undefined;
      this._attributeGroup = undefined;
      this._attributeLable = undefined;
      this._attributeName = undefined;
      this._attributeType = undefined;
      this._attributeValue = undefined;
      this._defaultValue = undefined;
      this._descriptionAsCsv = undefined;
      this._editable = undefined;
      this._hideOnCreate = undefined;
      this._hideOnUpdate = undefined;
      this._orderIndex = undefined;
      this._parentAttribute = undefined;
      this._requestType = undefined;
      this._required = undefined;
      this._showonchild = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountsColumn = value.accountsColumn;
      this._actionString = value.actionString;
      this._actionToPerformWhenParentAttributeChanges = value.actionToPerformWhenParentAttributeChanges;
      this._attributeGroup = value.attributeGroup;
      this._attributeLable = value.attributeLable;
      this._attributeName = value.attributeName;
      this._attributeType = value.attributeType;
      this._attributeValue = value.attributeValue;
      this._defaultValue = value.defaultValue;
      this._descriptionAsCsv = value.descriptionAsCsv;
      this._editable = value.editable;
      this._hideOnCreate = value.hideOnCreate;
      this._hideOnUpdate = value.hideOnUpdate;
      this._orderIndex = value.orderIndex;
      this._parentAttribute = value.parentAttribute;
      this._requestType = value.requestType;
      this._required = value.required;
      this._showonchild = value.showonchild;
    }
  }

  // accounts_column - computed: true, optional: true, required: false
  private _accountsColumn?: string; 
  public get accountsColumn() {
    return this.getStringAttribute('accounts_column');
  }
  public set accountsColumn(value: string) {
    this._accountsColumn = value;
  }
  public resetAccountsColumn() {
    this._accountsColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsColumnInput() {
    return this._accountsColumn;
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

  // action_to_perform_when_parent_attribute_changes - computed: true, optional: true, required: false
  private _actionToPerformWhenParentAttributeChanges?: string; 
  public get actionToPerformWhenParentAttributeChanges() {
    return this.getStringAttribute('action_to_perform_when_parent_attribute_changes');
  }
  public set actionToPerformWhenParentAttributeChanges(value: string) {
    this._actionToPerformWhenParentAttributeChanges = value;
  }
  public resetActionToPerformWhenParentAttributeChanges() {
    this._actionToPerformWhenParentAttributeChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionToPerformWhenParentAttributeChangesInput() {
    return this._actionToPerformWhenParentAttributeChanges;
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

  // attribute_lable - computed: true, optional: true, required: false
  private _attributeLable?: string; 
  public get attributeLable() {
    return this.getStringAttribute('attribute_lable');
  }
  public set attributeLable(value: string) {
    this._attributeLable = value;
  }
  public resetAttributeLable() {
    this._attributeLable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeLableInput() {
    return this._attributeLable;
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

  // attribute_type - computed: true, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // attribute_value - computed: true, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
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

  // description_as_csv - computed: true, optional: true, required: false
  private _descriptionAsCsv?: string; 
  public get descriptionAsCsv() {
    return this.getStringAttribute('description_as_csv');
  }
  public set descriptionAsCsv(value: string) {
    this._descriptionAsCsv = value;
  }
  public resetDescriptionAsCsv() {
    this._descriptionAsCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionAsCsvInput() {
    return this._descriptionAsCsv;
  }

  // editable - computed: true, optional: true, required: false
  private _editable?: string; 
  public get editable() {
    return this.getStringAttribute('editable');
  }
  public set editable(value: string) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
  }

  // hide_on_create - computed: true, optional: true, required: false
  private _hideOnCreate?: string; 
  public get hideOnCreate() {
    return this.getStringAttribute('hide_on_create');
  }
  public set hideOnCreate(value: string) {
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
  private _hideOnUpdate?: string; 
  public get hideOnUpdate() {
    return this.getStringAttribute('hide_on_update');
  }
  public set hideOnUpdate(value: string) {
    this._hideOnUpdate = value;
  }
  public resetHideOnUpdate() {
    this._hideOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOnUpdateInput() {
    return this._hideOnUpdate;
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

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // showonchild - computed: true, optional: true, required: false
  private _showonchild?: string; 
  public get showonchild() {
    return this.getStringAttribute('showonchild');
  }
  public set showonchild(value: string) {
    this._showonchild = value;
  }
  public resetShowonchild() {
    this._showonchild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showonchildInput() {
    return this._showonchild;
  }
}

export class DynamicAttributeResourceDynamicAttributesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DynamicAttributeResourceDynamicAttributes } | cdktf.IResolvable

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
  public get(key: string): DynamicAttributeResourceDynamicAttributesOutputReference {
    return new DynamicAttributeResourceDynamicAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource saviynt_dynamic_attribute_resource}
*/
export class DynamicAttributeResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_dynamic_attribute_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicAttributeResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicAttributeResource to import
  * @param importFromId The id of the existing DynamicAttributeResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicAttributeResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_dynamic_attribute_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/dynamic_attribute_resource saviynt_dynamic_attribute_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicAttributeResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicAttributeResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_dynamic_attribute_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicAttributeErrors = config.dynamicAttributeErrors;
    this._dynamicAttributes.internalValue = config.dynamicAttributes;
    this._endpoint = config.endpoint;
    this._securitySystem = config.securitySystem;
    this._updateUser = config.updateUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_attribute_errors - computed: true, optional: true, required: false
  private _dynamicAttributeErrors?: string; 
  public get dynamicAttributeErrors() {
    return this.getStringAttribute('dynamic_attribute_errors');
  }
  public set dynamicAttributeErrors(value: string) {
    this._dynamicAttributeErrors = value;
  }
  public resetDynamicAttributeErrors() {
    this._dynamicAttributeErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAttributeErrorsInput() {
    return this._dynamicAttributeErrors;
  }

  // dynamic_attributes - computed: false, optional: false, required: true
  private _dynamicAttributes = new DynamicAttributeResourceDynamicAttributesMap(this, "dynamic_attributes");
  public get dynamicAttributes() {
    return this._dynamicAttributes;
  }
  public putDynamicAttributes(value: { [key: string]: DynamicAttributeResourceDynamicAttributes } | cdktf.IResolvable) {
    this._dynamicAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAttributesInput() {
    return this._dynamicAttributes.internalValue;
  }

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

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
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

  // update_user - computed: true, optional: true, required: false
  private _updateUser?: string; 
  public get updateUser() {
    return this.getStringAttribute('update_user');
  }
  public set updateUser(value: string) {
    this._updateUser = value;
  }
  public resetUpdateUser() {
    this._updateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserInput() {
    return this._updateUser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_attribute_errors: cdktf.stringToTerraform(this._dynamicAttributeErrors),
      dynamic_attributes: cdktf.hashMapper(dynamicAttributeResourceDynamicAttributesToTerraform)(this._dynamicAttributes.internalValue),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      security_system: cdktf.stringToTerraform(this._securitySystem),
      update_user: cdktf.stringToTerraform(this._updateUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_attribute_errors: {
        value: cdktf.stringToHclTerraform(this._dynamicAttributeErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_attributes: {
        value: cdktf.hashMapperHcl(dynamicAttributeResourceDynamicAttributesToHclTerraform)(this._dynamicAttributes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DynamicAttributeResourceDynamicAttributesMap",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_system: {
        value: cdktf.stringToHclTerraform(this._securitySystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user: {
        value: cdktf.stringToHclTerraform(this._updateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
