// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogmeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#name LogmeInstance#name}
  */
  readonly name: string;
  /**
  * Configuration parameters. Please note that removing a previously configured field from your Terraform configuration won't replace its value in the API. To update a previously configured field, explicitly set a new value for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#parameters LogmeInstance#parameters}
  */
  readonly parameters?: LogmeInstanceParameters;
  /**
  * The selected plan name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#plan_name LogmeInstance#plan_name}
  */
  readonly planName: string;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#project_id LogmeInstance#project_id}
  */
  readonly projectId: string;
  /**
  * The service version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#version LogmeInstance#version}
  */
  readonly version: string;
}
export interface LogmeInstanceParameters {
  /**
  * Enable monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#enable_monitoring LogmeInstance#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#fluentd_tcp LogmeInstance#fluentd_tcp}
  */
  readonly fluentdTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#fluentd_tls LogmeInstance#fluentd_tls}
  */
  readonly fluentdTls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#fluentd_tls_ciphers LogmeInstance#fluentd_tls_ciphers}
  */
  readonly fluentdTlsCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#fluentd_tls_max_version LogmeInstance#fluentd_tls_max_version}
  */
  readonly fluentdTlsMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#fluentd_tls_min_version LogmeInstance#fluentd_tls_min_version}
  */
  readonly fluentdTlsMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#fluentd_tls_version LogmeInstance#fluentd_tls_version}
  */
  readonly fluentdTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#fluentd_udp LogmeInstance#fluentd_udp}
  */
  readonly fluentdUdp?: number;
  /**
  * If set, monitoring with Graphite will be enabled. Expects the host and port where the Graphite metrics should be sent to (host:port).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#graphite LogmeInstance#graphite}
  */
  readonly graphite?: string;
  /**
  * Combination of an integer and a timerange when an index will be considered "old" and can be deleted. Possible values for the timerange are `s`, `m`, `h` and `d`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#ism_deletion_after LogmeInstance#ism_deletion_after}
  */
  readonly ismDeletionAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#ism_jitter LogmeInstance#ism_jitter}
  */
  readonly ismJitter?: number;
  /**
  * Jitter of the execution time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#ism_job_interval LogmeInstance#ism_job_interval}
  */
  readonly ismJobInterval?: number;
  /**
  * The amount of memory (in MB) allocated as heap by the JVM for OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#java_heapspace LogmeInstance#java_heapspace}
  */
  readonly javaHeapspace?: number;
  /**
  * The amount of memory (in MB) used by the JVM to store metadata for OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#java_maxmetaspace LogmeInstance#java_maxmetaspace}
  */
  readonly javaMaxmetaspace?: number;
  /**
  * The maximum disk threshold in MB. If the disk usage exceeds this threshold, the instance will be stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#max_disk_threshold LogmeInstance#max_disk_threshold}
  */
  readonly maxDiskThreshold?: number;
  /**
  * The frequency in seconds at which metrics are emitted (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#metrics_frequency LogmeInstance#metrics_frequency}
  */
  readonly metricsFrequency?: number;
  /**
  * The prefix for the metrics. Could be useful when using Graphite monitoring to prefix the metrics with a certain value, like an API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#metrics_prefix LogmeInstance#metrics_prefix}
  */
  readonly metricsPrefix?: string;
  /**
  * The ID of the STACKIT monitoring instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#monitoring_instance_id LogmeInstance#monitoring_instance_id}
  */
  readonly monitoringInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#opensearch_tls_ciphers LogmeInstance#opensearch_tls_ciphers}
  */
  readonly opensearchTlsCiphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#opensearch_tls_protocols LogmeInstance#opensearch_tls_protocols}
  */
  readonly opensearchTlsProtocols?: string[];
  /**
  * Comma separated list of IP networks in CIDR notation which are allowed to access this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#sgw_acl LogmeInstance#sgw_acl}
  */
  readonly sgwAcl?: string;
  /**
  * List of syslog servers to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#syslog LogmeInstance#syslog}
  */
  readonly syslog?: string[];
}

