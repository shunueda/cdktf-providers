import * as cdktf from 'cdktf';
export interface DataDnacenterPathTraceItemDetailedStatus {
}

export function dataDnacenterPathTraceItemDetailedStatusToTerraform(struct?: DataDnacenterPathTraceItemDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemDetailedStatusToHclTerraform(struct?: DataDnacenterPathTraceItemDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemDetailedStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemDetailedStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemDetailedStatus | undefined) {
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

export class DataDnacenterPathTraceItemDetailedStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemDetailedStatusOutputReference {
    return new DataDnacenterPathTraceItemDetailedStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsAccuracyListStruct {
}

export function dataDnacenterPathTraceItemNetworkElementsAccuracyListStructToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsAccuracyListStructToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsAccuracyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsAccuracyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsAccuracyListStruct | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsAccuracyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsAccuracyListStructOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsAccuracyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsDetailedStatus {
}

export function dataDnacenterPathTraceItemNetworkElementsDetailedStatusToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsDetailedStatusToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsDetailedStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsDetailedStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsDetailedStatus | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsDetailedStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsDetailedStatusOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsDetailedStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsDeviceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsDeviceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsDeviceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsDeviceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsDeviceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_statistics - computed: true, optional: false, required: false
  private _cpuStatistics = new DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsCpuStatisticsList(this, "cpu_statistics", false);
  public get cpuStatistics() {
    return this._cpuStatistics;
  }

  // memory_statistics - computed: true, optional: false, required: false
  private _memoryStatistics = new DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsMemoryStatisticsList(this, "memory_statistics", false);
  public get memoryStatistics() {
    return this._memoryStatistics;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsFlexConnect {
}

export function dataDnacenterPathTraceItemNetworkElementsFlexConnectToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsFlexConnectToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsFlexConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsFlexConnect | undefined) {
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
  private _egressAclAnalysis = new DataDnacenterPathTraceItemNetworkElementsFlexConnectEgressAclAnalysisList(this, "egress_acl_analysis", false);
  public get egressAclAnalysis() {
    return this._egressAclAnalysis;
  }

  // ingress_acl_analysis - computed: true, optional: false, required: false
  private _ingressAclAnalysis = new DataDnacenterPathTraceItemNetworkElementsFlexConnectIngressAclAnalysisList(this, "ingress_acl_analysis", false);
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

export class DataDnacenterPathTraceItemNetworkElementsFlexConnectList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsFlexConnectOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsFlexConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsPerfMonStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsPerfMonStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsPerfMonStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsPerfMonStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsPerfMonStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsPerfMonStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsPerfMonStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsPerfMonStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsPerfMonStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsPerfMonStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsPerfMonStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElements {
}

export function dataDnacenterPathTraceItemNetworkElementsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accuracy_list - computed: true, optional: false, required: false
  private _accuracyList = new DataDnacenterPathTraceItemNetworkElementsAccuracyListStructList(this, "accuracy_list", false);
  public get accuracyList() {
    return this._accuracyList;
  }

  // detailed_status - computed: true, optional: false, required: false
  private _detailedStatus = new DataDnacenterPathTraceItemNetworkElementsDetailedStatusList(this, "detailed_status", false);
  public get detailedStatus() {
    return this._detailedStatus;
  }

  // device_statistics - computed: true, optional: false, required: false
  private _deviceStatistics = new DataDnacenterPathTraceItemNetworkElementsDeviceStatisticsList(this, "device_statistics", false);
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
  private _egressPhysicalInterface = new DataDnacenterPathTraceItemNetworkElementsEgressPhysicalInterfaceList(this, "egress_physical_interface", false);
  public get egressPhysicalInterface() {
    return this._egressPhysicalInterface;
  }

  // egress_virtual_interface - computed: true, optional: false, required: false
  private _egressVirtualInterface = new DataDnacenterPathTraceItemNetworkElementsEgressVirtualInterfaceList(this, "egress_virtual_interface", false);
  public get egressVirtualInterface() {
    return this._egressVirtualInterface;
  }

  // flex_connect - computed: true, optional: false, required: false
  private _flexConnect = new DataDnacenterPathTraceItemNetworkElementsFlexConnectList(this, "flex_connect", false);
  public get flexConnect() {
    return this._flexConnect;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_physical_interface - computed: true, optional: false, required: false
  private _ingressPhysicalInterface = new DataDnacenterPathTraceItemNetworkElementsIngressPhysicalInterfaceList(this, "ingress_physical_interface", false);
  public get ingressPhysicalInterface() {
    return this._ingressPhysicalInterface;
  }

  // ingress_virtual_interface - computed: true, optional: false, required: false
  private _ingressVirtualInterface = new DataDnacenterPathTraceItemNetworkElementsIngressVirtualInterfaceList(this, "ingress_virtual_interface", false);
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
  private _perfMonStatistics = new DataDnacenterPathTraceItemNetworkElementsPerfMonStatisticsList(this, "perf_mon_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStruct {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStruct | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatus {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatus | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_statistics - computed: true, optional: false, required: false
  private _cpuStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsCpuStatisticsList(this, "cpu_statistics", false);
  public get cpuStatistics() {
    return this._cpuStatistics;
  }

  // memory_statistics - computed: true, optional: false, required: false
  private _memoryStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsMemoryStatisticsList(this, "memory_statistics", false);
  public get memoryStatistics() {
    return this._memoryStatistics;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoEgressInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoEgressInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // physical_interface - computed: true, optional: false, required: false
  private _physicalInterface = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfacePhysicalInterfaceList(this, "physical_interface", false);
  public get physicalInterface() {
    return this._physicalInterface;
  }

  // virtual_interface - computed: true, optional: false, required: false
  private _virtualInterface = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceVirtualInterfaceList(this, "virtual_interface", false);
  public get virtualInterface() {
    return this._virtualInterface;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoFlexConnect {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoFlexConnectToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoFlexConnect | undefined) {
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
  private _egressAclAnalysis = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectEgressAclAnalysisList(this, "egress_acl_analysis", false);
  public get egressAclAnalysis() {
    return this._egressAclAnalysis;
  }

  // ingress_acl_analysis - computed: true, optional: false, required: false
  private _ingressAclAnalysis = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectIngressAclAnalysisList(this, "ingress_acl_analysis", false);
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

export class DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPorts | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAces | undefined) {
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
  private _matchingPorts = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesMatchingPortsList(this, "matching_ports", false);
  public get matchingPorts() {
    return this._matchingPorts;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysis | undefined) {
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
  private _matchingAces = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisMatchingAcesList(this, "matching_aces", false);
  public get matchingAces() {
    return this._matchingAces;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatistics | undefined) {
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

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
