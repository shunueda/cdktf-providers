// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_ovhcloudconnect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrackOvhcloudconnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * ovhCloudConnect service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_ovhcloudconnect#ovh_cloud_connect VrackOvhcloudconnect#ovh_cloud_connect}
  */
  readonly ovhCloudConnect: string;
  /**
  * The internal name of your vrack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_ovhcloudconnect#service_name VrackOvhcloudconnect#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_ovhcloudconnect ovh_vrack_ovhcloudconnect}
*/
export class VrackOvhcloudconnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_vrack_ovhcloudconnect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrackOvhcloudconnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrackOvhcloudconnect to import
  * @param importFromId The id of the existing VrackOvhcloudconnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_ovhcloudconnect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrackOvhcloudconnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_vrack_ovhcloudconnect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/vrack_ovhcloudconnect ovh_vrack_ovhcloudconnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrackOvhcloudconnectConfig
  */
  public constructor(scope: Construct, id: string, config: VrackOvhcloudconnectConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_vrack_ovhcloudconnect',
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
    this._ovhCloudConnect = config.ovhCloudConnect;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ovh_cloud_connect - computed: false, optional: false, required: true
  private _ovhCloudConnect?: string; 
  public get ovhCloudConnect() {
    return this.getStringAttribute('ovh_cloud_connect');
  }
  public set ovhCloudConnect(value: string) {
    this._ovhCloudConnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ovhCloudConnectInput() {
    return this._ovhCloudConnect;
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
      ovh_cloud_connect: cdktf.stringToTerraform(this._ovhCloudConnect),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ovh_cloud_connect: {
        value: cdktf.stringToHclTerraform(this._ovhCloudConnect),
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
