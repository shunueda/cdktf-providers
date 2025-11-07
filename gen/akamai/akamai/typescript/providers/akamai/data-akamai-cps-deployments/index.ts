// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_deployments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCpsDeploymentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique enrollment identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_deployments#enrollment_id DataAkamaiCpsDeployments#enrollment_id}
  */
  readonly enrollmentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_deployments#id DataAkamaiCpsDeployments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_deployments akamai_cps_deployments}
*/
export class DataAkamaiCpsDeployments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cps_deployments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCpsDeployments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCpsDeployments to import
  * @param importFromId The id of the existing DataAkamaiCpsDeployments that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_deployments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCpsDeployments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cps_deployments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_deployments akamai_cps_deployments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCpsDeploymentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCpsDeploymentsConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cps_deployments',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enrollmentId = config.enrollmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renewal_start_time - computed: true, optional: false, required: false
  public get autoRenewalStartTime() {
    return this.getStringAttribute('auto_renewal_start_time');
  }

  // enrollment_id - computed: false, optional: false, required: true
  private _enrollmentId?: number; 
  public get enrollmentId() {
    return this.getNumberAttribute('enrollment_id');
  }
  public set enrollmentId(value: number) {
    this._enrollmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentIdInput() {
    return this._enrollmentId;
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
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

  // production_certificate_ecdsa - computed: true, optional: false, required: false
  public get productionCertificateEcdsa() {
    return this.getStringAttribute('production_certificate_ecdsa');
  }

  // production_certificate_rsa - computed: true, optional: false, required: false
  public get productionCertificateRsa() {
    return this.getStringAttribute('production_certificate_rsa');
  }

  // staging_certificate_ecdsa - computed: true, optional: false, required: false
  public get stagingCertificateEcdsa() {
    return this.getStringAttribute('staging_certificate_ecdsa');
  }

  // staging_certificate_rsa - computed: true, optional: false, required: false
  public get stagingCertificateRsa() {
    return this.getStringAttribute('staging_certificate_rsa');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enrollment_id: cdktf.numberToTerraform(this._enrollmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enrollment_id: {
        value: cdktf.numberToHclTerraform(this._enrollmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
