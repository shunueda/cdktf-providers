// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_dedicated_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrackDedicatedCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * your dedicated cloud service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_dedicated_cloud#dedicated_cloud VrackDedicatedCloud#dedicated_cloud}
  */
  readonly dedicatedCloud: string;
  /**
  * The internal name of your vrack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_dedicated_cloud#service_name VrackDedicatedCloud#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_dedicated_cloud ovh_vrack_dedicated_cloud}
*/
export class VrackDedicatedCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_vrack_dedicated_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrackDedicatedCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrackDedicatedCloud to import
  * @param importFromId The id of the existing VrackDedicatedCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_dedicated_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrackDedicatedCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_vrack_dedicated_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_dedicated_cloud ovh_vrack_dedicated_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrackDedicatedCloudConfig
  */
  public constructor(scope: Construct, id: string, config: VrackDedicatedCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_vrack_dedicated_cloud',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedCloud = config.dedicatedCloud;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_cloud - computed: false, optional: false, required: true
  private _dedicatedCloud?: string; 
  public get dedicatedCloud() {
    return this.getStringAttribute('dedicated_cloud');
  }
  public set dedicatedCloud(value: string) {
    this._dedicatedCloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedCloudInput() {
    return this._dedicatedCloud;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_cloud: cdktf.stringToTerraform(this._dedicatedCloud),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_cloud: {
        value: cdktf.stringToHclTerraform(this._dedicatedCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
