import * as cdktf from 'cdktf';
export interface PathTraceItemDetailedStatus {
}

export function pathTraceItemDetailedStatusToTerraform(struct?: PathTraceItemDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemDetailedStatusToHclTerraform(struct?: PathTraceItemDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemDetailedStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemDetailedStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemDetailedStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_trace_calculation - computed: true, optional: false, required: false
  public get aclTraceCalculation() {
    return this.getStringAttribute('acl_trace_calculation');
  }

  // acl_trace_calculation_failure_reason - computed: true, optional: false, required: false
  public get aclTraceCalculationFailureReason() {
    return this.getStringAttribute('acl_trace_calculation_failure_reason');
  }
}

export class PathTraceItemDetailedStatusList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemDetailedStatusOutputReference {
    return new PathTraceItemDetailedStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsAccuracyListStruct {
}

export function pathTraceItemNetworkElementsAccuracyListStructToTerraform(struct?: PathTraceItemNetworkElementsAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsAccuracyListStructToHclTerraform(struct?: PathTraceItemNetworkElementsAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsAccuracyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsAccuracyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsAccuracyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class PathTraceItemNetworkElementsAccuracyListStructList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsAccuracyListStructOutputReference {
    return new PathTraceItemNetworkElementsAccuracyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsDetailedStatus {
}

export function pathTraceItemNetworkElementsDetailedStatusToTerraform(struct?: PathTraceItemNetworkElementsDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsDetailedStatusToHclTerraform(struct?: PathTraceItemNetworkElementsDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsDetailedStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsDetailedStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsDetailedStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_trace_calculation - computed: true, optional: false, required: false
  public get aclTraceCalculation() {
    return this.getStringAttribute('acl_trace_calculation');
  }

  // acl_trace_calculation_failure_reason - computed: true, optional: false, required: false
  public get aclTraceCalculationFailureReason() {
    return this.getStringAttribute('acl_trace_calculation_failure_reason');
  }
}

export class PathTraceItemNetworkElementsDetailedStatusList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsDetailedStatusOutputReference {
    return new PathTraceItemNetworkElementsDetailedStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsDeviceStatisticsCpuStatistics {
}

export function pathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsToTerraform(struct?: PathTraceItemNetworkElementsDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsDeviceStatisticsCpuStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsDeviceStatisticsCpuStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // five_min_usage_in_percentage - computed: true, optional: false, required: false
  public get fiveMinUsageInPercentage() {
    return this.getNumberAttribute('five_min_usage_in_percentage');
  }

  // five_secs_usage_in_percentage - computed: true, optional: false, required: false
  public get fiveSecsUsageInPercentage() {
    return this.getNumberAttribute('five_secs_usage_in_percentage');
  }

  // one_min_usage_in_percentage - computed: true, optional: false, required: false
  public get oneMinUsageInPercentage() {
    return this.getNumberAttribute('one_min_usage_in_percentage');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsOutputReference {
    return new PathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics {
}

export function pathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsToTerraform(struct?: PathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_usage - computed: true, optional: false, required: false
  public get memoryUsage() {
    return this.getNumberAttribute('memory_usage');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }

  // total_memory - computed: true, optional: false, required: false
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }
}

export class PathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsOutputReference {
    return new PathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsDeviceStatistics {
}

export function pathTraceItemNetworkElementsDeviceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsDeviceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsDeviceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsDeviceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsDeviceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_statistics - computed: true, optional: false, required: false
  private _cpuStatistics = new PathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsList(this, "cpu_statistics", false);
  public get cpuStatistics() {
    return this._cpuStatistics;
  }

  // memory_statistics - computed: true, optional: false, required: false
  private _memoryStatistics = new PathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsList(this, "memory_statistics", false);
  public get memoryStatistics() {
    return this._memoryStatistics;
  }
}

export class PathTraceItemNetworkElementsDeviceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsDeviceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsDeviceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressPhysicalInterface {
}

export function pathTraceItemNetworkElementsEgressPhysicalInterfaceToTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressPhysicalInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsEgressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressPhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressPhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new PathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class PathTraceItemNetworkElementsEgressPhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressPhysicalInterfaceOutputReference {
    return new PathTraceItemNetworkElementsEgressPhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsEgressVirtualInterface {
}

export function pathTraceItemNetworkElementsEgressVirtualInterfaceToTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsEgressVirtualInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsEgressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsEgressVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsEgressVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new PathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class PathTraceItemNetworkElementsEgressVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsEgressVirtualInterfaceOutputReference {
    return new PathTraceItemNetworkElementsEgressVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectEgressAclAnalysis {
}

export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectEgressAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectEgressAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnectIngressAclAnalysis {
}

export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectIngressAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnectIngressAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsFlexConnect {
}

export function pathTraceItemNetworkElementsFlexConnectToTerraform(struct?: PathTraceItemNetworkElementsFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsFlexConnectToHclTerraform(struct?: PathTraceItemNetworkElementsFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsFlexConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsFlexConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsFlexConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // data_switching - computed: true, optional: false, required: false
  public get dataSwitching() {
    return this.getStringAttribute('data_switching');
  }

  // egress_acl_analysis - computed: true, optional: false, required: false
  private _egressAclAnalysis = new PathTraceItemNetworkElementsFlexConnectEgressAclAnalysisList(this, "egress_acl_analysis", false);
  public get egressAclAnalysis() {
    return this._egressAclAnalysis;
  }

  // ingress_acl_analysis - computed: true, optional: false, required: false
  private _ingressAclAnalysis = new PathTraceItemNetworkElementsFlexConnectIngressAclAnalysisList(this, "ingress_acl_analysis", false);
  public get ingressAclAnalysis() {
    return this._ingressAclAnalysis;
  }

  // wireless_lan_controller_id - computed: true, optional: false, required: false
  public get wirelessLanControllerId() {
    return this.getStringAttribute('wireless_lan_controller_id');
  }

  // wireless_lan_controller_name - computed: true, optional: false, required: false
  public get wirelessLanControllerName() {
    return this.getStringAttribute('wireless_lan_controller_name');
  }
}

export class PathTraceItemNetworkElementsFlexConnectList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsFlexConnectOutputReference {
    return new PathTraceItemNetworkElementsFlexConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressPhysicalInterface {
}

export function pathTraceItemNetworkElementsIngressPhysicalInterfaceToTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressPhysicalInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsIngressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressPhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressPhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new PathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class PathTraceItemNetworkElementsIngressPhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressPhysicalInterfaceOutputReference {
    return new PathTraceItemNetworkElementsIngressPhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsIngressVirtualInterface {
}

export function pathTraceItemNetworkElementsIngressVirtualInterfaceToTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsIngressVirtualInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsIngressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsIngressVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsIngressVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new PathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class PathTraceItemNetworkElementsIngressVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsIngressVirtualInterfaceOutputReference {
    return new PathTraceItemNetworkElementsIngressVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsPerfMonStatistics {
}

export function pathTraceItemNetworkElementsPerfMonStatisticsToTerraform(struct?: PathTraceItemNetworkElementsPerfMonStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsPerfMonStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsPerfMonStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsPerfMonStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsPerfMonStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsPerfMonStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // byte_rate - computed: true, optional: false, required: false
  public get byteRate() {
    return this.getNumberAttribute('byte_rate');
  }

  // dest_ip_address - computed: true, optional: false, required: false
  public get destIpAddress() {
    return this.getStringAttribute('dest_ip_address');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // input_interface - computed: true, optional: false, required: false
  public get inputInterface() {
    return this.getStringAttribute('input_interface');
  }

  // ipv4_dsc_p - computed: true, optional: false, required: false
  public get ipv4DscP() {
    return this.getStringAttribute('ipv4_dsc_p');
  }

  // ipv4_ttl - computed: true, optional: false, required: false
  public get ipv4Ttl() {
    return this.getNumberAttribute('ipv4_ttl');
  }

  // output_interface - computed: true, optional: false, required: false
  public get outputInterface() {
    return this.getStringAttribute('output_interface');
  }

  // packet_bytes - computed: true, optional: false, required: false
  public get packetBytes() {
    return this.getNumberAttribute('packet_bytes');
  }

  // packet_count - computed: true, optional: false, required: false
  public get packetCount() {
    return this.getNumberAttribute('packet_count');
  }

  // packet_loss - computed: true, optional: false, required: false
  public get packetLoss() {
    return this.getNumberAttribute('packet_loss');
  }

  // packet_loss_percentage - computed: true, optional: false, required: false
  public get packetLossPercentage() {
    return this.getNumberAttribute('packet_loss_percentage');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }

  // rtp_jitter_max - computed: true, optional: false, required: false
  public get rtpJitterMax() {
    return this.getNumberAttribute('rtp_jitter_max');
  }

  // rtp_jitter_mean - computed: true, optional: false, required: false
  public get rtpJitterMean() {
    return this.getNumberAttribute('rtp_jitter_mean');
  }

  // rtp_jitter_min - computed: true, optional: false, required: false
  public get rtpJitterMin() {
    return this.getNumberAttribute('rtp_jitter_min');
  }

  // source_ip_address - computed: true, optional: false, required: false
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
}

export class PathTraceItemNetworkElementsPerfMonStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsPerfMonStatisticsOutputReference {
    return new PathTraceItemNetworkElementsPerfMonStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElements {
}

export function pathTraceItemNetworkElementsToTerraform(struct?: PathTraceItemNetworkElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsToHclTerraform(struct?: PathTraceItemNetworkElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accuracy_list - computed: true, optional: false, required: false
  private _accuracyList = new PathTraceItemNetworkElementsAccuracyListStructList(this, "accuracy_list", false);
  public get accuracyList() {
    return this._accuracyList;
  }

  // detailed_status - computed: true, optional: false, required: false
  private _detailedStatus = new PathTraceItemNetworkElementsDetailedStatusList(this, "detailed_status", false);
  public get detailedStatus() {
    return this._detailedStatus;
  }

  // device_statistics - computed: true, optional: false, required: false
  private _deviceStatistics = new PathTraceItemNetworkElementsDeviceStatisticsList(this, "device_statistics", false);
  public get deviceStatistics() {
    return this._deviceStatistics;
  }

  // device_stats_collection - computed: true, optional: false, required: false
  public get deviceStatsCollection() {
    return this.getStringAttribute('device_stats_collection');
  }

  // device_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get deviceStatsCollectionFailureReason() {
    return this.getStringAttribute('device_stats_collection_failure_reason');
  }

  // egress_physical_interface - computed: true, optional: false, required: false
  private _egressPhysicalInterface = new PathTraceItemNetworkElementsEgressPhysicalInterfaceList(this, "egress_physical_interface", false);
  public get egressPhysicalInterface() {
    return this._egressPhysicalInterface;
  }

  // egress_virtual_interface - computed: true, optional: false, required: false
  private _egressVirtualInterface = new PathTraceItemNetworkElementsEgressVirtualInterfaceList(this, "egress_virtual_interface", false);
  public get egressVirtualInterface() {
    return this._egressVirtualInterface;
  }

  // flex_connect - computed: true, optional: false, required: false
  private _flexConnect = new PathTraceItemNetworkElementsFlexConnectList(this, "flex_connect", false);
  public get flexConnect() {
    return this._flexConnect;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_physical_interface - computed: true, optional: false, required: false
  private _ingressPhysicalInterface = new PathTraceItemNetworkElementsIngressPhysicalInterfaceList(this, "ingress_physical_interface", false);
  public get ingressPhysicalInterface() {
    return this._ingressPhysicalInterface;
  }

  // ingress_virtual_interface - computed: true, optional: false, required: false
  private _ingressVirtualInterface = new PathTraceItemNetworkElementsIngressVirtualInterfaceList(this, "ingress_virtual_interface", false);
  public get ingressVirtualInterface() {
    return this._ingressVirtualInterface;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // link_information_source - computed: true, optional: false, required: false
  public get linkInformationSource() {
    return this.getStringAttribute('link_information_source');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // perf_mon_collection - computed: true, optional: false, required: false
  public get perfMonCollection() {
    return this.getStringAttribute('perf_mon_collection');
  }

  // perf_mon_collection_failure_reason - computed: true, optional: false, required: false
  public get perfMonCollectionFailureReason() {
    return this.getStringAttribute('perf_mon_collection_failure_reason');
  }

  // perf_mon_statistics - computed: true, optional: false, required: false
  private _perfMonStatistics = new PathTraceItemNetworkElementsPerfMonStatisticsList(this, "perf_mon_statistics", false);
  public get perfMonStatistics() {
    return this._perfMonStatistics;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // tunnels - computed: true, optional: false, required: false
  public get tunnels() {
    return this.getListAttribute('tunnels');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // wlan_id - computed: true, optional: false, required: false
  public get wlanId() {
    return this.getStringAttribute('wlan_id');
  }
}

export class PathTraceItemNetworkElementsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsOutputReference {
    return new PathTraceItemNetworkElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoAccuracyListStruct {
}

export function pathTraceItemNetworkElementsInfoAccuracyListStructToTerraform(struct?: PathTraceItemNetworkElementsInfoAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoAccuracyListStructToHclTerraform(struct?: PathTraceItemNetworkElementsInfoAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoAccuracyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoAccuracyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoAccuracyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class PathTraceItemNetworkElementsInfoAccuracyListStructList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoAccuracyListStructOutputReference {
    return new PathTraceItemNetworkElementsInfoAccuracyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoDetailedStatus {
}

export function pathTraceItemNetworkElementsInfoDetailedStatusToTerraform(struct?: PathTraceItemNetworkElementsInfoDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoDetailedStatusToHclTerraform(struct?: PathTraceItemNetworkElementsInfoDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoDetailedStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoDetailedStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoDetailedStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_trace_calculation - computed: true, optional: false, required: false
  public get aclTraceCalculation() {
    return this.getStringAttribute('acl_trace_calculation');
  }

  // acl_trace_calculation_failure_reason - computed: true, optional: false, required: false
  public get aclTraceCalculationFailureReason() {
    return this.getStringAttribute('acl_trace_calculation_failure_reason');
  }
}

export class PathTraceItemNetworkElementsInfoDetailedStatusList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoDetailedStatusOutputReference {
    return new PathTraceItemNetworkElementsInfoDetailedStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics {
}

export function pathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // five_min_usage_in_percentage - computed: true, optional: false, required: false
  public get fiveMinUsageInPercentage() {
    return this.getNumberAttribute('five_min_usage_in_percentage');
  }

  // five_secs_usage_in_percentage - computed: true, optional: false, required: false
  public get fiveSecsUsageInPercentage() {
    return this.getNumberAttribute('five_secs_usage_in_percentage');
  }

  // one_min_usage_in_percentage - computed: true, optional: false, required: false
  public get oneMinUsageInPercentage() {
    return this.getNumberAttribute('one_min_usage_in_percentage');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics {
}

export function pathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_usage - computed: true, optional: false, required: false
  public get memoryUsage() {
    return this.getNumberAttribute('memory_usage');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }

  // total_memory - computed: true, optional: false, required: false
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }
}

export class PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoDeviceStatistics {
}

export function pathTraceItemNetworkElementsInfoDeviceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoDeviceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoDeviceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoDeviceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoDeviceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_statistics - computed: true, optional: false, required: false
  private _cpuStatistics = new PathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsList(this, "cpu_statistics", false);
  public get cpuStatistics() {
    return this._cpuStatistics;
  }

  // memory_statistics - computed: true, optional: false, required: false
  private _memoryStatistics = new PathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsList(this, "memory_statistics", false);
  public get memoryStatistics() {
    return this._memoryStatistics;
  }
}

export class PathTraceItemNetworkElementsInfoDeviceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoDeviceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoDeviceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface {
}

export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoEgressInterface {
}

export function pathTraceItemNetworkElementsInfoEgressInterfaceToTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoEgressInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsInfoEgressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoEgressInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoEgressInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // physical_interface - computed: true, optional: false, required: false
  private _physicalInterface = new PathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceList(this, "physical_interface", false);
  public get physicalInterface() {
    return this._physicalInterface;
  }

  // virtual_interface - computed: true, optional: false, required: false
  private _virtualInterface = new PathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceList(this, "virtual_interface", false);
  public get virtualInterface() {
    return this._virtualInterface;
  }
}

export class PathTraceItemNetworkElementsInfoEgressInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoEgressInterfaceOutputReference {
    return new PathTraceItemNetworkElementsInfoEgressInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis {
}

export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis {
}

export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoFlexConnect {
}

export function pathTraceItemNetworkElementsInfoFlexConnectToTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoFlexConnectToHclTerraform(struct?: PathTraceItemNetworkElementsInfoFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoFlexConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoFlexConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoFlexConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // data_switching - computed: true, optional: false, required: false
  public get dataSwitching() {
    return this.getStringAttribute('data_switching');
  }

  // egress_acl_analysis - computed: true, optional: false, required: false
  private _egressAclAnalysis = new PathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisList(this, "egress_acl_analysis", false);
  public get egressAclAnalysis() {
    return this._egressAclAnalysis;
  }

  // ingress_acl_analysis - computed: true, optional: false, required: false
  private _ingressAclAnalysis = new PathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisList(this, "ingress_acl_analysis", false);
  public get ingressAclAnalysis() {
    return this._ingressAclAnalysis;
  }

  // wireless_lan_controller_id - computed: true, optional: false, required: false
  public get wirelessLanControllerId() {
    return this.getStringAttribute('wireless_lan_controller_id');
  }

  // wireless_lan_controller_name - computed: true, optional: false, required: false
  public get wirelessLanControllerName() {
    return this.getStringAttribute('wireless_lan_controller_name');
  }
}

export class PathTraceItemNetworkElementsInfoFlexConnectList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoFlexConnectOutputReference {
    return new PathTraceItemNetworkElementsInfoFlexConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface {
}

export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_ports - computed: true, optional: false, required: false
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace - computed: true, optional: false, required: false
  public get ace() {
    return this.getStringAttribute('ace');
  }

  // matching_ports - computed: true, optional: false, required: false
  private _matchingPorts = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // matching_aces - computed: true, optional: false, required: false
  private _matchingAces = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // input_packets - computed: true, optional: false, required: false
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }

  // input_queue_count - computed: true, optional: false, required: false
  public get inputQueueCount() {
    return this.getNumberAttribute('input_queue_count');
  }

  // input_queue_drops - computed: true, optional: false, required: false
  public get inputQueueDrops() {
    return this.getNumberAttribute('input_queue_drops');
  }

  // input_queue_flushes - computed: true, optional: false, required: false
  public get inputQueueFlushes() {
    return this.getNumberAttribute('input_queue_flushes');
  }

  // input_queue_max_depth - computed: true, optional: false, required: false
  public get inputQueueMaxDepth() {
    return this.getNumberAttribute('input_queue_max_depth');
  }

  // input_ratebps - computed: true, optional: false, required: false
  public get inputRatebps() {
    return this.getNumberAttribute('input_ratebps');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_drop - computed: true, optional: false, required: false
  public get outputDrop() {
    return this.getNumberAttribute('output_drop');
  }

  // output_packets - computed: true, optional: false, required: false
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }

  // output_queue_count - computed: true, optional: false, required: false
  public get outputQueueCount() {
    return this.getNumberAttribute('output_queue_count');
  }

  // output_queue_depth - computed: true, optional: false, required: false
  public get outputQueueDepth() {
    return this.getNumberAttribute('output_queue_depth');
  }

  // output_ratebps - computed: true, optional: false, required: false
  public get outputRatebps() {
    return this.getNumberAttribute('output_ratebps');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
