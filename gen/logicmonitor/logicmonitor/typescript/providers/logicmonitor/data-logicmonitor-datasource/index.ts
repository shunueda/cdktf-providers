// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#access_group_ids DataLogicmonitorDatasource#access_group_ids}
  */
  readonly accessGroupIds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#access_groups DataLogicmonitorDatasource#access_groups}
  */
  readonly accessGroups?: DataLogicmonitorDatasourceAccessGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#applies_to DataLogicmonitorDatasource#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#audit_version DataLogicmonitorDatasource#audit_version}
  */
  readonly auditVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#checksum DataLogicmonitorDatasource#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#collect_interval DataLogicmonitorDatasource#collect_interval}
  */
  readonly collectInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#collect_method DataLogicmonitorDatasource#collect_method}
  */
  readonly collectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#data_points DataLogicmonitorDatasource#data_points}
  */
  readonly dataPoints?: DataLogicmonitorDatasourceDataPoints[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#description DataLogicmonitorDatasource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#display_name DataLogicmonitorDatasource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#enable_auto_discovery DataLogicmonitorDatasource#enable_auto_discovery}
  */
  readonly enableAutoDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#enable_eri_discovery DataLogicmonitorDatasource#enable_eri_discovery}
  */
  readonly enableEriDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#eri_discovery_interval DataLogicmonitorDatasource#eri_discovery_interval}
  */
  readonly eriDiscoveryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#filter DataLogicmonitorDatasource#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#group DataLogicmonitorDatasource#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#has_multi_instances DataLogicmonitorDatasource#has_multi_instances}
  */
  readonly hasMultiInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#id DataLogicmonitorDatasource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#lineage_id DataLogicmonitorDatasource#lineage_id}
  */
  readonly lineageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#name DataLogicmonitorDatasource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#payload_version DataLogicmonitorDatasource#payload_version}
  */
  readonly payloadVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#tags DataLogicmonitorDatasource#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#technology DataLogicmonitorDatasource#technology}
  */
  readonly technology?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#use_wild_value_as_uuid DataLogicmonitorDatasource#use_wild_value_as_uuid}
  */
  readonly useWildValueAsUuid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#version DataLogicmonitorDatasource#version}
  */
  readonly version?: number;
  /**
  * auto_discovery_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#auto_discovery_config DataLogicmonitorDatasource#auto_discovery_config}
  */
  readonly autoDiscoveryConfig?: DataLogicmonitorDatasourceAutoDiscoveryConfig[] | cdktf.IResolvable;
  /**
  * collector_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#collector_attribute DataLogicmonitorDatasource#collector_attribute}
  */
  readonly collectorAttribute?: DataLogicmonitorDatasourceCollectorAttribute[] | cdktf.IResolvable;
  /**
  * eri_discovery_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#eri_discovery_config DataLogicmonitorDatasource#eri_discovery_config}
  */
  readonly eriDiscoveryConfig?: DataLogicmonitorDatasourceEriDiscoveryConfig[] | cdktf.IResolvable;
  /**
  * installation_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#installation_metadata DataLogicmonitorDatasource#installation_metadata}
  */
  readonly installationMetadata?: DataLogicmonitorDatasourceInstallationMetadata[] | cdktf.IResolvable;
}
export interface DataLogicmonitorDatasourceAccessGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#created_by DataLogicmonitorDatasource#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#created_on DataLogicmonitorDatasource#created_on}
  */
  readonly createdOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#description DataLogicmonitorDatasource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#id DataLogicmonitorDatasource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#name DataLogicmonitorDatasource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#tenant_id DataLogicmonitorDatasource#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#updated_on DataLogicmonitorDatasource#updated_on}
  */
  readonly updatedOn?: number;
}

export function dataLogicmonitorDatasourceAccessGroupsToTerraform(struct?: DataLogicmonitorDatasourceAccessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    created_on: cdktf.numberToTerraform(struct!.createdOn),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    updated_on: cdktf.numberToTerraform(struct!.updatedOn),
  }
}


