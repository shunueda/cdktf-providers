// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsubSubscriptionCommitmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment#commitment_id DataOciOsubSubscriptionCommitment#commitment_id}
  */
  readonly commitmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment#id DataOciOsubSubscriptionCommitment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitment#x_one_gateway_subscription_id}
  */
  readonly xOneGatewaySubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment#x_one_origin_region DataOciOsubSubscriptionCommitment#x_one_origin_region}
  */
  readonly xOneOriginRegion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment oci_osub_subscription_commitment}
*/
export class DataOciOsubSubscriptionCommitment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osub_subscription_commitment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsubSubscriptionCommitment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsubSubscriptionCommitment to import
  * @param importFromId The id of the existing DataOciOsubSubscriptionCommitment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsubSubscriptionCommitment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osub_subscription_commitment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_commitment oci_osub_subscription_commitment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsubSubscriptionCommitmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsubSubscriptionCommitmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osub_subscription_commitment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._xOneGatewaySubscriptionId = config.xOneGatewaySubscriptionId;
    this._xOneOriginRegion = config.xOneOriginRegion;
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

  // x_one_gateway_subscription_id - computed: false, optional: true, required: false
  private _xOneGatewaySubscriptionId?: string; 
  public get xOneGatewaySubscriptionId() {
    return this.getStringAttribute('x_one_gateway_subscription_id');
  }
  public set xOneGatewaySubscriptionId(value: string) {
    this._xOneGatewaySubscriptionId = value;
  }
  public resetXOneGatewaySubscriptionId() {
    this._xOneGatewaySubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xOneGatewaySubscriptionIdInput() {
    return this._xOneGatewaySubscriptionId;
  }

  // x_one_origin_region - computed: false, optional: true, required: false
  private _xOneOriginRegion?: string; 
  public get xOneOriginRegion() {
    return this.getStringAttribute('x_one_origin_region');
  }
  public set xOneOriginRegion(value: string) {
    this._xOneOriginRegion = value;
  }
  public resetXOneOriginRegion() {
    this._xOneOriginRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xOneOriginRegionInput() {
    return this._xOneOriginRegion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commitment_id: cdktf.stringToTerraform(this._commitmentId),
      id: cdktf.stringToTerraform(this._id),
      x_one_gateway_subscription_id: cdktf.stringToTerraform(this._xOneGatewaySubscriptionId),
      x_one_origin_region: cdktf.stringToTerraform(this._xOneOriginRegion),
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
      x_one_gateway_subscription_id: {
        value: cdktf.stringToHclTerraform(this._xOneGatewaySubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_one_origin_region: {
        value: cdktf.stringToHclTerraform(this._xOneOriginRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
