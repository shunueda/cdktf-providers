// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneWebGuiProtectionPortZoneServiceOtherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other#id DdosDstZoneWebGuiProtectionPortZoneServiceOther#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other#pbe DdosDstZoneWebGuiProtectionPortZoneServiceOther#pbe}
  */
  readonly pbe?: string;
  /**
  * 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other#port_other DdosDstZoneWebGuiProtectionPortZoneServiceOther#port_other}
  */
  readonly portOther: string;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other#protocol DdosDstZoneWebGuiProtectionPortZoneServiceOther#protocol}
  */
  readonly protocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other#uuid DdosDstZoneWebGuiProtectionPortZoneServiceOther#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other#zone_name DdosDstZoneWebGuiProtectionPortZoneServiceOther#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other thunder_ddos_dst_zone_web_gui_protection_port_zone_service_other}
*/
export class DdosDstZoneWebGuiProtectionPortZoneServiceOther extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_web_gui_protection_port_zone_service_other";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneWebGuiProtectionPortZoneServiceOther resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneWebGuiProtectionPortZoneServiceOther to import
  * @param importFromId The id of the existing DdosDstZoneWebGuiProtectionPortZoneServiceOther that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneWebGuiProtectionPortZoneServiceOther to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_web_gui_protection_port_zone_service_other", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_web_gui_protection_port_zone_service_other thunder_ddos_dst_zone_web_gui_protection_port_zone_service_other} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneWebGuiProtectionPortZoneServiceOtherConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneWebGuiProtectionPortZoneServiceOtherConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_web_gui_protection_port_zone_service_other',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._pbe = config.pbe;
    this._portOther = config.portOther;
    this._protocol = config.protocol;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
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

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
  }

  // port_other - computed: false, optional: false, required: true
  private _portOther?: string; 
  public get portOther() {
    return this.getStringAttribute('port_other');
  }
  public set portOther(value: string) {
    this._portOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portOtherInput() {
    return this._portOther;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pbe: cdktf.stringToTerraform(this._pbe),
      port_other: cdktf.stringToTerraform(this._portOther),
      protocol: cdktf.stringToTerraform(this._protocol),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
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
      pbe: {
        value: cdktf.stringToHclTerraform(this._pbe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_other: {
        value: cdktf.stringToHclTerraform(this._portOther),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
