// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WantempSystemSdwanZoneAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#adom WantempSystemSdwanZoneA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#advpn_health_check WantempSystemSdwanZoneA#advpn_health_check}
  */
  readonly advpnHealthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#advpn_select WantempSystemSdwanZoneA#advpn_select}
  */
  readonly advpnSelect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#id WantempSystemSdwanZoneA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#minimum_sla_meet_members WantempSystemSdwanZoneA#minimum_sla_meet_members}
  */
  readonly minimumSlaMeetMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#name WantempSystemSdwanZoneA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#scopetype WantempSystemSdwanZoneA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#service_sla_tie_break WantempSystemSdwanZoneA#service_sla_tie_break}
  */
  readonly serviceSlaTieBreak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#wanprof WantempSystemSdwanZoneA#wanprof}
  */
  readonly wanprof: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone fortimanager_wantemp_system_sdwan_zone}
*/
export class WantempSystemSdwanZoneA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_wantemp_system_sdwan_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WantempSystemSdwanZoneA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WantempSystemSdwanZoneA to import
  * @param importFromId The id of the existing WantempSystemSdwanZoneA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WantempSystemSdwanZoneA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_wantemp_system_sdwan_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_zone fortimanager_wantemp_system_sdwan_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WantempSystemSdwanZoneAConfig
  */
  public constructor(scope: Construct, id: string, config: WantempSystemSdwanZoneAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_wantemp_system_sdwan_zone',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._advpnHealthCheck = config.advpnHealthCheck;
    this._advpnSelect = config.advpnSelect;
    this._id = config.id;
    this._minimumSlaMeetMembers = config.minimumSlaMeetMembers;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._serviceSlaTieBreak = config.serviceSlaTieBreak;
    this._wanprof = config.wanprof;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // advpn_health_check - computed: false, optional: true, required: false
  private _advpnHealthCheck?: string; 
  public get advpnHealthCheck() {
    return this.getStringAttribute('advpn_health_check');
  }
  public set advpnHealthCheck(value: string) {
    this._advpnHealthCheck = value;
  }
  public resetAdvpnHealthCheck() {
    this._advpnHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advpnHealthCheckInput() {
    return this._advpnHealthCheck;
  }

  // advpn_select - computed: true, optional: true, required: false
  private _advpnSelect?: string; 
  public get advpnSelect() {
    return this.getStringAttribute('advpn_select');
  }
  public set advpnSelect(value: string) {
    this._advpnSelect = value;
  }
  public resetAdvpnSelect() {
    this._advpnSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advpnSelectInput() {
    return this._advpnSelect;
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

  // minimum_sla_meet_members - computed: true, optional: true, required: false
  private _minimumSlaMeetMembers?: number; 
  public get minimumSlaMeetMembers() {
    return this.getNumberAttribute('minimum_sla_meet_members');
  }
  public set minimumSlaMeetMembers(value: number) {
    this._minimumSlaMeetMembers = value;
  }
  public resetMinimumSlaMeetMembers() {
    this._minimumSlaMeetMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSlaMeetMembersInput() {
    return this._minimumSlaMeetMembers;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // service_sla_tie_break - computed: false, optional: true, required: false
  private _serviceSlaTieBreak?: string; 
  public get serviceSlaTieBreak() {
    return this.getStringAttribute('service_sla_tie_break');
  }
  public set serviceSlaTieBreak(value: string) {
    this._serviceSlaTieBreak = value;
  }
  public resetServiceSlaTieBreak() {
    this._serviceSlaTieBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSlaTieBreakInput() {
    return this._serviceSlaTieBreak;
  }

  // wanprof - computed: false, optional: false, required: true
  private _wanprof?: string; 
  public get wanprof() {
    return this.getStringAttribute('wanprof');
  }
  public set wanprof(value: string) {
    this._wanprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanprofInput() {
    return this._wanprof;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      advpn_health_check: cdktf.stringToTerraform(this._advpnHealthCheck),
      advpn_select: cdktf.stringToTerraform(this._advpnSelect),
      id: cdktf.stringToTerraform(this._id),
      minimum_sla_meet_members: cdktf.numberToTerraform(this._minimumSlaMeetMembers),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service_sla_tie_break: cdktf.stringToTerraform(this._serviceSlaTieBreak),
      wanprof: cdktf.stringToTerraform(this._wanprof),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advpn_health_check: {
        value: cdktf.stringToHclTerraform(this._advpnHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advpn_select: {
        value: cdktf.stringToHclTerraform(this._advpnSelect),
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
      minimum_sla_meet_members: {
        value: cdktf.numberToHclTerraform(this._minimumSlaMeetMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sla_tie_break: {
        value: cdktf.stringToHclTerraform(this._serviceSlaTieBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanprof: {
        value: cdktf.stringToHclTerraform(this._wanprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
