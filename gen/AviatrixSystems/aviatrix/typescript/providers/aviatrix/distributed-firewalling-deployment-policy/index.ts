// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_deployment_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedFirewallingDeploymentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_deployment_policy#id DistributedFirewallingDeploymentPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of CSPs to apply the DCF policies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_deployment_policy#providers DistributedFirewallingDeploymentPolicy#providers}
  */
  readonly providers?: string[];
  /**
  * Set to true to reset the deployment policy to default values. Set to false to create a new deployment policy with the specified providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_deployment_policy#set_defaults DistributedFirewallingDeploymentPolicy#set_defaults}
  */
  readonly setDefaults?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_deployment_policy aviatrix_distributed_firewalling_deployment_policy}
*/
export class DistributedFirewallingDeploymentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_distributed_firewalling_deployment_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributedFirewallingDeploymentPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributedFirewallingDeploymentPolicy to import
  * @param importFromId The id of the existing DistributedFirewallingDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_deployment_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributedFirewallingDeploymentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_distributed_firewalling_deployment_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_deployment_policy aviatrix_distributed_firewalling_deployment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedFirewallingDeploymentPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DistributedFirewallingDeploymentPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_distributed_firewalling_deployment_policy',
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
    this._id = config.id;
    this._providers = config.providers;
    this._setDefaults = config.setDefaults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // providers - computed: false, optional: true, required: false
  private _providers?: string[]; 
  public get providers() {
    return cdktf.Fn.tolist(this.getListAttribute('providers'));
  }
  public set providers(value: string[]) {
    this._providers = value;
  }
  public resetProviders() {
    this._providers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers;
  }

  // set_defaults - computed: false, optional: true, required: false
  private _setDefaults?: boolean | cdktf.IResolvable; 
  public get setDefaults() {
    return this.getBooleanAttribute('set_defaults');
  }
  public set setDefaults(value: boolean | cdktf.IResolvable) {
    this._setDefaults = value;
  }
  public resetSetDefaults() {
    this._setDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDefaultsInput() {
    return this._setDefaults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._providers),
      set_defaults: cdktf.booleanToTerraform(this._setDefaults),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._providers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      set_defaults: {
        value: cdktf.booleanToHclTerraform(this._setDefaults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
