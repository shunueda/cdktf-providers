// https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TablePartitioningPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#database_name TablePartitioningPolicy#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#effective_date_time TablePartitioningPolicy#effective_date_time}
  */
  readonly effectiveDateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#id TablePartitioningPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#table_name TablePartitioningPolicy#table_name}
  */
  readonly tableName: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#cluster TablePartitioningPolicy#cluster}
  */
  readonly cluster?: TablePartitioningPolicyCluster;
  /**
  * partition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#partition_key TablePartitioningPolicy#partition_key}
  */
  readonly partitionKey: TablePartitioningPolicyPartitionKey[] | cdktf.IResolvable;
}
export interface TablePartitioningPolicyCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#client_id TablePartitioningPolicy#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#client_secret TablePartitioningPolicy#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#tenant_id TablePartitioningPolicy#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#uri TablePartitioningPolicy#uri}
  */
  readonly uri?: string;
}

export function tablePartitioningPolicyClusterToTerraform(struct?: TablePartitioningPolicyClusterOutputReference | TablePartitioningPolicyCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function tablePartitioningPolicyClusterToHclTerraform(struct?: TablePartitioningPolicyClusterOutputReference | TablePartitioningPolicyCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TablePartitioningPolicyClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TablePartitioningPolicyCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TablePartitioningPolicyCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
      this._uri = value.uri;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // tenant_id - computed: true, optional: true, required: false
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TablePartitioningPolicyPartitionKeyHashProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#function TablePartitioningPolicy#function}
  */
  readonly function: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#max_partition_count TablePartitioningPolicy#max_partition_count}
  */
  readonly maxPartitionCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#partition_assignment_mode TablePartitioningPolicy#partition_assignment_mode}
  */
  readonly partitionAssignmentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#seed TablePartitioningPolicy#seed}
  */
  readonly seed?: number;
}

export function tablePartitioningPolicyPartitionKeyHashPropertiesToTerraform(struct?: TablePartitioningPolicyPartitionKeyHashPropertiesOutputReference | TablePartitioningPolicyPartitionKeyHashProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    max_partition_count: cdktf.numberToTerraform(struct!.maxPartitionCount),
    partition_assignment_mode: cdktf.stringToTerraform(struct!.partitionAssignmentMode),
    seed: cdktf.numberToTerraform(struct!.seed),
  }
}


