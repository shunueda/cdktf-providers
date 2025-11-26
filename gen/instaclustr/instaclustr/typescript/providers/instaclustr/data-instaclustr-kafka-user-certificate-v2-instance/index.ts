// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaUserCertificateV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#cluster_id DataInstaclustrKafkaUserCertificateV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Certificate signing request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#csr DataInstaclustrKafkaUserCertificateV2Instance#csr}
  */
  readonly csr?: string;
  /**
  * Date certificate expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#expiry_date DataInstaclustrKafkaUserCertificateV2Instance#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#id DataInstaclustrKafkaUserCertificateV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The Kafka username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#kafka_username DataInstaclustrKafkaUserCertificateV2Instance#kafka_username}
  */
  readonly kafkaUsername?: string;
  /**
  * Generated client signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#signed_certificate DataInstaclustrKafkaUserCertificateV2Instance#signed_certificate}
  */
  readonly signedCertificate?: string;
  /**
  * Number of months for which the certificate will be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#valid_period DataInstaclustrKafkaUserCertificateV2Instance#valid_period}
  */
  readonly validPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance instaclustr_kafka_user_certificate_v2_instance}
*/
export class DataInstaclustrKafkaUserCertificateV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_user_certificate_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaUserCertificateV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaUserCertificateV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrKafkaUserCertificateV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaUserCertificateV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_user_certificate_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/kafka_user_certificate_v2_instance instaclustr_kafka_user_certificate_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaUserCertificateV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaUserCertificateV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_user_certificate_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.30',
        providerVersionConstraint: '2.1.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._csr = config.csr;
    this._expiryDate = config.expiryDate;
    this._id = config.id;
    this._kafkaUsername = config.kafkaUsername;
    this._signedCertificate = config.signedCertificate;
    this._validPeriod = config.validPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // csr - computed: true, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // expiry_date - computed: true, optional: true, required: false
  private _expiryDate?: string; 
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }
  public set expiryDate(value: string) {
    this._expiryDate = value;
  }
  public resetExpiryDate() {
    this._expiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDateInput() {
    return this._expiryDate;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kafka_username - computed: true, optional: true, required: false
  private _kafkaUsername?: string; 
  public get kafkaUsername() {
    return this.getStringAttribute('kafka_username');
  }
  public set kafkaUsername(value: string) {
    this._kafkaUsername = value;
  }
  public resetKafkaUsername() {
    this._kafkaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaUsernameInput() {
    return this._kafkaUsername;
  }

  // signed_certificate - computed: true, optional: true, required: false
  private _signedCertificate?: string; 
  public get signedCertificate() {
    return this.getStringAttribute('signed_certificate');
  }
  public set signedCertificate(value: string) {
    this._signedCertificate = value;
  }
  public resetSignedCertificate() {
    this._signedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedCertificateInput() {
    return this._signedCertificate;
  }

  // valid_period - computed: true, optional: true, required: false
  private _validPeriod?: number; 
  public get validPeriod() {
    return this.getNumberAttribute('valid_period');
  }
  public set validPeriod(value: number) {
    this._validPeriod = value;
  }
  public resetValidPeriod() {
    this._validPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPeriodInput() {
    return this._validPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      csr: cdktf.stringToTerraform(this._csr),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      id: cdktf.stringToTerraform(this._id),
      kafka_username: cdktf.stringToTerraform(this._kafkaUsername),
      signed_certificate: cdktf.stringToTerraform(this._signedCertificate),
      valid_period: cdktf.numberToTerraform(this._validPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_date: {
        value: cdktf.stringToHclTerraform(this._expiryDate),
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
      kafka_username: {
        value: cdktf.stringToHclTerraform(this._kafkaUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signed_certificate: {
        value: cdktf.stringToHclTerraform(this._signedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_period: {
        value: cdktf.numberToHclTerraform(this._validPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
