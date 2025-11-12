// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataIntegrationTaskNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data source type: MYSQL, POSTGRE, ORACLE, SQLSERVER, FTP, HIVE, HDFS, ICEBERG, KAFKA, HBASE, SPARK, TBASE, DB2, DM, GAUSSDB, GBASE, IMPALA, ES, S3_DATAINSIGHT, GREENPLUM, PHOENIX, SAP_HANA, SFTP, OCEANBASE, CLICKHOUSE, KUDU, VERTICA, REDIS, COS, DLC, DORIS, CKAFKA, DTS_KAFKA, S3, CDW, TDSQLC, TDSQL, MONGODB, SYBASE, REST_API, StarRocks, TCHOUSE_X.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#data_source_type WedataIntegrationTaskNode#data_source_type}
  */
  readonly dataSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#id WedataIntegrationTaskNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Node Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name: string;
  /**
  * Node type: INPUT, OUTPUT, JOIN, FILTER, TRANSFORM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#node_type WedataIntegrationTaskNode#node_type}
  */
  readonly nodeType: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#project_id WedataIntegrationTaskNode#project_id}
  */
  readonly projectId: string;
  /**
  * The task id to which the node belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#task_id WedataIntegrationTaskNode#task_id}
  */
  readonly taskId: string;
  /**
  * Task display mode, 0: canvas mode, 1: form mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#task_mode WedataIntegrationTaskNode#task_mode}
  */
  readonly taskMode: number;
  /**
  * Task type, 201: real-time task, 202: offline task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#task_type WedataIntegrationTaskNode#task_type}
  */
  readonly taskType: number;
  /**
  * node_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#node_info WedataIntegrationTaskNode#node_info}
  */
  readonly nodeInfo: WedataIntegrationTaskNodeNodeInfo;
}
export interface WedataIntegrationTaskNodeNodeInfoConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#value WedataIntegrationTaskNode#value}
  */
  readonly value?: string;
}

export function wedataIntegrationTaskNodeNodeInfoConfigToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationTaskNodeNodeInfoConfigToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationTaskNodeNodeInfoConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationTaskNodeNodeInfoConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoConfigOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfoExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#value WedataIntegrationTaskNode#value}
  */
  readonly value?: string;
}

export function wedataIntegrationTaskNodeNodeInfoExtConfigToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationTaskNodeNodeInfoExtConfigToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoExtConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationTaskNodeNodeInfoExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoExtConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoExtConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationTaskNodeNodeInfoExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoExtConfigOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#value WedataIntegrationTaskNode#value}
  */
  readonly value?: string;
}

export function wedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings {
  /**
  * Schema ID from sink node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#sink_schema_id WedataIntegrationTaskNode#sink_schema_id}
  */
  readonly sinkSchemaId: string;
  /**
  * Schema ID from source node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#source_schema_id WedataIntegrationTaskNode#source_schema_id}
  */
  readonly sourceSchemaId: string;
}

export function wedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_schema_id: cdktf.stringToTerraform(struct!.sinkSchemaId),
    source_schema_id: cdktf.stringToTerraform(struct!.sourceSchemaId),
  }
}


export function wedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sink_schema_id: {
      value: cdktf.stringToHclTerraform(struct!.sinkSchemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_schema_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceSchemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sinkSchemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkSchemaId = this._sinkSchemaId;
    }
    if (this._sourceSchemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSchemaId = this._sourceSchemaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sinkSchemaId = undefined;
      this._sourceSchemaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sinkSchemaId = value.sinkSchemaId;
      this._sourceSchemaId = value.sourceSchemaId;
    }
  }

  // sink_schema_id - computed: false, optional: false, required: true
  private _sinkSchemaId?: string; 
  public get sinkSchemaId() {
    return this.getStringAttribute('sink_schema_id');
  }
  public set sinkSchemaId(value: string) {
    this._sinkSchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkSchemaIdInput() {
    return this._sinkSchemaId;
  }

  // source_schema_id - computed: false, optional: false, required: true
  private _sourceSchemaId?: string; 
  public get sourceSchemaId() {
    return this.getStringAttribute('source_schema_id');
  }
  public set sourceSchemaId(value: string) {
    this._sourceSchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaIdInput() {
    return this._sourceSchemaId;
  }
}

export class WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties {
  /**
  * Attributes name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name?: string;
  /**
  * Attributes value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#value WedataIntegrationTaskNode#value}
  */
  readonly value?: string;
}

export function wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties | cdktf.IResolvable): any {
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

export class WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema {
  /**
  * Schema alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#alias WedataIntegrationTaskNode#alias}
  */
  readonly alias?: string;
  /**
  * Schema comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#comment WedataIntegrationTaskNode#comment}
  */
  readonly comment?: string;
  /**
  * Schema ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#id WedataIntegrationTaskNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name: string;
  /**
  * Schema type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#type WedataIntegrationTaskNode#type}
  */
  readonly type: string;
  /**
  * Schema value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#value WedataIntegrationTaskNode#value}
  */
  readonly value?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#properties WedataIntegrationTaskNode#properties}
  */
  readonly properties?: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties[] | cdktf.IResolvable;
}

export function wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    comment: cdktf.stringToTerraform(struct!.comment),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    properties: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesToTerraform, true)(struct!.properties),
  }
}


