// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateIcmpV4TypeOtherAConfig extends cdktf.TerraformMetaArguments {
  /**
  * IcmpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other#icmp_tmpl_name DdosTemplateIcmpV4TypeOtherA#icmp_tmpl_name}
  */
  readonly icmpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other#id DdosTemplateIcmpV4TypeOtherA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Deny all other type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other#type_other_deny DdosTemplateIcmpV4TypeOtherA#type_other_deny}
  */
  readonly typeOtherDeny?: number;
  /**
  * Specify rate with other type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other#type_other_rate DdosTemplateIcmpV4TypeOtherA#type_other_rate}
  */
  readonly typeOtherRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other#uuid DdosTemplateIcmpV4TypeOtherA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other thunder_ddos_template_icmp_v4_type_other}
*/
export class DdosTemplateIcmpV4TypeOtherA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_icmp_v4_type_other";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateIcmpV4TypeOtherA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateIcmpV4TypeOtherA to import
  * @param importFromId The id of the existing DdosTemplateIcmpV4TypeOtherA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateIcmpV4TypeOtherA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_icmp_v4_type_other", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v4_type_other thunder_ddos_template_icmp_v4_type_other} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateIcmpV4TypeOtherAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateIcmpV4TypeOtherAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_icmp_v4_type_other',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._icmpTmplName = config.icmpTmplName;
    this._id = config.id;
    this._typeOtherDeny = config.typeOtherDeny;
    this._typeOtherRate = config.typeOtherRate;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmp_tmpl_name - computed: false, optional: false, required: true
  private _icmpTmplName?: string; 
  public get icmpTmplName() {
    return this.getStringAttribute('icmp_tmpl_name');
  }
  public set icmpTmplName(value: string) {
    this._icmpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTmplNameInput() {
    return this._icmpTmplName;
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

  // type_other_deny - computed: false, optional: true, required: false
  private _typeOtherDeny?: number; 
  public get typeOtherDeny() {
    return this.getNumberAttribute('type_other_deny');
  }
  public set typeOtherDeny(value: number) {
    this._typeOtherDeny = value;
  }
  public resetTypeOtherDeny() {
    this._typeOtherDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOtherDenyInput() {
    return this._typeOtherDeny;
  }

  // type_other_rate - computed: false, optional: true, required: false
  private _typeOtherRate?: number; 
  public get typeOtherRate() {
    return this.getNumberAttribute('type_other_rate');
  }
  public set typeOtherRate(value: number) {
    this._typeOtherRate = value;
  }
  public resetTypeOtherRate() {
    this._typeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOtherRateInput() {
    return this._typeOtherRate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmp_tmpl_name: cdktf.stringToTerraform(this._icmpTmplName),
      id: cdktf.stringToTerraform(this._id),
      type_other_deny: cdktf.numberToTerraform(this._typeOtherDeny),
      type_other_rate: cdktf.numberToTerraform(this._typeOtherRate),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._icmpTmplName),
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
      type_other_deny: {
        value: cdktf.numberToHclTerraform(this._typeOtherDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_other_rate: {
        value: cdktf.numberToHclTerraform(this._typeOtherRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
