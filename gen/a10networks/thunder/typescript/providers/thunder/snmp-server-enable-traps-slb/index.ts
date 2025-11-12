// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsSlbAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all SLB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#all SnmpServerEnableTrapsSlbA#all}
  */
  readonly all?: number;
  /**
  * Enable application buffer reach limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#application_buffer_limit SnmpServerEnableTrapsSlbA#application_buffer_limit}
  */
  readonly applicationBufferLimit?: number;
  /**
  * Enable SLB server/port bandwidth rate limit exceed trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#bw_rate_limit_exceed SnmpServerEnableTrapsSlbA#bw_rate_limit_exceed}
  */
  readonly bwRateLimitExceed?: number;
  /**
  * Enable SLB server/port bandwidth rate limit resume trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#bw_rate_limit_resume SnmpServerEnableTrapsSlbA#bw_rate_limit_resume}
  */
  readonly bwRateLimitResume?: number;
  /**
  * Enable SLB server gateway down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#gateway_down SnmpServerEnableTrapsSlbA#gateway_down}
  */
  readonly gatewayDown?: number;
  /**
  * Enable SLB server gateway up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#gateway_up SnmpServerEnableTrapsSlbA#gateway_up}
  */
  readonly gatewayUp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#id SnmpServerEnableTrapsSlbA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable SLB server connection limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#server_conn_limit SnmpServerEnableTrapsSlbA#server_conn_limit}
  */
  readonly serverConnLimit?: number;
  /**
  * Enable SLB server connection resume trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#server_conn_resume SnmpServerEnableTrapsSlbA#server_conn_resume}
  */
  readonly serverConnResume?: number;
  /**
  * Enable SLB server-disabled trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#server_disabled SnmpServerEnableTrapsSlbA#server_disabled}
  */
  readonly serverDisabled?: number;
  /**
  * Enable SLB server-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#server_down SnmpServerEnableTrapsSlbA#server_down}
  */
  readonly serverDown?: number;
  /**
  * Enable SLB server selection failure trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#server_selection_failure SnmpServerEnableTrapsSlbA#server_selection_failure}
  */
  readonly serverSelectionFailure?: number;
  /**
  * Enable slb server up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#server_up SnmpServerEnableTrapsSlbA#server_up}
  */
  readonly serverUp?: number;
  /**
  * Enable SLB service connection limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_conn_limit SnmpServerEnableTrapsSlbA#service_conn_limit}
  */
  readonly serviceConnLimit?: number;
  /**
  * Enable SLB service connection resume trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_conn_resume SnmpServerEnableTrapsSlbA#service_conn_resume}
  */
  readonly serviceConnResume?: number;
  /**
  * Enable SLB service-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_down SnmpServerEnableTrapsSlbA#service_down}
  */
  readonly serviceDown?: number;
  /**
  * Enable SLB service-group-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_group_down SnmpServerEnableTrapsSlbA#service_group_down}
  */
  readonly serviceGroupDown?: number;
  /**
  * Enable SLB service-group-member-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_group_member_down SnmpServerEnableTrapsSlbA#service_group_member_down}
  */
  readonly serviceGroupMemberDown?: number;
  /**
  * Enable SLB service-group-member-up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_group_member_up SnmpServerEnableTrapsSlbA#service_group_member_up}
  */
  readonly serviceGroupMemberUp?: number;
  /**
  * Enable SLB service-group-up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_group_up SnmpServerEnableTrapsSlbA#service_group_up}
  */
  readonly serviceGroupUp?: number;
  /**
  * Enable SLB service-up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#service_up SnmpServerEnableTrapsSlbA#service_up}
  */
  readonly serviceUp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#uuid SnmpServerEnableTrapsSlbA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable the virtual server reach conn-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_connlimit SnmpServerEnableTrapsSlbA#vip_connlimit}
  */
  readonly vipConnlimit?: number;
  /**
  * Enable the virtual server reach conn-rate-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_connratelimit SnmpServerEnableTrapsSlbA#vip_connratelimit}
  */
  readonly vipConnratelimit?: number;
  /**
  * Enable SLB virtual server down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_down SnmpServerEnableTrapsSlbA#vip_down}
  */
  readonly vipDown?: number;
  /**
  * Enable the virtual port reach conn-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_port_connlimit SnmpServerEnableTrapsSlbA#vip_port_connlimit}
  */
  readonly vipPortConnlimit?: number;
  /**
  * Enable the virtual port reach conn-rate-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_port_connratelimit SnmpServerEnableTrapsSlbA#vip_port_connratelimit}
  */
  readonly vipPortConnratelimit?: number;
  /**
  * Enable SLB virtual port down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_port_down SnmpServerEnableTrapsSlbA#vip_port_down}
  */
  readonly vipPortDown?: number;
  /**
  * Enable SLB virtual port up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_port_up SnmpServerEnableTrapsSlbA#vip_port_up}
  */
  readonly vipPortUp?: number;
  /**
  * Enable SLB virtual server up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#vip_up SnmpServerEnableTrapsSlbA#vip_up}
  */
  readonly vipUp?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb thunder_snmp_server_enable_traps_slb}