export function wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    properties: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._comment = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._comment = value.comment;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
      this._properties.internalValue = value.properties;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // properties - computed: false, optional: true, required: false
  private _properties = new WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfoNodeMapping {
  /**
  * Sink node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#sink_id WedataIntegrationTaskNode#sink_id}
  */
  readonly sinkId?: string;
  /**
  * Source node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#source_id WedataIntegrationTaskNode#source_id}
  */
  readonly sourceId?: string;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#ext_config WedataIntegrationTaskNode#ext_config}
  */
  readonly extConfig?: WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig[] | cdktf.IResolvable;
  /**
  * schema_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#schema_mappings WedataIntegrationTaskNode#schema_mappings}
  */
  readonly schemaMappings?: WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings[] | cdktf.IResolvable;
  /**
  * source_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#source_schema WedataIntegrationTaskNode#source_schema}
  */
  readonly sourceSchema?: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema[] | cdktf.IResolvable;
}

export function wedataIntegrationTaskNodeNodeInfoNodeMappingToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingOutputReference | WedataIntegrationTaskNodeNodeInfoNodeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_id: cdktf.stringToTerraform(struct!.sinkId),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    ext_config: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigToTerraform, true)(struct!.extConfig),
    schema_mappings: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsToTerraform, true)(struct!.schemaMappings),
    source_schema: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaToTerraform, true)(struct!.sourceSchema),
  }
}


