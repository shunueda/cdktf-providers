// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/kubernetes_cluster_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of claims included with issued user credentials used to authenticate to Kubernetes clusters. Claims correspond to pre-configured role bindings on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/kubernetes_cluster_group#claims KubernetesClusterGroup#claims}
  */
  readonly claims?: { [key: string]: string };
  /**
  * A label selector to used to match Kubernetes clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/kubernetes_cluster_group#cluster_selector KubernetesClusterGroup#cluster_selector}
  */
  readonly clusterSelector: string;
  /**
  * The human-readable name of an existing Group. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/kubernetes_cluster_group#group_name KubernetesClusterGroup#group_name}
  */
  readonly groupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/kubernetes_cluster_group oktapam_kubernetes_cluster_group}
*/
export class KubernetesClusterGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_kubernetes_cluster_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterGroup to import
  * @param importFromId The id of the existing KubernetesClusterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/kubernetes_cluster_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_kubernetes_cluster_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/kubernetes_cluster_group oktapam_kubernetes_cluster_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterGroupConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_kubernetes_cluster_group',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claims = config.claims;
    this._clusterSelector = config.clusterSelector;
    this._groupName = config.groupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claims - computed: false, optional: true, required: false
  private _claims?: { [key: string]: string }; 
  public get claims() {
    return this.getStringMapAttribute('claims');
  }
  public set claims(value: { [key: string]: string }) {
    this._claims = value;
  }
  public resetClaims() {
    this._claims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims;
  }

  // cluster_selector - computed: false, optional: false, required: true
  private _clusterSelector?: string; 
  public get clusterSelector() {
    return this.getStringAttribute('cluster_selector');
  }
  public set clusterSelector(value: string) {
    this._clusterSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._claims),
      cluster_selector: cdktf.stringToTerraform(this._clusterSelector),
      group_name: cdktf.stringToTerraform(this._groupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claims: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._claims),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_selector: {
        value: cdktf.stringToHclTerraform(this._clusterSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
