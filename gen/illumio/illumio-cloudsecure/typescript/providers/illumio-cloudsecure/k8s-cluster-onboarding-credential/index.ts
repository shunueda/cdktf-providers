// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/k8s_cluster_onboarding_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SClusterOnboardingCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the onboarding credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/k8s_cluster_onboarding_credential#description K8SClusterOnboardingCredential#description}
  */
  readonly description?: string;
  /**
  * Illumio Region where the k8s cluster can be onboarded using this credential. An Illumio Region is a designated cloud region where the CloudSecure k8s operators in onboarded k8s clusters connect after onboarding. Choose the Illumio Region nearest to each cluster to maximize performance and security. Must be one of: `aws-ap-southeast-2`, `aws-eu-west-2`, `aws-me-central-1`, `aws-us-west-1`, `aws-us-west-2`, `azure-australia-east`, `azure-germany-west-central`, `azure-japan-east`, `azure-north-europe`, `azure-uae-north`, `azure-us-east`, `azure-us-west-2`, `azure-us-west-3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/k8s_cluster_onboarding_credential#illumio_region K8SClusterOnboardingCredential#illumio_region}
  */
  readonly illumioRegion: string;
  /**
  * Display name for the onboarding credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/k8s_cluster_onboarding_credential#name K8SClusterOnboardingCredential#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/k8s_cluster_onboarding_credential illumio-cloudsecure_k8s_cluster_onboarding_credential}
*/
export class K8SClusterOnboardingCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_k8s_cluster_onboarding_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SClusterOnboardingCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SClusterOnboardingCredential to import
  * @param importFromId The id of the existing K8SClusterOnboardingCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/k8s_cluster_onboarding_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SClusterOnboardingCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_k8s_cluster_onboarding_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/k8s_cluster_onboarding_credential illumio-cloudsecure_k8s_cluster_onboarding_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SClusterOnboardingCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: K8SClusterOnboardingCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_k8s_cluster_onboarding_credential',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._illumioRegion = config.illumioRegion;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // illumio_region - computed: false, optional: false, required: true
  private _illumioRegion?: string; 
  public get illumioRegion() {
    return this.getStringAttribute('illumio_region');
  }
  public set illumioRegion(value: string) {
    this._illumioRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get illumioRegionInput() {
    return this._illumioRegion;
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
      illumio_region: cdktf.stringToTerraform(this._illumioRegion),
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
      illumio_region: {
        value: cdktf.stringToHclTerraform(this._illumioRegion),
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
