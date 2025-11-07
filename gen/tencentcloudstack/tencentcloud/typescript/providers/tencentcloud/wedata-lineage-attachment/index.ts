// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataLineageAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#id WedataLineageAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * relations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#relations WedataLineageAttachment#relations}
  */
  readonly relations: WedataLineageAttachmentRelations;
}
export interface WedataLineageAttachmentRelationsProcessesProcessProperties {
  /**
  * Property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#name WedataLineageAttachment#name}
  */
  readonly name?: string;
  /**
  * Property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#value WedataLineageAttachment#value}
  */
  readonly value?: string;
}

export function wedataLineageAttachmentRelationsProcessesProcessPropertiesToTerraform(struct?: WedataLineageAttachmentRelationsProcessesProcessProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataLineageAttachmentRelationsProcessesProcessPropertiesToHclTerraform(struct?: WedataLineageAttachmentRelationsProcessesProcessProperties | cdktf.IResolvable): any {
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

export class WedataLineageAttachmentRelationsProcessesProcessPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataLineageAttachmentRelationsProcessesProcessProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataLineageAttachmentRelationsProcessesProcessProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._value = value.value;
    }
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

export class WedataLineageAttachmentRelationsProcessesProcessPropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataLineageAttachmentRelationsProcessesProcessProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataLineageAttachmentRelationsProcessesProcessPropertiesOutputReference {
    return new WedataLineageAttachmentRelationsProcessesProcessPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataLineageAttachmentRelationsProcesses {
  /**
  * Lineage task unique node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#lineage_node_id WedataLineageAttachment#lineage_node_id}
  */
  readonly lineageNodeId?: string;
  /**
  * WEDATA, THIRD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#platform WedataLineageAttachment#platform}
  */
  readonly platform: string;
  /**
  * Original unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#process_id WedataLineageAttachment#process_id}
  */
  readonly processId: string;
  /**
  * Task subtype.
  *  SQL_TASK,
  *     //Integrated real-time task lineage
  *     INTEGRATED_STREAM,
  *     //Integrated offline task lineage
  *     INTEGRATED_OFFLINE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#process_sub_type WedataLineageAttachment#process_sub_type}
  */
  readonly processSubType?: string;
  /**
  * Task type.
  *     //Scheduled task
  *     SCHEDULE_TASK,
  *     //Integration task
  *     INTEGRATION_TASK,
  *     //Third-party reporting
  *     THIRD_REPORT,
  *     //Data modeling
  *     TABLE_MODEL,
  *     //Model creates metric
  *     MODEL_METRIC,
  *     //Atomic metric creates derived metric
  *     METRIC_METRIC,
  *     //Data service
  *     DATA_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#process_type WedataLineageAttachment#process_type}
  */
  readonly processType: string;
  /**
  * process_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#process_properties WedataLineageAttachment#process_properties}
  */
  readonly processProperties?: WedataLineageAttachmentRelationsProcessesProcessProperties[] | cdktf.IResolvable;
}

export function wedataLineageAttachmentRelationsProcessesToTerraform(struct?: WedataLineageAttachmentRelationsProcessesOutputReference | WedataLineageAttachmentRelationsProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lineage_node_id: cdktf.stringToTerraform(struct!.lineageNodeId),
    platform: cdktf.stringToTerraform(struct!.platform),
    process_id: cdktf.stringToTerraform(struct!.processId),
    process_sub_type: cdktf.stringToTerraform(struct!.processSubType),
    process_type: cdktf.stringToTerraform(struct!.processType),
    process_properties: cdktf.listMapper(wedataLineageAttachmentRelationsProcessesProcessPropertiesToTerraform, true)(struct!.processProperties),
  }
}


export function wedataLineageAttachmentRelationsProcessesToHclTerraform(struct?: WedataLineageAttachmentRelationsProcessesOutputReference | WedataLineageAttachmentRelationsProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lineage_node_id: {
      value: cdktf.stringToHclTerraform(struct!.lineageNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_id: {
      value: cdktf.stringToHclTerraform(struct!.processId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.processSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_type: {
      value: cdktf.stringToHclTerraform(struct!.processType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_properties: {
      value: cdktf.listMapperHcl(wedataLineageAttachmentRelationsProcessesProcessPropertiesToHclTerraform, true)(struct!.processProperties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataLineageAttachmentRelationsProcessesProcessPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataLineageAttachmentRelationsProcessesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataLineageAttachmentRelationsProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineageNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineageNodeId = this._lineageNodeId;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._processId !== undefined) {
      hasAnyValues = true;
      internalValueResult.processId = this._processId;
    }
    if (this._processSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processSubType = this._processSubType;
    }
    if (this._processType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processType = this._processType;
    }
    if (this._processProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processProperties = this._processProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataLineageAttachmentRelationsProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineageNodeId = undefined;
      this._platform = undefined;
      this._processId = undefined;
      this._processSubType = undefined;
      this._processType = undefined;
      this._processProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineageNodeId = value.lineageNodeId;
      this._platform = value.platform;
      this._processId = value.processId;
      this._processSubType = value.processSubType;
      this._processType = value.processType;
      this._processProperties.internalValue = value.processProperties;
    }
  }

  // lineage_node_id - computed: false, optional: true, required: false
  private _lineageNodeId?: string; 
  public get lineageNodeId() {
    return this.getStringAttribute('lineage_node_id');
  }
  public set lineageNodeId(value: string) {
    this._lineageNodeId = value;
  }
  public resetLineageNodeId() {
    this._lineageNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageNodeIdInput() {
    return this._lineageNodeId;
  }

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // process_sub_type - computed: false, optional: true, required: false
  private _processSubType?: string; 
  public get processSubType() {
    return this.getStringAttribute('process_sub_type');
  }
  public set processSubType(value: string) {
    this._processSubType = value;
  }
  public resetProcessSubType() {
    this._processSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processSubTypeInput() {
    return this._processSubType;
  }

  // process_type - computed: false, optional: false, required: true
  private _processType?: string; 
  public get processType() {
    return this.getStringAttribute('process_type');
  }
  public set processType(value: string) {
    this._processType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processTypeInput() {
    return this._processType;
  }

  // process_properties - computed: false, optional: true, required: false
  private _processProperties = new WedataLineageAttachmentRelationsProcessesProcessPropertiesList(this, "process_properties", false);
  public get processProperties() {
    return this._processProperties;
  }
  public putProcessProperties(value: WedataLineageAttachmentRelationsProcessesProcessProperties[] | cdktf.IResolvable) {
    this._processProperties.internalValue = value;
  }
  public resetProcessProperties() {
    this._processProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPropertiesInput() {
    return this._processProperties.internalValue;
  }
}
export interface WedataLineageAttachmentRelationsSourceResourceProperties {
  /**
  * Property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#name WedataLineageAttachment#name}
  */
  readonly name?: string;
  /**
  * Property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#value WedataLineageAttachment#value}
  */
  readonly value?: string;
}

export function wedataLineageAttachmentRelationsSourceResourcePropertiesToTerraform(struct?: WedataLineageAttachmentRelationsSourceResourceProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataLineageAttachmentRelationsSourceResourcePropertiesToHclTerraform(struct?: WedataLineageAttachmentRelationsSourceResourceProperties | cdktf.IResolvable): any {
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

export class WedataLineageAttachmentRelationsSourceResourcePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataLineageAttachmentRelationsSourceResourceProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataLineageAttachmentRelationsSourceResourceProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._value = value.value;
    }
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

export class WedataLineageAttachmentRelationsSourceResourcePropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataLineageAttachmentRelationsSourceResourceProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataLineageAttachmentRelationsSourceResourcePropertiesOutputReference {
    return new WedataLineageAttachmentRelationsSourceResourcePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataLineageAttachmentRelationsSource {
  /**
  * Creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#create_time WedataLineageAttachment#create_time}
  */
  readonly createTime?: string;
  /**
  * Description: table type | metric description | model description | field description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#description WedataLineageAttachment#description}
  */
  readonly description?: string;
  /**
  * Lineage node unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#lineage_node_id WedataLineageAttachment#lineage_node_id}
  */
  readonly lineageNodeId?: string;
  /**
  * Source: WEDATA|THIRD.
  * Default is wedata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#platform WedataLineageAttachment#platform}
  */
  readonly platform: string;
  /**
  * Business name: database.table | metric name | model name | field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_name WedataLineageAttachment#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Entity type.
  * TABLE|METRIC|MODEL|SERVICE|COLUMN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_type WedataLineageAttachment#resource_type}
  */
  readonly resourceType: string;
  /**
  * Entity original unique ID.\n
  * Note: When lineage is for table columns, the unique ID should be passed as TableResourceUniqueId::FieldName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_unique_id WedataLineageAttachment#resource_unique_id}
  */
  readonly resourceUniqueId: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#update_time WedataLineageAttachment#update_time}
  */
  readonly updateTime?: string;
  /**
  * resource_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_properties WedataLineageAttachment#resource_properties}
  */
  readonly resourceProperties?: WedataLineageAttachmentRelationsSourceResourceProperties[] | cdktf.IResolvable;
}

export function wedataLineageAttachmentRelationsSourceToTerraform(struct?: WedataLineageAttachmentRelationsSourceOutputReference | WedataLineageAttachmentRelationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_time: cdktf.stringToTerraform(struct!.createTime),
    description: cdktf.stringToTerraform(struct!.description),
    lineage_node_id: cdktf.stringToTerraform(struct!.lineageNodeId),
    platform: cdktf.stringToTerraform(struct!.platform),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    resource_unique_id: cdktf.stringToTerraform(struct!.resourceUniqueId),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    resource_properties: cdktf.listMapper(wedataLineageAttachmentRelationsSourceResourcePropertiesToTerraform, true)(struct!.resourceProperties),
  }
}


export function wedataLineageAttachmentRelationsSourceToHclTerraform(struct?: WedataLineageAttachmentRelationsSourceOutputReference | WedataLineageAttachmentRelationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
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
    lineage_node_id: {
      value: cdktf.stringToHclTerraform(struct!.lineageNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_unique_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceUniqueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_time: {
      value: cdktf.stringToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_properties: {
      value: cdktf.listMapperHcl(wedataLineageAttachmentRelationsSourceResourcePropertiesToHclTerraform, true)(struct!.resourceProperties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataLineageAttachmentRelationsSourceResourcePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataLineageAttachmentRelationsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataLineageAttachmentRelationsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lineageNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineageNodeId = this._lineageNodeId;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceUniqueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUniqueId = this._resourceUniqueId;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._resourceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceProperties = this._resourceProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataLineageAttachmentRelationsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createTime = undefined;
      this._description = undefined;
      this._lineageNodeId = undefined;
      this._platform = undefined;
      this._resourceName = undefined;
      this._resourceType = undefined;
      this._resourceUniqueId = undefined;
      this._updateTime = undefined;
      this._resourceProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createTime = value.createTime;
      this._description = value.description;
      this._lineageNodeId = value.lineageNodeId;
      this._platform = value.platform;
      this._resourceName = value.resourceName;
      this._resourceType = value.resourceType;
      this._resourceUniqueId = value.resourceUniqueId;
      this._updateTime = value.updateTime;
      this._resourceProperties.internalValue = value.resourceProperties;
    }
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // lineage_node_id - computed: false, optional: true, required: false
  private _lineageNodeId?: string; 
  public get lineageNodeId() {
    return this.getStringAttribute('lineage_node_id');
  }
  public set lineageNodeId(value: string) {
    this._lineageNodeId = value;
  }
  public resetLineageNodeId() {
    this._lineageNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageNodeIdInput() {
    return this._lineageNodeId;
  }

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_unique_id - computed: false, optional: false, required: true
  private _resourceUniqueId?: string; 
  public get resourceUniqueId() {
    return this.getStringAttribute('resource_unique_id');
  }
  public set resourceUniqueId(value: string) {
    this._resourceUniqueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUniqueIdInput() {
    return this._resourceUniqueId;
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // resource_properties - computed: false, optional: true, required: false
  private _resourceProperties = new WedataLineageAttachmentRelationsSourceResourcePropertiesList(this, "resource_properties", false);
  public get resourceProperties() {
    return this._resourceProperties;
  }
  public putResourceProperties(value: WedataLineageAttachmentRelationsSourceResourceProperties[] | cdktf.IResolvable) {
    this._resourceProperties.internalValue = value;
  }
  public resetResourceProperties() {
    this._resourceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePropertiesInput() {
    return this._resourceProperties.internalValue;
  }
}
export interface WedataLineageAttachmentRelationsTargetResourceProperties {
  /**
  * Property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#name WedataLineageAttachment#name}
  */
  readonly name?: string;
  /**
  * Property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#value WedataLineageAttachment#value}
  */
  readonly value?: string;
}

export function wedataLineageAttachmentRelationsTargetResourcePropertiesToTerraform(struct?: WedataLineageAttachmentRelationsTargetResourceProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataLineageAttachmentRelationsTargetResourcePropertiesToHclTerraform(struct?: WedataLineageAttachmentRelationsTargetResourceProperties | cdktf.IResolvable): any {
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

export class WedataLineageAttachmentRelationsTargetResourcePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataLineageAttachmentRelationsTargetResourceProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataLineageAttachmentRelationsTargetResourceProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._value = value.value;
    }
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

export class WedataLineageAttachmentRelationsTargetResourcePropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataLineageAttachmentRelationsTargetResourceProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataLineageAttachmentRelationsTargetResourcePropertiesOutputReference {
    return new WedataLineageAttachmentRelationsTargetResourcePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataLineageAttachmentRelationsTarget {
  /**
  * Creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#create_time WedataLineageAttachment#create_time}
  */
  readonly createTime?: string;
  /**
  * Description: table type | metric description | model description | field description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#description WedataLineageAttachment#description}
  */
  readonly description?: string;
  /**
  * Lineage node unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#lineage_node_id WedataLineageAttachment#lineage_node_id}
  */
  readonly lineageNodeId?: string;
  /**
  * Source: WEDATA|THIRD.
  * Default is wedata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#platform WedataLineageAttachment#platform}
  */
  readonly platform: string;
  /**
  * Business name: database.table | metric name | model name | field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_name WedataLineageAttachment#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Entity type.
  * TABLE|METRIC|MODEL|SERVICE|COLUMN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_type WedataLineageAttachment#resource_type}
  */
  readonly resourceType: string;
  /**
  * Entity original unique ID.\n
  * Note: When lineage is for table columns, the unique ID should be passed as TableResourceUniqueId::FieldName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_unique_id WedataLineageAttachment#resource_unique_id}
  */
  readonly resourceUniqueId: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#update_time WedataLineageAttachment#update_time}
  */
  readonly updateTime?: string;
  /**
  * resource_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#resource_properties WedataLineageAttachment#resource_properties}
  */
  readonly resourceProperties?: WedataLineageAttachmentRelationsTargetResourceProperties[] | cdktf.IResolvable;
}

export function wedataLineageAttachmentRelationsTargetToTerraform(struct?: WedataLineageAttachmentRelationsTargetOutputReference | WedataLineageAttachmentRelationsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_time: cdktf.stringToTerraform(struct!.createTime),
    description: cdktf.stringToTerraform(struct!.description),
    lineage_node_id: cdktf.stringToTerraform(struct!.lineageNodeId),
    platform: cdktf.stringToTerraform(struct!.platform),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    resource_unique_id: cdktf.stringToTerraform(struct!.resourceUniqueId),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    resource_properties: cdktf.listMapper(wedataLineageAttachmentRelationsTargetResourcePropertiesToTerraform, true)(struct!.resourceProperties),
  }
}


export function wedataLineageAttachmentRelationsTargetToHclTerraform(struct?: WedataLineageAttachmentRelationsTargetOutputReference | WedataLineageAttachmentRelationsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
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
    lineage_node_id: {
      value: cdktf.stringToHclTerraform(struct!.lineageNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_unique_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceUniqueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_time: {
      value: cdktf.stringToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_properties: {
      value: cdktf.listMapperHcl(wedataLineageAttachmentRelationsTargetResourcePropertiesToHclTerraform, true)(struct!.resourceProperties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataLineageAttachmentRelationsTargetResourcePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataLineageAttachmentRelationsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataLineageAttachmentRelationsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lineageNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineageNodeId = this._lineageNodeId;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceUniqueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUniqueId = this._resourceUniqueId;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._resourceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceProperties = this._resourceProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataLineageAttachmentRelationsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createTime = undefined;
      this._description = undefined;
      this._lineageNodeId = undefined;
      this._platform = undefined;
      this._resourceName = undefined;
      this._resourceType = undefined;
      this._resourceUniqueId = undefined;
      this._updateTime = undefined;
      this._resourceProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createTime = value.createTime;
      this._description = value.description;
      this._lineageNodeId = value.lineageNodeId;
      this._platform = value.platform;
      this._resourceName = value.resourceName;
      this._resourceType = value.resourceType;
      this._resourceUniqueId = value.resourceUniqueId;
      this._updateTime = value.updateTime;
      this._resourceProperties.internalValue = value.resourceProperties;
    }
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // lineage_node_id - computed: false, optional: true, required: false
  private _lineageNodeId?: string; 
  public get lineageNodeId() {
    return this.getStringAttribute('lineage_node_id');
  }
  public set lineageNodeId(value: string) {
    this._lineageNodeId = value;
  }
  public resetLineageNodeId() {
    this._lineageNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageNodeIdInput() {
    return this._lineageNodeId;
  }

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_unique_id - computed: false, optional: false, required: true
  private _resourceUniqueId?: string; 
  public get resourceUniqueId() {
    return this.getStringAttribute('resource_unique_id');
  }
  public set resourceUniqueId(value: string) {
    this._resourceUniqueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUniqueIdInput() {
    return this._resourceUniqueId;
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // resource_properties - computed: false, optional: true, required: false
  private _resourceProperties = new WedataLineageAttachmentRelationsTargetResourcePropertiesList(this, "resource_properties", false);
  public get resourceProperties() {
    return this._resourceProperties;
  }
  public putResourceProperties(value: WedataLineageAttachmentRelationsTargetResourceProperties[] | cdktf.IResolvable) {
    this._resourceProperties.internalValue = value;
  }
  public resetResourceProperties() {
    this._resourceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePropertiesInput() {
    return this._resourceProperties.internalValue;
  }
}
export interface WedataLineageAttachmentRelations {
  /**
  * processes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#processes WedataLineageAttachment#processes}
  */
  readonly processes: WedataLineageAttachmentRelationsProcesses;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#source WedataLineageAttachment#source}
  */
  readonly source: WedataLineageAttachmentRelationsSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#target WedataLineageAttachment#target}
  */
  readonly target: WedataLineageAttachmentRelationsTarget;
}

export function wedataLineageAttachmentRelationsToTerraform(struct?: WedataLineageAttachmentRelationsOutputReference | WedataLineageAttachmentRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processes: wedataLineageAttachmentRelationsProcessesToTerraform(struct!.processes),
    source: wedataLineageAttachmentRelationsSourceToTerraform(struct!.source),
    target: wedataLineageAttachmentRelationsTargetToTerraform(struct!.target),
  }
}


export function wedataLineageAttachmentRelationsToHclTerraform(struct?: WedataLineageAttachmentRelationsOutputReference | WedataLineageAttachmentRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processes: {
      value: wedataLineageAttachmentRelationsProcessesToHclTerraform(struct!.processes),
      isBlock: true,
      type: "list",
      storageClassType: "WedataLineageAttachmentRelationsProcessesList",
    },
    source: {
      value: wedataLineageAttachmentRelationsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "WedataLineageAttachmentRelationsSourceList",
    },
    target: {
      value: wedataLineageAttachmentRelationsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "WedataLineageAttachmentRelationsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataLineageAttachmentRelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataLineageAttachmentRelations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataLineageAttachmentRelations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processes.internalValue = undefined;
      this._source.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processes.internalValue = value.processes;
      this._source.internalValue = value.source;
      this._target.internalValue = value.target;
    }
  }

  // processes - computed: false, optional: false, required: true
  private _processes = new WedataLineageAttachmentRelationsProcessesOutputReference(this, "processes");
  public get processes() {
    return this._processes;
  }
  public putProcesses(value: WedataLineageAttachmentRelationsProcesses) {
    this._processes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new WedataLineageAttachmentRelationsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: WedataLineageAttachmentRelationsSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new WedataLineageAttachmentRelationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: WedataLineageAttachmentRelationsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment tencentcloud_wedata_lineage_attachment}
*/
export class WedataLineageAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_lineage_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataLineageAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataLineageAttachment to import
  * @param importFromId The id of the existing WedataLineageAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataLineageAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_lineage_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_lineage_attachment tencentcloud_wedata_lineage_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataLineageAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: WedataLineageAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_lineage_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._relations.internalValue = config.relations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // relations - computed: false, optional: false, required: true
  private _relations = new WedataLineageAttachmentRelationsOutputReference(this, "relations");
  public get relations() {
    return this._relations;
  }
  public putRelations(value: WedataLineageAttachmentRelations) {
    this._relations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      relations: wedataLineageAttachmentRelationsToTerraform(this._relations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relations: {
        value: wedataLineageAttachmentRelationsToHclTerraform(this._relations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataLineageAttachmentRelationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
