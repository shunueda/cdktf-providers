// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsExocomputeConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#account_id AwsExocompute#account_id}
  */
  readonly accountId: string;
  /**
  * AWS security group ID for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#cluster_security_group_id AwsExocompute#cluster_security_group_id}
  */
  readonly clusterSecurityGroupId?: string;
  /**
  * Exocompute host cloud account ID. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#host_account_id AwsExocompute#host_account_id}
  */
  readonly hostAccountId?: string;
  /**
  * AWS security group ID for the nodes. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#node_security_group_id AwsExocompute#node_security_group_id}
  */
  readonly nodeSecurityGroupId?: string;
  /**
  * AWS region to run the Exocompute instance in. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#region AwsExocompute#region}
  */
  readonly region?: string;
  /**
  * AWS subnet IDs for the cluster subnets. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#subnets AwsExocompute#subnets}
  */
  readonly subnets?: string[];
  /**
  * AWS VPC ID for the cluster network. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#vpc_id AwsExocompute#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute polaris_aws_exocompute}
*/
export class AwsExocompute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_exocompute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsExocompute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsExocompute to import
  * @param importFromId The id of the existing AwsExocompute that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsExocompute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_exocompute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_exocompute polaris_aws_exocompute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsExocomputeConfig
  */
  public constructor(scope: Construct, id: string, config: AwsExocomputeConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_exocompute',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._clusterSecurityGroupId = config.clusterSecurityGroupId;
    this._hostAccountId = config.hostAccountId;
    this._nodeSecurityGroupId = config.nodeSecurityGroupId;
    this._region = config.region;
    this._subnets = config.subnets;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // cluster_security_group_id - computed: true, optional: true, required: false
  private _clusterSecurityGroupId?: string; 
  public get clusterSecurityGroupId() {
    return this.getStringAttribute('cluster_security_group_id');
  }
  public set clusterSecurityGroupId(value: string) {
    this._clusterSecurityGroupId = value;
  }
  public resetClusterSecurityGroupId() {
    this._clusterSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSecurityGroupIdInput() {
    return this._clusterSecurityGroupId;
  }

  // host_account_id - computed: false, optional: true, required: false
  private _hostAccountId?: string; 
  public get hostAccountId() {
    return this.getStringAttribute('host_account_id');
  }
  public set hostAccountId(value: string) {
    this._hostAccountId = value;
  }
  public resetHostAccountId() {
    this._hostAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAccountIdInput() {
    return this._hostAccountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_security_group_id - computed: true, optional: true, required: false
  private _nodeSecurityGroupId?: string; 
  public get nodeSecurityGroupId() {
    return this.getStringAttribute('node_security_group_id');
  }
  public set nodeSecurityGroupId(value: string) {
    this._nodeSecurityGroupId = value;
  }
  public resetNodeSecurityGroupId() {
    this._nodeSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSecurityGroupIdInput() {
    return this._nodeSecurityGroupId;
  }

  // polaris_managed - computed: true, optional: false, required: false
  public get polarisManaged() {
    return this.getBooleanAttribute('polaris_managed');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      cluster_security_group_id: cdktf.stringToTerraform(this._clusterSecurityGroupId),
      host_account_id: cdktf.stringToTerraform(this._hostAccountId),
      node_security_group_id: cdktf.stringToTerraform(this._nodeSecurityGroupId),
      region: cdktf.stringToTerraform(this._region),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_security_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_account_id: {
        value: cdktf.stringToHclTerraform(this._hostAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_security_group_id: {
        value: cdktf.stringToHclTerraform(this._nodeSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
