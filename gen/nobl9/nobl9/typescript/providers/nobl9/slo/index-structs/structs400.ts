import * as cdktf from 'cdktf';
import { SloObjectiveCountMetricsGoodTotalInstanaApplication,
sloObjectiveCountMetricsGoodTotalInstanaApplicationToTerraform,
sloObjectiveCountMetricsGoodTotalInstanaApplicationToHclTerraform,
SloObjectiveCountMetricsGoodTotalInstanaApplicationList,
SloObjectiveCountMetricsGoodTotalAmazonPrometheus,
sloObjectiveCountMetricsGoodTotalAmazonPrometheusToTerraform,
sloObjectiveCountMetricsGoodTotalAmazonPrometheusToHclTerraform,
SloObjectiveCountMetricsGoodTotalAmazonPrometheusList,
SloObjectiveCountMetricsGoodTotalAppdynamics,
sloObjectiveCountMetricsGoodTotalAppdynamicsToTerraform,
sloObjectiveCountMetricsGoodTotalAppdynamicsToHclTerraform,
SloObjectiveCountMetricsGoodTotalAppdynamicsList,
SloObjectiveCountMetricsGoodTotalAzureMonitor,
sloObjectiveCountMetricsGoodTotalAzureMonitorToTerraform,
sloObjectiveCountMetricsGoodTotalAzureMonitorToHclTerraform,
SloObjectiveCountMetricsGoodTotalAzureMonitorList,
SloObjectiveCountMetricsGoodTotalAzurePrometheus,
sloObjectiveCountMetricsGoodTotalAzurePrometheusToTerraform,
sloObjectiveCountMetricsGoodTotalAzurePrometheusToHclTerraform,
SloObjectiveCountMetricsGoodTotalAzurePrometheusList,
SloObjectiveCountMetricsGoodTotalBigquery,
sloObjectiveCountMetricsGoodTotalBigqueryToTerraform,
sloObjectiveCountMetricsGoodTotalBigqueryToHclTerraform,
SloObjectiveCountMetricsGoodTotalBigqueryList,
SloObjectiveCountMetricsGoodTotalCloudwatch,
sloObjectiveCountMetricsGoodTotalCloudwatchToTerraform,
sloObjectiveCountMetricsGoodTotalCloudwatchToHclTerraform,
SloObjectiveCountMetricsGoodTotalCloudwatchList,
SloObjectiveCountMetricsGoodTotalCoralogix,
sloObjectiveCountMetricsGoodTotalCoralogixToTerraform,
sloObjectiveCountMetricsGoodTotalCoralogixToHclTerraform,
SloObjectiveCountMetricsGoodTotalCoralogixList,
SloObjectiveCountMetricsGoodTotalDatadog,
sloObjectiveCountMetricsGoodTotalDatadogToTerraform,
sloObjectiveCountMetricsGoodTotalDatadogToHclTerraform,
SloObjectiveCountMetricsGoodTotalDatadogList,
SloObjectiveCountMetricsGoodTotalDynatrace,
sloObjectiveCountMetricsGoodTotalDynatraceToTerraform,
sloObjectiveCountMetricsGoodTotalDynatraceToHclTerraform,
SloObjectiveCountMetricsGoodTotalDynatraceList,
SloObjectiveCountMetricsGoodTotalElasticsearch,
sloObjectiveCountMetricsGoodTotalElasticsearchToTerraform,
sloObjectiveCountMetricsGoodTotalElasticsearchToHclTerraform,
SloObjectiveCountMetricsGoodTotalElasticsearchList,
SloObjectiveCountMetricsGoodTotalGcm,
sloObjectiveCountMetricsGoodTotalGcmToTerraform,
sloObjectiveCountMetricsGoodTotalGcmToHclTerraform,
SloObjectiveCountMetricsGoodTotalGcmList,
SloObjectiveCountMetricsGoodTotalGrafanaLoki,
sloObjectiveCountMetricsGoodTotalGrafanaLokiToTerraform,
sloObjectiveCountMetricsGoodTotalGrafanaLokiToHclTerraform,
SloObjectiveCountMetricsGoodTotalGrafanaLokiList,
SloObjectiveCountMetricsGoodTotalGraphite,
sloObjectiveCountMetricsGoodTotalGraphiteToTerraform,
sloObjectiveCountMetricsGoodTotalGraphiteToHclTerraform,
SloObjectiveCountMetricsGoodTotalGraphiteList,
SloObjectiveCountMetricsGoodTotalHoneycomb,
sloObjectiveCountMetricsGoodTotalHoneycombToTerraform,
sloObjectiveCountMetricsGoodTotalHoneycombToHclTerraform,
SloObjectiveCountMetricsGoodTotalHoneycombList,
SloObjectiveCountMetricsGoodTotalInfluxdb,
sloObjectiveCountMetricsGoodTotalInfluxdbToTerraform,
sloObjectiveCountMetricsGoodTotalInfluxdbToHclTerraform,
SloObjectiveCountMetricsGoodTotalInfluxdbList,
SloObjectiveCountMetricsBad,
sloObjectiveCountMetricsBadToTerraform,
sloObjectiveCountMetricsBadToHclTerraform,
SloObjectiveCountMetricsBadList,
SloObjectiveCountMetricsGood,
sloObjectiveCountMetricsGoodToTerraform,
sloObjectiveCountMetricsGoodToHclTerraform,
SloObjectiveCountMetricsGoodList,
SloObjectiveComposite,
sloObjectiveCompositeToTerraform,
sloObjectiveCompositeToHclTerraform,
SloObjectiveCompositeList } from './structs0'
export interface SloObjectiveCountMetricsGoodTotalInstanaInfrastructure {
  /**
  * Metric ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * Metric retrieval method 'query' or 'snapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_retrieval_method Slo#metric_retrieval_method}
  */
  readonly metricRetrievalMethod: string;
  /**
  * Plugin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#plugin_id Slo#plugin_id}
  */
  readonly pluginId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
  /**
  * Snapshot ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#snapshot_id Slo#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function sloObjectiveCountMetricsGoodTotalInstanaInfrastructureToTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    metric_retrieval_method: cdktf.stringToTerraform(struct!.metricRetrievalMethod),
    plugin_id: cdktf.stringToTerraform(struct!.pluginId),
    query: cdktf.stringToTerraform(struct!.query),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function sloObjectiveCountMetricsGoodTotalInstanaInfrastructureToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_retrieval_method: {
      value: cdktf.stringToHclTerraform(struct!.metricRetrievalMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_id: {
      value: cdktf.stringToHclTerraform(struct!.pluginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalInstanaInfrastructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalInstanaInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._metricRetrievalMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRetrievalMethod = this._metricRetrievalMethod;
    }
    if (this._pluginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginId = this._pluginId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalInstanaInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricId = undefined;
      this._metricRetrievalMethod = undefined;
      this._pluginId = undefined;
      this._query = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricId = value.metricId;
      this._metricRetrievalMethod = value.metricRetrievalMethod;
      this._pluginId = value.pluginId;
      this._query = value.query;
      this._snapshotId = value.snapshotId;
    }
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_retrieval_method - computed: false, optional: false, required: true
  private _metricRetrievalMethod?: string; 
  public get metricRetrievalMethod() {
    return this.getStringAttribute('metric_retrieval_method');
  }
  public set metricRetrievalMethod(value: string) {
    this._metricRetrievalMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRetrievalMethodInput() {
    return this._metricRetrievalMethod;
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
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

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class SloObjectiveCountMetricsGoodTotalInstanaInfrastructureList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalInstanaInfrastructure[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalInstanaInfrastructureOutputReference {
    return new SloObjectiveCountMetricsGoodTotalInstanaInfrastructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalInstana {
  /**
  * Instana metric type 'application' or 'infrastructure'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_type Slo#metric_type}
  */
  readonly metricType: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#application Slo#application}
  */
  readonly application?: SloObjectiveCountMetricsGoodTotalInstanaApplication[] | cdktf.IResolvable;
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#infrastructure Slo#infrastructure}
  */
  readonly infrastructure?: SloObjectiveCountMetricsGoodTotalInstanaInfrastructure[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodTotalInstanaToTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    application: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalInstanaApplicationToTerraform, true)(struct!.application),
    infrastructure: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalInstanaInfrastructureToTerraform, true)(struct!.infrastructure),
  }
}


