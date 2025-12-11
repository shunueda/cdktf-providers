// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/sch_service_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciSchServiceConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}
  */
  readonly serviceConnectorId: string;
}
export interface DataOciSchServiceConnectorSourceCursor {
}

export function dataOciSchServiceConnectorSourceCursorToTerraform(struct?: DataOciSchServiceConnectorSourceCursor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourceCursorToHclTerraform(struct?: DataOciSchServiceConnectorSourceCursor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourceCursorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSourceCursor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSourceCursor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }
}

export class DataOciSchServiceConnectorSourceCursorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourceCursorOutputReference {
    return new DataOciSchServiceConnectorSourceCursorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorSourceLogSources {
}

export function dataOciSchServiceConnectorSourceLogSourcesToTerraform(struct?: DataOciSchServiceConnectorSourceLogSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourceLogSourcesToHclTerraform(struct?: DataOciSchServiceConnectorSourceLogSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourceLogSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSourceLogSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSourceLogSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_id - computed: true, optional: false, required: false
  public get logId() {
    return this.getStringAttribute('log_id');
  }
}

export class DataOciSchServiceConnectorSourceLogSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourceLogSourcesOutputReference {
    return new DataOciSchServiceConnectorSourceLogSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics {
}

export function dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsToTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsToHclTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference {
    return new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces {
}

export function dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesToTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesToHclTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference {
    return new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails {
}

export function dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsToTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsToHclTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // namespaces - computed: true, optional: false, required: false
  private _namespaces = new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference {
    return new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorSourceMonitoringSources {
}

export function dataOciSchServiceConnectorSourceMonitoringSourcesToTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourceMonitoringSourcesToHclTerraform(struct?: DataOciSchServiceConnectorSourceMonitoringSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSourceMonitoringSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSourceMonitoringSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // namespace_details - computed: true, optional: false, required: false
  private _namespaceDetails = new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList(this, "namespace_details", false);
  public get namespaceDetails() {
    return this._namespaceDetails;
  }
}

export class DataOciSchServiceConnectorSourceMonitoringSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference {
    return new DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorSourcePrivateEndpointMetadata {
}

export function dataOciSchServiceConnectorSourcePrivateEndpointMetadataToTerraform(struct?: DataOciSchServiceConnectorSourcePrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourcePrivateEndpointMetadataToHclTerraform(struct?: DataOciSchServiceConnectorSourcePrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourcePrivateEndpointMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSourcePrivateEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSourcePrivateEndpointMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rce_dns_proxy_ip_address - computed: true, optional: false, required: false
  public get rceDnsProxyIpAddress() {
    return this.getStringAttribute('rce_dns_proxy_ip_address');
  }

  // rce_traffic_ip_address - computed: true, optional: false, required: false
  public get rceTrafficIpAddress() {
    return this.getStringAttribute('rce_traffic_ip_address');
  }
}

export class DataOciSchServiceConnectorSourcePrivateEndpointMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourcePrivateEndpointMetadataOutputReference {
    return new DataOciSchServiceConnectorSourcePrivateEndpointMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorSource {
}

export function dataOciSchServiceConnectorSourceToTerraform(struct?: DataOciSchServiceConnectorSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorSourceToHclTerraform(struct?: DataOciSchServiceConnectorSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_map - computed: true, optional: false, required: false
  public get configMap() {
    return this.getStringAttribute('config_map');
  }

  // cursor - computed: true, optional: false, required: false
  private _cursor = new DataOciSchServiceConnectorSourceCursorList(this, "cursor", false);
  public get cursor() {
    return this._cursor;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // log_sources - computed: true, optional: false, required: false
  private _logSources = new DataOciSchServiceConnectorSourceLogSourcesList(this, "log_sources", false);
  public get logSources() {
    return this._logSources;
  }

  // monitoring_sources - computed: true, optional: false, required: false
  private _monitoringSources = new DataOciSchServiceConnectorSourceMonitoringSourcesList(this, "monitoring_sources", false);
  public get monitoringSources() {
    return this._monitoringSources;
  }

  // plugin_name - computed: true, optional: false, required: false
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }

  // private_endpoint_metadata - computed: true, optional: false, required: false
  private _privateEndpointMetadata = new DataOciSchServiceConnectorSourcePrivateEndpointMetadataList(this, "private_endpoint_metadata", false);
  public get privateEndpointMetadata() {
    return this._privateEndpointMetadata;
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}

export class DataOciSchServiceConnectorSourceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorSourceOutputReference {
    return new DataOciSchServiceConnectorSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorTargetDimensionsDimensionValue {
}

export function dataOciSchServiceConnectorTargetDimensionsDimensionValueToTerraform(struct?: DataOciSchServiceConnectorTargetDimensionsDimensionValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorTargetDimensionsDimensionValueToHclTerraform(struct?: DataOciSchServiceConnectorTargetDimensionsDimensionValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorTargetDimensionsDimensionValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorTargetDimensionsDimensionValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciSchServiceConnectorTargetDimensionsDimensionValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference {
    return new DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorTargetDimensions {
}

export function dataOciSchServiceConnectorTargetDimensionsToTerraform(struct?: DataOciSchServiceConnectorTargetDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorTargetDimensionsToHclTerraform(struct?: DataOciSchServiceConnectorTargetDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorTargetDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorTargetDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorTargetDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_value - computed: true, optional: false, required: false
  private _dimensionValue = new DataOciSchServiceConnectorTargetDimensionsDimensionValueList(this, "dimension_value", false);
  public get dimensionValue() {
    return this._dimensionValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciSchServiceConnectorTargetDimensionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorTargetDimensionsOutputReference {
    return new DataOciSchServiceConnectorTargetDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorTargetPrivateEndpointMetadata {
}

export function dataOciSchServiceConnectorTargetPrivateEndpointMetadataToTerraform(struct?: DataOciSchServiceConnectorTargetPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorTargetPrivateEndpointMetadataToHclTerraform(struct?: DataOciSchServiceConnectorTargetPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorTargetPrivateEndpointMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorTargetPrivateEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorTargetPrivateEndpointMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rce_dns_proxy_ip_address - computed: true, optional: false, required: false
  public get rceDnsProxyIpAddress() {
    return this.getStringAttribute('rce_dns_proxy_ip_address');
  }

  // rce_traffic_ip_address - computed: true, optional: false, required: false
  public get rceTrafficIpAddress() {
    return this.getStringAttribute('rce_traffic_ip_address');
  }
}

export class DataOciSchServiceConnectorTargetPrivateEndpointMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorTargetPrivateEndpointMetadataOutputReference {
    return new DataOciSchServiceConnectorTargetPrivateEndpointMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorTarget {
}

export function dataOciSchServiceConnectorTargetToTerraform(struct?: DataOciSchServiceConnectorTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorTargetToHclTerraform(struct?: DataOciSchServiceConnectorTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_rollover_size_in_mbs - computed: true, optional: false, required: false
  public get batchRolloverSizeInMbs() {
    return this.getNumberAttribute('batch_rollover_size_in_mbs');
  }

  // batch_rollover_time_in_ms - computed: true, optional: false, required: false
  public get batchRolloverTimeInMs() {
    return this.getNumberAttribute('batch_rollover_time_in_ms');
  }

  // batch_size_in_kbs - computed: true, optional: false, required: false
  public get batchSizeInKbs() {
    return this.getNumberAttribute('batch_size_in_kbs');
  }

  // batch_size_in_num - computed: true, optional: false, required: false
  public get batchSizeInNum() {
    return this.getNumberAttribute('batch_size_in_num');
  }

  // batch_time_in_sec - computed: true, optional: false, required: false
  public get batchTimeInSec() {
    return this.getNumberAttribute('batch_time_in_sec');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataOciSchServiceConnectorTargetDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // enable_formatted_messaging - computed: true, optional: false, required: false
  public get enableFormattedMessaging() {
    return this.getBooleanAttribute('enable_formatted_messaging');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_source_identifier - computed: true, optional: false, required: false
  public get logSourceIdentifier() {
    return this.getStringAttribute('log_source_identifier');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_namespace - computed: true, optional: false, required: false
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object_name_prefix - computed: true, optional: false, required: false
  public get objectNamePrefix() {
    return this.getStringAttribute('object_name_prefix');
  }

  // private_endpoint_metadata - computed: true, optional: false, required: false
  private _privateEndpointMetadata = new DataOciSchServiceConnectorTargetPrivateEndpointMetadataList(this, "private_endpoint_metadata", false);
  public get privateEndpointMetadata() {
    return this._privateEndpointMetadata;
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

export class DataOciSchServiceConnectorTargetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorTargetOutputReference {
    return new DataOciSchServiceConnectorTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorTasksPrivateEndpointMetadata {
}

export function dataOciSchServiceConnectorTasksPrivateEndpointMetadataToTerraform(struct?: DataOciSchServiceConnectorTasksPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorTasksPrivateEndpointMetadataToHclTerraform(struct?: DataOciSchServiceConnectorTasksPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorTasksPrivateEndpointMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorTasksPrivateEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorTasksPrivateEndpointMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rce_dns_proxy_ip_address - computed: true, optional: false, required: false
  public get rceDnsProxyIpAddress() {
    return this.getStringAttribute('rce_dns_proxy_ip_address');
  }

  // rce_traffic_ip_address - computed: true, optional: false, required: false
  public get rceTrafficIpAddress() {
    return this.getStringAttribute('rce_traffic_ip_address');
  }
}

export class DataOciSchServiceConnectorTasksPrivateEndpointMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorTasksPrivateEndpointMetadataOutputReference {
    return new DataOciSchServiceConnectorTasksPrivateEndpointMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciSchServiceConnectorTasks {
}

export function dataOciSchServiceConnectorTasksToTerraform(struct?: DataOciSchServiceConnectorTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSchServiceConnectorTasksToHclTerraform(struct?: DataOciSchServiceConnectorTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSchServiceConnectorTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSchServiceConnectorTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSchServiceConnectorTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size_in_kbs - computed: true, optional: false, required: false
  public get batchSizeInKbs() {
    return this.getNumberAttribute('batch_size_in_kbs');
  }

  // batch_time_in_sec - computed: true, optional: false, required: false
  public get batchTimeInSec() {
    return this.getNumberAttribute('batch_time_in_sec');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // private_endpoint_metadata - computed: true, optional: false, required: false
  private _privateEndpointMetadata = new DataOciSchServiceConnectorTasksPrivateEndpointMetadataList(this, "private_endpoint_metadata", false);
  public get privateEndpointMetadata() {
    return this._privateEndpointMetadata;
  }
}

export class DataOciSchServiceConnectorTasksList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciSchServiceConnectorTasksOutputReference {
    return new DataOciSchServiceConnectorTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/sch_service_connector oci_sch_service_connector}
*/
export class DataOciSchServiceConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_sch_service_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciSchServiceConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciSchServiceConnector to import
  * @param importFromId The id of the existing DataOciSchServiceConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/sch_service_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciSchServiceConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_sch_service_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/sch_service_connector oci_sch_service_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciSchServiceConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciSchServiceConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_sch_service_connector',
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
    this._serviceConnectorId = config.serviceConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecyle_details - computed: true, optional: false, required: false
  public get lifecyleDetails() {
    return this.getStringAttribute('lifecyle_details');
  }

  // service_connector_id - computed: false, optional: false, required: true
  private _serviceConnectorId?: string; 
  public get serviceConnectorId() {
    return this.getStringAttribute('service_connector_id');
  }
  public set serviceConnectorId(value: string) {
    this._serviceConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectorIdInput() {
    return this._serviceConnectorId;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOciSchServiceConnectorSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataOciSchServiceConnectorTargetList(this, "target", false);
  public get target() {
    return this._target;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataOciSchServiceConnectorTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_connector_id: cdktf.stringToTerraform(this._serviceConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_connector_id: {
        value: cdktf.stringToHclTerraform(this._serviceConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
