// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciHealthChecksPingProbeResultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}
  */
  readonly probeConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}
  */
  readonly startTimeGreaterThanOrEqualTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}
  */
  readonly startTimeLessThanOrEqualTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}
  */
  readonly target?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}
  */
  readonly filter?: DataOciHealthChecksPingProbeResultsFilter[] | cdktf.IResolvable;
}
export interface DataOciHealthChecksPingProbeResultsPingProbeResultsConnection {
}

export function dataOciHealthChecksPingProbeResultsPingProbeResultsConnectionToTerraform(struct?: DataOciHealthChecksPingProbeResultsPingProbeResultsConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciHealthChecksPingProbeResultsPingProbeResultsConnectionToHclTerraform(struct?: DataOciHealthChecksPingProbeResultsPingProbeResultsConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciHealthChecksPingProbeResultsPingProbeResultsConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciHealthChecksPingProbeResultsPingProbeResultsConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference {
    return new DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciHealthChecksPingProbeResultsPingProbeResultsDns {
}

export function dataOciHealthChecksPingProbeResultsPingProbeResultsDnsToTerraform(struct?: DataOciHealthChecksPingProbeResultsPingProbeResultsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciHealthChecksPingProbeResultsPingProbeResultsDnsToHclTerraform(struct?: DataOciHealthChecksPingProbeResultsPingProbeResultsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciHealthChecksPingProbeResultsPingProbeResultsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciHealthChecksPingProbeResultsPingProbeResultsDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // domain_lookup_duration - computed: true, optional: false, required: false
  public get domainLookupDuration() {
    return this.getNumberAttribute('domain_lookup_duration');
  }
}

export class DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference {
    return new DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciHealthChecksPingProbeResultsPingProbeResults {
}

export function dataOciHealthChecksPingProbeResultsPingProbeResultsToTerraform(struct?: DataOciHealthChecksPingProbeResultsPingProbeResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciHealthChecksPingProbeResultsPingProbeResultsToHclTerraform(struct?: DataOciHealthChecksPingProbeResultsPingProbeResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciHealthChecksPingProbeResultsPingProbeResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciHealthChecksPingProbeResultsPingProbeResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection - computed: true, optional: false, required: false
  private _connection = new DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList(this, "connection", false);
  public get connection() {
    return this._connection;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // domain_lookup_end - computed: true, optional: false, required: false
  public get domainLookupEnd() {
    return this.getNumberAttribute('domain_lookup_end');
  }

  // domain_lookup_start - computed: true, optional: false, required: false
  public get domainLookupStart() {
    return this.getNumberAttribute('domain_lookup_start');
  }

  // error_category - computed: true, optional: false, required: false
  public get errorCategory() {
    return this.getStringAttribute('error_category');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // icmp_code - computed: true, optional: false, required: false
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }

  // is_healthy - computed: true, optional: false, required: false
  public get isHealthy() {
    return this.getBooleanAttribute('is_healthy');
  }

  // is_timed_out - computed: true, optional: false, required: false
  public get isTimedOut() {
    return this.getBooleanAttribute('is_timed_out');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // latency_in_ms - computed: true, optional: false, required: false
  public get latencyInMs() {
    return this.getNumberAttribute('latency_in_ms');
  }

  // probe_configuration_id - computed: true, optional: false, required: false
  public get probeConfigurationId() {
    return this.getStringAttribute('probe_configuration_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // vantage_point_name - computed: true, optional: false, required: false
  public get vantagePointName() {
    return this.getStringAttribute('vantage_point_name');
  }
}

export class DataOciHealthChecksPingProbeResultsPingProbeResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference {
    return new DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciHealthChecksPingProbeResultsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}
  */
  readonly values: string[];
}

export function dataOciHealthChecksPingProbeResultsFilterToTerraform(struct?: DataOciHealthChecksPingProbeResultsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciHealthChecksPingProbeResultsFilterToHclTerraform(struct?: DataOciHealthChecksPingProbeResultsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciHealthChecksPingProbeResultsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciHealthChecksPingProbeResultsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciHealthChecksPingProbeResultsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciHealthChecksPingProbeResultsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciHealthChecksPingProbeResultsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciHealthChecksPingProbeResultsFilterOutputReference {
    return new DataOciHealthChecksPingProbeResultsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results oci_health_checks_ping_probe_results}
*/
export class DataOciHealthChecksPingProbeResults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_health_checks_ping_probe_results";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciHealthChecksPingProbeResults to import
  * @param importFromId The id of the existing DataOciHealthChecksPingProbeResults that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciHealthChecksPingProbeResults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_health_checks_ping_probe_results", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/health_checks_ping_probe_results oci_health_checks_ping_probe_results} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciHealthChecksPingProbeResultsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciHealthChecksPingProbeResultsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_ping_probe_results',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._probeConfigurationId = config.probeConfigurationId;
    this._startTimeGreaterThanOrEqualTo = config.startTimeGreaterThanOrEqualTo;
    this._startTimeLessThanOrEqualTo = config.startTimeLessThanOrEqualTo;
    this._target = config.target;
    this._filter.internalValue = config.filter;
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

  // ping_probe_results - computed: true, optional: false, required: false
  private _pingProbeResults = new DataOciHealthChecksPingProbeResultsPingProbeResultsList(this, "ping_probe_results", false);
  public get pingProbeResults() {
    return this._pingProbeResults;
  }

  // probe_configuration_id - computed: false, optional: false, required: true
  private _probeConfigurationId?: string; 
  public get probeConfigurationId() {
    return this.getStringAttribute('probe_configuration_id');
  }
  public set probeConfigurationId(value: string) {
    this._probeConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeConfigurationIdInput() {
    return this._probeConfigurationId;
  }

  // start_time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _startTimeGreaterThanOrEqualTo?: number; 
  public get startTimeGreaterThanOrEqualTo() {
    return this.getNumberAttribute('start_time_greater_than_or_equal_to');
  }
  public set startTimeGreaterThanOrEqualTo(value: number) {
    this._startTimeGreaterThanOrEqualTo = value;
  }
  public resetStartTimeGreaterThanOrEqualTo() {
    this._startTimeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeGreaterThanOrEqualToInput() {
    return this._startTimeGreaterThanOrEqualTo;
  }

  // start_time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _startTimeLessThanOrEqualTo?: number; 
  public get startTimeLessThanOrEqualTo() {
    return this.getNumberAttribute('start_time_less_than_or_equal_to');
  }
  public set startTimeLessThanOrEqualTo(value: number) {
    this._startTimeLessThanOrEqualTo = value;
  }
  public resetStartTimeLessThanOrEqualTo() {
    this._startTimeLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeLessThanOrEqualToInput() {
    return this._startTimeLessThanOrEqualTo;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciHealthChecksPingProbeResultsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciHealthChecksPingProbeResultsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      probe_configuration_id: cdktf.stringToTerraform(this._probeConfigurationId),
      start_time_greater_than_or_equal_to: cdktf.numberToTerraform(this._startTimeGreaterThanOrEqualTo),
      start_time_less_than_or_equal_to: cdktf.numberToTerraform(this._startTimeLessThanOrEqualTo),
      target: cdktf.stringToTerraform(this._target),
      filter: cdktf.listMapper(dataOciHealthChecksPingProbeResultsFilterToTerraform, true)(this._filter.internalValue),
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
      probe_configuration_id: {
        value: cdktf.stringToHclTerraform(this._probeConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time_greater_than_or_equal_to: {
        value: cdktf.numberToHclTerraform(this._startTimeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time_less_than_or_equal_to: {
        value: cdktf.numberToHclTerraform(this._startTimeLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciHealthChecksPingProbeResultsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciHealthChecksPingProbeResultsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
