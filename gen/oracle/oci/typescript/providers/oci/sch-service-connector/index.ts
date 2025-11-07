// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchServiceConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#description SchServiceConnector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#id SchServiceConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#state SchServiceConnector#state}
  */
  readonly state?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#source SchServiceConnector#source}
  */
  readonly source: SchServiceConnectorSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#target SchServiceConnector#target}
  */
  readonly target: SchServiceConnectorTarget;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#tasks SchServiceConnector#tasks}
  */
  readonly tasks?: SchServiceConnectorTasks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#timeouts SchServiceConnector#timeouts}
  */
  readonly timeouts?: SchServiceConnectorTimeouts;
}
export interface SchServiceConnectorSourcePrivateEndpointMetadata {
}

export function schServiceConnectorSourcePrivateEndpointMetadataToTerraform(struct?: SchServiceConnectorSourcePrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function schServiceConnectorSourcePrivateEndpointMetadataToHclTerraform(struct?: SchServiceConnectorSourcePrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SchServiceConnectorSourcePrivateEndpointMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorSourcePrivateEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorSourcePrivateEndpointMetadata | undefined) {
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

export class SchServiceConnectorSourcePrivateEndpointMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorSourcePrivateEndpointMetadataOutputReference {
    return new SchServiceConnectorSourcePrivateEndpointMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorSourceCursor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}
  */
  readonly kind?: string;
}

export function schServiceConnectorSourceCursorToTerraform(struct?: SchServiceConnectorSourceCursorOutputReference | SchServiceConnectorSourceCursor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function schServiceConnectorSourceCursorToHclTerraform(struct?: SchServiceConnectorSourceCursorOutputReference | SchServiceConnectorSourceCursor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorSourceCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchServiceConnectorSourceCursor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorSourceCursor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}
export interface SchServiceConnectorSourceLogSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}
  */
  readonly logId?: string;
}

export function schServiceConnectorSourceLogSourcesToTerraform(struct?: SchServiceConnectorSourceLogSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function schServiceConnectorSourceLogSourcesToHclTerraform(struct?: SchServiceConnectorSourceLogSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SchServiceConnectorSourceLogSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorSourceLogSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
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

  public set internalValue(value: SchServiceConnectorSourceLogSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}

export class SchServiceConnectorSourceLogSourcesList extends cdktf.ComplexList {
  public internalValue? : SchServiceConnectorSourceLogSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorSourceLogSourcesOutputReference {
    return new SchServiceConnectorSourceLogSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}
  */
  readonly kind: string;
}

export function schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsToTerraform(struct?: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference | SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsToHclTerraform(struct?: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference | SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
    }
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
}
export interface SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}
  */
  readonly namespace: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#metrics SchServiceConnector#metrics}
  */
  readonly metrics: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics;
}

export function schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesToTerraform(struct?: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    metrics: schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsToTerraform(struct!.metrics),
  }
}


export function schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesToHclTerraform(struct?: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._metrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._metrics.internalValue = value.metrics;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}

export class SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList extends cdktf.ComplexList {
  public internalValue? : SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference {
    return new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorSourceMonitoringSourcesNamespaceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}
  */
  readonly kind: string;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#namespaces SchServiceConnector#namespaces}
  */
  readonly namespaces: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces[] | cdktf.IResolvable;
}

export function schServiceConnectorSourceMonitoringSourcesNamespaceDetailsToTerraform(struct?: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference | SchServiceConnectorSourceMonitoringSourcesNamespaceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    namespaces: cdktf.listMapper(schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesToTerraform, true)(struct!.namespaces),
  }
}


export function schServiceConnectorSourceMonitoringSourcesNamespaceDetailsToHclTerraform(struct?: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference | SchServiceConnectorSourceMonitoringSourcesNamespaceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktf.listMapperHcl(schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesToHclTerraform, true)(struct!.namespaces),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchServiceConnectorSourceMonitoringSourcesNamespaceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._namespaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._namespaces.internalValue = value.namespaces;
    }
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

  // namespaces - computed: false, optional: false, required: true
  private _namespaces = new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces[] | cdktf.IResolvable) {
    this._namespaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }
}
export interface SchServiceConnectorSourceMonitoringSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * namespace_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#namespace_details SchServiceConnector#namespace_details}
  */
  readonly namespaceDetails?: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails;
}

