// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nd6ravariables_onlinkipv6prefix_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nd6RavariablesOnlinkipv6PrefixBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nd6ravariables_onlinkipv6prefix_binding#id Nd6RavariablesOnlinkipv6PrefixBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nd6ravariables_onlinkipv6prefix_binding#ipv6prefix Nd6RavariablesOnlinkipv6PrefixBinding#ipv6prefix}
  */
  readonly ipv6Prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nd6ravariables_onlinkipv6prefix_binding#vlan Nd6RavariablesOnlinkipv6PrefixBinding#vlan}
  */
  readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nd6ravariables_onlinkipv6prefix_binding citrixadc_nd6ravariables_onlinkipv6prefix_binding}
*/
export class Nd6RavariablesOnlinkipv6PrefixBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nd6ravariables_onlinkipv6prefix_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nd6RavariablesOnlinkipv6PrefixBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nd6RavariablesOnlinkipv6PrefixBinding to import
  * @param importFromId The id of the existing Nd6RavariablesOnlinkipv6PrefixBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nd6ravariables_onlinkipv6prefix_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nd6RavariablesOnlinkipv6PrefixBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nd6ravariables_onlinkipv6prefix_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nd6ravariables_onlinkipv6prefix_binding citrixadc_nd6ravariables_onlinkipv6prefix_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nd6RavariablesOnlinkipv6PrefixBindingConfig
  */
  public constructor(scope: Construct, id: string, config: Nd6RavariablesOnlinkipv6PrefixBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nd6ravariables_onlinkipv6prefix_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._ipv6Prefix = config.ipv6Prefix;
    this._vlan = config.vlan;
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

  // ipv6prefix - computed: false, optional: false, required: true
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6prefix: cdktf.stringToTerraform(this._ipv6Prefix),
      vlan: cdktf.numberToTerraform(this._vlan),
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
      ipv6prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
