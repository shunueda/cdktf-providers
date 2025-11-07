// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetEksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#description TargetEks#description}
  */
  readonly description?: string;
  /**
  * EKS access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#eks_access_key_id TargetEks#eks_access_key_id}
  */
  readonly eksAccessKeyId: string;
  /**
  * EKS cluster base-64 encoded certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#eks_cluster_ca_cert TargetEks#eks_cluster_ca_cert}
  */
  readonly eksClusterCaCert: string;
  /**
  * EKS cluster endpoint (i.e., https://<IP> of the cluster)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#eks_cluster_endpoint TargetEks#eks_cluster_endpoint}
  */
  readonly eksClusterEndpoint: string;
  /**
  * EKS cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#eks_cluster_name TargetEks#eks_cluster_name}
  */
  readonly eksClusterName: string;
  /**
  * EKS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#eks_region TargetEks#eks_region}
  */
  readonly eksRegion?: string;
  /**
  * EKS secret access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#eks_secret_access_key TargetEks#eks_secret_access_key}
  */
  readonly eksSecretAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#id TargetEks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#key TargetEks#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#name TargetEks#name}
  */
  readonly name: string;
  /**
  * Use the GW's Cloud IAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#use_gw_cloud_identity TargetEks#use_gw_cloud_identity}
  */
  readonly useGwCloudIdentity?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks akeyless_target_eks}
*/
export class TargetEks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_eks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetEks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetEks to import
  * @param importFromId The id of the existing TargetEks that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetEks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_eks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_eks akeyless_target_eks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetEksConfig
  */
  public constructor(scope: Construct, id: string, config: TargetEksConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_eks',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
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
    this._eksAccessKeyId = config.eksAccessKeyId;
    this._eksClusterCaCert = config.eksClusterCaCert;
    this._eksClusterEndpoint = config.eksClusterEndpoint;
    this._eksClusterName = config.eksClusterName;
    this._eksRegion = config.eksRegion;
    this._eksSecretAccessKey = config.eksSecretAccessKey;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._useGwCloudIdentity = config.useGwCloudIdentity;
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

  // eks_access_key_id - computed: false, optional: false, required: true
  private _eksAccessKeyId?: string; 
  public get eksAccessKeyId() {
    return this.getStringAttribute('eks_access_key_id');
  }
  public set eksAccessKeyId(value: string) {
    this._eksAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksAccessKeyIdInput() {
    return this._eksAccessKeyId;
  }

  // eks_cluster_ca_cert - computed: false, optional: false, required: true
  private _eksClusterCaCert?: string; 
  public get eksClusterCaCert() {
    return this.getStringAttribute('eks_cluster_ca_cert');
  }
  public set eksClusterCaCert(value: string) {
    this._eksClusterCaCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterCaCertInput() {
    return this._eksClusterCaCert;
  }

  // eks_cluster_endpoint - computed: false, optional: false, required: true
  private _eksClusterEndpoint?: string; 
  public get eksClusterEndpoint() {
    return this.getStringAttribute('eks_cluster_endpoint');
  }
  public set eksClusterEndpoint(value: string) {
    this._eksClusterEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterEndpointInput() {
    return this._eksClusterEndpoint;
  }

  // eks_cluster_name - computed: false, optional: false, required: true
  private _eksClusterName?: string; 
  public get eksClusterName() {
    return this.getStringAttribute('eks_cluster_name');
  }
  public set eksClusterName(value: string) {
    this._eksClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterNameInput() {
    return this._eksClusterName;
  }

  // eks_region - computed: false, optional: true, required: false
  private _eksRegion?: string; 
  public get eksRegion() {
    return this.getStringAttribute('eks_region');
  }
  public set eksRegion(value: string) {
    this._eksRegion = value;
  }
  public resetEksRegion() {
    this._eksRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksRegionInput() {
    return this._eksRegion;
  }

  // eks_secret_access_key - computed: false, optional: false, required: true
  private _eksSecretAccessKey?: string; 
  public get eksSecretAccessKey() {
    return this.getStringAttribute('eks_secret_access_key');
  }
  public set eksSecretAccessKey(value: string) {
    this._eksSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksSecretAccessKeyInput() {
    return this._eksSecretAccessKey;
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

  // use_gw_cloud_identity - computed: false, optional: true, required: false
  private _useGwCloudIdentity?: boolean | cdktf.IResolvable; 
  public get useGwCloudIdentity() {
    return this.getBooleanAttribute('use_gw_cloud_identity');
  }
  public set useGwCloudIdentity(value: boolean | cdktf.IResolvable) {
    this._useGwCloudIdentity = value;
  }
  public resetUseGwCloudIdentity() {
    this._useGwCloudIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGwCloudIdentityInput() {
    return this._useGwCloudIdentity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      eks_access_key_id: cdktf.stringToTerraform(this._eksAccessKeyId),
      eks_cluster_ca_cert: cdktf.stringToTerraform(this._eksClusterCaCert),
      eks_cluster_endpoint: cdktf.stringToTerraform(this._eksClusterEndpoint),
      eks_cluster_name: cdktf.stringToTerraform(this._eksClusterName),
      eks_region: cdktf.stringToTerraform(this._eksRegion),
      eks_secret_access_key: cdktf.stringToTerraform(this._eksSecretAccessKey),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      use_gw_cloud_identity: cdktf.booleanToTerraform(this._useGwCloudIdentity),
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
      eks_access_key_id: {
        value: cdktf.stringToHclTerraform(this._eksAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._eksClusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._eksClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_cluster_name: {
        value: cdktf.stringToHclTerraform(this._eksClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_region: {
        value: cdktf.stringToHclTerraform(this._eksRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._eksSecretAccessKey),
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
      use_gw_cloud_identity: {
        value: cdktf.booleanToHclTerraform(this._useGwCloudIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
