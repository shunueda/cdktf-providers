// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataflowApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#archive_uri DataflowApplication#archive_uri}
  */
  readonly archiveUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#arguments DataflowApplication#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#class_name DataflowApplication#class_name}
  */
  readonly className?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#compartment_id DataflowApplication#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#configuration DataflowApplication#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#defined_tags DataflowApplication#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#description DataflowApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#display_name DataflowApplication#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#driver_shape DataflowApplication#driver_shape}
  */
  readonly driverShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#execute DataflowApplication#execute}
  */
  readonly execute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#executor_shape DataflowApplication#executor_shape}
  */
  readonly executorShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#file_uri DataflowApplication#file_uri}
  */
  readonly fileUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#freeform_tags DataflowApplication#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#id DataflowApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#idle_timeout_in_minutes DataflowApplication#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#language DataflowApplication#language}
  */
  readonly language: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#logs_bucket_uri DataflowApplication#logs_bucket_uri}
  */
  readonly logsBucketUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#max_duration_in_minutes DataflowApplication#max_duration_in_minutes}
  */
  readonly maxDurationInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#metastore_id DataflowApplication#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#num_executors DataflowApplication#num_executors}
  */
  readonly numExecutors: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#pool_id DataflowApplication#pool_id}
  */
  readonly poolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#private_endpoint_id DataflowApplication#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#spark_version DataflowApplication#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#terminate_runs_on_deletion DataflowApplication#terminate_runs_on_deletion}
  */
  readonly terminateRunsOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#type DataflowApplication#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#warehouse_bucket_uri DataflowApplication#warehouse_bucket_uri}
  */
  readonly warehouseBucketUri?: string;
  /**
  * application_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#application_log_config DataflowApplication#application_log_config}
  */
  readonly applicationLogConfig?: DataflowApplicationApplicationLogConfig;
  /**
  * driver_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#driver_shape_config DataflowApplication#driver_shape_config}
  */
  readonly driverShapeConfig?: DataflowApplicationDriverShapeConfig;
  /**
  * executor_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#executor_shape_config DataflowApplication#executor_shape_config}
  */
  readonly executorShapeConfig?: DataflowApplicationExecutorShapeConfig;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#parameters DataflowApplication#parameters}
  */
  readonly parameters?: DataflowApplicationParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#timeouts DataflowApplication#timeouts}
  */
  readonly timeouts?: DataflowApplicationTimeouts;
}
export interface DataflowApplicationApplicationLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#log_group_id DataflowApplication#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#log_id DataflowApplication#log_id}
  */
  readonly logId: string;
}

export function dataflowApplicationApplicationLogConfigToTerraform(struct?: DataflowApplicationApplicationLogConfigOutputReference | DataflowApplicationApplicationLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function dataflowApplicationApplicationLogConfigToHclTerraform(struct?: DataflowApplicationApplicationLogConfigOutputReference | DataflowApplicationApplicationLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowApplicationApplicationLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowApplicationApplicationLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowApplicationApplicationLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: false, optional: false, required: true
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DataflowApplicationDriverShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}
  */
  readonly ocpus?: number;
}

export function dataflowApplicationDriverShapeConfigToTerraform(struct?: DataflowApplicationDriverShapeConfigOutputReference | DataflowApplicationDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function dataflowApplicationDriverShapeConfigToHclTerraform(struct?: DataflowApplicationDriverShapeConfigOutputReference | DataflowApplicationDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowApplicationDriverShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowApplicationDriverShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowApplicationDriverShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DataflowApplicationExecutorShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}
  */
  readonly ocpus?: number;
}