export function schServiceConnectorSourceMonitoringSourcesToTerraform(struct?: SchServiceConnectorSourceMonitoringSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    namespace_details: schServiceConnectorSourceMonitoringSourcesNamespaceDetailsToTerraform(struct!.namespaceDetails),
  }
}


export function schServiceConnectorSourceMonitoringSourcesToHclTerraform(struct?: SchServiceConnectorSourceMonitoringSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_details: {
      value: schServiceConnectorSourceMonitoringSourcesNamespaceDetailsToHclTerraform(struct!.namespaceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorSourceMonitoringSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorSourceMonitoringSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._namespaceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceDetails = this._namespaceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorSourceMonitoringSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._namespaceDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._namespaceDetails.internalValue = value.namespaceDetails;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // namespace_details - computed: false, optional: true, required: false
  private _namespaceDetails = new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(this, "namespace_details");
  public get namespaceDetails() {
    return this._namespaceDetails;
  }
  public putNamespaceDetails(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails) {
    this._namespaceDetails.internalValue = value;
  }
  public resetNamespaceDetails() {
    this._namespaceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceDetailsInput() {
    return this._namespaceDetails.internalValue;
  }
}

export class SchServiceConnectorSourceMonitoringSourcesList extends cdktf.ComplexList {
  public internalValue? : SchServiceConnectorSourceMonitoringSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorSourceMonitoringSourcesOutputReference {
    return new SchServiceConnectorSourceMonitoringSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}
  */
  readonly configMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}
  */
  readonly streamId?: string;
  /**
  * cursor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#cursor SchServiceConnector#cursor}
  */
  readonly cursor?: SchServiceConnectorSourceCursor;
  /**
  * log_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#log_sources SchServiceConnector#log_sources}
  */
  readonly logSources?: SchServiceConnectorSourceLogSources[] | cdktf.IResolvable;
  /**
  * monitoring_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#monitoring_sources SchServiceConnector#monitoring_sources}
  */
  readonly monitoringSources?: SchServiceConnectorSourceMonitoringSources[] | cdktf.IResolvable;
}

export function schServiceConnectorSourceToTerraform(struct?: SchServiceConnectorSourceOutputReference | SchServiceConnectorSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
    kind: cdktf.stringToTerraform(struct!.kind),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    cursor: schServiceConnectorSourceCursorToTerraform(struct!.cursor),
    log_sources: cdktf.listMapper(schServiceConnectorSourceLogSourcesToTerraform, true)(struct!.logSources),
    monitoring_sources: cdktf.listMapper(schServiceConnectorSourceMonitoringSourcesToTerraform, true)(struct!.monitoringSources),
  }
}


export function schServiceConnectorSourceToHclTerraform(struct?: SchServiceConnectorSourceOutputReference | SchServiceConnectorSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
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
    plugin_name: {
      value: cdktf.stringToHclTerraform(struct!.pluginName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cursor: {
      value: schServiceConnectorSourceCursorToHclTerraform(struct!.cursor),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorSourceCursorList",
    },
    log_sources: {
      value: cdktf.listMapperHcl(schServiceConnectorSourceLogSourcesToHclTerraform, true)(struct!.logSources),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorSourceLogSourcesList",
    },
    monitoring_sources: {
      value: cdktf.listMapperHcl(schServiceConnectorSourceMonitoringSourcesToHclTerraform, true)(struct!.monitoringSources),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorSourceMonitoringSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchServiceConnectorSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._cursor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursor = this._cursor?.internalValue;
    }
    if (this._logSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSources = this._logSources?.internalValue;
    }
    if (this._monitoringSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringSources = this._monitoringSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMap = undefined;
      this._kind = undefined;
      this._pluginName = undefined;
      this._streamId = undefined;
      this._cursor.internalValue = undefined;
      this._logSources.internalValue = undefined;
      this._monitoringSources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMap = value.configMap;
      this._kind = value.kind;
      this._pluginName = value.pluginName;
      this._streamId = value.streamId;
      this._cursor.internalValue = value.cursor;
      this._logSources.internalValue = value.logSources;
      this._monitoringSources.internalValue = value.monitoringSources;
    }
  }

  // config_map - computed: true, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
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

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // private_endpoint_metadata - computed: true, optional: false, required: false
  private _privateEndpointMetadata = new SchServiceConnectorSourcePrivateEndpointMetadataList(this, "private_endpoint_metadata", false);
  public get privateEndpointMetadata() {
    return this._privateEndpointMetadata;
  }

  // stream_id - computed: true, optional: true, required: false
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

  // cursor - computed: false, optional: true, required: false
  private _cursor = new SchServiceConnectorSourceCursorOutputReference(this, "cursor");
  public get cursor() {
    return this._cursor;
  }
  public putCursor(value: SchServiceConnectorSourceCursor) {
    this._cursor.internalValue = value;
  }
  public resetCursor() {
    this._cursor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor.internalValue;
  }

  // log_sources - computed: false, optional: true, required: false
  private _logSources = new SchServiceConnectorSourceLogSourcesList(this, "log_sources", false);
  public get logSources() {
    return this._logSources;
  }
  public putLogSources(value: SchServiceConnectorSourceLogSources[] | cdktf.IResolvable) {
    this._logSources.internalValue = value;
  }
  public resetLogSources() {
    this._logSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSourcesInput() {
    return this._logSources.internalValue;
  }

  // monitoring_sources - computed: false, optional: true, required: false
  private _monitoringSources = new SchServiceConnectorSourceMonitoringSourcesList(this, "monitoring_sources", false);
  public get monitoringSources() {
    return this._monitoringSources;
  }
  public putMonitoringSources(value: SchServiceConnectorSourceMonitoringSources[] | cdktf.IResolvable) {
    this._monitoringSources.internalValue = value;
  }
  public resetMonitoringSources() {
    this._monitoringSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringSourcesInput() {
    return this._monitoringSources.internalValue;
  }
}
export interface SchServiceConnectorTargetPrivateEndpointMetadata {
}

export function schServiceConnectorTargetPrivateEndpointMetadataToTerraform(struct?: SchServiceConnectorTargetPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function schServiceConnectorTargetPrivateEndpointMetadataToHclTerraform(struct?: SchServiceConnectorTargetPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SchServiceConnectorTargetPrivateEndpointMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorTargetPrivateEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorTargetPrivateEndpointMetadata | undefined) {
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

export class SchServiceConnectorTargetPrivateEndpointMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorTargetPrivateEndpointMetadataOutputReference {
    return new SchServiceConnectorTargetPrivateEndpointMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorTargetDimensionsDimensionValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#path SchServiceConnector#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#value SchServiceConnector#value}
  */
  readonly value?: string;
}

export function schServiceConnectorTargetDimensionsDimensionValueToTerraform(struct?: SchServiceConnectorTargetDimensionsDimensionValueOutputReference | SchServiceConnectorTargetDimensionsDimensionValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function schServiceConnectorTargetDimensionsDimensionValueToHclTerraform(struct?: SchServiceConnectorTargetDimensionsDimensionValueOutputReference | SchServiceConnectorTargetDimensionsDimensionValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class SchServiceConnectorTargetDimensionsDimensionValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchServiceConnectorTargetDimensionsDimensionValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorTargetDimensionsDimensionValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._path = value.path;
      this._value = value.value;
    }
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: true, optional: true, required: false
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
export interface SchServiceConnectorTargetDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#name SchServiceConnector#name}
  */
  readonly name?: string;
  /**
  * dimension_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#dimension_value SchServiceConnector#dimension_value}
  */
  readonly dimensionValue?: SchServiceConnectorTargetDimensionsDimensionValue;
}

export function schServiceConnectorTargetDimensionsToTerraform(struct?: SchServiceConnectorTargetDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    dimension_value: schServiceConnectorTargetDimensionsDimensionValueToTerraform(struct!.dimensionValue),
  }
}


export function schServiceConnectorTargetDimensionsToHclTerraform(struct?: SchServiceConnectorTargetDimensions | cdktf.IResolvable): any {
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
    dimension_value: {
      value: schServiceConnectorTargetDimensionsDimensionValueToHclTerraform(struct!.dimensionValue),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorTargetDimensionsDimensionValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorTargetDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorTargetDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._dimensionValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValue = this._dimensionValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorTargetDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._dimensionValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._dimensionValue.internalValue = value.dimensionValue;
    }
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

  // dimension_value - computed: false, optional: true, required: false
  private _dimensionValue = new SchServiceConnectorTargetDimensionsDimensionValueOutputReference(this, "dimension_value");
  public get dimensionValue() {
    return this._dimensionValue;
  }
  public putDimensionValue(value: SchServiceConnectorTargetDimensionsDimensionValue) {
    this._dimensionValue.internalValue = value;
  }
  public resetDimensionValue() {
    this._dimensionValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueInput() {
    return this._dimensionValue.internalValue;
  }
}

export class SchServiceConnectorTargetDimensionsList extends cdktf.ComplexList {
  public internalValue? : SchServiceConnectorTargetDimensions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorTargetDimensionsOutputReference {
    return new SchServiceConnectorTargetDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}
  */
  readonly batchRolloverSizeInMbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}
  */
  readonly batchRolloverTimeInMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}
  */
  readonly batchSizeInKbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}
  */
  readonly batchSizeInNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}
  */
  readonly batchTimeInSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}
  */
  readonly enableFormattedMessaging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}
  */
  readonly logSourceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}
  */
  readonly objectNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}
  */
  readonly streamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}
  */
  readonly topicId?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#dimensions SchServiceConnector#dimensions}
  */
  readonly dimensions?: SchServiceConnectorTargetDimensions[] | cdktf.IResolvable;
}

