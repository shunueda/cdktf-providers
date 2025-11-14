// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectTelemetrycontrollerProfileApplicationSlaAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#adom ObjectTelemetrycontrollerProfileApplicationSlaA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#app_throughput_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#app_throughput_threshold}
  */
  readonly appThroughputThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#application ObjectTelemetrycontrollerProfileApplicationSlaA#application}
  */
  readonly application: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#atdt_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#atdt_threshold}
  */
  readonly atdtThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#dns_time_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#dns_time_threshold}
  */
  readonly dnsTimeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#experience_score_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#experience_score_threshold}
  */
  readonly experienceScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#failure_rate_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#failure_rate_threshold}
  */
  readonly failureRateThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#id ObjectTelemetrycontrollerProfileApplicationSlaA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#jitter_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#latency_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#packet_loss_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#packet_loss_threshold}
  */
  readonly packetLossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#profile ObjectTelemetrycontrollerProfileApplicationSlaA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#scopetype ObjectTelemetrycontrollerProfileApplicationSlaA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#sla_factor ObjectTelemetrycontrollerProfileApplicationSlaA#sla_factor}
  */
  readonly slaFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#tcp_rtt_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#tcp_rtt_threshold}
  */
  readonly tcpRttThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#tls_time_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#tls_time_threshold}
  */
  readonly tlsTimeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#ttfb_threshold ObjectTelemetrycontrollerProfileApplicationSlaA#ttfb_threshold}
  */
  readonly ttfbThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla fortimanager_object_telemetrycontroller_profile_application_sla}
*/
export class ObjectTelemetrycontrollerProfileApplicationSlaA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_telemetrycontroller_profile_application_sla";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectTelemetrycontrollerProfileApplicationSlaA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectTelemetrycontrollerProfileApplicationSlaA to import
  * @param importFromId The id of the existing ObjectTelemetrycontrollerProfileApplicationSlaA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectTelemetrycontrollerProfileApplicationSlaA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_telemetrycontroller_profile_application_sla", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_telemetrycontroller_profile_application_sla fortimanager_object_telemetrycontroller_profile_application_sla} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectTelemetrycontrollerProfileApplicationSlaAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectTelemetrycontrollerProfileApplicationSlaAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_telemetrycontroller_profile_application_sla',
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
    this._appThroughputThreshold = config.appThroughputThreshold;
    this._application = config.application;
    this._atdtThreshold = config.atdtThreshold;
    this._dnsTimeThreshold = config.dnsTimeThreshold;
    this._experienceScoreThreshold = config.experienceScoreThreshold;
    this._failureRateThreshold = config.failureRateThreshold;
    this._id = config.id;
    this._jitterThreshold = config.jitterThreshold;
    this._latencyThreshold = config.latencyThreshold;
    this._packetLossThreshold = config.packetLossThreshold;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._slaFactor = config.slaFactor;
    this._tcpRttThreshold = config.tcpRttThreshold;
    this._tlsTimeThreshold = config.tlsTimeThreshold;
    this._ttfbThreshold = config.ttfbThreshold;
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

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      app_throughput_threshold: cdktf.numberToTerraform(this._appThroughputThreshold),
      application: cdktf.stringToTerraform(this._application),
      atdt_threshold: cdktf.numberToTerraform(this._atdtThreshold),
      dns_time_threshold: cdktf.numberToTerraform(this._dnsTimeThreshold),
      experience_score_threshold: cdktf.numberToTerraform(this._experienceScoreThreshold),
      failure_rate_threshold: cdktf.numberToTerraform(this._failureRateThreshold),
      id: cdktf.stringToTerraform(this._id),
      jitter_threshold: cdktf.numberToTerraform(this._jitterThreshold),
      latency_threshold: cdktf.numberToTerraform(this._latencyThreshold),
      packet_loss_threshold: cdktf.numberToTerraform(this._packetLossThreshold),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sla_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._slaFactor),
      tcp_rtt_threshold: cdktf.numberToTerraform(this._tcpRttThreshold),
      tls_time_threshold: cdktf.numberToTerraform(this._tlsTimeThreshold),
      ttfb_threshold: cdktf.numberToTerraform(this._ttfbThreshold),
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
      app_throughput_threshold: {
        value: cdktf.numberToHclTerraform(this._appThroughputThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atdt_threshold: {
        value: cdktf.numberToHclTerraform(this._atdtThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_time_threshold: {
        value: cdktf.numberToHclTerraform(this._dnsTimeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      experience_score_threshold: {
        value: cdktf.numberToHclTerraform(this._experienceScoreThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure_rate_threshold: {
        value: cdktf.numberToHclTerraform(this._failureRateThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jitter_threshold: {
        value: cdktf.numberToHclTerraform(this._jitterThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latency_threshold: {
        value: cdktf.numberToHclTerraform(this._latencyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_loss_threshold: {
        value: cdktf.numberToHclTerraform(this._packetLossThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
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
      sla_factor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._slaFactor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tcp_rtt_threshold: {
        value: cdktf.numberToHclTerraform(this._tcpRttThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_time_threshold: {
        value: cdktf.numberToHclTerraform(this._tlsTimeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttfb_threshold: {
        value: cdktf.numberToHclTerraform(this._ttfbThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
