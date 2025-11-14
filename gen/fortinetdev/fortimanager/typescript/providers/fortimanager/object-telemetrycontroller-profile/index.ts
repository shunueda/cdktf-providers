// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectTelemetrycontrollerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#adom ObjectTelemetrycontrollerProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#comment ObjectTelemetrycontrollerProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#dynamic_sort_subtable ObjectTelemetrycontrollerProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#id ObjectTelemetrycontrollerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#name ObjectTelemetrycontrollerProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#scopetype ObjectTelemetrycontrollerProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#application ObjectTelemetrycontrollerProfile#application}
  */
  readonly application?: ObjectTelemetrycontrollerProfileApplication[] | cdktf.IResolvable;
}
export interface ObjectTelemetrycontrollerProfileApplicationSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#app_throughput_threshold ObjectTelemetrycontrollerProfile#app_throughput_threshold}
  */
  readonly appThroughputThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#atdt_threshold ObjectTelemetrycontrollerProfile#atdt_threshold}
  */
  readonly atdtThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#dns_time_threshold ObjectTelemetrycontrollerProfile#dns_time_threshold}
  */
  readonly dnsTimeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#experience_score_threshold ObjectTelemetrycontrollerProfile#experience_score_threshold}
  */
  readonly experienceScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#failure_rate_threshold ObjectTelemetrycontrollerProfile#failure_rate_threshold}
  */
  readonly failureRateThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#jitter_threshold ObjectTelemetrycontrollerProfile#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#latency_threshold ObjectTelemetrycontrollerProfile#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#packet_loss_threshold ObjectTelemetrycontrollerProfile#packet_loss_threshold}
  */
  readonly packetLossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#sla_factor ObjectTelemetrycontrollerProfile#sla_factor}
  */
  readonly slaFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#tcp_rtt_threshold ObjectTelemetrycontrollerProfile#tcp_rtt_threshold}
  */
  readonly tcpRttThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#tls_time_threshold ObjectTelemetrycontrollerProfile#tls_time_threshold}
  */
  readonly tlsTimeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#ttfb_threshold ObjectTelemetrycontrollerProfile#ttfb_threshold}
  */
  readonly ttfbThreshold?: number;
}

export function objectTelemetrycontrollerProfileApplicationSlaToTerraform(struct?: ObjectTelemetrycontrollerProfileApplicationSlaOutputReference | ObjectTelemetrycontrollerProfileApplicationSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_throughput_threshold: cdktf.numberToTerraform(struct!.appThroughputThreshold),
    atdt_threshold: cdktf.numberToTerraform(struct!.atdtThreshold),
    dns_time_threshold: cdktf.numberToTerraform(struct!.dnsTimeThreshold),
    experience_score_threshold: cdktf.numberToTerraform(struct!.experienceScoreThreshold),
    failure_rate_threshold: cdktf.numberToTerraform(struct!.failureRateThreshold),
    jitter_threshold: cdktf.numberToTerraform(struct!.jitterThreshold),
    latency_threshold: cdktf.numberToTerraform(struct!.latencyThreshold),
    packet_loss_threshold: cdktf.numberToTerraform(struct!.packetLossThreshold),
    sla_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slaFactor),
    tcp_rtt_threshold: cdktf.numberToTerraform(struct!.tcpRttThreshold),
    tls_time_threshold: cdktf.numberToTerraform(struct!.tlsTimeThreshold),
    ttfb_threshold: cdktf.numberToTerraform(struct!.ttfbThreshold),
  }
}


