// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mqtt_instance_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMqttInstanceDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mqtt_instance_detail#id DataTencentcloudMqttInstanceDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mqtt_instance_detail#instance_id DataTencentcloudMqttInstanceDetail#instance_id}
  */
  readonly instanceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mqtt_instance_detail#result_output_file DataTencentcloudMqttInstanceDetail#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mqtt_instance_detail tencentcloud_mqtt_instance_detail}
*/
export class DataTencentcloudMqttInstanceDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mqtt_instance_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMqttInstanceDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMqttInstanceDetail to import
  * @param importFromId The id of the existing DataTencentcloudMqttInstanceDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mqtt_instance_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMqttInstanceDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mqtt_instance_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mqtt_instance_detail tencentcloud_mqtt_instance_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMqttInstanceDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMqttInstanceDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mqtt_instance_detail',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_policy - computed: true, optional: false, required: false
  public get authorizationPolicy() {
    return this.getBooleanAttribute('authorization_policy');
  }

  // authorization_policy_limit - computed: true, optional: false, required: false
  public get authorizationPolicyLimit() {
    return this.getNumberAttribute('authorization_policy_limit');
  }

  // automatic_activation - computed: true, optional: false, required: false
  public get automaticActivation() {
    return this.getBooleanAttribute('automatic_activation');
  }

  // client_num_limit - computed: true, optional: false, required: false
  public get clientNumLimit() {
    return this.getNumberAttribute('client_num_limit');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // destroy_time - computed: true, optional: false, required: false
  public get destroyTime() {
    return this.getNumberAttribute('destroy_time');
  }

  // device_certificate_provision_type - computed: true, optional: false, required: false
  public get deviceCertificateProvisionType() {
    return this.getStringAttribute('device_certificate_provision_type');
  }

  // expiry_time - computed: true, optional: false, required: false
  public get expiryTime() {
    return this.getNumberAttribute('expiry_time');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // max_ca_num - computed: true, optional: false, required: false
  public get maxCaNum() {
    return this.getNumberAttribute('max_ca_num');
  }

  // max_subscription - computed: true, optional: false, required: false
  public get maxSubscription() {
    return this.getNumberAttribute('max_subscription');
  }

  // max_subscription_per_client - computed: true, optional: false, required: false
  public get maxSubscriptionPerClient() {
    return this.getNumberAttribute('max_subscription_per_client');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getStringAttribute('pay_mode');
  }

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // sku_code - computed: true, optional: false, required: false
  public get skuCode() {
    return this.getStringAttribute('sku_code');
  }

  // topic_num - computed: true, optional: false, required: false
  public get topicNum() {
    return this.getNumberAttribute('topic_num');
  }

  // topic_num_limit - computed: true, optional: false, required: false
  public get topicNumLimit() {
    return this.getNumberAttribute('topic_num_limit');
  }

  // tps_limit - computed: true, optional: false, required: false
  public get tpsLimit() {
    return this.getNumberAttribute('tps_limit');
  }

  // x509_mode - computed: true, optional: false, required: false
  public get x509Mode() {
    return this.getStringAttribute('x509_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