*/
export class SnmpServerEnableTrapsSlbA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_slb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsSlbA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsSlbA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsSlbA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsSlbA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_slb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb thunder_snmp_server_enable_traps_slb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsSlbAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsSlbAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_slb',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._applicationBufferLimit = config.applicationBufferLimit;
    this._bwRateLimitExceed = config.bwRateLimitExceed;
    this._bwRateLimitResume = config.bwRateLimitResume;
    this._gatewayDown = config.gatewayDown;
    this._gatewayUp = config.gatewayUp;
    this._id = config.id;
    this._serverConnLimit = config.serverConnLimit;
    this._serverConnResume = config.serverConnResume;
    this._serverDisabled = config.serverDisabled;
    this._serverDown = config.serverDown;
    this._serverSelectionFailure = config.serverSelectionFailure;
    this._serverUp = config.serverUp;
    this._serviceConnLimit = config.serviceConnLimit;
    this._serviceConnResume = config.serviceConnResume;
    this._serviceDown = config.serviceDown;
    this._serviceGroupDown = config.serviceGroupDown;
    this._serviceGroupMemberDown = config.serviceGroupMemberDown;
    this._serviceGroupMemberUp = config.serviceGroupMemberUp;
    this._serviceGroupUp = config.serviceGroupUp;
    this._serviceUp = config.serviceUp;
    this._uuid = config.uuid;
    this._vipConnlimit = config.vipConnlimit;
    this._vipConnratelimit = config.vipConnratelimit;
    this._vipDown = config.vipDown;
    this._vipPortConnlimit = config.vipPortConnlimit;
    this._vipPortConnratelimit = config.vipPortConnratelimit;
    this._vipPortDown = config.vipPortDown;
    this._vipPortUp = config.vipPortUp;
    this._vipUp = config.vipUp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // application_buffer_limit - computed: false, optional: true, required: false
  private _applicationBufferLimit?: number; 
  public get applicationBufferLimit() {
    return this.getNumberAttribute('application_buffer_limit');
  }
  public set applicationBufferLimit(value: number) {
    this._applicationBufferLimit = value;
  }
  public resetApplicationBufferLimit() {
    this._applicationBufferLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationBufferLimitInput() {
    return this._applicationBufferLimit;
  }

  // bw_rate_limit_exceed - computed: false, optional: true, required: false
  private _bwRateLimitExceed?: number; 
  public get bwRateLimitExceed() {
    return this.getNumberAttribute('bw_rate_limit_exceed');
  }
  public set bwRateLimitExceed(value: number) {
    this._bwRateLimitExceed = value;
  }
  public resetBwRateLimitExceed() {
    this._bwRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitExceedInput() {
    return this._bwRateLimitExceed;
  }

  // bw_rate_limit_resume - computed: false, optional: true, required: false
  private _bwRateLimitResume?: number; 
  public get bwRateLimitResume() {
    return this.getNumberAttribute('bw_rate_limit_resume');
  }
  public set bwRateLimitResume(value: number) {
    this._bwRateLimitResume = value;
  }
  public resetBwRateLimitResume() {
    this._bwRateLimitResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitResumeInput() {
    return this._bwRateLimitResume;
  }

  // gateway_down - computed: false, optional: true, required: false
  private _gatewayDown?: number; 
  public get gatewayDown() {
    return this.getNumberAttribute('gateway_down');
  }
  public set gatewayDown(value: number) {
    this._gatewayDown = value;
  }
  public resetGatewayDown() {
    this._gatewayDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDownInput() {
    return this._gatewayDown;
  }

  // gateway_up - computed: false, optional: true, required: false
  private _gatewayUp?: number; 
  public get gatewayUp() {
    return this.getNumberAttribute('gateway_up');
  }
  public set gatewayUp(value: number) {
    this._gatewayUp = value;
  }
  public resetGatewayUp() {
    this._gatewayUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUpInput() {
    return this._gatewayUp;
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

  // server_conn_limit - computed: false, optional: true, required: false
  private _serverConnLimit?: number; 
  public get serverConnLimit() {
    return this.getNumberAttribute('server_conn_limit');
  }
  public set serverConnLimit(value: number) {
    this._serverConnLimit = value;
  }
  public resetServerConnLimit() {
    this._serverConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnLimitInput() {
    return this._serverConnLimit;
  }

  // server_conn_resume - computed: false, optional: true, required: false
  private _serverConnResume?: number; 
  public get serverConnResume() {
    return this.getNumberAttribute('server_conn_resume');
  }
  public set serverConnResume(value: number) {
    this._serverConnResume = value;
  }
  public resetServerConnResume() {
    this._serverConnResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnResumeInput() {
    return this._serverConnResume;
  }

  // server_disabled - computed: false, optional: true, required: false
  private _serverDisabled?: number; 
  public get serverDisabled() {
    return this.getNumberAttribute('server_disabled');
  }
  public set serverDisabled(value: number) {
    this._serverDisabled = value;
  }
  public resetServerDisabled() {
    this._serverDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDisabledInput() {
    return this._serverDisabled;
  }

  // server_down - computed: false, optional: true, required: false
  private _serverDown?: number; 
  public get serverDown() {
    return this.getNumberAttribute('server_down');
  }
  public set serverDown(value: number) {
    this._serverDown = value;
  }
  public resetServerDown() {
    this._serverDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDownInput() {
    return this._serverDown;
  }

  // server_selection_failure - computed: false, optional: true, required: false
  private _serverSelectionFailure?: number; 
  public get serverSelectionFailure() {
    return this.getNumberAttribute('server_selection_failure');
  }
  public set serverSelectionFailure(value: number) {
    this._serverSelectionFailure = value;
  }
  public resetServerSelectionFailure() {
    this._serverSelectionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailureInput() {
    return this._serverSelectionFailure;
  }

  // server_up - computed: false, optional: true, required: false
  private _serverUp?: number; 
  public get serverUp() {
    return this.getNumberAttribute('server_up');
  }
  public set serverUp(value: number) {
    this._serverUp = value;
  }
  public resetServerUp() {
    this._serverUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUpInput() {
    return this._serverUp;
  }

  // service_conn_limit - computed: false, optional: true, required: false
  private _serviceConnLimit?: number; 
  public get serviceConnLimit() {
    return this.getNumberAttribute('service_conn_limit');
  }
  public set serviceConnLimit(value: number) {
    this._serviceConnLimit = value;
  }
  public resetServiceConnLimit() {
    this._serviceConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnLimitInput() {
    return this._serviceConnLimit;
  }

  // service_conn_resume - computed: false, optional: true, required: false
  private _serviceConnResume?: number; 
  public get serviceConnResume() {
    return this.getNumberAttribute('service_conn_resume');
  }
  public set serviceConnResume(value: number) {
    this._serviceConnResume = value;
  }
  public resetServiceConnResume() {
    this._serviceConnResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnResumeInput() {
    return this._serviceConnResume;
  }

  // service_down - computed: false, optional: true, required: false
  private _serviceDown?: number; 
  public get serviceDown() {
    return this.getNumberAttribute('service_down');
  }
  public set serviceDown(value: number) {
    this._serviceDown = value;
  }
  public resetServiceDown() {
    this._serviceDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDownInput() {
    return this._serviceDown;
  }

  // service_group_down - computed: false, optional: true, required: false
  private _serviceGroupDown?: number; 
  public get serviceGroupDown() {
    return this.getNumberAttribute('service_group_down');
  }
  public set serviceGroupDown(value: number) {
    this._serviceGroupDown = value;
  }
  public resetServiceGroupDown() {
    this._serviceGroupDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupDownInput() {
    return this._serviceGroupDown;
  }

  // service_group_member_down - computed: false, optional: true, required: false
  private _serviceGroupMemberDown?: number; 
  public get serviceGroupMemberDown() {
    return this.getNumberAttribute('service_group_member_down');
  }
  public set serviceGroupMemberDown(value: number) {
    this._serviceGroupMemberDown = value;
  }
  public resetServiceGroupMemberDown() {
    this._serviceGroupMemberDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMemberDownInput() {
    return this._serviceGroupMemberDown;
  }

  // service_group_member_up - computed: false, optional: true, required: false
  private _serviceGroupMemberUp?: number; 
  public get serviceGroupMemberUp() {
    return this.getNumberAttribute('service_group_member_up');
  }
  public set serviceGroupMemberUp(value: number) {
    this._serviceGroupMemberUp = value;
  }
  public resetServiceGroupMemberUp() {
    this._serviceGroupMemberUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMemberUpInput() {
    return this._serviceGroupMemberUp;
  }

  // service_group_up - computed: false, optional: true, required: false
  private _serviceGroupUp?: number; 
  public get serviceGroupUp() {
    return this.getNumberAttribute('service_group_up');
  }
  public set serviceGroupUp(value: number) {
    this._serviceGroupUp = value;
  }
  public resetServiceGroupUp() {
    this._serviceGroupUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupUpInput() {
    return this._serviceGroupUp;
  }

  // service_up - computed: false, optional: true, required: false
  private _serviceUp?: number; 
  public get serviceUp() {
    return this.getNumberAttribute('service_up');
  }
  public set serviceUp(value: number) {
    this._serviceUp = value;
  }
  public resetServiceUp() {
    this._serviceUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUpInput() {
    return this._serviceUp;
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

  // vip_connlimit - computed: false, optional: true, required: false
  private _vipConnlimit?: number; 
  public get vipConnlimit() {
    return this.getNumberAttribute('vip_connlimit');
  }
  public set vipConnlimit(value: number) {
    this._vipConnlimit = value;
  }
  public resetVipConnlimit() {
    this._vipConnlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConnlimitInput() {
    return this._vipConnlimit;
  }

  // vip_connratelimit - computed: false, optional: true, required: false
  private _vipConnratelimit?: number; 
  public get vipConnratelimit() {
    return this.getNumberAttribute('vip_connratelimit');
  }
  public set vipConnratelimit(value: number) {
    this._vipConnratelimit = value;
  }
  public resetVipConnratelimit() {
    this._vipConnratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConnratelimitInput() {
    return this._vipConnratelimit;
  }

  // vip_down - computed: false, optional: true, required: false
  private _vipDown?: number; 
  public get vipDown() {
    return this.getNumberAttribute('vip_down');
  }
  public set vipDown(value: number) {
    this._vipDown = value;
  }
  public resetVipDown() {
    this._vipDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipDownInput() {
    return this._vipDown;
  }

  // vip_port_connlimit - computed: false, optional: true, required: false
  private _vipPortConnlimit?: number; 
  public get vipPortConnlimit() {
    return this.getNumberAttribute('vip_port_connlimit');
  }
  public set vipPortConnlimit(value: number) {
    this._vipPortConnlimit = value;
  }
  public resetVipPortConnlimit() {
    this._vipPortConnlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortConnlimitInput() {
    return this._vipPortConnlimit;
  }

  // vip_port_connratelimit - computed: false, optional: true, required: false
  private _vipPortConnratelimit?: number; 
  public get vipPortConnratelimit() {
    return this.getNumberAttribute('vip_port_connratelimit');
  }
  public set vipPortConnratelimit(value: number) {
    this._vipPortConnratelimit = value;
  }
  public resetVipPortConnratelimit() {
    this._vipPortConnratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortConnratelimitInput() {
    return this._vipPortConnratelimit;
  }

  // vip_port_down - computed: false, optional: true, required: false
  private _vipPortDown?: number; 
  public get vipPortDown() {
    return this.getNumberAttribute('vip_port_down');
  }
  public set vipPortDown(value: number) {
    this._vipPortDown = value;
  }
  public resetVipPortDown() {
    this._vipPortDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortDownInput() {
    return this._vipPortDown;
  }

  // vip_port_up - computed: false, optional: true, required: false
  private _vipPortUp?: number; 
  public get vipPortUp() {
    return this.getNumberAttribute('vip_port_up');
  }
  public set vipPortUp(value: number) {
    this._vipPortUp = value;
  }
  public resetVipPortUp() {
    this._vipPortUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortUpInput() {
    return this._vipPortUp;
  }

  // vip_up - computed: false, optional: true, required: false
  private _vipUp?: number; 
  public get vipUp() {
    return this.getNumberAttribute('vip_up');
  }
  public set vipUp(value: number) {
    this._vipUp = value;
  }
  public resetVipUp() {
    this._vipUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipUpInput() {
    return this._vipUp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      application_buffer_limit: cdktf.numberToTerraform(this._applicationBufferLimit),
      bw_rate_limit_exceed: cdktf.numberToTerraform(this._bwRateLimitExceed),
      bw_rate_limit_resume: cdktf.numberToTerraform(this._bwRateLimitResume),
      gateway_down: cdktf.numberToTerraform(this._gatewayDown),
      gateway_up: cdktf.numberToTerraform(this._gatewayUp),
      id: cdktf.stringToTerraform(this._id),
      server_conn_limit: cdktf.numberToTerraform(this._serverConnLimit),
      server_conn_resume: cdktf.numberToTerraform(this._serverConnResume),
      server_disabled: cdktf.numberToTerraform(this._serverDisabled),
      server_down: cdktf.numberToTerraform(this._serverDown),
      server_selection_failure: cdktf.numberToTerraform(this._serverSelectionFailure),
      server_up: cdktf.numberToTerraform(this._serverUp),
      service_conn_limit: cdktf.numberToTerraform(this._serviceConnLimit),
      service_conn_resume: cdktf.numberToTerraform(this._serviceConnResume),
      service_down: cdktf.numberToTerraform(this._serviceDown),
      service_group_down: cdktf.numberToTerraform(this._serviceGroupDown),
      service_group_member_down: cdktf.numberToTerraform(this._serviceGroupMemberDown),
      service_group_member_up: cdktf.numberToTerraform(this._serviceGroupMemberUp),
      service_group_up: cdktf.numberToTerraform(this._serviceGroupUp),
      service_up: cdktf.numberToTerraform(this._serviceUp),
      uuid: cdktf.stringToTerraform(this._uuid),
      vip_connlimit: cdktf.numberToTerraform(this._vipConnlimit),
      vip_connratelimit: cdktf.numberToTerraform(this._vipConnratelimit),
      vip_down: cdktf.numberToTerraform(this._vipDown),
      vip_port_connlimit: cdktf.numberToTerraform(this._vipPortConnlimit),
      vip_port_connratelimit: cdktf.numberToTerraform(this._vipPortConnratelimit),
      vip_port_down: cdktf.numberToTerraform(this._vipPortDown),
      vip_port_up: cdktf.numberToTerraform(this._vipPortUp),
      vip_up: cdktf.numberToTerraform(this._vipUp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application_buffer_limit: {
        value: cdktf.numberToHclTerraform(this._applicationBufferLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_rate_limit_exceed: {
        value: cdktf.numberToHclTerraform(this._bwRateLimitExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_rate_limit_resume: {
        value: cdktf.numberToHclTerraform(this._bwRateLimitResume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_down: {
        value: cdktf.numberToHclTerraform(this._gatewayDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_up: {
        value: cdktf.numberToHclTerraform(this._gatewayUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_conn_limit: {
        value: cdktf.numberToHclTerraform(this._serverConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_conn_resume: {
        value: cdktf.numberToHclTerraform(this._serverConnResume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_disabled: {
        value: cdktf.numberToHclTerraform(this._serverDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_down: {
        value: cdktf.numberToHclTerraform(this._serverDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_selection_failure: {
        value: cdktf.numberToHclTerraform(this._serverSelectionFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_up: {
        value: cdktf.numberToHclTerraform(this._serverUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_conn_limit: {
        value: cdktf.numberToHclTerraform(this._serviceConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_conn_resume: {
        value: cdktf.numberToHclTerraform(this._serviceConnResume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_down: {
        value: cdktf.numberToHclTerraform(this._serviceDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_down: {
        value: cdktf.numberToHclTerraform(this._serviceGroupDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_member_down: {
        value: cdktf.numberToHclTerraform(this._serviceGroupMemberDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_member_up: {
        value: cdktf.numberToHclTerraform(this._serviceGroupMemberUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_up: {
        value: cdktf.numberToHclTerraform(this._serviceGroupUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_up: {
        value: cdktf.numberToHclTerraform(this._serviceUp),
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
      vip_connlimit: {
        value: cdktf.numberToHclTerraform(this._vipConnlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_connratelimit: {
        value: cdktf.numberToHclTerraform(this._vipConnratelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_down: {
        value: cdktf.numberToHclTerraform(this._vipDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_port_connlimit: {
        value: cdktf.numberToHclTerraform(this._vipPortConnlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_port_connratelimit: {
        value: cdktf.numberToHclTerraform(this._vipPortConnratelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_port_down: {
        value: cdktf.numberToHclTerraform(this._vipPortDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_port_up: {
        value: cdktf.numberToHclTerraform(this._vipPortUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_up: {
        value: cdktf.numberToHclTerraform(this._vipUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
