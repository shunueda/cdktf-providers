// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsVpcPeerV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Cluster Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#cdc_id DataInstaclustrAwsVpcPeerV2Instance#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * ID of the current data centre VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#data_centre_vpc_id DataInstaclustrAwsVpcPeerV2Instance#data_centre_vpc_id}
  */
  readonly dataCentreVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#id DataInstaclustrAwsVpcPeerV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The AWS account ID of the owner of the accepter VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#peer_aws_account_id DataInstaclustrAwsVpcPeerV2Instance#peer_aws_account_id}
  */
  readonly peerAwsAccountId?: string;
  /**
  * Region code for the accepter VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#peer_region DataInstaclustrAwsVpcPeerV2Instance#peer_region}
  */
  readonly peerRegion?: string;
  /**
  * The subnets for the peering VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#peer_subnets DataInstaclustrAwsVpcPeerV2Instance#peer_subnets}
  */
  readonly peerSubnets?: string[];
  /**
  * ID of the VPC with which the peering connection is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#peer_vpc_id DataInstaclustrAwsVpcPeerV2Instance#peer_vpc_id}
  */
  readonly peerVpcId?: string;
  /**
  * Status of the VPC Peering Connection. Values can be `pending-acceptance`, `failed`, `expired`, `provisioning`, `active`, `deleting`, `deleted` or `rejected`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#status_code DataInstaclustrAwsVpcPeerV2Instance#status_code}
  */
  readonly statusCode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance instaclustr_aws_vpc_peer_v2_instance}
*/
export class DataInstaclustrAwsVpcPeerV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_vpc_peer_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsVpcPeerV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsVpcPeerV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAwsVpcPeerV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsVpcPeerV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_vpc_peer_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/aws_vpc_peer_v2_instance instaclustr_aws_vpc_peer_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsVpcPeerV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsVpcPeerV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_vpc_peer_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.33',
        providerVersionConstraint: '2.1.33'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdcId = config.cdcId;
    this._dataCentreVpcId = config.dataCentreVpcId;
    this._id = config.id;
    this._peerAwsAccountId = config.peerAwsAccountId;
    this._peerRegion = config.peerRegion;
    this._peerSubnets = config.peerSubnets;
    this._peerVpcId = config.peerVpcId;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // data_centre_vpc_id - computed: true, optional: true, required: false
  private _dataCentreVpcId?: string; 
  public get dataCentreVpcId() {
    return this.getStringAttribute('data_centre_vpc_id');
  }
  public set dataCentreVpcId(value: string) {
    this._dataCentreVpcId = value;
  }
  public resetDataCentreVpcId() {
    this._dataCentreVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreVpcIdInput() {
    return this._dataCentreVpcId;
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

  // peer_aws_account_id - computed: true, optional: true, required: false
  private _peerAwsAccountId?: string; 
  public get peerAwsAccountId() {
    return this.getStringAttribute('peer_aws_account_id');
  }
  public set peerAwsAccountId(value: string) {
    this._peerAwsAccountId = value;
  }
  public resetPeerAwsAccountId() {
    this._peerAwsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAwsAccountIdInput() {
    return this._peerAwsAccountId;
  }

  // peer_region - computed: true, optional: true, required: false
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  public resetPeerRegion() {
    this._peerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // peer_subnets - computed: true, optional: true, required: false
  private _peerSubnets?: string[]; 
  public get peerSubnets() {
    return this.getListAttribute('peer_subnets');
  }
  public set peerSubnets(value: string[]) {
    this._peerSubnets = value;
  }
  public resetPeerSubnets() {
    this._peerSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets;
  }

  // peer_vpc_id - computed: true, optional: true, required: false
  private _peerVpcId?: string; 
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  public resetPeerVpcId() {
    this._peerVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      data_centre_vpc_id: cdktf.stringToTerraform(this._dataCentreVpcId),
      id: cdktf.stringToTerraform(this._id),
      peer_aws_account_id: cdktf.stringToTerraform(this._peerAwsAccountId),
      peer_region: cdktf.stringToTerraform(this._peerRegion),
      peer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerSubnets),
      peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
      status_code: cdktf.stringToTerraform(this._statusCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre_vpc_id: {
        value: cdktf.stringToHclTerraform(this._dataCentreVpcId),
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
      peer_aws_account_id: {
        value: cdktf.stringToHclTerraform(this._peerAwsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_region: {
        value: cdktf.stringToHclTerraform(this._peerRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peer_vpc_id: {
        value: cdktf.stringToHclTerraform(this._peerVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_code: {
        value: cdktf.stringToHclTerraform(this._statusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
