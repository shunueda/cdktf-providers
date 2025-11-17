// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the compute `cluster` to attach the policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member#cluster_id KubernetesClusterIamMember#cluster_id}
  */
  readonly clusterId: string;
  /**
  * An array of identities that will be granted the privilege in the `role`. Each entry can have one of the following values:
  *  * **userAccount:{user_id}**: A unique user ID that represents a specific Yandex account.
  *  * **serviceAccount:{service_account_id}**: A unique service account ID.
  *  * **federatedUser:{federated_user_id}**: A unique federated user ID.
  *  * **federatedUser:{federated_user_id}:**: A unique SAML federation user account ID.
  *  * **group:{group_id}**: A unique group ID.
  *  * **system:group:federation:{federation_id}:users**: All users in federation.
  *  * **system:group:organization:{organization_id}:users**: All users in organization.
  *  * **system:allAuthenticatedUsers**: All authenticated users.
  *  * **system:allUsers**: All users, including unauthenticated ones.
  * 
  * ~> for more information about system groups, see [Cloud Documentation](https://yandex.cloud/docs/iam/concepts/access-control/system-group).
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member#member KubernetesClusterIamMember#member}
  */
  readonly member: string;
  /**
  * The role that should be assigned. Only one yandex_kubernetes_cluster_iam_member can be used per role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member#role KubernetesClusterIamMember#role}
  */
  readonly role: string;
  /**
  * For test purposes, to compensate IAM operations delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member#sleep_after KubernetesClusterIamMember#sleep_after}
  */
  readonly sleepAfter?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member yandex_kubernetes_cluster_iam_member}
*/
export class KubernetesClusterIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_kubernetes_cluster_iam_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterIamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterIamMember to import
  * @param importFromId The id of the existing KubernetesClusterIamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterIamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_kubernetes_cluster_iam_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/kubernetes_cluster_iam_member yandex_kubernetes_cluster_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_kubernetes_cluster_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._member = config.member;
    this._role = config.role;
    this._sleepAfter = config.sleepAfter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // member - computed: false, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sleep_after - computed: false, optional: true, required: false
  private _sleepAfter?: number; 
  public get sleepAfter() {
    return this.getNumberAttribute('sleep_after');
  }
  public set sleepAfter(value: number) {
    this._sleepAfter = value;
  }
  public resetSleepAfter() {
    this._sleepAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepAfterInput() {
    return this._sleepAfter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      sleep_after: cdktf.numberToTerraform(this._sleepAfter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep_after: {
        value: cdktf.numberToHclTerraform(this._sleepAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
