// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsEksCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * eks cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials#cluster_name AwsEksCredentials#cluster_name}
  */
  readonly clusterName: string;
  /**
  * the AWS region of the eks cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials#cluster_region AwsEksCredentials#cluster_region}
  */
  readonly clusterRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials#id AwsEksCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name for the credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials#name AwsEksCredentials#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials env0_aws_eks_credentials}
*/
export class AwsEksCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_aws_eks_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsEksCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEksCredentials to import
  * @param importFromId The id of the existing AwsEksCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEksCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_aws_eks_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/aws_eks_credentials env0_aws_eks_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEksCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: AwsEksCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_aws_eks_credentials',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._clusterRegion = config.clusterRegion;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_region - computed: false, optional: false, required: true
  private _clusterRegion?: string; 
  public get clusterRegion() {
    return this.getStringAttribute('cluster_region');
  }
  public set clusterRegion(value: string) {
    this._clusterRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRegionInput() {
    return this._clusterRegion;
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_region: cdktf.stringToTerraform(this._clusterRegion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_region: {
        value: cdktf.stringToHclTerraform(this._clusterRegion),
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