export function logmeInstanceParametersToTerraform(struct?: LogmeInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_monitoring: cdktf.booleanToTerraform(struct!.enableMonitoring),
    fluentd_tcp: cdktf.numberToTerraform(struct!.fluentdTcp),
    fluentd_tls: cdktf.numberToTerraform(struct!.fluentdTls),
    fluentd_tls_ciphers: cdktf.stringToTerraform(struct!.fluentdTlsCiphers),
    fluentd_tls_max_version: cdktf.stringToTerraform(struct!.fluentdTlsMaxVersion),
    fluentd_tls_min_version: cdktf.stringToTerraform(struct!.fluentdTlsMinVersion),
    fluentd_tls_version: cdktf.stringToTerraform(struct!.fluentdTlsVersion),
    fluentd_udp: cdktf.numberToTerraform(struct!.fluentdUdp),
    graphite: cdktf.stringToTerraform(struct!.graphite),
    ism_deletion_after: cdktf.stringToTerraform(struct!.ismDeletionAfter),
    ism_jitter: cdktf.numberToTerraform(struct!.ismJitter),
    ism_job_interval: cdktf.numberToTerraform(struct!.ismJobInterval),
    java_heapspace: cdktf.numberToTerraform(struct!.javaHeapspace),
    java_maxmetaspace: cdktf.numberToTerraform(struct!.javaMaxmetaspace),
    max_disk_threshold: cdktf.numberToTerraform(struct!.maxDiskThreshold),
    metrics_frequency: cdktf.numberToTerraform(struct!.metricsFrequency),
    metrics_prefix: cdktf.stringToTerraform(struct!.metricsPrefix),
    monitoring_instance_id: cdktf.stringToTerraform(struct!.monitoringInstanceId),
    opensearch_tls_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.opensearchTlsCiphers),
    opensearch_tls_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.opensearchTlsProtocols),
    sgw_acl: cdktf.stringToTerraform(struct!.sgwAcl),
    syslog: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syslog),
  }
}


