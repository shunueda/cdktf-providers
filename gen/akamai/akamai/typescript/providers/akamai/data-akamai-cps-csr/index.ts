// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_csr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCpsCsrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_csr#enrollment_id DataAkamaiCpsCsr#enrollment_id}
  */
  readonly enrollmentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_csr#id DataAkamaiCpsCsr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_csr akamai_cps_csr}
*/
export class DataAkamaiCpsCsr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cps_csr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCpsCsr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCpsCsr to import
  * @param importFromId The id of the existing DataAkamaiCpsCsr that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_csr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCpsCsr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cps_csr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_csr akamai_cps_csr} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCpsCsrConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCpsCsrConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cps_csr',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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

  // csr_ecdsa - computed: true, optional: false, required: false
  public get csrEcdsa() {
    return this.getStringAttribute('csr_ecdsa');
  }

  // csr_rsa - computed: true, optional: false, required: false
  public get csrRsa() {
    return this.getStringAttribute('csr_rsa');
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
