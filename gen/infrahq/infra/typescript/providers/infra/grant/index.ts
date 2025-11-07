// https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the group to assign this grant. One of `user_id`, `user_name`, `group_id`, `group_name` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#group_id Grant#group_id}
  */
  readonly groupId?: string;
  /**
  * The name of the group to assign this grant. One of `user_id`, `user_name`, `group_id`, `group_name` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#group_name Grant#group_name}
  */
  readonly groupName?: string;
  /**
  * The ID of the user to assign this grant. One of `user_id`, `user_name`, `group_id`, `group_name` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#user_id Grant#user_id}
  */
  readonly userId?: string;
  /**
  * The email of the user to assign this grant. One of `user_id`, `user_name`, `group_id`, `group_name` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#user_name Grant#user_name}
  */
  readonly userName?: string;
  /**
  * infra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#infra Grant#infra}
  */
  readonly infra?: GrantInfra;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#kubernetes Grant#kubernetes}
  */
  readonly kubernetes?: GrantKubernetes;
}
export interface GrantInfra {
  /**
  * The name of the Infra role to assign to the user. Valid roles are `admin` or `view`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#role Grant#role}
  */
  readonly role: string;
}

export function grantInfraToTerraform(struct?: GrantInfraOutputReference | GrantInfra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function grantInfraToHclTerraform(struct?: GrantInfraOutputReference | GrantInfra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantInfraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantInfra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantInfra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
    }
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
}
export interface GrantKubernetes {
  /**
  * The name of the Kubernetes cluster to assign to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#cluster Grant#cluster}
  */
  readonly cluster: string;
  /**
  * The namespace of the Kubernetes cluster to assign to the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#namespace Grant#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of the Kubernetes ClusterRole to assign to the user. See [Kubernetes Roles](https://infrahq.com/docs/integrations/kubernetes#roles) for a list of valid roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#role Grant#role}
  */
  readonly role: string;
}

export function grantKubernetesToTerraform(struct?: GrantKubernetesOutputReference | GrantKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function grantKubernetesToHclTerraform(struct?: GrantKubernetesOutputReference | GrantKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._namespace = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._namespace = value.namespace;
      this._role = value.role;
    }
  }

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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant infra_grant}
*/
export class Grant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infra_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Grant to import
  * @param importFromId The id of the existing Grant that should be imported. Refer to the {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Grant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infra_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/grant infra_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GrantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infra_grant',
      terraformGeneratorMetadata: {
        providerName: 'infra',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._userId = config.userId;
    this._userName = config.userName;
    this._infra.internalValue = config.infra;
    this._kubernetes.internalValue = config.kubernetes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // infra - computed: false, optional: true, required: false
  private _infra = new GrantInfraOutputReference(this, "infra");
  public get infra() {
    return this._infra;
  }
  public putInfra(value: GrantInfra) {
    this._infra.internalValue = value;
  }
  public resetInfra() {
    this._infra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraInput() {
    return this._infra.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new GrantKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: GrantKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
      infra: grantInfraToTerraform(this._infra.internalValue),
      kubernetes: grantKubernetesToTerraform(this._kubernetes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infra: {
        value: grantInfraToHclTerraform(this._infra.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantInfraList",
      },
      kubernetes: {
        value: grantKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantKubernetesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
