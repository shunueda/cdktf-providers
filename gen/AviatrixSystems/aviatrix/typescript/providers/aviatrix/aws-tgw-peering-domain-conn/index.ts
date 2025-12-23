// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwPeeringDomainConnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the source domain to make a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn#domain_name1 AwsTgwPeeringDomainConn#domain_name1}
  */
  readonly domainName1: string;
  /**
  * The name of the destination domain to make a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn#domain_name2 AwsTgwPeeringDomainConn#domain_name2}
  */
  readonly domainName2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn#id AwsTgwPeeringDomainConn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The AWS tgw name of the source domain to make a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn#tgw_name1 AwsTgwPeeringDomainConn#tgw_name1}
  */
  readonly tgwName1: string;
  /**
  * The AWS tgw name of the destination domain to make a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn#tgw_name2 AwsTgwPeeringDomainConn#tgw_name2}
  */
  readonly tgwName2: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn aviatrix_aws_tgw_peering_domain_conn}
*/
export class AwsTgwPeeringDomainConn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_peering_domain_conn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwPeeringDomainConn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwPeeringDomainConn to import
  * @param importFromId The id of the existing AwsTgwPeeringDomainConn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwPeeringDomainConn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_peering_domain_conn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_peering_domain_conn aviatrix_aws_tgw_peering_domain_conn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwPeeringDomainConnConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwPeeringDomainConnConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_peering_domain_conn',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName1 = config.domainName1;
    this._domainName2 = config.domainName2;
    this._id = config.id;
    this._tgwName1 = config.tgwName1;
    this._tgwName2 = config.tgwName2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name1 - computed: false, optional: false, required: true
  private _domainName1?: string; 
  public get domainName1() {
    return this.getStringAttribute('domain_name1');
  }
  public set domainName1(value: string) {
    this._domainName1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainName1Input() {
    return this._domainName1;
  }

  // domain_name2 - computed: false, optional: false, required: true
  private _domainName2?: string; 
  public get domainName2() {
    return this.getStringAttribute('domain_name2');
  }
  public set domainName2(value: string) {
    this._domainName2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainName2Input() {
    return this._domainName2;
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

  // tgw_name1 - computed: false, optional: false, required: true
  private _tgwName1?: string; 
  public get tgwName1() {
    return this.getStringAttribute('tgw_name1');
  }
  public set tgwName1(value: string) {
    this._tgwName1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwName1Input() {
    return this._tgwName1;
  }

  // tgw_name2 - computed: false, optional: false, required: true
  private _tgwName2?: string; 
  public get tgwName2() {
    return this.getStringAttribute('tgw_name2');
  }
  public set tgwName2(value: string) {
    this._tgwName2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwName2Input() {
    return this._tgwName2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name1: cdktf.stringToTerraform(this._domainName1),
      domain_name2: cdktf.stringToTerraform(this._domainName2),
      id: cdktf.stringToTerraform(this._id),
      tgw_name1: cdktf.stringToTerraform(this._tgwName1),
      tgw_name2: cdktf.stringToTerraform(this._tgwName2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name1: {
        value: cdktf.stringToHclTerraform(this._domainName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name2: {
        value: cdktf.stringToHclTerraform(this._domainName2),
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
      tgw_name1: {
        value: cdktf.stringToHclTerraform(this._tgwName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_name2: {
        value: cdktf.stringToHclTerraform(this._tgwName2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
