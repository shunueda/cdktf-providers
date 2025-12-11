// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetK8SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#description TargetK8S#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#id TargetK8S#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * K8S Cluster certificate. Base 64 encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#k8s_cluster_ca_cert TargetK8S#k8s_cluster_ca_cert}
  */
  readonly k8SClusterCaCert: string;
  /**
  * K8S Cluster endpoint. https:// , <DNS / IP> of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#k8s_cluster_endpoint TargetK8S#k8s_cluster_endpoint}
  */
  readonly k8SClusterEndpoint: string;
  /**
  * K8S Cluster authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#k8s_cluster_token TargetK8S#k8s_cluster_token}
  */
  readonly k8SClusterToken: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#key TargetK8S#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#name TargetK8S#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s akeyless_target_k8s}
*/
export class TargetK8S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetK8S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetK8S to import
  * @param importFromId The id of the existing TargetK8S that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetK8S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_k8s akeyless_target_k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetK8SConfig
  */
  public constructor(scope: Construct, id: string, config: TargetK8SConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_k8s',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._k8SClusterCaCert = config.k8SClusterCaCert;
    this._k8SClusterEndpoint = config.k8SClusterEndpoint;
    this._k8SClusterToken = config.k8SClusterToken;
    this._key = config.key;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // k8s_cluster_ca_cert - computed: false, optional: false, required: true
  private _k8SClusterCaCert?: string; 
  public get k8SClusterCaCert() {
    return this.getStringAttribute('k8s_cluster_ca_cert');
  }
  public set k8SClusterCaCert(value: string) {
    this._k8SClusterCaCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterCaCertInput() {
    return this._k8SClusterCaCert;
  }

  // k8s_cluster_endpoint - computed: false, optional: false, required: true
  private _k8SClusterEndpoint?: string; 
  public get k8SClusterEndpoint() {
    return this.getStringAttribute('k8s_cluster_endpoint');
  }
  public set k8SClusterEndpoint(value: string) {
    this._k8SClusterEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterEndpointInput() {
    return this._k8SClusterEndpoint;
  }

  // k8s_cluster_token - computed: false, optional: false, required: true
  private _k8SClusterToken?: string; 
  public get k8SClusterToken() {
    return this.getStringAttribute('k8s_cluster_token');
  }
  public set k8SClusterToken(value: string) {
    this._k8SClusterToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterTokenInput() {
    return this._k8SClusterToken;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      k8s_cluster_ca_cert: cdktf.stringToTerraform(this._k8SClusterCaCert),
      k8s_cluster_endpoint: cdktf.stringToTerraform(this._k8SClusterEndpoint),
      k8s_cluster_token: cdktf.stringToTerraform(this._k8SClusterToken),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      k8s_cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._k8SClusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._k8SClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_cluster_token: {
        value: cdktf.stringToHclTerraform(this._k8SClusterToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
