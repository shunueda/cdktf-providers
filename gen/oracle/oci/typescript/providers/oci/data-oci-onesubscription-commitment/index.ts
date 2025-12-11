// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/onesubscription_commitment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOnesubscriptionCommitmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/onesubscription_commitment#commitment_id DataOciOnesubscriptionCommitment#commitment_id}
  */
  readonly commitmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/onesubscription_commitment#id DataOciOnesubscriptionCommitment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/onesubscription_commitment oci_onesubscription_commitment}
*/
export class DataOciOnesubscriptionCommitment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_onesubscription_commitment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOnesubscriptionCommitment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOnesubscriptionCommitment to import
  * @param importFromId The id of the existing DataOciOnesubscriptionCommitment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/onesubscription_commitment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOnesubscriptionCommitment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_onesubscription_commitment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/onesubscription_commitment oci_onesubscription_commitment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOnesubscriptionCommitmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOnesubscriptionCommitmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_onesubscription_commitment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commitmentId = config.commitmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_amount - computed: true, optional: false, required: false
  public get availableAmount() {
    return this.getStringAttribute('available_amount');
  }

  // commitment_id - computed: false, optional: false, required: true
  private _commitmentId?: string; 
  public get commitmentId() {
    return this.getStringAttribute('commitment_id');
  }
  public set commitmentId(value: string) {
    this._commitmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentIdInput() {
    return this._commitmentId;
  }

  // funded_allocation_value - computed: true, optional: false, required: false
  public get fundedAllocationValue() {
    return this.getStringAttribute('funded_allocation_value');
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

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // subscribed_service_id - computed: true, optional: false, required: false
  public get subscribedServiceId() {
    return this.getStringAttribute('subscribed_service_id');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // used_amount - computed: true, optional: false, required: false
  public get usedAmount() {
    return this.getStringAttribute('used_amount');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commitment_id: cdktf.stringToTerraform(this._commitmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commitment_id: {
        value: cdktf.stringToHclTerraform(this._commitmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
