// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureExocomputeConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID. This is the ID of the `polaris_azure_subscription` resource for which the Exocompute service runs. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute#cloud_account_id AzureExocompute#cloud_account_id}
  */
  readonly cloudAccountId?: string;
  /**
  * RSC cloud account ID of the shared exocompute host account. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute#host_cloud_account_id AzureExocompute#host_cloud_account_id}
  */
  readonly hostCloudAccountId?: string;
  /**
  * The CIDR range assigned to pods when launching Exocompute with the CNI overlay network plugin mode. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute#pod_overlay_network_cidr AzureExocompute#pod_overlay_network_cidr}
  */
  readonly podOverlayNetworkCidr?: string;
  /**
  * Azure region to run the exocompute service in. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute#region AzureExocompute#region}
  */
  readonly region?: string;
  /**
  * Azure subnet ID of the cluster subnet corresponding to the Exocompute configuration. This subnet will be used to allocate IP addresses to the nodes of the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute#subnet AzureExocompute#subnet}
  */
  readonly subnet?: string;
  /**
  * RSC cloud account ID. This is the ID of the `polaris_azure_subscription` resource for which the Exocompute service runs. Changing this forces a new resource to be created. **Deprecated:** use `cloud_account_id` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute#subscription_id AzureExocompute#subscription_id}
  */
  readonly subscriptionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute polaris_azure_exocompute}
*/
export class AzureExocompute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_exocompute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureExocompute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureExocompute to import
  * @param importFromId The id of the existing AzureExocompute that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureExocompute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_exocompute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_exocompute polaris_azure_exocompute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureExocomputeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AzureExocomputeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_exocompute',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAccountId = config.cloudAccountId;
    this._hostCloudAccountId = config.hostCloudAccountId;
    this._podOverlayNetworkCidr = config.podOverlayNetworkCidr;
    this._region = config.region;
    this._subnet = config.subnet;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_id - computed: false, optional: true, required: false
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  public resetCloudAccountId() {
    this._cloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // host_cloud_account_id - computed: false, optional: true, required: false
  private _hostCloudAccountId?: string; 
  public get hostCloudAccountId() {
    return this.getStringAttribute('host_cloud_account_id');
  }
  public set hostCloudAccountId(value: string) {
    this._hostCloudAccountId = value;
  }
  public resetHostCloudAccountId() {
    this._hostCloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCloudAccountIdInput() {
    return this._hostCloudAccountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pod_overlay_network_cidr - computed: false, optional: true, required: false
  private _podOverlayNetworkCidr?: string; 
  public get podOverlayNetworkCidr() {
    return this.getStringAttribute('pod_overlay_network_cidr');
  }
  public set podOverlayNetworkCidr(value: string) {
    this._podOverlayNetworkCidr = value;
  }
  public resetPodOverlayNetworkCidr() {
    this._podOverlayNetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverlayNetworkCidrInput() {
    return this._podOverlayNetworkCidr;
  }

  // region - computed: false, optional: true, required: false
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

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      host_cloud_account_id: cdktf.stringToTerraform(this._hostCloudAccountId),
      pod_overlay_network_cidr: cdktf.stringToTerraform(this._podOverlayNetworkCidr),
      region: cdktf.stringToTerraform(this._region),
      subnet: cdktf.stringToTerraform(this._subnet),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._hostCloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_overlay_network_cidr: {
        value: cdktf.stringToHclTerraform(this._podOverlayNetworkCidr),
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
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