export function wedataIntegrationTaskNodeNodeInfoNodeMappingToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoNodeMappingOutputReference | WedataIntegrationTaskNodeNodeInfoNodeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sink_id: {
      value: cdktf.stringToHclTerraform(struct!.sinkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_config: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigList",
    },
    schema_mappings: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsToHclTerraform, true)(struct!.schemaMappings),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsList",
    },
    source_schema: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaToHclTerraform, true)(struct!.sourceSchema),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationTaskNodeNodeInfoNodeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoNodeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sinkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkId = this._sinkId;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._extConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extConfig = this._extConfig?.internalValue;
    }
    if (this._schemaMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaMappings = this._schemaMappings?.internalValue;
    }
    if (this._sourceSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSchema = this._sourceSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoNodeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sinkId = undefined;
      this._sourceId = undefined;
      this._extConfig.internalValue = undefined;
      this._schemaMappings.internalValue = undefined;
      this._sourceSchema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sinkId = value.sinkId;
      this._sourceId = value.sourceId;
      this._extConfig.internalValue = value.extConfig;
      this._schemaMappings.internalValue = value.schemaMappings;
      this._sourceSchema.internalValue = value.sourceSchema;
    }
  }

  // sink_id - computed: false, optional: true, required: false
  private _sinkId?: string; 
  public get sinkId() {
    return this.getStringAttribute('sink_id');
  }
  public set sinkId(value: string) {
    this._sinkId = value;
  }
  public resetSinkId() {
    this._sinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkIdInput() {
    return this._sinkId;
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // ext_config - computed: false, optional: true, required: false
  private _extConfig = new WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationTaskNodeNodeInfoNodeMappingExtConfig[] | cdktf.IResolvable) {
    this._extConfig.internalValue = value;
  }
  public resetExtConfig() {
    this._extConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extConfigInput() {
    return this._extConfig.internalValue;
  }

  // schema_mappings - computed: false, optional: true, required: false
  private _schemaMappings = new WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappingsList(this, "schema_mappings", false);
  public get schemaMappings() {
    return this._schemaMappings;
  }
  public putSchemaMappings(value: WedataIntegrationTaskNodeNodeInfoNodeMappingSchemaMappings[] | cdktf.IResolvable) {
    this._schemaMappings.internalValue = value;
  }
  public resetSchemaMappings() {
    this._schemaMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaMappingsInput() {
    return this._schemaMappings.internalValue;
  }

  // source_schema - computed: false, optional: true, required: false
  private _sourceSchema = new WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchemaList(this, "source_schema", false);
  public get sourceSchema() {
    return this._sourceSchema;
  }
  public putSourceSchema(value: WedataIntegrationTaskNodeNodeInfoNodeMappingSourceSchema[] | cdktf.IResolvable) {
    this._sourceSchema.internalValue = value;
  }
  public resetSourceSchema() {
    this._sourceSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaInput() {
    return this._sourceSchema.internalValue;
  }
}
export interface WedataIntegrationTaskNodeNodeInfoSchemaProperties {
  /**
  * Attributes name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name?: string;
  /**
  * Attributes value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#value WedataIntegrationTaskNode#value}
  */
  readonly value?: string;
}

export function wedataIntegrationTaskNodeNodeInfoSchemaPropertiesToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationTaskNodeNodeInfoSchemaPropertiesToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoSchemaProperties | cdktf.IResolvable): any {
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

export class WedataIntegrationTaskNodeNodeInfoSchemaPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoSchemaProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoSchemaProperties | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationTaskNodeNodeInfoSchemaPropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoSchemaProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoSchemaPropertiesOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoSchemaPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfoSchema {
  /**
  * Schema alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#alias WedataIntegrationTaskNode#alias}
  */
  readonly alias?: string;
  /**
  * Schema comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#comment WedataIntegrationTaskNode#comment}
  */
  readonly comment?: string;
  /**
  * Schema ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#id WedataIntegrationTaskNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#name WedataIntegrationTaskNode#name}
  */
  readonly name: string;
  /**
  * Schema type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#type WedataIntegrationTaskNode#type}
  */
  readonly type: string;
  /**
  * Schema value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#value WedataIntegrationTaskNode#value}
  */
  readonly value?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#properties WedataIntegrationTaskNode#properties}
  */
  readonly properties?: WedataIntegrationTaskNodeNodeInfoSchemaProperties[] | cdktf.IResolvable;
}

export function wedataIntegrationTaskNodeNodeInfoSchemaToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    comment: cdktf.stringToTerraform(struct!.comment),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    properties: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoSchemaPropertiesToTerraform, true)(struct!.properties),
  }
}


