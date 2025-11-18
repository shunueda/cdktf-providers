// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this Kubernetes monitor installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor#installation_id KubernetesMonitor#installation_id}
  */
  readonly installationId: string;
  /**
  * The ID of the Kubernetes Agent deployment target machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor#machine_id KubernetesMonitor#machine_id}
  */
  readonly machineId: string;
  /**
  * Controls whether the authentication token should be preserved during re-registration. If not supplied (null), or false, the token will be regenerated (default behavior). If true, the existing token will be preserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor#preserve_authentication_token KubernetesMonitor#preserve_authentication_token}
  */
  readonly preserveAuthenticationToken?: boolean | cdktf.IResolvable;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor#space_id KubernetesMonitor#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor octopusdeploy_kubernetes_monitor}
*/
export class KubernetesMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_kubernetes_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesMonitor to import
  * @param importFromId The id of the existing KubernetesMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_kubernetes_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/kubernetes_monitor octopusdeploy_kubernetes_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_kubernetes_monitor',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._installationId = config.installationId;
    this._machineId = config.machineId;
    this._preserveAuthenticationToken = config.preserveAuthenticationToken;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_token - computed: true, optional: false, required: false
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }

  // certificate_thumbprint - computed: true, optional: false, required: false
  public get certificateThumbprint() {
    return this.getStringAttribute('certificate_thumbprint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installation_id - computed: false, optional: false, required: true
  private _installationId?: string; 
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
  public set installationId(value: string) {
    this._installationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
  }

  // machine_id - computed: false, optional: false, required: true
  private _machineId?: string; 
  public get machineId() {
    return this.getStringAttribute('machine_id');
  }
  public set machineId(value: string) {
    this._machineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineIdInput() {
    return this._machineId;
  }

  // preserve_authentication_token - computed: false, optional: true, required: false
  private _preserveAuthenticationToken?: boolean | cdktf.IResolvable; 
  public get preserveAuthenticationToken() {
    return this.getBooleanAttribute('preserve_authentication_token');
  }
  public set preserveAuthenticationToken(value: boolean | cdktf.IResolvable) {
    this._preserveAuthenticationToken = value;
  }
  public resetPreserveAuthenticationToken() {
    this._preserveAuthenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveAuthenticationTokenInput() {
    return this._preserveAuthenticationToken;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      installation_id: cdktf.stringToTerraform(this._installationId),
      machine_id: cdktf.stringToTerraform(this._machineId),
      preserve_authentication_token: cdktf.booleanToTerraform(this._preserveAuthenticationToken),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      installation_id: {
        value: cdktf.stringToHclTerraform(this._installationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_id: {
        value: cdktf.stringToHclTerraform(this._machineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_authentication_token: {
        value: cdktf.booleanToHclTerraform(this._preserveAuthenticationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
