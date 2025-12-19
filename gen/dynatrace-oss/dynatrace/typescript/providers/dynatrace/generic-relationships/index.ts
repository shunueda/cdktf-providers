// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenericRelationshipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user or extension that created this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#created_by GenericRelationships#created_by}
  */
  readonly createdBy: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#enabled GenericRelationships#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specify a role for the source entity. If both source and destination type are the same, referring different roles will allow identification of a relationships direction. If role is left blank, any role of the source type is considered for the relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#from_role GenericRelationships#from_role}
  */
  readonly fromRole?: string;
  /**
  * Define an entity type as the source of the relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#from_type GenericRelationships#from_type}
  */
  readonly fromType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#id GenericRelationships#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a role for the destination entity. If both source and destination type are the same, referring different roles will allow identification of a relationships direction. If role is left blank, any role of the destination type is considered for the relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#to_role GenericRelationships#to_role}
  */
  readonly toRole?: string;
  /**
  * Define an entity type as the destination of the relationship. You can choose the same type as the source type. In this case you also may assign different roles for source and destination for having directed relationships.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#to_type GenericRelationships#to_type}
  */
  readonly toType: string;
  /**
  * Possible Values: `CALLS`, `CHILD_OF`, `INSTANCE_OF`, `PART_OF`, `RUNS_ON`, `SAME_AS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#type_of_relation GenericRelationships#type_of_relation}
  */
  readonly typeOfRelation: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#sources GenericRelationships#sources}
  */
  readonly sources: GenericRelationshipsSources;
}
export interface GenericRelationshipsSourcesSourceMappingRulesMappingRule {
  /**
  * The case-sensitive name of a property of the destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#destination_property GenericRelationships#destination_property}
  */
  readonly destinationProperty: string;
  /**
  * Possible Values: `Leavetextas_is`, `Tolowercase`, `Touppercase`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#destination_transformation GenericRelationships#destination_transformation}
  */
  readonly destinationTransformation: string;
  /**
  * The case-sensitive name of a property of the source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#source_property GenericRelationships#source_property}
  */
  readonly sourceProperty: string;
  /**
  * Possible Values: `Leavetextas_is`, `Tolowercase`, `Touppercase`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#source_transformation GenericRelationships#source_transformation}
  */
  readonly sourceTransformation: string;
}

export function genericRelationshipsSourcesSourceMappingRulesMappingRuleToTerraform(struct?: GenericRelationshipsSourcesSourceMappingRulesMappingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_property: cdktf.stringToTerraform(struct!.destinationProperty),
    destination_transformation: cdktf.stringToTerraform(struct!.destinationTransformation),
    source_property: cdktf.stringToTerraform(struct!.sourceProperty),
    source_transformation: cdktf.stringToTerraform(struct!.sourceTransformation),
  }
}


