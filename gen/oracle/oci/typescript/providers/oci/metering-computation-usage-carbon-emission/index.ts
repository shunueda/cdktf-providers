// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeteringComputationUsageCarbonEmissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}
  */
  readonly compartmentDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#emission_calculation_method MeteringComputationUsageCarbonEmission#emission_calculation_method}
  */
  readonly emissionCalculationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#emission_type MeteringComputationUsageCarbonEmission#emission_type}
  */
  readonly emissionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#granularity MeteringComputationUsageCarbonEmission#granularity}
  */
  readonly granularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}
  */
  readonly isAggregateByTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}
  */
  readonly timeUsageEnded: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}
  */
  readonly timeUsageStarted: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}
  */
  readonly usageCarbonEmissionFilter?: string;
  /**
  * group_by_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#group_by_tag MeteringComputationUsageCarbonEmission#group_by_tag}
  */
  readonly groupByTag?: MeteringComputationUsageCarbonEmissionGroupByTag[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#timeouts MeteringComputationUsageCarbonEmission#timeouts}
  */
  readonly timeouts?: MeteringComputationUsageCarbonEmissionTimeouts;
}
export interface MeteringComputationUsageCarbonEmissionItemsTags {
}

export function meteringComputationUsageCarbonEmissionItemsTagsToTerraform(struct?: MeteringComputationUsageCarbonEmissionItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function meteringComputationUsageCarbonEmissionItemsTagsToHclTerraform(struct?: MeteringComputationUsageCarbonEmissionItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MeteringComputationUsageCarbonEmissionItemsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MeteringComputationUsageCarbonEmissionItemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageCarbonEmissionItemsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class MeteringComputationUsageCarbonEmissionItemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): MeteringComputationUsageCarbonEmissionItemsTagsOutputReference {
    return new MeteringComputationUsageCarbonEmissionItemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationUsageCarbonEmissionItems {
}

export function meteringComputationUsageCarbonEmissionItemsToTerraform(struct?: MeteringComputationUsageCarbonEmissionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function meteringComputationUsageCarbonEmissionItemsToHclTerraform(struct?: MeteringComputationUsageCarbonEmissionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MeteringComputationUsageCarbonEmissionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MeteringComputationUsageCarbonEmissionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageCarbonEmissionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad - computed: true, optional: false, required: false
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: false
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // compartment_path - computed: true, optional: false, required: false
  public get compartmentPath() {
    return this.getStringAttribute('compartment_path');
  }

  // computed_carbon_emission - computed: true, optional: false, required: false
  public get computedCarbonEmission() {
    return this.getNumberAttribute('computed_carbon_emission');
  }

  // emission_calculation_method - computed: true, optional: false, required: false
  public get emissionCalculationMethod() {
    return this.getStringAttribute('emission_calculation_method');
  }

  // emission_type - computed: true, optional: false, required: false
  public get emissionType() {
    return this.getStringAttribute('emission_type');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // sku_part_number - computed: true, optional: false, required: false
  public get skuPartNumber() {
    return this.getStringAttribute('sku_part_number');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new MeteringComputationUsageCarbonEmissionItemsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // time_usage_ended - computed: true, optional: false, required: false
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }

  // time_usage_started - computed: true, optional: false, required: false
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }
}

export class MeteringComputationUsageCarbonEmissionItemsList extends cdktf.ComplexList {

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
  public get(index: number): MeteringComputationUsageCarbonEmissionItemsOutputReference {
    return new MeteringComputationUsageCarbonEmissionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationUsageCarbonEmissionGroupByTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}
  */
  readonly value?: string;
}

export function meteringComputationUsageCarbonEmissionGroupByTagToTerraform(struct?: MeteringComputationUsageCarbonEmissionGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function meteringComputationUsageCarbonEmissionGroupByTagToHclTerraform(struct?: MeteringComputationUsageCarbonEmissionGroupByTag | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class MeteringComputationUsageCarbonEmissionGroupByTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeteringComputationUsageCarbonEmissionGroupByTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageCarbonEmissionGroupByTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class MeteringComputationUsageCarbonEmissionGroupByTagList extends cdktf.ComplexList {
  public internalValue? : MeteringComputationUsageCarbonEmissionGroupByTag[] | cdktf.IResolvable

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
  public get(index: number): MeteringComputationUsageCarbonEmissionGroupByTagOutputReference {
    return new MeteringComputationUsageCarbonEmissionGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationUsageCarbonEmissionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}
  */
  readonly update?: string;
}

export function meteringComputationUsageCarbonEmissionTimeoutsToTerraform(struct?: MeteringComputationUsageCarbonEmissionTimeouts | cdktf.IResolvable): any {
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


export function meteringComputationUsageCarbonEmissionTimeoutsToHclTerraform(struct?: MeteringComputationUsageCarbonEmissionTimeouts | cdktf.IResolvable): any {
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

export class MeteringComputationUsageCarbonEmissionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MeteringComputationUsageCarbonEmissionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MeteringComputationUsageCarbonEmissionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission oci_metering_computation_usage_carbon_emission}
*/
export class MeteringComputationUsageCarbonEmission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_usage_carbon_emission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeteringComputationUsageCarbonEmission to import
  * @param importFromId The id of the existing MeteringComputationUsageCarbonEmission that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeteringComputationUsageCarbonEmission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_usage_carbon_emission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage_carbon_emission oci_metering_computation_usage_carbon_emission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeteringComputationUsageCarbonEmissionConfig
  */
  public constructor(scope: Construct, id: string, config: MeteringComputationUsageCarbonEmissionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_usage_carbon_emission',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentDepth = config.compartmentDepth;
    this._emissionCalculationMethod = config.emissionCalculationMethod;
    this._emissionType = config.emissionType;
    this._granularity = config.granularity;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._isAggregateByTime = config.isAggregateByTime;
    this._tenantId = config.tenantId;
    this._timeUsageEnded = config.timeUsageEnded;
    this._timeUsageStarted = config.timeUsageStarted;
    this._usageCarbonEmissionFilter = config.usageCarbonEmissionFilter;
    this._groupByTag.internalValue = config.groupByTag;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_depth - computed: true, optional: true, required: false
  private _compartmentDepth?: number; 
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }
  public set compartmentDepth(value: number) {
    this._compartmentDepth = value;
  }
  public resetCompartmentDepth() {
    this._compartmentDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentDepthInput() {
    return this._compartmentDepth;
  }

  // emission_calculation_method - computed: true, optional: true, required: false
  private _emissionCalculationMethod?: string; 
  public get emissionCalculationMethod() {
    return this.getStringAttribute('emission_calculation_method');
  }
  public set emissionCalculationMethod(value: string) {
    this._emissionCalculationMethod = value;
  }
  public resetEmissionCalculationMethod() {
    this._emissionCalculationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emissionCalculationMethodInput() {
    return this._emissionCalculationMethod;
  }

  // emission_type - computed: true, optional: true, required: false
  private _emissionType?: string; 
  public get emissionType() {
    return this.getStringAttribute('emission_type');
  }
  public set emissionType(value: string) {
    this._emissionType = value;
  }
  public resetEmissionType() {
    this._emissionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emissionTypeInput() {
    return this._emissionType;
  }

  // granularity - computed: true, optional: true, required: false
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // is_aggregate_by_time - computed: true, optional: true, required: false
  private _isAggregateByTime?: boolean | cdktf.IResolvable; 
  public get isAggregateByTime() {
    return this.getBooleanAttribute('is_aggregate_by_time');
  }
  public set isAggregateByTime(value: boolean | cdktf.IResolvable) {
    this._isAggregateByTime = value;
  }
  public resetIsAggregateByTime() {
    this._isAggregateByTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAggregateByTimeInput() {
    return this._isAggregateByTime;
  }

  // items - computed: true, optional: false, required: false
  private _items = new MeteringComputationUsageCarbonEmissionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // time_usage_ended - computed: false, optional: false, required: true
  private _timeUsageEnded?: string; 
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }
  public set timeUsageEnded(value: string) {
    this._timeUsageEnded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageEndedInput() {
    return this._timeUsageEnded;
  }

  // time_usage_started - computed: false, optional: false, required: true
  private _timeUsageStarted?: string; 
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }
  public set timeUsageStarted(value: string) {
    this._timeUsageStarted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageStartedInput() {
    return this._timeUsageStarted;
  }

  // usage_carbon_emission_filter - computed: true, optional: true, required: false
  private _usageCarbonEmissionFilter?: string; 
  public get usageCarbonEmissionFilter() {
    return this.getStringAttribute('usage_carbon_emission_filter');
  }
  public set usageCarbonEmissionFilter(value: string) {
    this._usageCarbonEmissionFilter = value;
  }
  public resetUsageCarbonEmissionFilter() {
    this._usageCarbonEmissionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageCarbonEmissionFilterInput() {
    return this._usageCarbonEmissionFilter;
  }

  // group_by_tag - computed: false, optional: true, required: false
  private _groupByTag = new MeteringComputationUsageCarbonEmissionGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }
  public putGroupByTag(value: MeteringComputationUsageCarbonEmissionGroupByTag[] | cdktf.IResolvable) {
    this._groupByTag.internalValue = value;
  }
  public resetGroupByTag() {
    this._groupByTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTagInput() {
    return this._groupByTag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MeteringComputationUsageCarbonEmissionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MeteringComputationUsageCarbonEmissionTimeouts) {
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
      compartment_depth: cdktf.numberToTerraform(this._compartmentDepth),
      emission_calculation_method: cdktf.stringToTerraform(this._emissionCalculationMethod),
      emission_type: cdktf.stringToTerraform(this._emissionType),
      granularity: cdktf.stringToTerraform(this._granularity),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      is_aggregate_by_time: cdktf.booleanToTerraform(this._isAggregateByTime),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      time_usage_ended: cdktf.stringToTerraform(this._timeUsageEnded),
      time_usage_started: cdktf.stringToTerraform(this._timeUsageStarted),
      usage_carbon_emission_filter: cdktf.stringToTerraform(this._usageCarbonEmissionFilter),
      group_by_tag: cdktf.listMapper(meteringComputationUsageCarbonEmissionGroupByTagToTerraform, true)(this._groupByTag.internalValue),
      timeouts: meteringComputationUsageCarbonEmissionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_depth: {
        value: cdktf.numberToHclTerraform(this._compartmentDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      emission_calculation_method: {
        value: cdktf.stringToHclTerraform(this._emissionCalculationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emission_type: {
        value: cdktf.stringToHclTerraform(this._emissionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granularity: {
        value: cdktf.stringToHclTerraform(this._granularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_aggregate_by_time: {
        value: cdktf.booleanToHclTerraform(this._isAggregateByTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_usage_ended: {
        value: cdktf.stringToHclTerraform(this._timeUsageEnded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_usage_started: {
        value: cdktf.stringToHclTerraform(this._timeUsageStarted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_carbon_emission_filter: {
        value: cdktf.stringToHclTerraform(this._usageCarbonEmissionFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by_tag: {
        value: cdktf.listMapperHcl(meteringComputationUsageCarbonEmissionGroupByTagToHclTerraform, true)(this._groupByTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeteringComputationUsageCarbonEmissionGroupByTagList",
      },
      timeouts: {
        value: meteringComputationUsageCarbonEmissionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MeteringComputationUsageCarbonEmissionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
