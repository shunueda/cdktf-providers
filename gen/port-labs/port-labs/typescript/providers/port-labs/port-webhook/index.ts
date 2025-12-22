// https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#description PortWebhook#description}
  */
  readonly description?: string;
  /**
  * Whether the webhook is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#enabled PortWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The icon of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#icon PortWebhook#icon}
  */
  readonly icon?: string;
  /**
  * The identifier of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#identifier PortWebhook#identifier}
  */
  readonly identifier?: string;
  /**
  * The mappings of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#mappings PortWebhook#mappings}
  */
  readonly mappings?: PortWebhookMappings[] | cdktf.IResolvable;
  /**
  * The security of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#security PortWebhook#security}
  */
  readonly security?: PortWebhookSecurity;
  /**
  * The title of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#title PortWebhook#title}
  */
  readonly title?: string;
}
export interface PortWebhookMappingsEntity {
  /**
  * The icon of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#icon PortWebhook#icon}
  */
  readonly icon?: string;
  /**
  * The identifier of the entity. Can be either a simple JQ expression (string) or a search query object encoded with jsonencode(). When using search query objects, the structure must include 'combinator' and 'rules' fields, and each rule must have 'property', 'operator', and 'value' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#identifier PortWebhook#identifier}
  */
  readonly identifier: string;
  /**
  * The properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#properties PortWebhook#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The relations of the entity. Relations can be defined as either simple JQ expressions (strings) or search query objects. When using objects, the rules array must be encoded with jsonencode().
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#relations PortWebhook#relations}
  */
  readonly relations?: { [key: string]: string };
  /**
  * The team of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#team PortWebhook#team}
  */
  readonly team?: string;
  /**
  * The title of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#title PortWebhook#title}
  */
  readonly title?: string;
}

