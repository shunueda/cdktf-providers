// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenAwsVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account ID. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection#aws_account_id DataAivenAwsVpcPeeringConnection#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * AWS VPC ID. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection#aws_vpc_id DataAivenAwsVpcPeeringConnection#aws_vpc_id}
  */
  readonly awsVpcId: string;
  /**
  * The AWS region of the peered VPC, if different from the Aiven VPC region. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection#aws_vpc_region DataAivenAwsVpcPeeringConnection#aws_vpc_region}
  */
  readonly awsVpcRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection#id DataAivenAwsVpcPeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Aiven VPC. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection#vpc_id DataAivenAwsVpcPeeringConnection#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection aiven_aws_vpc_peering_connection}
*/
export class DataAivenAwsVpcPeeringConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_aws_vpc_peering_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenAwsVpcPeeringConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenAwsVpcPeeringConnection to import
  * @param importFromId The id of the existing DataAivenAwsVpcPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenAwsVpcPeeringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_aws_vpc_peering_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/aws_vpc_peering_connection aiven_aws_vpc_peering_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenAwsVpcPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenAwsVpcPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_aws_vpc_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._awsVpcId = config.awsVpcId;
    this._awsVpcRegion = config.awsVpcRegion;
    this._id = config.id;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_vpc_id - computed: false, optional: false, required: true
  private _awsVpcId?: string; 
  public get awsVpcId() {
    return this.getStringAttribute('aws_vpc_id');
  }
  public set awsVpcId(value: string) {
    this._awsVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcIdInput() {
    return this._awsVpcId;
  }

  // aws_vpc_peering_connection_id - computed: true, optional: false, required: false
  public get awsVpcPeeringConnectionId() {
    return this.getStringAttribute('aws_vpc_peering_connection_id');
  }

  // aws_vpc_region - computed: false, optional: false, required: true
  private _awsVpcRegion?: string; 
  public get awsVpcRegion() {
    return this.getStringAttribute('aws_vpc_region');
  }
  public set awsVpcRegion(value: string) {
    this._awsVpcRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcRegionInput() {
    return this._awsVpcRegion;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_info - computed: true, optional: false, required: false
  private _stateInfo = new cdktf.StringMap(this, "state_info");
  public get stateInfo() {
    return this._stateInfo;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_vpc_id: cdktf.stringToTerraform(this._awsVpcId),
      aws_vpc_region: cdktf.stringToTerraform(this._awsVpcRegion),
      id: cdktf.stringToTerraform(this._id),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_vpc_id: {
        value: cdktf.stringToHclTerraform(this._awsVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_vpc_region: {
        value: cdktf.stringToHclTerraform(this._awsVpcRegion),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
