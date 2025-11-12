// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/current_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CurrentHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hostname. Minimum length =  1 Maximum length =  63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/current_hostname#hostname CurrentHostname#hostname}
  */
  readonly hostname?: string;
  /**
  * Hypervisor Hostname. Minimum length =  1 Maximum length =  63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/current_hostname#hypervisor_hostname CurrentHostname#hypervisor_hostname}
  */
  readonly hypervisorHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/current_hostname#id CurrentHostname#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/current_hostname netscalersdx_current_hostname}
*/
export class CurrentHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_current_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CurrentHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CurrentHostname to import
  * @param importFromId The id of the existing CurrentHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/current_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CurrentHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_current_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/current_hostname netscalersdx_current_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CurrentHostnameConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CurrentHostnameConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_current_hostname',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostname = config.hostname;
    this._hypervisorHostname = config.hypervisorHostname;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hypervisor_hostname - computed: true, optional: true, required: false
  private _hypervisorHostname?: string; 
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }
  public set hypervisorHostname(value: string) {
    this._hypervisorHostname = value;
  }
  public resetHypervisorHostname() {
    this._hypervisorHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorHostnameInput() {
    return this._hypervisorHostname;
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
      hostname: cdktf.stringToTerraform(this._hostname),
      hypervisor_hostname: cdktf.stringToTerraform(this._hypervisorHostname),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_hostname: {
        value: cdktf.stringToHclTerraform(this._hypervisorHostname),
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
