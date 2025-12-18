// https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Labels are key-value string pairs which can be attached to a resource container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip#labels PublicIp#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Associates the public IP with a network interface or a virtual IP (ID). If you are using this resource with a Kubernetes Load Balancer or any other resource which associates a network interface implicitly, use the lifecycle `ignore_changes` property in this field to prevent unintentional removal of the network interface due to drift in the Terraform state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip#network_interface_id PublicIp#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * STACKIT project ID to which the public IP is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip#project_id PublicIp#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip#region PublicIp#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip stackit_public_ip}
*/
export class PublicIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_public_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PublicIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PublicIp to import
  * @param importFromId The id of the existing PublicIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PublicIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_public_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/public_ip stackit_public_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicIpConfig
  */
  public constructor(scope: Construct, id: string, config: PublicIpConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_public_ip',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.75.0',
        providerVersionConstraint: '0.75.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels = config.labels;
    this._networkInterfaceId = config.networkInterfaceId;
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_ip_id - computed: true, optional: false, required: false
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
