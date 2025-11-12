// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the kubernetes cluster. Changing this creates a new security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy#cluster_id KubernetesSecurityPolicy#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Controls whether the security policy is enabled. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy#enabled KubernetesSecurityPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Namespace to apply security policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy#namespace KubernetesSecurityPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Policy settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy#policy_settings KubernetesSecurityPolicy#policy_settings}
  */
  readonly policySettings: string;
  /**
  * The region in which to obtain the Container Infra client. If omitted, the `region` argument of the provider is used. Changing this creates a new security_policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy#region KubernetesSecurityPolicy#region}
  */
  readonly region?: string;
  /**
  * The ID of the security policy template. Changing this creates a new security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy#security_policy_template_id KubernetesSecurityPolicy#security_policy_template_id}
  */
  readonly securityPolicyTemplateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy vkcs_kubernetes_security_policy}
*/
export class KubernetesSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_kubernetes_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesSecurityPolicy to import
  * @param importFromId The id of the existing KubernetesSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_kubernetes_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/kubernetes_security_policy vkcs_kubernetes_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_kubernetes_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._enabled = config.enabled;
    this._namespace = config.namespace;
    this._policySettings = config.policySettings;
    this._region = config.region;
    this._securityPolicyTemplateId = config.securityPolicyTemplateId;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policy_settings - computed: false, optional: false, required: true
  private _policySettings?: string; 
  public get policySettings() {
    return this.getStringAttribute('policy_settings');
  }
  public set policySettings(value: string) {
    this._policySettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySettingsInput() {
    return this._policySettings;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_policy_template_id - computed: false, optional: false, required: true
  private _securityPolicyTemplateId?: string; 
  public get securityPolicyTemplateId() {
    return this.getStringAttribute('security_policy_template_id');
  }
  public set securityPolicyTemplateId(value: string) {
    this._securityPolicyTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyTemplateIdInput() {
    return this._securityPolicyTemplateId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      namespace: cdktf.stringToTerraform(this._namespace),
      policy_settings: cdktf.stringToTerraform(this._policySettings),
      region: cdktf.stringToTerraform(this._region),
      security_policy_template_id: cdktf.stringToTerraform(this._securityPolicyTemplateId),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_settings: {
        value: cdktf.stringToHclTerraform(this._policySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_template_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
