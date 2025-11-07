// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployPolicySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set#cluster DeployPolicySet#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set#delete_from_cluster DeployPolicySet#delete_from_cluster}
  */
  readonly deleteFromCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set#id DeployPolicySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set#policy_set_name DeployPolicySet#policy_set_name}
  */
  readonly policySetName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set nirmata_deploy_policy_set}
*/
export class DeployPolicySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_deploy_policy_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeployPolicySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeployPolicySet to import
  * @param importFromId The id of the existing DeployPolicySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeployPolicySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_deploy_policy_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/deploy_policy_set nirmata_deploy_policy_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployPolicySetConfig
  */
  public constructor(scope: Construct, id: string, config: DeployPolicySetConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_deploy_policy_set',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._deleteFromCluster = config.deleteFromCluster;
    this._id = config.id;
    this._policySetName = config.policySetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // delete_from_cluster - computed: false, optional: true, required: false
  private _deleteFromCluster?: boolean | cdktf.IResolvable; 
  public get deleteFromCluster() {
    return this.getBooleanAttribute('delete_from_cluster');
  }
  public set deleteFromCluster(value: boolean | cdktf.IResolvable) {
    this._deleteFromCluster = value;
  }
  public resetDeleteFromCluster() {
    this._deleteFromCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteFromClusterInput() {
    return this._deleteFromCluster;
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

  // policy_set_name - computed: false, optional: false, required: true
  private _policySetName?: string; 
  public get policySetName() {
    return this.getStringAttribute('policy_set_name');
  }
  public set policySetName(value: string) {
    this._policySetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetNameInput() {
    return this._policySetName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      delete_from_cluster: cdktf.booleanToTerraform(this._deleteFromCluster),
      id: cdktf.stringToTerraform(this._id),
      policy_set_name: cdktf.stringToTerraform(this._policySetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_from_cluster: {
        value: cdktf.booleanToHclTerraform(this._deleteFromCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_set_name: {
        value: cdktf.stringToHclTerraform(this._policySetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