export function genericRelationshipsSourcesSourceMappingRulesMappingRuleToHclTerraform(struct?: GenericRelationshipsSourcesSourceMappingRulesMappingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_property: {
      value: cdktf.stringToHclTerraform(struct!.destinationProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_transformation: {
      value: cdktf.stringToHclTerraform(struct!.destinationTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_property: {
      value: cdktf.stringToHclTerraform(struct!.sourceProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_transformation: {
      value: cdktf.stringToHclTerraform(struct!.sourceTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericRelationshipsSourcesSourceMappingRulesMappingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenericRelationshipsSourcesSourceMappingRulesMappingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationProperty = this._destinationProperty;
    }
    if (this._destinationTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTransformation = this._destinationTransformation;
    }
    if (this._sourceProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProperty = this._sourceProperty;
    }
    if (this._sourceTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTransformation = this._sourceTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericRelationshipsSourcesSourceMappingRulesMappingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationProperty = undefined;
      this._destinationTransformation = undefined;
      this._sourceProperty = undefined;
      this._sourceTransformation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationProperty = value.destinationProperty;
      this._destinationTransformation = value.destinationTransformation;
      this._sourceProperty = value.sourceProperty;
      this._sourceTransformation = value.sourceTransformation;
    }
  }

  // destination_property - computed: false, optional: false, required: true
  private _destinationProperty?: string; 
  public get destinationProperty() {
    return this.getStringAttribute('destination_property');
  }
  public set destinationProperty(value: string) {
    this._destinationProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPropertyInput() {
    return this._destinationProperty;
  }

  // destination_transformation - computed: false, optional: false, required: true
  private _destinationTransformation?: string; 
  public get destinationTransformation() {
    return this.getStringAttribute('destination_transformation');
  }
  public set destinationTransformation(value: string) {
    this._destinationTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTransformationInput() {
    return this._destinationTransformation;
  }

  // source_property - computed: false, optional: false, required: true
  private _sourceProperty?: string; 
  public get sourceProperty() {
    return this.getStringAttribute('source_property');
  }
  public set sourceProperty(value: string) {
    this._sourceProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePropertyInput() {
    return this._sourceProperty;
  }

  // source_transformation - computed: false, optional: false, required: true
  private _sourceTransformation?: string; 
  public get sourceTransformation() {
    return this.getStringAttribute('source_transformation');
  }
  public set sourceTransformation(value: string) {
    this._sourceTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTransformationInput() {
    return this._sourceTransformation;
  }
}

export class GenericRelationshipsSourcesSourceMappingRulesMappingRuleList extends cdktf.ComplexList {
  public internalValue? : GenericRelationshipsSourcesSourceMappingRulesMappingRule[] | cdktf.IResolvable

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
  public get(index: number): GenericRelationshipsSourcesSourceMappingRulesMappingRuleOutputReference {
    return new GenericRelationshipsSourcesSourceMappingRulesMappingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenericRelationshipsSourcesSourceMappingRules {
  /**
  * mapping_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#mapping_rule GenericRelationships#mapping_rule}
  */
  readonly mappingRule: GenericRelationshipsSourcesSourceMappingRulesMappingRule[] | cdktf.IResolvable;
}

export function genericRelationshipsSourcesSourceMappingRulesToTerraform(struct?: GenericRelationshipsSourcesSourceMappingRulesOutputReference | GenericRelationshipsSourcesSourceMappingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_rule: cdktf.listMapper(genericRelationshipsSourcesSourceMappingRulesMappingRuleToTerraform, true)(struct!.mappingRule),
  }
}


export function genericRelationshipsSourcesSourceMappingRulesToHclTerraform(struct?: GenericRelationshipsSourcesSourceMappingRulesOutputReference | GenericRelationshipsSourcesSourceMappingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping_rule: {
      value: cdktf.listMapperHcl(genericRelationshipsSourcesSourceMappingRulesMappingRuleToHclTerraform, true)(struct!.mappingRule),
      isBlock: true,
      type: "set",
      storageClassType: "GenericRelationshipsSourcesSourceMappingRulesMappingRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericRelationshipsSourcesSourceMappingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenericRelationshipsSourcesSourceMappingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingRule = this._mappingRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericRelationshipsSourcesSourceMappingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingRule.internalValue = value.mappingRule;
    }
  }

  // mapping_rule - computed: false, optional: false, required: true
  private _mappingRule = new GenericRelationshipsSourcesSourceMappingRulesMappingRuleList(this, "mapping_rule", true);
  public get mappingRule() {
    return this._mappingRule;
  }
  public putMappingRule(value: GenericRelationshipsSourcesSourceMappingRulesMappingRule[] | cdktf.IResolvable) {
    this._mappingRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRuleInput() {
    return this._mappingRule.internalValue;
  }
}
export interface GenericRelationshipsSourcesSource {
  /**
  * Specify a filter that needs to match in order for the extraction to happen.. Two different filters are supported: `$eq(value)` will ensure that the source matches exactly 'value', while `$prefix(value)` will ensure that the source begins with exactly 'value'.
  * If your value contains the characters '(', ')' or '\~', you need to escape them by adding a '\~' in front of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#condition GenericRelationships#condition}
  */
  readonly condition?: string;
  /**
  * Possible Values: `BusinessEvents`, `Entities`, `Events`, `Logs`, `Metrics`, `Spans`, `Topology`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#source_type GenericRelationships#source_type}
  */
  readonly sourceType: string;
  /**
  * mapping_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#mapping_rules GenericRelationships#mapping_rules}
  */
  readonly mappingRules?: GenericRelationshipsSourcesSourceMappingRules;
}

export function genericRelationshipsSourcesSourceToTerraform(struct?: GenericRelationshipsSourcesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    mapping_rules: genericRelationshipsSourcesSourceMappingRulesToTerraform(struct!.mappingRules),
  }
}


export function genericRelationshipsSourcesSourceToHclTerraform(struct?: GenericRelationshipsSourcesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_rules: {
      value: genericRelationshipsSourcesSourceMappingRulesToHclTerraform(struct!.mappingRules),
      isBlock: true,
      type: "list",
      storageClassType: "GenericRelationshipsSourcesSourceMappingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericRelationshipsSourcesSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenericRelationshipsSourcesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._mappingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingRules = this._mappingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericRelationshipsSourcesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._sourceType = undefined;
      this._mappingRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._sourceType = value.sourceType;
      this._mappingRules.internalValue = value.mappingRules;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // mapping_rules - computed: false, optional: true, required: false
  private _mappingRules = new GenericRelationshipsSourcesSourceMappingRulesOutputReference(this, "mapping_rules");
  public get mappingRules() {
    return this._mappingRules;
  }
  public putMappingRules(value: GenericRelationshipsSourcesSourceMappingRules) {
    this._mappingRules.internalValue = value;
  }
  public resetMappingRules() {
    this._mappingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRulesInput() {
    return this._mappingRules.internalValue;
  }
}

export class GenericRelationshipsSourcesSourceList extends cdktf.ComplexList {
  public internalValue? : GenericRelationshipsSourcesSource[] | cdktf.IResolvable

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
  public get(index: number): GenericRelationshipsSourcesSourceOutputReference {
    return new GenericRelationshipsSourcesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenericRelationshipsSources {
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#source GenericRelationships#source}
  */
  readonly source: GenericRelationshipsSourcesSource[] | cdktf.IResolvable;
}

export function genericRelationshipsSourcesToTerraform(struct?: GenericRelationshipsSourcesOutputReference | GenericRelationshipsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.listMapper(genericRelationshipsSourcesSourceToTerraform, true)(struct!.source),
  }
}


export function genericRelationshipsSourcesToHclTerraform(struct?: GenericRelationshipsSourcesOutputReference | GenericRelationshipsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.listMapperHcl(genericRelationshipsSourcesSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "set",
      storageClassType: "GenericRelationshipsSourcesSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericRelationshipsSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenericRelationshipsSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericRelationshipsSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new GenericRelationshipsSourcesSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: GenericRelationshipsSourcesSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships dynatrace_generic_relationships}
*/
export class GenericRelationships extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_generic_relationships";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenericRelationships resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenericRelationships to import
  * @param importFromId The id of the existing GenericRelationships that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenericRelationships to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_generic_relationships", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_relationships dynatrace_generic_relationships} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenericRelationshipsConfig
  */
  public constructor(scope: Construct, id: string, config: GenericRelationshipsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_generic_relationships',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._enabled = config.enabled;
    this._fromRole = config.fromRole;
    this._fromType = config.fromType;
    this._id = config.id;
    this._toRole = config.toRole;
    this._toType = config.toType;
    this._typeOfRelation = config.typeOfRelation;
    this._sources.internalValue = config.sources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: false, required: true
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // from_role - computed: false, optional: true, required: false
  private _fromRole?: string; 
  public get fromRole() {
    return this.getStringAttribute('from_role');
  }
  public set fromRole(value: string) {
    this._fromRole = value;
  }
  public resetFromRole() {
    this._fromRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromRoleInput() {
    return this._fromRole;
  }

  // from_type - computed: false, optional: false, required: true
  private _fromType?: string; 
  public get fromType() {
    return this.getStringAttribute('from_type');
  }
  public set fromType(value: string) {
    this._fromType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTypeInput() {
    return this._fromType;
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

  // to_role - computed: false, optional: true, required: false
  private _toRole?: string; 
  public get toRole() {
    return this.getStringAttribute('to_role');
  }
  public set toRole(value: string) {
    this._toRole = value;
  }
  public resetToRole() {
    this._toRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRoleInput() {
    return this._toRole;
  }

  // to_type - computed: false, optional: false, required: true
  private _toType?: string; 
  public get toType() {
    return this.getStringAttribute('to_type');
  }
  public set toType(value: string) {
    this._toType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toTypeInput() {
    return this._toType;
  }

  // type_of_relation - computed: false, optional: false, required: true
  private _typeOfRelation?: string; 
  public get typeOfRelation() {
    return this.getStringAttribute('type_of_relation');
  }
  public set typeOfRelation(value: string) {
    this._typeOfRelation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfRelationInput() {
    return this._typeOfRelation;
  }

  // sources - computed: false, optional: false, required: true
  private _sources = new GenericRelationshipsSourcesOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: GenericRelationshipsSources) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      enabled: cdktf.booleanToTerraform(this._enabled),
      from_role: cdktf.stringToTerraform(this._fromRole),
      from_type: cdktf.stringToTerraform(this._fromType),
      id: cdktf.stringToTerraform(this._id),
      to_role: cdktf.stringToTerraform(this._toRole),
      to_type: cdktf.stringToTerraform(this._toType),
      type_of_relation: cdktf.stringToTerraform(this._typeOfRelation),
      sources: genericRelationshipsSourcesToTerraform(this._sources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      from_role: {
        value: cdktf.stringToHclTerraform(this._fromRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_type: {
        value: cdktf.stringToHclTerraform(this._fromType),
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
      to_role: {
        value: cdktf.stringToHclTerraform(this._toRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_type: {
        value: cdktf.stringToHclTerraform(this._toType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_of_relation: {
        value: cdktf.stringToHclTerraform(this._typeOfRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sources: {
        value: genericRelationshipsSourcesToHclTerraform(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenericRelationshipsSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
