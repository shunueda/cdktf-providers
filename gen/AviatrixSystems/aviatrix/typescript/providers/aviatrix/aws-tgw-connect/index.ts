// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect#connection_name AwsTgwConnect#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect#id AwsTgwConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network Domain Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect#network_domain_name AwsTgwConnect#network_domain_name}
  */
  readonly networkDomainName: string;
  /**
  * AWS TGW Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect#tgw_name AwsTgwConnect#tgw_name}
  */
  readonly tgwName: string;
  /**
  * Transport Attachment VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect#transport_vpc_id AwsTgwConnect#transport_vpc_id}
  */
  readonly transportVpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect aviatrix_aws_tgw_connect}
*/
export class AwsTgwConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwConnect to import
  * @param importFromId The id of the existing AwsTgwConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect aviatrix_aws_tgw_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwConnectConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_connect',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionName = config.connectionName;
    this._id = config.id;
    this._networkDomainName = config.networkDomainName;
    this._tgwName = config.tgwName;
    this._transportVpcId = config.transportVpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_attachment_id - computed: true, optional: false, required: false
  public get connectAttachmentId() {
    return this.getStringAttribute('connect_attachment_id');
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
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

  // network_domain_name - computed: false, optional: false, required: true
  private _networkDomainName?: string; 
  public get networkDomainName() {
    return this.getStringAttribute('network_domain_name');
  }
  public set networkDomainName(value: string) {
    this._networkDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDomainNameInput() {
    return this._networkDomainName;
  }

  // tgw_name - computed: false, optional: false, required: true
  private _tgwName?: string; 
  public get tgwName() {
    return this.getStringAttribute('tgw_name');
  }
  public set tgwName(value: string) {
    this._tgwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwNameInput() {
    return this._tgwName;
  }

  // transport_attachment_id - computed: true, optional: false, required: false
  public get transportAttachmentId() {
    return this.getStringAttribute('transport_attachment_id');
  }

  // transport_vpc_id - computed: false, optional: false, required: true
  private _transportVpcId?: string; 
  public get transportVpcId() {
    return this.getStringAttribute('transport_vpc_id');
  }
  public set transportVpcId(value: string) {
    this._transportVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportVpcIdInput() {
    return this._transportVpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_name: cdktf.stringToTerraform(this._connectionName),
      id: cdktf.stringToTerraform(this._id),
      network_domain_name: cdktf.stringToTerraform(this._networkDomainName),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
      transport_vpc_id: cdktf.stringToTerraform(this._transportVpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
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
      network_domain_name: {
        value: cdktf.stringToHclTerraform(this._networkDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_name: {
        value: cdktf.stringToHclTerraform(this._tgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_vpc_id: {
        value: cdktf.stringToHclTerraform(this._transportVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
