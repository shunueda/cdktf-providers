// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VxlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#dynamicrouting Vxlan#dynamicrouting}
  */
  readonly dynamicrouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#id Vxlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#innervlantagging Vxlan#innervlantagging}
  */
  readonly innervlantagging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#ipv6dynamicrouting Vxlan#ipv6dynamicrouting}
  */
  readonly ipv6Dynamicrouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#port Vxlan#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#protocol Vxlan#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#type Vxlan#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#vlan Vxlan#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#vxlanid Vxlan#vxlanid}
  */
  readonly vxlanid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan citrixadc_vxlan}
*/
export class Vxlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vxlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vxlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vxlan to import
  * @param importFromId The id of the existing Vxlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vxlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vxlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vxlan citrixadc_vxlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VxlanConfig
  */
  public constructor(scope: Construct, id: string, config: VxlanConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vxlan',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicrouting = config.dynamicrouting;
    this._id = config.id;
    this._innervlantagging = config.innervlantagging;
    this._ipv6Dynamicrouting = config.ipv6Dynamicrouting;
    this._port = config.port;
    this._protocol = config.protocol;
    this._type = config.type;
    this._vlan = config.vlan;
    this._vxlanid = config.vxlanid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamicrouting - computed: true, optional: true, required: false
  private _dynamicrouting?: string; 
  public get dynamicrouting() {
    return this.getStringAttribute('dynamicrouting');
  }
  public set dynamicrouting(value: string) {
    this._dynamicrouting = value;
  }
  public resetDynamicrouting() {
    this._dynamicrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicroutingInput() {
    return this._dynamicrouting;
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

  // innervlantagging - computed: true, optional: true, required: false
  private _innervlantagging?: string; 
  public get innervlantagging() {
    return this.getStringAttribute('innervlantagging');
  }
  public set innervlantagging(value: string) {
    this._innervlantagging = value;
  }
  public resetInnervlantagging() {
    this._innervlantagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innervlantaggingInput() {
    return this._innervlantagging;
  }

  // ipv6dynamicrouting - computed: true, optional: true, required: false
  private _ipv6Dynamicrouting?: string; 
  public get ipv6Dynamicrouting() {
    return this.getStringAttribute('ipv6dynamicrouting');
  }
  public set ipv6Dynamicrouting(value: string) {
    this._ipv6Dynamicrouting = value;
  }
  public resetIpv6Dynamicrouting() {
    this._ipv6Dynamicrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DynamicroutingInput() {
    return this._ipv6Dynamicrouting;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vxlanid - computed: false, optional: false, required: true
  private _vxlanid?: number; 
  public get vxlanid() {
    return this.getNumberAttribute('vxlanid');
  }
  public set vxlanid(value: number) {
    this._vxlanid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanidInput() {
    return this._vxlanid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamicrouting: cdktf.stringToTerraform(this._dynamicrouting),
      id: cdktf.stringToTerraform(this._id),
      innervlantagging: cdktf.stringToTerraform(this._innervlantagging),
      ipv6dynamicrouting: cdktf.stringToTerraform(this._ipv6Dynamicrouting),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      type: cdktf.stringToTerraform(this._type),
      vlan: cdktf.numberToTerraform(this._vlan),
      vxlanid: cdktf.numberToTerraform(this._vxlanid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamicrouting: {
        value: cdktf.stringToHclTerraform(this._dynamicrouting),
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
      innervlantagging: {
        value: cdktf.stringToHclTerraform(this._innervlantagging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6dynamicrouting: {
        value: cdktf.stringToHclTerraform(this._ipv6Dynamicrouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      vxlanid: {
        value: cdktf.numberToHclTerraform(this._vxlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
