// https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortAggregationPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the blueprint the aggregation property will be added to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#blueprint_identifier PortAggregationProperties#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
  /**
  * The aggregation property of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#properties PortAggregationProperties#properties}
  */
  readonly properties: { [key: string]: PortAggregationPropertiesProperties } | cdktf.IResolvable;
}
export interface PortAggregationPropertiesPropertiesMethodAggregateByProperty {
  /**
  * The func of the aggregate by property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#func PortAggregationProperties#func}
  */
  readonly func: string;
  /**
  * The property of the aggregate by property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#property PortAggregationProperties#property}
  */
  readonly property: string;
}

export function portAggregationPropertiesPropertiesMethodAggregateByPropertyToTerraform(struct?: PortAggregationPropertiesPropertiesMethodAggregateByProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    func: cdktf.stringToTerraform(struct!.func),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function portAggregationPropertiesPropertiesMethodAggregateByPropertyToHclTerraform(struct?: PortAggregationPropertiesPropertiesMethodAggregateByProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    func: {
      value: cdktf.stringToHclTerraform(struct!.func),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortAggregationPropertiesPropertiesMethodAggregateByPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortAggregationPropertiesPropertiesMethodAggregateByProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._func !== undefined) {
      hasAnyValues = true;
      internalValueResult.func = this._func;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortAggregationPropertiesPropertiesMethodAggregateByProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._func = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._func = value.func;
      this._property = value.property;
    }
  }

  // func - computed: false, optional: false, required: true
  private _func?: string; 
  public get func() {
    return this.getStringAttribute('func');
  }
  public set func(value: string) {
    this._func = value;
  }
  // Temporarily expose input value. Use with caution.
  public get funcInput() {
    return this._func;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}
export interface PortAggregationPropertiesPropertiesMethodAverageByProperty {
  /**
  * The time periods to calculate the average by, e.g. hour, day, week, month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#average_of PortAggregationProperties#average_of}
  */
  readonly averageOf: string;
  /**
  * The property name on which to calculate the the time periods, e.g. $createdAt, $updated_at or any other date property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#measure_time_by PortAggregationProperties#measure_time_by}
  */
  readonly measureTimeBy: string;
  /**
  * The property name on which to calculate the average by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#property PortAggregationProperties#property}
  */
  readonly property: string;
}

export function portAggregationPropertiesPropertiesMethodAverageByPropertyToTerraform(struct?: PortAggregationPropertiesPropertiesMethodAverageByProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_of: cdktf.stringToTerraform(struct!.averageOf),
    measure_time_by: cdktf.stringToTerraform(struct!.measureTimeBy),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function portAggregationPropertiesPropertiesMethodAverageByPropertyToHclTerraform(struct?: PortAggregationPropertiesPropertiesMethodAverageByProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_of: {
      value: cdktf.stringToHclTerraform(struct!.averageOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_time_by: {
      value: cdktf.stringToHclTerraform(struct!.measureTimeBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortAggregationPropertiesPropertiesMethodAverageByPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortAggregationPropertiesPropertiesMethodAverageByProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageOf = this._averageOf;
    }
    if (this._measureTimeBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureTimeBy = this._measureTimeBy;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortAggregationPropertiesPropertiesMethodAverageByProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageOf = undefined;
      this._measureTimeBy = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageOf = value.averageOf;
      this._measureTimeBy = value.measureTimeBy;
      this._property = value.property;
    }
  }

  // average_of - computed: false, optional: false, required: true
  private _averageOf?: string; 
  public get averageOf() {
    return this.getStringAttribute('average_of');
  }
  public set averageOf(value: string) {
    this._averageOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get averageOfInput() {
    return this._averageOf;
  }

  // measure_time_by - computed: false, optional: false, required: true
  private _measureTimeBy?: string; 
  public get measureTimeBy() {
    return this.getStringAttribute('measure_time_by');
  }
  public set measureTimeBy(value: string) {
    this._measureTimeBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureTimeByInput() {
    return this._measureTimeBy;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}
export interface PortAggregationPropertiesPropertiesMethodAverageEntities {
  /**
  * The time periods to calculate the average of, e.g. hour, day, week, month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#average_of PortAggregationProperties#average_of}
  */
  readonly averageOf?: string;
  /**
  * The property name on which to calculate the the time periods, e.g. $createdAt, $updated_at or any other date property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#measure_time_by PortAggregationProperties#measure_time_by}
  */
  readonly measureTimeBy?: string;
}

export function portAggregationPropertiesPropertiesMethodAverageEntitiesToTerraform(struct?: PortAggregationPropertiesPropertiesMethodAverageEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_of: cdktf.stringToTerraform(struct!.averageOf),
    measure_time_by: cdktf.stringToTerraform(struct!.measureTimeBy),
  }
}


export function portAggregationPropertiesPropertiesMethodAverageEntitiesToHclTerraform(struct?: PortAggregationPropertiesPropertiesMethodAverageEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_of: {
      value: cdktf.stringToHclTerraform(struct!.averageOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_time_by: {
      value: cdktf.stringToHclTerraform(struct!.measureTimeBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortAggregationPropertiesPropertiesMethodAverageEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortAggregationPropertiesPropertiesMethodAverageEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageOf = this._averageOf;
    }
    if (this._measureTimeBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureTimeBy = this._measureTimeBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortAggregationPropertiesPropertiesMethodAverageEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageOf = undefined;
      this._measureTimeBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageOf = value.averageOf;
      this._measureTimeBy = value.measureTimeBy;
    }
  }

  // average_of - computed: true, optional: true, required: false
  private _averageOf?: string; 
  public get averageOf() {
    return this.getStringAttribute('average_of');
  }
  public set averageOf(value: string) {
    this._averageOf = value;
  }
  public resetAverageOf() {
    this._averageOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageOfInput() {
    return this._averageOf;
  }

  // measure_time_by - computed: true, optional: true, required: false
  private _measureTimeBy?: string; 
  public get measureTimeBy() {
    return this.getStringAttribute('measure_time_by');
  }
  public set measureTimeBy(value: string) {
    this._measureTimeBy = value;
  }
  public resetMeasureTimeBy() {
    this._measureTimeBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureTimeByInput() {
    return this._measureTimeBy;
  }
}
export interface PortAggregationPropertiesPropertiesMethod {
  /**
  * Function to calculate the aggregate by property value of the target entities, such as sum, min, max, median
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#aggregate_by_property PortAggregationProperties#aggregate_by_property}
  */
  readonly aggregateByProperty?: PortAggregationPropertiesPropertiesMethodAggregateByProperty;
  /**
  * Function to calculate the average by property value of the target entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#average_by_property PortAggregationProperties#average_by_property}
  */
  readonly averageByProperty?: PortAggregationPropertiesPropertiesMethodAverageByProperty;
  /**
  * Function to average the entities of the target entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#average_entities PortAggregationProperties#average_entities}
  */
  readonly averageEntities?: PortAggregationPropertiesPropertiesMethodAverageEntities;
  /**
  * Function to count the entities of the target entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#count_entities PortAggregationProperties#count_entities}
  */
  readonly countEntities?: boolean | cdktf.IResolvable;
}

export function portAggregationPropertiesPropertiesMethodToTerraform(struct?: PortAggregationPropertiesPropertiesMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_by_property: portAggregationPropertiesPropertiesMethodAggregateByPropertyToTerraform(struct!.aggregateByProperty),
    average_by_property: portAggregationPropertiesPropertiesMethodAverageByPropertyToTerraform(struct!.averageByProperty),
    average_entities: portAggregationPropertiesPropertiesMethodAverageEntitiesToTerraform(struct!.averageEntities),
    count_entities: cdktf.booleanToTerraform(struct!.countEntities),
  }
}


export function portAggregationPropertiesPropertiesMethodToHclTerraform(struct?: PortAggregationPropertiesPropertiesMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_by_property: {
      value: portAggregationPropertiesPropertiesMethodAggregateByPropertyToHclTerraform(struct!.aggregateByProperty),
      isBlock: true,
      type: "struct",
      storageClassType: "PortAggregationPropertiesPropertiesMethodAggregateByProperty",
    },
    average_by_property: {
      value: portAggregationPropertiesPropertiesMethodAverageByPropertyToHclTerraform(struct!.averageByProperty),
      isBlock: true,
      type: "struct",
      storageClassType: "PortAggregationPropertiesPropertiesMethodAverageByProperty",
    },
    average_entities: {
      value: portAggregationPropertiesPropertiesMethodAverageEntitiesToHclTerraform(struct!.averageEntities),
      isBlock: true,
      type: "struct",
      storageClassType: "PortAggregationPropertiesPropertiesMethodAverageEntities",
    },
    count_entities: {
      value: cdktf.booleanToHclTerraform(struct!.countEntities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortAggregationPropertiesPropertiesMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortAggregationPropertiesPropertiesMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateByProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateByProperty = this._aggregateByProperty?.internalValue;
    }
    if (this._averageByProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageByProperty = this._averageByProperty?.internalValue;
    }
    if (this._averageEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageEntities = this._averageEntities?.internalValue;
    }
    if (this._countEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.countEntities = this._countEntities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortAggregationPropertiesPropertiesMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateByProperty.internalValue = undefined;
      this._averageByProperty.internalValue = undefined;
      this._averageEntities.internalValue = undefined;
      this._countEntities = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateByProperty.internalValue = value.aggregateByProperty;
      this._averageByProperty.internalValue = value.averageByProperty;
      this._averageEntities.internalValue = value.averageEntities;
      this._countEntities = value.countEntities;
    }
  }

  // aggregate_by_property - computed: false, optional: true, required: false
  private _aggregateByProperty = new PortAggregationPropertiesPropertiesMethodAggregateByPropertyOutputReference(this, "aggregate_by_property");
  public get aggregateByProperty() {
    return this._aggregateByProperty;
  }
  public putAggregateByProperty(value: PortAggregationPropertiesPropertiesMethodAggregateByProperty) {
    this._aggregateByProperty.internalValue = value;
  }
  public resetAggregateByProperty() {
    this._aggregateByProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateByPropertyInput() {
    return this._aggregateByProperty.internalValue;
  }

  // average_by_property - computed: false, optional: true, required: false
  private _averageByProperty = new PortAggregationPropertiesPropertiesMethodAverageByPropertyOutputReference(this, "average_by_property");
  public get averageByProperty() {
    return this._averageByProperty;
  }
  public putAverageByProperty(value: PortAggregationPropertiesPropertiesMethodAverageByProperty) {
    this._averageByProperty.internalValue = value;
  }
  public resetAverageByProperty() {
    this._averageByProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageByPropertyInput() {
    return this._averageByProperty.internalValue;
  }

  // average_entities - computed: false, optional: true, required: false
  private _averageEntities = new PortAggregationPropertiesPropertiesMethodAverageEntitiesOutputReference(this, "average_entities");
  public get averageEntities() {
    return this._averageEntities;
  }
  public putAverageEntities(value: PortAggregationPropertiesPropertiesMethodAverageEntities) {
    this._averageEntities.internalValue = value;
  }
  public resetAverageEntities() {
    this._averageEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageEntitiesInput() {
    return this._averageEntities.internalValue;
  }

  // count_entities - computed: false, optional: true, required: false
  private _countEntities?: boolean | cdktf.IResolvable; 
  public get countEntities() {
    return this.getBooleanAttribute('count_entities');
  }
  public set countEntities(value: boolean | cdktf.IResolvable) {
    this._countEntities = value;
  }
  public resetCountEntities() {
    this._countEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countEntitiesInput() {
    return this._countEntities;
  }
}
export interface PortAggregationPropertiesPropertiesPathFilter {
  /**
  * The blueprint to start the path from. Should be the target blueprint or undefined to start from the source blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#from_blueprint PortAggregationProperties#from_blueprint}
  */
  readonly fromBlueprint?: string;
  /**
  * The path array of relations to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#path PortAggregationProperties#path}
  */
  readonly path: string[];
}

export function portAggregationPropertiesPropertiesPathFilterToTerraform(struct?: PortAggregationPropertiesPropertiesPathFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_blueprint: cdktf.stringToTerraform(struct!.fromBlueprint),
    path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.path),
  }
}


export function portAggregationPropertiesPropertiesPathFilterToHclTerraform(struct?: PortAggregationPropertiesPropertiesPathFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_blueprint: {
      value: cdktf.stringToHclTerraform(struct!.fromBlueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.path),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortAggregationPropertiesPropertiesPathFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortAggregationPropertiesPropertiesPathFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromBlueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromBlueprint = this._fromBlueprint;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortAggregationPropertiesPropertiesPathFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromBlueprint = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromBlueprint = value.fromBlueprint;
      this._path = value.path;
    }
  }

  // from_blueprint - computed: false, optional: true, required: false
  private _fromBlueprint?: string; 
  public get fromBlueprint() {
    return this.getStringAttribute('from_blueprint');
  }
  public set fromBlueprint(value: string) {
    this._fromBlueprint = value;
  }
  public resetFromBlueprint() {
    this._fromBlueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromBlueprintInput() {
    return this._fromBlueprint;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string[]; 
  public get path() {
    return this.getListAttribute('path');
  }
  public set path(value: string[]) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class PortAggregationPropertiesPropertiesPathFilterList extends cdktf.ComplexList {
  public internalValue? : PortAggregationPropertiesPropertiesPathFilter[] | cdktf.IResolvable

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
  public get(index: number): PortAggregationPropertiesPropertiesPathFilterOutputReference {
    return new PortAggregationPropertiesPropertiesPathFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortAggregationPropertiesProperties {
  /**
  * The description of the aggregation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#description PortAggregationProperties#description}
  */
  readonly description?: string;
  /**
  * The icon of the aggregation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#icon PortAggregationProperties#icon}
  */
  readonly icon?: string;
  /**
  * The aggregation method to perform on the target blueprint, one of count_entities, average_entities, average_by_property, aggregate_by_property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#method PortAggregationProperties#method}
  */
  readonly method: PortAggregationPropertiesPropertiesMethod;
  /**
  * Path filter to filter entities based on relation path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#path_filter PortAggregationProperties#path_filter}
  */
  readonly pathFilter?: PortAggregationPropertiesPropertiesPathFilter[] | cdktf.IResolvable;
  /**
  * Query to filter the target entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#query PortAggregationProperties#query}
  */
  readonly query?: string;
  /**
  * The identifier of the blueprint to perform the aggregation on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#target_blueprint_identifier PortAggregationProperties#target_blueprint_identifier}
  */
  readonly targetBlueprintIdentifier: string;
  /**
  * The title of the aggregation property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#title PortAggregationProperties#title}
  */
  readonly title?: string;
}

export function portAggregationPropertiesPropertiesToTerraform(struct?: PortAggregationPropertiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    icon: cdktf.stringToTerraform(struct!.icon),
    method: portAggregationPropertiesPropertiesMethodToTerraform(struct!.method),
    path_filter: cdktf.listMapper(portAggregationPropertiesPropertiesPathFilterToTerraform, false)(struct!.pathFilter),
    query: cdktf.stringToTerraform(struct!.query),
    target_blueprint_identifier: cdktf.stringToTerraform(struct!.targetBlueprintIdentifier),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portAggregationPropertiesPropertiesToHclTerraform(struct?: PortAggregationPropertiesProperties | cdktf.IResolvable): any {
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
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: portAggregationPropertiesPropertiesMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "struct",
      storageClassType: "PortAggregationPropertiesPropertiesMethod",
    },
    path_filter: {
      value: cdktf.listMapperHcl(portAggregationPropertiesPropertiesPathFilterToHclTerraform, false)(struct!.pathFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PortAggregationPropertiesPropertiesPathFilterList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.targetBlueprintIdentifier),
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

export class PortAggregationPropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortAggregationPropertiesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._pathFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathFilter = this._pathFilter?.internalValue;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._targetBlueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBlueprintIdentifier = this._targetBlueprintIdentifier;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortAggregationPropertiesProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._icon = undefined;
      this._method.internalValue = undefined;
      this._pathFilter.internalValue = undefined;
      this._query = undefined;
      this._targetBlueprintIdentifier = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._icon = value.icon;
      this._method.internalValue = value.method;
      this._pathFilter.internalValue = value.pathFilter;
      this._query = value.query;
      this._targetBlueprintIdentifier = value.targetBlueprintIdentifier;
      this._title = value.title;
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

  // method - computed: false, optional: false, required: true
  private _method = new PortAggregationPropertiesPropertiesMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: PortAggregationPropertiesPropertiesMethod) {
    this._method.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // path_filter - computed: false, optional: true, required: false
  private _pathFilter = new PortAggregationPropertiesPropertiesPathFilterList(this, "path_filter", false);
  public get pathFilter() {
    return this._pathFilter;
  }
  public putPathFilter(value: PortAggregationPropertiesPropertiesPathFilter[] | cdktf.IResolvable) {
    this._pathFilter.internalValue = value;
  }
  public resetPathFilter() {
    this._pathFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFilterInput() {
    return this._pathFilter.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // target_blueprint_identifier - computed: false, optional: false, required: true
  private _targetBlueprintIdentifier?: string; 
  public get targetBlueprintIdentifier() {
    return this.getStringAttribute('target_blueprint_identifier');
  }
  public set targetBlueprintIdentifier(value: string) {
    this._targetBlueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBlueprintIdentifierInput() {
    return this._targetBlueprintIdentifier;
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

export class PortAggregationPropertiesPropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortAggregationPropertiesProperties } | cdktf.IResolvable

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
  public get(key: string): PortAggregationPropertiesPropertiesOutputReference {
    return new PortAggregationPropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties port_aggregation_properties}
*/
export class PortAggregationProperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_aggregation_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortAggregationProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortAggregationProperties to import
  * @param importFromId The id of the existing PortAggregationProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortAggregationProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_aggregation_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.4/docs/resources/port_aggregation_properties port_aggregation_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortAggregationPropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: PortAggregationPropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'port_aggregation_properties',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.17.4',
        providerVersionConstraint: '2.17.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintIdentifier = config.blueprintIdentifier;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new PortAggregationPropertiesPropertiesMap(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: { [key: string]: PortAggregationPropertiesProperties } | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_identifier: cdktf.stringToTerraform(this._blueprintIdentifier),
      properties: cdktf.hashMapper(portAggregationPropertiesPropertiesToTerraform)(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_identifier: {
        value: cdktf.stringToHclTerraform(this._blueprintIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(portAggregationPropertiesPropertiesToHclTerraform)(this._properties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PortAggregationPropertiesPropertiesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