export function tablePartitioningPolicyPartitionKeyHashPropertiesToHclTerraform(struct?: TablePartitioningPolicyPartitionKeyHashPropertiesOutputReference | TablePartitioningPolicyPartitionKeyHashProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_partition_count: {
      value: cdktf.numberToHclTerraform(struct!.maxPartitionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_assignment_mode: {
      value: cdktf.stringToHclTerraform(struct!.partitionAssignmentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seed: {
      value: cdktf.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TablePartitioningPolicyPartitionKeyHashPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TablePartitioningPolicyPartitionKeyHashProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._maxPartitionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitionCount = this._maxPartitionCount;
    }
    if (this._partitionAssignmentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionAssignmentMode = this._partitionAssignmentMode;
    }
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TablePartitioningPolicyPartitionKeyHashProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._function = undefined;
      this._maxPartitionCount = undefined;
      this._partitionAssignmentMode = undefined;
      this._seed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._function = value.function;
      this._maxPartitionCount = value.maxPartitionCount;
      this._partitionAssignmentMode = value.partitionAssignmentMode;
      this._seed = value.seed;
    }
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // max_partition_count - computed: false, optional: false, required: true
  private _maxPartitionCount?: number; 
  public get maxPartitionCount() {
    return this.getNumberAttribute('max_partition_count');
  }
  public set maxPartitionCount(value: number) {
    this._maxPartitionCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionCountInput() {
    return this._maxPartitionCount;
  }

  // partition_assignment_mode - computed: false, optional: true, required: false
  private _partitionAssignmentMode?: string; 
  public get partitionAssignmentMode() {
    return this.getStringAttribute('partition_assignment_mode');
  }
  public set partitionAssignmentMode(value: string) {
    this._partitionAssignmentMode = value;
  }
  public resetPartitionAssignmentMode() {
    this._partitionAssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionAssignmentModeInput() {
    return this._partitionAssignmentMode;
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface TablePartitioningPolicyPartitionKeyUniformRangeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#override_creation_time TablePartitioningPolicy#override_creation_time}
  */
  readonly overrideCreationTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#range_size TablePartitioningPolicy#range_size}
  */
  readonly rangeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#reference TablePartitioningPolicy#reference}
  */
  readonly reference: string;
}

export function tablePartitioningPolicyPartitionKeyUniformRangePropertiesToTerraform(struct?: TablePartitioningPolicyPartitionKeyUniformRangePropertiesOutputReference | TablePartitioningPolicyPartitionKeyUniformRangeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_creation_time: cdktf.booleanToTerraform(struct!.overrideCreationTime),
    range_size: cdktf.stringToTerraform(struct!.rangeSize),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function tablePartitioningPolicyPartitionKeyUniformRangePropertiesToHclTerraform(struct?: TablePartitioningPolicyPartitionKeyUniformRangePropertiesOutputReference | TablePartitioningPolicyPartitionKeyUniformRangeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_creation_time: {
      value: cdktf.booleanToHclTerraform(struct!.overrideCreationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range_size: {
      value: cdktf.stringToHclTerraform(struct!.rangeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TablePartitioningPolicyPartitionKeyUniformRangePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TablePartitioningPolicyPartitionKeyUniformRangeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideCreationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCreationTime = this._overrideCreationTime;
    }
    if (this._rangeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeSize = this._rangeSize;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TablePartitioningPolicyPartitionKeyUniformRangeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideCreationTime = undefined;
      this._rangeSize = undefined;
      this._reference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideCreationTime = value.overrideCreationTime;
      this._rangeSize = value.rangeSize;
      this._reference = value.reference;
    }
  }

  // override_creation_time - computed: false, optional: true, required: false
  private _overrideCreationTime?: boolean | cdktf.IResolvable; 
  public get overrideCreationTime() {
    return this.getBooleanAttribute('override_creation_time');
  }
  public set overrideCreationTime(value: boolean | cdktf.IResolvable) {
    this._overrideCreationTime = value;
  }
  public resetOverrideCreationTime() {
    this._overrideCreationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCreationTimeInput() {
    return this._overrideCreationTime;
  }

  // range_size - computed: false, optional: false, required: true
  private _rangeSize?: string; 
  public get rangeSize() {
    return this.getStringAttribute('range_size');
  }
  public set rangeSize(value: string) {
    this._rangeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeSizeInput() {
    return this._rangeSize;
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface TablePartitioningPolicyPartitionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#column_name TablePartitioningPolicy#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#kind TablePartitioningPolicy#kind}
  */
  readonly kind: string;
  /**
  * hash_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#hash_properties TablePartitioningPolicy#hash_properties}
  */
  readonly hashProperties?: TablePartitioningPolicyPartitionKeyHashProperties;
  /**
  * uniform_range_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#uniform_range_properties TablePartitioningPolicy#uniform_range_properties}
  */
  readonly uniformRangeProperties?: TablePartitioningPolicyPartitionKeyUniformRangeProperties;
}

export function tablePartitioningPolicyPartitionKeyToTerraform(struct?: TablePartitioningPolicyPartitionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    kind: cdktf.stringToTerraform(struct!.kind),
    hash_properties: tablePartitioningPolicyPartitionKeyHashPropertiesToTerraform(struct!.hashProperties),
    uniform_range_properties: tablePartitioningPolicyPartitionKeyUniformRangePropertiesToTerraform(struct!.uniformRangeProperties),
  }
}


export function tablePartitioningPolicyPartitionKeyToHclTerraform(struct?: TablePartitioningPolicyPartitionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_properties: {
      value: tablePartitioningPolicyPartitionKeyHashPropertiesToHclTerraform(struct!.hashProperties),
      isBlock: true,
      type: "list",
      storageClassType: "TablePartitioningPolicyPartitionKeyHashPropertiesList",
    },
    uniform_range_properties: {
      value: tablePartitioningPolicyPartitionKeyUniformRangePropertiesToHclTerraform(struct!.uniformRangeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "TablePartitioningPolicyPartitionKeyUniformRangePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TablePartitioningPolicyPartitionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TablePartitioningPolicyPartitionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._hashProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashProperties = this._hashProperties?.internalValue;
    }
    if (this._uniformRangeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformRangeProperties = this._uniformRangeProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TablePartitioningPolicyPartitionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._kind = undefined;
      this._hashProperties.internalValue = undefined;
      this._uniformRangeProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._kind = value.kind;
      this._hashProperties.internalValue = value.hashProperties;
      this._uniformRangeProperties.internalValue = value.uniformRangeProperties;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // hash_properties - computed: false, optional: true, required: false
  private _hashProperties = new TablePartitioningPolicyPartitionKeyHashPropertiesOutputReference(this, "hash_properties");
  public get hashProperties() {
    return this._hashProperties;
  }
  public putHashProperties(value: TablePartitioningPolicyPartitionKeyHashProperties) {
    this._hashProperties.internalValue = value;
  }
  public resetHashProperties() {
    this._hashProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPropertiesInput() {
    return this._hashProperties.internalValue;
  }

  // uniform_range_properties - computed: false, optional: true, required: false
  private _uniformRangeProperties = new TablePartitioningPolicyPartitionKeyUniformRangePropertiesOutputReference(this, "uniform_range_properties");
  public get uniformRangeProperties() {
    return this._uniformRangeProperties;
  }
  public putUniformRangeProperties(value: TablePartitioningPolicyPartitionKeyUniformRangeProperties) {
    this._uniformRangeProperties.internalValue = value;
  }
  public resetUniformRangeProperties() {
    this._uniformRangeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformRangePropertiesInput() {
    return this._uniformRangeProperties.internalValue;
  }
}

export class TablePartitioningPolicyPartitionKeyList extends cdktf.ComplexList {
  public internalValue? : TablePartitioningPolicyPartitionKey[] | cdktf.IResolvable

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
  public get(index: number): TablePartitioningPolicyPartitionKeyOutputReference {
    return new TablePartitioningPolicyPartitionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy adx_table_partitioning_policy}
*/
export class TablePartitioningPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adx_table_partitioning_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TablePartitioningPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TablePartitioningPolicy to import
  * @param importFromId The id of the existing TablePartitioningPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TablePartitioningPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adx_table_partitioning_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_partitioning_policy adx_table_partitioning_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TablePartitioningPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TablePartitioningPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'adx_table_partitioning_policy',
      terraformGeneratorMetadata: {
        providerName: 'adx',
        providerVersion: '0.0.35',
        providerVersionConstraint: '0.0.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseName = config.databaseName;
    this._effectiveDateTime = config.effectiveDateTime;
    this._id = config.id;
    this._tableName = config.tableName;
    this._cluster.internalValue = config.cluster;
    this._partitionKey.internalValue = config.partitionKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // effective_date_time - computed: false, optional: true, required: false
  private _effectiveDateTime?: string; 
  public get effectiveDateTime() {
    return this.getStringAttribute('effective_date_time');
  }
  public set effectiveDateTime(value: string) {
    this._effectiveDateTime = value;
  }
  public resetEffectiveDateTime() {
    this._effectiveDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveDateTimeInput() {
    return this._effectiveDateTime;
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

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new TablePartitioningPolicyClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: TablePartitioningPolicyCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey = new TablePartitioningPolicyPartitionKeyList(this, "partition_key", false);
  public get partitionKey() {
    return this._partitionKey;
  }
  public putPartitionKey(value: TablePartitioningPolicyPartitionKey[] | cdktf.IResolvable) {
    this._partitionKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      effective_date_time: cdktf.stringToTerraform(this._effectiveDateTime),
      id: cdktf.stringToTerraform(this._id),
      table_name: cdktf.stringToTerraform(this._tableName),
      cluster: tablePartitioningPolicyClusterToTerraform(this._cluster.internalValue),
      partition_key: cdktf.listMapper(tablePartitioningPolicyPartitionKeyToTerraform, true)(this._partitionKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_date_time: {
        value: cdktf.stringToHclTerraform(this._effectiveDateTime),
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
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: tablePartitioningPolicyClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TablePartitioningPolicyClusterList",
      },
      partition_key: {
        value: cdktf.listMapperHcl(tablePartitioningPolicyPartitionKeyToHclTerraform, true)(this._partitionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TablePartitioningPolicyPartitionKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
