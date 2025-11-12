// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource to Duplicate From Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#clone_from_host ResourceGroup#clone_from_host}
  */
  readonly cloneFromHost?: string;
  /**
  * Deployment Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#deployment_description ResourceGroup#deployment_description}
  */
  readonly deploymentDescription: string;
  /**
  * Deployment Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#deployment_name ResourceGroup#deployment_name}
  */
  readonly deploymentName: string;
  /**
  * Deployment Timeout, It should be in multiples of 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#deployment_timeout ResourceGroup#deployment_timeout}
  */
  readonly deploymentTimeout?: number;
  /**
  * Firmware ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#firmware_id ResourceGroup#firmware_id}
  */
  readonly firmwareId: string;
  /**
  * Number of Nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#nodes ResourceGroup#nodes}
  */
  readonly nodes?: number;
  /**
  * After Delete the Service, Servers in inventory `Keep` or `Remove`.  Default value is `Keep`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#servers_in_inventory ResourceGroup#servers_in_inventory}
  */
  readonly serversInInventory?: string;
  /**
  * After Delete the Service, Servers's state `Managed` or `Unmanaged`. Default value is `Unmanaged`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#servers_managed_state ResourceGroup#servers_managed_state}
  */
  readonly serversManagedState?: string;
  /**
  * Published Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#template_id ResourceGroup#template_id}
  */
  readonly templateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group powerflex_resource_group}
*/
export class ResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceGroup to import
  * @param importFromId The id of the existing ResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_group powerflex_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloneFromHost = config.cloneFromHost;
    this._deploymentDescription = config.deploymentDescription;
    this._deploymentName = config.deploymentName;
    this._deploymentTimeout = config.deploymentTimeout;
    this._firmwareId = config.firmwareId;
    this._nodes = config.nodes;
    this._serversInInventory = config.serversInInventory;
    this._serversManagedState = config.serversManagedState;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clone_from_host - computed: false, optional: true, required: false
  private _cloneFromHost?: string; 
  public get cloneFromHost() {
    return this.getStringAttribute('clone_from_host');
  }
  public set cloneFromHost(value: string) {
    this._cloneFromHost = value;
  }
  public resetCloneFromHost() {
    this._cloneFromHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneFromHostInput() {
    return this._cloneFromHost;
  }

  // compliant - computed: true, optional: false, required: false
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }

  // deployment_description - computed: false, optional: false, required: true
  private _deploymentDescription?: string; 
  public get deploymentDescription() {
    return this.getStringAttribute('deployment_description');
  }
  public set deploymentDescription(value: string) {
    this._deploymentDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDescriptionInput() {
    return this._deploymentDescription;
  }

  // deployment_name - computed: false, optional: false, required: true
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // deployment_timeout - computed: true, optional: true, required: false
  private _deploymentTimeout?: number; 
  public get deploymentTimeout() {
    return this.getNumberAttribute('deployment_timeout');
  }
  public set deploymentTimeout(value: number) {
    this._deploymentTimeout = value;
  }
  public resetDeploymentTimeout() {
    this._deploymentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTimeoutInput() {
    return this._deploymentTimeout;
  }

  // firmware_id - computed: false, optional: false, required: true
  private _firmwareId?: string; 
  public get firmwareId() {
    return this.getStringAttribute('firmware_id');
  }
  public set firmwareId(value: string) {
    this._firmwareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareIdInput() {
    return this._firmwareId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nodes - computed: true, optional: true, required: false
  private _nodes?: number; 
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }
  public set nodes(value: number) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // servers_in_inventory - computed: true, optional: true, required: false
  private _serversInInventory?: string; 
  public get serversInInventory() {
    return this.getStringAttribute('servers_in_inventory');
  }
  public set serversInInventory(value: string) {
    this._serversInInventory = value;
  }
  public resetServersInInventory() {
    this._serversInInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInInventoryInput() {
    return this._serversInInventory;
  }

  // servers_managed_state - computed: true, optional: true, required: false
  private _serversManagedState?: string; 
  public get serversManagedState() {
    return this.getStringAttribute('servers_managed_state');
  }
  public set serversManagedState(value: string) {
    this._serversManagedState = value;
  }
  public resetServersManagedState() {
    this._serversManagedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversManagedStateInput() {
    return this._serversManagedState;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clone_from_host: cdktf.stringToTerraform(this._cloneFromHost),
      deployment_description: cdktf.stringToTerraform(this._deploymentDescription),
      deployment_name: cdktf.stringToTerraform(this._deploymentName),
      deployment_timeout: cdktf.numberToTerraform(this._deploymentTimeout),
      firmware_id: cdktf.stringToTerraform(this._firmwareId),
      nodes: cdktf.numberToTerraform(this._nodes),
      servers_in_inventory: cdktf.stringToTerraform(this._serversInInventory),
      servers_managed_state: cdktf.stringToTerraform(this._serversManagedState),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clone_from_host: {
        value: cdktf.stringToHclTerraform(this._cloneFromHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_description: {
        value: cdktf.stringToHclTerraform(this._deploymentDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_name: {
        value: cdktf.stringToHclTerraform(this._deploymentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_timeout: {
        value: cdktf.numberToHclTerraform(this._deploymentTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firmware_id: {
        value: cdktf.stringToHclTerraform(this._firmwareId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes: {
        value: cdktf.numberToHclTerraform(this._nodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servers_in_inventory: {
        value: cdktf.stringToHclTerraform(this._serversInInventory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers_managed_state: {
        value: cdktf.stringToHclTerraform(this._serversManagedState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
