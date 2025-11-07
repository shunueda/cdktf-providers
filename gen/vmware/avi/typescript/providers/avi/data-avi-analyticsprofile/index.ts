// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviAnalyticsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile#id DataAviAnalyticsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile#name DataAviAnalyticsprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile#tenant_ref DataAviAnalyticsprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile#uuid DataAviAnalyticsprofile#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviAnalyticsprofileClientLogConfig {
}

export function dataAviAnalyticsprofileClientLogConfigToTerraform(struct?: DataAviAnalyticsprofileClientLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileClientLogConfigToHclTerraform(struct?: DataAviAnalyticsprofileClientLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileClientLogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileClientLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileClientLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_significant_log_collection - computed: true, optional: false, required: false
  public get enableSignificantLogCollection() {
    return this.getStringAttribute('enable_significant_log_collection');
  }

  // filtered_log_processing - computed: true, optional: false, required: false
  public get filteredLogProcessing() {
    return this.getStringAttribute('filtered_log_processing');
  }

  // non_significant_log_processing - computed: true, optional: false, required: false
  public get nonSignificantLogProcessing() {
    return this.getStringAttribute('non_significant_log_processing');
  }

  // significant_log_processing - computed: true, optional: false, required: false
  public get significantLogProcessing() {
    return this.getStringAttribute('significant_log_processing');
  }
}

export class DataAviAnalyticsprofileClientLogConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileClientLogConfigOutputReference {
    return new DataAviAnalyticsprofileClientLogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileClientLogStreamingConfigFormatConfig {
}

export function dataAviAnalyticsprofileClientLogStreamingConfigFormatConfigToTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfigFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileClientLogStreamingConfigFormatConfigToHclTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfigFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileClientLogStreamingConfigFormatConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileClientLogStreamingConfigFormatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileClientLogStreamingConfigFormatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // included_fields - computed: true, optional: false, required: false
  public get includedFields() {
    return this.getListAttribute('included_fields');
  }
}

export class DataAviAnalyticsprofileClientLogStreamingConfigFormatConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileClientLogStreamingConfigFormatConfigOutputReference {
    return new DataAviAnalyticsprofileClientLogStreamingConfigFormatConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeys {
}

export function dataAviAnalyticsprofileClientLogStreamingConfigMarkerKeysToTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileClientLogStreamingConfigMarkerKeysToHclTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeysList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeysOutputReference {
    return new DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfig {
}

export function dataAviAnalyticsprofileClientLogStreamingConfigSyslogConfigToTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileClientLogStreamingConfigSyslogConfigToHclTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // facility - computed: true, optional: false, required: false
  public get facility() {
    return this.getStringAttribute('facility');
  }

  // filtered_log_severity - computed: true, optional: false, required: false
  public get filteredLogSeverity() {
    return this.getStringAttribute('filtered_log_severity');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // msg_id - computed: true, optional: false, required: false
  public get msgId() {
    return this.getStringAttribute('msg_id');
  }

  // non_significant_log_severity - computed: true, optional: false, required: false
  public get nonSignificantLogSeverity() {
    return this.getStringAttribute('non_significant_log_severity');
  }

  // proc_id - computed: true, optional: false, required: false
  public get procId() {
    return this.getStringAttribute('proc_id');
  }

  // significant_log_severity - computed: true, optional: false, required: false
  public get significantLogSeverity() {
    return this.getStringAttribute('significant_log_severity');
  }
}

export class DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfigOutputReference {
    return new DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileClientLogStreamingConfig {
}

export function dataAviAnalyticsprofileClientLogStreamingConfigToTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileClientLogStreamingConfigToHclTerraform(struct?: DataAviAnalyticsprofileClientLogStreamingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileClientLogStreamingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileClientLogStreamingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileClientLogStreamingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_server - computed: true, optional: false, required: false
  public get externalServer() {
    return this.getStringAttribute('external_server');
  }

  // external_server_port - computed: true, optional: false, required: false
  public get externalServerPort() {
    return this.getStringAttribute('external_server_port');
  }

  // format_config - computed: true, optional: false, required: false
  private _formatConfig = new DataAviAnalyticsprofileClientLogStreamingConfigFormatConfigList(this, "format_config", true);
  public get formatConfig() {
    return this._formatConfig;
  }

  // log_types_to_send - computed: true, optional: false, required: false
  public get logTypesToSend() {
    return this.getStringAttribute('log_types_to_send');
  }

  // marker_keys - computed: true, optional: false, required: false
  private _markerKeys = new DataAviAnalyticsprofileClientLogStreamingConfigMarkerKeysList(this, "marker_keys", false);
  public get markerKeys() {
    return this._markerKeys;
  }

  // max_logs_per_second - computed: true, optional: false, required: false
  public get maxLogsPerSecond() {
    return this.getStringAttribute('max_logs_per_second');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // syslog_config - computed: true, optional: false, required: false
  private _syslogConfig = new DataAviAnalyticsprofileClientLogStreamingConfigSyslogConfigList(this, "syslog_config", true);
  public get syslogConfig() {
    return this._syslogConfig;
  }
}

export class DataAviAnalyticsprofileClientLogStreamingConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileClientLogStreamingConfigOutputReference {
    return new DataAviAnalyticsprofileClientLogStreamingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileConfigpbAttributes {
}

export function dataAviAnalyticsprofileConfigpbAttributesToTerraform(struct?: DataAviAnalyticsprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileConfigpbAttributesToHclTerraform(struct?: DataAviAnalyticsprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviAnalyticsprofileConfigpbAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileConfigpbAttributesOutputReference {
    return new DataAviAnalyticsprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileLatencyAuditProps {
}

export function dataAviAnalyticsprofileLatencyAuditPropsToTerraform(struct?: DataAviAnalyticsprofileLatencyAuditProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileLatencyAuditPropsToHclTerraform(struct?: DataAviAnalyticsprofileLatencyAuditProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileLatencyAuditPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileLatencyAuditProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileLatencyAuditProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conn_est_audit_mode - computed: true, optional: false, required: false
  public get connEstAuditMode() {
    return this.getStringAttribute('conn_est_audit_mode');
  }

  // conn_est_threshold - computed: true, optional: false, required: false
  public get connEstThreshold() {
    return this.getStringAttribute('conn_est_threshold');
  }

  // latency_audit_mode - computed: true, optional: false, required: false
  public get latencyAuditMode() {
    return this.getStringAttribute('latency_audit_mode');
  }

  // latency_threshold - computed: true, optional: false, required: false
  public get latencyThreshold() {
    return this.getStringAttribute('latency_threshold');
  }
}

export class DataAviAnalyticsprofileLatencyAuditPropsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileLatencyAuditPropsOutputReference {
    return new DataAviAnalyticsprofileLatencyAuditPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileMarkers {
}

export function dataAviAnalyticsprofileMarkersToTerraform(struct?: DataAviAnalyticsprofileMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileMarkersToHclTerraform(struct?: DataAviAnalyticsprofileMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileMarkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileMarkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAviAnalyticsprofileMarkersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileMarkersOutputReference {
    return new DataAviAnalyticsprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileRanges {
}

export function dataAviAnalyticsprofileRangesToTerraform(struct?: DataAviAnalyticsprofileRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileRangesToHclTerraform(struct?: DataAviAnalyticsprofileRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getStringAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }
}

export class DataAviAnalyticsprofileRangesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileRangesOutputReference {
    return new DataAviAnalyticsprofileRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch {
}

export function dataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchToTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchToHclTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // match_str - computed: true, optional: false, required: false
  public get matchStr() {
    return this.getListAttribute('match_str');
  }

  // string_group_refs - computed: true, optional: false, required: false
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
}

export class DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchOutputReference {
    return new DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRules {
}

export function dataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesToTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesToHclTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesOutputReference {
    return new DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch {
}

export function dataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchToTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchToHclTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // match_str - computed: true, optional: false, required: false
  public get matchStr() {
    return this.getListAttribute('match_str');
  }

  // string_group_refs - computed: true, optional: false, required: false
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
}

export class DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchOutputReference {
    return new DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRules {
}

export function dataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesToTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesToHclTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesOutputReference {
    return new DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatch {
}

export function dataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatchToTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatchToHclTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // match_str - computed: true, optional: false, required: false
  public get matchStr() {
    return this.getListAttribute('match_str');
  }

  // string_group_refs - computed: true, optional: false, required: false
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
}

export class DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatchList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatchOutputReference {
    return new DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileSensitiveLogProfileWafFieldRules {
}

export function dataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesToTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileWafFieldRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesToHclTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfileWafFieldRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileSensitiveLogProfileWafFieldRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileSensitiveLogProfileWafFieldRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesOutputReference {
    return new DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileSensitiveLogProfile {
}

export function dataAviAnalyticsprofileSensitiveLogProfileToTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileSensitiveLogProfileToHclTerraform(struct?: DataAviAnalyticsprofileSensitiveLogProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileSensitiveLogProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileSensitiveLogProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileSensitiveLogProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_field_rules - computed: true, optional: false, required: false
  private _headerFieldRules = new DataAviAnalyticsprofileSensitiveLogProfileHeaderFieldRulesList(this, "header_field_rules", false);
  public get headerFieldRules() {
    return this._headerFieldRules;
  }

  // uri_query_field_rules - computed: true, optional: false, required: false
  private _uriQueryFieldRules = new DataAviAnalyticsprofileSensitiveLogProfileUriQueryFieldRulesList(this, "uri_query_field_rules", false);
  public get uriQueryFieldRules() {
    return this._uriQueryFieldRules;
  }

  // waf_field_rules - computed: true, optional: false, required: false
  private _wafFieldRules = new DataAviAnalyticsprofileSensitiveLogProfileWafFieldRulesList(this, "waf_field_rules", false);
  public get wafFieldRules() {
    return this._wafFieldRules;
  }
}

export class DataAviAnalyticsprofileSensitiveLogProfileList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileSensitiveLogProfileOutputReference {
    return new DataAviAnalyticsprofileSensitiveLogProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAnalyticsprofileTimeTrackerProps {
}

export function dataAviAnalyticsprofileTimeTrackerPropsToTerraform(struct?: DataAviAnalyticsprofileTimeTrackerProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAnalyticsprofileTimeTrackerPropsToHclTerraform(struct?: DataAviAnalyticsprofileTimeTrackerProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAnalyticsprofileTimeTrackerPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAnalyticsprofileTimeTrackerProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAnalyticsprofileTimeTrackerProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // be_conn_est_audit_mode - computed: true, optional: false, required: false
  public get beConnEstAuditMode() {
    return this.getStringAttribute('be_conn_est_audit_mode');
  }

  // be_conn_est_threshold - computed: true, optional: false, required: false
  public get beConnEstThreshold() {
    return this.getStringAttribute('be_conn_est_threshold');
  }

  // fe_conn_est_audit_mode - computed: true, optional: false, required: false
  public get feConnEstAuditMode() {
    return this.getStringAttribute('fe_conn_est_audit_mode');
  }

  // fe_conn_est_threshold - computed: true, optional: false, required: false
  public get feConnEstThreshold() {
    return this.getStringAttribute('fe_conn_est_threshold');
  }

  // ingress_sig_log - computed: true, optional: false, required: false
  public get ingressSigLog() {
    return this.getStringAttribute('ingress_sig_log');
  }
}

export class DataAviAnalyticsprofileTimeTrackerPropsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAviAnalyticsprofileTimeTrackerPropsOutputReference {
    return new DataAviAnalyticsprofileTimeTrackerPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile avi_analyticsprofile}
*/
export class DataAviAnalyticsprofile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_analyticsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviAnalyticsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviAnalyticsprofile to import
  * @param importFromId The id of the existing DataAviAnalyticsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviAnalyticsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_analyticsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/analyticsprofile avi_analyticsprofile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviAnalyticsprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviAnalyticsprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_analyticsprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apdex_response_threshold - computed: true, optional: false, required: false
  public get apdexResponseThreshold() {
    return this.getStringAttribute('apdex_response_threshold');
  }

  // apdex_response_tolerated_factor - computed: true, optional: false, required: false
  public get apdexResponseToleratedFactor() {
    return this.getStringAttribute('apdex_response_tolerated_factor');
  }

  // apdex_rtt_threshold - computed: true, optional: false, required: false
  public get apdexRttThreshold() {
    return this.getStringAttribute('apdex_rtt_threshold');
  }

  // apdex_rtt_tolerated_factor - computed: true, optional: false, required: false
  public get apdexRttToleratedFactor() {
    return this.getStringAttribute('apdex_rtt_tolerated_factor');
  }

  // apdex_rum_threshold - computed: true, optional: false, required: false
  public get apdexRumThreshold() {
    return this.getStringAttribute('apdex_rum_threshold');
  }

  // apdex_rum_tolerated_factor - computed: true, optional: false, required: false
  public get apdexRumToleratedFactor() {
    return this.getStringAttribute('apdex_rum_tolerated_factor');
  }

  // apdex_server_response_threshold - computed: true, optional: false, required: false
  public get apdexServerResponseThreshold() {
    return this.getStringAttribute('apdex_server_response_threshold');
  }

  // apdex_server_response_tolerated_factor - computed: true, optional: false, required: false
  public get apdexServerResponseToleratedFactor() {
    return this.getStringAttribute('apdex_server_response_tolerated_factor');
  }

  // apdex_server_rtt_threshold - computed: true, optional: false, required: false
  public get apdexServerRttThreshold() {
    return this.getStringAttribute('apdex_server_rtt_threshold');
  }

  // apdex_server_rtt_tolerated_factor - computed: true, optional: false, required: false
  public get apdexServerRttToleratedFactor() {
    return this.getStringAttribute('apdex_server_rtt_tolerated_factor');
  }

  // client_log_config - computed: true, optional: false, required: false
  private _clientLogConfig = new DataAviAnalyticsprofileClientLogConfigList(this, "client_log_config", true);
  public get clientLogConfig() {
    return this._clientLogConfig;
  }

  // client_log_streaming_config - computed: true, optional: false, required: false
  private _clientLogStreamingConfig = new DataAviAnalyticsprofileClientLogStreamingConfigList(this, "client_log_streaming_config", true);
  public get clientLogStreamingConfig() {
    return this._clientLogStreamingConfig;
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviAnalyticsprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // conn_lossy_ooo_threshold - computed: true, optional: false, required: false
  public get connLossyOooThreshold() {
    return this.getStringAttribute('conn_lossy_ooo_threshold');
  }

  // conn_lossy_timeo_rexmt_threshold - computed: true, optional: false, required: false
  public get connLossyTimeoRexmtThreshold() {
    return this.getStringAttribute('conn_lossy_timeo_rexmt_threshold');
  }

  // conn_lossy_total_rexmt_threshold - computed: true, optional: false, required: false
  public get connLossyTotalRexmtThreshold() {
    return this.getStringAttribute('conn_lossy_total_rexmt_threshold');
  }

  // conn_lossy_zero_win_size_event_threshold - computed: true, optional: false, required: false
  public get connLossyZeroWinSizeEventThreshold() {
    return this.getStringAttribute('conn_lossy_zero_win_size_event_threshold');
  }

  // conn_server_lossy_ooo_threshold - computed: true, optional: false, required: false
  public get connServerLossyOooThreshold() {
    return this.getStringAttribute('conn_server_lossy_ooo_threshold');
  }

  // conn_server_lossy_timeo_rexmt_threshold - computed: true, optional: false, required: false
  public get connServerLossyTimeoRexmtThreshold() {
    return this.getStringAttribute('conn_server_lossy_timeo_rexmt_threshold');
  }

  // conn_server_lossy_total_rexmt_threshold - computed: true, optional: false, required: false
  public get connServerLossyTotalRexmtThreshold() {
    return this.getStringAttribute('conn_server_lossy_total_rexmt_threshold');
  }

  // conn_server_lossy_zero_win_size_event_threshold - computed: true, optional: false, required: false
  public get connServerLossyZeroWinSizeEventThreshold() {
    return this.getStringAttribute('conn_server_lossy_zero_win_size_event_threshold');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_adaptive_config - computed: true, optional: false, required: false
  public get enableAdaptiveConfig() {
    return this.getStringAttribute('enable_adaptive_config');
  }

  // enable_advanced_analytics - computed: true, optional: false, required: false
  public get enableAdvancedAnalytics() {
    return this.getStringAttribute('enable_advanced_analytics');
  }

  // enable_ondemand_metrics - computed: true, optional: false, required: false
  public get enableOndemandMetrics() {
    return this.getStringAttribute('enable_ondemand_metrics');
  }

  // enable_se_analytics - computed: true, optional: false, required: false
  public get enableSeAnalytics() {
    return this.getStringAttribute('enable_se_analytics');
  }

  // enable_server_analytics - computed: true, optional: false, required: false
  public get enableServerAnalytics() {
    return this.getStringAttribute('enable_server_analytics');
  }

  // enable_vs_analytics - computed: true, optional: false, required: false
  public get enableVsAnalytics() {
    return this.getStringAttribute('enable_vs_analytics');
  }

  // exclude_client_close_before_request_as_error - computed: true, optional: false, required: false
  public get excludeClientCloseBeforeRequestAsError() {
    return this.getStringAttribute('exclude_client_close_before_request_as_error');
  }

  // exclude_dns_policy_drop_as_significant - computed: true, optional: false, required: false
  public get excludeDnsPolicyDropAsSignificant() {
    return this.getStringAttribute('exclude_dns_policy_drop_as_significant');
  }

  // exclude_gs_down_as_error - computed: true, optional: false, required: false
  public get excludeGsDownAsError() {
    return this.getStringAttribute('exclude_gs_down_as_error');
  }

  // exclude_http_error_codes - computed: true, optional: false, required: false
  public get excludeHttpErrorCodes() {
    return this.getNumberListAttribute('exclude_http_error_codes');
  }

  // exclude_invalid_dns_domain_as_error - computed: true, optional: false, required: false
  public get excludeInvalidDnsDomainAsError() {
    return this.getStringAttribute('exclude_invalid_dns_domain_as_error');
  }

  // exclude_invalid_dns_query_as_error - computed: true, optional: false, required: false
  public get excludeInvalidDnsQueryAsError() {
    return this.getStringAttribute('exclude_invalid_dns_query_as_error');
  }

  // exclude_issuer_revoked_ocsp_responses_as_error - computed: true, optional: false, required: false
  public get excludeIssuerRevokedOcspResponsesAsError() {
    return this.getStringAttribute('exclude_issuer_revoked_ocsp_responses_as_error');
  }

  // exclude_no_dns_record_as_error - computed: true, optional: false, required: false
  public get excludeNoDnsRecordAsError() {
    return this.getStringAttribute('exclude_no_dns_record_as_error');
  }

  // exclude_no_valid_gs_member_as_error - computed: true, optional: false, required: false
  public get excludeNoValidGsMemberAsError() {
    return this.getStringAttribute('exclude_no_valid_gs_member_as_error');
  }

  // exclude_persistence_change_as_error - computed: true, optional: false, required: false
  public get excludePersistenceChangeAsError() {
    return this.getStringAttribute('exclude_persistence_change_as_error');
  }

  // exclude_revoked_ocsp_responses_as_error - computed: true, optional: false, required: false
  public get excludeRevokedOcspResponsesAsError() {
    return this.getStringAttribute('exclude_revoked_ocsp_responses_as_error');
  }

  // exclude_server_dns_error_as_error - computed: true, optional: false, required: false
  public get excludeServerDnsErrorAsError() {
    return this.getStringAttribute('exclude_server_dns_error_as_error');
  }

  // exclude_server_tcp_reset_as_error - computed: true, optional: false, required: false
  public get excludeServerTcpResetAsError() {
    return this.getStringAttribute('exclude_server_tcp_reset_as_error');
  }

  // exclude_sip_error_codes - computed: true, optional: false, required: false
  public get excludeSipErrorCodes() {
    return this.getNumberListAttribute('exclude_sip_error_codes');
  }

  // exclude_stale_ocsp_responses_as_error - computed: true, optional: false, required: false
  public get excludeStaleOcspResponsesAsError() {
    return this.getStringAttribute('exclude_stale_ocsp_responses_as_error');
  }

  // exclude_syn_retransmit_as_error - computed: true, optional: false, required: false
  public get excludeSynRetransmitAsError() {
    return this.getStringAttribute('exclude_syn_retransmit_as_error');
  }

  // exclude_tcp_reset_as_error - computed: true, optional: false, required: false
  public get excludeTcpResetAsError() {
    return this.getStringAttribute('exclude_tcp_reset_as_error');
  }

  // exclude_unavailable_ocsp_responses_as_error - computed: true, optional: false, required: false
  public get excludeUnavailableOcspResponsesAsError() {
    return this.getStringAttribute('exclude_unavailable_ocsp_responses_as_error');
  }

  // exclude_unsupported_dns_query_as_error - computed: true, optional: false, required: false
  public get excludeUnsupportedDnsQueryAsError() {
    return this.getStringAttribute('exclude_unsupported_dns_query_as_error');
  }

  // healthscore_max_server_limit - computed: true, optional: false, required: false
  public get healthscoreMaxServerLimit() {
    return this.getStringAttribute('healthscore_max_server_limit');
  }

  // hs_event_throttle_window - computed: true, optional: false, required: false
  public get hsEventThrottleWindow() {
    return this.getStringAttribute('hs_event_throttle_window');
  }

  // hs_max_anomaly_penalty - computed: true, optional: false, required: false
  public get hsMaxAnomalyPenalty() {
    return this.getStringAttribute('hs_max_anomaly_penalty');
  }

  // hs_max_resources_penalty - computed: true, optional: false, required: false
  public get hsMaxResourcesPenalty() {
    return this.getStringAttribute('hs_max_resources_penalty');
  }

  // hs_max_security_penalty - computed: true, optional: false, required: false
  public get hsMaxSecurityPenalty() {
    return this.getStringAttribute('hs_max_security_penalty');
  }

  // hs_min_dos_rate - computed: true, optional: false, required: false
  public get hsMinDosRate() {
    return this.getStringAttribute('hs_min_dos_rate');
  }

  // hs_performance_boost - computed: true, optional: false, required: false
  public get hsPerformanceBoost() {
    return this.getStringAttribute('hs_performance_boost');
  }

  // hs_pscore_traffic_threshold_l4_client - computed: true, optional: false, required: false
  public get hsPscoreTrafficThresholdL4Client() {
    return this.getStringAttribute('hs_pscore_traffic_threshold_l4_client');
  }

  // hs_pscore_traffic_threshold_l4_server - computed: true, optional: false, required: false
  public get hsPscoreTrafficThresholdL4Server() {
    return this.getStringAttribute('hs_pscore_traffic_threshold_l4_server');
  }

  // hs_security_certscore_expired - computed: true, optional: false, required: false
  public get hsSecurityCertscoreExpired() {
    return this.getStringAttribute('hs_security_certscore_expired');
  }

  // hs_security_certscore_gt30d - computed: true, optional: false, required: false
  public get hsSecurityCertscoreGt30D() {
    return this.getStringAttribute('hs_security_certscore_gt30d');
  }

  // hs_security_certscore_le07d - computed: true, optional: false, required: false
  public get hsSecurityCertscoreLe07D() {
    return this.getStringAttribute('hs_security_certscore_le07d');
  }

  // hs_security_certscore_le30d - computed: true, optional: false, required: false
  public get hsSecurityCertscoreLe30D() {
    return this.getStringAttribute('hs_security_certscore_le30d');
  }

  // hs_security_chain_invalidity_penalty - computed: true, optional: false, required: false
  public get hsSecurityChainInvalidityPenalty() {
    return this.getStringAttribute('hs_security_chain_invalidity_penalty');
  }

  // hs_security_cipherscore_eq000b - computed: true, optional: false, required: false
  public get hsSecurityCipherscoreEq000B() {
    return this.getStringAttribute('hs_security_cipherscore_eq000b');
  }

  // hs_security_cipherscore_ge128b - computed: true, optional: false, required: false
  public get hsSecurityCipherscoreGe128B() {
    return this.getStringAttribute('hs_security_cipherscore_ge128b');
  }

  // hs_security_cipherscore_lt128b - computed: true, optional: false, required: false
  public get hsSecurityCipherscoreLt128B() {
    return this.getStringAttribute('hs_security_cipherscore_lt128b');
  }

  // hs_security_encalgo_score_none - computed: true, optional: false, required: false
  public get hsSecurityEncalgoScoreNone() {
    return this.getStringAttribute('hs_security_encalgo_score_none');
  }

  // hs_security_encalgo_score_rc4 - computed: true, optional: false, required: false
  public get hsSecurityEncalgoScoreRc4() {
    return this.getStringAttribute('hs_security_encalgo_score_rc4');
  }

  // hs_security_hsts_penalty - computed: true, optional: false, required: false
  public get hsSecurityHstsPenalty() {
    return this.getStringAttribute('hs_security_hsts_penalty');
  }

  // hs_security_nonpfs_penalty - computed: true, optional: false, required: false
  public get hsSecurityNonpfsPenalty() {
    return this.getStringAttribute('hs_security_nonpfs_penalty');
  }

  // hs_security_ocsp_revoked_score - computed: true, optional: false, required: false
  public get hsSecurityOcspRevokedScore() {
    return this.getStringAttribute('hs_security_ocsp_revoked_score');
  }

  // hs_security_selfsignedcert_penalty - computed: true, optional: false, required: false
  public get hsSecuritySelfsignedcertPenalty() {
    return this.getStringAttribute('hs_security_selfsignedcert_penalty');
  }

  // hs_security_ssl30_score - computed: true, optional: false, required: false
  public get hsSecuritySsl30Score() {
    return this.getStringAttribute('hs_security_ssl30_score');
  }

  // hs_security_tls10_score - computed: true, optional: false, required: false
  public get hsSecurityTls10Score() {
    return this.getStringAttribute('hs_security_tls10_score');
  }

  // hs_security_tls11_score - computed: true, optional: false, required: false
  public get hsSecurityTls11Score() {
    return this.getStringAttribute('hs_security_tls11_score');
  }

  // hs_security_tls12_score - computed: true, optional: false, required: false
  public get hsSecurityTls12Score() {
    return this.getStringAttribute('hs_security_tls12_score');
  }

  // hs_security_tls13_score - computed: true, optional: false, required: false
  public get hsSecurityTls13Score() {
    return this.getStringAttribute('hs_security_tls13_score');
  }

  // hs_security_weak_signature_algo_penalty - computed: true, optional: false, required: false
  public get hsSecurityWeakSignatureAlgoPenalty() {
    return this.getStringAttribute('hs_security_weak_signature_algo_penalty');
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

  // latency_audit_props - computed: true, optional: false, required: false
  private _latencyAuditProps = new DataAviAnalyticsprofileLatencyAuditPropsList(this, "latency_audit_props", true);
  public get latencyAuditProps() {
    return this._latencyAuditProps;
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataAviAnalyticsprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
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

  // ondemand_metrics_idle_timeout - computed: true, optional: false, required: false
  public get ondemandMetricsIdleTimeout() {
    return this.getStringAttribute('ondemand_metrics_idle_timeout');
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataAviAnalyticsprofileRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }

  // resp_code_block - computed: true, optional: false, required: false
  public get respCodeBlock() {
    return this.getListAttribute('resp_code_block');
  }

  // sensitive_log_profile - computed: true, optional: false, required: false
  private _sensitiveLogProfile = new DataAviAnalyticsprofileSensitiveLogProfileList(this, "sensitive_log_profile", true);
  public get sensitiveLogProfile() {
    return this._sensitiveLogProfile;
  }

  // sip_log_depth - computed: true, optional: false, required: false
  public get sipLogDepth() {
    return this.getStringAttribute('sip_log_depth');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // time_tracker_props - computed: true, optional: false, required: false
  private _timeTrackerProps = new DataAviAnalyticsprofileTimeTrackerPropsList(this, "time_tracker_props", true);
  public get timeTrackerProps() {
    return this._timeTrackerProps;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