export function sloObjectiveCountMetricsGoodTotalInstanaToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalInstanaApplicationToHclTerraform, true)(struct!.application),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalInstanaApplicationList",
    },
    infrastructure: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalInstanaInfrastructureToHclTerraform, true)(struct!.infrastructure),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalInstanaInfrastructureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalInstanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalInstana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalInstana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricType = undefined;
      this._application.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricType = value.metricType;
      this._application.internalValue = value.application;
      this._infrastructure.internalValue = value.infrastructure;
    }
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // application - computed: false, optional: true, required: false
  private _application = new SloObjectiveCountMetricsGoodTotalInstanaApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: SloObjectiveCountMetricsGoodTotalInstanaApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new SloObjectiveCountMetricsGoodTotalInstanaInfrastructureList(this, "infrastructure", false);
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: SloObjectiveCountMetricsGoodTotalInstanaInfrastructure[] | cdktf.IResolvable) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodTotalInstanaList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalInstana[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalInstanaOutputReference {
    return new SloObjectiveCountMetricsGoodTotalInstanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalLightstep {
  /**
  * Optional value to filter by percentiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#percentile Slo#percentile}
  */
  readonly percentile?: number;
  /**
  * ID of the metrics stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#stream_id Slo#stream_id}
  */
  readonly streamId?: string;
  /**
  * Type of data to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#type_of_data Slo#type_of_data}
  */
  readonly typeOfData: string;
  /**
  * UQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#uql Slo#uql}
  */
  readonly uql?: string;
}

export function sloObjectiveCountMetricsGoodTotalLightstepToTerraform(struct?: SloObjectiveCountMetricsGoodTotalLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile: cdktf.numberToTerraform(struct!.percentile),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    type_of_data: cdktf.stringToTerraform(struct!.typeOfData),
    uql: cdktf.stringToTerraform(struct!.uql),
  }
}


export function sloObjectiveCountMetricsGoodTotalLightstepToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_of_data: {
      value: cdktf.stringToHclTerraform(struct!.typeOfData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uql: {
      value: cdktf.stringToHclTerraform(struct!.uql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalLightstepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalLightstep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._typeOfData !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOfData = this._typeOfData;
    }
    if (this._uql !== undefined) {
      hasAnyValues = true;
      internalValueResult.uql = this._uql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalLightstep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentile = undefined;
      this._streamId = undefined;
      this._typeOfData = undefined;
      this._uql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentile = value.percentile;
      this._streamId = value.streamId;
      this._typeOfData = value.typeOfData;
      this._uql = value.uql;
    }
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // stream_id - computed: false, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // type_of_data - computed: false, optional: false, required: true
  private _typeOfData?: string; 
  public get typeOfData() {
    return this.getStringAttribute('type_of_data');
  }
  public set typeOfData(value: string) {
    this._typeOfData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfDataInput() {
    return this._typeOfData;
  }

  // uql - computed: false, optional: true, required: false
  private _uql?: string; 
  public get uql() {
    return this.getStringAttribute('uql');
  }
  public set uql(value: string) {
    this._uql = value;
  }
  public resetUql() {
    this._uql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uqlInput() {
    return this._uql;
  }
}

export class SloObjectiveCountMetricsGoodTotalLightstepList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalLightstep[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalLightstepOutputReference {
    return new SloObjectiveCountMetricsGoodTotalLightstepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalLogicMonitor {
  /**
  * Checkpoint ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#checkpoint_id Slo#checkpoint_id}
  */
  readonly checkpointId?: string;
  /**
  * Device Datasource Instance ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#device_data_source_instance_id Slo#device_data_source_instance_id}
  */
  readonly deviceDataSourceInstanceId?: number;
  /**
  * Graph ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graph_id Slo#graph_id}
  */
  readonly graphId?: number;
  /**
  * Graph Name. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graph_name Slo#graph_name}
  */
  readonly graphName?: string;
  /**
  * Line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#line Slo#line}
  */
  readonly line: string;
  /**
  * Query type: device_metrics or website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query_type Slo#query_type}
  */
  readonly queryType: string;
  /**
  * Website ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#website_id Slo#website_id}
  */
  readonly websiteId?: string;
}

export function sloObjectiveCountMetricsGoodTotalLogicMonitorToTerraform(struct?: SloObjectiveCountMetricsGoodTotalLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkpoint_id: cdktf.stringToTerraform(struct!.checkpointId),
    device_data_source_instance_id: cdktf.numberToTerraform(struct!.deviceDataSourceInstanceId),
    graph_id: cdktf.numberToTerraform(struct!.graphId),
    graph_name: cdktf.stringToTerraform(struct!.graphName),
    line: cdktf.stringToTerraform(struct!.line),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    website_id: cdktf.stringToTerraform(struct!.websiteId),
  }
}


export function sloObjectiveCountMetricsGoodTotalLogicMonitorToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.checkpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_data_source_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceDataSourceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_id: {
      value: cdktf.numberToHclTerraform(struct!.graphId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_name: {
      value: cdktf.stringToHclTerraform(struct!.graphName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line: {
      value: cdktf.stringToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website_id: {
      value: cdktf.stringToHclTerraform(struct!.websiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalLogicMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalLogicMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointId = this._checkpointId;
    }
    if (this._deviceDataSourceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDataSourceInstanceId = this._deviceDataSourceInstanceId;
    }
    if (this._graphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphId = this._graphId;
    }
    if (this._graphName !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphName = this._graphName;
    }
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._websiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteId = this._websiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalLogicMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkpointId = undefined;
      this._deviceDataSourceInstanceId = undefined;
      this._graphId = undefined;
      this._graphName = undefined;
      this._line = undefined;
      this._queryType = undefined;
      this._websiteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkpointId = value.checkpointId;
      this._deviceDataSourceInstanceId = value.deviceDataSourceInstanceId;
      this._graphId = value.graphId;
      this._graphName = value.graphName;
      this._line = value.line;
      this._queryType = value.queryType;
      this._websiteId = value.websiteId;
    }
  }

  // checkpoint_id - computed: false, optional: true, required: false
  private _checkpointId?: string; 
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }
  public set checkpointId(value: string) {
    this._checkpointId = value;
  }
  public resetCheckpointId() {
    this._checkpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIdInput() {
    return this._checkpointId;
  }

  // device_data_source_instance_id - computed: false, optional: true, required: false
  private _deviceDataSourceInstanceId?: number; 
  public get deviceDataSourceInstanceId() {
    return this.getNumberAttribute('device_data_source_instance_id');
  }
  public set deviceDataSourceInstanceId(value: number) {
    this._deviceDataSourceInstanceId = value;
  }
  public resetDeviceDataSourceInstanceId() {
    this._deviceDataSourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceInstanceIdInput() {
    return this._deviceDataSourceInstanceId;
  }

  // graph_id - computed: false, optional: true, required: false
  private _graphId?: number; 
  public get graphId() {
    return this.getNumberAttribute('graph_id');
  }
  public set graphId(value: number) {
    this._graphId = value;
  }
  public resetGraphId() {
    this._graphId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphIdInput() {
    return this._graphId;
  }

  // graph_name - computed: false, optional: true, required: false
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  public resetGraphName() {
    this._graphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
  }

  // line - computed: false, optional: false, required: true
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // website_id - computed: false, optional: true, required: false
  private _websiteId?: string; 
  public get websiteId() {
    return this.getStringAttribute('website_id');
  }
  public set websiteId(value: string) {
    this._websiteId = value;
  }
  public resetWebsiteId() {
    this._websiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteIdInput() {
    return this._websiteId;
  }
}

export class SloObjectiveCountMetricsGoodTotalLogicMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalLogicMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalLogicMonitorOutputReference {
    return new SloObjectiveCountMetricsGoodTotalLogicMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalNewrelic {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#nrql Slo#nrql}
  */
  readonly nrql: string;
}

export function sloObjectiveCountMetricsGoodTotalNewrelicToTerraform(struct?: SloObjectiveCountMetricsGoodTotalNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nrql: cdktf.stringToTerraform(struct!.nrql),
  }
}


export function sloObjectiveCountMetricsGoodTotalNewrelicToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nrql: {
      value: cdktf.stringToHclTerraform(struct!.nrql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalNewrelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalNewrelic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nrql !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrql = this._nrql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalNewrelic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nrql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nrql = value.nrql;
    }
  }

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }
}

export class SloObjectiveCountMetricsGoodTotalNewrelicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalNewrelic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalNewrelicOutputReference {
    return new SloObjectiveCountMetricsGoodTotalNewrelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalOpentsdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodTotalOpentsdbToTerraform(struct?: SloObjectiveCountMetricsGoodTotalOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodTotalOpentsdbToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalOpentsdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalOpentsdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalOpentsdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodTotalOpentsdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalOpentsdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalOpentsdbOutputReference {
    return new SloObjectiveCountMetricsGoodTotalOpentsdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalPingdom {
  /**
  * Pingdom uptime or transaction check's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#check_id Slo#check_id}
  */
  readonly checkId: string;
  /**
  * Pingdom check type - uptime or transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#check_type Slo#check_type}
  */
  readonly checkType?: string;
  /**
  * Optional for the Uptime checks. Use it to filter the Pingdom check results by status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#status Slo#status}
  */
  readonly status?: string;
}

export function sloObjectiveCountMetricsGoodTotalPingdomToTerraform(struct?: SloObjectiveCountMetricsGoodTotalPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_id: cdktf.stringToTerraform(struct!.checkId),
    check_type: cdktf.stringToTerraform(struct!.checkType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sloObjectiveCountMetricsGoodTotalPingdomToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_type: {
      value: cdktf.stringToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalPingdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalPingdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalPingdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._checkType = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._checkType = value.checkType;
      this._status = value.status;
    }
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // check_type - computed: false, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SloObjectiveCountMetricsGoodTotalPingdomList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalPingdom[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalPingdomOutputReference {
    return new SloObjectiveCountMetricsGoodTotalPingdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodTotalPrometheusToTerraform(struct?: SloObjectiveCountMetricsGoodTotalPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodTotalPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodTotalPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalPrometheusOutputReference {
    return new SloObjectiveCountMetricsGoodTotalPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalRedshift {
  /**
  * Redshift custer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#cluster_id Slo#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#database_name Slo#database_name}
  */
  readonly databaseName: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Region of the Redshift instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
}

export function sloObjectiveCountMetricsGoodTotalRedshiftToTerraform(struct?: SloObjectiveCountMetricsGoodTotalRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function sloObjectiveCountMetricsGoodTotalRedshiftToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalRedshiftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._databaseName = undefined;
      this._query = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._databaseName = value.databaseName;
      this._query = value.query;
      this._region = value.region;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SloObjectiveCountMetricsGoodTotalRedshiftList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalRedshift[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalRedshiftOutputReference {
    return new SloObjectiveCountMetricsGoodTotalRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalSplunk {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodTotalSplunkToTerraform(struct?: SloObjectiveCountMetricsGoodTotalSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodTotalSplunkToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalSplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodTotalSplunkList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalSplunk[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalSplunkOutputReference {
    return new SloObjectiveCountMetricsGoodTotalSplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalSplunkObservability {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#program Slo#program}
  */
  readonly program: string;
}

export function sloObjectiveCountMetricsGoodTotalSplunkObservabilityToTerraform(struct?: SloObjectiveCountMetricsGoodTotalSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    program: cdktf.stringToTerraform(struct!.program),
  }
}


export function sloObjectiveCountMetricsGoodTotalSplunkObservabilityToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    program: {
      value: cdktf.stringToHclTerraform(struct!.program),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalSplunkObservabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalSplunkObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._program !== undefined) {
      hasAnyValues = true;
      internalValueResult.program = this._program;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalSplunkObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._program = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._program = value.program;
    }
  }

  // program - computed: false, optional: false, required: true
  private _program?: string; 
  public get program() {
    return this.getStringAttribute('program');
  }
  public set program(value: string) {
    this._program = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programInput() {
    return this._program;
  }
}

export class SloObjectiveCountMetricsGoodTotalSplunkObservabilityList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalSplunkObservability[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalSplunkObservabilityOutputReference {
    return new SloObjectiveCountMetricsGoodTotalSplunkObservabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalSumologic {
  /**
  * Period of data aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#quantization Slo#quantization}
  */
  readonly quantization?: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Aggregation function - avg, sum, min, max, count, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#rollup Slo#rollup}
  */
  readonly rollup?: string;
  /**
  * Sumologic source - metrics or logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
}

export function sloObjectiveCountMetricsGoodTotalSumologicToTerraform(struct?: SloObjectiveCountMetricsGoodTotalSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantization: cdktf.stringToTerraform(struct!.quantization),
    query: cdktf.stringToTerraform(struct!.query),
    rollup: cdktf.stringToTerraform(struct!.rollup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sloObjectiveCountMetricsGoodTotalSumologicToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantization: {
      value: cdktf.stringToHclTerraform(struct!.quantization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollup: {
      value: cdktf.stringToHclTerraform(struct!.rollup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalSumologicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalSumologic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantization !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantization = this._quantization;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalSumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantization = undefined;
      this._query = undefined;
      this._rollup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantization = value.quantization;
      this._query = value.query;
      this._rollup = value.rollup;
      this._type = value.type;
    }
  }

  // quantization - computed: false, optional: true, required: false
  private _quantization?: string; 
  public get quantization() {
    return this.getStringAttribute('quantization');
  }
  public set quantization(value: string) {
    this._quantization = value;
  }
  public resetQuantization() {
    this._quantization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantizationInput() {
    return this._quantization;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rollup - computed: false, optional: true, required: false
  private _rollup?: string; 
  public get rollup() {
    return this.getStringAttribute('rollup');
  }
  public set rollup(value: string) {
    this._rollup = value;
  }
  public resetRollup() {
    this._rollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup;
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
}

export class SloObjectiveCountMetricsGoodTotalSumologicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalSumologic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalSumologicOutputReference {
    return new SloObjectiveCountMetricsGoodTotalSumologicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalThousandeyes {
  /**
  * ID of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#test_id Slo#test_id}
  */
  readonly testId: number;
  /**
  * Type of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#test_type Slo#test_type}
  */
  readonly testType?: string;
}

export function sloObjectiveCountMetricsGoodTotalThousandeyesToTerraform(struct?: SloObjectiveCountMetricsGoodTotalThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_id: cdktf.numberToTerraform(struct!.testId),
    test_type: cdktf.stringToTerraform(struct!.testType),
  }
}


export function sloObjectiveCountMetricsGoodTotalThousandeyesToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_id: {
      value: cdktf.numberToHclTerraform(struct!.testId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_type: {
      value: cdktf.stringToHclTerraform(struct!.testType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalThousandeyesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalThousandeyes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testId !== undefined) {
      hasAnyValues = true;
      internalValueResult.testId = this._testId;
    }
    if (this._testType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testType = this._testType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalThousandeyes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testId = undefined;
      this._testType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testId = value.testId;
      this._testType = value.testType;
    }
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: number; 
  public get testId() {
    return this.getNumberAttribute('test_id');
  }
  public set testId(value: number) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // test_type - computed: false, optional: true, required: false
  private _testType?: string; 
  public get testType() {
    return this.getStringAttribute('test_type');
  }
  public set testType(value: string) {
    this._testType = value;
  }
  public resetTestType() {
    this._testType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTypeInput() {
    return this._testType;
  }
}

export class SloObjectiveCountMetricsGoodTotalThousandeyesList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalThousandeyes[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalThousandeyesOutputReference {
    return new SloObjectiveCountMetricsGoodTotalThousandeyesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotal {
  /**
  * amazon_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#amazon_prometheus Slo#amazon_prometheus}
  */
  readonly amazonPrometheus?: SloObjectiveCountMetricsGoodTotalAmazonPrometheus[] | cdktf.IResolvable;
  /**
  * appdynamics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#appdynamics Slo#appdynamics}
  */
  readonly appdynamics?: SloObjectiveCountMetricsGoodTotalAppdynamics[] | cdktf.IResolvable;
  /**
  * azure_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#azure_monitor Slo#azure_monitor}
  */
  readonly azureMonitor?: SloObjectiveCountMetricsGoodTotalAzureMonitor[] | cdktf.IResolvable;
  /**
  * azure_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#azure_prometheus Slo#azure_prometheus}
  */
  readonly azurePrometheus?: SloObjectiveCountMetricsGoodTotalAzurePrometheus[] | cdktf.IResolvable;
  /**
  * bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#bigquery Slo#bigquery}
  */
  readonly bigquery?: SloObjectiveCountMetricsGoodTotalBigquery[] | cdktf.IResolvable;
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#cloudwatch Slo#cloudwatch}
  */
  readonly cloudwatch?: SloObjectiveCountMetricsGoodTotalCloudwatch[] | cdktf.IResolvable;
  /**
  * coralogix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#coralogix Slo#coralogix}
  */
  readonly coralogix?: SloObjectiveCountMetricsGoodTotalCoralogix[] | cdktf.IResolvable;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#datadog Slo#datadog}
  */
  readonly datadog?: SloObjectiveCountMetricsGoodTotalDatadog[] | cdktf.IResolvable;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#dynatrace Slo#dynatrace}
  */
  readonly dynatrace?: SloObjectiveCountMetricsGoodTotalDynatrace[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#elasticsearch Slo#elasticsearch}
  */
  readonly elasticsearch?: SloObjectiveCountMetricsGoodTotalElasticsearch[] | cdktf.IResolvable;
  /**
  * gcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#gcm Slo#gcm}
  */
  readonly gcm?: SloObjectiveCountMetricsGoodTotalGcm[] | cdktf.IResolvable;
  /**
  * grafana_loki block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#grafana_loki Slo#grafana_loki}
  */
  readonly grafanaLoki?: SloObjectiveCountMetricsGoodTotalGrafanaLoki[] | cdktf.IResolvable;
  /**
  * graphite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graphite Slo#graphite}
  */
  readonly graphite?: SloObjectiveCountMetricsGoodTotalGraphite[] | cdktf.IResolvable;
  /**
  * honeycomb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#honeycomb Slo#honeycomb}
  */
  readonly honeycomb?: SloObjectiveCountMetricsGoodTotalHoneycomb[] | cdktf.IResolvable;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#influxdb Slo#influxdb}
  */
  readonly influxdb?: SloObjectiveCountMetricsGoodTotalInfluxdb[] | cdktf.IResolvable;
  /**
  * instana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#instana Slo#instana}
  */
  readonly instana?: SloObjectiveCountMetricsGoodTotalInstana[] | cdktf.IResolvable;
  /**
  * lightstep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#lightstep Slo#lightstep}
  */
  readonly lightstep?: SloObjectiveCountMetricsGoodTotalLightstep[] | cdktf.IResolvable;
  /**
  * logic_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#logic_monitor Slo#logic_monitor}
  */
  readonly logicMonitor?: SloObjectiveCountMetricsGoodTotalLogicMonitor[] | cdktf.IResolvable;
  /**
  * newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#newrelic Slo#newrelic}
  */
  readonly newrelic?: SloObjectiveCountMetricsGoodTotalNewrelic[] | cdktf.IResolvable;
  /**
  * opentsdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#opentsdb Slo#opentsdb}
  */
  readonly opentsdb?: SloObjectiveCountMetricsGoodTotalOpentsdb[] | cdktf.IResolvable;
  /**
  * pingdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#pingdom Slo#pingdom}
  */
  readonly pingdom?: SloObjectiveCountMetricsGoodTotalPingdom[] | cdktf.IResolvable;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#prometheus Slo#prometheus}
  */
  readonly prometheus?: SloObjectiveCountMetricsGoodTotalPrometheus[] | cdktf.IResolvable;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#redshift Slo#redshift}
  */
  readonly redshift?: SloObjectiveCountMetricsGoodTotalRedshift[] | cdktf.IResolvable;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#splunk Slo#splunk}
  */
  readonly splunk?: SloObjectiveCountMetricsGoodTotalSplunk[] | cdktf.IResolvable;
  /**
  * splunk_observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#splunk_observability Slo#splunk_observability}
  */
  readonly splunkObservability?: SloObjectiveCountMetricsGoodTotalSplunkObservability[] | cdktf.IResolvable;
  /**
  * sumologic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#sumologic Slo#sumologic}
  */
  readonly sumologic?: SloObjectiveCountMetricsGoodTotalSumologic[] | cdktf.IResolvable;
  /**
  * thousandeyes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#thousandeyes Slo#thousandeyes}
  */
  readonly thousandeyes?: SloObjectiveCountMetricsGoodTotalThousandeyes[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodTotalToTerraform(struct?: SloObjectiveCountMetricsGoodTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_prometheus: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalAmazonPrometheusToTerraform, true)(struct!.amazonPrometheus),
    appdynamics: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalAppdynamicsToTerraform, true)(struct!.appdynamics),
    azure_monitor: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalAzureMonitorToTerraform, true)(struct!.azureMonitor),
    azure_prometheus: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalAzurePrometheusToTerraform, true)(struct!.azurePrometheus),
    bigquery: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalBigqueryToTerraform, true)(struct!.bigquery),
    cloudwatch: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalCloudwatchToTerraform, true)(struct!.cloudwatch),
    coralogix: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalCoralogixToTerraform, true)(struct!.coralogix),
    datadog: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalDatadogToTerraform, true)(struct!.datadog),
    dynatrace: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalDynatraceToTerraform, true)(struct!.dynatrace),
    elasticsearch: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalElasticsearchToTerraform, true)(struct!.elasticsearch),
    gcm: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalGcmToTerraform, true)(struct!.gcm),
    grafana_loki: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalGrafanaLokiToTerraform, true)(struct!.grafanaLoki),
    graphite: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalGraphiteToTerraform, true)(struct!.graphite),
    honeycomb: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalHoneycombToTerraform, true)(struct!.honeycomb),
    influxdb: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalInfluxdbToTerraform, true)(struct!.influxdb),
    instana: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalInstanaToTerraform, true)(struct!.instana),
    lightstep: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalLightstepToTerraform, true)(struct!.lightstep),
    logic_monitor: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalLogicMonitorToTerraform, true)(struct!.logicMonitor),
    newrelic: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalNewrelicToTerraform, true)(struct!.newrelic),
    opentsdb: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalOpentsdbToTerraform, true)(struct!.opentsdb),
    pingdom: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalPingdomToTerraform, true)(struct!.pingdom),
    prometheus: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalPrometheusToTerraform, true)(struct!.prometheus),
    redshift: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalRedshiftToTerraform, true)(struct!.redshift),
    splunk: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalSplunkToTerraform, true)(struct!.splunk),
    splunk_observability: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalSplunkObservabilityToTerraform, true)(struct!.splunkObservability),
    sumologic: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalSumologicToTerraform, true)(struct!.sumologic),
    thousandeyes: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalThousandeyesToTerraform, true)(struct!.thousandeyes),
  }
}


export function sloObjectiveCountMetricsGoodTotalToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalAmazonPrometheusToHclTerraform, true)(struct!.amazonPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalAmazonPrometheusList",
    },
    appdynamics: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalAppdynamicsToHclTerraform, true)(struct!.appdynamics),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalAppdynamicsList",
    },
    azure_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalAzureMonitorToHclTerraform, true)(struct!.azureMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalAzureMonitorList",
    },
    azure_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalAzurePrometheusToHclTerraform, true)(struct!.azurePrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalAzurePrometheusList",
    },
    bigquery: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalBigqueryToHclTerraform, true)(struct!.bigquery),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalBigqueryList",
    },
    cloudwatch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalCloudwatchToHclTerraform, true)(struct!.cloudwatch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalCloudwatchList",
    },
    coralogix: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalCoralogixToHclTerraform, true)(struct!.coralogix),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalCoralogixList",
    },
    datadog: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalDatadogToHclTerraform, true)(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalDatadogList",
    },
    dynatrace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalDynatraceToHclTerraform, true)(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalDynatraceList",
    },
    elasticsearch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalElasticsearchToHclTerraform, true)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalElasticsearchList",
    },
    gcm: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalGcmToHclTerraform, true)(struct!.gcm),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalGcmList",
    },
    grafana_loki: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalGrafanaLokiToHclTerraform, true)(struct!.grafanaLoki),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalGrafanaLokiList",
    },
    graphite: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalGraphiteToHclTerraform, true)(struct!.graphite),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalGraphiteList",
    },
    honeycomb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalHoneycombToHclTerraform, true)(struct!.honeycomb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalHoneycombList",
    },
    influxdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalInfluxdbToHclTerraform, true)(struct!.influxdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalInfluxdbList",
    },
    instana: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalInstanaToHclTerraform, true)(struct!.instana),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalInstanaList",
    },
    lightstep: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalLightstepToHclTerraform, true)(struct!.lightstep),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalLightstepList",
    },
    logic_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalLogicMonitorToHclTerraform, true)(struct!.logicMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalLogicMonitorList",
    },
    newrelic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalNewrelicToHclTerraform, true)(struct!.newrelic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalNewrelicList",
    },
    opentsdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalOpentsdbToHclTerraform, true)(struct!.opentsdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalOpentsdbList",
    },
    pingdom: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalPingdomToHclTerraform, true)(struct!.pingdom),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalPingdomList",
    },
    prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalPrometheusToHclTerraform, true)(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalPrometheusList",
    },
    redshift: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalRedshiftToHclTerraform, true)(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalRedshiftList",
    },
    splunk: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalSplunkToHclTerraform, true)(struct!.splunk),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalSplunkList",
    },
    splunk_observability: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalSplunkObservabilityToHclTerraform, true)(struct!.splunkObservability),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalSplunkObservabilityList",
    },
    sumologic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalSumologicToHclTerraform, true)(struct!.sumologic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalSumologicList",
    },
    thousandeyes: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalThousandeyesToHclTerraform, true)(struct!.thousandeyes),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalThousandeyesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonPrometheus = this._amazonPrometheus?.internalValue;
    }
    if (this._appdynamics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appdynamics = this._appdynamics?.internalValue;
    }
    if (this._azureMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMonitor = this._azureMonitor?.internalValue;
    }
    if (this._azurePrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePrometheus = this._azurePrometheus?.internalValue;
    }
    if (this._bigquery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigquery = this._bigquery?.internalValue;
    }
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._coralogix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coralogix = this._coralogix?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._gcm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcm = this._gcm?.internalValue;
    }
    if (this._grafanaLoki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaLoki = this._grafanaLoki?.internalValue;
    }
    if (this._graphite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite?.internalValue;
    }
    if (this._honeycomb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycomb = this._honeycomb?.internalValue;
    }
    if (this._influxdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb?.internalValue;
    }
    if (this._instana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instana = this._instana?.internalValue;
    }
    if (this._lightstep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightstep = this._lightstep?.internalValue;
    }
    if (this._logicMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicMonitor = this._logicMonitor?.internalValue;
    }
    if (this._newrelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelic = this._newrelic?.internalValue;
    }
    if (this._opentsdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentsdb = this._opentsdb?.internalValue;
    }
    if (this._pingdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingdom = this._pingdom?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._splunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunk = this._splunk?.internalValue;
    }
    if (this._splunkObservability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkObservability = this._splunkObservability?.internalValue;
    }
    if (this._sumologic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumologic = this._sumologic?.internalValue;
    }
    if (this._thousandeyes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandeyes = this._thousandeyes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = undefined;
      this._appdynamics.internalValue = undefined;
      this._azureMonitor.internalValue = undefined;
      this._azurePrometheus.internalValue = undefined;
      this._bigquery.internalValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._coralogix.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._gcm.internalValue = undefined;
      this._grafanaLoki.internalValue = undefined;
      this._graphite.internalValue = undefined;
      this._honeycomb.internalValue = undefined;
      this._influxdb.internalValue = undefined;
      this._instana.internalValue = undefined;
      this._lightstep.internalValue = undefined;
      this._logicMonitor.internalValue = undefined;
      this._newrelic.internalValue = undefined;
      this._opentsdb.internalValue = undefined;
      this._pingdom.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._splunk.internalValue = undefined;
      this._splunkObservability.internalValue = undefined;
      this._sumologic.internalValue = undefined;
      this._thousandeyes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = value.amazonPrometheus;
      this._appdynamics.internalValue = value.appdynamics;
      this._azureMonitor.internalValue = value.azureMonitor;
      this._azurePrometheus.internalValue = value.azurePrometheus;
      this._bigquery.internalValue = value.bigquery;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._coralogix.internalValue = value.coralogix;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._gcm.internalValue = value.gcm;
      this._grafanaLoki.internalValue = value.grafanaLoki;
      this._graphite.internalValue = value.graphite;
      this._honeycomb.internalValue = value.honeycomb;
      this._influxdb.internalValue = value.influxdb;
      this._instana.internalValue = value.instana;
      this._lightstep.internalValue = value.lightstep;
      this._logicMonitor.internalValue = value.logicMonitor;
      this._newrelic.internalValue = value.newrelic;
      this._opentsdb.internalValue = value.opentsdb;
      this._pingdom.internalValue = value.pingdom;
      this._prometheus.internalValue = value.prometheus;
      this._redshift.internalValue = value.redshift;
      this._splunk.internalValue = value.splunk;
      this._splunkObservability.internalValue = value.splunkObservability;
      this._sumologic.internalValue = value.sumologic;
      this._thousandeyes.internalValue = value.thousandeyes;
    }
  }

  // amazon_prometheus - computed: false, optional: true, required: false
  private _amazonPrometheus = new SloObjectiveCountMetricsGoodTotalAmazonPrometheusList(this, "amazon_prometheus", false);
  public get amazonPrometheus() {
    return this._amazonPrometheus;
  }
  public putAmazonPrometheus(value: SloObjectiveCountMetricsGoodTotalAmazonPrometheus[] | cdktf.IResolvable) {
    this._amazonPrometheus.internalValue = value;
  }
  public resetAmazonPrometheus() {
    this._amazonPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonPrometheusInput() {
    return this._amazonPrometheus.internalValue;
  }

  // appdynamics - computed: false, optional: true, required: false
  private _appdynamics = new SloObjectiveCountMetricsGoodTotalAppdynamicsList(this, "appdynamics", false);
  public get appdynamics() {
    return this._appdynamics;
  }
  public putAppdynamics(value: SloObjectiveCountMetricsGoodTotalAppdynamics[] | cdktf.IResolvable) {
    this._appdynamics.internalValue = value;
  }
  public resetAppdynamics() {
    this._appdynamics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appdynamicsInput() {
    return this._appdynamics.internalValue;
  }

  // azure_monitor - computed: false, optional: true, required: false
  private _azureMonitor = new SloObjectiveCountMetricsGoodTotalAzureMonitorList(this, "azure_monitor", false);
  public get azureMonitor() {
    return this._azureMonitor;
  }
  public putAzureMonitor(value: SloObjectiveCountMetricsGoodTotalAzureMonitor[] | cdktf.IResolvable) {
    this._azureMonitor.internalValue = value;
  }
  public resetAzureMonitor() {
    this._azureMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorInput() {
    return this._azureMonitor.internalValue;
  }

  // azure_prometheus - computed: false, optional: true, required: false
  private _azurePrometheus = new SloObjectiveCountMetricsGoodTotalAzurePrometheusList(this, "azure_prometheus", false);
  public get azurePrometheus() {
    return this._azurePrometheus;
  }
  public putAzurePrometheus(value: SloObjectiveCountMetricsGoodTotalAzurePrometheus[] | cdktf.IResolvable) {
    this._azurePrometheus.internalValue = value;
  }
  public resetAzurePrometheus() {
    this._azurePrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrometheusInput() {
    return this._azurePrometheus.internalValue;
  }

  // bigquery - computed: false, optional: true, required: false
  private _bigquery = new SloObjectiveCountMetricsGoodTotalBigqueryList(this, "bigquery", false);
  public get bigquery() {
    return this._bigquery;
  }
  public putBigquery(value: SloObjectiveCountMetricsGoodTotalBigquery[] | cdktf.IResolvable) {
    this._bigquery.internalValue = value;
  }
  public resetBigquery() {
    this._bigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryInput() {
    return this._bigquery.internalValue;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new SloObjectiveCountMetricsGoodTotalCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: SloObjectiveCountMetricsGoodTotalCloudwatch[] | cdktf.IResolvable) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // coralogix - computed: false, optional: true, required: false
  private _coralogix = new SloObjectiveCountMetricsGoodTotalCoralogixList(this, "coralogix", false);
  public get coralogix() {
    return this._coralogix;
  }
  public putCoralogix(value: SloObjectiveCountMetricsGoodTotalCoralogix[] | cdktf.IResolvable) {
    this._coralogix.internalValue = value;
  }
  public resetCoralogix() {
    this._coralogix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coralogixInput() {
    return this._coralogix.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new SloObjectiveCountMetricsGoodTotalDatadogList(this, "datadog", false);
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: SloObjectiveCountMetricsGoodTotalDatadog[] | cdktf.IResolvable) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new SloObjectiveCountMetricsGoodTotalDynatraceList(this, "dynatrace", false);
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: SloObjectiveCountMetricsGoodTotalDynatrace[] | cdktf.IResolvable) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new SloObjectiveCountMetricsGoodTotalElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: SloObjectiveCountMetricsGoodTotalElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // gcm - computed: false, optional: true, required: false
  private _gcm = new SloObjectiveCountMetricsGoodTotalGcmList(this, "gcm", false);
  public get gcm() {
    return this._gcm;
  }
  public putGcm(value: SloObjectiveCountMetricsGoodTotalGcm[] | cdktf.IResolvable) {
    this._gcm.internalValue = value;
  }
  public resetGcm() {
    this._gcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmInput() {
    return this._gcm.internalValue;
  }

  // grafana_loki - computed: false, optional: true, required: false
  private _grafanaLoki = new SloObjectiveCountMetricsGoodTotalGrafanaLokiList(this, "grafana_loki", false);
  public get grafanaLoki() {
    return this._grafanaLoki;
  }
  public putGrafanaLoki(value: SloObjectiveCountMetricsGoodTotalGrafanaLoki[] | cdktf.IResolvable) {
    this._grafanaLoki.internalValue = value;
  }
  public resetGrafanaLoki() {
    this._grafanaLoki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaLokiInput() {
    return this._grafanaLoki.internalValue;
  }

  // graphite - computed: false, optional: true, required: false
  private _graphite = new SloObjectiveCountMetricsGoodTotalGraphiteList(this, "graphite", false);
  public get graphite() {
    return this._graphite;
  }
  public putGraphite(value: SloObjectiveCountMetricsGoodTotalGraphite[] | cdktf.IResolvable) {
    this._graphite.internalValue = value;
  }
  public resetGraphite() {
    this._graphite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite.internalValue;
  }

  // honeycomb - computed: false, optional: true, required: false
  private _honeycomb = new SloObjectiveCountMetricsGoodTotalHoneycombList(this, "honeycomb", false);
  public get honeycomb() {
    return this._honeycomb;
  }
  public putHoneycomb(value: SloObjectiveCountMetricsGoodTotalHoneycomb[] | cdktf.IResolvable) {
    this._honeycomb.internalValue = value;
  }
  public resetHoneycomb() {
    this._honeycomb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycombInput() {
    return this._honeycomb.internalValue;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new SloObjectiveCountMetricsGoodTotalInfluxdbList(this, "influxdb", false);
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: SloObjectiveCountMetricsGoodTotalInfluxdb[] | cdktf.IResolvable) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // instana - computed: false, optional: true, required: false
  private _instana = new SloObjectiveCountMetricsGoodTotalInstanaList(this, "instana", false);
  public get instana() {
    return this._instana;
  }
  public putInstana(value: SloObjectiveCountMetricsGoodTotalInstana[] | cdktf.IResolvable) {
    this._instana.internalValue = value;
  }
  public resetInstana() {
    this._instana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanaInput() {
    return this._instana.internalValue;
  }

  // lightstep - computed: false, optional: true, required: false
  private _lightstep = new SloObjectiveCountMetricsGoodTotalLightstepList(this, "lightstep", false);
  public get lightstep() {
    return this._lightstep;
  }
  public putLightstep(value: SloObjectiveCountMetricsGoodTotalLightstep[] | cdktf.IResolvable) {
    this._lightstep.internalValue = value;
  }
  public resetLightstep() {
    this._lightstep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepInput() {
    return this._lightstep.internalValue;
  }

  // logic_monitor - computed: false, optional: true, required: false
  private _logicMonitor = new SloObjectiveCountMetricsGoodTotalLogicMonitorList(this, "logic_monitor", false);
  public get logicMonitor() {
    return this._logicMonitor;
  }
  public putLogicMonitor(value: SloObjectiveCountMetricsGoodTotalLogicMonitor[] | cdktf.IResolvable) {
    this._logicMonitor.internalValue = value;
  }
  public resetLogicMonitor() {
    this._logicMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicMonitorInput() {
    return this._logicMonitor.internalValue;
  }

  // newrelic - computed: false, optional: true, required: false
  private _newrelic = new SloObjectiveCountMetricsGoodTotalNewrelicList(this, "newrelic", false);
  public get newrelic() {
    return this._newrelic;
  }
  public putNewrelic(value: SloObjectiveCountMetricsGoodTotalNewrelic[] | cdktf.IResolvable) {
    this._newrelic.internalValue = value;
  }
  public resetNewrelic() {
    this._newrelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicInput() {
    return this._newrelic.internalValue;
  }

  // opentsdb - computed: false, optional: true, required: false
  private _opentsdb = new SloObjectiveCountMetricsGoodTotalOpentsdbList(this, "opentsdb", false);
  public get opentsdb() {
    return this._opentsdb;
  }
  public putOpentsdb(value: SloObjectiveCountMetricsGoodTotalOpentsdb[] | cdktf.IResolvable) {
    this._opentsdb.internalValue = value;
  }
  public resetOpentsdb() {
    this._opentsdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentsdbInput() {
    return this._opentsdb.internalValue;
  }

  // pingdom - computed: false, optional: true, required: false
  private _pingdom = new SloObjectiveCountMetricsGoodTotalPingdomList(this, "pingdom", false);
  public get pingdom() {
    return this._pingdom;
  }
  public putPingdom(value: SloObjectiveCountMetricsGoodTotalPingdom[] | cdktf.IResolvable) {
    this._pingdom.internalValue = value;
  }
  public resetPingdom() {
    this._pingdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomInput() {
    return this._pingdom.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new SloObjectiveCountMetricsGoodTotalPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: SloObjectiveCountMetricsGoodTotalPrometheus[] | cdktf.IResolvable) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new SloObjectiveCountMetricsGoodTotalRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: SloObjectiveCountMetricsGoodTotalRedshift[] | cdktf.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new SloObjectiveCountMetricsGoodTotalSplunkList(this, "splunk", false);
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: SloObjectiveCountMetricsGoodTotalSplunk[] | cdktf.IResolvable) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // splunk_observability - computed: false, optional: true, required: false
  private _splunkObservability = new SloObjectiveCountMetricsGoodTotalSplunkObservabilityList(this, "splunk_observability", false);
  public get splunkObservability() {
    return this._splunkObservability;
  }
  public putSplunkObservability(value: SloObjectiveCountMetricsGoodTotalSplunkObservability[] | cdktf.IResolvable) {
    this._splunkObservability.internalValue = value;
  }
  public resetSplunkObservability() {
    this._splunkObservability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkObservabilityInput() {
    return this._splunkObservability.internalValue;
  }

  // sumologic - computed: false, optional: true, required: false
  private _sumologic = new SloObjectiveCountMetricsGoodTotalSumologicList(this, "sumologic", false);
  public get sumologic() {
    return this._sumologic;
  }
  public putSumologic(value: SloObjectiveCountMetricsGoodTotalSumologic[] | cdktf.IResolvable) {
    this._sumologic.internalValue = value;
  }
  public resetSumologic() {
    this._sumologic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicInput() {
    return this._sumologic.internalValue;
  }

  // thousandeyes - computed: false, optional: true, required: false
  private _thousandeyes = new SloObjectiveCountMetricsGoodTotalThousandeyesList(this, "thousandeyes", false);
  public get thousandeyes() {
    return this._thousandeyes;
  }
  public putThousandeyes(value: SloObjectiveCountMetricsGoodTotalThousandeyes[] | cdktf.IResolvable) {
    this._thousandeyes.internalValue = value;
  }
  public resetThousandeyes() {
    this._thousandeyes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandeyesInput() {
    return this._thousandeyes.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodTotalList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotal[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalOutputReference {
    return new SloObjectiveCountMetricsGoodTotalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalAmazonPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsTotalAmazonPrometheusToTerraform(struct?: SloObjectiveCountMetricsTotalAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsTotalAmazonPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsTotalAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalAmazonPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalAmazonPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalAmazonPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsTotalAmazonPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalAmazonPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalAmazonPrometheusOutputReference {
    return new SloObjectiveCountMetricsTotalAmazonPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalAppdynamics {
  /**
  * Name of the added application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#application_name Slo#application_name}
  */
  readonly applicationName: string;
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsTotalAppdynamicsToTerraform(struct?: SloObjectiveCountMetricsTotalAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsTotalAppdynamicsToHclTerraform(struct?: SloObjectiveCountMetricsTotalAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalAppdynamicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalAppdynamics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalAppdynamics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName = value.applicationName;
      this._metricPath = value.metricPath;
    }
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsTotalAppdynamicsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalAppdynamics[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalAppdynamicsOutputReference {
    return new SloObjectiveCountMetricsTotalAppdynamicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalAzureMonitorDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsTotalAzureMonitorDimensionsToTerraform(struct?: SloObjectiveCountMetricsTotalAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsTotalAzureMonitorDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsTotalAzureMonitorDimensions | cdktf.IResolvable): any {
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

export class SloObjectiveCountMetricsTotalAzureMonitorDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalAzureMonitorDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SloObjectiveCountMetricsTotalAzureMonitorDimensions | cdktf.IResolvable | undefined) {
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

export class SloObjectiveCountMetricsTotalAzureMonitorDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalAzureMonitorDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalAzureMonitorDimensionsOutputReference {
    return new SloObjectiveCountMetricsTotalAzureMonitorDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalAzureMonitorWorkspace {
  /**
  * Resource group of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#resource_group Slo#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Subscription ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#subscription_id Slo#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#workspace_id Slo#workspace_id}
  */
  readonly workspaceId: string;
}

export function sloObjectiveCountMetricsTotalAzureMonitorWorkspaceToTerraform(struct?: SloObjectiveCountMetricsTotalAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function sloObjectiveCountMetricsTotalAzureMonitorWorkspaceToHclTerraform(struct?: SloObjectiveCountMetricsTotalAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalAzureMonitorWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalAzureMonitorWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalAzureMonitorWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._workspaceId = value.workspaceId;
    }
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class SloObjectiveCountMetricsTotalAzureMonitorWorkspaceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalAzureMonitorWorkspace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalAzureMonitorWorkspaceOutputReference {
    return new SloObjectiveCountMetricsTotalAzureMonitorWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalAzureMonitor {
  /**
  * Aggregation type [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Specifies source: 'metrics' or 'logs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#data_type Slo#data_type}
  */
  readonly dataType: string;
  /**
  * Logs query in Kusto Query Language [Required for logs]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#kql_query Slo#kql_query}
  */
  readonly kqlQuery?: string;
  /**
  * Name of the metric [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric [Optional for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_namespace Slo#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Identifier of the Azure Cloud resource [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#resource_id Slo#resource_id}
  */
  readonly resourceId?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsTotalAzureMonitorDimensions[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#workspace Slo#workspace}
  */
  readonly workspace?: SloObjectiveCountMetricsTotalAzureMonitorWorkspace[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsTotalAzureMonitorToTerraform(struct?: SloObjectiveCountMetricsTotalAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    kql_query: cdktf.stringToTerraform(struct!.kqlQuery),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsTotalAzureMonitorDimensionsToTerraform, true)(struct!.dimensions),
    workspace: cdktf.listMapper(sloObjectiveCountMetricsTotalAzureMonitorWorkspaceToTerraform, true)(struct!.workspace),
  }
}


export function sloObjectiveCountMetricsTotalAzureMonitorToHclTerraform(struct?: SloObjectiveCountMetricsTotalAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kql_query: {
      value: cdktf.stringToHclTerraform(struct!.kqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalAzureMonitorDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsTotalAzureMonitorDimensionsList",
    },
    workspace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalAzureMonitorWorkspaceToHclTerraform, true)(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalAzureMonitorWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalAzureMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalAzureMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._kqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.kqlQuery = this._kqlQuery;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalAzureMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._dataType = undefined;
      this._kqlQuery = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._resourceId = undefined;
      this._dimensions.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._dataType = value.dataType;
      this._kqlQuery = value.kqlQuery;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._resourceId = value.resourceId;
      this._dimensions.internalValue = value.dimensions;
      this._workspace.internalValue = value.workspace;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // kql_query - computed: false, optional: true, required: false
  private _kqlQuery?: string; 
  public get kqlQuery() {
    return this.getStringAttribute('kql_query');
  }
  public set kqlQuery(value: string) {
    this._kqlQuery = value;
  }
  public resetKqlQuery() {
    this._kqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlQueryInput() {
    return this._kqlQuery;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsTotalAzureMonitorDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsTotalAzureMonitorDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new SloObjectiveCountMetricsTotalAzureMonitorWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: SloObjectiveCountMetricsTotalAzureMonitorWorkspace[] | cdktf.IResolvable) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class SloObjectiveCountMetricsTotalAzureMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalAzureMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalAzureMonitorOutputReference {
    return new SloObjectiveCountMetricsTotalAzureMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalAzurePrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsTotalAzurePrometheusToTerraform(struct?: SloObjectiveCountMetricsTotalAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsTotalAzurePrometheusToHclTerraform(struct?: SloObjectiveCountMetricsTotalAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalAzurePrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalAzurePrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalAzurePrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsTotalAzurePrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalAzurePrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalAzurePrometheusOutputReference {
    return new SloObjectiveCountMetricsTotalAzurePrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalBigquery {
  /**
  * Location of you BigQuery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#location Slo#location}
  */
  readonly location: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsTotalBigqueryToTerraform(struct?: SloObjectiveCountMetricsTotalBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsTotalBigqueryToHclTerraform(struct?: SloObjectiveCountMetricsTotalBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalBigquery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._projectId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._projectId = value.projectId;
      this._query = value.query;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsTotalBigqueryList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalBigquery[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalBigqueryOutputReference {
    return new SloObjectiveCountMetricsTotalBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalCloudwatchDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsTotalCloudwatchDimensionsToTerraform(struct?: SloObjectiveCountMetricsTotalCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsTotalCloudwatchDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsTotalCloudwatchDimensions | cdktf.IResolvable): any {
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

export class SloObjectiveCountMetricsTotalCloudwatchDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalCloudwatchDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SloObjectiveCountMetricsTotalCloudwatchDimensions | cdktf.IResolvable | undefined) {
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

export class SloObjectiveCountMetricsTotalCloudwatchDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalCloudwatchDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalCloudwatchDimensionsOutputReference {
    return new SloObjectiveCountMetricsTotalCloudwatchDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalCloudwatch {
  /**
  * AccountID used with cross-account observability feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#account_id Slo#account_id}
  */
  readonly accountId?: string;
  /**
  * JSON query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#json Slo#json}
  */
  readonly json?: string;
  /**
  * Metric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#namespace Slo#namespace}
  */
  readonly namespace?: string;
  /**
  * Region of the CloudWatch instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
  /**
  * SQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#sql Slo#sql}
  */
  readonly sql?: string;
  /**
  * Metric data aggregations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#stat Slo#stat}
  */
  readonly stat?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsTotalCloudwatchDimensions[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsTotalCloudwatchToTerraform(struct?: SloObjectiveCountMetricsTotalCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    json: cdktf.stringToTerraform(struct!.json),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    sql: cdktf.stringToTerraform(struct!.sql),
    stat: cdktf.stringToTerraform(struct!.stat),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsTotalCloudwatchDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function sloObjectiveCountMetricsTotalCloudwatchToHclTerraform(struct?: SloObjectiveCountMetricsTotalCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktf.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalCloudwatchDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsTotalCloudwatchDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalCloudwatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._json = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._sql = undefined;
      this._stat = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._json = value.json;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._region = value.region;
      this._sql = value.sql;
      this._stat = value.stat;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sql - computed: false, optional: true, required: false
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  public resetSql() {
    this._sql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // stat - computed: false, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsTotalCloudwatchDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsTotalCloudwatchDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class SloObjectiveCountMetricsTotalCloudwatchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalCloudwatch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalCloudwatchOutputReference {
    return new SloObjectiveCountMetricsTotalCloudwatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalCoralogix {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsTotalCoralogixToTerraform(struct?: SloObjectiveCountMetricsTotalCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsTotalCoralogixToHclTerraform(struct?: SloObjectiveCountMetricsTotalCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalCoralogixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalCoralogix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalCoralogix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsTotalCoralogixList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalCoralogix[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalCoralogixOutputReference {
    return new SloObjectiveCountMetricsTotalCoralogixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalDatadog {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsTotalDatadogToTerraform(struct?: SloObjectiveCountMetricsTotalDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsTotalDatadogToHclTerraform(struct?: SloObjectiveCountMetricsTotalDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsTotalDatadogList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalDatadog[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalDatadogOutputReference {
    return new SloObjectiveCountMetricsTotalDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalDynatrace {
  /**
  * Selector for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_selector Slo#metric_selector}
  */
  readonly metricSelector: string;
}

export function sloObjectiveCountMetricsTotalDynatraceToTerraform(struct?: SloObjectiveCountMetricsTotalDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_selector: cdktf.stringToTerraform(struct!.metricSelector),
  }
}


export function sloObjectiveCountMetricsTotalDynatraceToHclTerraform(struct?: SloObjectiveCountMetricsTotalDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_selector: {
      value: cdktf.stringToHclTerraform(struct!.metricSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalDynatraceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalDynatrace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelector = this._metricSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalDynatrace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricSelector = value.metricSelector;
    }
  }

  // metric_selector - computed: false, optional: false, required: true
  private _metricSelector?: string; 
  public get metricSelector() {
    return this.getStringAttribute('metric_selector');
  }
  public set metricSelector(value: string) {
    this._metricSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector;
  }
}

export class SloObjectiveCountMetricsTotalDynatraceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalDynatrace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalDynatraceOutputReference {
    return new SloObjectiveCountMetricsTotalDynatraceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalElasticsearch {
  /**
  * Index of metrics we want to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#index Slo#index}
  */
  readonly index: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsTotalElasticsearchToTerraform(struct?: SloObjectiveCountMetricsTotalElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsTotalElasticsearchToHclTerraform(struct?: SloObjectiveCountMetricsTotalElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._query = value.query;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsTotalElasticsearchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalElasticsearchOutputReference {
    return new SloObjectiveCountMetricsTotalElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalGcm {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics in PromQL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql?: string;
  /**
  * Query for the metrics in MQL format [deprecated](https://cloud.google.com/stackdriver/docs/deprecations/mql)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
}

export function sloObjectiveCountMetricsTotalGcmToTerraform(struct?: SloObjectiveCountMetricsTotalGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    promql: cdktf.stringToTerraform(struct!.promql),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsTotalGcmToHclTerraform(struct?: SloObjectiveCountMetricsTotalGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalGcmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalGcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalGcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._promql = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._promql = value.promql;
      this._query = value.query;
    }
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

  // promql - computed: false, optional: true, required: false
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  public resetPromql() {
    this._promql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
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
}

export class SloObjectiveCountMetricsTotalGcmList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalGcm[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalGcmOutputReference {
    return new SloObjectiveCountMetricsTotalGcmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalGrafanaLoki {
  /**
  * Query for the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#logql Slo#logql}
  */
  readonly logql: string;
}

export function sloObjectiveCountMetricsTotalGrafanaLokiToTerraform(struct?: SloObjectiveCountMetricsTotalGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logql: cdktf.stringToTerraform(struct!.logql),
  }
}


export function sloObjectiveCountMetricsTotalGrafanaLokiToHclTerraform(struct?: SloObjectiveCountMetricsTotalGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logql: {
      value: cdktf.stringToHclTerraform(struct!.logql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalGrafanaLokiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalGrafanaLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logql !== undefined) {
      hasAnyValues = true;
      internalValueResult.logql = this._logql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalGrafanaLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logql = value.logql;
    }
  }

  // logql - computed: false, optional: false, required: true
  private _logql?: string; 
  public get logql() {
    return this.getStringAttribute('logql');
  }
  public set logql(value: string) {
    this._logql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logqlInput() {
    return this._logql;
  }
}

export class SloObjectiveCountMetricsTotalGrafanaLokiList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalGrafanaLoki[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalGrafanaLokiOutputReference {
    return new SloObjectiveCountMetricsTotalGrafanaLokiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalGraphite {
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsTotalGraphiteToTerraform(struct?: SloObjectiveCountMetricsTotalGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsTotalGraphiteToHclTerraform(struct?: SloObjectiveCountMetricsTotalGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalGraphiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalGraphite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalGraphite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPath = value.metricPath;
    }
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsTotalGraphiteList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalGraphite[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalGraphiteOutputReference {
    return new SloObjectiveCountMetricsTotalGraphiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalHoneycomb {
  /**
  * Column name - required for all calculation types besides 'CONCURRENCY' and 'COUNT'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#attribute Slo#attribute}
  */
  readonly attribute?: string;
}

export function sloObjectiveCountMetricsTotalHoneycombToTerraform(struct?: SloObjectiveCountMetricsTotalHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
  }
}


export function sloObjectiveCountMetricsTotalHoneycombToHclTerraform(struct?: SloObjectiveCountMetricsTotalHoneycomb | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalHoneycombOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalHoneycomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalHoneycomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
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
}

export class SloObjectiveCountMetricsTotalHoneycombList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalHoneycomb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalHoneycombOutputReference {
    return new SloObjectiveCountMetricsTotalHoneycombOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalInfluxdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsTotalInfluxdbToTerraform(struct?: SloObjectiveCountMetricsTotalInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsTotalInfluxdbToHclTerraform(struct?: SloObjectiveCountMetricsTotalInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalInfluxdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalInfluxdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalInfluxdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsTotalInfluxdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalInfluxdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalInfluxdbOutputReference {
    return new SloObjectiveCountMetricsTotalInfluxdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalInstanaApplicationGroupBy {
  /**
  * Group by tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#tag Slo#tag}
  */
  readonly tag: string;
  /**
  * Tag entity - one of 'DESTINATION', 'SOURCE', 'NOT_APPLICABLE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#tag_entity Slo#tag_entity}
  */
  readonly tagEntity: string;
  /**
  * Second level key for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#tag_second_level_key Slo#tag_second_level_key}
  */
  readonly tagSecondLevelKey?: string;
}

export function sloObjectiveCountMetricsTotalInstanaApplicationGroupByToTerraform(struct?: SloObjectiveCountMetricsTotalInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_entity: cdktf.stringToTerraform(struct!.tagEntity),
    tag_second_level_key: cdktf.stringToTerraform(struct!.tagSecondLevelKey),
  }
}


export function sloObjectiveCountMetricsTotalInstanaApplicationGroupByToHclTerraform(struct?: SloObjectiveCountMetricsTotalInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_entity: {
      value: cdktf.stringToHclTerraform(struct!.tagEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_second_level_key: {
      value: cdktf.stringToHclTerraform(struct!.tagSecondLevelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalInstanaApplicationGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalInstanaApplicationGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagEntity = this._tagEntity;
    }
    if (this._tagSecondLevelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSecondLevelKey = this._tagSecondLevelKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalInstanaApplicationGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._tagEntity = undefined;
      this._tagSecondLevelKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._tagEntity = value.tagEntity;
      this._tagSecondLevelKey = value.tagSecondLevelKey;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_entity - computed: false, optional: false, required: true
  private _tagEntity?: string; 
  public get tagEntity() {
    return this.getStringAttribute('tag_entity');
  }
  public set tagEntity(value: string) {
    this._tagEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagEntityInput() {
    return this._tagEntity;
  }

  // tag_second_level_key - computed: false, optional: true, required: false
  private _tagSecondLevelKey?: string; 
  public get tagSecondLevelKey() {
    return this.getStringAttribute('tag_second_level_key');
  }
  public set tagSecondLevelKey(value: string) {
    this._tagSecondLevelKey = value;
  }
  public resetTagSecondLevelKey() {
    this._tagSecondLevelKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSecondLevelKeyInput() {
    return this._tagSecondLevelKey;
  }
}

export class SloObjectiveCountMetricsTotalInstanaApplicationGroupByList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalInstanaApplicationGroupBy[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalInstanaApplicationGroupByOutputReference {
    return new SloObjectiveCountMetricsTotalInstanaApplicationGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalInstanaApplication {
  /**
  * Depends on the value specified for 'metric_id'- more info in N9 docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation: string;
  /**
  * API query user passes in a JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#api_query Slo#api_query}
  */
  readonly apiQuery: string;
  /**
  * Include internal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#include_internal Slo#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Include synthetic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#include_synthetic Slo#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
  /**
  * Metric ID one of 'calls', 'erroneousCalls', 'errors', 'latency'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#group_by Slo#group_by}
  */
  readonly groupBy?: SloObjectiveCountMetricsTotalInstanaApplicationGroupBy[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsTotalInstanaApplicationToTerraform(struct?: SloObjectiveCountMetricsTotalInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    api_query: cdktf.stringToTerraform(struct!.apiQuery),
    include_internal: cdktf.booleanToTerraform(struct!.includeInternal),
    include_synthetic: cdktf.booleanToTerraform(struct!.includeSynthetic),
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    group_by: cdktf.listMapper(sloObjectiveCountMetricsTotalInstanaApplicationGroupByToTerraform, true)(struct!.groupBy),
  }
}


export function sloObjectiveCountMetricsTotalInstanaApplicationToHclTerraform(struct?: SloObjectiveCountMetricsTotalInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_query: {
      value: cdktf.stringToHclTerraform(struct!.apiQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_internal: {
      value: cdktf.booleanToHclTerraform(struct!.includeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.includeSynthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalInstanaApplicationGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalInstanaApplicationGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalInstanaApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalInstanaApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._apiQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiQuery = this._apiQuery;
    }
    if (this._includeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInternal = this._includeInternal;
    }
    if (this._includeSynthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSynthetic = this._includeSynthetic;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalInstanaApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._apiQuery = undefined;
      this._includeInternal = undefined;
      this._includeSynthetic = undefined;
      this._metricId = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._apiQuery = value.apiQuery;
      this._includeInternal = value.includeInternal;
      this._includeSynthetic = value.includeSynthetic;
      this._metricId = value.metricId;
      this._groupBy.internalValue = value.groupBy;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // api_query - computed: false, optional: false, required: true
  private _apiQuery?: string; 
  public get apiQuery() {
    return this.getStringAttribute('api_query');
  }
  public set apiQuery(value: string) {
    this._apiQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiQueryInput() {
    return this._apiQuery;
  }

  // include_internal - computed: false, optional: true, required: false
  private _includeInternal?: boolean | cdktf.IResolvable; 
  public get includeInternal() {
    return this.getBooleanAttribute('include_internal');
  }
  public set includeInternal(value: boolean | cdktf.IResolvable) {
    this._includeInternal = value;
  }
  public resetIncludeInternal() {
    this._includeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalInput() {
    return this._includeInternal;
  }

  // include_synthetic - computed: false, optional: true, required: false
  private _includeSynthetic?: boolean | cdktf.IResolvable; 
  public get includeSynthetic() {
    return this.getBooleanAttribute('include_synthetic');
  }
  public set includeSynthetic(value: boolean | cdktf.IResolvable) {
    this._includeSynthetic = value;
  }
  public resetIncludeSynthetic() {
    this._includeSynthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSyntheticInput() {
    return this._includeSynthetic;
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new SloObjectiveCountMetricsTotalInstanaApplicationGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: SloObjectiveCountMetricsTotalInstanaApplicationGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class SloObjectiveCountMetricsTotalInstanaApplicationList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalInstanaApplication[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalInstanaApplicationOutputReference {
    return new SloObjectiveCountMetricsTotalInstanaApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalInstanaInfrastructure {
  /**
  * Metric ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * Metric retrieval method 'query' or 'snapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_retrieval_method Slo#metric_retrieval_method}
  */
  readonly metricRetrievalMethod: string;
  /**
  * Plugin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#plugin_id Slo#plugin_id}
  */
  readonly pluginId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
  /**
  * Snapshot ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#snapshot_id Slo#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function sloObjectiveCountMetricsTotalInstanaInfrastructureToTerraform(struct?: SloObjectiveCountMetricsTotalInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    metric_retrieval_method: cdktf.stringToTerraform(struct!.metricRetrievalMethod),
    plugin_id: cdktf.stringToTerraform(struct!.pluginId),
    query: cdktf.stringToTerraform(struct!.query),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function sloObjectiveCountMetricsTotalInstanaInfrastructureToHclTerraform(struct?: SloObjectiveCountMetricsTotalInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_retrieval_method: {
      value: cdktf.stringToHclTerraform(struct!.metricRetrievalMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_id: {
      value: cdktf.stringToHclTerraform(struct!.pluginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalInstanaInfrastructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalInstanaInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._metricRetrievalMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRetrievalMethod = this._metricRetrievalMethod;
    }
    if (this._pluginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginId = this._pluginId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalInstanaInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricId = undefined;
      this._metricRetrievalMethod = undefined;
      this._pluginId = undefined;
      this._query = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricId = value.metricId;
      this._metricRetrievalMethod = value.metricRetrievalMethod;
      this._pluginId = value.pluginId;
      this._query = value.query;
      this._snapshotId = value.snapshotId;
    }
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_retrieval_method - computed: false, optional: false, required: true
  private _metricRetrievalMethod?: string; 
  public get metricRetrievalMethod() {
    return this.getStringAttribute('metric_retrieval_method');
  }
  public set metricRetrievalMethod(value: string) {
    this._metricRetrievalMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRetrievalMethodInput() {
    return this._metricRetrievalMethod;
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
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

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class SloObjectiveCountMetricsTotalInstanaInfrastructureList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalInstanaInfrastructure[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalInstanaInfrastructureOutputReference {
    return new SloObjectiveCountMetricsTotalInstanaInfrastructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalInstana {
  /**
  * Instana metric type 'application' or 'infrastructure'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_type Slo#metric_type}
  */
  readonly metricType: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#application Slo#application}
  */
  readonly application?: SloObjectiveCountMetricsTotalInstanaApplication[] | cdktf.IResolvable;
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#infrastructure Slo#infrastructure}
  */
  readonly infrastructure?: SloObjectiveCountMetricsTotalInstanaInfrastructure[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsTotalInstanaToTerraform(struct?: SloObjectiveCountMetricsTotalInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    application: cdktf.listMapper(sloObjectiveCountMetricsTotalInstanaApplicationToTerraform, true)(struct!.application),
    infrastructure: cdktf.listMapper(sloObjectiveCountMetricsTotalInstanaInfrastructureToTerraform, true)(struct!.infrastructure),
  }
}


export function sloObjectiveCountMetricsTotalInstanaToHclTerraform(struct?: SloObjectiveCountMetricsTotalInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalInstanaApplicationToHclTerraform, true)(struct!.application),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalInstanaApplicationList",
    },
    infrastructure: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalInstanaInfrastructureToHclTerraform, true)(struct!.infrastructure),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalInstanaInfrastructureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalInstanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalInstana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalInstana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricType = undefined;
      this._application.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricType = value.metricType;
      this._application.internalValue = value.application;
      this._infrastructure.internalValue = value.infrastructure;
    }
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // application - computed: false, optional: true, required: false
  private _application = new SloObjectiveCountMetricsTotalInstanaApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: SloObjectiveCountMetricsTotalInstanaApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new SloObjectiveCountMetricsTotalInstanaInfrastructureList(this, "infrastructure", false);
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: SloObjectiveCountMetricsTotalInstanaInfrastructure[] | cdktf.IResolvable) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }
}

export class SloObjectiveCountMetricsTotalInstanaList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalInstana[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalInstanaOutputReference {
    return new SloObjectiveCountMetricsTotalInstanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalLightstep {
  /**
  * Optional value to filter by percentiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#percentile Slo#percentile}
  */
  readonly percentile?: number;
  /**
  * ID of the metrics stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#stream_id Slo#stream_id}
  */
  readonly streamId?: string;
  /**
  * Type of data to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#type_of_data Slo#type_of_data}
  */
  readonly typeOfData: string;
  /**
  * UQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#uql Slo#uql}
  */
  readonly uql?: string;
}

export function sloObjectiveCountMetricsTotalLightstepToTerraform(struct?: SloObjectiveCountMetricsTotalLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile: cdktf.numberToTerraform(struct!.percentile),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    type_of_data: cdktf.stringToTerraform(struct!.typeOfData),
    uql: cdktf.stringToTerraform(struct!.uql),
  }
}


export function sloObjectiveCountMetricsTotalLightstepToHclTerraform(struct?: SloObjectiveCountMetricsTotalLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_of_data: {
      value: cdktf.stringToHclTerraform(struct!.typeOfData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uql: {
      value: cdktf.stringToHclTerraform(struct!.uql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalLightstepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalLightstep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._typeOfData !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOfData = this._typeOfData;
    }
    if (this._uql !== undefined) {
      hasAnyValues = true;
      internalValueResult.uql = this._uql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalLightstep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentile = undefined;
      this._streamId = undefined;
      this._typeOfData = undefined;
      this._uql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentile = value.percentile;
      this._streamId = value.streamId;
      this._typeOfData = value.typeOfData;
      this._uql = value.uql;
    }
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // stream_id - computed: false, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // type_of_data - computed: false, optional: false, required: true
  private _typeOfData?: string; 
  public get typeOfData() {
    return this.getStringAttribute('type_of_data');
  }
  public set typeOfData(value: string) {
    this._typeOfData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfDataInput() {
    return this._typeOfData;
  }

  // uql - computed: false, optional: true, required: false
  private _uql?: string; 
  public get uql() {
    return this.getStringAttribute('uql');
  }
  public set uql(value: string) {
    this._uql = value;
  }
  public resetUql() {
    this._uql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uqlInput() {
    return this._uql;
  }
}

export class SloObjectiveCountMetricsTotalLightstepList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalLightstep[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalLightstepOutputReference {
    return new SloObjectiveCountMetricsTotalLightstepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalLogicMonitor {
  /**
  * Checkpoint ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#checkpoint_id Slo#checkpoint_id}
  */
  readonly checkpointId?: string;
  /**
  * Device Datasource Instance ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#device_data_source_instance_id Slo#device_data_source_instance_id}
  */
  readonly deviceDataSourceInstanceId?: number;
  /**
  * Graph ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graph_id Slo#graph_id}
  */
  readonly graphId?: number;
  /**
  * Graph Name. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graph_name Slo#graph_name}
  */
  readonly graphName?: string;
  /**
  * Line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#line Slo#line}
  */
  readonly line: string;
  /**
  * Query type: device_metrics or website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query_type Slo#query_type}
  */
  readonly queryType: string;
  /**
  * Website ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#website_id Slo#website_id}
  */
  readonly websiteId?: string;
}

export function sloObjectiveCountMetricsTotalLogicMonitorToTerraform(struct?: SloObjectiveCountMetricsTotalLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkpoint_id: cdktf.stringToTerraform(struct!.checkpointId),
    device_data_source_instance_id: cdktf.numberToTerraform(struct!.deviceDataSourceInstanceId),
    graph_id: cdktf.numberToTerraform(struct!.graphId),
    graph_name: cdktf.stringToTerraform(struct!.graphName),
    line: cdktf.stringToTerraform(struct!.line),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    website_id: cdktf.stringToTerraform(struct!.websiteId),
  }
}


export function sloObjectiveCountMetricsTotalLogicMonitorToHclTerraform(struct?: SloObjectiveCountMetricsTotalLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.checkpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_data_source_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceDataSourceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_id: {
      value: cdktf.numberToHclTerraform(struct!.graphId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_name: {
      value: cdktf.stringToHclTerraform(struct!.graphName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line: {
      value: cdktf.stringToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website_id: {
      value: cdktf.stringToHclTerraform(struct!.websiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalLogicMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalLogicMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointId = this._checkpointId;
    }
    if (this._deviceDataSourceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDataSourceInstanceId = this._deviceDataSourceInstanceId;
    }
    if (this._graphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphId = this._graphId;
    }
    if (this._graphName !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphName = this._graphName;
    }
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._websiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteId = this._websiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalLogicMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkpointId = undefined;
      this._deviceDataSourceInstanceId = undefined;
      this._graphId = undefined;
      this._graphName = undefined;
      this._line = undefined;
      this._queryType = undefined;
      this._websiteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkpointId = value.checkpointId;
      this._deviceDataSourceInstanceId = value.deviceDataSourceInstanceId;
      this._graphId = value.graphId;
      this._graphName = value.graphName;
      this._line = value.line;
      this._queryType = value.queryType;
      this._websiteId = value.websiteId;
    }
  }

  // checkpoint_id - computed: false, optional: true, required: false
  private _checkpointId?: string; 
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }
  public set checkpointId(value: string) {
    this._checkpointId = value;
  }
  public resetCheckpointId() {
    this._checkpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIdInput() {
    return this._checkpointId;
  }

  // device_data_source_instance_id - computed: false, optional: true, required: false
  private _deviceDataSourceInstanceId?: number; 
  public get deviceDataSourceInstanceId() {
    return this.getNumberAttribute('device_data_source_instance_id');
  }
  public set deviceDataSourceInstanceId(value: number) {
    this._deviceDataSourceInstanceId = value;
  }
  public resetDeviceDataSourceInstanceId() {
    this._deviceDataSourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceInstanceIdInput() {
    return this._deviceDataSourceInstanceId;
  }

  // graph_id - computed: false, optional: true, required: false
  private _graphId?: number; 
  public get graphId() {
    return this.getNumberAttribute('graph_id');
  }
  public set graphId(value: number) {
    this._graphId = value;
  }
  public resetGraphId() {
    this._graphId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphIdInput() {
    return this._graphId;
  }

  // graph_name - computed: false, optional: true, required: false
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  public resetGraphName() {
    this._graphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
  }

  // line - computed: false, optional: false, required: true
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // website_id - computed: false, optional: true, required: false
  private _websiteId?: string; 
  public get websiteId() {
    return this.getStringAttribute('website_id');
  }
  public set websiteId(value: string) {
    this._websiteId = value;
  }
  public resetWebsiteId() {
    this._websiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteIdInput() {
    return this._websiteId;
  }
}

export class SloObjectiveCountMetricsTotalLogicMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalLogicMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalLogicMonitorOutputReference {
    return new SloObjectiveCountMetricsTotalLogicMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalNewrelic {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#nrql Slo#nrql}
  */
  readonly nrql: string;
}

export function sloObjectiveCountMetricsTotalNewrelicToTerraform(struct?: SloObjectiveCountMetricsTotalNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nrql: cdktf.stringToTerraform(struct!.nrql),
  }
}


export function sloObjectiveCountMetricsTotalNewrelicToHclTerraform(struct?: SloObjectiveCountMetricsTotalNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nrql: {
      value: cdktf.stringToHclTerraform(struct!.nrql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalNewrelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalNewrelic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nrql !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrql = this._nrql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalNewrelic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nrql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nrql = value.nrql;
    }
  }

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }
}

export class SloObjectiveCountMetricsTotalNewrelicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalNewrelic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalNewrelicOutputReference {
    return new SloObjectiveCountMetricsTotalNewrelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalOpentsdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsTotalOpentsdbToTerraform(struct?: SloObjectiveCountMetricsTotalOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsTotalOpentsdbToHclTerraform(struct?: SloObjectiveCountMetricsTotalOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalOpentsdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalOpentsdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalOpentsdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsTotalOpentsdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalOpentsdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalOpentsdbOutputReference {
    return new SloObjectiveCountMetricsTotalOpentsdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalPingdom {
  /**
  * Pingdom uptime or transaction check's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#check_id Slo#check_id}
  */
  readonly checkId: string;
  /**
  * Pingdom check type - uptime or transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#check_type Slo#check_type}
  */
  readonly checkType?: string;
  /**
  * Optional for the Uptime checks. Use it to filter the Pingdom check results by status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#status Slo#status}
  */
  readonly status?: string;
}

export function sloObjectiveCountMetricsTotalPingdomToTerraform(struct?: SloObjectiveCountMetricsTotalPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_id: cdktf.stringToTerraform(struct!.checkId),
    check_type: cdktf.stringToTerraform(struct!.checkType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sloObjectiveCountMetricsTotalPingdomToHclTerraform(struct?: SloObjectiveCountMetricsTotalPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_type: {
      value: cdktf.stringToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalPingdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalPingdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalPingdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._checkType = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._checkType = value.checkType;
      this._status = value.status;
    }
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // check_type - computed: false, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SloObjectiveCountMetricsTotalPingdomList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalPingdom[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalPingdomOutputReference {
    return new SloObjectiveCountMetricsTotalPingdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsTotalPrometheusToTerraform(struct?: SloObjectiveCountMetricsTotalPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsTotalPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsTotalPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsTotalPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalPrometheusOutputReference {
    return new SloObjectiveCountMetricsTotalPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalRedshift {
  /**
  * Redshift custer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#cluster_id Slo#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#database_name Slo#database_name}
  */
  readonly databaseName: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Region of the Redshift instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
}

export function sloObjectiveCountMetricsTotalRedshiftToTerraform(struct?: SloObjectiveCountMetricsTotalRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function sloObjectiveCountMetricsTotalRedshiftToHclTerraform(struct?: SloObjectiveCountMetricsTotalRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalRedshiftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._databaseName = undefined;
      this._query = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._databaseName = value.databaseName;
      this._query = value.query;
      this._region = value.region;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SloObjectiveCountMetricsTotalRedshiftList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalRedshift[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalRedshiftOutputReference {
    return new SloObjectiveCountMetricsTotalRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalSplunk {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsTotalSplunkToTerraform(struct?: SloObjectiveCountMetricsTotalSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsTotalSplunkToHclTerraform(struct?: SloObjectiveCountMetricsTotalSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalSplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsTotalSplunkList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalSplunk[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalSplunkOutputReference {
    return new SloObjectiveCountMetricsTotalSplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalSplunkObservability {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#program Slo#program}
  */
  readonly program: string;
}

export function sloObjectiveCountMetricsTotalSplunkObservabilityToTerraform(struct?: SloObjectiveCountMetricsTotalSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    program: cdktf.stringToTerraform(struct!.program),
  }
}


export function sloObjectiveCountMetricsTotalSplunkObservabilityToHclTerraform(struct?: SloObjectiveCountMetricsTotalSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    program: {
      value: cdktf.stringToHclTerraform(struct!.program),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalSplunkObservabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalSplunkObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._program !== undefined) {
      hasAnyValues = true;
      internalValueResult.program = this._program;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalSplunkObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._program = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._program = value.program;
    }
  }

  // program - computed: false, optional: false, required: true
  private _program?: string; 
  public get program() {
    return this.getStringAttribute('program');
  }
  public set program(value: string) {
    this._program = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programInput() {
    return this._program;
  }
}

export class SloObjectiveCountMetricsTotalSplunkObservabilityList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalSplunkObservability[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalSplunkObservabilityOutputReference {
    return new SloObjectiveCountMetricsTotalSplunkObservabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalSumologic {
  /**
  * Period of data aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#quantization Slo#quantization}
  */
  readonly quantization?: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Aggregation function - avg, sum, min, max, count, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#rollup Slo#rollup}
  */
  readonly rollup?: string;
  /**
  * Sumologic source - metrics or logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
}

export function sloObjectiveCountMetricsTotalSumologicToTerraform(struct?: SloObjectiveCountMetricsTotalSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantization: cdktf.stringToTerraform(struct!.quantization),
    query: cdktf.stringToTerraform(struct!.query),
    rollup: cdktf.stringToTerraform(struct!.rollup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sloObjectiveCountMetricsTotalSumologicToHclTerraform(struct?: SloObjectiveCountMetricsTotalSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantization: {
      value: cdktf.stringToHclTerraform(struct!.quantization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollup: {
      value: cdktf.stringToHclTerraform(struct!.rollup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalSumologicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalSumologic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantization !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantization = this._quantization;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalSumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantization = undefined;
      this._query = undefined;
      this._rollup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantization = value.quantization;
      this._query = value.query;
      this._rollup = value.rollup;
      this._type = value.type;
    }
  }

  // quantization - computed: false, optional: true, required: false
  private _quantization?: string; 
  public get quantization() {
    return this.getStringAttribute('quantization');
  }
  public set quantization(value: string) {
    this._quantization = value;
  }
  public resetQuantization() {
    this._quantization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantizationInput() {
    return this._quantization;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rollup - computed: false, optional: true, required: false
  private _rollup?: string; 
  public get rollup() {
    return this.getStringAttribute('rollup');
  }
  public set rollup(value: string) {
    this._rollup = value;
  }
  public resetRollup() {
    this._rollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup;
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
}

export class SloObjectiveCountMetricsTotalSumologicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalSumologic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalSumologicOutputReference {
    return new SloObjectiveCountMetricsTotalSumologicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotalThousandeyes {
  /**
  * ID of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#test_id Slo#test_id}
  */
  readonly testId: number;
  /**
  * Type of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#test_type Slo#test_type}
  */
  readonly testType?: string;
}

export function sloObjectiveCountMetricsTotalThousandeyesToTerraform(struct?: SloObjectiveCountMetricsTotalThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_id: cdktf.numberToTerraform(struct!.testId),
    test_type: cdktf.stringToTerraform(struct!.testType),
  }
}


export function sloObjectiveCountMetricsTotalThousandeyesToHclTerraform(struct?: SloObjectiveCountMetricsTotalThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_id: {
      value: cdktf.numberToHclTerraform(struct!.testId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_type: {
      value: cdktf.stringToHclTerraform(struct!.testType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalThousandeyesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotalThousandeyes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testId !== undefined) {
      hasAnyValues = true;
      internalValueResult.testId = this._testId;
    }
    if (this._testType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testType = this._testType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotalThousandeyes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testId = undefined;
      this._testType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testId = value.testId;
      this._testType = value.testType;
    }
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: number; 
  public get testId() {
    return this.getNumberAttribute('test_id');
  }
  public set testId(value: number) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // test_type - computed: false, optional: true, required: false
  private _testType?: string; 
  public get testType() {
    return this.getStringAttribute('test_type');
  }
  public set testType(value: string) {
    this._testType = value;
  }
  public resetTestType() {
    this._testType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTypeInput() {
    return this._testType;
  }
}

export class SloObjectiveCountMetricsTotalThousandeyesList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotalThousandeyes[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalThousandeyesOutputReference {
    return new SloObjectiveCountMetricsTotalThousandeyesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsTotal {
  /**
  * amazon_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#amazon_prometheus Slo#amazon_prometheus}
  */
  readonly amazonPrometheus?: SloObjectiveCountMetricsTotalAmazonPrometheus[] | cdktf.IResolvable;
  /**
  * appdynamics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#appdynamics Slo#appdynamics}
  */
  readonly appdynamics?: SloObjectiveCountMetricsTotalAppdynamics[] | cdktf.IResolvable;
  /**
  * azure_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#azure_monitor Slo#azure_monitor}
  */
  readonly azureMonitor?: SloObjectiveCountMetricsTotalAzureMonitor[] | cdktf.IResolvable;
  /**
  * azure_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#azure_prometheus Slo#azure_prometheus}
  */
  readonly azurePrometheus?: SloObjectiveCountMetricsTotalAzurePrometheus[] | cdktf.IResolvable;
  /**
  * bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#bigquery Slo#bigquery}
  */
  readonly bigquery?: SloObjectiveCountMetricsTotalBigquery[] | cdktf.IResolvable;
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#cloudwatch Slo#cloudwatch}
  */
  readonly cloudwatch?: SloObjectiveCountMetricsTotalCloudwatch[] | cdktf.IResolvable;
  /**
  * coralogix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#coralogix Slo#coralogix}
  */
  readonly coralogix?: SloObjectiveCountMetricsTotalCoralogix[] | cdktf.IResolvable;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#datadog Slo#datadog}
  */
  readonly datadog?: SloObjectiveCountMetricsTotalDatadog[] | cdktf.IResolvable;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#dynatrace Slo#dynatrace}
  */
  readonly dynatrace?: SloObjectiveCountMetricsTotalDynatrace[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#elasticsearch Slo#elasticsearch}
  */
  readonly elasticsearch?: SloObjectiveCountMetricsTotalElasticsearch[] | cdktf.IResolvable;
  /**
  * gcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#gcm Slo#gcm}
  */
  readonly gcm?: SloObjectiveCountMetricsTotalGcm[] | cdktf.IResolvable;
  /**
  * grafana_loki block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#grafana_loki Slo#grafana_loki}
  */
  readonly grafanaLoki?: SloObjectiveCountMetricsTotalGrafanaLoki[] | cdktf.IResolvable;
  /**
  * graphite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graphite Slo#graphite}
  */
  readonly graphite?: SloObjectiveCountMetricsTotalGraphite[] | cdktf.IResolvable;
  /**
  * honeycomb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#honeycomb Slo#honeycomb}
  */
  readonly honeycomb?: SloObjectiveCountMetricsTotalHoneycomb[] | cdktf.IResolvable;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#influxdb Slo#influxdb}
  */
  readonly influxdb?: SloObjectiveCountMetricsTotalInfluxdb[] | cdktf.IResolvable;
  /**
  * instana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#instana Slo#instana}
  */
  readonly instana?: SloObjectiveCountMetricsTotalInstana[] | cdktf.IResolvable;
  /**
  * lightstep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#lightstep Slo#lightstep}
  */
  readonly lightstep?: SloObjectiveCountMetricsTotalLightstep[] | cdktf.IResolvable;
  /**
  * logic_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#logic_monitor Slo#logic_monitor}
  */
  readonly logicMonitor?: SloObjectiveCountMetricsTotalLogicMonitor[] | cdktf.IResolvable;
  /**
  * newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#newrelic Slo#newrelic}
  */
  readonly newrelic?: SloObjectiveCountMetricsTotalNewrelic[] | cdktf.IResolvable;
  /**
  * opentsdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#opentsdb Slo#opentsdb}
  */
  readonly opentsdb?: SloObjectiveCountMetricsTotalOpentsdb[] | cdktf.IResolvable;
  /**
  * pingdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#pingdom Slo#pingdom}
  */
  readonly pingdom?: SloObjectiveCountMetricsTotalPingdom[] | cdktf.IResolvable;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#prometheus Slo#prometheus}
  */
  readonly prometheus?: SloObjectiveCountMetricsTotalPrometheus[] | cdktf.IResolvable;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#redshift Slo#redshift}
  */
  readonly redshift?: SloObjectiveCountMetricsTotalRedshift[] | cdktf.IResolvable;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#splunk Slo#splunk}
  */
  readonly splunk?: SloObjectiveCountMetricsTotalSplunk[] | cdktf.IResolvable;
  /**
  * splunk_observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#splunk_observability Slo#splunk_observability}
  */
  readonly splunkObservability?: SloObjectiveCountMetricsTotalSplunkObservability[] | cdktf.IResolvable;
  /**
  * sumologic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#sumologic Slo#sumologic}
  */
  readonly sumologic?: SloObjectiveCountMetricsTotalSumologic[] | cdktf.IResolvable;
  /**
  * thousandeyes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#thousandeyes Slo#thousandeyes}
  */
  readonly thousandeyes?: SloObjectiveCountMetricsTotalThousandeyes[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsTotalToTerraform(struct?: SloObjectiveCountMetricsTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_prometheus: cdktf.listMapper(sloObjectiveCountMetricsTotalAmazonPrometheusToTerraform, true)(struct!.amazonPrometheus),
    appdynamics: cdktf.listMapper(sloObjectiveCountMetricsTotalAppdynamicsToTerraform, true)(struct!.appdynamics),
    azure_monitor: cdktf.listMapper(sloObjectiveCountMetricsTotalAzureMonitorToTerraform, true)(struct!.azureMonitor),
    azure_prometheus: cdktf.listMapper(sloObjectiveCountMetricsTotalAzurePrometheusToTerraform, true)(struct!.azurePrometheus),
    bigquery: cdktf.listMapper(sloObjectiveCountMetricsTotalBigqueryToTerraform, true)(struct!.bigquery),
    cloudwatch: cdktf.listMapper(sloObjectiveCountMetricsTotalCloudwatchToTerraform, true)(struct!.cloudwatch),
    coralogix: cdktf.listMapper(sloObjectiveCountMetricsTotalCoralogixToTerraform, true)(struct!.coralogix),
    datadog: cdktf.listMapper(sloObjectiveCountMetricsTotalDatadogToTerraform, true)(struct!.datadog),
    dynatrace: cdktf.listMapper(sloObjectiveCountMetricsTotalDynatraceToTerraform, true)(struct!.dynatrace),
    elasticsearch: cdktf.listMapper(sloObjectiveCountMetricsTotalElasticsearchToTerraform, true)(struct!.elasticsearch),
    gcm: cdktf.listMapper(sloObjectiveCountMetricsTotalGcmToTerraform, true)(struct!.gcm),
    grafana_loki: cdktf.listMapper(sloObjectiveCountMetricsTotalGrafanaLokiToTerraform, true)(struct!.grafanaLoki),
    graphite: cdktf.listMapper(sloObjectiveCountMetricsTotalGraphiteToTerraform, true)(struct!.graphite),
    honeycomb: cdktf.listMapper(sloObjectiveCountMetricsTotalHoneycombToTerraform, true)(struct!.honeycomb),
    influxdb: cdktf.listMapper(sloObjectiveCountMetricsTotalInfluxdbToTerraform, true)(struct!.influxdb),
    instana: cdktf.listMapper(sloObjectiveCountMetricsTotalInstanaToTerraform, true)(struct!.instana),
    lightstep: cdktf.listMapper(sloObjectiveCountMetricsTotalLightstepToTerraform, true)(struct!.lightstep),
    logic_monitor: cdktf.listMapper(sloObjectiveCountMetricsTotalLogicMonitorToTerraform, true)(struct!.logicMonitor),
    newrelic: cdktf.listMapper(sloObjectiveCountMetricsTotalNewrelicToTerraform, true)(struct!.newrelic),
    opentsdb: cdktf.listMapper(sloObjectiveCountMetricsTotalOpentsdbToTerraform, true)(struct!.opentsdb),
    pingdom: cdktf.listMapper(sloObjectiveCountMetricsTotalPingdomToTerraform, true)(struct!.pingdom),
    prometheus: cdktf.listMapper(sloObjectiveCountMetricsTotalPrometheusToTerraform, true)(struct!.prometheus),
    redshift: cdktf.listMapper(sloObjectiveCountMetricsTotalRedshiftToTerraform, true)(struct!.redshift),
    splunk: cdktf.listMapper(sloObjectiveCountMetricsTotalSplunkToTerraform, true)(struct!.splunk),
    splunk_observability: cdktf.listMapper(sloObjectiveCountMetricsTotalSplunkObservabilityToTerraform, true)(struct!.splunkObservability),
    sumologic: cdktf.listMapper(sloObjectiveCountMetricsTotalSumologicToTerraform, true)(struct!.sumologic),
    thousandeyes: cdktf.listMapper(sloObjectiveCountMetricsTotalThousandeyesToTerraform, true)(struct!.thousandeyes),
  }
}


export function sloObjectiveCountMetricsTotalToHclTerraform(struct?: SloObjectiveCountMetricsTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalAmazonPrometheusToHclTerraform, true)(struct!.amazonPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalAmazonPrometheusList",
    },
    appdynamics: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalAppdynamicsToHclTerraform, true)(struct!.appdynamics),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalAppdynamicsList",
    },
    azure_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalAzureMonitorToHclTerraform, true)(struct!.azureMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalAzureMonitorList",
    },
    azure_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalAzurePrometheusToHclTerraform, true)(struct!.azurePrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalAzurePrometheusList",
    },
    bigquery: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalBigqueryToHclTerraform, true)(struct!.bigquery),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalBigqueryList",
    },
    cloudwatch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalCloudwatchToHclTerraform, true)(struct!.cloudwatch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalCloudwatchList",
    },
    coralogix: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalCoralogixToHclTerraform, true)(struct!.coralogix),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalCoralogixList",
    },
    datadog: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalDatadogToHclTerraform, true)(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalDatadogList",
    },
    dynatrace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalDynatraceToHclTerraform, true)(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalDynatraceList",
    },
    elasticsearch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalElasticsearchToHclTerraform, true)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalElasticsearchList",
    },
    gcm: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalGcmToHclTerraform, true)(struct!.gcm),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalGcmList",
    },
    grafana_loki: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalGrafanaLokiToHclTerraform, true)(struct!.grafanaLoki),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalGrafanaLokiList",
    },
    graphite: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalGraphiteToHclTerraform, true)(struct!.graphite),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalGraphiteList",
    },
    honeycomb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalHoneycombToHclTerraform, true)(struct!.honeycomb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalHoneycombList",
    },
    influxdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalInfluxdbToHclTerraform, true)(struct!.influxdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalInfluxdbList",
    },
    instana: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalInstanaToHclTerraform, true)(struct!.instana),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalInstanaList",
    },
    lightstep: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalLightstepToHclTerraform, true)(struct!.lightstep),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalLightstepList",
    },
    logic_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalLogicMonitorToHclTerraform, true)(struct!.logicMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalLogicMonitorList",
    },
    newrelic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalNewrelicToHclTerraform, true)(struct!.newrelic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalNewrelicList",
    },
    opentsdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalOpentsdbToHclTerraform, true)(struct!.opentsdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalOpentsdbList",
    },
    pingdom: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalPingdomToHclTerraform, true)(struct!.pingdom),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalPingdomList",
    },
    prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalPrometheusToHclTerraform, true)(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalPrometheusList",
    },
    redshift: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalRedshiftToHclTerraform, true)(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalRedshiftList",
    },
    splunk: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalSplunkToHclTerraform, true)(struct!.splunk),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalSplunkList",
    },
    splunk_observability: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalSplunkObservabilityToHclTerraform, true)(struct!.splunkObservability),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalSplunkObservabilityList",
    },
    sumologic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalSumologicToHclTerraform, true)(struct!.sumologic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalSumologicList",
    },
    thousandeyes: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalThousandeyesToHclTerraform, true)(struct!.thousandeyes),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalThousandeyesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsTotalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsTotal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonPrometheus = this._amazonPrometheus?.internalValue;
    }
    if (this._appdynamics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appdynamics = this._appdynamics?.internalValue;
    }
    if (this._azureMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMonitor = this._azureMonitor?.internalValue;
    }
    if (this._azurePrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePrometheus = this._azurePrometheus?.internalValue;
    }
    if (this._bigquery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigquery = this._bigquery?.internalValue;
    }
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._coralogix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coralogix = this._coralogix?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._gcm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcm = this._gcm?.internalValue;
    }
    if (this._grafanaLoki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaLoki = this._grafanaLoki?.internalValue;
    }
    if (this._graphite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite?.internalValue;
    }
    if (this._honeycomb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycomb = this._honeycomb?.internalValue;
    }
    if (this._influxdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb?.internalValue;
    }
    if (this._instana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instana = this._instana?.internalValue;
    }
    if (this._lightstep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightstep = this._lightstep?.internalValue;
    }
    if (this._logicMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicMonitor = this._logicMonitor?.internalValue;
    }
    if (this._newrelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelic = this._newrelic?.internalValue;
    }
    if (this._opentsdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentsdb = this._opentsdb?.internalValue;
    }
    if (this._pingdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingdom = this._pingdom?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._splunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunk = this._splunk?.internalValue;
    }
    if (this._splunkObservability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkObservability = this._splunkObservability?.internalValue;
    }
    if (this._sumologic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumologic = this._sumologic?.internalValue;
    }
    if (this._thousandeyes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandeyes = this._thousandeyes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsTotal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = undefined;
      this._appdynamics.internalValue = undefined;
      this._azureMonitor.internalValue = undefined;
      this._azurePrometheus.internalValue = undefined;
      this._bigquery.internalValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._coralogix.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._gcm.internalValue = undefined;
      this._grafanaLoki.internalValue = undefined;
      this._graphite.internalValue = undefined;
      this._honeycomb.internalValue = undefined;
      this._influxdb.internalValue = undefined;
      this._instana.internalValue = undefined;
      this._lightstep.internalValue = undefined;
      this._logicMonitor.internalValue = undefined;
      this._newrelic.internalValue = undefined;
      this._opentsdb.internalValue = undefined;
      this._pingdom.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._splunk.internalValue = undefined;
      this._splunkObservability.internalValue = undefined;
      this._sumologic.internalValue = undefined;
      this._thousandeyes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = value.amazonPrometheus;
      this._appdynamics.internalValue = value.appdynamics;
      this._azureMonitor.internalValue = value.azureMonitor;
      this._azurePrometheus.internalValue = value.azurePrometheus;
      this._bigquery.internalValue = value.bigquery;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._coralogix.internalValue = value.coralogix;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._gcm.internalValue = value.gcm;
      this._grafanaLoki.internalValue = value.grafanaLoki;
      this._graphite.internalValue = value.graphite;
      this._honeycomb.internalValue = value.honeycomb;
      this._influxdb.internalValue = value.influxdb;
      this._instana.internalValue = value.instana;
      this._lightstep.internalValue = value.lightstep;
      this._logicMonitor.internalValue = value.logicMonitor;
      this._newrelic.internalValue = value.newrelic;
      this._opentsdb.internalValue = value.opentsdb;
      this._pingdom.internalValue = value.pingdom;
      this._prometheus.internalValue = value.prometheus;
      this._redshift.internalValue = value.redshift;
      this._splunk.internalValue = value.splunk;
      this._splunkObservability.internalValue = value.splunkObservability;
      this._sumologic.internalValue = value.sumologic;
      this._thousandeyes.internalValue = value.thousandeyes;
    }
  }

  // amazon_prometheus - computed: false, optional: true, required: false
  private _amazonPrometheus = new SloObjectiveCountMetricsTotalAmazonPrometheusList(this, "amazon_prometheus", false);
  public get amazonPrometheus() {
    return this._amazonPrometheus;
  }
  public putAmazonPrometheus(value: SloObjectiveCountMetricsTotalAmazonPrometheus[] | cdktf.IResolvable) {
    this._amazonPrometheus.internalValue = value;
  }
  public resetAmazonPrometheus() {
    this._amazonPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonPrometheusInput() {
    return this._amazonPrometheus.internalValue;
  }

  // appdynamics - computed: false, optional: true, required: false
  private _appdynamics = new SloObjectiveCountMetricsTotalAppdynamicsList(this, "appdynamics", false);
  public get appdynamics() {
    return this._appdynamics;
  }
  public putAppdynamics(value: SloObjectiveCountMetricsTotalAppdynamics[] | cdktf.IResolvable) {
    this._appdynamics.internalValue = value;
  }
  public resetAppdynamics() {
    this._appdynamics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appdynamicsInput() {
    return this._appdynamics.internalValue;
  }

  // azure_monitor - computed: false, optional: true, required: false
  private _azureMonitor = new SloObjectiveCountMetricsTotalAzureMonitorList(this, "azure_monitor", false);
  public get azureMonitor() {
    return this._azureMonitor;
  }
  public putAzureMonitor(value: SloObjectiveCountMetricsTotalAzureMonitor[] | cdktf.IResolvable) {
    this._azureMonitor.internalValue = value;
  }
  public resetAzureMonitor() {
    this._azureMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorInput() {
    return this._azureMonitor.internalValue;
  }

  // azure_prometheus - computed: false, optional: true, required: false
  private _azurePrometheus = new SloObjectiveCountMetricsTotalAzurePrometheusList(this, "azure_prometheus", false);
  public get azurePrometheus() {
    return this._azurePrometheus;
  }
  public putAzurePrometheus(value: SloObjectiveCountMetricsTotalAzurePrometheus[] | cdktf.IResolvable) {
    this._azurePrometheus.internalValue = value;
  }
  public resetAzurePrometheus() {
    this._azurePrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrometheusInput() {
    return this._azurePrometheus.internalValue;
  }

  // bigquery - computed: false, optional: true, required: false
  private _bigquery = new SloObjectiveCountMetricsTotalBigqueryList(this, "bigquery", false);
  public get bigquery() {
    return this._bigquery;
  }
  public putBigquery(value: SloObjectiveCountMetricsTotalBigquery[] | cdktf.IResolvable) {
    this._bigquery.internalValue = value;
  }
  public resetBigquery() {
    this._bigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryInput() {
    return this._bigquery.internalValue;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new SloObjectiveCountMetricsTotalCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: SloObjectiveCountMetricsTotalCloudwatch[] | cdktf.IResolvable) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // coralogix - computed: false, optional: true, required: false
  private _coralogix = new SloObjectiveCountMetricsTotalCoralogixList(this, "coralogix", false);
  public get coralogix() {
    return this._coralogix;
  }
  public putCoralogix(value: SloObjectiveCountMetricsTotalCoralogix[] | cdktf.IResolvable) {
    this._coralogix.internalValue = value;
  }
  public resetCoralogix() {
    this._coralogix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coralogixInput() {
    return this._coralogix.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new SloObjectiveCountMetricsTotalDatadogList(this, "datadog", false);
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: SloObjectiveCountMetricsTotalDatadog[] | cdktf.IResolvable) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new SloObjectiveCountMetricsTotalDynatraceList(this, "dynatrace", false);
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: SloObjectiveCountMetricsTotalDynatrace[] | cdktf.IResolvable) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new SloObjectiveCountMetricsTotalElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: SloObjectiveCountMetricsTotalElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // gcm - computed: false, optional: true, required: false
  private _gcm = new SloObjectiveCountMetricsTotalGcmList(this, "gcm", false);
  public get gcm() {
    return this._gcm;
  }
  public putGcm(value: SloObjectiveCountMetricsTotalGcm[] | cdktf.IResolvable) {
    this._gcm.internalValue = value;
  }
  public resetGcm() {
    this._gcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmInput() {
    return this._gcm.internalValue;
  }

  // grafana_loki - computed: false, optional: true, required: false
  private _grafanaLoki = new SloObjectiveCountMetricsTotalGrafanaLokiList(this, "grafana_loki", false);
  public get grafanaLoki() {
    return this._grafanaLoki;
  }
  public putGrafanaLoki(value: SloObjectiveCountMetricsTotalGrafanaLoki[] | cdktf.IResolvable) {
    this._grafanaLoki.internalValue = value;
  }
  public resetGrafanaLoki() {
    this._grafanaLoki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaLokiInput() {
    return this._grafanaLoki.internalValue;
  }

  // graphite - computed: false, optional: true, required: false
  private _graphite = new SloObjectiveCountMetricsTotalGraphiteList(this, "graphite", false);
  public get graphite() {
    return this._graphite;
  }
  public putGraphite(value: SloObjectiveCountMetricsTotalGraphite[] | cdktf.IResolvable) {
    this._graphite.internalValue = value;
  }
  public resetGraphite() {
    this._graphite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite.internalValue;
  }

  // honeycomb - computed: false, optional: true, required: false
  private _honeycomb = new SloObjectiveCountMetricsTotalHoneycombList(this, "honeycomb", false);
  public get honeycomb() {
    return this._honeycomb;
  }
  public putHoneycomb(value: SloObjectiveCountMetricsTotalHoneycomb[] | cdktf.IResolvable) {
    this._honeycomb.internalValue = value;
  }
  public resetHoneycomb() {
    this._honeycomb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycombInput() {
    return this._honeycomb.internalValue;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new SloObjectiveCountMetricsTotalInfluxdbList(this, "influxdb", false);
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: SloObjectiveCountMetricsTotalInfluxdb[] | cdktf.IResolvable) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // instana - computed: false, optional: true, required: false
  private _instana = new SloObjectiveCountMetricsTotalInstanaList(this, "instana", false);
  public get instana() {
    return this._instana;
  }
  public putInstana(value: SloObjectiveCountMetricsTotalInstana[] | cdktf.IResolvable) {
    this._instana.internalValue = value;
  }
  public resetInstana() {
    this._instana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanaInput() {
    return this._instana.internalValue;
  }

  // lightstep - computed: false, optional: true, required: false
  private _lightstep = new SloObjectiveCountMetricsTotalLightstepList(this, "lightstep", false);
  public get lightstep() {
    return this._lightstep;
  }
  public putLightstep(value: SloObjectiveCountMetricsTotalLightstep[] | cdktf.IResolvable) {
    this._lightstep.internalValue = value;
  }
  public resetLightstep() {
    this._lightstep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepInput() {
    return this._lightstep.internalValue;
  }

  // logic_monitor - computed: false, optional: true, required: false
  private _logicMonitor = new SloObjectiveCountMetricsTotalLogicMonitorList(this, "logic_monitor", false);
  public get logicMonitor() {
    return this._logicMonitor;
  }
  public putLogicMonitor(value: SloObjectiveCountMetricsTotalLogicMonitor[] | cdktf.IResolvable) {
    this._logicMonitor.internalValue = value;
  }
  public resetLogicMonitor() {
    this._logicMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicMonitorInput() {
    return this._logicMonitor.internalValue;
  }

  // newrelic - computed: false, optional: true, required: false
  private _newrelic = new SloObjectiveCountMetricsTotalNewrelicList(this, "newrelic", false);
  public get newrelic() {
    return this._newrelic;
  }
  public putNewrelic(value: SloObjectiveCountMetricsTotalNewrelic[] | cdktf.IResolvable) {
    this._newrelic.internalValue = value;
  }
  public resetNewrelic() {
    this._newrelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicInput() {
    return this._newrelic.internalValue;
  }

  // opentsdb - computed: false, optional: true, required: false
  private _opentsdb = new SloObjectiveCountMetricsTotalOpentsdbList(this, "opentsdb", false);
  public get opentsdb() {
    return this._opentsdb;
  }
  public putOpentsdb(value: SloObjectiveCountMetricsTotalOpentsdb[] | cdktf.IResolvable) {
    this._opentsdb.internalValue = value;
  }
  public resetOpentsdb() {
    this._opentsdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentsdbInput() {
    return this._opentsdb.internalValue;
  }

  // pingdom - computed: false, optional: true, required: false
  private _pingdom = new SloObjectiveCountMetricsTotalPingdomList(this, "pingdom", false);
  public get pingdom() {
    return this._pingdom;
  }
  public putPingdom(value: SloObjectiveCountMetricsTotalPingdom[] | cdktf.IResolvable) {
    this._pingdom.internalValue = value;
  }
  public resetPingdom() {
    this._pingdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomInput() {
    return this._pingdom.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new SloObjectiveCountMetricsTotalPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: SloObjectiveCountMetricsTotalPrometheus[] | cdktf.IResolvable) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new SloObjectiveCountMetricsTotalRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: SloObjectiveCountMetricsTotalRedshift[] | cdktf.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new SloObjectiveCountMetricsTotalSplunkList(this, "splunk", false);
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: SloObjectiveCountMetricsTotalSplunk[] | cdktf.IResolvable) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // splunk_observability - computed: false, optional: true, required: false
  private _splunkObservability = new SloObjectiveCountMetricsTotalSplunkObservabilityList(this, "splunk_observability", false);
  public get splunkObservability() {
    return this._splunkObservability;
  }
  public putSplunkObservability(value: SloObjectiveCountMetricsTotalSplunkObservability[] | cdktf.IResolvable) {
    this._splunkObservability.internalValue = value;
  }
  public resetSplunkObservability() {
    this._splunkObservability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkObservabilityInput() {
    return this._splunkObservability.internalValue;
  }

  // sumologic - computed: false, optional: true, required: false
  private _sumologic = new SloObjectiveCountMetricsTotalSumologicList(this, "sumologic", false);
  public get sumologic() {
    return this._sumologic;
  }
  public putSumologic(value: SloObjectiveCountMetricsTotalSumologic[] | cdktf.IResolvable) {
    this._sumologic.internalValue = value;
  }
  public resetSumologic() {
    this._sumologic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicInput() {
    return this._sumologic.internalValue;
  }

  // thousandeyes - computed: false, optional: true, required: false
  private _thousandeyes = new SloObjectiveCountMetricsTotalThousandeyesList(this, "thousandeyes", false);
  public get thousandeyes() {
    return this._thousandeyes;
  }
  public putThousandeyes(value: SloObjectiveCountMetricsTotalThousandeyes[] | cdktf.IResolvable) {
    this._thousandeyes.internalValue = value;
  }
  public resetThousandeyes() {
    this._thousandeyes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandeyesInput() {
    return this._thousandeyes.internalValue;
  }
}

export class SloObjectiveCountMetricsTotalList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsTotal[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsTotalOutputReference {
    return new SloObjectiveCountMetricsTotalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetrics {
  /**
  * Should the metrics be incrementing or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#incremental Slo#incremental}
  */
  readonly incremental: boolean | cdktf.IResolvable;
  /**
  * bad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#bad Slo#bad}
  */
  readonly bad?: SloObjectiveCountMetricsBad[] | cdktf.IResolvable;
  /**
  * good block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#good Slo#good}
  */
  readonly good?: SloObjectiveCountMetricsGood[] | cdktf.IResolvable;
  /**
  * good_total block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#good_total Slo#good_total}
  */
  readonly goodTotal?: SloObjectiveCountMetricsGoodTotal[] | cdktf.IResolvable;
  /**
  * total block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#total Slo#total}
  */
  readonly total?: SloObjectiveCountMetricsTotal[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsToTerraform(struct?: SloObjectiveCountMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    incremental: cdktf.booleanToTerraform(struct!.incremental),
    bad: cdktf.listMapper(sloObjectiveCountMetricsBadToTerraform, true)(struct!.bad),
    good: cdktf.listMapper(sloObjectiveCountMetricsGoodToTerraform, true)(struct!.good),
    good_total: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalToTerraform, true)(struct!.goodTotal),
    total: cdktf.listMapper(sloObjectiveCountMetricsTotalToTerraform, true)(struct!.total),
  }
}


export function sloObjectiveCountMetricsToHclTerraform(struct?: SloObjectiveCountMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    incremental: {
      value: cdktf.booleanToHclTerraform(struct!.incremental),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bad: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadToHclTerraform, true)(struct!.bad),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadList",
    },
    good: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodToHclTerraform, true)(struct!.good),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodList",
    },
    good_total: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalToHclTerraform, true)(struct!.goodTotal),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalList",
    },
    total: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsTotalToHclTerraform, true)(struct!.total),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsTotalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incremental !== undefined) {
      hasAnyValues = true;
      internalValueResult.incremental = this._incremental;
    }
    if (this._bad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bad = this._bad?.internalValue;
    }
    if (this._good?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.good = this._good?.internalValue;
    }
    if (this._goodTotal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodTotal = this._goodTotal?.internalValue;
    }
    if (this._total?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._incremental = undefined;
      this._bad.internalValue = undefined;
      this._good.internalValue = undefined;
      this._goodTotal.internalValue = undefined;
      this._total.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._incremental = value.incremental;
      this._bad.internalValue = value.bad;
      this._good.internalValue = value.good;
      this._goodTotal.internalValue = value.goodTotal;
      this._total.internalValue = value.total;
    }
  }

  // incremental - computed: false, optional: false, required: true
  private _incremental?: boolean | cdktf.IResolvable; 
  public get incremental() {
    return this.getBooleanAttribute('incremental');
  }
  public set incremental(value: boolean | cdktf.IResolvable) {
    this._incremental = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalInput() {
    return this._incremental;
  }

  // bad - computed: false, optional: true, required: false
  private _bad = new SloObjectiveCountMetricsBadList(this, "bad", false);
  public get bad() {
    return this._bad;
  }
  public putBad(value: SloObjectiveCountMetricsBad[] | cdktf.IResolvable) {
    this._bad.internalValue = value;
  }
  public resetBad() {
    this._bad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badInput() {
    return this._bad.internalValue;
  }

  // good - computed: false, optional: true, required: false
  private _good = new SloObjectiveCountMetricsGoodList(this, "good", false);
  public get good() {
    return this._good;
  }
  public putGood(value: SloObjectiveCountMetricsGood[] | cdktf.IResolvable) {
    this._good.internalValue = value;
  }
  public resetGood() {
    this._good.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodInput() {
    return this._good.internalValue;
  }

  // good_total - computed: false, optional: true, required: false
  private _goodTotal = new SloObjectiveCountMetricsGoodTotalList(this, "good_total", false);
  public get goodTotal() {
    return this._goodTotal;
  }
  public putGoodTotal(value: SloObjectiveCountMetricsGoodTotal[] | cdktf.IResolvable) {
    this._goodTotal.internalValue = value;
  }
  public resetGoodTotal() {
    this._goodTotal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalInput() {
    return this._goodTotal.internalValue;
  }

  // total - computed: false, optional: true, required: false
  private _total = new SloObjectiveCountMetricsTotalList(this, "total", false);
  public get total() {
    return this._total;
  }
  public putTotal(value: SloObjectiveCountMetricsTotal[] | cdktf.IResolvable) {
    this._total.internalValue = value;
  }
  public resetTotal() {
    this._total.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total.internalValue;
  }
}

export class SloObjectiveCountMetricsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetrics[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsOutputReference {
    return new SloObjectiveCountMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryAmazonPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveRawMetricQueryAmazonPrometheusToTerraform(struct?: SloObjectiveRawMetricQueryAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveRawMetricQueryAmazonPrometheusToHclTerraform(struct?: SloObjectiveRawMetricQueryAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryAmazonPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryAmazonPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryAmazonPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveRawMetricQueryAmazonPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryAmazonPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryAmazonPrometheusOutputReference {
    return new SloObjectiveRawMetricQueryAmazonPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryAppdynamics {
  /**
  * Name of the added application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#application_name Slo#application_name}
  */
  readonly applicationName: string;
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveRawMetricQueryAppdynamicsToTerraform(struct?: SloObjectiveRawMetricQueryAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveRawMetricQueryAppdynamicsToHclTerraform(struct?: SloObjectiveRawMetricQueryAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryAppdynamicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryAppdynamics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryAppdynamics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName = value.applicationName;
      this._metricPath = value.metricPath;
    }
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveRawMetricQueryAppdynamicsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryAppdynamics[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryAppdynamicsOutputReference {
    return new SloObjectiveRawMetricQueryAppdynamicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryAzureMonitorDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveRawMetricQueryAzureMonitorDimensionsToTerraform(struct?: SloObjectiveRawMetricQueryAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveRawMetricQueryAzureMonitorDimensionsToHclTerraform(struct?: SloObjectiveRawMetricQueryAzureMonitorDimensions | cdktf.IResolvable): any {
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

export class SloObjectiveRawMetricQueryAzureMonitorDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryAzureMonitorDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SloObjectiveRawMetricQueryAzureMonitorDimensions | cdktf.IResolvable | undefined) {
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

export class SloObjectiveRawMetricQueryAzureMonitorDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryAzureMonitorDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryAzureMonitorDimensionsOutputReference {
    return new SloObjectiveRawMetricQueryAzureMonitorDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryAzureMonitorWorkspace {
  /**
  * Resource group of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#resource_group Slo#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Subscription ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#subscription_id Slo#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#workspace_id Slo#workspace_id}
  */
  readonly workspaceId: string;
}

export function sloObjectiveRawMetricQueryAzureMonitorWorkspaceToTerraform(struct?: SloObjectiveRawMetricQueryAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function sloObjectiveRawMetricQueryAzureMonitorWorkspaceToHclTerraform(struct?: SloObjectiveRawMetricQueryAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryAzureMonitorWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryAzureMonitorWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryAzureMonitorWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._workspaceId = value.workspaceId;
    }
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class SloObjectiveRawMetricQueryAzureMonitorWorkspaceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryAzureMonitorWorkspace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryAzureMonitorWorkspaceOutputReference {
    return new SloObjectiveRawMetricQueryAzureMonitorWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryAzureMonitor {
  /**
  * Aggregation type [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Specifies source: 'metrics' or 'logs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#data_type Slo#data_type}
  */
  readonly dataType: string;
  /**
  * Logs query in Kusto Query Language [Required for logs]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#kql_query Slo#kql_query}
  */
  readonly kqlQuery?: string;
  /**
  * Name of the metric [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric [Optional for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_namespace Slo#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Identifier of the Azure Cloud resource [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#resource_id Slo#resource_id}
  */
  readonly resourceId?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveRawMetricQueryAzureMonitorDimensions[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#workspace Slo#workspace}
  */
  readonly workspace?: SloObjectiveRawMetricQueryAzureMonitorWorkspace[] | cdktf.IResolvable;
}

export function sloObjectiveRawMetricQueryAzureMonitorToTerraform(struct?: SloObjectiveRawMetricQueryAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    kql_query: cdktf.stringToTerraform(struct!.kqlQuery),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    dimensions: cdktf.listMapper(sloObjectiveRawMetricQueryAzureMonitorDimensionsToTerraform, true)(struct!.dimensions),
    workspace: cdktf.listMapper(sloObjectiveRawMetricQueryAzureMonitorWorkspaceToTerraform, true)(struct!.workspace),
  }
}


export function sloObjectiveRawMetricQueryAzureMonitorToHclTerraform(struct?: SloObjectiveRawMetricQueryAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kql_query: {
      value: cdktf.stringToHclTerraform(struct!.kqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryAzureMonitorDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveRawMetricQueryAzureMonitorDimensionsList",
    },
    workspace: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryAzureMonitorWorkspaceToHclTerraform, true)(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryAzureMonitorWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryAzureMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryAzureMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._kqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.kqlQuery = this._kqlQuery;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryAzureMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._dataType = undefined;
      this._kqlQuery = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._resourceId = undefined;
      this._dimensions.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._dataType = value.dataType;
      this._kqlQuery = value.kqlQuery;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._resourceId = value.resourceId;
      this._dimensions.internalValue = value.dimensions;
      this._workspace.internalValue = value.workspace;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // kql_query - computed: false, optional: true, required: false
  private _kqlQuery?: string; 
  public get kqlQuery() {
    return this.getStringAttribute('kql_query');
  }
  public set kqlQuery(value: string) {
    this._kqlQuery = value;
  }
  public resetKqlQuery() {
    this._kqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlQueryInput() {
    return this._kqlQuery;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveRawMetricQueryAzureMonitorDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveRawMetricQueryAzureMonitorDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new SloObjectiveRawMetricQueryAzureMonitorWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: SloObjectiveRawMetricQueryAzureMonitorWorkspace[] | cdktf.IResolvable) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class SloObjectiveRawMetricQueryAzureMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryAzureMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryAzureMonitorOutputReference {
    return new SloObjectiveRawMetricQueryAzureMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryAzurePrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveRawMetricQueryAzurePrometheusToTerraform(struct?: SloObjectiveRawMetricQueryAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveRawMetricQueryAzurePrometheusToHclTerraform(struct?: SloObjectiveRawMetricQueryAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryAzurePrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryAzurePrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryAzurePrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveRawMetricQueryAzurePrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryAzurePrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryAzurePrometheusOutputReference {
    return new SloObjectiveRawMetricQueryAzurePrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryBigquery {
  /**
  * Location of you BigQuery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#location Slo#location}
  */
  readonly location: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveRawMetricQueryBigqueryToTerraform(struct?: SloObjectiveRawMetricQueryBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveRawMetricQueryBigqueryToHclTerraform(struct?: SloObjectiveRawMetricQueryBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryBigquery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._projectId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._projectId = value.projectId;
      this._query = value.query;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveRawMetricQueryBigqueryList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryBigquery[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryBigqueryOutputReference {
    return new SloObjectiveRawMetricQueryBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryCloudwatchDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveRawMetricQueryCloudwatchDimensionsToTerraform(struct?: SloObjectiveRawMetricQueryCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveRawMetricQueryCloudwatchDimensionsToHclTerraform(struct?: SloObjectiveRawMetricQueryCloudwatchDimensions | cdktf.IResolvable): any {
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

export class SloObjectiveRawMetricQueryCloudwatchDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryCloudwatchDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SloObjectiveRawMetricQueryCloudwatchDimensions | cdktf.IResolvable | undefined) {
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

export class SloObjectiveRawMetricQueryCloudwatchDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryCloudwatchDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryCloudwatchDimensionsOutputReference {
    return new SloObjectiveRawMetricQueryCloudwatchDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryCloudwatch {
  /**
  * AccountID used with cross-account observability feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#account_id Slo#account_id}
  */
  readonly accountId?: string;
  /**
  * JSON query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#json Slo#json}
  */
  readonly json?: string;
  /**
  * Metric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#namespace Slo#namespace}
  */
  readonly namespace?: string;
  /**
  * Region of the CloudWatch instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
  /**
  * SQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#sql Slo#sql}
  */
  readonly sql?: string;
  /**
  * Metric data aggregations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#stat Slo#stat}
  */
  readonly stat?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveRawMetricQueryCloudwatchDimensions[] | cdktf.IResolvable;
}

export function sloObjectiveRawMetricQueryCloudwatchToTerraform(struct?: SloObjectiveRawMetricQueryCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    json: cdktf.stringToTerraform(struct!.json),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    sql: cdktf.stringToTerraform(struct!.sql),
    stat: cdktf.stringToTerraform(struct!.stat),
    dimensions: cdktf.listMapper(sloObjectiveRawMetricQueryCloudwatchDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function sloObjectiveRawMetricQueryCloudwatchToHclTerraform(struct?: SloObjectiveRawMetricQueryCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktf.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryCloudwatchDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveRawMetricQueryCloudwatchDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryCloudwatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._json = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._sql = undefined;
      this._stat = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._json = value.json;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._region = value.region;
      this._sql = value.sql;
      this._stat = value.stat;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sql - computed: false, optional: true, required: false
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  public resetSql() {
    this._sql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // stat - computed: false, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveRawMetricQueryCloudwatchDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveRawMetricQueryCloudwatchDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class SloObjectiveRawMetricQueryCloudwatchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryCloudwatch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryCloudwatchOutputReference {
    return new SloObjectiveRawMetricQueryCloudwatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryCoralogix {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveRawMetricQueryCoralogixToTerraform(struct?: SloObjectiveRawMetricQueryCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveRawMetricQueryCoralogixToHclTerraform(struct?: SloObjectiveRawMetricQueryCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryCoralogixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryCoralogix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryCoralogix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveRawMetricQueryCoralogixList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryCoralogix[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryCoralogixOutputReference {
    return new SloObjectiveRawMetricQueryCoralogixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryDatadog {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveRawMetricQueryDatadogToTerraform(struct?: SloObjectiveRawMetricQueryDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveRawMetricQueryDatadogToHclTerraform(struct?: SloObjectiveRawMetricQueryDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveRawMetricQueryDatadogList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryDatadog[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryDatadogOutputReference {
    return new SloObjectiveRawMetricQueryDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryDynatrace {
  /**
  * Selector for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_selector Slo#metric_selector}
  */
  readonly metricSelector: string;
}

export function sloObjectiveRawMetricQueryDynatraceToTerraform(struct?: SloObjectiveRawMetricQueryDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_selector: cdktf.stringToTerraform(struct!.metricSelector),
  }
}


export function sloObjectiveRawMetricQueryDynatraceToHclTerraform(struct?: SloObjectiveRawMetricQueryDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_selector: {
      value: cdktf.stringToHclTerraform(struct!.metricSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryDynatraceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryDynatrace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelector = this._metricSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryDynatrace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricSelector = value.metricSelector;
    }
  }

  // metric_selector - computed: false, optional: false, required: true
  private _metricSelector?: string; 
  public get metricSelector() {
    return this.getStringAttribute('metric_selector');
  }
  public set metricSelector(value: string) {
    this._metricSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector;
  }
}

export class SloObjectiveRawMetricQueryDynatraceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryDynatrace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryDynatraceOutputReference {
    return new SloObjectiveRawMetricQueryDynatraceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryElasticsearch {
  /**
  * Index of metrics we want to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#index Slo#index}
  */
  readonly index: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveRawMetricQueryElasticsearchToTerraform(struct?: SloObjectiveRawMetricQueryElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveRawMetricQueryElasticsearchToHclTerraform(struct?: SloObjectiveRawMetricQueryElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._query = value.query;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveRawMetricQueryElasticsearchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryElasticsearchOutputReference {
    return new SloObjectiveRawMetricQueryElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryGcm {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics in PromQL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql?: string;
  /**
  * Query for the metrics in MQL format [deprecated](https://cloud.google.com/stackdriver/docs/deprecations/mql)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
}

export function sloObjectiveRawMetricQueryGcmToTerraform(struct?: SloObjectiveRawMetricQueryGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    promql: cdktf.stringToTerraform(struct!.promql),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveRawMetricQueryGcmToHclTerraform(struct?: SloObjectiveRawMetricQueryGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryGcmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryGcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryGcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._promql = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._promql = value.promql;
      this._query = value.query;
    }
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

  // promql - computed: false, optional: true, required: false
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  public resetPromql() {
    this._promql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
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
}

export class SloObjectiveRawMetricQueryGcmList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryGcm[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryGcmOutputReference {
    return new SloObjectiveRawMetricQueryGcmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryGrafanaLoki {
  /**
  * Query for the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#logql Slo#logql}
  */
  readonly logql: string;
}

export function sloObjectiveRawMetricQueryGrafanaLokiToTerraform(struct?: SloObjectiveRawMetricQueryGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logql: cdktf.stringToTerraform(struct!.logql),
  }
}


export function sloObjectiveRawMetricQueryGrafanaLokiToHclTerraform(struct?: SloObjectiveRawMetricQueryGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logql: {
      value: cdktf.stringToHclTerraform(struct!.logql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryGrafanaLokiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryGrafanaLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logql !== undefined) {
      hasAnyValues = true;
      internalValueResult.logql = this._logql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryGrafanaLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logql = value.logql;
    }
  }

  // logql - computed: false, optional: false, required: true
  private _logql?: string; 
  public get logql() {
    return this.getStringAttribute('logql');
  }
  public set logql(value: string) {
    this._logql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logqlInput() {
    return this._logql;
  }
}

export class SloObjectiveRawMetricQueryGrafanaLokiList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryGrafanaLoki[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryGrafanaLokiOutputReference {
    return new SloObjectiveRawMetricQueryGrafanaLokiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryGraphite {
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveRawMetricQueryGraphiteToTerraform(struct?: SloObjectiveRawMetricQueryGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveRawMetricQueryGraphiteToHclTerraform(struct?: SloObjectiveRawMetricQueryGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryGraphiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryGraphite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryGraphite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPath = value.metricPath;
    }
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveRawMetricQueryGraphiteList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryGraphite[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryGraphiteOutputReference {
    return new SloObjectiveRawMetricQueryGraphiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryHoneycomb {
  /**
  * Column name - required for all calculation types besides 'CONCURRENCY' and 'COUNT'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#attribute Slo#attribute}
  */
  readonly attribute?: string;
}

export function sloObjectiveRawMetricQueryHoneycombToTerraform(struct?: SloObjectiveRawMetricQueryHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
  }
}


export function sloObjectiveRawMetricQueryHoneycombToHclTerraform(struct?: SloObjectiveRawMetricQueryHoneycomb | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryHoneycombOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryHoneycomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryHoneycomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
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
}

export class SloObjectiveRawMetricQueryHoneycombList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryHoneycomb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryHoneycombOutputReference {
    return new SloObjectiveRawMetricQueryHoneycombOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryInfluxdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveRawMetricQueryInfluxdbToTerraform(struct?: SloObjectiveRawMetricQueryInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveRawMetricQueryInfluxdbToHclTerraform(struct?: SloObjectiveRawMetricQueryInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryInfluxdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryInfluxdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryInfluxdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveRawMetricQueryInfluxdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryInfluxdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryInfluxdbOutputReference {
    return new SloObjectiveRawMetricQueryInfluxdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryInstanaApplicationGroupBy {
  /**
  * Group by tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#tag Slo#tag}
  */
  readonly tag: string;
  /**
  * Tag entity - one of 'DESTINATION', 'SOURCE', 'NOT_APPLICABLE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#tag_entity Slo#tag_entity}
  */
  readonly tagEntity: string;
  /**
  * Second level key for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#tag_second_level_key Slo#tag_second_level_key}
  */
  readonly tagSecondLevelKey?: string;
}

export function sloObjectiveRawMetricQueryInstanaApplicationGroupByToTerraform(struct?: SloObjectiveRawMetricQueryInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_entity: cdktf.stringToTerraform(struct!.tagEntity),
    tag_second_level_key: cdktf.stringToTerraform(struct!.tagSecondLevelKey),
  }
}


export function sloObjectiveRawMetricQueryInstanaApplicationGroupByToHclTerraform(struct?: SloObjectiveRawMetricQueryInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_entity: {
      value: cdktf.stringToHclTerraform(struct!.tagEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_second_level_key: {
      value: cdktf.stringToHclTerraform(struct!.tagSecondLevelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryInstanaApplicationGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryInstanaApplicationGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagEntity = this._tagEntity;
    }
    if (this._tagSecondLevelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSecondLevelKey = this._tagSecondLevelKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryInstanaApplicationGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._tagEntity = undefined;
      this._tagSecondLevelKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._tagEntity = value.tagEntity;
      this._tagSecondLevelKey = value.tagSecondLevelKey;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_entity - computed: false, optional: false, required: true
  private _tagEntity?: string; 
  public get tagEntity() {
    return this.getStringAttribute('tag_entity');
  }
  public set tagEntity(value: string) {
    this._tagEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagEntityInput() {
    return this._tagEntity;
  }

  // tag_second_level_key - computed: false, optional: true, required: false
  private _tagSecondLevelKey?: string; 
  public get tagSecondLevelKey() {
    return this.getStringAttribute('tag_second_level_key');
  }
  public set tagSecondLevelKey(value: string) {
    this._tagSecondLevelKey = value;
  }
  public resetTagSecondLevelKey() {
    this._tagSecondLevelKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSecondLevelKeyInput() {
    return this._tagSecondLevelKey;
  }
}

export class SloObjectiveRawMetricQueryInstanaApplicationGroupByList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryInstanaApplicationGroupBy[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryInstanaApplicationGroupByOutputReference {
    return new SloObjectiveRawMetricQueryInstanaApplicationGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryInstanaApplication {
  /**
  * Depends on the value specified for 'metric_id'- more info in N9 docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation: string;
  /**
  * API query user passes in a JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#api_query Slo#api_query}
  */
  readonly apiQuery: string;
  /**
  * Include internal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#include_internal Slo#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Include synthetic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#include_synthetic Slo#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
  /**
  * Metric ID one of 'calls', 'erroneousCalls', 'errors', 'latency'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#group_by Slo#group_by}
  */
  readonly groupBy?: SloObjectiveRawMetricQueryInstanaApplicationGroupBy[] | cdktf.IResolvable;
}

export function sloObjectiveRawMetricQueryInstanaApplicationToTerraform(struct?: SloObjectiveRawMetricQueryInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    api_query: cdktf.stringToTerraform(struct!.apiQuery),
    include_internal: cdktf.booleanToTerraform(struct!.includeInternal),
    include_synthetic: cdktf.booleanToTerraform(struct!.includeSynthetic),
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    group_by: cdktf.listMapper(sloObjectiveRawMetricQueryInstanaApplicationGroupByToTerraform, true)(struct!.groupBy),
  }
}


export function sloObjectiveRawMetricQueryInstanaApplicationToHclTerraform(struct?: SloObjectiveRawMetricQueryInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_query: {
      value: cdktf.stringToHclTerraform(struct!.apiQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_internal: {
      value: cdktf.booleanToHclTerraform(struct!.includeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.includeSynthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryInstanaApplicationGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryInstanaApplicationGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryInstanaApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryInstanaApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._apiQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiQuery = this._apiQuery;
    }
    if (this._includeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInternal = this._includeInternal;
    }
    if (this._includeSynthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSynthetic = this._includeSynthetic;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryInstanaApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._apiQuery = undefined;
      this._includeInternal = undefined;
      this._includeSynthetic = undefined;
      this._metricId = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._apiQuery = value.apiQuery;
      this._includeInternal = value.includeInternal;
      this._includeSynthetic = value.includeSynthetic;
      this._metricId = value.metricId;
      this._groupBy.internalValue = value.groupBy;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // api_query - computed: false, optional: false, required: true
  private _apiQuery?: string; 
  public get apiQuery() {
    return this.getStringAttribute('api_query');
  }
  public set apiQuery(value: string) {
    this._apiQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiQueryInput() {
    return this._apiQuery;
  }

  // include_internal - computed: false, optional: true, required: false
  private _includeInternal?: boolean | cdktf.IResolvable; 
  public get includeInternal() {
    return this.getBooleanAttribute('include_internal');
  }
  public set includeInternal(value: boolean | cdktf.IResolvable) {
    this._includeInternal = value;
  }
  public resetIncludeInternal() {
    this._includeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalInput() {
    return this._includeInternal;
  }

  // include_synthetic - computed: false, optional: true, required: false
  private _includeSynthetic?: boolean | cdktf.IResolvable; 
  public get includeSynthetic() {
    return this.getBooleanAttribute('include_synthetic');
  }
  public set includeSynthetic(value: boolean | cdktf.IResolvable) {
    this._includeSynthetic = value;
  }
  public resetIncludeSynthetic() {
    this._includeSynthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSyntheticInput() {
    return this._includeSynthetic;
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new SloObjectiveRawMetricQueryInstanaApplicationGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: SloObjectiveRawMetricQueryInstanaApplicationGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class SloObjectiveRawMetricQueryInstanaApplicationList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryInstanaApplication[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryInstanaApplicationOutputReference {
    return new SloObjectiveRawMetricQueryInstanaApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryInstanaInfrastructure {
  /**
  * Metric ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * Metric retrieval method 'query' or 'snapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_retrieval_method Slo#metric_retrieval_method}
  */
  readonly metricRetrievalMethod: string;
  /**
  * Plugin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#plugin_id Slo#plugin_id}
  */
  readonly pluginId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
  /**
  * Snapshot ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#snapshot_id Slo#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function sloObjectiveRawMetricQueryInstanaInfrastructureToTerraform(struct?: SloObjectiveRawMetricQueryInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    metric_retrieval_method: cdktf.stringToTerraform(struct!.metricRetrievalMethod),
    plugin_id: cdktf.stringToTerraform(struct!.pluginId),
    query: cdktf.stringToTerraform(struct!.query),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function sloObjectiveRawMetricQueryInstanaInfrastructureToHclTerraform(struct?: SloObjectiveRawMetricQueryInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_retrieval_method: {
      value: cdktf.stringToHclTerraform(struct!.metricRetrievalMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_id: {
      value: cdktf.stringToHclTerraform(struct!.pluginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryInstanaInfrastructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryInstanaInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._metricRetrievalMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRetrievalMethod = this._metricRetrievalMethod;
    }
    if (this._pluginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginId = this._pluginId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryInstanaInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricId = undefined;
      this._metricRetrievalMethod = undefined;
      this._pluginId = undefined;
      this._query = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricId = value.metricId;
      this._metricRetrievalMethod = value.metricRetrievalMethod;
      this._pluginId = value.pluginId;
      this._query = value.query;
      this._snapshotId = value.snapshotId;
    }
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_retrieval_method - computed: false, optional: false, required: true
  private _metricRetrievalMethod?: string; 
  public get metricRetrievalMethod() {
    return this.getStringAttribute('metric_retrieval_method');
  }
  public set metricRetrievalMethod(value: string) {
    this._metricRetrievalMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRetrievalMethodInput() {
    return this._metricRetrievalMethod;
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
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

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class SloObjectiveRawMetricQueryInstanaInfrastructureList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryInstanaInfrastructure[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryInstanaInfrastructureOutputReference {
    return new SloObjectiveRawMetricQueryInstanaInfrastructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryInstana {
  /**
  * Instana metric type 'application' or 'infrastructure'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#metric_type Slo#metric_type}
  */
  readonly metricType: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#application Slo#application}
  */
  readonly application?: SloObjectiveRawMetricQueryInstanaApplication[] | cdktf.IResolvable;
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#infrastructure Slo#infrastructure}
  */
  readonly infrastructure?: SloObjectiveRawMetricQueryInstanaInfrastructure[] | cdktf.IResolvable;
}

export function sloObjectiveRawMetricQueryInstanaToTerraform(struct?: SloObjectiveRawMetricQueryInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    application: cdktf.listMapper(sloObjectiveRawMetricQueryInstanaApplicationToTerraform, true)(struct!.application),
    infrastructure: cdktf.listMapper(sloObjectiveRawMetricQueryInstanaInfrastructureToTerraform, true)(struct!.infrastructure),
  }
}


export function sloObjectiveRawMetricQueryInstanaToHclTerraform(struct?: SloObjectiveRawMetricQueryInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryInstanaApplicationToHclTerraform, true)(struct!.application),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryInstanaApplicationList",
    },
    infrastructure: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryInstanaInfrastructureToHclTerraform, true)(struct!.infrastructure),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryInstanaInfrastructureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryInstanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryInstana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryInstana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricType = undefined;
      this._application.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricType = value.metricType;
      this._application.internalValue = value.application;
      this._infrastructure.internalValue = value.infrastructure;
    }
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // application - computed: false, optional: true, required: false
  private _application = new SloObjectiveRawMetricQueryInstanaApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: SloObjectiveRawMetricQueryInstanaApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new SloObjectiveRawMetricQueryInstanaInfrastructureList(this, "infrastructure", false);
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: SloObjectiveRawMetricQueryInstanaInfrastructure[] | cdktf.IResolvable) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }
}

export class SloObjectiveRawMetricQueryInstanaList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryInstana[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryInstanaOutputReference {
    return new SloObjectiveRawMetricQueryInstanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryLightstep {
  /**
  * Optional value to filter by percentiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#percentile Slo#percentile}
  */
  readonly percentile?: number;
  /**
  * ID of the metrics stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#stream_id Slo#stream_id}
  */
  readonly streamId?: string;
  /**
  * Type of data to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#type_of_data Slo#type_of_data}
  */
  readonly typeOfData: string;
  /**
  * UQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#uql Slo#uql}
  */
  readonly uql?: string;
}

export function sloObjectiveRawMetricQueryLightstepToTerraform(struct?: SloObjectiveRawMetricQueryLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile: cdktf.numberToTerraform(struct!.percentile),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    type_of_data: cdktf.stringToTerraform(struct!.typeOfData),
    uql: cdktf.stringToTerraform(struct!.uql),
  }
}


export function sloObjectiveRawMetricQueryLightstepToHclTerraform(struct?: SloObjectiveRawMetricQueryLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_of_data: {
      value: cdktf.stringToHclTerraform(struct!.typeOfData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uql: {
      value: cdktf.stringToHclTerraform(struct!.uql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryLightstepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryLightstep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._typeOfData !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOfData = this._typeOfData;
    }
    if (this._uql !== undefined) {
      hasAnyValues = true;
      internalValueResult.uql = this._uql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryLightstep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentile = undefined;
      this._streamId = undefined;
      this._typeOfData = undefined;
      this._uql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentile = value.percentile;
      this._streamId = value.streamId;
      this._typeOfData = value.typeOfData;
      this._uql = value.uql;
    }
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // stream_id - computed: false, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // type_of_data - computed: false, optional: false, required: true
  private _typeOfData?: string; 
  public get typeOfData() {
    return this.getStringAttribute('type_of_data');
  }
  public set typeOfData(value: string) {
    this._typeOfData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfDataInput() {
    return this._typeOfData;
  }

  // uql - computed: false, optional: true, required: false
  private _uql?: string; 
  public get uql() {
    return this.getStringAttribute('uql');
  }
  public set uql(value: string) {
    this._uql = value;
  }
  public resetUql() {
    this._uql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uqlInput() {
    return this._uql;
  }
}

export class SloObjectiveRawMetricQueryLightstepList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryLightstep[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryLightstepOutputReference {
    return new SloObjectiveRawMetricQueryLightstepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryLogicMonitor {
  /**
  * Checkpoint ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#checkpoint_id Slo#checkpoint_id}
  */
  readonly checkpointId?: string;
  /**
  * Device Datasource Instance ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#device_data_source_instance_id Slo#device_data_source_instance_id}
  */
  readonly deviceDataSourceInstanceId?: number;
  /**
  * Graph ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graph_id Slo#graph_id}
  */
  readonly graphId?: number;
  /**
  * Graph Name. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graph_name Slo#graph_name}
  */
  readonly graphName?: string;
  /**
  * Line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#line Slo#line}
  */
  readonly line: string;
  /**
  * Query type: device_metrics or website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query_type Slo#query_type}
  */
  readonly queryType: string;
  /**
  * Website ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#website_id Slo#website_id}
  */
  readonly websiteId?: string;
}

export function sloObjectiveRawMetricQueryLogicMonitorToTerraform(struct?: SloObjectiveRawMetricQueryLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkpoint_id: cdktf.stringToTerraform(struct!.checkpointId),
    device_data_source_instance_id: cdktf.numberToTerraform(struct!.deviceDataSourceInstanceId),
    graph_id: cdktf.numberToTerraform(struct!.graphId),
    graph_name: cdktf.stringToTerraform(struct!.graphName),
    line: cdktf.stringToTerraform(struct!.line),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    website_id: cdktf.stringToTerraform(struct!.websiteId),
  }
}


export function sloObjectiveRawMetricQueryLogicMonitorToHclTerraform(struct?: SloObjectiveRawMetricQueryLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.checkpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_data_source_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceDataSourceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_id: {
      value: cdktf.numberToHclTerraform(struct!.graphId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_name: {
      value: cdktf.stringToHclTerraform(struct!.graphName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line: {
      value: cdktf.stringToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website_id: {
      value: cdktf.stringToHclTerraform(struct!.websiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryLogicMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryLogicMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointId = this._checkpointId;
    }
    if (this._deviceDataSourceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDataSourceInstanceId = this._deviceDataSourceInstanceId;
    }
    if (this._graphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphId = this._graphId;
    }
    if (this._graphName !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphName = this._graphName;
    }
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._websiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteId = this._websiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryLogicMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkpointId = undefined;
      this._deviceDataSourceInstanceId = undefined;
      this._graphId = undefined;
      this._graphName = undefined;
      this._line = undefined;
      this._queryType = undefined;
      this._websiteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkpointId = value.checkpointId;
      this._deviceDataSourceInstanceId = value.deviceDataSourceInstanceId;
      this._graphId = value.graphId;
      this._graphName = value.graphName;
      this._line = value.line;
      this._queryType = value.queryType;
      this._websiteId = value.websiteId;
    }
  }

  // checkpoint_id - computed: false, optional: true, required: false
  private _checkpointId?: string; 
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }
  public set checkpointId(value: string) {
    this._checkpointId = value;
  }
  public resetCheckpointId() {
    this._checkpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIdInput() {
    return this._checkpointId;
  }

  // device_data_source_instance_id - computed: false, optional: true, required: false
  private _deviceDataSourceInstanceId?: number; 
  public get deviceDataSourceInstanceId() {
    return this.getNumberAttribute('device_data_source_instance_id');
  }
  public set deviceDataSourceInstanceId(value: number) {
    this._deviceDataSourceInstanceId = value;
  }
  public resetDeviceDataSourceInstanceId() {
    this._deviceDataSourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceInstanceIdInput() {
    return this._deviceDataSourceInstanceId;
  }

  // graph_id - computed: false, optional: true, required: false
  private _graphId?: number; 
  public get graphId() {
    return this.getNumberAttribute('graph_id');
  }
  public set graphId(value: number) {
    this._graphId = value;
  }
  public resetGraphId() {
    this._graphId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphIdInput() {
    return this._graphId;
  }

  // graph_name - computed: false, optional: true, required: false
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  public resetGraphName() {
    this._graphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
  }

  // line - computed: false, optional: false, required: true
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // website_id - computed: false, optional: true, required: false
  private _websiteId?: string; 
  public get websiteId() {
    return this.getStringAttribute('website_id');
  }
  public set websiteId(value: string) {
    this._websiteId = value;
  }
  public resetWebsiteId() {
    this._websiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteIdInput() {
    return this._websiteId;
  }
}

export class SloObjectiveRawMetricQueryLogicMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryLogicMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryLogicMonitorOutputReference {
    return new SloObjectiveRawMetricQueryLogicMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryNewrelic {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#nrql Slo#nrql}
  */
  readonly nrql: string;
}

export function sloObjectiveRawMetricQueryNewrelicToTerraform(struct?: SloObjectiveRawMetricQueryNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nrql: cdktf.stringToTerraform(struct!.nrql),
  }
}


export function sloObjectiveRawMetricQueryNewrelicToHclTerraform(struct?: SloObjectiveRawMetricQueryNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nrql: {
      value: cdktf.stringToHclTerraform(struct!.nrql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryNewrelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryNewrelic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nrql !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrql = this._nrql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryNewrelic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nrql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nrql = value.nrql;
    }
  }

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }
}

export class SloObjectiveRawMetricQueryNewrelicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryNewrelic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryNewrelicOutputReference {
    return new SloObjectiveRawMetricQueryNewrelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryOpentsdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveRawMetricQueryOpentsdbToTerraform(struct?: SloObjectiveRawMetricQueryOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveRawMetricQueryOpentsdbToHclTerraform(struct?: SloObjectiveRawMetricQueryOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryOpentsdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryOpentsdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryOpentsdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveRawMetricQueryOpentsdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryOpentsdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryOpentsdbOutputReference {
    return new SloObjectiveRawMetricQueryOpentsdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryPingdom {
  /**
  * Pingdom uptime or transaction check's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#check_id Slo#check_id}
  */
  readonly checkId: string;
  /**
  * Pingdom check type - uptime or transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#check_type Slo#check_type}
  */
  readonly checkType?: string;
  /**
  * Optional for the Uptime checks. Use it to filter the Pingdom check results by status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#status Slo#status}
  */
  readonly status?: string;
}

export function sloObjectiveRawMetricQueryPingdomToTerraform(struct?: SloObjectiveRawMetricQueryPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_id: cdktf.stringToTerraform(struct!.checkId),
    check_type: cdktf.stringToTerraform(struct!.checkType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sloObjectiveRawMetricQueryPingdomToHclTerraform(struct?: SloObjectiveRawMetricQueryPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_type: {
      value: cdktf.stringToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryPingdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryPingdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryPingdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._checkType = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._checkType = value.checkType;
      this._status = value.status;
    }
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // check_type - computed: false, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SloObjectiveRawMetricQueryPingdomList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryPingdom[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryPingdomOutputReference {
    return new SloObjectiveRawMetricQueryPingdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveRawMetricQueryPrometheusToTerraform(struct?: SloObjectiveRawMetricQueryPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveRawMetricQueryPrometheusToHclTerraform(struct?: SloObjectiveRawMetricQueryPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveRawMetricQueryPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryPrometheusOutputReference {
    return new SloObjectiveRawMetricQueryPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryRedshift {
  /**
  * Redshift custer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#cluster_id Slo#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#database_name Slo#database_name}
  */
  readonly databaseName: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Region of the Redshift instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
}

export function sloObjectiveRawMetricQueryRedshiftToTerraform(struct?: SloObjectiveRawMetricQueryRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function sloObjectiveRawMetricQueryRedshiftToHclTerraform(struct?: SloObjectiveRawMetricQueryRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryRedshiftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._databaseName = undefined;
      this._query = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._databaseName = value.databaseName;
      this._query = value.query;
      this._region = value.region;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SloObjectiveRawMetricQueryRedshiftList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryRedshift[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryRedshiftOutputReference {
    return new SloObjectiveRawMetricQueryRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQuerySplunk {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveRawMetricQuerySplunkToTerraform(struct?: SloObjectiveRawMetricQuerySplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveRawMetricQuerySplunkToHclTerraform(struct?: SloObjectiveRawMetricQuerySplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQuerySplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQuerySplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQuerySplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveRawMetricQuerySplunkList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQuerySplunk[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQuerySplunkOutputReference {
    return new SloObjectiveRawMetricQuerySplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQuerySplunkObservability {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#program Slo#program}
  */
  readonly program: string;
}

export function sloObjectiveRawMetricQuerySplunkObservabilityToTerraform(struct?: SloObjectiveRawMetricQuerySplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    program: cdktf.stringToTerraform(struct!.program),
  }
}


export function sloObjectiveRawMetricQuerySplunkObservabilityToHclTerraform(struct?: SloObjectiveRawMetricQuerySplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    program: {
      value: cdktf.stringToHclTerraform(struct!.program),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQuerySplunkObservabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQuerySplunkObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._program !== undefined) {
      hasAnyValues = true;
      internalValueResult.program = this._program;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQuerySplunkObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._program = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._program = value.program;
    }
  }

  // program - computed: false, optional: false, required: true
  private _program?: string; 
  public get program() {
    return this.getStringAttribute('program');
  }
  public set program(value: string) {
    this._program = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programInput() {
    return this._program;
  }
}

export class SloObjectiveRawMetricQuerySplunkObservabilityList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQuerySplunkObservability[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQuerySplunkObservabilityOutputReference {
    return new SloObjectiveRawMetricQuerySplunkObservabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQuerySumologic {
  /**
  * Period of data aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#quantization Slo#quantization}
  */
  readonly quantization?: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Aggregation function - avg, sum, min, max, count, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#rollup Slo#rollup}
  */
  readonly rollup?: string;
  /**
  * Sumologic source - metrics or logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
}

export function sloObjectiveRawMetricQuerySumologicToTerraform(struct?: SloObjectiveRawMetricQuerySumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantization: cdktf.stringToTerraform(struct!.quantization),
    query: cdktf.stringToTerraform(struct!.query),
    rollup: cdktf.stringToTerraform(struct!.rollup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sloObjectiveRawMetricQuerySumologicToHclTerraform(struct?: SloObjectiveRawMetricQuerySumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantization: {
      value: cdktf.stringToHclTerraform(struct!.quantization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollup: {
      value: cdktf.stringToHclTerraform(struct!.rollup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQuerySumologicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQuerySumologic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantization !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantization = this._quantization;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQuerySumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantization = undefined;
      this._query = undefined;
      this._rollup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantization = value.quantization;
      this._query = value.query;
      this._rollup = value.rollup;
      this._type = value.type;
    }
  }

  // quantization - computed: false, optional: true, required: false
  private _quantization?: string; 
  public get quantization() {
    return this.getStringAttribute('quantization');
  }
  public set quantization(value: string) {
    this._quantization = value;
  }
  public resetQuantization() {
    this._quantization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantizationInput() {
    return this._quantization;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rollup - computed: false, optional: true, required: false
  private _rollup?: string; 
  public get rollup() {
    return this.getStringAttribute('rollup');
  }
  public set rollup(value: string) {
    this._rollup = value;
  }
  public resetRollup() {
    this._rollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup;
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
}

export class SloObjectiveRawMetricQuerySumologicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQuerySumologic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQuerySumologicOutputReference {
    return new SloObjectiveRawMetricQuerySumologicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQueryThousandeyes {
  /**
  * ID of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#test_id Slo#test_id}
  */
  readonly testId: number;
  /**
  * Type of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#test_type Slo#test_type}
  */
  readonly testType?: string;
}

export function sloObjectiveRawMetricQueryThousandeyesToTerraform(struct?: SloObjectiveRawMetricQueryThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_id: cdktf.numberToTerraform(struct!.testId),
    test_type: cdktf.stringToTerraform(struct!.testType),
  }
}


export function sloObjectiveRawMetricQueryThousandeyesToHclTerraform(struct?: SloObjectiveRawMetricQueryThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_id: {
      value: cdktf.numberToHclTerraform(struct!.testId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_type: {
      value: cdktf.stringToHclTerraform(struct!.testType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryThousandeyesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQueryThousandeyes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testId !== undefined) {
      hasAnyValues = true;
      internalValueResult.testId = this._testId;
    }
    if (this._testType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testType = this._testType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQueryThousandeyes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testId = undefined;
      this._testType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testId = value.testId;
      this._testType = value.testType;
    }
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: number; 
  public get testId() {
    return this.getNumberAttribute('test_id');
  }
  public set testId(value: number) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // test_type - computed: false, optional: true, required: false
  private _testType?: string; 
  public get testType() {
    return this.getStringAttribute('test_type');
  }
  public set testType(value: string) {
    this._testType = value;
  }
  public resetTestType() {
    this._testType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTypeInput() {
    return this._testType;
  }
}

export class SloObjectiveRawMetricQueryThousandeyesList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQueryThousandeyes[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryThousandeyesOutputReference {
    return new SloObjectiveRawMetricQueryThousandeyesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetricQuery {
  /**
  * amazon_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#amazon_prometheus Slo#amazon_prometheus}
  */
  readonly amazonPrometheus?: SloObjectiveRawMetricQueryAmazonPrometheus[] | cdktf.IResolvable;
  /**
  * appdynamics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#appdynamics Slo#appdynamics}
  */
  readonly appdynamics?: SloObjectiveRawMetricQueryAppdynamics[] | cdktf.IResolvable;
  /**
  * azure_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#azure_monitor Slo#azure_monitor}
  */
  readonly azureMonitor?: SloObjectiveRawMetricQueryAzureMonitor[] | cdktf.IResolvable;
  /**
  * azure_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#azure_prometheus Slo#azure_prometheus}
  */
  readonly azurePrometheus?: SloObjectiveRawMetricQueryAzurePrometheus[] | cdktf.IResolvable;
  /**
  * bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#bigquery Slo#bigquery}
  */
  readonly bigquery?: SloObjectiveRawMetricQueryBigquery[] | cdktf.IResolvable;
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#cloudwatch Slo#cloudwatch}
  */
  readonly cloudwatch?: SloObjectiveRawMetricQueryCloudwatch[] | cdktf.IResolvable;
  /**
  * coralogix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#coralogix Slo#coralogix}
  */
  readonly coralogix?: SloObjectiveRawMetricQueryCoralogix[] | cdktf.IResolvable;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#datadog Slo#datadog}
  */
  readonly datadog?: SloObjectiveRawMetricQueryDatadog[] | cdktf.IResolvable;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#dynatrace Slo#dynatrace}
  */
  readonly dynatrace?: SloObjectiveRawMetricQueryDynatrace[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#elasticsearch Slo#elasticsearch}
  */
  readonly elasticsearch?: SloObjectiveRawMetricQueryElasticsearch[] | cdktf.IResolvable;
  /**
  * gcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#gcm Slo#gcm}
  */
  readonly gcm?: SloObjectiveRawMetricQueryGcm[] | cdktf.IResolvable;
  /**
  * grafana_loki block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#grafana_loki Slo#grafana_loki}
  */
  readonly grafanaLoki?: SloObjectiveRawMetricQueryGrafanaLoki[] | cdktf.IResolvable;
  /**
  * graphite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#graphite Slo#graphite}
  */
  readonly graphite?: SloObjectiveRawMetricQueryGraphite[] | cdktf.IResolvable;
  /**
  * honeycomb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#honeycomb Slo#honeycomb}
  */
  readonly honeycomb?: SloObjectiveRawMetricQueryHoneycomb[] | cdktf.IResolvable;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#influxdb Slo#influxdb}
  */
  readonly influxdb?: SloObjectiveRawMetricQueryInfluxdb[] | cdktf.IResolvable;
  /**
  * instana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#instana Slo#instana}
  */
  readonly instana?: SloObjectiveRawMetricQueryInstana[] | cdktf.IResolvable;
  /**
  * lightstep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#lightstep Slo#lightstep}
  */
  readonly lightstep?: SloObjectiveRawMetricQueryLightstep[] | cdktf.IResolvable;
  /**
  * logic_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#logic_monitor Slo#logic_monitor}
  */
  readonly logicMonitor?: SloObjectiveRawMetricQueryLogicMonitor[] | cdktf.IResolvable;
  /**
  * newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#newrelic Slo#newrelic}
  */
  readonly newrelic?: SloObjectiveRawMetricQueryNewrelic[] | cdktf.IResolvable;
  /**
  * opentsdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#opentsdb Slo#opentsdb}
  */
  readonly opentsdb?: SloObjectiveRawMetricQueryOpentsdb[] | cdktf.IResolvable;
  /**
  * pingdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#pingdom Slo#pingdom}
  */
  readonly pingdom?: SloObjectiveRawMetricQueryPingdom[] | cdktf.IResolvable;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#prometheus Slo#prometheus}
  */
  readonly prometheus?: SloObjectiveRawMetricQueryPrometheus[] | cdktf.IResolvable;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#redshift Slo#redshift}
  */
  readonly redshift?: SloObjectiveRawMetricQueryRedshift[] | cdktf.IResolvable;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#splunk Slo#splunk}
  */
  readonly splunk?: SloObjectiveRawMetricQuerySplunk[] | cdktf.IResolvable;
  /**
  * splunk_observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#splunk_observability Slo#splunk_observability}
  */
  readonly splunkObservability?: SloObjectiveRawMetricQuerySplunkObservability[] | cdktf.IResolvable;
  /**
  * sumologic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#sumologic Slo#sumologic}
  */
  readonly sumologic?: SloObjectiveRawMetricQuerySumologic[] | cdktf.IResolvable;
  /**
  * thousandeyes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#thousandeyes Slo#thousandeyes}
  */
  readonly thousandeyes?: SloObjectiveRawMetricQueryThousandeyes[] | cdktf.IResolvable;
}

export function sloObjectiveRawMetricQueryToTerraform(struct?: SloObjectiveRawMetricQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_prometheus: cdktf.listMapper(sloObjectiveRawMetricQueryAmazonPrometheusToTerraform, true)(struct!.amazonPrometheus),
    appdynamics: cdktf.listMapper(sloObjectiveRawMetricQueryAppdynamicsToTerraform, true)(struct!.appdynamics),
    azure_monitor: cdktf.listMapper(sloObjectiveRawMetricQueryAzureMonitorToTerraform, true)(struct!.azureMonitor),
    azure_prometheus: cdktf.listMapper(sloObjectiveRawMetricQueryAzurePrometheusToTerraform, true)(struct!.azurePrometheus),
    bigquery: cdktf.listMapper(sloObjectiveRawMetricQueryBigqueryToTerraform, true)(struct!.bigquery),
    cloudwatch: cdktf.listMapper(sloObjectiveRawMetricQueryCloudwatchToTerraform, true)(struct!.cloudwatch),
    coralogix: cdktf.listMapper(sloObjectiveRawMetricQueryCoralogixToTerraform, true)(struct!.coralogix),
    datadog: cdktf.listMapper(sloObjectiveRawMetricQueryDatadogToTerraform, true)(struct!.datadog),
    dynatrace: cdktf.listMapper(sloObjectiveRawMetricQueryDynatraceToTerraform, true)(struct!.dynatrace),
    elasticsearch: cdktf.listMapper(sloObjectiveRawMetricQueryElasticsearchToTerraform, true)(struct!.elasticsearch),
    gcm: cdktf.listMapper(sloObjectiveRawMetricQueryGcmToTerraform, true)(struct!.gcm),
    grafana_loki: cdktf.listMapper(sloObjectiveRawMetricQueryGrafanaLokiToTerraform, true)(struct!.grafanaLoki),
    graphite: cdktf.listMapper(sloObjectiveRawMetricQueryGraphiteToTerraform, true)(struct!.graphite),
    honeycomb: cdktf.listMapper(sloObjectiveRawMetricQueryHoneycombToTerraform, true)(struct!.honeycomb),
    influxdb: cdktf.listMapper(sloObjectiveRawMetricQueryInfluxdbToTerraform, true)(struct!.influxdb),
    instana: cdktf.listMapper(sloObjectiveRawMetricQueryInstanaToTerraform, true)(struct!.instana),
    lightstep: cdktf.listMapper(sloObjectiveRawMetricQueryLightstepToTerraform, true)(struct!.lightstep),
    logic_monitor: cdktf.listMapper(sloObjectiveRawMetricQueryLogicMonitorToTerraform, true)(struct!.logicMonitor),
    newrelic: cdktf.listMapper(sloObjectiveRawMetricQueryNewrelicToTerraform, true)(struct!.newrelic),
    opentsdb: cdktf.listMapper(sloObjectiveRawMetricQueryOpentsdbToTerraform, true)(struct!.opentsdb),
    pingdom: cdktf.listMapper(sloObjectiveRawMetricQueryPingdomToTerraform, true)(struct!.pingdom),
    prometheus: cdktf.listMapper(sloObjectiveRawMetricQueryPrometheusToTerraform, true)(struct!.prometheus),
    redshift: cdktf.listMapper(sloObjectiveRawMetricQueryRedshiftToTerraform, true)(struct!.redshift),
    splunk: cdktf.listMapper(sloObjectiveRawMetricQuerySplunkToTerraform, true)(struct!.splunk),
    splunk_observability: cdktf.listMapper(sloObjectiveRawMetricQuerySplunkObservabilityToTerraform, true)(struct!.splunkObservability),
    sumologic: cdktf.listMapper(sloObjectiveRawMetricQuerySumologicToTerraform, true)(struct!.sumologic),
    thousandeyes: cdktf.listMapper(sloObjectiveRawMetricQueryThousandeyesToTerraform, true)(struct!.thousandeyes),
  }
}


export function sloObjectiveRawMetricQueryToHclTerraform(struct?: SloObjectiveRawMetricQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryAmazonPrometheusToHclTerraform, true)(struct!.amazonPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryAmazonPrometheusList",
    },
    appdynamics: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryAppdynamicsToHclTerraform, true)(struct!.appdynamics),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryAppdynamicsList",
    },
    azure_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryAzureMonitorToHclTerraform, true)(struct!.azureMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryAzureMonitorList",
    },
    azure_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryAzurePrometheusToHclTerraform, true)(struct!.azurePrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryAzurePrometheusList",
    },
    bigquery: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryBigqueryToHclTerraform, true)(struct!.bigquery),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryBigqueryList",
    },
    cloudwatch: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryCloudwatchToHclTerraform, true)(struct!.cloudwatch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryCloudwatchList",
    },
    coralogix: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryCoralogixToHclTerraform, true)(struct!.coralogix),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryCoralogixList",
    },
    datadog: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryDatadogToHclTerraform, true)(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryDatadogList",
    },
    dynatrace: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryDynatraceToHclTerraform, true)(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryDynatraceList",
    },
    elasticsearch: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryElasticsearchToHclTerraform, true)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryElasticsearchList",
    },
    gcm: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryGcmToHclTerraform, true)(struct!.gcm),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryGcmList",
    },
    grafana_loki: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryGrafanaLokiToHclTerraform, true)(struct!.grafanaLoki),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryGrafanaLokiList",
    },
    graphite: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryGraphiteToHclTerraform, true)(struct!.graphite),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryGraphiteList",
    },
    honeycomb: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryHoneycombToHclTerraform, true)(struct!.honeycomb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryHoneycombList",
    },
    influxdb: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryInfluxdbToHclTerraform, true)(struct!.influxdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryInfluxdbList",
    },
    instana: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryInstanaToHclTerraform, true)(struct!.instana),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryInstanaList",
    },
    lightstep: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryLightstepToHclTerraform, true)(struct!.lightstep),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryLightstepList",
    },
    logic_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryLogicMonitorToHclTerraform, true)(struct!.logicMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryLogicMonitorList",
    },
    newrelic: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryNewrelicToHclTerraform, true)(struct!.newrelic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryNewrelicList",
    },
    opentsdb: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryOpentsdbToHclTerraform, true)(struct!.opentsdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryOpentsdbList",
    },
    pingdom: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryPingdomToHclTerraform, true)(struct!.pingdom),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryPingdomList",
    },
    prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryPrometheusToHclTerraform, true)(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryPrometheusList",
    },
    redshift: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryRedshiftToHclTerraform, true)(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryRedshiftList",
    },
    splunk: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQuerySplunkToHclTerraform, true)(struct!.splunk),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQuerySplunkList",
    },
    splunk_observability: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQuerySplunkObservabilityToHclTerraform, true)(struct!.splunkObservability),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQuerySplunkObservabilityList",
    },
    sumologic: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQuerySumologicToHclTerraform, true)(struct!.sumologic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQuerySumologicList",
    },
    thousandeyes: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryThousandeyesToHclTerraform, true)(struct!.thousandeyes),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryThousandeyesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetricQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonPrometheus = this._amazonPrometheus?.internalValue;
    }
    if (this._appdynamics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appdynamics = this._appdynamics?.internalValue;
    }
    if (this._azureMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMonitor = this._azureMonitor?.internalValue;
    }
    if (this._azurePrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePrometheus = this._azurePrometheus?.internalValue;
    }
    if (this._bigquery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigquery = this._bigquery?.internalValue;
    }
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._coralogix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coralogix = this._coralogix?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._gcm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcm = this._gcm?.internalValue;
    }
    if (this._grafanaLoki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaLoki = this._grafanaLoki?.internalValue;
    }
    if (this._graphite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite?.internalValue;
    }
    if (this._honeycomb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycomb = this._honeycomb?.internalValue;
    }
    if (this._influxdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb?.internalValue;
    }
    if (this._instana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instana = this._instana?.internalValue;
    }
    if (this._lightstep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightstep = this._lightstep?.internalValue;
    }
    if (this._logicMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicMonitor = this._logicMonitor?.internalValue;
    }
    if (this._newrelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelic = this._newrelic?.internalValue;
    }
    if (this._opentsdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentsdb = this._opentsdb?.internalValue;
    }
    if (this._pingdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingdom = this._pingdom?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._splunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunk = this._splunk?.internalValue;
    }
    if (this._splunkObservability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkObservability = this._splunkObservability?.internalValue;
    }
    if (this._sumologic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumologic = this._sumologic?.internalValue;
    }
    if (this._thousandeyes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandeyes = this._thousandeyes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetricQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = undefined;
      this._appdynamics.internalValue = undefined;
      this._azureMonitor.internalValue = undefined;
      this._azurePrometheus.internalValue = undefined;
      this._bigquery.internalValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._coralogix.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._gcm.internalValue = undefined;
      this._grafanaLoki.internalValue = undefined;
      this._graphite.internalValue = undefined;
      this._honeycomb.internalValue = undefined;
      this._influxdb.internalValue = undefined;
      this._instana.internalValue = undefined;
      this._lightstep.internalValue = undefined;
      this._logicMonitor.internalValue = undefined;
      this._newrelic.internalValue = undefined;
      this._opentsdb.internalValue = undefined;
      this._pingdom.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._splunk.internalValue = undefined;
      this._splunkObservability.internalValue = undefined;
      this._sumologic.internalValue = undefined;
      this._thousandeyes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = value.amazonPrometheus;
      this._appdynamics.internalValue = value.appdynamics;
      this._azureMonitor.internalValue = value.azureMonitor;
      this._azurePrometheus.internalValue = value.azurePrometheus;
      this._bigquery.internalValue = value.bigquery;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._coralogix.internalValue = value.coralogix;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._gcm.internalValue = value.gcm;
      this._grafanaLoki.internalValue = value.grafanaLoki;
      this._graphite.internalValue = value.graphite;
      this._honeycomb.internalValue = value.honeycomb;
      this._influxdb.internalValue = value.influxdb;
      this._instana.internalValue = value.instana;
      this._lightstep.internalValue = value.lightstep;
      this._logicMonitor.internalValue = value.logicMonitor;
      this._newrelic.internalValue = value.newrelic;
      this._opentsdb.internalValue = value.opentsdb;
      this._pingdom.internalValue = value.pingdom;
      this._prometheus.internalValue = value.prometheus;
      this._redshift.internalValue = value.redshift;
      this._splunk.internalValue = value.splunk;
      this._splunkObservability.internalValue = value.splunkObservability;
      this._sumologic.internalValue = value.sumologic;
      this._thousandeyes.internalValue = value.thousandeyes;
    }
  }

  // amazon_prometheus - computed: false, optional: true, required: false
  private _amazonPrometheus = new SloObjectiveRawMetricQueryAmazonPrometheusList(this, "amazon_prometheus", false);
  public get amazonPrometheus() {
    return this._amazonPrometheus;
  }
  public putAmazonPrometheus(value: SloObjectiveRawMetricQueryAmazonPrometheus[] | cdktf.IResolvable) {
    this._amazonPrometheus.internalValue = value;
  }
  public resetAmazonPrometheus() {
    this._amazonPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonPrometheusInput() {
    return this._amazonPrometheus.internalValue;
  }

  // appdynamics - computed: false, optional: true, required: false
  private _appdynamics = new SloObjectiveRawMetricQueryAppdynamicsList(this, "appdynamics", false);
  public get appdynamics() {
    return this._appdynamics;
  }
  public putAppdynamics(value: SloObjectiveRawMetricQueryAppdynamics[] | cdktf.IResolvable) {
    this._appdynamics.internalValue = value;
  }
  public resetAppdynamics() {
    this._appdynamics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appdynamicsInput() {
    return this._appdynamics.internalValue;
  }

  // azure_monitor - computed: false, optional: true, required: false
  private _azureMonitor = new SloObjectiveRawMetricQueryAzureMonitorList(this, "azure_monitor", false);
  public get azureMonitor() {
    return this._azureMonitor;
  }
  public putAzureMonitor(value: SloObjectiveRawMetricQueryAzureMonitor[] | cdktf.IResolvable) {
    this._azureMonitor.internalValue = value;
  }
  public resetAzureMonitor() {
    this._azureMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorInput() {
    return this._azureMonitor.internalValue;
  }

  // azure_prometheus - computed: false, optional: true, required: false
  private _azurePrometheus = new SloObjectiveRawMetricQueryAzurePrometheusList(this, "azure_prometheus", false);
  public get azurePrometheus() {
    return this._azurePrometheus;
  }
  public putAzurePrometheus(value: SloObjectiveRawMetricQueryAzurePrometheus[] | cdktf.IResolvable) {
    this._azurePrometheus.internalValue = value;
  }
  public resetAzurePrometheus() {
    this._azurePrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrometheusInput() {
    return this._azurePrometheus.internalValue;
  }

  // bigquery - computed: false, optional: true, required: false
  private _bigquery = new SloObjectiveRawMetricQueryBigqueryList(this, "bigquery", false);
  public get bigquery() {
    return this._bigquery;
  }
  public putBigquery(value: SloObjectiveRawMetricQueryBigquery[] | cdktf.IResolvable) {
    this._bigquery.internalValue = value;
  }
  public resetBigquery() {
    this._bigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryInput() {
    return this._bigquery.internalValue;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new SloObjectiveRawMetricQueryCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: SloObjectiveRawMetricQueryCloudwatch[] | cdktf.IResolvable) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // coralogix - computed: false, optional: true, required: false
  private _coralogix = new SloObjectiveRawMetricQueryCoralogixList(this, "coralogix", false);
  public get coralogix() {
    return this._coralogix;
  }
  public putCoralogix(value: SloObjectiveRawMetricQueryCoralogix[] | cdktf.IResolvable) {
    this._coralogix.internalValue = value;
  }
  public resetCoralogix() {
    this._coralogix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coralogixInput() {
    return this._coralogix.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new SloObjectiveRawMetricQueryDatadogList(this, "datadog", false);
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: SloObjectiveRawMetricQueryDatadog[] | cdktf.IResolvable) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new SloObjectiveRawMetricQueryDynatraceList(this, "dynatrace", false);
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: SloObjectiveRawMetricQueryDynatrace[] | cdktf.IResolvable) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new SloObjectiveRawMetricQueryElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: SloObjectiveRawMetricQueryElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // gcm - computed: false, optional: true, required: false
  private _gcm = new SloObjectiveRawMetricQueryGcmList(this, "gcm", false);
  public get gcm() {
    return this._gcm;
  }
  public putGcm(value: SloObjectiveRawMetricQueryGcm[] | cdktf.IResolvable) {
    this._gcm.internalValue = value;
  }
  public resetGcm() {
    this._gcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmInput() {
    return this._gcm.internalValue;
  }

  // grafana_loki - computed: false, optional: true, required: false
  private _grafanaLoki = new SloObjectiveRawMetricQueryGrafanaLokiList(this, "grafana_loki", false);
  public get grafanaLoki() {
    return this._grafanaLoki;
  }
  public putGrafanaLoki(value: SloObjectiveRawMetricQueryGrafanaLoki[] | cdktf.IResolvable) {
    this._grafanaLoki.internalValue = value;
  }
  public resetGrafanaLoki() {
    this._grafanaLoki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaLokiInput() {
    return this._grafanaLoki.internalValue;
  }

  // graphite - computed: false, optional: true, required: false
  private _graphite = new SloObjectiveRawMetricQueryGraphiteList(this, "graphite", false);
  public get graphite() {
    return this._graphite;
  }
  public putGraphite(value: SloObjectiveRawMetricQueryGraphite[] | cdktf.IResolvable) {
    this._graphite.internalValue = value;
  }
  public resetGraphite() {
    this._graphite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite.internalValue;
  }

  // honeycomb - computed: false, optional: true, required: false
  private _honeycomb = new SloObjectiveRawMetricQueryHoneycombList(this, "honeycomb", false);
  public get honeycomb() {
    return this._honeycomb;
  }
  public putHoneycomb(value: SloObjectiveRawMetricQueryHoneycomb[] | cdktf.IResolvable) {
    this._honeycomb.internalValue = value;
  }
  public resetHoneycomb() {
    this._honeycomb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycombInput() {
    return this._honeycomb.internalValue;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new SloObjectiveRawMetricQueryInfluxdbList(this, "influxdb", false);
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: SloObjectiveRawMetricQueryInfluxdb[] | cdktf.IResolvable) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // instana - computed: false, optional: true, required: false
  private _instana = new SloObjectiveRawMetricQueryInstanaList(this, "instana", false);
  public get instana() {
    return this._instana;
  }
  public putInstana(value: SloObjectiveRawMetricQueryInstana[] | cdktf.IResolvable) {
    this._instana.internalValue = value;
  }
  public resetInstana() {
    this._instana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanaInput() {
    return this._instana.internalValue;
  }

  // lightstep - computed: false, optional: true, required: false
  private _lightstep = new SloObjectiveRawMetricQueryLightstepList(this, "lightstep", false);
  public get lightstep() {
    return this._lightstep;
  }
  public putLightstep(value: SloObjectiveRawMetricQueryLightstep[] | cdktf.IResolvable) {
    this._lightstep.internalValue = value;
  }
  public resetLightstep() {
    this._lightstep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepInput() {
    return this._lightstep.internalValue;
  }

  // logic_monitor - computed: false, optional: true, required: false
  private _logicMonitor = new SloObjectiveRawMetricQueryLogicMonitorList(this, "logic_monitor", false);
  public get logicMonitor() {
    return this._logicMonitor;
  }
  public putLogicMonitor(value: SloObjectiveRawMetricQueryLogicMonitor[] | cdktf.IResolvable) {
    this._logicMonitor.internalValue = value;
  }
  public resetLogicMonitor() {
    this._logicMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicMonitorInput() {
    return this._logicMonitor.internalValue;
  }

  // newrelic - computed: false, optional: true, required: false
  private _newrelic = new SloObjectiveRawMetricQueryNewrelicList(this, "newrelic", false);
  public get newrelic() {
    return this._newrelic;
  }
  public putNewrelic(value: SloObjectiveRawMetricQueryNewrelic[] | cdktf.IResolvable) {
    this._newrelic.internalValue = value;
  }
  public resetNewrelic() {
    this._newrelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicInput() {
    return this._newrelic.internalValue;
  }

  // opentsdb - computed: false, optional: true, required: false
  private _opentsdb = new SloObjectiveRawMetricQueryOpentsdbList(this, "opentsdb", false);
  public get opentsdb() {
    return this._opentsdb;
  }
  public putOpentsdb(value: SloObjectiveRawMetricQueryOpentsdb[] | cdktf.IResolvable) {
    this._opentsdb.internalValue = value;
  }
  public resetOpentsdb() {
    this._opentsdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentsdbInput() {
    return this._opentsdb.internalValue;
  }

  // pingdom - computed: false, optional: true, required: false
  private _pingdom = new SloObjectiveRawMetricQueryPingdomList(this, "pingdom", false);
  public get pingdom() {
    return this._pingdom;
  }
  public putPingdom(value: SloObjectiveRawMetricQueryPingdom[] | cdktf.IResolvable) {
    this._pingdom.internalValue = value;
  }
  public resetPingdom() {
    this._pingdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomInput() {
    return this._pingdom.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new SloObjectiveRawMetricQueryPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: SloObjectiveRawMetricQueryPrometheus[] | cdktf.IResolvable) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new SloObjectiveRawMetricQueryRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: SloObjectiveRawMetricQueryRedshift[] | cdktf.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new SloObjectiveRawMetricQuerySplunkList(this, "splunk", false);
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: SloObjectiveRawMetricQuerySplunk[] | cdktf.IResolvable) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // splunk_observability - computed: false, optional: true, required: false
  private _splunkObservability = new SloObjectiveRawMetricQuerySplunkObservabilityList(this, "splunk_observability", false);
  public get splunkObservability() {
    return this._splunkObservability;
  }
  public putSplunkObservability(value: SloObjectiveRawMetricQuerySplunkObservability[] | cdktf.IResolvable) {
    this._splunkObservability.internalValue = value;
  }
  public resetSplunkObservability() {
    this._splunkObservability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkObservabilityInput() {
    return this._splunkObservability.internalValue;
  }

  // sumologic - computed: false, optional: true, required: false
  private _sumologic = new SloObjectiveRawMetricQuerySumologicList(this, "sumologic", false);
  public get sumologic() {
    return this._sumologic;
  }
  public putSumologic(value: SloObjectiveRawMetricQuerySumologic[] | cdktf.IResolvable) {
    this._sumologic.internalValue = value;
  }
  public resetSumologic() {
    this._sumologic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicInput() {
    return this._sumologic.internalValue;
  }

  // thousandeyes - computed: false, optional: true, required: false
  private _thousandeyes = new SloObjectiveRawMetricQueryThousandeyesList(this, "thousandeyes", false);
  public get thousandeyes() {
    return this._thousandeyes;
  }
  public putThousandeyes(value: SloObjectiveRawMetricQueryThousandeyes[] | cdktf.IResolvable) {
    this._thousandeyes.internalValue = value;
  }
  public resetThousandeyes() {
    this._thousandeyes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandeyesInput() {
    return this._thousandeyes.internalValue;
  }
}

export class SloObjectiveRawMetricQueryList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetricQuery[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricQueryOutputReference {
    return new SloObjectiveRawMetricQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveRawMetric {
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: SloObjectiveRawMetricQuery[] | cdktf.IResolvable;
}

export function sloObjectiveRawMetricToTerraform(struct?: SloObjectiveRawMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.listMapper(sloObjectiveRawMetricQueryToTerraform, true)(struct!.query),
  }
}


export function sloObjectiveRawMetricToHclTerraform(struct?: SloObjectiveRawMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveRawMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveRawMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveRawMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query.internalValue = value.query;
    }
  }

  // query - computed: false, optional: true, required: false
  private _query = new SloObjectiveRawMetricQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: SloObjectiveRawMetricQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class SloObjectiveRawMetricList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveRawMetric[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveRawMetricOutputReference {
    return new SloObjectiveRawMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjective {
  /**
  * Name to be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#display_name Slo#display_name}
  */
  readonly displayName?: string;
  /**
  * Objective's name. This field is computed if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#name Slo#name}
  */
  readonly name?: string;
  /**
  * For threshold metrics, the logical operator applied to the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#op Slo#op}
  */
  readonly op?: string;
  /**
  * Is objective marked as primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#primary Slo#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The numeric target for your objective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#target Slo#target}
  */
  readonly target: number;
  /**
  * Designated value for slice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#time_slice_target Slo#time_slice_target}
  */
  readonly timeSliceTarget?: number;
  /**
  * Required for threshold and ratio metrics. Optional for existing composite SLOs. For threshold metrics, the threshold value. For ratio metrics, this must be a unique value per objective (for legacy reasons). For new composite SLOs, it must be omitted. If, for composite SLO, it was set previously to a non-zero value, then it must remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#value Slo#value}
  */
  readonly value?: number;
  /**
  * composite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#composite Slo#composite}
  */
  readonly composite?: SloObjectiveComposite[] | cdktf.IResolvable;
  /**
  * count_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#count_metrics Slo#count_metrics}
  */
  readonly countMetrics?: SloObjectiveCountMetrics[] | cdktf.IResolvable;
  /**
  * raw_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#raw_metric Slo#raw_metric}
  */
  readonly rawMetric?: SloObjectiveRawMetric[] | cdktf.IResolvable;
}

export function sloObjectiveToTerraform(struct?: SloObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
    op: cdktf.stringToTerraform(struct!.op),
    primary: cdktf.booleanToTerraform(struct!.primary),
    target: cdktf.numberToTerraform(struct!.target),
    time_slice_target: cdktf.numberToTerraform(struct!.timeSliceTarget),
    value: cdktf.numberToTerraform(struct!.value),
    composite: cdktf.listMapper(sloObjectiveCompositeToTerraform, true)(struct!.composite),
    count_metrics: cdktf.listMapper(sloObjectiveCountMetricsToTerraform, true)(struct!.countMetrics),
    raw_metric: cdktf.listMapper(sloObjectiveRawMetricToTerraform, true)(struct!.rawMetric),
  }
}


export function sloObjectiveToHclTerraform(struct?: SloObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_slice_target: {
      value: cdktf.numberToHclTerraform(struct!.timeSliceTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    composite: {
      value: cdktf.listMapperHcl(sloObjectiveCompositeToHclTerraform, true)(struct!.composite),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCompositeList",
    },
    count_metrics: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsToHclTerraform, true)(struct!.countMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsList",
    },
    raw_metric: {
      value: cdktf.listMapperHcl(sloObjectiveRawMetricToHclTerraform, true)(struct!.rawMetric),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveRawMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjective | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeSliceTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSliceTarget = this._timeSliceTarget;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._composite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite?.internalValue;
    }
    if (this._countMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countMetrics = this._countMetrics?.internalValue;
    }
    if (this._rawMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawMetric = this._rawMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjective | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
      this._op = undefined;
      this._primary = undefined;
      this._target = undefined;
      this._timeSliceTarget = undefined;
      this._value = undefined;
      this._composite.internalValue = undefined;
      this._countMetrics.internalValue = undefined;
      this._rawMetric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
      this._op = value.op;
      this._primary = value.primary;
      this._target = value.target;
      this._timeSliceTarget = value.timeSliceTarget;
      this._value = value.value;
      this._composite.internalValue = value.composite;
      this._countMetrics.internalValue = value.countMetrics;
      this._rawMetric.internalValue = value.rawMetric;
    }
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

  // name - computed: true, optional: true, required: false
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

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // time_slice_target - computed: false, optional: true, required: false
  private _timeSliceTarget?: number; 
  public get timeSliceTarget() {
    return this.getNumberAttribute('time_slice_target');
  }
  public set timeSliceTarget(value: number) {
    this._timeSliceTarget = value;
  }
  public resetTimeSliceTarget() {
    this._timeSliceTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSliceTargetInput() {
    return this._timeSliceTarget;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // composite - computed: false, optional: true, required: false
  private _composite = new SloObjectiveCompositeList(this, "composite", false);
  public get composite() {
    return this._composite;
  }
  public putComposite(value: SloObjectiveComposite[] | cdktf.IResolvable) {
    this._composite.internalValue = value;
  }
  public resetComposite() {
    this._composite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite.internalValue;
  }

  // count_metrics - computed: false, optional: true, required: false
  private _countMetrics = new SloObjectiveCountMetricsList(this, "count_metrics", false);
  public get countMetrics() {
    return this._countMetrics;
  }
  public putCountMetrics(value: SloObjectiveCountMetrics[] | cdktf.IResolvable) {
    this._countMetrics.internalValue = value;
  }
  public resetCountMetrics() {
    this._countMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countMetricsInput() {
    return this._countMetrics.internalValue;
  }

  // raw_metric - computed: false, optional: true, required: false
  private _rawMetric = new SloObjectiveRawMetricList(this, "raw_metric", false);
  public get rawMetric() {
    return this._rawMetric;
  }
  public putRawMetric(value: SloObjectiveRawMetric[] | cdktf.IResolvable) {
    this._rawMetric.internalValue = value;
  }
  public resetRawMetric() {
    this._rawMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawMetricInput() {
    return this._rawMetric.internalValue;
  }
}

export class SloObjectiveList extends cdktf.ComplexList {
  public internalValue? : SloObjective[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveOutputReference {
    return new SloObjectiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloTimeWindowCalendar {
  /**
  * Date of the start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#start_time Slo#start_time}
  */
  readonly startTime: string;
  /**
  * Timezone name in IANA Time Zone Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#time_zone Slo#time_zone}
  */
  readonly timeZone: string;
}

export function sloTimeWindowCalendarToTerraform(struct?: SloTimeWindowCalendar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function sloTimeWindowCalendarToHclTerraform(struct?: SloTimeWindowCalendar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloTimeWindowCalendarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloTimeWindowCalendar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloTimeWindowCalendar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class SloTimeWindowCalendarList extends cdktf.ComplexList {
  public internalValue? : SloTimeWindowCalendar[] | cdktf.IResolvable

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
  public get(index: number): SloTimeWindowCalendarOutputReference {
    return new SloTimeWindowCalendarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloTimeWindow {
  /**
  * Count of the time unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#count Slo#count}
  */
  readonly count: number;
  /**
  * Is the window moving or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#is_rolling Slo#is_rolling}
  */
  readonly isRolling?: boolean | cdktf.IResolvable;
  /**
  * Unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#unit Slo#unit}
  */
  readonly unit: string;
  /**
  * calendar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/slo#calendar Slo#calendar}
  */
  readonly calendar?: SloTimeWindowCalendar[] | cdktf.IResolvable;
}

export function sloTimeWindowToTerraform(struct?: SloTimeWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    is_rolling: cdktf.booleanToTerraform(struct!.isRolling),
    unit: cdktf.stringToTerraform(struct!.unit),
    calendar: cdktf.listMapper(sloTimeWindowCalendarToTerraform, true)(struct!.calendar),
  }
}


export function sloTimeWindowToHclTerraform(struct?: SloTimeWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_rolling: {
      value: cdktf.booleanToHclTerraform(struct!.isRolling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calendar: {
      value: cdktf.listMapperHcl(sloTimeWindowCalendarToHclTerraform, true)(struct!.calendar),
      isBlock: true,
      type: "list",
      storageClassType: "SloTimeWindowCalendarList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloTimeWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloTimeWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._isRolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRolling = this._isRolling;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._calendar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendar = this._calendar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloTimeWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._isRolling = undefined;
      this._unit = undefined;
      this._calendar.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._isRolling = value.isRolling;
      this._unit = value.unit;
      this._calendar.internalValue = value.calendar;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // is_rolling - computed: true, optional: true, required: false
  private _isRolling?: boolean | cdktf.IResolvable; 
  public get isRolling() {
    return this.getBooleanAttribute('is_rolling');
  }
  public set isRolling(value: boolean | cdktf.IResolvable) {
    this._isRolling = value;
  }
  public resetIsRolling() {
    this._isRolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRollingInput() {
    return this._isRolling;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // calendar - computed: false, optional: true, required: false
  private _calendar = new SloTimeWindowCalendarList(this, "calendar", false);
  public get calendar() {
    return this._calendar;
  }
  public putCalendar(value: SloTimeWindowCalendar[] | cdktf.IResolvable) {
    this._calendar.internalValue = value;
  }
  public resetCalendar() {
    this._calendar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarInput() {
    return this._calendar.internalValue;
  }
}

export class SloTimeWindowList extends cdktf.ComplexList {
  public internalValue? : SloTimeWindow[] | cdktf.IResolvable

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
  public get(index: number): SloTimeWindowOutputReference {
    return new SloTimeWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