export function dataflowApplicationExecutorShapeConfigToTerraform(struct?: DataflowApplicationExecutorShapeConfigOutputReference | DataflowApplicationExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function dataflowApplicationExecutorShapeConfigToHclTerraform(struct?: DataflowApplicationExecutorShapeConfigOutputReference | DataflowApplicationExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowApplicationExecutorShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowApplicationExecutorShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowApplicationExecutorShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DataflowApplicationParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#name DataflowApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#value DataflowApplication#value}
  */
  readonly value: string;
}

export function dataflowApplicationParametersToTerraform(struct?: DataflowApplicationParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataflowApplicationParametersToHclTerraform(struct?: DataflowApplicationParameters | cdktf.IResolvable): any {
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

export class DataflowApplicationParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataflowApplicationParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataflowApplicationParameters | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataflowApplicationParametersList extends cdktf.ComplexList {
  public internalValue? : DataflowApplicationParameters[] | cdktf.IResolvable

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
  public get(index: number): DataflowApplicationParametersOutputReference {
    return new DataflowApplicationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataflowApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#create DataflowApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#delete DataflowApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#update DataflowApplication#update}
  */
  readonly update?: string;
}

export function dataflowApplicationTimeoutsToTerraform(struct?: DataflowApplicationTimeouts | cdktf.IResolvable): any {
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


export function dataflowApplicationTimeoutsToHclTerraform(struct?: DataflowApplicationTimeouts | cdktf.IResolvable): any {
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

export class DataflowApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataflowApplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataflowApplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application oci_dataflow_application}
*/
export class DataflowApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataflow_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataflowApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataflowApplication to import
  * @param importFromId The id of the existing DataflowApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataflowApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataflow_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_application oci_dataflow_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataflowApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataflowApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_application',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveUri = config.archiveUri;
    this._arguments = config.arguments;
    this._className = config.className;
    this._compartmentId = config.compartmentId;
    this._configuration = config.configuration;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._driverShape = config.driverShape;
    this._execute = config.execute;
    this._executorShape = config.executorShape;
    this._fileUri = config.fileUri;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._language = config.language;
    this._logsBucketUri = config.logsBucketUri;
    this._maxDurationInMinutes = config.maxDurationInMinutes;
    this._metastoreId = config.metastoreId;
    this._numExecutors = config.numExecutors;
    this._poolId = config.poolId;
    this._privateEndpointId = config.privateEndpointId;
    this._sparkVersion = config.sparkVersion;
    this._terminateRunsOnDeletion = config.terminateRunsOnDeletion;
    this._type = config.type;
    this._warehouseBucketUri = config.warehouseBucketUri;
    this._applicationLogConfig.internalValue = config.applicationLogConfig;
    this._driverShapeConfig.internalValue = config.driverShapeConfig;
    this._executorShapeConfig.internalValue = config.executorShapeConfig;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_uri - computed: false, optional: true, required: false
  private _archiveUri?: string; 
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }
  public set archiveUri(value: string) {
    this._archiveUri = value;
  }
  public resetArchiveUri() {
    this._archiveUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUriInput() {
    return this._archiveUri;
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // driver_shape - computed: false, optional: false, required: true
  private _driverShape?: string; 
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }
  public set driverShape(value: string) {
    this._driverShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeInput() {
    return this._driverShape;
  }

  // execute - computed: true, optional: true, required: false
  private _execute?: string; 
  public get execute() {
    return this.getStringAttribute('execute');
  }
  public set execute(value: string) {
    this._execute = value;
  }
  public resetExecute() {
    this._execute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute;
  }

  // executor_shape - computed: false, optional: false, required: true
  private _executorShape?: string; 
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }
  public set executorShape(value: string) {
    this._executorShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeInput() {
    return this._executorShape;
  }

  // file_uri - computed: true, optional: true, required: false
  private _fileUri?: string; 
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }
  public set fileUri(value: string) {
    this._fileUri = value;
  }
  public resetFileUri() {
    this._fileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUriInput() {
    return this._fileUri;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _idleTimeoutInMinutes?: string; 
  public get idleTimeoutInMinutes() {
    return this.getStringAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: string) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // logs_bucket_uri - computed: true, optional: true, required: false
  private _logsBucketUri?: string; 
  public get logsBucketUri() {
    return this.getStringAttribute('logs_bucket_uri');
  }
  public set logsBucketUri(value: string) {
    this._logsBucketUri = value;
  }
  public resetLogsBucketUri() {
    this._logsBucketUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsBucketUriInput() {
    return this._logsBucketUri;
  }

  // max_duration_in_minutes - computed: true, optional: true, required: false
  private _maxDurationInMinutes?: string; 
  public get maxDurationInMinutes() {
    return this.getStringAttribute('max_duration_in_minutes');
  }
  public set maxDurationInMinutes(value: string) {
    this._maxDurationInMinutes = value;
  }
  public resetMaxDurationInMinutes() {
    this._maxDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInMinutesInput() {
    return this._maxDurationInMinutes;
  }

  // metastore_id - computed: true, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // num_executors - computed: false, optional: false, required: true
  private _numExecutors?: number; 
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }
  public set numExecutors(value: number) {
    this._numExecutors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numExecutorsInput() {
    return this._numExecutors;
  }

  // owner_principal_id - computed: true, optional: false, required: false
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // pool_id - computed: true, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // private_endpoint_id - computed: true, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // spark_version - computed: false, optional: false, required: true
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terminate_runs_on_deletion - computed: false, optional: true, required: false
  private _terminateRunsOnDeletion?: boolean | cdktf.IResolvable; 
  public get terminateRunsOnDeletion() {
    return this.getBooleanAttribute('terminate_runs_on_deletion');
  }
  public set terminateRunsOnDeletion(value: boolean | cdktf.IResolvable) {
    this._terminateRunsOnDeletion = value;
  }
  public resetTerminateRunsOnDeletion() {
    this._terminateRunsOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateRunsOnDeletionInput() {
    return this._terminateRunsOnDeletion;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: true, required: false
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

  // warehouse_bucket_uri - computed: true, optional: true, required: false
  private _warehouseBucketUri?: string; 
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }
  public set warehouseBucketUri(value: string) {
    this._warehouseBucketUri = value;
  }
  public resetWarehouseBucketUri() {
    this._warehouseBucketUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseBucketUriInput() {
    return this._warehouseBucketUri;
  }

  // application_log_config - computed: false, optional: true, required: false
  private _applicationLogConfig = new DataflowApplicationApplicationLogConfigOutputReference(this, "application_log_config");
  public get applicationLogConfig() {
    return this._applicationLogConfig;
  }
  public putApplicationLogConfig(value: DataflowApplicationApplicationLogConfig) {
    this._applicationLogConfig.internalValue = value;
  }
  public resetApplicationLogConfig() {
    this._applicationLogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogConfigInput() {
    return this._applicationLogConfig.internalValue;
  }

  // driver_shape_config - computed: false, optional: true, required: false
  private _driverShapeConfig = new DataflowApplicationDriverShapeConfigOutputReference(this, "driver_shape_config");
  public get driverShapeConfig() {
    return this._driverShapeConfig;
  }
  public putDriverShapeConfig(value: DataflowApplicationDriverShapeConfig) {
    this._driverShapeConfig.internalValue = value;
  }
  public resetDriverShapeConfig() {
    this._driverShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeConfigInput() {
    return this._driverShapeConfig.internalValue;
  }

  // executor_shape_config - computed: false, optional: true, required: false
  private _executorShapeConfig = new DataflowApplicationExecutorShapeConfigOutputReference(this, "executor_shape_config");
  public get executorShapeConfig() {
    return this._executorShapeConfig;
  }
  public putExecutorShapeConfig(value: DataflowApplicationExecutorShapeConfig) {
    this._executorShapeConfig.internalValue = value;
  }
  public resetExecutorShapeConfig() {
    this._executorShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeConfigInput() {
    return this._executorShapeConfig.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataflowApplicationParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataflowApplicationParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataflowApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataflowApplicationTimeouts) {
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
      archive_uri: cdktf.stringToTerraform(this._archiveUri),
      arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arguments),
      class_name: cdktf.stringToTerraform(this._className),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._configuration),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      driver_shape: cdktf.stringToTerraform(this._driverShape),
      execute: cdktf.stringToTerraform(this._execute),
      executor_shape: cdktf.stringToTerraform(this._executorShape),
      file_uri: cdktf.stringToTerraform(this._fileUri),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout_in_minutes: cdktf.stringToTerraform(this._idleTimeoutInMinutes),
      language: cdktf.stringToTerraform(this._language),
      logs_bucket_uri: cdktf.stringToTerraform(this._logsBucketUri),
      max_duration_in_minutes: cdktf.stringToTerraform(this._maxDurationInMinutes),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      num_executors: cdktf.numberToTerraform(this._numExecutors),
      pool_id: cdktf.stringToTerraform(this._poolId),
      private_endpoint_id: cdktf.stringToTerraform(this._privateEndpointId),
      spark_version: cdktf.stringToTerraform(this._sparkVersion),
      terminate_runs_on_deletion: cdktf.booleanToTerraform(this._terminateRunsOnDeletion),
      type: cdktf.stringToTerraform(this._type),
      warehouse_bucket_uri: cdktf.stringToTerraform(this._warehouseBucketUri),
      application_log_config: dataflowApplicationApplicationLogConfigToTerraform(this._applicationLogConfig.internalValue),
      driver_shape_config: dataflowApplicationDriverShapeConfigToTerraform(this._driverShapeConfig.internalValue),
      executor_shape_config: dataflowApplicationExecutorShapeConfigToTerraform(this._executorShapeConfig.internalValue),
      parameters: cdktf.listMapper(dataflowApplicationParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: dataflowApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_uri: {
        value: cdktf.stringToHclTerraform(this._archiveUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arguments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arguments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      class_name: {
        value: cdktf.stringToHclTerraform(this._className),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configuration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      driver_shape: {
        value: cdktf.stringToHclTerraform(this._driverShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute: {
        value: cdktf.stringToHclTerraform(this._execute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executor_shape: {
        value: cdktf.stringToHclTerraform(this._executorShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_uri: {
        value: cdktf.stringToHclTerraform(this._fileUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout_in_minutes: {
        value: cdktf.stringToHclTerraform(this._idleTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_bucket_uri: {
        value: cdktf.stringToHclTerraform(this._logsBucketUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_duration_in_minutes: {
        value: cdktf.stringToHclTerraform(this._maxDurationInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_id: {
        value: cdktf.stringToHclTerraform(this._metastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_executors: {
        value: cdktf.numberToHclTerraform(this._numExecutors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._privateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_version: {
        value: cdktf.stringToHclTerraform(this._sparkVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminate_runs_on_deletion: {
        value: cdktf.booleanToHclTerraform(this._terminateRunsOnDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_bucket_uri: {
        value: cdktf.stringToHclTerraform(this._warehouseBucketUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_log_config: {
        value: dataflowApplicationApplicationLogConfigToHclTerraform(this._applicationLogConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowApplicationApplicationLogConfigList",
      },
      driver_shape_config: {
        value: dataflowApplicationDriverShapeConfigToHclTerraform(this._driverShapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowApplicationDriverShapeConfigList",
      },
      executor_shape_config: {
        value: dataflowApplicationExecutorShapeConfigToHclTerraform(this._executorShapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowApplicationExecutorShapeConfigList",
      },
      parameters: {
        value: cdktf.listMapperHcl(dataflowApplicationParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowApplicationParametersList",
      },
      timeouts: {
        value: dataflowApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataflowApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