export function dataLogicmonitorDatasourceAccessGroupsToHclTerraform(struct?: DataLogicmonitorDatasourceAccessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_on: {
      value: cdktf.numberToHclTerraform(struct!.createdOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_on: {
      value: cdktf.numberToHclTerraform(struct!.updatedOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDatasourceAccessGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceAccessGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._createdOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdOn = this._createdOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._updatedOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedOn = this._updatedOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceAccessGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._createdOn = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._tenantId = undefined;
      this._updatedOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._createdOn = value.createdOn;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._tenantId = value.tenantId;
      this._updatedOn = value.updatedOn;
    }
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_on - computed: false, optional: true, required: false
  private _createdOn?: number; 
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }
  public set createdOn(value: number) {
    this._createdOn = value;
  }
  public resetCreatedOn() {
    this._createdOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdOnInput() {
    return this._createdOn;
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // updated_on - computed: false, optional: true, required: false
  private _updatedOn?: number; 
  public get updatedOn() {
    return this.getNumberAttribute('updated_on');
  }
  public set updatedOn(value: number) {
    this._updatedOn = value;
  }
  public resetUpdatedOn() {
    this._updatedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedOnInput() {
    return this._updatedOn;
  }
}

export class DataLogicmonitorDatasourceAccessGroupsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceAccessGroups[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceAccessGroupsOutputReference {
    return new DataLogicmonitorDatasourceAccessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDatasourceDataPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#alert_body DataLogicmonitorDatasource#alert_body}
  */
  readonly alertBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#alert_clear_transition_interval DataLogicmonitorDatasource#alert_clear_transition_interval}
  */
  readonly alertClearTransitionInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#alert_expr DataLogicmonitorDatasource#alert_expr}
  */
  readonly alertExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#alert_expr_note DataLogicmonitorDatasource#alert_expr_note}
  */
  readonly alertExprNote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#alert_for_no_data DataLogicmonitorDatasource#alert_for_no_data}
  */
  readonly alertForNoData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#alert_subject DataLogicmonitorDatasource#alert_subject}
  */
  readonly alertSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#alert_transition_interval DataLogicmonitorDatasource#alert_transition_interval}
  */
  readonly alertTransitionInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#data_type DataLogicmonitorDatasource#data_type}
  */
  readonly dataType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#description DataLogicmonitorDatasource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#max_digits DataLogicmonitorDatasource#max_digits}
  */
  readonly maxDigits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#max_value DataLogicmonitorDatasource#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#min_value DataLogicmonitorDatasource#min_value}
  */
  readonly minValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#name DataLogicmonitorDatasource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#post_processor_method DataLogicmonitorDatasource#post_processor_method}
  */
  readonly postProcessorMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#post_processor_param DataLogicmonitorDatasource#post_processor_param}
  */
  readonly postProcessorParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#raw_data_field_name DataLogicmonitorDatasource#raw_data_field_name}
  */
  readonly rawDataFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#type DataLogicmonitorDatasource#type}
  */
  readonly type?: number;
}

export function dataLogicmonitorDatasourceDataPointsToTerraform(struct?: DataLogicmonitorDatasourceDataPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_body: cdktf.stringToTerraform(struct!.alertBody),
    alert_clear_transition_interval: cdktf.numberToTerraform(struct!.alertClearTransitionInterval),
    alert_expr: cdktf.stringToTerraform(struct!.alertExpr),
    alert_expr_note: cdktf.stringToTerraform(struct!.alertExprNote),
    alert_for_no_data: cdktf.numberToTerraform(struct!.alertForNoData),
    alert_subject: cdktf.stringToTerraform(struct!.alertSubject),
    alert_transition_interval: cdktf.numberToTerraform(struct!.alertTransitionInterval),
    data_type: cdktf.numberToTerraform(struct!.dataType),
    description: cdktf.stringToTerraform(struct!.description),
    max_digits: cdktf.numberToTerraform(struct!.maxDigits),
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    name: cdktf.stringToTerraform(struct!.name),
    post_processor_method: cdktf.stringToTerraform(struct!.postProcessorMethod),
    post_processor_param: cdktf.stringToTerraform(struct!.postProcessorParam),
    raw_data_field_name: cdktf.stringToTerraform(struct!.rawDataFieldName),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function dataLogicmonitorDatasourceDataPointsToHclTerraform(struct?: DataLogicmonitorDatasourceDataPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_body: {
      value: cdktf.stringToHclTerraform(struct!.alertBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_clear_transition_interval: {
      value: cdktf.numberToHclTerraform(struct!.alertClearTransitionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_expr: {
      value: cdktf.stringToHclTerraform(struct!.alertExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_expr_note: {
      value: cdktf.stringToHclTerraform(struct!.alertExprNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_for_no_data: {
      value: cdktf.numberToHclTerraform(struct!.alertForNoData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_subject: {
      value: cdktf.stringToHclTerraform(struct!.alertSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_transition_interval: {
      value: cdktf.numberToHclTerraform(struct!.alertTransitionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_type: {
      value: cdktf.numberToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_digits: {
      value: cdktf.numberToHclTerraform(struct!.maxDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
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
    post_processor_method: {
      value: cdktf.stringToHclTerraform(struct!.postProcessorMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_processor_param: {
      value: cdktf.stringToHclTerraform(struct!.postProcessorParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_data_field_name: {
      value: cdktf.stringToHclTerraform(struct!.rawDataFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDatasourceDataPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceDataPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertBody = this._alertBody;
    }
    if (this._alertClearTransitionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertClearTransitionInterval = this._alertClearTransitionInterval;
    }
    if (this._alertExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertExpr = this._alertExpr;
    }
    if (this._alertExprNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertExprNote = this._alertExprNote;
    }
    if (this._alertForNoData !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertForNoData = this._alertForNoData;
    }
    if (this._alertSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSubject = this._alertSubject;
    }
    if (this._alertTransitionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertTransitionInterval = this._alertTransitionInterval;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._maxDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDigits = this._maxDigits;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._postProcessorMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.postProcessorMethod = this._postProcessorMethod;
    }
    if (this._postProcessorParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.postProcessorParam = this._postProcessorParam;
    }
    if (this._rawDataFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawDataFieldName = this._rawDataFieldName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceDataPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertBody = undefined;
      this._alertClearTransitionInterval = undefined;
      this._alertExpr = undefined;
      this._alertExprNote = undefined;
      this._alertForNoData = undefined;
      this._alertSubject = undefined;
      this._alertTransitionInterval = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._maxDigits = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._postProcessorMethod = undefined;
      this._postProcessorParam = undefined;
      this._rawDataFieldName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertBody = value.alertBody;
      this._alertClearTransitionInterval = value.alertClearTransitionInterval;
      this._alertExpr = value.alertExpr;
      this._alertExprNote = value.alertExprNote;
      this._alertForNoData = value.alertForNoData;
      this._alertSubject = value.alertSubject;
      this._alertTransitionInterval = value.alertTransitionInterval;
      this._dataType = value.dataType;
      this._description = value.description;
      this._maxDigits = value.maxDigits;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._postProcessorMethod = value.postProcessorMethod;
      this._postProcessorParam = value.postProcessorParam;
      this._rawDataFieldName = value.rawDataFieldName;
      this._type = value.type;
    }
  }

  // alert_body - computed: false, optional: true, required: false
  private _alertBody?: string; 
  public get alertBody() {
    return this.getStringAttribute('alert_body');
  }
  public set alertBody(value: string) {
    this._alertBody = value;
  }
  public resetAlertBody() {
    this._alertBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertBodyInput() {
    return this._alertBody;
  }

  // alert_clear_transition_interval - computed: false, optional: true, required: false
  private _alertClearTransitionInterval?: number; 
  public get alertClearTransitionInterval() {
    return this.getNumberAttribute('alert_clear_transition_interval');
  }
  public set alertClearTransitionInterval(value: number) {
    this._alertClearTransitionInterval = value;
  }
  public resetAlertClearTransitionInterval() {
    this._alertClearTransitionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertClearTransitionIntervalInput() {
    return this._alertClearTransitionInterval;
  }

  // alert_expr - computed: false, optional: true, required: false
  private _alertExpr?: string; 
  public get alertExpr() {
    return this.getStringAttribute('alert_expr');
  }
  public set alertExpr(value: string) {
    this._alertExpr = value;
  }
  public resetAlertExpr() {
    this._alertExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertExprInput() {
    return this._alertExpr;
  }

  // alert_expr_note - computed: false, optional: true, required: false
  private _alertExprNote?: string; 
  public get alertExprNote() {
    return this.getStringAttribute('alert_expr_note');
  }
  public set alertExprNote(value: string) {
    this._alertExprNote = value;
  }
  public resetAlertExprNote() {
    this._alertExprNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertExprNoteInput() {
    return this._alertExprNote;
  }

  // alert_for_no_data - computed: false, optional: true, required: false
  private _alertForNoData?: number; 
  public get alertForNoData() {
    return this.getNumberAttribute('alert_for_no_data');
  }
  public set alertForNoData(value: number) {
    this._alertForNoData = value;
  }
  public resetAlertForNoData() {
    this._alertForNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertForNoDataInput() {
    return this._alertForNoData;
  }

  // alert_subject - computed: false, optional: true, required: false
  private _alertSubject?: string; 
  public get alertSubject() {
    return this.getStringAttribute('alert_subject');
  }
  public set alertSubject(value: string) {
    this._alertSubject = value;
  }
  public resetAlertSubject() {
    this._alertSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSubjectInput() {
    return this._alertSubject;
  }

  // alert_transition_interval - computed: false, optional: true, required: false
  private _alertTransitionInterval?: number; 
  public get alertTransitionInterval() {
    return this.getNumberAttribute('alert_transition_interval');
  }
  public set alertTransitionInterval(value: number) {
    this._alertTransitionInterval = value;
  }
  public resetAlertTransitionInterval() {
    this._alertTransitionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTransitionIntervalInput() {
    return this._alertTransitionInterval;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: number; 
  public get dataType() {
    return this.getNumberAttribute('data_type');
  }
  public set dataType(value: number) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // max_digits - computed: false, optional: true, required: false
  private _maxDigits?: number; 
  public get maxDigits() {
    return this.getNumberAttribute('max_digits');
  }
  public set maxDigits(value: number) {
    this._maxDigits = value;
  }
  public resetMaxDigits() {
    this._maxDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDigitsInput() {
    return this._maxDigits;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // post_processor_method - computed: false, optional: true, required: false
  private _postProcessorMethod?: string; 
  public get postProcessorMethod() {
    return this.getStringAttribute('post_processor_method');
  }
  public set postProcessorMethod(value: string) {
    this._postProcessorMethod = value;
  }
  public resetPostProcessorMethod() {
    this._postProcessorMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postProcessorMethodInput() {
    return this._postProcessorMethod;
  }

  // post_processor_param - computed: false, optional: true, required: false
  private _postProcessorParam?: string; 
  public get postProcessorParam() {
    return this.getStringAttribute('post_processor_param');
  }
  public set postProcessorParam(value: string) {
    this._postProcessorParam = value;
  }
  public resetPostProcessorParam() {
    this._postProcessorParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postProcessorParamInput() {
    return this._postProcessorParam;
  }

  // raw_data_field_name - computed: false, optional: true, required: false
  private _rawDataFieldName?: string; 
  public get rawDataFieldName() {
    return this.getStringAttribute('raw_data_field_name');
  }
  public set rawDataFieldName(value: string) {
    this._rawDataFieldName = value;
  }
  public resetRawDataFieldName() {
    this._rawDataFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDataFieldNameInput() {
    return this._rawDataFieldName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
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

export class DataLogicmonitorDatasourceDataPointsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceDataPoints[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceDataPointsOutputReference {
    return new DataLogicmonitorDatasourceDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDatasourceAutoDiscoveryConfigFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#attribute DataLogicmonitorDatasource#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#comment DataLogicmonitorDatasource#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#operation DataLogicmonitorDatasource#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#value DataLogicmonitorDatasource#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDatasourceAutoDiscoveryConfigFiltersToTerraform(struct?: DataLogicmonitorDatasourceAutoDiscoveryConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    comment: cdktf.stringToTerraform(struct!.comment),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDatasourceAutoDiscoveryConfigFiltersToHclTerraform(struct?: DataLogicmonitorDatasourceAutoDiscoveryConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class DataLogicmonitorDatasourceAutoDiscoveryConfigFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceAutoDiscoveryConfigFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceAutoDiscoveryConfigFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._comment = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._comment = value.comment;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

export class DataLogicmonitorDatasourceAutoDiscoveryConfigFiltersList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceAutoDiscoveryConfigFilters[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceAutoDiscoveryConfigFiltersOutputReference {
    return new DataLogicmonitorDatasourceAutoDiscoveryConfigFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDatasourceAutoDiscoveryConfigMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#name DataLogicmonitorDatasource#name}
  */
  readonly name: string;
}

export function dataLogicmonitorDatasourceAutoDiscoveryConfigMethodToTerraform(struct?: DataLogicmonitorDatasourceAutoDiscoveryConfigMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLogicmonitorDatasourceAutoDiscoveryConfigMethodToHclTerraform(struct?: DataLogicmonitorDatasourceAutoDiscoveryConfigMethod | cdktf.IResolvable): any {
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

export class DataLogicmonitorDatasourceAutoDiscoveryConfigMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceAutoDiscoveryConfigMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceAutoDiscoveryConfigMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataLogicmonitorDatasourceAutoDiscoveryConfigMethodList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceAutoDiscoveryConfigMethod[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceAutoDiscoveryConfigMethodOutputReference {
    return new DataLogicmonitorDatasourceAutoDiscoveryConfigMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDatasourceAutoDiscoveryConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#delete_inactive_instance DataLogicmonitorDatasource#delete_inactive_instance}
  */
  readonly deleteInactiveInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#disable_instance DataLogicmonitorDatasource#disable_instance}
  */
  readonly disableInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#filters DataLogicmonitorDatasource#filters}
  */
  readonly filters?: DataLogicmonitorDatasourceAutoDiscoveryConfigFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#instance_auto_group_method DataLogicmonitorDatasource#instance_auto_group_method}
  */
  readonly instanceAutoGroupMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#instance_auto_group_method_params DataLogicmonitorDatasource#instance_auto_group_method_params}
  */
  readonly instanceAutoGroupMethodParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#persistent_instance DataLogicmonitorDatasource#persistent_instance}
  */
  readonly persistentInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#schedule_interval DataLogicmonitorDatasource#schedule_interval}
  */
  readonly scheduleInterval?: number;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#method DataLogicmonitorDatasource#method}
  */
  readonly method: DataLogicmonitorDatasourceAutoDiscoveryConfigMethod[] | cdktf.IResolvable;
}

export function dataLogicmonitorDatasourceAutoDiscoveryConfigToTerraform(struct?: DataLogicmonitorDatasourceAutoDiscoveryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_inactive_instance: cdktf.booleanToTerraform(struct!.deleteInactiveInstance),
    disable_instance: cdktf.booleanToTerraform(struct!.disableInstance),
    filters: cdktf.listMapper(dataLogicmonitorDatasourceAutoDiscoveryConfigFiltersToTerraform, false)(struct!.filters),
    instance_auto_group_method: cdktf.stringToTerraform(struct!.instanceAutoGroupMethod),
    instance_auto_group_method_params: cdktf.stringToTerraform(struct!.instanceAutoGroupMethodParams),
    persistent_instance: cdktf.booleanToTerraform(struct!.persistentInstance),
    schedule_interval: cdktf.numberToTerraform(struct!.scheduleInterval),
    method: cdktf.listMapper(dataLogicmonitorDatasourceAutoDiscoveryConfigMethodToTerraform, true)(struct!.method),
  }
}


export function dataLogicmonitorDatasourceAutoDiscoveryConfigToHclTerraform(struct?: DataLogicmonitorDatasourceAutoDiscoveryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_inactive_instance: {
      value: cdktf.booleanToHclTerraform(struct!.deleteInactiveInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_instance: {
      value: cdktf.booleanToHclTerraform(struct!.disableInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(dataLogicmonitorDatasourceAutoDiscoveryConfigFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDatasourceAutoDiscoveryConfigFiltersList",
    },
    instance_auto_group_method: {
      value: cdktf.stringToHclTerraform(struct!.instanceAutoGroupMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_auto_group_method_params: {
      value: cdktf.stringToHclTerraform(struct!.instanceAutoGroupMethodParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_instance: {
      value: cdktf.booleanToHclTerraform(struct!.persistentInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule_interval: {
      value: cdktf.numberToHclTerraform(struct!.scheduleInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.listMapperHcl(dataLogicmonitorDatasourceAutoDiscoveryConfigMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDatasourceAutoDiscoveryConfigMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDatasourceAutoDiscoveryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceAutoDiscoveryConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteInactiveInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteInactiveInstance = this._deleteInactiveInstance;
    }
    if (this._disableInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInstance = this._disableInstance;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._instanceAutoGroupMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceAutoGroupMethod = this._instanceAutoGroupMethod;
    }
    if (this._instanceAutoGroupMethodParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceAutoGroupMethodParams = this._instanceAutoGroupMethodParams;
    }
    if (this._persistentInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentInstance = this._persistentInstance;
    }
    if (this._scheduleInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleInterval = this._scheduleInterval;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceAutoDiscoveryConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteInactiveInstance = undefined;
      this._disableInstance = undefined;
      this._filters.internalValue = undefined;
      this._instanceAutoGroupMethod = undefined;
      this._instanceAutoGroupMethodParams = undefined;
      this._persistentInstance = undefined;
      this._scheduleInterval = undefined;
      this._method.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteInactiveInstance = value.deleteInactiveInstance;
      this._disableInstance = value.disableInstance;
      this._filters.internalValue = value.filters;
      this._instanceAutoGroupMethod = value.instanceAutoGroupMethod;
      this._instanceAutoGroupMethodParams = value.instanceAutoGroupMethodParams;
      this._persistentInstance = value.persistentInstance;
      this._scheduleInterval = value.scheduleInterval;
      this._method.internalValue = value.method;
    }
  }

  // data_source_name - computed: true, optional: false, required: false
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }

  // delete_inactive_instance - computed: false, optional: true, required: false
  private _deleteInactiveInstance?: boolean | cdktf.IResolvable; 
  public get deleteInactiveInstance() {
    return this.getBooleanAttribute('delete_inactive_instance');
  }
  public set deleteInactiveInstance(value: boolean | cdktf.IResolvable) {
    this._deleteInactiveInstance = value;
  }
  public resetDeleteInactiveInstance() {
    this._deleteInactiveInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInactiveInstanceInput() {
    return this._deleteInactiveInstance;
  }

  // disable_instance - computed: false, optional: true, required: false
  private _disableInstance?: boolean | cdktf.IResolvable; 
  public get disableInstance() {
    return this.getBooleanAttribute('disable_instance');
  }
  public set disableInstance(value: boolean | cdktf.IResolvable) {
    this._disableInstance = value;
  }
  public resetDisableInstance() {
    this._disableInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInstanceInput() {
    return this._disableInstance;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataLogicmonitorDatasourceAutoDiscoveryConfigFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataLogicmonitorDatasourceAutoDiscoveryConfigFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // instance_auto_group_method - computed: false, optional: true, required: false
  private _instanceAutoGroupMethod?: string; 
  public get instanceAutoGroupMethod() {
    return this.getStringAttribute('instance_auto_group_method');
  }
  public set instanceAutoGroupMethod(value: string) {
    this._instanceAutoGroupMethod = value;
  }
  public resetInstanceAutoGroupMethod() {
    this._instanceAutoGroupMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAutoGroupMethodInput() {
    return this._instanceAutoGroupMethod;
  }

  // instance_auto_group_method_params - computed: false, optional: true, required: false
  private _instanceAutoGroupMethodParams?: string; 
  public get instanceAutoGroupMethodParams() {
    return this.getStringAttribute('instance_auto_group_method_params');
  }
  public set instanceAutoGroupMethodParams(value: string) {
    this._instanceAutoGroupMethodParams = value;
  }
  public resetInstanceAutoGroupMethodParams() {
    this._instanceAutoGroupMethodParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAutoGroupMethodParamsInput() {
    return this._instanceAutoGroupMethodParams;
  }

  // persistent_instance - computed: false, optional: true, required: false
  private _persistentInstance?: boolean | cdktf.IResolvable; 
  public get persistentInstance() {
    return this.getBooleanAttribute('persistent_instance');
  }
  public set persistentInstance(value: boolean | cdktf.IResolvable) {
    this._persistentInstance = value;
  }
  public resetPersistentInstance() {
    this._persistentInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInstanceInput() {
    return this._persistentInstance;
  }

  // schedule_interval - computed: false, optional: true, required: false
  private _scheduleInterval?: number; 
  public get scheduleInterval() {
    return this.getNumberAttribute('schedule_interval');
  }
  public set scheduleInterval(value: number) {
    this._scheduleInterval = value;
  }
  public resetScheduleInterval() {
    this._scheduleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIntervalInput() {
    return this._scheduleInterval;
  }

  // method - computed: false, optional: false, required: true
  private _method = new DataLogicmonitorDatasourceAutoDiscoveryConfigMethodList(this, "method", false);
  public get method() {
    return this._method;
  }
  public putMethod(value: DataLogicmonitorDatasourceAutoDiscoveryConfigMethod[] | cdktf.IResolvable) {
    this._method.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }
}

export class DataLogicmonitorDatasourceAutoDiscoveryConfigList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceAutoDiscoveryConfig[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceAutoDiscoveryConfigOutputReference {
    return new DataLogicmonitorDatasourceAutoDiscoveryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDatasourceCollectorAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#name DataLogicmonitorDatasource#name}
  */
  readonly name: string;
}

export function dataLogicmonitorDatasourceCollectorAttributeToTerraform(struct?: DataLogicmonitorDatasourceCollectorAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLogicmonitorDatasourceCollectorAttributeToHclTerraform(struct?: DataLogicmonitorDatasourceCollectorAttribute | cdktf.IResolvable): any {
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

export class DataLogicmonitorDatasourceCollectorAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceCollectorAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceCollectorAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataLogicmonitorDatasourceCollectorAttributeList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceCollectorAttribute[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceCollectorAttributeOutputReference {
    return new DataLogicmonitorDatasourceCollectorAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDatasourceEriDiscoveryConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#groovy_script DataLogicmonitorDatasource#groovy_script}
  */
  readonly groovyScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#linux_cmdline DataLogicmonitorDatasource#linux_cmdline}
  */
  readonly linuxCmdline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#linux_script DataLogicmonitorDatasource#linux_script}
  */
  readonly linuxScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#name DataLogicmonitorDatasource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#type DataLogicmonitorDatasource#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#win_cmdline DataLogicmonitorDatasource#win_cmdline}
  */
  readonly winCmdline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#win_script DataLogicmonitorDatasource#win_script}
  */
  readonly winScript?: string;
}

export function dataLogicmonitorDatasourceEriDiscoveryConfigToTerraform(struct?: DataLogicmonitorDatasourceEriDiscoveryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groovy_script: cdktf.stringToTerraform(struct!.groovyScript),
    linux_cmdline: cdktf.stringToTerraform(struct!.linuxCmdline),
    linux_script: cdktf.stringToTerraform(struct!.linuxScript),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    win_cmdline: cdktf.stringToTerraform(struct!.winCmdline),
    win_script: cdktf.stringToTerraform(struct!.winScript),
  }
}


export function dataLogicmonitorDatasourceEriDiscoveryConfigToHclTerraform(struct?: DataLogicmonitorDatasourceEriDiscoveryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groovy_script: {
      value: cdktf.stringToHclTerraform(struct!.groovyScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_cmdline: {
      value: cdktf.stringToHclTerraform(struct!.linuxCmdline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_script: {
      value: cdktf.stringToHclTerraform(struct!.linuxScript),
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
    win_cmdline: {
      value: cdktf.stringToHclTerraform(struct!.winCmdline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    win_script: {
      value: cdktf.stringToHclTerraform(struct!.winScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDatasourceEriDiscoveryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceEriDiscoveryConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groovyScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.groovyScript = this._groovyScript;
    }
    if (this._linuxCmdline !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxCmdline = this._linuxCmdline;
    }
    if (this._linuxScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxScript = this._linuxScript;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._winCmdline !== undefined) {
      hasAnyValues = true;
      internalValueResult.winCmdline = this._winCmdline;
    }
    if (this._winScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.winScript = this._winScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceEriDiscoveryConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groovyScript = undefined;
      this._linuxCmdline = undefined;
      this._linuxScript = undefined;
      this._name = undefined;
      this._type = undefined;
      this._winCmdline = undefined;
      this._winScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groovyScript = value.groovyScript;
      this._linuxCmdline = value.linuxCmdline;
      this._linuxScript = value.linuxScript;
      this._name = value.name;
      this._type = value.type;
      this._winCmdline = value.winCmdline;
      this._winScript = value.winScript;
    }
  }

  // groovy_script - computed: false, optional: true, required: false
  private _groovyScript?: string; 
  public get groovyScript() {
    return this.getStringAttribute('groovy_script');
  }
  public set groovyScript(value: string) {
    this._groovyScript = value;
  }
  public resetGroovyScript() {
    this._groovyScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groovyScriptInput() {
    return this._groovyScript;
  }

  // linux_cmdline - computed: false, optional: true, required: false
  private _linuxCmdline?: string; 
  public get linuxCmdline() {
    return this.getStringAttribute('linux_cmdline');
  }
  public set linuxCmdline(value: string) {
    this._linuxCmdline = value;
  }
  public resetLinuxCmdline() {
    this._linuxCmdline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxCmdlineInput() {
    return this._linuxCmdline;
  }

  // linux_script - computed: false, optional: true, required: false
  private _linuxScript?: string; 
  public get linuxScript() {
    return this.getStringAttribute('linux_script');
  }
  public set linuxScript(value: string) {
    this._linuxScript = value;
  }
  public resetLinuxScript() {
    this._linuxScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxScriptInput() {
    return this._linuxScript;
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

  // win_cmdline - computed: false, optional: true, required: false
  private _winCmdline?: string; 
  public get winCmdline() {
    return this.getStringAttribute('win_cmdline');
  }
  public set winCmdline(value: string) {
    this._winCmdline = value;
  }
  public resetWinCmdline() {
    this._winCmdline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winCmdlineInput() {
    return this._winCmdline;
  }

  // win_script - computed: false, optional: true, required: false
  private _winScript?: string; 
  public get winScript() {
    return this.getStringAttribute('win_script');
  }
  public set winScript(value: string) {
    this._winScript = value;
  }
  public resetWinScript() {
    this._winScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winScriptInput() {
    return this._winScript;
  }
}

export class DataLogicmonitorDatasourceEriDiscoveryConfigList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceEriDiscoveryConfig[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceEriDiscoveryConfigOutputReference {
    return new DataLogicmonitorDatasourceEriDiscoveryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDatasourceInstallationMetadata {
}

export function dataLogicmonitorDatasourceInstallationMetadataToTerraform(struct?: DataLogicmonitorDatasourceInstallationMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogicmonitorDatasourceInstallationMetadataToHclTerraform(struct?: DataLogicmonitorDatasourceInstallationMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogicmonitorDatasourceInstallationMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDatasourceInstallationMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDatasourceInstallationMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // audited_registry_id - computed: true, optional: false, required: false
  public get auditedRegistryId() {
    return this.getStringAttribute('audited_registry_id');
  }

  // audited_version - computed: true, optional: false, required: false
  public get auditedVersion() {
    return this.getStringAttribute('audited_version');
  }

  // is_changed_from_origin - computed: true, optional: false, required: false
  public get isChangedFromOrigin() {
    return this.getBooleanAttribute('is_changed_from_origin');
  }

  // is_changed_from_target_last_published - computed: true, optional: false, required: false
  public get isChangedFromTargetLastPublished() {
    return this.getBooleanAttribute('is_changed_from_target_last_published');
  }

  // local_module_id - computed: true, optional: false, required: false
  public get localModuleId() {
    return this.getNumberAttribute('local_module_id');
  }

  // logic_module_type - computed: true, optional: false, required: false
  public get logicModuleType() {
    return this.getStringAttribute('logic_module_type');
  }

  // origin_author_company_uuid - computed: true, optional: false, required: false
  public get originAuthorCompanyUuid() {
    return this.getStringAttribute('origin_author_company_uuid');
  }

  // origin_author_namespace - computed: true, optional: false, required: false
  public get originAuthorNamespace() {
    return this.getStringAttribute('origin_author_namespace');
  }

  // origin_checksum - computed: true, optional: false, required: false
  public get originChecksum() {
    return this.getStringAttribute('origin_checksum');
  }

  // origin_lineage_id - computed: true, optional: false, required: false
  public get originLineageId() {
    return this.getStringAttribute('origin_lineage_id');
  }

  // origin_locator - computed: true, optional: false, required: false
  public get originLocator() {
    return this.getStringAttribute('origin_locator');
  }

  // origin_name - computed: true, optional: false, required: false
  public get originName() {
    return this.getStringAttribute('origin_name');
  }

  // origin_registry_id - computed: true, optional: false, required: false
  public get originRegistryId() {
    return this.getStringAttribute('origin_registry_id');
  }

  // origin_version - computed: true, optional: false, required: false
  public get originVersion() {
    return this.getStringAttribute('origin_version');
  }

  // target_last_published_checksum - computed: true, optional: false, required: false
  public get targetLastPublishedChecksum() {
    return this.getStringAttribute('target_last_published_checksum');
  }

  // target_last_published_id - computed: true, optional: false, required: false
  public get targetLastPublishedId() {
    return this.getStringAttribute('target_last_published_id');
  }

  // target_last_published_version - computed: true, optional: false, required: false
  public get targetLastPublishedVersion() {
    return this.getStringAttribute('target_last_published_version');
  }

  // target_lineage_id - computed: true, optional: false, required: false
  public get targetLineageId() {
    return this.getStringAttribute('target_lineage_id');
  }
}

export class DataLogicmonitorDatasourceInstallationMetadataList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDatasourceInstallationMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDatasourceInstallationMetadataOutputReference {
    return new DataLogicmonitorDatasourceInstallationMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource logicmonitor_datasource}
*/
export class DataLogicmonitorDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorDatasource to import
  * @param importFromId The id of the existing DataLogicmonitorDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/datasource logicmonitor_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorDatasourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorDatasourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_datasource',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupIds = config.accessGroupIds;
    this._accessGroups.internalValue = config.accessGroups;
    this._appliesTo = config.appliesTo;
    this._auditVersion = config.auditVersion;
    this._checksum = config.checksum;
    this._collectInterval = config.collectInterval;
    this._collectMethod = config.collectMethod;
    this._dataPoints.internalValue = config.dataPoints;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableAutoDiscovery = config.enableAutoDiscovery;
    this._enableEriDiscovery = config.enableEriDiscovery;
    this._eriDiscoveryInterval = config.eriDiscoveryInterval;
    this._filter = config.filter;
    this._group = config.group;
    this._hasMultiInstances = config.hasMultiInstances;
    this._id = config.id;
    this._lineageId = config.lineageId;
    this._name = config.name;
    this._payloadVersion = config.payloadVersion;
    this._tags = config.tags;
    this._technology = config.technology;
    this._useWildValueAsUuid = config.useWildValueAsUuid;
    this._version = config.version;
    this._autoDiscoveryConfig.internalValue = config.autoDiscoveryConfig;
    this._collectorAttribute.internalValue = config.collectorAttribute;
    this._eriDiscoveryConfig.internalValue = config.eriDiscoveryConfig;
    this._installationMetadata.internalValue = config.installationMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_ids - computed: false, optional: true, required: false
  private _accessGroupIds?: number; 
  public get accessGroupIds() {
    return this.getNumberAttribute('access_group_ids');
  }
  public set accessGroupIds(value: number) {
    this._accessGroupIds = value;
  }
  public resetAccessGroupIds() {
    this._accessGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdsInput() {
    return this._accessGroupIds;
  }

  // access_groups - computed: false, optional: true, required: false
  private _accessGroups = new DataLogicmonitorDatasourceAccessGroupsList(this, "access_groups", false);
  public get accessGroups() {
    return this._accessGroups;
  }
  public putAccessGroups(value: DataLogicmonitorDatasourceAccessGroups[] | cdktf.IResolvable) {
    this._accessGroups.internalValue = value;
  }
  public resetAccessGroups() {
    this._accessGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupsInput() {
    return this._accessGroups.internalValue;
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // audit_version - computed: false, optional: true, required: false
  private _auditVersion?: number; 
  public get auditVersion() {
    return this.getNumberAttribute('audit_version');
  }
  public set auditVersion(value: number) {
    this._auditVersion = value;
  }
  public resetAuditVersion() {
    this._auditVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditVersionInput() {
    return this._auditVersion;
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // collect_interval - computed: false, optional: true, required: false
  private _collectInterval?: number; 
  public get collectInterval() {
    return this.getNumberAttribute('collect_interval');
  }
  public set collectInterval(value: number) {
    this._collectInterval = value;
  }
  public resetCollectInterval() {
    this._collectInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectIntervalInput() {
    return this._collectInterval;
  }

  // collect_method - computed: false, optional: true, required: false
  private _collectMethod?: string; 
  public get collectMethod() {
    return this.getStringAttribute('collect_method');
  }
  public set collectMethod(value: string) {
    this._collectMethod = value;
  }
  public resetCollectMethod() {
    this._collectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectMethodInput() {
    return this._collectMethod;
  }

  // data_points - computed: false, optional: true, required: false
  private _dataPoints = new DataLogicmonitorDatasourceDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
  public putDataPoints(value: DataLogicmonitorDatasourceDataPoints[] | cdktf.IResolvable) {
    this._dataPoints.internalValue = value;
  }
  public resetDataPoints() {
    this._dataPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPointsInput() {
    return this._dataPoints.internalValue;
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

  // enable_auto_discovery - computed: false, optional: true, required: false
  private _enableAutoDiscovery?: boolean | cdktf.IResolvable; 
  public get enableAutoDiscovery() {
    return this.getBooleanAttribute('enable_auto_discovery');
  }
  public set enableAutoDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableAutoDiscovery = value;
  }
  public resetEnableAutoDiscovery() {
    this._enableAutoDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoDiscoveryInput() {
    return this._enableAutoDiscovery;
  }

  // enable_eri_discovery - computed: false, optional: true, required: false
  private _enableEriDiscovery?: boolean | cdktf.IResolvable; 
  public get enableEriDiscovery() {
    return this.getBooleanAttribute('enable_eri_discovery');
  }
  public set enableEriDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableEriDiscovery = value;
  }
  public resetEnableEriDiscovery() {
    this._enableEriDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEriDiscoveryInput() {
    return this._enableEriDiscovery;
  }

  // eri_discovery_interval - computed: false, optional: true, required: false
  private _eriDiscoveryInterval?: number; 
  public get eriDiscoveryInterval() {
    return this.getNumberAttribute('eri_discovery_interval');
  }
  public set eriDiscoveryInterval(value: number) {
    this._eriDiscoveryInterval = value;
  }
  public resetEriDiscoveryInterval() {
    this._eriDiscoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eriDiscoveryIntervalInput() {
    return this._eriDiscoveryInterval;
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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // has_multi_instances - computed: false, optional: true, required: false
  private _hasMultiInstances?: boolean | cdktf.IResolvable; 
  public get hasMultiInstances() {
    return this.getBooleanAttribute('has_multi_instances');
  }
  public set hasMultiInstances(value: boolean | cdktf.IResolvable) {
    this._hasMultiInstances = value;
  }
  public resetHasMultiInstances() {
    this._hasMultiInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasMultiInstancesInput() {
    return this._hasMultiInstances;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lineage_id - computed: false, optional: true, required: false
  private _lineageId?: string; 
  public get lineageId() {
    return this.getStringAttribute('lineage_id');
  }
  public set lineageId(value: string) {
    this._lineageId = value;
  }
  public resetLineageId() {
    this._lineageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageIdInput() {
    return this._lineageId;
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

  // payload_version - computed: false, optional: true, required: false
  private _payloadVersion?: number; 
  public get payloadVersion() {
    return this.getNumberAttribute('payload_version');
  }
  public set payloadVersion(value: number) {
    this._payloadVersion = value;
  }
  public resetPayloadVersion() {
    this._payloadVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadVersionInput() {
    return this._payloadVersion;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // technology - computed: false, optional: true, required: false
  private _technology?: string; 
  public get technology() {
    return this.getStringAttribute('technology');
  }
  public set technology(value: string) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // use_wild_value_as_uuid - computed: false, optional: true, required: false
  private _useWildValueAsUuid?: boolean | cdktf.IResolvable; 
  public get useWildValueAsUuid() {
    return this.getBooleanAttribute('use_wild_value_as_uuid');
  }
  public set useWildValueAsUuid(value: boolean | cdktf.IResolvable) {
    this._useWildValueAsUuid = value;
  }
  public resetUseWildValueAsUuid() {
    this._useWildValueAsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWildValueAsUuidInput() {
    return this._useWildValueAsUuid;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // auto_discovery_config - computed: false, optional: true, required: false
  private _autoDiscoveryConfig = new DataLogicmonitorDatasourceAutoDiscoveryConfigList(this, "auto_discovery_config", false);
  public get autoDiscoveryConfig() {
    return this._autoDiscoveryConfig;
  }
  public putAutoDiscoveryConfig(value: DataLogicmonitorDatasourceAutoDiscoveryConfig[] | cdktf.IResolvable) {
    this._autoDiscoveryConfig.internalValue = value;
  }
  public resetAutoDiscoveryConfig() {
    this._autoDiscoveryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryConfigInput() {
    return this._autoDiscoveryConfig.internalValue;
  }

  // collector_attribute - computed: false, optional: true, required: false
  private _collectorAttribute = new DataLogicmonitorDatasourceCollectorAttributeList(this, "collector_attribute", false);
  public get collectorAttribute() {
    return this._collectorAttribute;
  }
  public putCollectorAttribute(value: DataLogicmonitorDatasourceCollectorAttribute[] | cdktf.IResolvable) {
    this._collectorAttribute.internalValue = value;
  }
  public resetCollectorAttribute() {
    this._collectorAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorAttributeInput() {
    return this._collectorAttribute.internalValue;
  }

  // eri_discovery_config - computed: false, optional: true, required: false
  private _eriDiscoveryConfig = new DataLogicmonitorDatasourceEriDiscoveryConfigList(this, "eri_discovery_config", false);
  public get eriDiscoveryConfig() {
    return this._eriDiscoveryConfig;
  }
  public putEriDiscoveryConfig(value: DataLogicmonitorDatasourceEriDiscoveryConfig[] | cdktf.IResolvable) {
    this._eriDiscoveryConfig.internalValue = value;
  }
  public resetEriDiscoveryConfig() {
    this._eriDiscoveryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eriDiscoveryConfigInput() {
    return this._eriDiscoveryConfig.internalValue;
  }

  // installation_metadata - computed: false, optional: true, required: false
  private _installationMetadata = new DataLogicmonitorDatasourceInstallationMetadataList(this, "installation_metadata", false);
  public get installationMetadata() {
    return this._installationMetadata;
  }
  public putInstallationMetadata(value: DataLogicmonitorDatasourceInstallationMetadata[] | cdktf.IResolvable) {
    this._installationMetadata.internalValue = value;
  }
  public resetInstallationMetadata() {
    this._installationMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationMetadataInput() {
    return this._installationMetadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_ids: cdktf.numberToTerraform(this._accessGroupIds),
      access_groups: cdktf.listMapper(dataLogicmonitorDatasourceAccessGroupsToTerraform, false)(this._accessGroups.internalValue),
      applies_to: cdktf.stringToTerraform(this._appliesTo),
      audit_version: cdktf.numberToTerraform(this._auditVersion),
      checksum: cdktf.stringToTerraform(this._checksum),
      collect_interval: cdktf.numberToTerraform(this._collectInterval),
      collect_method: cdktf.stringToTerraform(this._collectMethod),
      data_points: cdktf.listMapper(dataLogicmonitorDatasourceDataPointsToTerraform, false)(this._dataPoints.internalValue),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_auto_discovery: cdktf.booleanToTerraform(this._enableAutoDiscovery),
      enable_eri_discovery: cdktf.booleanToTerraform(this._enableEriDiscovery),
      eri_discovery_interval: cdktf.numberToTerraform(this._eriDiscoveryInterval),
      filter: cdktf.stringToTerraform(this._filter),
      group: cdktf.stringToTerraform(this._group),
      has_multi_instances: cdktf.booleanToTerraform(this._hasMultiInstances),
      id: cdktf.numberToTerraform(this._id),
      lineage_id: cdktf.stringToTerraform(this._lineageId),
      name: cdktf.stringToTerraform(this._name),
      payload_version: cdktf.numberToTerraform(this._payloadVersion),
      tags: cdktf.stringToTerraform(this._tags),
      technology: cdktf.stringToTerraform(this._technology),
      use_wild_value_as_uuid: cdktf.booleanToTerraform(this._useWildValueAsUuid),
      version: cdktf.numberToTerraform(this._version),
      auto_discovery_config: cdktf.listMapper(dataLogicmonitorDatasourceAutoDiscoveryConfigToTerraform, true)(this._autoDiscoveryConfig.internalValue),
      collector_attribute: cdktf.listMapper(dataLogicmonitorDatasourceCollectorAttributeToTerraform, true)(this._collectorAttribute.internalValue),
      eri_discovery_config: cdktf.listMapper(dataLogicmonitorDatasourceEriDiscoveryConfigToTerraform, true)(this._eriDiscoveryConfig.internalValue),
      installation_metadata: cdktf.listMapper(dataLogicmonitorDatasourceInstallationMetadataToTerraform, true)(this._installationMetadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_ids: {
        value: cdktf.numberToHclTerraform(this._accessGroupIds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_groups: {
        value: cdktf.listMapperHcl(dataLogicmonitorDatasourceAccessGroupsToHclTerraform, false)(this._accessGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDatasourceAccessGroupsList",
      },
      applies_to: {
        value: cdktf.stringToHclTerraform(this._appliesTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_version: {
        value: cdktf.numberToHclTerraform(this._auditVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      checksum: {
        value: cdktf.stringToHclTerraform(this._checksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect_interval: {
        value: cdktf.numberToHclTerraform(this._collectInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collect_method: {
        value: cdktf.stringToHclTerraform(this._collectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_points: {
        value: cdktf.listMapperHcl(dataLogicmonitorDatasourceDataPointsToHclTerraform, false)(this._dataPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDatasourceDataPointsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_discovery: {
        value: cdktf.booleanToHclTerraform(this._enableAutoDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_eri_discovery: {
        value: cdktf.booleanToHclTerraform(this._enableEriDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eri_discovery_interval: {
        value: cdktf.numberToHclTerraform(this._eriDiscoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_multi_instances: {
        value: cdktf.booleanToHclTerraform(this._hasMultiInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lineage_id: {
        value: cdktf.stringToHclTerraform(this._lineageId),
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
      payload_version: {
        value: cdktf.numberToHclTerraform(this._payloadVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      technology: {
        value: cdktf.stringToHclTerraform(this._technology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_wild_value_as_uuid: {
        value: cdktf.booleanToHclTerraform(this._useWildValueAsUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_discovery_config: {
        value: cdktf.listMapperHcl(dataLogicmonitorDatasourceAutoDiscoveryConfigToHclTerraform, true)(this._autoDiscoveryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDatasourceAutoDiscoveryConfigList",
      },
      collector_attribute: {
        value: cdktf.listMapperHcl(dataLogicmonitorDatasourceCollectorAttributeToHclTerraform, true)(this._collectorAttribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDatasourceCollectorAttributeList",
      },
      eri_discovery_config: {
        value: cdktf.listMapperHcl(dataLogicmonitorDatasourceEriDiscoveryConfigToHclTerraform, true)(this._eriDiscoveryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDatasourceEriDiscoveryConfigList",
      },
      installation_metadata: {
        value: cdktf.listMapperHcl(dataLogicmonitorDatasourceInstallationMetadataToHclTerraform, true)(this._installationMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDatasourceInstallationMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