export function wedataIntegrationTaskNodeNodeInfoSchemaToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    properties: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoSchemaPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoSchemaPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationTaskNodeNodeInfoSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationTaskNodeNodeInfoSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfoSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._comment = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._comment = value.comment;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
      this._properties.internalValue = value.properties;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // properties - computed: false, optional: true, required: false
  private _properties = new WedataIntegrationTaskNodeNodeInfoSchemaPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: WedataIntegrationTaskNodeNodeInfoSchemaProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class WedataIntegrationTaskNodeNodeInfoSchemaList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationTaskNodeNodeInfoSchema[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationTaskNodeNodeInfoSchemaOutputReference {
    return new WedataIntegrationTaskNodeNodeInfoSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationTaskNodeNodeInfo {
  /**
  * User App Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#app_id WedataIntegrationTaskNode#app_id}
  */
  readonly appId?: string;
  /**
  * Create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#create_time WedataIntegrationTaskNode#create_time}
  */
  readonly createTime?: string;
  /**
  * Creator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#creator_uin WedataIntegrationTaskNode#creator_uin}
  */
  readonly creatorUin?: string;
  /**
  * Datasource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#datasource_id WedataIntegrationTaskNode#datasource_id}
  */
  readonly datasourceId?: string;
  /**
  * Operator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#operator_uin WedataIntegrationTaskNode#operator_uin}
  */
  readonly operatorUin?: string;
  /**
  * Owner User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#owner_uin WedataIntegrationTaskNode#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#update_time WedataIntegrationTaskNode#update_time}
  */
  readonly updateTime?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#config WedataIntegrationTaskNode#config}
  */
  readonly config?: WedataIntegrationTaskNodeNodeInfoConfig[] | cdktf.IResolvable;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#ext_config WedataIntegrationTaskNode#ext_config}
  */
  readonly extConfig?: WedataIntegrationTaskNodeNodeInfoExtConfig[] | cdktf.IResolvable;
  /**
  * node_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#node_mapping WedataIntegrationTaskNode#node_mapping}
  */
  readonly nodeMapping?: WedataIntegrationTaskNodeNodeInfoNodeMapping;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#schema WedataIntegrationTaskNode#schema}
  */
  readonly schema?: WedataIntegrationTaskNodeNodeInfoSchema[] | cdktf.IResolvable;
}

export function wedataIntegrationTaskNodeNodeInfoToTerraform(struct?: WedataIntegrationTaskNodeNodeInfoOutputReference | WedataIntegrationTaskNodeNodeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    creator_uin: cdktf.stringToTerraform(struct!.creatorUin),
    datasource_id: cdktf.stringToTerraform(struct!.datasourceId),
    operator_uin: cdktf.stringToTerraform(struct!.operatorUin),
    owner_uin: cdktf.stringToTerraform(struct!.ownerUin),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    config: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoConfigToTerraform, true)(struct!.config),
    ext_config: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoExtConfigToTerraform, true)(struct!.extConfig),
    node_mapping: wedataIntegrationTaskNodeNodeInfoNodeMappingToTerraform(struct!.nodeMapping),
    schema: cdktf.listMapper(wedataIntegrationTaskNodeNodeInfoSchemaToTerraform, true)(struct!.schema),
  }
}


