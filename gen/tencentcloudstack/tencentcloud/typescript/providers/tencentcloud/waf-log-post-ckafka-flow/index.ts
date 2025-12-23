// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafLogPostCkafkaFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The supporting environment is IP:PORT, The external network environment is domain:PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#brokers WafLogPostCkafkaFlow#brokers}
  */
  readonly brokers: string;
  /**
  * CKafka ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#ckafka_id WafLogPostCkafkaFlow#ckafka_id}
  */
  readonly ckafkaId: string;
  /**
  * The region where CKafka is located for delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#ckafka_region WafLogPostCkafkaFlow#ckafka_region}
  */
  readonly ckafkaRegion: string;
  /**
  * Default to none, supports snappy, gzip, and lz4 compression, recommended snappy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#compression WafLogPostCkafkaFlow#compression}
  */
  readonly compression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#id WafLogPostCkafkaFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Version number of Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#kafka_version WafLogPostCkafkaFlow#kafka_version}
  */
  readonly kafkaVersion: string;
  /**
  * 1- Access log, 2- Attack log, the default is access log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#log_type WafLogPostCkafkaFlow#log_type}
  */
  readonly logType: number;
  /**
  * Whether to enable SASL verification, default not enabled, 0-off, 1-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#sasl_enable WafLogPostCkafkaFlow#sasl_enable}
  */
  readonly saslEnable?: number;
  /**
  * SASL password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#sasl_password WafLogPostCkafkaFlow#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * SASL username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#sasl_user WafLogPostCkafkaFlow#sasl_user}
  */
  readonly saslUser?: string;
  /**
  * Theme name, default not to pass or pass empty string, default value is waf_post_access_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#topic WafLogPostCkafkaFlow#topic}
  */
  readonly topic: string;
  /**
  * 1. External network TGW, 2. Supporting environment, default is supporting environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#vip_type WafLogPostCkafkaFlow#vip_type}
  */
  readonly vipType: number;
  /**
  * write_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#write_config WafLogPostCkafkaFlow#write_config}
  */
  readonly writeConfig?: WafLogPostCkafkaFlowWriteConfig;
}
export interface WafLogPostCkafkaFlowWriteConfig {
  /**
  * 1: Enable 0: Do not enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#enable_body WafLogPostCkafkaFlow#enable_body}
  */
  readonly enableBody?: number;
  /**
  * 1: Enable 0: Do not enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#enable_bot WafLogPostCkafkaFlow#enable_bot}
  */
  readonly enableBot?: number;
  /**
  * 1: Enable 0: Do not enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#enable_headers WafLogPostCkafkaFlow#enable_headers}
  */
  readonly enableHeaders?: number;
}

export function wafLogPostCkafkaFlowWriteConfigToTerraform(struct?: WafLogPostCkafkaFlowWriteConfigOutputReference | WafLogPostCkafkaFlowWriteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_body: cdktf.numberToTerraform(struct!.enableBody),
    enable_bot: cdktf.numberToTerraform(struct!.enableBot),
    enable_headers: cdktf.numberToTerraform(struct!.enableHeaders),
  }
}