export function schServiceConnectorTargetToTerraform(struct?: SchServiceConnectorTargetOutputReference | SchServiceConnectorTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_rollover_size_in_mbs: cdktf.numberToTerraform(struct!.batchRolloverSizeInMbs),
    batch_rollover_time_in_ms: cdktf.numberToTerraform(struct!.batchRolloverTimeInMs),
    batch_size_in_kbs: cdktf.numberToTerraform(struct!.batchSizeInKbs),
    batch_size_in_num: cdktf.numberToTerraform(struct!.batchSizeInNum),
    batch_time_in_sec: cdktf.numberToTerraform(struct!.batchTimeInSec),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    enable_formatted_messaging: cdktf.booleanToTerraform(struct!.enableFormattedMessaging),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    kind: cdktf.stringToTerraform(struct!.kind),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_source_identifier: cdktf.stringToTerraform(struct!.logSourceIdentifier),
    metric: cdktf.stringToTerraform(struct!.metric),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object_name_prefix: cdktf.stringToTerraform(struct!.objectNamePrefix),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
    dimensions: cdktf.listMapper(schServiceConnectorTargetDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function schServiceConnectorTargetToHclTerraform(struct?: SchServiceConnectorTargetOutputReference | SchServiceConnectorTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_rollover_size_in_mbs: {
      value: cdktf.numberToHclTerraform(struct!.batchRolloverSizeInMbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_rollover_time_in_ms: {
      value: cdktf.numberToHclTerraform(struct!.batchRolloverTimeInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size_in_kbs: {
      value: cdktf.numberToHclTerraform(struct!.batchSizeInKbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size_in_num: {
      value: cdktf.numberToHclTerraform(struct!.batchSizeInNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_time_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.batchTimeInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_formatted_messaging: {
      value: cdktf.booleanToHclTerraform(struct!.enableFormattedMessaging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
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
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_source_identifier: {
      value: cdktf.stringToHclTerraform(struct!.logSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.objectNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(schServiceConnectorTargetDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "SchServiceConnectorTargetDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchServiceConnectorTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchRolloverSizeInMbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchRolloverSizeInMbs = this._batchRolloverSizeInMbs;
    }
    if (this._batchRolloverTimeInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchRolloverTimeInMs = this._batchRolloverTimeInMs;
    }
    if (this._batchSizeInKbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizeInKbs = this._batchSizeInKbs;
    }
    if (this._batchSizeInNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizeInNum = this._batchSizeInNum;
    }
    if (this._batchTimeInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchTimeInSec = this._batchTimeInSec;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._enableFormattedMessaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFormattedMessaging = this._enableFormattedMessaging;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSourceIdentifier = this._logSourceIdentifier;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._objectNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNamePrefix = this._objectNamePrefix;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchRolloverSizeInMbs = undefined;
      this._batchRolloverTimeInMs = undefined;
      this._batchSizeInKbs = undefined;
      this._batchSizeInNum = undefined;
      this._batchTimeInSec = undefined;
      this._bucket = undefined;
      this._compartmentId = undefined;
      this._enableFormattedMessaging = undefined;
      this._functionId = undefined;
      this._kind = undefined;
      this._logGroupId = undefined;
      this._logSourceIdentifier = undefined;
      this._metric = undefined;
      this._metricNamespace = undefined;
      this._namespace = undefined;
      this._objectNamePrefix = undefined;
      this._streamId = undefined;
      this._topicId = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchRolloverSizeInMbs = value.batchRolloverSizeInMbs;
      this._batchRolloverTimeInMs = value.batchRolloverTimeInMs;
      this._batchSizeInKbs = value.batchSizeInKbs;
      this._batchSizeInNum = value.batchSizeInNum;
      this._batchTimeInSec = value.batchTimeInSec;
      this._bucket = value.bucket;
      this._compartmentId = value.compartmentId;
      this._enableFormattedMessaging = value.enableFormattedMessaging;
      this._functionId = value.functionId;
      this._kind = value.kind;
      this._logGroupId = value.logGroupId;
      this._logSourceIdentifier = value.logSourceIdentifier;
      this._metric = value.metric;
      this._metricNamespace = value.metricNamespace;
      this._namespace = value.namespace;
      this._objectNamePrefix = value.objectNamePrefix;
      this._streamId = value.streamId;
      this._topicId = value.topicId;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // batch_rollover_size_in_mbs - computed: true, optional: true, required: false
  private _batchRolloverSizeInMbs?: number; 
  public get batchRolloverSizeInMbs() {
    return this.getNumberAttribute('batch_rollover_size_in_mbs');
  }
  public set batchRolloverSizeInMbs(value: number) {
    this._batchRolloverSizeInMbs = value;
  }
  public resetBatchRolloverSizeInMbs() {
    this._batchRolloverSizeInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchRolloverSizeInMbsInput() {
    return this._batchRolloverSizeInMbs;
  }

  // batch_rollover_time_in_ms - computed: true, optional: true, required: false
  private _batchRolloverTimeInMs?: number; 
  public get batchRolloverTimeInMs() {
    return this.getNumberAttribute('batch_rollover_time_in_ms');
  }
  public set batchRolloverTimeInMs(value: number) {
    this._batchRolloverTimeInMs = value;
  }
  public resetBatchRolloverTimeInMs() {
    this._batchRolloverTimeInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchRolloverTimeInMsInput() {
    return this._batchRolloverTimeInMs;
  }

  // batch_size_in_kbs - computed: true, optional: true, required: false
  private _batchSizeInKbs?: number; 
  public get batchSizeInKbs() {
    return this.getNumberAttribute('batch_size_in_kbs');
  }
  public set batchSizeInKbs(value: number) {
    this._batchSizeInKbs = value;
  }
  public resetBatchSizeInKbs() {
    this._batchSizeInKbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInKbsInput() {
    return this._batchSizeInKbs;
  }

  // batch_size_in_num - computed: true, optional: true, required: false
  private _batchSizeInNum?: number; 
  public get batchSizeInNum() {
    return this.getNumberAttribute('batch_size_in_num');
  }
  public set batchSizeInNum(value: number) {
    this._batchSizeInNum = value;
  }
  public resetBatchSizeInNum() {
    this._batchSizeInNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInNumInput() {
    return this._batchSizeInNum;
  }

  // batch_time_in_sec - computed: true, optional: true, required: false
  private _batchTimeInSec?: number; 
  public get batchTimeInSec() {
    return this.getNumberAttribute('batch_time_in_sec');
  }
  public set batchTimeInSec(value: number) {
    this._batchTimeInSec = value;
  }
  public resetBatchTimeInSec() {
    this._batchTimeInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTimeInSecInput() {
    return this._batchTimeInSec;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // enable_formatted_messaging - computed: true, optional: true, required: false
  private _enableFormattedMessaging?: boolean | cdktf.IResolvable; 
  public get enableFormattedMessaging() {
    return this.getBooleanAttribute('enable_formatted_messaging');
  }
  public set enableFormattedMessaging(value: boolean | cdktf.IResolvable) {
    this._enableFormattedMessaging = value;
  }
  public resetEnableFormattedMessaging() {
    this._enableFormattedMessaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFormattedMessagingInput() {
    return this._enableFormattedMessaging;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
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

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_source_identifier - computed: true, optional: true, required: false
  private _logSourceIdentifier?: string; 
  public get logSourceIdentifier() {
    return this.getStringAttribute('log_source_identifier');
  }
  public set logSourceIdentifier(value: string) {
    this._logSourceIdentifier = value;
  }
  public resetLogSourceIdentifier() {
    this._logSourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSourceIdentifierInput() {
    return this._logSourceIdentifier;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_namespace - computed: true, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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

  // object_name_prefix - computed: true, optional: true, required: false
  private _objectNamePrefix?: string; 
  public get objectNamePrefix() {
    return this.getStringAttribute('object_name_prefix');
  }
  public set objectNamePrefix(value: string) {
    this._objectNamePrefix = value;
  }
  public resetObjectNamePrefix() {
    this._objectNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamePrefixInput() {
    return this._objectNamePrefix;
  }

  // private_endpoint_metadata - computed: true, optional: false, required: false
  private _privateEndpointMetadata = new SchServiceConnectorTargetPrivateEndpointMetadataList(this, "private_endpoint_metadata", false);
  public get privateEndpointMetadata() {
    return this._privateEndpointMetadata;
  }

  // stream_id - computed: true, optional: true, required: false
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

  // topic_id - computed: true, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SchServiceConnectorTargetDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SchServiceConnectorTargetDimensions[] | cdktf.IResolvable) {
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
export interface SchServiceConnectorTasksPrivateEndpointMetadata {
}

export function schServiceConnectorTasksPrivateEndpointMetadataToTerraform(struct?: SchServiceConnectorTasksPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function schServiceConnectorTasksPrivateEndpointMetadataToHclTerraform(struct?: SchServiceConnectorTasksPrivateEndpointMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SchServiceConnectorTasksPrivateEndpointMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorTasksPrivateEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorTasksPrivateEndpointMetadata | undefined) {
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

export class SchServiceConnectorTasksPrivateEndpointMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorTasksPrivateEndpointMetadataOutputReference {
    return new SchServiceConnectorTasksPrivateEndpointMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}
  */
  readonly batchSizeInKbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}
  */
  readonly batchTimeInSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}
  */
  readonly kind: string;
}

export function schServiceConnectorTasksToTerraform(struct?: SchServiceConnectorTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size_in_kbs: cdktf.numberToTerraform(struct!.batchSizeInKbs),
    batch_time_in_sec: cdktf.numberToTerraform(struct!.batchTimeInSec),
    condition: cdktf.stringToTerraform(struct!.condition),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function schServiceConnectorTasksToHclTerraform(struct?: SchServiceConnectorTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size_in_kbs: {
      value: cdktf.numberToHclTerraform(struct!.batchSizeInKbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_time_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.batchTimeInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchServiceConnectorTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchServiceConnectorTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSizeInKbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizeInKbs = this._batchSizeInKbs;
    }
    if (this._batchTimeInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchTimeInSec = this._batchTimeInSec;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchServiceConnectorTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSizeInKbs = undefined;
      this._batchTimeInSec = undefined;
      this._condition = undefined;
      this._functionId = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSizeInKbs = value.batchSizeInKbs;
      this._batchTimeInSec = value.batchTimeInSec;
      this._condition = value.condition;
      this._functionId = value.functionId;
      this._kind = value.kind;
    }
  }

  // batch_size_in_kbs - computed: true, optional: true, required: false
  private _batchSizeInKbs?: number; 
  public get batchSizeInKbs() {
    return this.getNumberAttribute('batch_size_in_kbs');
  }
  public set batchSizeInKbs(value: number) {
    this._batchSizeInKbs = value;
  }
  public resetBatchSizeInKbs() {
    this._batchSizeInKbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInKbsInput() {
    return this._batchSizeInKbs;
  }

  // batch_time_in_sec - computed: true, optional: true, required: false
  private _batchTimeInSec?: number; 
  public get batchTimeInSec() {
    return this.getNumberAttribute('batch_time_in_sec');
  }
  public set batchTimeInSec(value: number) {
    this._batchTimeInSec = value;
  }
  public resetBatchTimeInSec() {
    this._batchTimeInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTimeInSecInput() {
    return this._batchTimeInSec;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
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

  // private_endpoint_metadata - computed: true, optional: false, required: false
  private _privateEndpointMetadata = new SchServiceConnectorTasksPrivateEndpointMetadataList(this, "private_endpoint_metadata", false);
  public get privateEndpointMetadata() {
    return this._privateEndpointMetadata;
  }
}

export class SchServiceConnectorTasksList extends cdktf.ComplexList {
  public internalValue? : SchServiceConnectorTasks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchServiceConnectorTasksOutputReference {
    return new SchServiceConnectorTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchServiceConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#create SchServiceConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#update SchServiceConnector#update}
  */
  readonly update?: string;
}

export function schServiceConnectorTimeoutsToTerraform(struct?: SchServiceConnectorTimeouts | cdktf.IResolvable): any {
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


export function schServiceConnectorTimeoutsToHclTerraform(struct?: SchServiceConnectorTimeouts | cdktf.IResolvable): any {
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

export class SchServiceConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchServiceConnectorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SchServiceConnectorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector oci_sch_service_connector}
*/
export class SchServiceConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_sch_service_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchServiceConnector to import
  * @param importFromId The id of the existing SchServiceConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchServiceConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_sch_service_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/sch_service_connector oci_sch_service_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchServiceConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: SchServiceConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_sch_service_connector',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._state = config.state;
    this._source.internalValue = config.source;
    this._target.internalValue = config.target;
    this._tasks.internalValue = config.tasks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecyle_details - computed: true, optional: false, required: false
  public get lifecyleDetails() {
    return this.getStringAttribute('lifecyle_details');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // source - computed: false, optional: false, required: true
  private _source = new SchServiceConnectorSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SchServiceConnectorSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new SchServiceConnectorTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SchServiceConnectorTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new SchServiceConnectorTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: SchServiceConnectorTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SchServiceConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SchServiceConnectorTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      source: schServiceConnectorSourceToTerraform(this._source.internalValue),
      target: schServiceConnectorTargetToTerraform(this._target.internalValue),
      tasks: cdktf.listMapper(schServiceConnectorTasksToTerraform, true)(this._tasks.internalValue),
      timeouts: schServiceConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: schServiceConnectorSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchServiceConnectorSourceList",
      },
      target: {
        value: schServiceConnectorTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchServiceConnectorTargetList",
      },
      tasks: {
        value: cdktf.listMapperHcl(schServiceConnectorTasksToHclTerraform, true)(this._tasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchServiceConnectorTasksList",
      },
      timeouts: {
        value: schServiceConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchServiceConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
