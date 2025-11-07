// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetGkeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#description TargetGke#description}
  */
  readonly description?: string;
  /**
  * GKE service account key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#gke_account_key TargetGke#gke_account_key}
  */
  readonly gkeAccountKey?: string;
  /**
  * GKE Base-64 encoded cluster certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#gke_cluster_cert TargetGke#gke_cluster_cert}
  */
  readonly gkeClusterCert?: string;
  /**
  * GKE cluster endpoint, i.e., cluster URI https://<DNS/IP>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#gke_cluster_endpoint TargetGke#gke_cluster_endpoint}
  */
  readonly gkeClusterEndpoint?: string;
  /**
  * GKE cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#gke_cluster_name TargetGke#gke_cluster_name}
  */
  readonly gkeClusterName?: string;
  /**
  * GKE service account email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#gke_service_account_email TargetGke#gke_service_account_email}
  */
  readonly gkeServiceAccountEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#id TargetGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#key TargetGke#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#name TargetGke#name}
  */
  readonly name: string;
  /**
  * Use the GW's Cloud IAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#use_gw_cloud_identity TargetGke#use_gw_cloud_identity}
  */
  readonly useGwCloudIdentity?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke akeyless_target_gke}
*/
export class TargetGke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_gke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetGke resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetGke to import
  * @param importFromId The id of the existing TargetGke that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetGke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_gke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gke akeyless_target_gke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetGkeConfig
  */
  public constructor(scope: Construct, id: string, config: TargetGkeConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_gke',
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
    this._gkeAccountKey = config.gkeAccountKey;
    this._gkeClusterCert = config.gkeClusterCert;
    this._gkeClusterEndpoint = config.gkeClusterEndpoint;
    this._gkeClusterName = config.gkeClusterName;
    this._gkeServiceAccountEmail = config.gkeServiceAccountEmail;
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

  // gke_account_key - computed: false, optional: true, required: false
  private _gkeAccountKey?: string; 
  public get gkeAccountKey() {
    return this.getStringAttribute('gke_account_key');
  }
  public set gkeAccountKey(value: string) {
    this._gkeAccountKey = value;
  }
  public resetGkeAccountKey() {
    this._gkeAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeAccountKeyInput() {
    return this._gkeAccountKey;
  }

  // gke_cluster_cert - computed: false, optional: true, required: false
  private _gkeClusterCert?: string; 
  public get gkeClusterCert() {
    return this.getStringAttribute('gke_cluster_cert');
  }
  public set gkeClusterCert(value: string) {
    this._gkeClusterCert = value;
  }
  public resetGkeClusterCert() {
    this._gkeClusterCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterCertInput() {
    return this._gkeClusterCert;
  }

  // gke_cluster_endpoint - computed: false, optional: true, required: false
  private _gkeClusterEndpoint?: string; 
  public get gkeClusterEndpoint() {
    return this.getStringAttribute('gke_cluster_endpoint');
  }
  public set gkeClusterEndpoint(value: string) {
    this._gkeClusterEndpoint = value;
  }
  public resetGkeClusterEndpoint() {
    this._gkeClusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterEndpointInput() {
    return this._gkeClusterEndpoint;
  }

  // gke_cluster_name - computed: false, optional: true, required: false
  private _gkeClusterName?: string; 
  public get gkeClusterName() {
    return this.getStringAttribute('gke_cluster_name');
  }
  public set gkeClusterName(value: string) {
    this._gkeClusterName = value;
  }
  public resetGkeClusterName() {
    this._gkeClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterNameInput() {
    return this._gkeClusterName;
  }

  // gke_service_account_email - computed: false, optional: true, required: false
  private _gkeServiceAccountEmail?: string; 
  public get gkeServiceAccountEmail() {
    return this.getStringAttribute('gke_service_account_email');
  }
  public set gkeServiceAccountEmail(value: string) {
    this._gkeServiceAccountEmail = value;
  }
  public resetGkeServiceAccountEmail() {
    this._gkeServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeServiceAccountEmailInput() {
    return this._gkeServiceAccountEmail;
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
      gke_account_key: cdktf.stringToTerraform(this._gkeAccountKey),
      gke_cluster_cert: cdktf.stringToTerraform(this._gkeClusterCert),
      gke_cluster_endpoint: cdktf.stringToTerraform(this._gkeClusterEndpoint),
      gke_cluster_name: cdktf.stringToTerraform(this._gkeClusterName),
      gke_service_account_email: cdktf.stringToTerraform(this._gkeServiceAccountEmail),
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
      gke_account_key: {
        value: cdktf.stringToHclTerraform(this._gkeAccountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_cluster_cert: {
        value: cdktf.stringToHclTerraform(this._gkeClusterCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_cluster_name: {
        value: cdktf.stringToHclTerraform(this._gkeClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_service_account_email: {
        value: cdktf.stringToHclTerraform(this._gkeServiceAccountEmail),
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
