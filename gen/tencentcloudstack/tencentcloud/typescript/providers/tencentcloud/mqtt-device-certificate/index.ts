// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqttDeviceCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Associated CA certificate SN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#ca_sn MqttDeviceCertificate#ca_sn}
  */
  readonly caSn: string;
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#client_id MqttDeviceCertificate#client_id}
  */
  readonly clientId?: string;
  /**
  * Device certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#device_certificate MqttDeviceCertificate#device_certificate}
  */
  readonly deviceCertificate: string;
  /**
  * Certificate format, Default is PEM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#format MqttDeviceCertificate#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#id MqttDeviceCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#instance_id MqttDeviceCertificate#instance_id}
  */
  readonly instanceId: string;
  /**
  * Certificate status, Default is ACTIVE.\n  ACTIVE activation;\n  INACTIVE not active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#status MqttDeviceCertificate#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate tencentcloud_mqtt_device_certificate}
*/
export class MqttDeviceCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mqtt_device_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MqttDeviceCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MqttDeviceCertificate to import
  * @param importFromId The id of the existing MqttDeviceCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MqttDeviceCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mqtt_device_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mqtt_device_certificate tencentcloud_mqtt_device_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MqttDeviceCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: MqttDeviceCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mqtt_device_certificate',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caSn = config.caSn;
    this._clientId = config.clientId;
    this._deviceCertificate = config.deviceCertificate;
    this._format = config.format;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_sn - computed: false, optional: false, required: true
  private _caSn?: string; 
  public get caSn() {
    return this.getStringAttribute('ca_sn');
  }
  public set caSn(value: string) {
    this._caSn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caSnInput() {
    return this._caSn;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // device_certificate - computed: false, optional: false, required: true
  private _deviceCertificate?: string; 
  public get deviceCertificate() {
    return this.getStringAttribute('device_certificate');
  }
  public set deviceCertificate(value: string) {
    this._deviceCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCertificateInput() {
    return this._deviceCertificate;
  }

  // device_certificate_cn - computed: true, optional: false, required: false
  public get deviceCertificateCn() {
    return this.getStringAttribute('device_certificate_cn');
  }

  // device_certificate_sn - computed: true, optional: false, required: false
  public get deviceCertificateSn() {
    return this.getStringAttribute('device_certificate_sn');
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // not_after_time - computed: true, optional: false, required: false
  public get notAfterTime() {
    return this.getNumberAttribute('not_after_time');
  }

  // not_before_time - computed: true, optional: false, required: false
  public get notBeforeTime() {
    return this.getNumberAttribute('not_before_time');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_sn: cdktf.stringToTerraform(this._caSn),
      client_id: cdktf.stringToTerraform(this._clientId),
      device_certificate: cdktf.stringToTerraform(this._deviceCertificate),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_sn: {
        value: cdktf.stringToHclTerraform(this._caSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_certificate: {
        value: cdktf.stringToHclTerraform(this._deviceCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
