// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/functions_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFunctionsFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/functions_function#function_id DataOciFunctionsFunction#function_id}
  */
  readonly functionId: string;
}
export interface DataOciFunctionsFunctionFailureDestination {
}

export function dataOciFunctionsFunctionFailureDestinationToTerraform(struct?: DataOciFunctionsFunctionFailureDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFunctionsFunctionFailureDestinationToHclTerraform(struct?: DataOciFunctionsFunctionFailureDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFunctionsFunctionFailureDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFunctionsFunctionFailureDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFunctionsFunctionFailureDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataOciFunctionsFunctionFailureDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFunctionsFunctionFailureDestinationOutputReference {
    return new DataOciFunctionsFunctionFailureDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFunctionsFunctionProvisionedConcurrencyConfig {
}

export function dataOciFunctionsFunctionProvisionedConcurrencyConfigToTerraform(struct?: DataOciFunctionsFunctionProvisionedConcurrencyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFunctionsFunctionProvisionedConcurrencyConfigToHclTerraform(struct?: DataOciFunctionsFunctionProvisionedConcurrencyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFunctionsFunctionProvisionedConcurrencyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFunctionsFunctionProvisionedConcurrencyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFunctionsFunctionProvisionedConcurrencyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataOciFunctionsFunctionProvisionedConcurrencyConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFunctionsFunctionProvisionedConcurrencyConfigOutputReference {
    return new DataOciFunctionsFunctionProvisionedConcurrencyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFunctionsFunctionSourceDetails {
}

export function dataOciFunctionsFunctionSourceDetailsToTerraform(struct?: DataOciFunctionsFunctionSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFunctionsFunctionSourceDetailsToHclTerraform(struct?: DataOciFunctionsFunctionSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFunctionsFunctionSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFunctionsFunctionSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFunctionsFunctionSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pbf_listing_id - computed: true, optional: false, required: false
  public get pbfListingId() {
    return this.getStringAttribute('pbf_listing_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciFunctionsFunctionSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFunctionsFunctionSourceDetailsOutputReference {
    return new DataOciFunctionsFunctionSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFunctionsFunctionSuccessDestination {
}

export function dataOciFunctionsFunctionSuccessDestinationToTerraform(struct?: DataOciFunctionsFunctionSuccessDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFunctionsFunctionSuccessDestinationToHclTerraform(struct?: DataOciFunctionsFunctionSuccessDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFunctionsFunctionSuccessDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFunctionsFunctionSuccessDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFunctionsFunctionSuccessDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataOciFunctionsFunctionSuccessDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFunctionsFunctionSuccessDestinationOutputReference {
    return new DataOciFunctionsFunctionSuccessDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFunctionsFunctionTraceConfig {
}

export function dataOciFunctionsFunctionTraceConfigToTerraform(struct?: DataOciFunctionsFunctionTraceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFunctionsFunctionTraceConfigToHclTerraform(struct?: DataOciFunctionsFunctionTraceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFunctionsFunctionTraceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFunctionsFunctionTraceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFunctionsFunctionTraceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataOciFunctionsFunctionTraceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFunctionsFunctionTraceConfigOutputReference {
    return new DataOciFunctionsFunctionTraceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/functions_function oci_functions_function}
*/
export class DataOciFunctionsFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_functions_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFunctionsFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFunctionsFunction to import
  * @param importFromId The id of the existing DataOciFunctionsFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/functions_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFunctionsFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_functions_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/functions_function oci_functions_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFunctionsFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFunctionsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_functions_function',
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
    this._functionId = config.functionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config - computed: true, optional: false, required: false
  private _config = new cdktf.StringMap(this, "config");
  public get config() {
    return this._config;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // detached_mode_timeout_in_seconds - computed: true, optional: false, required: false
  public get detachedModeTimeoutInSeconds() {
    return this.getNumberAttribute('detached_mode_timeout_in_seconds');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // failure_destination - computed: true, optional: false, required: false
  private _failureDestination = new DataOciFunctionsFunctionFailureDestinationList(this, "failure_destination", false);
  public get failureDestination() {
    return this._failureDestination;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // function_id - computed: false, optional: false, required: true
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // invoke_endpoint - computed: true, optional: false, required: false
  public get invokeEndpoint() {
    return this.getStringAttribute('invoke_endpoint');
  }

  // memory_in_mbs - computed: true, optional: false, required: false
  public get memoryInMbs() {
    return this.getStringAttribute('memory_in_mbs');
  }

  // provisioned_concurrency_config - computed: true, optional: false, required: false
  private _provisionedConcurrencyConfig = new DataOciFunctionsFunctionProvisionedConcurrencyConfigList(this, "provisioned_concurrency_config", false);
  public get provisionedConcurrencyConfig() {
    return this._provisionedConcurrencyConfig;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciFunctionsFunctionSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // success_destination - computed: true, optional: false, required: false
  private _successDestination = new DataOciFunctionsFunctionSuccessDestinationList(this, "success_destination", false);
  public get successDestination() {
    return this._successDestination;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // trace_config - computed: true, optional: false, required: false
  private _traceConfig = new DataOciFunctionsFunctionTraceConfigList(this, "trace_config", false);
  public get traceConfig() {
    return this._traceConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_id: cdktf.stringToTerraform(this._functionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_id: {
        value: cdktf.stringToHclTerraform(this._functionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