export function logmeInstanceParametersToHclTerraform(struct?: LogmeInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fluentd_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fluentdTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fluentd_tls: {
      value: cdktf.numberToHclTerraform(struct!.fluentdTls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fluentd_tls_ciphers: {
      value: cdktf.stringToHclTerraform(struct!.fluentdTlsCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fluentd_tls_max_version: {
      value: cdktf.stringToHclTerraform(struct!.fluentdTlsMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fluentd_tls_min_version: {
      value: cdktf.stringToHclTerraform(struct!.fluentdTlsMinVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fluentd_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.fluentdTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fluentd_udp: {
      value: cdktf.numberToHclTerraform(struct!.fluentdUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graphite: {
      value: cdktf.stringToHclTerraform(struct!.graphite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ism_deletion_after: {
      value: cdktf.stringToHclTerraform(struct!.ismDeletionAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ism_jitter: {
      value: cdktf.numberToHclTerraform(struct!.ismJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_job_interval: {
      value: cdktf.numberToHclTerraform(struct!.ismJobInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    java_heapspace: {
      value: cdktf.numberToHclTerraform(struct!.javaHeapspace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    java_maxmetaspace: {
      value: cdktf.numberToHclTerraform(struct!.javaMaxmetaspace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_disk_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_frequency: {
      value: cdktf.numberToHclTerraform(struct!.metricsFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_prefix: {
      value: cdktf.stringToHclTerraform(struct!.metricsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.monitoringInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearch_tls_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.opensearchTlsCiphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    opensearch_tls_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.opensearchTlsProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sgw_acl: {
      value: cdktf.stringToHclTerraform(struct!.sgwAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syslog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogmeInstanceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogmeInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMonitoring = this._enableMonitoring;
    }
    if (this._fluentdTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdTcp = this._fluentdTcp;
    }
    if (this._fluentdTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdTls = this._fluentdTls;
    }
    if (this._fluentdTlsCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdTlsCiphers = this._fluentdTlsCiphers;
    }
    if (this._fluentdTlsMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdTlsMaxVersion = this._fluentdTlsMaxVersion;
    }
    if (this._fluentdTlsMinVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdTlsMinVersion = this._fluentdTlsMinVersion;
    }
    if (this._fluentdTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdTlsVersion = this._fluentdTlsVersion;
    }
    if (this._fluentdUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdUdp = this._fluentdUdp;
    }
    if (this._graphite !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite;
    }
    if (this._ismDeletionAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismDeletionAfter = this._ismDeletionAfter;
    }
    if (this._ismJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismJitter = this._ismJitter;
    }
    if (this._ismJobInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismJobInterval = this._ismJobInterval;
    }
    if (this._javaHeapspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaHeapspace = this._javaHeapspace;
    }
    if (this._javaMaxmetaspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaMaxmetaspace = this._javaMaxmetaspace;
    }
    if (this._maxDiskThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskThreshold = this._maxDiskThreshold;
    }
    if (this._metricsFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsFrequency = this._metricsFrequency;
    }
    if (this._metricsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPrefix = this._metricsPrefix;
    }
    if (this._monitoringInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringInstanceId = this._monitoringInstanceId;
    }
    if (this._opensearchTlsCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchTlsCiphers = this._opensearchTlsCiphers;
    }
    if (this._opensearchTlsProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchTlsProtocols = this._opensearchTlsProtocols;
    }
    if (this._sgwAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgwAcl = this._sgwAcl;
    }
    if (this._syslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogmeInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMonitoring = undefined;
      this._fluentdTcp = undefined;
      this._fluentdTls = undefined;
      this._fluentdTlsCiphers = undefined;
      this._fluentdTlsMaxVersion = undefined;
      this._fluentdTlsMinVersion = undefined;
      this._fluentdTlsVersion = undefined;
      this._fluentdUdp = undefined;
      this._graphite = undefined;
      this._ismDeletionAfter = undefined;
      this._ismJitter = undefined;
      this._ismJobInterval = undefined;
      this._javaHeapspace = undefined;
      this._javaMaxmetaspace = undefined;
      this._maxDiskThreshold = undefined;
      this._metricsFrequency = undefined;
      this._metricsPrefix = undefined;
      this._monitoringInstanceId = undefined;
      this._opensearchTlsCiphers = undefined;
      this._opensearchTlsProtocols = undefined;
      this._sgwAcl = undefined;
      this._syslog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMonitoring = value.enableMonitoring;
      this._fluentdTcp = value.fluentdTcp;
      this._fluentdTls = value.fluentdTls;
      this._fluentdTlsCiphers = value.fluentdTlsCiphers;
      this._fluentdTlsMaxVersion = value.fluentdTlsMaxVersion;
      this._fluentdTlsMinVersion = value.fluentdTlsMinVersion;
      this._fluentdTlsVersion = value.fluentdTlsVersion;
      this._fluentdUdp = value.fluentdUdp;
      this._graphite = value.graphite;
      this._ismDeletionAfter = value.ismDeletionAfter;
      this._ismJitter = value.ismJitter;
      this._ismJobInterval = value.ismJobInterval;
      this._javaHeapspace = value.javaHeapspace;
      this._javaMaxmetaspace = value.javaMaxmetaspace;
      this._maxDiskThreshold = value.maxDiskThreshold;
      this._metricsFrequency = value.metricsFrequency;
      this._metricsPrefix = value.metricsPrefix;
      this._monitoringInstanceId = value.monitoringInstanceId;
      this._opensearchTlsCiphers = value.opensearchTlsCiphers;
      this._opensearchTlsProtocols = value.opensearchTlsProtocols;
      this._sgwAcl = value.sgwAcl;
      this._syslog = value.syslog;
    }
  }

  // enable_monitoring - computed: true, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // fluentd_tcp - computed: true, optional: true, required: false
  private _fluentdTcp?: number; 
  public get fluentdTcp() {
    return this.getNumberAttribute('fluentd_tcp');
  }
  public set fluentdTcp(value: number) {
    this._fluentdTcp = value;
  }
  public resetFluentdTcp() {
    this._fluentdTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdTcpInput() {
    return this._fluentdTcp;
  }

  // fluentd_tls - computed: true, optional: true, required: false
  private _fluentdTls?: number; 
  public get fluentdTls() {
    return this.getNumberAttribute('fluentd_tls');
  }
  public set fluentdTls(value: number) {
    this._fluentdTls = value;
  }
  public resetFluentdTls() {
    this._fluentdTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdTlsInput() {
    return this._fluentdTls;
  }

  // fluentd_tls_ciphers - computed: true, optional: true, required: false
  private _fluentdTlsCiphers?: string; 
  public get fluentdTlsCiphers() {
    return this.getStringAttribute('fluentd_tls_ciphers');
  }
  public set fluentdTlsCiphers(value: string) {
    this._fluentdTlsCiphers = value;
  }
  public resetFluentdTlsCiphers() {
    this._fluentdTlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdTlsCiphersInput() {
    return this._fluentdTlsCiphers;
  }

  // fluentd_tls_max_version - computed: true, optional: true, required: false
  private _fluentdTlsMaxVersion?: string; 
  public get fluentdTlsMaxVersion() {
    return this.getStringAttribute('fluentd_tls_max_version');
  }
  public set fluentdTlsMaxVersion(value: string) {
    this._fluentdTlsMaxVersion = value;
  }
  public resetFluentdTlsMaxVersion() {
    this._fluentdTlsMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdTlsMaxVersionInput() {
    return this._fluentdTlsMaxVersion;
  }

  // fluentd_tls_min_version - computed: true, optional: true, required: false
  private _fluentdTlsMinVersion?: string; 
  public get fluentdTlsMinVersion() {
    return this.getStringAttribute('fluentd_tls_min_version');
  }
  public set fluentdTlsMinVersion(value: string) {
    this._fluentdTlsMinVersion = value;
  }
  public resetFluentdTlsMinVersion() {
    this._fluentdTlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdTlsMinVersionInput() {
    return this._fluentdTlsMinVersion;
  }

  // fluentd_tls_version - computed: true, optional: true, required: false
  private _fluentdTlsVersion?: string; 
  public get fluentdTlsVersion() {
    return this.getStringAttribute('fluentd_tls_version');
  }
  public set fluentdTlsVersion(value: string) {
    this._fluentdTlsVersion = value;
  }
  public resetFluentdTlsVersion() {
    this._fluentdTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdTlsVersionInput() {
    return this._fluentdTlsVersion;
  }

  // fluentd_udp - computed: true, optional: true, required: false
  private _fluentdUdp?: number; 
  public get fluentdUdp() {
    return this.getNumberAttribute('fluentd_udp');
  }
  public set fluentdUdp(value: number) {
    this._fluentdUdp = value;
  }
  public resetFluentdUdp() {
    this._fluentdUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdUdpInput() {
    return this._fluentdUdp;
  }

  // graphite - computed: true, optional: true, required: false
  private _graphite?: string; 
  public get graphite() {
    return this.getStringAttribute('graphite');
  }
  public set graphite(value: string) {
    this._graphite = value;
  }
  public resetGraphite() {
    this._graphite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite;
  }

  // ism_deletion_after - computed: true, optional: true, required: false
  private _ismDeletionAfter?: string; 
  public get ismDeletionAfter() {
    return this.getStringAttribute('ism_deletion_after');
  }
  public set ismDeletionAfter(value: string) {
    this._ismDeletionAfter = value;
  }
  public resetIsmDeletionAfter() {
    this._ismDeletionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismDeletionAfterInput() {
    return this._ismDeletionAfter;
  }

  // ism_jitter - computed: true, optional: true, required: false
  private _ismJitter?: number; 
  public get ismJitter() {
    return this.getNumberAttribute('ism_jitter');
  }
  public set ismJitter(value: number) {
    this._ismJitter = value;
  }
  public resetIsmJitter() {
    this._ismJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismJitterInput() {
    return this._ismJitter;
  }

  // ism_job_interval - computed: true, optional: true, required: false
  private _ismJobInterval?: number; 
  public get ismJobInterval() {
    return this.getNumberAttribute('ism_job_interval');
  }
  public set ismJobInterval(value: number) {
    this._ismJobInterval = value;
  }
  public resetIsmJobInterval() {
    this._ismJobInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismJobIntervalInput() {
    return this._ismJobInterval;
  }

  // java_heapspace - computed: true, optional: true, required: false
  private _javaHeapspace?: number; 
  public get javaHeapspace() {
    return this.getNumberAttribute('java_heapspace');
  }
  public set javaHeapspace(value: number) {
    this._javaHeapspace = value;
  }
  public resetJavaHeapspace() {
    this._javaHeapspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaHeapspaceInput() {
    return this._javaHeapspace;
  }

  // java_maxmetaspace - computed: true, optional: true, required: false
  private _javaMaxmetaspace?: number; 
  public get javaMaxmetaspace() {
    return this.getNumberAttribute('java_maxmetaspace');
  }
  public set javaMaxmetaspace(value: number) {
    this._javaMaxmetaspace = value;
  }
  public resetJavaMaxmetaspace() {
    this._javaMaxmetaspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaMaxmetaspaceInput() {
    return this._javaMaxmetaspace;
  }

  // max_disk_threshold - computed: true, optional: true, required: false
  private _maxDiskThreshold?: number; 
  public get maxDiskThreshold() {
    return this.getNumberAttribute('max_disk_threshold');
  }
  public set maxDiskThreshold(value: number) {
    this._maxDiskThreshold = value;
  }
  public resetMaxDiskThreshold() {
    this._maxDiskThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskThresholdInput() {
    return this._maxDiskThreshold;
  }

  // metrics_frequency - computed: true, optional: true, required: false
  private _metricsFrequency?: number; 
  public get metricsFrequency() {
    return this.getNumberAttribute('metrics_frequency');
  }
  public set metricsFrequency(value: number) {
    this._metricsFrequency = value;
  }
  public resetMetricsFrequency() {
    this._metricsFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsFrequencyInput() {
    return this._metricsFrequency;
  }

  // metrics_prefix - computed: true, optional: true, required: false
  private _metricsPrefix?: string; 
  public get metricsPrefix() {
    return this.getStringAttribute('metrics_prefix');
  }
  public set metricsPrefix(value: string) {
    this._metricsPrefix = value;
  }
  public resetMetricsPrefix() {
    this._metricsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPrefixInput() {
    return this._metricsPrefix;
  }

  // monitoring_instance_id - computed: true, optional: true, required: false
  private _monitoringInstanceId?: string; 
  public get monitoringInstanceId() {
    return this.getStringAttribute('monitoring_instance_id');
  }
  public set monitoringInstanceId(value: string) {
    this._monitoringInstanceId = value;
  }
  public resetMonitoringInstanceId() {
    this._monitoringInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInstanceIdInput() {
    return this._monitoringInstanceId;
  }

  // opensearch_tls_ciphers - computed: true, optional: true, required: false
  private _opensearchTlsCiphers?: string[]; 
  public get opensearchTlsCiphers() {
    return this.getListAttribute('opensearch_tls_ciphers');
  }
  public set opensearchTlsCiphers(value: string[]) {
    this._opensearchTlsCiphers = value;
  }
  public resetOpensearchTlsCiphers() {
    this._opensearchTlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchTlsCiphersInput() {
    return this._opensearchTlsCiphers;
  }

  // opensearch_tls_protocols - computed: true, optional: true, required: false
  private _opensearchTlsProtocols?: string[]; 
  public get opensearchTlsProtocols() {
    return this.getListAttribute('opensearch_tls_protocols');
  }
  public set opensearchTlsProtocols(value: string[]) {
    this._opensearchTlsProtocols = value;
  }
  public resetOpensearchTlsProtocols() {
    this._opensearchTlsProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchTlsProtocolsInput() {
    return this._opensearchTlsProtocols;
  }

  // sgw_acl - computed: true, optional: true, required: false
  private _sgwAcl?: string; 
  public get sgwAcl() {
    return this.getStringAttribute('sgw_acl');
  }
  public set sgwAcl(value: string) {
    this._sgwAcl = value;
  }
  public resetSgwAcl() {
    this._sgwAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgwAclInput() {
    return this._sgwAcl;
  }

  // syslog - computed: true, optional: true, required: false
  private _syslog?: string[]; 
  public get syslog() {
    return this.getListAttribute('syslog');
  }
  public set syslog(value: string[]) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance stackit_logme_instance}
*/
export class LogmeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_logme_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogmeInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogmeInstance to import
  * @param importFromId The id of the existing LogmeInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogmeInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_logme_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/logme_instance stackit_logme_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogmeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: LogmeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_logme_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parameters.internalValue = config.parameters;
    this._planName = config.planName;
    this._projectId = config.projectId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cf_guid - computed: true, optional: false, required: false
  public get cfGuid() {
    return this.getStringAttribute('cf_guid');
  }

  // cf_organization_guid - computed: true, optional: false, required: false
  public get cfOrganizationGuid() {
    return this.getStringAttribute('cf_organization_guid');
  }

  // cf_space_guid - computed: true, optional: false, required: false
  public get cfSpaceGuid() {
    return this.getStringAttribute('cf_space_guid');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
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

  // parameters - computed: true, optional: true, required: false
  private _parameters = new LogmeInstanceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: LogmeInstanceParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_name - computed: false, optional: false, required: true
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parameters: logmeInstanceParametersToTerraform(this._parameters.internalValue),
      plan_name: cdktf.stringToTerraform(this._planName),
      project_id: cdktf.stringToTerraform(this._projectId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: logmeInstanceParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogmeInstanceParameters",
      },
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