export function objectTelemetrycontrollerProfileApplicationSlaToHclTerraform(struct?: ObjectTelemetrycontrollerProfileApplicationSlaOutputReference | ObjectTelemetrycontrollerProfileApplicationSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_throughput_threshold: {
      value: cdktf.numberToHclTerraform(struct!.appThroughputThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atdt_threshold: {
      value: cdktf.numberToHclTerraform(struct!.atdtThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.dnsTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    experience_score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.experienceScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.jitterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_threshold: {
      value: cdktf.numberToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_loss_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packetLossThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_factor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slaFactor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tcp_rtt_threshold: {
      value: cdktf.numberToHclTerraform(struct!.tcpRttThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.tlsTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttfb_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ttfbThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectTelemetrycontrollerProfileApplicationSlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectTelemetrycontrollerProfileApplicationSla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appThroughputThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.appThroughputThreshold = this._appThroughputThreshold;
    }
    if (this._atdtThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.atdtThreshold = this._atdtThreshold;
    }
    if (this._dnsTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTimeThreshold = this._dnsTimeThreshold;
    }
    if (this._experienceScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.experienceScoreThreshold = this._experienceScoreThreshold;
    }
    if (this._failureRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureRateThreshold = this._failureRateThreshold;
    }
    if (this._jitterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterThreshold = this._jitterThreshold;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    if (this._packetLossThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLossThreshold = this._packetLossThreshold;
    }
    if (this._slaFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaFactor = this._slaFactor;
    }
    if (this._tcpRttThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRttThreshold = this._tcpRttThreshold;
    }
    if (this._tlsTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTimeThreshold = this._tlsTimeThreshold;
    }
    if (this._ttfbThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttfbThreshold = this._ttfbThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectTelemetrycontrollerProfileApplicationSla | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appThroughputThreshold = undefined;
      this._atdtThreshold = undefined;
      this._dnsTimeThreshold = undefined;
      this._experienceScoreThreshold = undefined;
      this._failureRateThreshold = undefined;
      this._jitterThreshold = undefined;
      this._latencyThreshold = undefined;
      this._packetLossThreshold = undefined;
      this._slaFactor = undefined;
      this._tcpRttThreshold = undefined;
      this._tlsTimeThreshold = undefined;
      this._ttfbThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appThroughputThreshold = value.appThroughputThreshold;
      this._atdtThreshold = value.atdtThreshold;
      this._dnsTimeThreshold = value.dnsTimeThreshold;
      this._experienceScoreThreshold = value.experienceScoreThreshold;
      this._failureRateThreshold = value.failureRateThreshold;
      this._jitterThreshold = value.jitterThreshold;
      this._latencyThreshold = value.latencyThreshold;
      this._packetLossThreshold = value.packetLossThreshold;
      this._slaFactor = value.slaFactor;
      this._tcpRttThreshold = value.tcpRttThreshold;
      this._tlsTimeThreshold = value.tlsTimeThreshold;
      this._ttfbThreshold = value.ttfbThreshold;
    }
  }

  // app_throughput_threshold - computed: false, optional: true, required: false
  private _appThroughputThreshold?: number; 
  public get appThroughputThreshold() {
    return this.getNumberAttribute('app_throughput_threshold');
  }
  public set appThroughputThreshold(value: number) {
    this._appThroughputThreshold = value;
  }
  public resetAppThroughputThreshold() {
    this._appThroughputThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appThroughputThresholdInput() {
    return this._appThroughputThreshold;
  }

  // atdt_threshold - computed: false, optional: true, required: false
  private _atdtThreshold?: number; 
  public get atdtThreshold() {
    return this.getNumberAttribute('atdt_threshold');
  }
  public set atdtThreshold(value: number) {
    this._atdtThreshold = value;
  }
  public resetAtdtThreshold() {
    this._atdtThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atdtThresholdInput() {
    return this._atdtThreshold;
  }

  // dns_time_threshold - computed: false, optional: true, required: false
  private _dnsTimeThreshold?: number; 
  public get dnsTimeThreshold() {
    return this.getNumberAttribute('dns_time_threshold');
  }
  public set dnsTimeThreshold(value: number) {
    this._dnsTimeThreshold = value;
  }
  public resetDnsTimeThreshold() {
    this._dnsTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTimeThresholdInput() {
    return this._dnsTimeThreshold;
  }

  // experience_score_threshold - computed: false, optional: true, required: false
  private _experienceScoreThreshold?: number; 
  public get experienceScoreThreshold() {
    return this.getNumberAttribute('experience_score_threshold');
  }
  public set experienceScoreThreshold(value: number) {
    this._experienceScoreThreshold = value;
  }
  public resetExperienceScoreThreshold() {
    this._experienceScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experienceScoreThresholdInput() {
    return this._experienceScoreThreshold;
  }

  // failure_rate_threshold - computed: false, optional: true, required: false
  private _failureRateThreshold?: number; 
  public get failureRateThreshold() {
    return this.getNumberAttribute('failure_rate_threshold');
  }
  public set failureRateThreshold(value: number) {
    this._failureRateThreshold = value;
  }
  public resetFailureRateThreshold() {
    this._failureRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRateThresholdInput() {
    return this._failureRateThreshold;
  }

  // jitter_threshold - computed: false, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: false, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // packet_loss_threshold - computed: false, optional: true, required: false
  private _packetLossThreshold?: number; 
  public get packetLossThreshold() {
    return this.getNumberAttribute('packet_loss_threshold');
  }
  public set packetLossThreshold(value: number) {
    this._packetLossThreshold = value;
  }
  public resetPacketLossThreshold() {
    this._packetLossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossThresholdInput() {
    return this._packetLossThreshold;
  }

  // sla_factor - computed: true, optional: true, required: false
  private _slaFactor?: string[]; 
  public get slaFactor() {
    return cdktf.Fn.tolist(this.getListAttribute('sla_factor'));
  }
  public set slaFactor(value: string[]) {
    this._slaFactor = value;
  }
  public resetSlaFactor() {
    this._slaFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaFactorInput() {
    return this._slaFactor;
  }

  // tcp_rtt_threshold - computed: false, optional: true, required: false
  private _tcpRttThreshold?: number; 
  public get tcpRttThreshold() {
    return this.getNumberAttribute('tcp_rtt_threshold');
  }
  public set tcpRttThreshold(value: number) {
    this._tcpRttThreshold = value;
  }
  public resetTcpRttThreshold() {
    this._tcpRttThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRttThresholdInput() {
    return this._tcpRttThreshold;
  }

  // tls_time_threshold - computed: false, optional: true, required: false
  private _tlsTimeThreshold?: number; 
  public get tlsTimeThreshold() {
    return this.getNumberAttribute('tls_time_threshold');
  }
  public set tlsTimeThreshold(value: number) {
    this._tlsTimeThreshold = value;
  }
  public resetTlsTimeThreshold() {
    this._tlsTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTimeThresholdInput() {
    return this._tlsTimeThreshold;
  }

  // ttfb_threshold - computed: false, optional: true, required: false
  private _ttfbThreshold?: number; 
  public get ttfbThreshold() {
    return this.getNumberAttribute('ttfb_threshold');
  }
  public set ttfbThreshold(value: number) {
    this._ttfbThreshold = value;
  }
  public resetTtfbThreshold() {
    this._ttfbThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttfbThresholdInput() {
    return this._ttfbThreshold;
  }
}
export interface ObjectTelemetrycontrollerProfileApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#app_name ObjectTelemetrycontrollerProfile#app_name}
  */
  readonly appName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#app_throughput ObjectTelemetrycontrollerProfile#app_throughput}
  */
  readonly appThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#atdt_threshold ObjectTelemetrycontrollerProfile#atdt_threshold}
  */
  readonly atdtThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#dns_time_threshold ObjectTelemetrycontrollerProfile#dns_time_threshold}
  */
  readonly dnsTimeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#experience_score_threshold ObjectTelemetrycontrollerProfile#experience_score_threshold}
  */
  readonly experienceScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#failure_rate_threshold ObjectTelemetrycontrollerProfile#failure_rate_threshold}
  */
  readonly failureRateThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#id ObjectTelemetrycontrollerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#interval ObjectTelemetrycontrollerProfile#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#jitter_threshold ObjectTelemetrycontrollerProfile#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#latency_threshold ObjectTelemetrycontrollerProfile#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#monitor ObjectTelemetrycontrollerProfile#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#packet_loss_threshold ObjectTelemetrycontrollerProfile#packet_loss_threshold}
  */
  readonly packetLossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#tcp_rtt_threshold ObjectTelemetrycontrollerProfile#tcp_rtt_threshold}
  */
  readonly tcpRttThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#tls_time_threshold ObjectTelemetrycontrollerProfile#tls_time_threshold}
  */
  readonly tlsTimeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#ttfb_threshold ObjectTelemetrycontrollerProfile#ttfb_threshold}
  */
  readonly ttfbThreshold?: number;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#sla ObjectTelemetrycontrollerProfile#sla}
  */
  readonly sla?: ObjectTelemetrycontrollerProfileApplicationSla;
}

export function objectTelemetrycontrollerProfileApplicationToTerraform(struct?: ObjectTelemetrycontrollerProfileApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appName),
    app_throughput: cdktf.numberToTerraform(struct!.appThroughput),
    atdt_threshold: cdktf.numberToTerraform(struct!.atdtThreshold),
    dns_time_threshold: cdktf.numberToTerraform(struct!.dnsTimeThreshold),
    experience_score_threshold: cdktf.numberToTerraform(struct!.experienceScoreThreshold),
    failure_rate_threshold: cdktf.numberToTerraform(struct!.failureRateThreshold),
    id: cdktf.numberToTerraform(struct!.id),
    interval: cdktf.numberToTerraform(struct!.interval),
    jitter_threshold: cdktf.numberToTerraform(struct!.jitterThreshold),
    latency_threshold: cdktf.numberToTerraform(struct!.latencyThreshold),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    packet_loss_threshold: cdktf.numberToTerraform(struct!.packetLossThreshold),
    tcp_rtt_threshold: cdktf.numberToTerraform(struct!.tcpRttThreshold),
    tls_time_threshold: cdktf.numberToTerraform(struct!.tlsTimeThreshold),
    ttfb_threshold: cdktf.numberToTerraform(struct!.ttfbThreshold),
    sla: objectTelemetrycontrollerProfileApplicationSlaToTerraform(struct!.sla),
  }
}


export function objectTelemetrycontrollerProfileApplicationToHclTerraform(struct?: ObjectTelemetrycontrollerProfileApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_throughput: {
      value: cdktf.numberToHclTerraform(struct!.appThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atdt_threshold: {
      value: cdktf.numberToHclTerraform(struct!.atdtThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.dnsTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    experience_score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.experienceScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.jitterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_threshold: {
      value: cdktf.numberToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_loss_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packetLossThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rtt_threshold: {
      value: cdktf.numberToHclTerraform(struct!.tcpRttThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.tlsTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttfb_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ttfbThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla: {
      value: objectTelemetrycontrollerProfileApplicationSlaToHclTerraform(struct!.sla),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectTelemetrycontrollerProfileApplicationSlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectTelemetrycontrollerProfileApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectTelemetrycontrollerProfileApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._appThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.appThroughput = this._appThroughput;
    }
    if (this._atdtThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.atdtThreshold = this._atdtThreshold;
    }
    if (this._dnsTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTimeThreshold = this._dnsTimeThreshold;
    }
    if (this._experienceScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.experienceScoreThreshold = this._experienceScoreThreshold;
    }
    if (this._failureRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureRateThreshold = this._failureRateThreshold;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jitterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterThreshold = this._jitterThreshold;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._packetLossThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLossThreshold = this._packetLossThreshold;
    }
    if (this._tcpRttThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRttThreshold = this._tcpRttThreshold;
    }
    if (this._tlsTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTimeThreshold = this._tlsTimeThreshold;
    }
    if (this._ttfbThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttfbThreshold = this._ttfbThreshold;
    }
    if (this._sla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectTelemetrycontrollerProfileApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appName = undefined;
      this._appThroughput = undefined;
      this._atdtThreshold = undefined;
      this._dnsTimeThreshold = undefined;
      this._experienceScoreThreshold = undefined;
      this._failureRateThreshold = undefined;
      this._id = undefined;
      this._interval = undefined;
      this._jitterThreshold = undefined;
      this._latencyThreshold = undefined;
      this._monitor = undefined;
      this._packetLossThreshold = undefined;
      this._tcpRttThreshold = undefined;
      this._tlsTimeThreshold = undefined;
      this._ttfbThreshold = undefined;
      this._sla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appName = value.appName;
      this._appThroughput = value.appThroughput;
      this._atdtThreshold = value.atdtThreshold;
      this._dnsTimeThreshold = value.dnsTimeThreshold;
      this._experienceScoreThreshold = value.experienceScoreThreshold;
      this._failureRateThreshold = value.failureRateThreshold;
      this._id = value.id;
      this._interval = value.interval;
      this._jitterThreshold = value.jitterThreshold;
      this._latencyThreshold = value.latencyThreshold;
      this._monitor = value.monitor;
      this._packetLossThreshold = value.packetLossThreshold;
      this._tcpRttThreshold = value.tcpRttThreshold;
      this._tlsTimeThreshold = value.tlsTimeThreshold;
      this._ttfbThreshold = value.ttfbThreshold;
      this._sla.internalValue = value.sla;
    }
  }

  // app_name - computed: true, optional: true, required: false
  private _appName?: string[]; 
  public get appName() {
    return cdktf.Fn.tolist(this.getListAttribute('app_name'));
  }
  public set appName(value: string[]) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_throughput - computed: false, optional: true, required: false
  private _appThroughput?: number; 
  public get appThroughput() {
    return this.getNumberAttribute('app_throughput');
  }
  public set appThroughput(value: number) {
    this._appThroughput = value;
  }
  public resetAppThroughput() {
    this._appThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appThroughputInput() {
    return this._appThroughput;
  }

  // atdt_threshold - computed: false, optional: true, required: false
  private _atdtThreshold?: number; 
  public get atdtThreshold() {
    return this.getNumberAttribute('atdt_threshold');
  }
  public set atdtThreshold(value: number) {
    this._atdtThreshold = value;
  }
  public resetAtdtThreshold() {
    this._atdtThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atdtThresholdInput() {
    return this._atdtThreshold;
  }

  // dns_time_threshold - computed: false, optional: true, required: false
  private _dnsTimeThreshold?: number; 
  public get dnsTimeThreshold() {
    return this.getNumberAttribute('dns_time_threshold');
  }
  public set dnsTimeThreshold(value: number) {
    this._dnsTimeThreshold = value;
  }
  public resetDnsTimeThreshold() {
    this._dnsTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTimeThresholdInput() {
    return this._dnsTimeThreshold;
  }

  // experience_score_threshold - computed: false, optional: true, required: false
  private _experienceScoreThreshold?: number; 
  public get experienceScoreThreshold() {
    return this.getNumberAttribute('experience_score_threshold');
  }
  public set experienceScoreThreshold(value: number) {
    this._experienceScoreThreshold = value;
  }
  public resetExperienceScoreThreshold() {
    this._experienceScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experienceScoreThresholdInput() {
    return this._experienceScoreThreshold;
  }

  // failure_rate_threshold - computed: false, optional: true, required: false
  private _failureRateThreshold?: number; 
  public get failureRateThreshold() {
    return this.getNumberAttribute('failure_rate_threshold');
  }
  public set failureRateThreshold(value: number) {
    this._failureRateThreshold = value;
  }
  public resetFailureRateThreshold() {
    this._failureRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRateThresholdInput() {
    return this._failureRateThreshold;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // jitter_threshold - computed: false, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: false, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // packet_loss_threshold - computed: false, optional: true, required: false
  private _packetLossThreshold?: number; 
  public get packetLossThreshold() {
    return this.getNumberAttribute('packet_loss_threshold');
  }
  public set packetLossThreshold(value: number) {
    this._packetLossThreshold = value;
  }
  public resetPacketLossThreshold() {
    this._packetLossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossThresholdInput() {
    return this._packetLossThreshold;
  }

  // tcp_rtt_threshold - computed: false, optional: true, required: false
  private _tcpRttThreshold?: number; 
  public get tcpRttThreshold() {
    return this.getNumberAttribute('tcp_rtt_threshold');
  }
  public set tcpRttThreshold(value: number) {
    this._tcpRttThreshold = value;
  }
  public resetTcpRttThreshold() {
    this._tcpRttThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRttThresholdInput() {
    return this._tcpRttThreshold;
  }

  // tls_time_threshold - computed: false, optional: true, required: false
  private _tlsTimeThreshold?: number; 
  public get tlsTimeThreshold() {
    return this.getNumberAttribute('tls_time_threshold');
  }
  public set tlsTimeThreshold(value: number) {
    this._tlsTimeThreshold = value;
  }
  public resetTlsTimeThreshold() {
    this._tlsTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTimeThresholdInput() {
    return this._tlsTimeThreshold;
  }

  // ttfb_threshold - computed: false, optional: true, required: false
  private _ttfbThreshold?: number; 
  public get ttfbThreshold() {
    return this.getNumberAttribute('ttfb_threshold');
  }
  public set ttfbThreshold(value: number) {
    this._ttfbThreshold = value;
  }
  public resetTtfbThreshold() {
    this._ttfbThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttfbThresholdInput() {
    return this._ttfbThreshold;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new ObjectTelemetrycontrollerProfileApplicationSlaOutputReference(this, "sla");
  public get sla() {
    return this._sla;
  }
  public putSla(value: ObjectTelemetrycontrollerProfileApplicationSla) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }
}

export class ObjectTelemetrycontrollerProfileApplicationList extends cdktf.ComplexList {
  public internalValue? : ObjectTelemetrycontrollerProfileApplication[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectTelemetrycontrollerProfileApplicationOutputReference {
    return new ObjectTelemetrycontrollerProfileApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile fortimanager_object_telemetrycontroller_profile}
*/
export class ObjectTelemetrycontrollerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_telemetrycontroller_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectTelemetrycontrollerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectTelemetrycontrollerProfile to import
  * @param importFromId The id of the existing ObjectTelemetrycontrollerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectTelemetrycontrollerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_telemetrycontroller_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile fortimanager_object_telemetrycontroller_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectTelemetrycontrollerProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectTelemetrycontrollerProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_telemetrycontroller_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._application.internalValue = config.application;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // name - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // application - computed: false, optional: true, required: false
  private _application = new ObjectTelemetrycontrollerProfileApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: ObjectTelemetrycontrollerProfileApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      application: cdktf.listMapper(objectTelemetrycontrollerProfileApplicationToTerraform, true)(this._application.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: cdktf.listMapperHcl(objectTelemetrycontrollerProfileApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectTelemetrycontrollerProfileApplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