export function wedataIntegrationTaskNodeNodeInfoToHclTerraform(struct?: WedataIntegrationTaskNodeNodeInfoOutputReference | WedataIntegrationTaskNodeNodeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creator_uin: {
      value: cdktf.stringToHclTerraform(struct!.creatorUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_id: {
      value: cdktf.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_uin: {
      value: cdktf.stringToHclTerraform(struct!.operatorUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_uin: {
      value: cdktf.stringToHclTerraform(struct!.ownerUin),
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
    config: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoConfigList",
    },
    ext_config: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoExtConfigList",
    },
    node_mapping: {
      value: wedataIntegrationTaskNodeNodeInfoNodeMappingToHclTerraform(struct!.nodeMapping),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoNodeMappingList",
    },
    schema: {
      value: cdktf.listMapperHcl(wedataIntegrationTaskNodeNodeInfoSchemaToHclTerraform, true)(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationTaskNodeNodeInfoSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationTaskNodeNodeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataIntegrationTaskNodeNodeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._creatorUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.creatorUin = this._creatorUin;
    }
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    if (this._operatorUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorUin = this._operatorUin;
    }
    if (this._ownerUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUin = this._ownerUin;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._extConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extConfig = this._extConfig?.internalValue;
    }
    if (this._nodeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMapping = this._nodeMapping?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationTaskNodeNodeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._createTime = undefined;
      this._creatorUin = undefined;
      this._datasourceId = undefined;
      this._operatorUin = undefined;
      this._ownerUin = undefined;
      this._updateTime = undefined;
      this._config.internalValue = undefined;
      this._extConfig.internalValue = undefined;
      this._nodeMapping.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._createTime = value.createTime;
      this._creatorUin = value.creatorUin;
      this._datasourceId = value.datasourceId;
      this._operatorUin = value.operatorUin;
      this._ownerUin = value.ownerUin;
      this._updateTime = value.updateTime;
      this._config.internalValue = value.config;
      this._extConfig.internalValue = value.extConfig;
      this._nodeMapping.internalValue = value.nodeMapping;
      this._schema.internalValue = value.schema;
    }
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // create_time - computed: true, optional: true, required: false
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

  // creator_uin - computed: true, optional: true, required: false
  private _creatorUin?: string; 
  public get creatorUin() {
    return this.getStringAttribute('creator_uin');
  }
  public set creatorUin(value: string) {
    this._creatorUin = value;
  }
  public resetCreatorUin() {
    this._creatorUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUinInput() {
    return this._creatorUin;
  }

  // datasource_id - computed: false, optional: true, required: false
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  public resetDatasourceId() {
    this._datasourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
  }

  // operator_uin - computed: true, optional: true, required: false
  private _operatorUin?: string; 
  public get operatorUin() {
    return this.getStringAttribute('operator_uin');
  }
  public set operatorUin(value: string) {
    this._operatorUin = value;
  }
  public resetOperatorUin() {
    this._operatorUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorUinInput() {
    return this._operatorUin;
  }

  // owner_uin - computed: true, optional: true, required: false
  private _ownerUin?: string; 
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }
  public set ownerUin(value: string) {
    this._ownerUin = value;
  }
  public resetOwnerUin() {
    this._ownerUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUinInput() {
    return this._ownerUin;
  }

  // update_time - computed: true, optional: true, required: false
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

  // config - computed: false, optional: true, required: false
  private _config = new WedataIntegrationTaskNodeNodeInfoConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: WedataIntegrationTaskNodeNodeInfoConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // ext_config - computed: false, optional: true, required: false
  private _extConfig = new WedataIntegrationTaskNodeNodeInfoExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationTaskNodeNodeInfoExtConfig[] | cdktf.IResolvable) {
    this._extConfig.internalValue = value;
  }
  public resetExtConfig() {
    this._extConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extConfigInput() {
    return this._extConfig.internalValue;
  }

  // node_mapping - computed: false, optional: true, required: false
  private _nodeMapping = new WedataIntegrationTaskNodeNodeInfoNodeMappingOutputReference(this, "node_mapping");
  public get nodeMapping() {
    return this._nodeMapping;
  }
  public putNodeMapping(value: WedataIntegrationTaskNodeNodeInfoNodeMapping) {
    this._nodeMapping.internalValue = value;
  }
  public resetNodeMapping() {
    this._nodeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMappingInput() {
    return this._nodeMapping.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new WedataIntegrationTaskNodeNodeInfoSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: WedataIntegrationTaskNodeNodeInfoSchema[] | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node tencentcloud_wedata_integration_task_node}
*/
export class WedataIntegrationTaskNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_integration_task_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataIntegrationTaskNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataIntegrationTaskNode to import
  * @param importFromId The id of the existing WedataIntegrationTaskNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataIntegrationTaskNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_integration_task_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_integration_task_node tencentcloud_wedata_integration_task_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataIntegrationTaskNodeConfig
  */
  public constructor(scope: Construct, id: string, config: WedataIntegrationTaskNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_integration_task_node',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceType = config.dataSourceType;
    this._id = config.id;
    this._name = config.name;
    this._nodeType = config.nodeType;
    this._projectId = config.projectId;
    this._taskId = config.taskId;
    this._taskMode = config.taskMode;
    this._taskType = config.taskType;
    this._nodeInfo.internalValue = config.nodeInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_type - computed: false, optional: false, required: true
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
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

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // task_mode - computed: false, optional: false, required: true
  private _taskMode?: number; 
  public get taskMode() {
    return this.getNumberAttribute('task_mode');
  }
  public set taskMode(value: number) {
    this._taskMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskModeInput() {
    return this._taskMode;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: number; 
  public get taskType() {
    return this.getNumberAttribute('task_type');
  }
  public set taskType(value: number) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // node_info - computed: false, optional: false, required: true
  private _nodeInfo = new WedataIntegrationTaskNodeNodeInfoOutputReference(this, "node_info");
  public get nodeInfo() {
    return this._nodeInfo;
  }
  public putNodeInfo(value: WedataIntegrationTaskNodeNodeInfo) {
    this._nodeInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInfoInput() {
    return this._nodeInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_type: cdktf.stringToTerraform(this._dataSourceType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project_id: cdktf.stringToTerraform(this._projectId),
      task_id: cdktf.stringToTerraform(this._taskId),
      task_mode: cdktf.numberToTerraform(this._taskMode),
      task_type: cdktf.numberToTerraform(this._taskType),
      node_info: wedataIntegrationTaskNodeNodeInfoToTerraform(this._nodeInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_type: {
        value: cdktf.stringToHclTerraform(this._dataSourceType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_mode: {
        value: cdktf.numberToHclTerraform(this._taskMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_type: {
        value: cdktf.numberToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_info: {
        value: wedataIntegrationTaskNodeNodeInfoToHclTerraform(this._nodeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataIntegrationTaskNodeNodeInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
