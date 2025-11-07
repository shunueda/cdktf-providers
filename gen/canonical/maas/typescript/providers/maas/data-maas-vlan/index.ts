// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMaasVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fabric identifier (ID or name) for the VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vlan#fabric DataMaasVlan#fabric}
  */
  readonly fabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vlan#id DataMaasVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The VLAN identifier (ID or traffic segregation ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vlan#vlan DataMaasVlan#vlan}
  */
  readonly vlan: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vlan maas_vlan}
*/
export class DataMaasVlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMaasVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMaasVlan to import
  * @param importFromId The id of the existing DataMaasVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMaasVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vlan maas_vlan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMaasVlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataMaasVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_vlan',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabric = config.fabric;
    this._id = config.id;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_on - computed: true, optional: false, required: false
  public get dhcpOn() {
    return this.getBooleanAttribute('dhcp_on');
  }

  // fabric - computed: false, optional: false, required: true
  private _fabric?: string; 
  public get fabric() {
    return this.getStringAttribute('fabric');
  }
  public set fabric(value: string) {
    this._fabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric;
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

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // space - computed: true, optional: false, required: false
  public get space() {
    return this.getStringAttribute('space');
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
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
      fabric: cdktf.stringToTerraform(this._fabric),
      id: cdktf.stringToTerraform(this._id),
      vlan: cdktf.stringToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric: {
        value: cdktf.stringToHclTerraform(this._fabric),
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
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
