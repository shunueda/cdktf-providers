// https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * The kubernetes config file path for the cloud. Cloud credentials will be added to the Juju controller for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud#kubernetes_config KubernetesCloud#kubernetes_config}
  */
  readonly kubernetesConfig?: string;
  /**
  * The name of the cloud. Changing this value will cause the cloud to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud#name KubernetesCloud#name}
  */
  readonly name: string;
  /**
  * The parent cloud name, for adding a k8s cluster from an existing cloud. Changing this value will cause the cloud to be destroyed and recreated by terraform. *Note* that this value must be set when running against a JAAS controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud#parent_cloud_name KubernetesCloud#parent_cloud_name}
  */
  readonly parentCloudName?: string;
  /**
  * The parent cloud region name, for adding a k8s cluster from an existing cloud. Changing this value will cause the cloud to be destroyed and recreated by terraform. *Note* that this value must be set when running against a JAAS controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud#parent_cloud_region KubernetesCloud#parent_cloud_region}
  */
  readonly parentCloudRegion?: string;
  /**
  * If set to true, the Juju Terraform provider will not create a service account and associated role within the K8s cluster and override the authentication info in the K8s config. This way it does not need to connect to the K8s API when adding a k8s cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud#skip_service_account_creation KubernetesCloud#skip_service_account_creation}
  */
  readonly skipServiceAccountCreation?: boolean | cdktf.IResolvable;
  /**
  * Specify the Kubernetes storage class name for workload and operator storage.
  * 
  * When adding K8S clouds via the Terraform Provider, it strays in behaviour from the Juju CLI.
  * 
  * The Juju CLI's add-k8s command has a --storage flag which allows users to specify
  * a storage class name to be used for both operator and workload storage.
  * 
  * The Juju CLI also has a --skip-storage flag which prevents Juju from configuring any
  * storage class names on the cloud definition. By default, this is false.
  * 
  * When adding a K8S cloud via the Juju CLI, it intelligently selects storage classes
  * based on cloud provider preferences (e.g., 'gp2' for AWS, 'standard' for GCE) if no
  * storage class is specified via the --storage flag.
  * 
  * This intelligent selection is not implemented in the Terraform Provider as it requires
  * direct communication with the Kubernetes cluster in question to be added as a cloud.
  * That is, when running terraform and attempting to add a Kubernetes cloud, the caller
  * would need network connectivity to the cluster.
  * 
  * Instead, we expect users to explicitly define the storage class name to use for
  * operator and workload storage via this attribute and default to no storage class specified 
  * otherwise (equivalent to --skip-storage=true in the Juju CLI).
  * 
  * To find this information, users can query their cluster directly, e.g. via:
  *   kubectl get storageclass
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud#storage_class_name KubernetesCloud#storage_class_name}
  */
  readonly storageClassName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud juju_kubernetes_cloud}
*/
export class KubernetesCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_kubernetes_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCloud to import
  * @param importFromId The id of the existing KubernetesCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_kubernetes_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/kubernetes_cloud juju_kubernetes_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesCloudConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_kubernetes_cloud',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._kubernetesConfig = config.kubernetesConfig;
    this._name = config.name;
    this._parentCloudName = config.parentCloudName;
    this._parentCloudRegion = config.parentCloudRegion;
    this._skipServiceAccountCreation = config.skipServiceAccountCreation;
    this._storageClassName = config.storageClassName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_config - computed: false, optional: true, required: false
  private _kubernetesConfig?: string; 
  public get kubernetesConfig() {
    return this.getStringAttribute('kubernetes_config');
  }
  public set kubernetesConfig(value: string) {
    this._kubernetesConfig = value;
  }
  public resetKubernetesConfig() {
    this._kubernetesConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesConfigInput() {
    return this._kubernetesConfig;
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

  // parent_cloud_name - computed: false, optional: true, required: false
  private _parentCloudName?: string; 
  public get parentCloudName() {
    return this.getStringAttribute('parent_cloud_name');
  }
  public set parentCloudName(value: string) {
    this._parentCloudName = value;
  }
  public resetParentCloudName() {
    this._parentCloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCloudNameInput() {
    return this._parentCloudName;
  }

  // parent_cloud_region - computed: false, optional: true, required: false
  private _parentCloudRegion?: string; 
  public get parentCloudRegion() {
    return this.getStringAttribute('parent_cloud_region');
  }
  public set parentCloudRegion(value: string) {
    this._parentCloudRegion = value;
  }
  public resetParentCloudRegion() {
    this._parentCloudRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCloudRegionInput() {
    return this._parentCloudRegion;
  }

  // skip_service_account_creation - computed: false, optional: true, required: false
  private _skipServiceAccountCreation?: boolean | cdktf.IResolvable; 
  public get skipServiceAccountCreation() {
    return this.getBooleanAttribute('skip_service_account_creation');
  }
  public set skipServiceAccountCreation(value: boolean | cdktf.IResolvable) {
    this._skipServiceAccountCreation = value;
  }
  public resetSkipServiceAccountCreation() {
    this._skipServiceAccountCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServiceAccountCreationInput() {
    return this._skipServiceAccountCreation;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kubernetes_config: cdktf.stringToTerraform(this._kubernetesConfig),
      name: cdktf.stringToTerraform(this._name),
      parent_cloud_name: cdktf.stringToTerraform(this._parentCloudName),
      parent_cloud_region: cdktf.stringToTerraform(this._parentCloudRegion),
      skip_service_account_creation: cdktf.booleanToTerraform(this._skipServiceAccountCreation),
      storage_class_name: cdktf.stringToTerraform(this._storageClassName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kubernetes_config: {
        value: cdktf.stringToHclTerraform(this._kubernetesConfig),
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
      parent_cloud_name: {
        value: cdktf.stringToHclTerraform(this._parentCloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_cloud_region: {
        value: cdktf.stringToHclTerraform(this._parentCloudRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_service_account_creation: {
        value: cdktf.booleanToHclTerraform(this._skipServiceAccountCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_class_name: {
        value: cdktf.stringToHclTerraform(this._storageClassName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
