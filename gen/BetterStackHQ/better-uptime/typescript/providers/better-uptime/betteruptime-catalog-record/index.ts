// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeCatalogRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Catalog relation this record belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#relation_id BetteruptimeCatalogRecord#relation_id}
  */
  readonly relationId: string;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#attribute BetteruptimeCatalogRecord#attribute}
  */
  readonly attribute: BetteruptimeCatalogRecordAttribute[] | cdktf.IResolvable;
}
export interface BetteruptimeCatalogRecordAttribute {
  /**
  * ID of the target Catalog attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#attribute_id BetteruptimeCatalogRecord#attribute_id}
  */
  readonly attributeId: string;
  /**
  * Email of the referenced user when type is `User`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#email BetteruptimeCatalogRecord#email}
  */
  readonly email?: string;
  /**
  * ID of the referenced item when type is different than `String`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#item_id BetteruptimeCatalogRecord#item_id}
  */
  readonly itemId?: string;
  /**
  * Name of the referenced item when type is different than `String`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#name BetteruptimeCatalogRecord#name}
  */
  readonly name?: string;
  /**
  * Value types can be grouped into 2 main categories:
  *   - **Scalar**: `String`
  *   - **Reference**: `User`, `Team`, `Policy`, `Schedule`, `SlackIntegration`, `LinearIntegration`, `JiraIntegration`, `MicrosoftTeamsWebhook`, `ZapierWebhook`, `NativeWebhook`, `PagerDutyWebhook`
  *   
  *   The value of a **Scalar** type is defined using the value field.
  *   
  *   The value of a **Reference** type is defined using one of the following fields:
  *   - `item_id` - great choice when you know the ID of the target item.
  *   - `email` - your go-to choice when you're referencing users.
  *   - `name` - can be used to reference other items like teams, policies, etc.
  *   
  *   **The reference types require the presence of at least one of the three fields: `item_id`, `name`, `email`.**
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#type BetteruptimeCatalogRecord#type}
  */
  readonly type?: string;
  /**
  * Value when type is String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#value BetteruptimeCatalogRecord#value}
  */
  readonly value?: string;
}

export function betteruptimeCatalogRecordAttributeToTerraform(struct?: BetteruptimeCatalogRecordAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_id: cdktf.stringToTerraform(struct!.attributeId),
    email: cdktf.stringToTerraform(struct!.email),
    item_id: cdktf.stringToTerraform(struct!.itemId),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function betteruptimeCatalogRecordAttributeToHclTerraform(struct?: BetteruptimeCatalogRecordAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_id: {
      value: cdktf.stringToHclTerraform(struct!.attributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_id: {
      value: cdktf.stringToHclTerraform(struct!.itemId),
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

export class BetteruptimeCatalogRecordAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeCatalogRecordAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeId = this._attributeId;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._itemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemId = this._itemId;
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

  public set internalValue(value: BetteruptimeCatalogRecordAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeId = undefined;
      this._email = undefined;
      this._itemId = undefined;
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
      this._attributeId = value.attributeId;
      this._email = value.email;
      this._itemId = value.itemId;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // attribute_id - computed: false, optional: false, required: true
  private _attributeId?: string; 
  public get attributeId() {
    return this.getStringAttribute('attribute_id');
  }
  public set attributeId(value: string) {
    this._attributeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeIdInput() {
    return this._attributeId;
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // item_id - computed: false, optional: true, required: false
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  public resetItemId() {
    this._itemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
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

export class BetteruptimeCatalogRecordAttributeList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeCatalogRecordAttribute[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeCatalogRecordAttributeOutputReference {
    return new BetteruptimeCatalogRecordAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record betteruptime_catalog_record}
*/
export class BetteruptimeCatalogRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_catalog_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeCatalogRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeCatalogRecord to import
  * @param importFromId The id of the existing BetteruptimeCatalogRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeCatalogRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_catalog_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_catalog_record betteruptime_catalog_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeCatalogRecordConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeCatalogRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_catalog_record',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._relationId = config.relationId;
    this._attribute.internalValue = config.attribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // relation_id - computed: false, optional: false, required: true
  private _relationId?: string; 
  public get relationId() {
    return this.getStringAttribute('relation_id');
  }
  public set relationId(value: string) {
    this._relationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationIdInput() {
    return this._relationId;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute = new BetteruptimeCatalogRecordAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: BetteruptimeCatalogRecordAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      relation_id: cdktf.stringToTerraform(this._relationId),
      attribute: cdktf.listMapper(betteruptimeCatalogRecordAttributeToTerraform, true)(this._attribute.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      relation_id: {
        value: cdktf.stringToHclTerraform(this._relationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute: {
        value: cdktf.listMapperHcl(betteruptimeCatalogRecordAttributeToHclTerraform, true)(this._attribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeCatalogRecordAttributeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
