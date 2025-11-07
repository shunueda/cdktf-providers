// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/peering_gateway_aws_tgw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlkiraPeeringGatewayAwsTgwConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the associated AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/peering_gateway_aws_tgw#aws_tgw_id DataAlkiraPeeringGatewayAwsTgw#aws_tgw_id}
  */
  readonly awsTgwId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/peering_gateway_aws_tgw#id DataAlkiraPeeringGatewayAwsTgw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/peering_gateway_aws_tgw#name DataAlkiraPeeringGatewayAwsTgw#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/peering_gateway_aws_tgw alkira_peering_gateway_aws_tgw}
*/
export class DataAlkiraPeeringGatewayAwsTgw extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_peering_gateway_aws_tgw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlkiraPeeringGatewayAwsTgw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlkiraPeeringGatewayAwsTgw to import
  * @param importFromId The id of the existing DataAlkiraPeeringGatewayAwsTgw that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/peering_gateway_aws_tgw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlkiraPeeringGatewayAwsTgw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_peering_gateway_aws_tgw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/peering_gateway_aws_tgw alkira_peering_gateway_aws_tgw} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlkiraPeeringGatewayAwsTgwConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlkiraPeeringGatewayAwsTgwConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_peering_gateway_aws_tgw',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsTgwId = config.awsTgwId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_tgw_id - computed: true, optional: true, required: false
  private _awsTgwId?: number; 
  public get awsTgwId() {
    return this.getNumberAttribute('aws_tgw_id');
  }
  public set awsTgwId(value: number) {
    this._awsTgwId = value;
  }
  public resetAwsTgwId() {
    this._awsTgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTgwIdInput() {
    return this._awsTgwId;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_tgw_id: cdktf.numberToTerraform(this._awsTgwId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_tgw_id: {
        value: cdktf.numberToHclTerraform(this._awsTgwId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
