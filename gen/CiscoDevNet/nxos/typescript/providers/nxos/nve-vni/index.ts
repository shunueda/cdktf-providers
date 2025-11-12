// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NveVniConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configures VNI as L3 VNI.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni#associate_vrf NveVni#associate_vrf}
  */
  readonly associateVrf?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni#device NveVni#device}
  */
  readonly device?: string;
  /**
  * Configures multicast group address for VNI.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni#multicast_group NveVni#multicast_group}
  */
  readonly multicastGroup?: string;
  /**
  * Enable or disable Multisite Ingress Replication for VNI(s).
  *   - Choices: `enable`, `disable`, `enableOptimized`
  *   - Default value: `disable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni#multisite_ingress_replication NveVni#multisite_ingress_replication}
  */
  readonly multisiteIngressReplication?: string;
  /**
  * Enable or disable ARP suppression for VNI(s).
  *   - Choices: `enabled`, `disabled`, `off`
  *   - Default value: `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni#suppress_arp NveVni#suppress_arp}
  */
  readonly suppressArp?: string;
  /**
  * Virtual Network ID.
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni#vni NveVni#vni}
  */
  readonly vni: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni nxos_nve_vni}
*/
export class NveVni extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_nve_vni";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NveVni resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NveVni to import
  * @param importFromId The id of the existing NveVni that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NveVni to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_nve_vni", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_vni nxos_nve_vni} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NveVniConfig
  */
  public constructor(scope: Construct, id: string, config: NveVniConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_nve_vni',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associateVrf = config.associateVrf;
    this._device = config.device;
    this._multicastGroup = config.multicastGroup;
    this._multisiteIngressReplication = config.multisiteIngressReplication;
    this._suppressArp = config.suppressArp;
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associate_vrf - computed: true, optional: true, required: false
  private _associateVrf?: boolean | cdktf.IResolvable; 
  public get associateVrf() {
    return this.getBooleanAttribute('associate_vrf');
  }
  public set associateVrf(value: boolean | cdktf.IResolvable) {
    this._associateVrf = value;
  }
  public resetAssociateVrf() {
    this._associateVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateVrfInput() {
    return this._associateVrf;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multicast_group - computed: true, optional: true, required: false
  private _multicastGroup?: string; 
  public get multicastGroup() {
    return this.getStringAttribute('multicast_group');
  }
  public set multicastGroup(value: string) {
    this._multicastGroup = value;
  }
  public resetMulticastGroup() {
    this._multicastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupInput() {
    return this._multicastGroup;
  }

  // multisite_ingress_replication - computed: true, optional: true, required: false
  private _multisiteIngressReplication?: string; 
  public get multisiteIngressReplication() {
    return this.getStringAttribute('multisite_ingress_replication');
  }
  public set multisiteIngressReplication(value: string) {
    this._multisiteIngressReplication = value;
  }
  public resetMultisiteIngressReplication() {
    this._multisiteIngressReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multisiteIngressReplicationInput() {
    return this._multisiteIngressReplication;
  }

  // suppress_arp - computed: true, optional: true, required: false
  private _suppressArp?: string; 
  public get suppressArp() {
    return this.getStringAttribute('suppress_arp');
  }
  public set suppressArp(value: string) {
    this._suppressArp = value;
  }
  public resetSuppressArp() {
    this._suppressArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressArpInput() {
    return this._suppressArp;
  }

  // vni - computed: false, optional: false, required: true
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_vrf: cdktf.booleanToTerraform(this._associateVrf),
      device: cdktf.stringToTerraform(this._device),
      multicast_group: cdktf.stringToTerraform(this._multicastGroup),
      multisite_ingress_replication: cdktf.stringToTerraform(this._multisiteIngressReplication),
      suppress_arp: cdktf.stringToTerraform(this._suppressArp),
      vni: cdktf.numberToTerraform(this._vni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associate_vrf: {
        value: cdktf.booleanToHclTerraform(this._associateVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_group: {
        value: cdktf.stringToHclTerraform(this._multicastGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multisite_ingress_replication: {
        value: cdktf.stringToHclTerraform(this._multisiteIngressReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_arp: {
        value: cdktf.stringToHclTerraform(this._suppressArp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