export function portWebhookMappingsEntityToTerraform(struct?: PortWebhookMappingsEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    relations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.relations),
    team: cdktf.stringToTerraform(struct!.team),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portWebhookMappingsEntityToHclTerraform(struct?: PortWebhookMappingsEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    relations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.relations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortWebhookMappingsEntityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortWebhookMappingsEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._relations !== undefined) {
      hasAnyValues = true;
      internalValueResult.relations = this._relations;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortWebhookMappingsEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icon = undefined;
      this._identifier = undefined;
      this._properties = undefined;
      this._relations = undefined;
      this._team = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icon = value.icon;
      this._identifier = value.identifier;
      this._properties = value.properties;
      this._relations = value.relations;
      this._team = value.team;
      this._title = value.title;
    }
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // relations - computed: false, optional: true, required: false
  private _relations?: { [key: string]: string }; 
  public get relations() {
    return this.getStringMapAttribute('relations');
  }
  public set relations(value: { [key: string]: string }) {
    this._relations = value;
  }
  public resetRelations() {
    this._relations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations;
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface PortWebhookMappingsOperation {
  /**
  * Whether to delete dependents entities, only relevant for delete operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#delete_dependents PortWebhook#delete_dependents}
  */
  readonly deleteDependents?: boolean | cdktf.IResolvable;
  /**
  * The type of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#type PortWebhook#type}
  */
  readonly type: string;
}

export function portWebhookMappingsOperationToTerraform(struct?: PortWebhookMappingsOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_dependents: cdktf.booleanToTerraform(struct!.deleteDependents),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function portWebhookMappingsOperationToHclTerraform(struct?: PortWebhookMappingsOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_dependents: {
      value: cdktf.booleanToHclTerraform(struct!.deleteDependents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class PortWebhookMappingsOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortWebhookMappingsOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteDependents !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDependents = this._deleteDependents;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortWebhookMappingsOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteDependents = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteDependents = value.deleteDependents;
      this._type = value.type;
    }
  }

  // delete_dependents - computed: false, optional: true, required: false
  private _deleteDependents?: boolean | cdktf.IResolvable; 
  public get deleteDependents() {
    return this.getBooleanAttribute('delete_dependents');
  }
  public set deleteDependents(value: boolean | cdktf.IResolvable) {
    this._deleteDependents = value;
  }
  public resetDeleteDependents() {
    this._deleteDependents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDependentsInput() {
    return this._deleteDependents;
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
}
export interface PortWebhookMappings {
  /**
  * The blueprint of the mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#blueprint PortWebhook#blueprint}
  */
  readonly blueprint: string;
  /**
  * The entity of the mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#entity PortWebhook#entity}
  */
  readonly entity: PortWebhookMappingsEntity;
  /**
  * The filter of the mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#filter PortWebhook#filter}
  */
  readonly filter?: string;
  /**
  * The items to parser of the mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#items_to_parse PortWebhook#items_to_parse}
  */
  readonly itemsToParse?: string;
  /**
  * The operation of the mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#operation PortWebhook#operation}
  */
  readonly operation?: PortWebhookMappingsOperation;
}

export function portWebhookMappingsToTerraform(struct?: PortWebhookMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    entity: portWebhookMappingsEntityToTerraform(struct!.entity),
    filter: cdktf.stringToTerraform(struct!.filter),
    items_to_parse: cdktf.stringToTerraform(struct!.itemsToParse),
    operation: portWebhookMappingsOperationToTerraform(struct!.operation),
  }
}


export function portWebhookMappingsToHclTerraform(struct?: PortWebhookMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: cdktf.stringToHclTerraform(struct!.blueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity: {
      value: portWebhookMappingsEntityToHclTerraform(struct!.entity),
      isBlock: true,
      type: "struct",
      storageClassType: "PortWebhookMappingsEntity",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_to_parse: {
      value: cdktf.stringToHclTerraform(struct!.itemsToParse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: portWebhookMappingsOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "struct",
      storageClassType: "PortWebhookMappingsOperation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortWebhookMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortWebhookMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint;
    }
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._itemsToParse !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsToParse = this._itemsToParse;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortWebhookMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint = undefined;
      this._entity.internalValue = undefined;
      this._filter = undefined;
      this._itemsToParse = undefined;
      this._operation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprint = value.blueprint;
      this._entity.internalValue = value.entity;
      this._filter = value.filter;
      this._itemsToParse = value.itemsToParse;
      this._operation.internalValue = value.operation;
    }
  }

  // blueprint - computed: false, optional: false, required: true
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // entity - computed: false, optional: false, required: true
  private _entity = new PortWebhookMappingsEntityOutputReference(this, "entity");
  public get entity() {
    return this._entity;
  }
  public putEntity(value: PortWebhookMappingsEntity) {
    this._entity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // items_to_parse - computed: false, optional: true, required: false
  private _itemsToParse?: string; 
  public get itemsToParse() {
    return this.getStringAttribute('items_to_parse');
  }
  public set itemsToParse(value: string) {
    this._itemsToParse = value;
  }
  public resetItemsToParse() {
    this._itemsToParse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsToParseInput() {
    return this._itemsToParse;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new PortWebhookMappingsOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: PortWebhookMappingsOperation) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }
}

export class PortWebhookMappingsList extends cdktf.ComplexList {
  public internalValue? : PortWebhookMappings[] | cdktf.IResolvable

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
  public get(index: number): PortWebhookMappingsOutputReference {
    return new PortWebhookMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortWebhookSecurity {
  /**
  * The request identifier path of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#request_identifier_path PortWebhook#request_identifier_path}
  */
  readonly requestIdentifierPath?: string;
  /**
  * The secret of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#secret PortWebhook#secret}
  */
  readonly secret?: string;
  /**
  * The signature algorithm of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#signature_algorithm PortWebhook#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * The signature header name of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#signature_header_name PortWebhook#signature_header_name}
  */
  readonly signatureHeaderName?: string;
  /**
  * The signature prefix of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#signature_prefix PortWebhook#signature_prefix}
  */
  readonly signaturePrefix?: string;
}

export function portWebhookSecurityToTerraform(struct?: PortWebhookSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_identifier_path: cdktf.stringToTerraform(struct!.requestIdentifierPath),
    secret: cdktf.stringToTerraform(struct!.secret),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    signature_header_name: cdktf.stringToTerraform(struct!.signatureHeaderName),
    signature_prefix: cdktf.stringToTerraform(struct!.signaturePrefix),
  }
}


export function portWebhookSecurityToHclTerraform(struct?: PortWebhookSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_identifier_path: {
      value: cdktf.stringToHclTerraform(struct!.requestIdentifierPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_header_name: {
      value: cdktf.stringToHclTerraform(struct!.signatureHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_prefix: {
      value: cdktf.stringToHclTerraform(struct!.signaturePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortWebhookSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortWebhookSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestIdentifierPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIdentifierPath = this._requestIdentifierPath;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._signatureHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureHeaderName = this._signatureHeaderName;
    }
    if (this._signaturePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.signaturePrefix = this._signaturePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortWebhookSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestIdentifierPath = undefined;
      this._secret = undefined;
      this._signatureAlgorithm = undefined;
      this._signatureHeaderName = undefined;
      this._signaturePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestIdentifierPath = value.requestIdentifierPath;
      this._secret = value.secret;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._signatureHeaderName = value.signatureHeaderName;
      this._signaturePrefix = value.signaturePrefix;
    }
  }

  // request_identifier_path - computed: false, optional: true, required: false
  private _requestIdentifierPath?: string; 
  public get requestIdentifierPath() {
    return this.getStringAttribute('request_identifier_path');
  }
  public set requestIdentifierPath(value: string) {
    this._requestIdentifierPath = value;
  }
  public resetRequestIdentifierPath() {
    this._requestIdentifierPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdentifierPathInput() {
    return this._requestIdentifierPath;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signature_header_name - computed: false, optional: true, required: false
  private _signatureHeaderName?: string; 
  public get signatureHeaderName() {
    return this.getStringAttribute('signature_header_name');
  }
  public set signatureHeaderName(value: string) {
    this._signatureHeaderName = value;
  }
  public resetSignatureHeaderName() {
    this._signatureHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHeaderNameInput() {
    return this._signatureHeaderName;
  }

  // signature_prefix - computed: false, optional: true, required: false
  private _signaturePrefix?: string; 
  public get signaturePrefix() {
    return this.getStringAttribute('signature_prefix');
  }
  public set signaturePrefix(value: string) {
    this._signaturePrefix = value;
  }
  public resetSignaturePrefix() {
    this._signaturePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturePrefixInput() {
    return this._signaturePrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook port_webhook}
*/
export class PortWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortWebhook to import
  * @param importFromId The id of the existing PortWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.5/docs/resources/port_webhook port_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortWebhookConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PortWebhookConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'port_webhook',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.17.5',
        providerVersionConstraint: '2.17.5'
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
    this._enabled = config.enabled;
    this._icon = config.icon;
    this._identifier = config.identifier;
    this._mappings.internalValue = config.mappings;
    this._security.internalValue = config.security;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // enabled - computed: true, optional: true, required: false
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

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new PortWebhookMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: PortWebhookMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new PortWebhookSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: PortWebhookSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // webhook_key - computed: true, optional: false, required: false
  public get webhookKey() {
    return this.getStringAttribute('webhook_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      icon: cdktf.stringToTerraform(this._icon),
      identifier: cdktf.stringToTerraform(this._identifier),
      mappings: cdktf.listMapper(portWebhookMappingsToTerraform, false)(this._mappings.internalValue),
      security: portWebhookSecurityToTerraform(this._security.internalValue),
      title: cdktf.stringToTerraform(this._title),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
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
      mappings: {
        value: cdktf.listMapperHcl(portWebhookMappingsToHclTerraform, false)(this._mappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PortWebhookMappingsList",
      },
      security: {
        value: portWebhookSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortWebhookSecurity",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
