// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_origin_cert_enforcement_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedFirewallingOriginCertEnforcementConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which origin cert enforcement level to set to for distributed firewalling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_origin_cert_enforcement_config#enforcement_level DistributedFirewallingOriginCertEnforcementConfig#enforcement_level}
  */
  readonly enforcementLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_origin_cert_enforcement_config#id DistributedFirewallingOriginCertEnforcementConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_origin_cert_enforcement_config aviatrix_distributed_firewalling_origin_cert_enforcement_config}
*/
export class DistributedFirewallingOriginCertEnforcementConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_distributed_firewalling_origin_cert_enforcement_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributedFirewallingOriginCertEnforcementConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributedFirewallingOriginCertEnforcementConfig to import
  * @param importFromId The id of the existing DistributedFirewallingOriginCertEnforcementConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_origin_cert_enforcement_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributedFirewallingOriginCertEnforcementConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_distributed_firewalling_origin_cert_enforcement_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_origin_cert_enforcement_config aviatrix_distributed_firewalling_origin_cert_enforcement_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedFirewallingOriginCertEnforcementConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DistributedFirewallingOriginCertEnforcementConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_distributed_firewalling_origin_cert_enforcement_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enforcementLevel = config.enforcementLevel;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforcement_level - computed: false, optional: true, required: false
  private _enforcementLevel?: string; 
  public get enforcementLevel() {
    return this.getStringAttribute('enforcement_level');
  }
  public set enforcementLevel(value: string) {
    this._enforcementLevel = value;
  }
  public resetEnforcementLevel() {
    this._enforcementLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementLevelInput() {
    return this._enforcementLevel;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforcement_level: {
        value: cdktf.stringToHclTerraform(this._enforcementLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
