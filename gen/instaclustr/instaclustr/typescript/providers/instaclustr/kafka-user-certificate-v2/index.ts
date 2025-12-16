// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaUserCertificateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#cluster_id KafkaUserCertificateV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Certificate signing request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#csr KafkaUserCertificateV2#csr}
  */
  readonly csr: string;
  /**
  * Date certificate expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#expiry_date KafkaUserCertificateV2#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#id KafkaUserCertificateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Kafka username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#kafka_username KafkaUserCertificateV2#kafka_username}
  */
  readonly kafkaUsername: string;
  /**
  * Generated client signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#signed_certificate KafkaUserCertificateV2#signed_certificate}
  */
  readonly signedCertificate?: string;
  /**
  * Number of months for which the certificate will be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#valid_period KafkaUserCertificateV2#valid_period}
  */
  readonly validPeriod: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#timeouts KafkaUserCertificateV2#timeouts}
  */
  readonly timeouts?: KafkaUserCertificateV2Timeouts;
}
export interface KafkaUserCertificateV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#default KafkaUserCertificateV2#default}
  */
  readonly default?: string;
}

export function kafkaUserCertificateV2TimeoutsToTerraform(struct?: KafkaUserCertificateV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function kafkaUserCertificateV2TimeoutsToHclTerraform(struct?: KafkaUserCertificateV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaUserCertificateV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaUserCertificateV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaUserCertificateV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2 instaclustr_kafka_user_certificate_v2}
*/
export class KafkaUserCertificateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_user_certificate_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaUserCertificateV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaUserCertificateV2 to import
  * @param importFromId The id of the existing KafkaUserCertificateV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaUserCertificateV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_user_certificate_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/resources/kafka_user_certificate_v2 instaclustr_kafka_user_certificate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaUserCertificateV2Config
  */
  public constructor(scope: Construct, id: string, config: KafkaUserCertificateV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_user_certificate_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.37',
        providerVersionConstraint: '2.1.37'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // csr - computed: false, optional: false, required: true
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
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

  // kafka_username - computed: false, optional: false, required: true
  private _kafkaUsername?: string; 
  public get kafkaUsername() {
    return this.getStringAttribute('kafka_username');
  }
  public set kafkaUsername(value: string) {
    this._kafkaUsername = value;
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

  // valid_period - computed: false, optional: false, required: true
  private _validPeriod?: number; 
  public get validPeriod() {
    return this.getNumberAttribute('valid_period');
  }
  public set validPeriod(value: number) {
    this._validPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validPeriodInput() {
    return this._validPeriod;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaUserCertificateV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaUserCertificateV2Timeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      csr: cdktf.stringToTerraform(this._csr),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      id: cdktf.stringToTerraform(this._id),
      kafka_username: cdktf.stringToTerraform(this._kafkaUsername),
      signed_certificate: cdktf.stringToTerraform(this._signedCertificate),
      valid_period: cdktf.numberToTerraform(this._validPeriod),
      timeouts: kafkaUserCertificateV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: kafkaUserCertificateV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaUserCertificateV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