export function wafLogPostCkafkaFlowWriteConfigToHclTerraform(struct?: WafLogPostCkafkaFlowWriteConfigOutputReference | WafLogPostCkafkaFlowWriteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_body: {
      value: cdktf.numberToHclTerraform(struct!.enableBody),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_bot: {
      value: cdktf.numberToHclTerraform(struct!.enableBot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_headers: {
      value: cdktf.numberToHclTerraform(struct!.enableHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafLogPostCkafkaFlowWriteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafLogPostCkafkaFlowWriteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBody = this._enableBody;
    }
    if (this._enableBot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBot = this._enableBot;
    }
    if (this._enableHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHeaders = this._enableHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafLogPostCkafkaFlowWriteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableBody = undefined;
      this._enableBot = undefined;
      this._enableHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableBody = value.enableBody;
      this._enableBot = value.enableBot;
      this._enableHeaders = value.enableHeaders;
    }
  }

  // enable_body - computed: true, optional: true, required: false
  private _enableBody?: number; 
  public get enableBody() {
    return this.getNumberAttribute('enable_body');
  }
  public set enableBody(value: number) {
    this._enableBody = value;
  }
  public resetEnableBody() {
    this._enableBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBodyInput() {
    return this._enableBody;
  }

  // enable_bot - computed: true, optional: true, required: false
  private _enableBot?: number; 
  public get enableBot() {
    return this.getNumberAttribute('enable_bot');
  }
  public set enableBot(value: number) {
    this._enableBot = value;
  }
  public resetEnableBot() {
    this._enableBot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBotInput() {
    return this._enableBot;
  }

  // enable_headers - computed: true, optional: true, required: false
  private _enableHeaders?: number; 
  public get enableHeaders() {
    return this.getNumberAttribute('enable_headers');
  }
  public set enableHeaders(value: number) {
    this._enableHeaders = value;
  }
  public resetEnableHeaders() {
    this._enableHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHeadersInput() {
    return this._enableHeaders;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow tencentcloud_waf_log_post_ckafka_flow}
*/
export class WafLogPostCkafkaFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_log_post_ckafka_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafLogPostCkafkaFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafLogPostCkafkaFlow to import
  * @param importFromId The id of the existing WafLogPostCkafkaFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafLogPostCkafkaFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_log_post_ckafka_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_log_post_ckafka_flow tencentcloud_waf_log_post_ckafka_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafLogPostCkafkaFlowConfig
  */
  public constructor(scope: Construct, id: string, config: WafLogPostCkafkaFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_log_post_ckafka_flow',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brokers = config.brokers;
    this._ckafkaId = config.ckafkaId;
    this._ckafkaRegion = config.ckafkaRegion;
    this._compression = config.compression;
    this._id = config.id;
    this._kafkaVersion = config.kafkaVersion;
    this._logType = config.logType;
    this._saslEnable = config.saslEnable;
    this._saslPassword = config.saslPassword;
    this._saslUser = config.saslUser;
    this._topic = config.topic;
    this._vipType = config.vipType;
    this._writeConfig.internalValue = config.writeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brokers - computed: false, optional: false, required: true
  private _brokers?: string; 
  public get brokers() {
    return this.getStringAttribute('brokers');
  }
  public set brokers(value: string) {
    this._brokers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
  }

  // ckafka_id - computed: false, optional: false, required: true
  private _ckafkaId?: string; 
  public get ckafkaId() {
    return this.getStringAttribute('ckafka_id');
  }
  public set ckafkaId(value: string) {
    this._ckafkaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ckafkaIdInput() {
    return this._ckafkaId;
  }

  // ckafka_region - computed: false, optional: false, required: true
  private _ckafkaRegion?: string; 
  public get ckafkaRegion() {
    return this.getStringAttribute('ckafka_region');
  }
  public set ckafkaRegion(value: string) {
    this._ckafkaRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ckafkaRegionInput() {
    return this._ckafkaRegion;
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getNumberAttribute('flow_id');
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

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: number; 
  public get logType() {
    return this.getNumberAttribute('log_type');
  }
  public set logType(value: number) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // sasl_enable - computed: true, optional: true, required: false
  private _saslEnable?: number; 
  public get saslEnable() {
    return this.getNumberAttribute('sasl_enable');
  }
  public set saslEnable(value: number) {
    this._saslEnable = value;
  }
  public resetSaslEnable() {
    this._saslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslEnableInput() {
    return this._saslEnable;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_user - computed: false, optional: true, required: false
  private _saslUser?: string; 
  public get saslUser() {
    return this.getStringAttribute('sasl_user');
  }
  public set saslUser(value: string) {
    this._saslUser = value;
  }
  public resetSaslUser() {
    this._saslUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUserInput() {
    return this._saslUser;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // vip_type - computed: false, optional: false, required: true
  private _vipType?: number; 
  public get vipType() {
    return this.getNumberAttribute('vip_type');
  }
  public set vipType(value: number) {
    this._vipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipTypeInput() {
    return this._vipType;
  }

  // write_config - computed: false, optional: true, required: false
  private _writeConfig = new WafLogPostCkafkaFlowWriteConfigOutputReference(this, "write_config");
  public get writeConfig() {
    return this._writeConfig;
  }
  public putWriteConfig(value: WafLogPostCkafkaFlowWriteConfig) {
    this._writeConfig.internalValue = value;
  }
  public resetWriteConfig() {
    this._writeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeConfigInput() {
    return this._writeConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brokers: cdktf.stringToTerraform(this._brokers),
      ckafka_id: cdktf.stringToTerraform(this._ckafkaId),
      ckafka_region: cdktf.stringToTerraform(this._ckafkaRegion),
      compression: cdktf.stringToTerraform(this._compression),
      id: cdktf.stringToTerraform(this._id),
      kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
      log_type: cdktf.numberToTerraform(this._logType),
      sasl_enable: cdktf.numberToTerraform(this._saslEnable),
      sasl_password: cdktf.stringToTerraform(this._saslPassword),
      sasl_user: cdktf.stringToTerraform(this._saslUser),
      topic: cdktf.stringToTerraform(this._topic),
      vip_type: cdktf.numberToTerraform(this._vipType),
      write_config: wafLogPostCkafkaFlowWriteConfigToTerraform(this._writeConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      brokers: {
        value: cdktf.stringToHclTerraform(this._brokers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ckafka_id: {
        value: cdktf.stringToHclTerraform(this._ckafkaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ckafka_region: {
        value: cdktf.stringToHclTerraform(this._ckafkaRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
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
      kafka_version: {
        value: cdktf.stringToHclTerraform(this._kafkaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.numberToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sasl_enable: {
        value: cdktf.numberToHclTerraform(this._saslEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sasl_password: {
        value: cdktf.stringToHclTerraform(this._saslPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_user: {
        value: cdktf.stringToHclTerraform(this._saslUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_type: {
        value: cdktf.numberToHclTerraform(this._vipType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_config: {
        value: wafLogPostCkafkaFlowWriteConfigToHclTerraform(this._writeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafLogPostCkafkaFlowWriteConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
