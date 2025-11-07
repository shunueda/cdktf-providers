// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowMonitorRecordAConfig extends cdktf.TerraformMetaArguments {
  /**
  * General DDOS statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#ddos_general_stat NetflowMonitorRecordA#ddos_general_stat}
  */
  readonly ddosGeneralStat?: number;
  /**
  * HTTP DDOS statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#ddos_http_stat NetflowMonitorRecordA#ddos_http_stat}
  */
  readonly ddosHttpStat?: number;
  /**
  * DS-Lite Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#dslite NetflowMonitorRecordA#dslite}
  */
  readonly dslite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#id NetflowMonitorRecordA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#name NetflowMonitorRecordA#name}
  */
  readonly name: string;
  /**
  * NAT44 Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#nat44 NetflowMonitorRecordA#nat44}
  */
  readonly nat44?: number;
  /**
  * NAT64 Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#nat64 NetflowMonitorRecordA#nat64}
  */
  readonly nat64?: number;
  /**
  * NetFlow V5 Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#netflow_v5 NetflowMonitorRecordA#netflow_v5}
  */
  readonly netflowV5?: number;
  /**
  * Extended NetFlow V5 Flow Record Template, supports ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#netflow_v5_ext NetflowMonitorRecordA#netflow_v5_ext}
  */
  readonly netflowV5Ext?: number;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_batch_dslite NetflowMonitorRecordA#port_batch_dslite}
  */
  readonly portBatchDslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_batch_nat44 NetflowMonitorRecordA#port_batch_nat44}
  */
  readonly portBatchNat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_batch_nat64 NetflowMonitorRecordA#port_batch_nat64}
  */
  readonly portBatchNat64?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_batch_v2_dslite NetflowMonitorRecordA#port_batch_v2_dslite}
  */
  readonly portBatchV2Dslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_batch_v2_nat44 NetflowMonitorRecordA#port_batch_v2_nat44}
  */
  readonly portBatchV2Nat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_batch_v2_nat64 NetflowMonitorRecordA#port_batch_v2_nat64}
  */
  readonly portBatchV2Nat64?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_mapping_dslite NetflowMonitorRecordA#port_mapping_dslite}
  */
  readonly portMappingDslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_mapping_nat44 NetflowMonitorRecordA#port_mapping_nat44}
  */
  readonly portMappingNat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#port_mapping_nat64 NetflowMonitorRecordA#port_mapping_nat64}
  */
  readonly portMappingNat64?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#sesn_event_dslite NetflowMonitorRecordA#sesn_event_dslite}
  */
  readonly sesnEventDslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#sesn_event_fw4 NetflowMonitorRecordA#sesn_event_fw4}
  */
  readonly sesnEventFw4?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#sesn_event_fw6 NetflowMonitorRecordA#sesn_event_fw6}
  */
  readonly sesnEventFw6?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#sesn_event_nat44 NetflowMonitorRecordA#sesn_event_nat44}
  */
  readonly sesnEventNat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#sesn_event_nat64 NetflowMonitorRecordA#sesn_event_nat64}
  */
  readonly sesnEventNat64?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#uuid NetflowMonitorRecordA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record thunder_netflow_monitor_record}
*/
export class NetflowMonitorRecordA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_monitor_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowMonitorRecordA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowMonitorRecordA to import
  * @param importFromId The id of the existing NetflowMonitorRecordA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowMonitorRecordA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_monitor_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_record thunder_netflow_monitor_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowMonitorRecordAConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowMonitorRecordAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_monitor_record',
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
    this._ddosGeneralStat = config.ddosGeneralStat;
    this._ddosHttpStat = config.ddosHttpStat;
    this._dslite = config.dslite;
    this._id = config.id;
    this._name = config.name;
    this._nat44 = config.nat44;
    this._nat64 = config.nat64;
    this._netflowV5 = config.netflowV5;
    this._netflowV5Ext = config.netflowV5Ext;
    this._portBatchDslite = config.portBatchDslite;
    this._portBatchNat44 = config.portBatchNat44;
    this._portBatchNat64 = config.portBatchNat64;
    this._portBatchV2Dslite = config.portBatchV2Dslite;
    this._portBatchV2Nat44 = config.portBatchV2Nat44;
    this._portBatchV2Nat64 = config.portBatchV2Nat64;
    this._portMappingDslite = config.portMappingDslite;
    this._portMappingNat44 = config.portMappingNat44;
    this._portMappingNat64 = config.portMappingNat64;
    this._sesnEventDslite = config.sesnEventDslite;
    this._sesnEventFw4 = config.sesnEventFw4;
    this._sesnEventFw6 = config.sesnEventFw6;
    this._sesnEventNat44 = config.sesnEventNat44;
    this._sesnEventNat64 = config.sesnEventNat64;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ddos_general_stat - computed: false, optional: true, required: false
  private _ddosGeneralStat?: number; 
  public get ddosGeneralStat() {
    return this.getNumberAttribute('ddos_general_stat');
  }
  public set ddosGeneralStat(value: number) {
    this._ddosGeneralStat = value;
  }
  public resetDdosGeneralStat() {
    this._ddosGeneralStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosGeneralStatInput() {
    return this._ddosGeneralStat;
  }

  // ddos_http_stat - computed: false, optional: true, required: false
  private _ddosHttpStat?: number; 
  public get ddosHttpStat() {
    return this.getNumberAttribute('ddos_http_stat');
  }
  public set ddosHttpStat(value: number) {
    this._ddosHttpStat = value;
  }
  public resetDdosHttpStat() {
    this._ddosHttpStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosHttpStatInput() {
    return this._ddosHttpStat;
  }

  // dslite - computed: false, optional: true, required: false
  private _dslite?: number; 
  public get dslite() {
    return this.getNumberAttribute('dslite');
  }
  public set dslite(value: number) {
    this._dslite = value;
  }
  public resetDslite() {
    this._dslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteInput() {
    return this._dslite;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat44 - computed: false, optional: true, required: false
  private _nat44?: number; 
  public get nat44() {
    return this.getNumberAttribute('nat44');
  }
  public set nat44(value: number) {
    this._nat44 = value;
  }
  public resetNat44() {
    this._nat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44Input() {
    return this._nat44;
  }

  // nat64 - computed: false, optional: true, required: false
  private _nat64?: number; 
  public get nat64() {
    return this.getNumberAttribute('nat64');
  }
  public set nat64(value: number) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
  }

  // netflow_v5 - computed: false, optional: true, required: false
  private _netflowV5?: number; 
  public get netflowV5() {
    return this.getNumberAttribute('netflow_v5');
  }
  public set netflowV5(value: number) {
    this._netflowV5 = value;
  }
  public resetNetflowV5() {
    this._netflowV5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5Input() {
    return this._netflowV5;
  }

  // netflow_v5_ext - computed: false, optional: true, required: false
  private _netflowV5Ext?: number; 
  public get netflowV5Ext() {
    return this.getNumberAttribute('netflow_v5_ext');
  }
  public set netflowV5Ext(value: number) {
    this._netflowV5Ext = value;
  }
  public resetNetflowV5Ext() {
    this._netflowV5Ext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5ExtInput() {
    return this._netflowV5Ext;
  }

  // port_batch_dslite - computed: false, optional: true, required: false
  private _portBatchDslite?: string; 
  public get portBatchDslite() {
    return this.getStringAttribute('port_batch_dslite');
  }
  public set portBatchDslite(value: string) {
    this._portBatchDslite = value;
  }
  public resetPortBatchDslite() {
    this._portBatchDslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchDsliteInput() {
    return this._portBatchDslite;
  }

  // port_batch_nat44 - computed: false, optional: true, required: false
  private _portBatchNat44?: string; 
  public get portBatchNat44() {
    return this.getStringAttribute('port_batch_nat44');
  }
  public set portBatchNat44(value: string) {
    this._portBatchNat44 = value;
  }
  public resetPortBatchNat44() {
    this._portBatchNat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchNat44Input() {
    return this._portBatchNat44;
  }

  // port_batch_nat64 - computed: false, optional: true, required: false
  private _portBatchNat64?: string; 
  public get portBatchNat64() {
    return this.getStringAttribute('port_batch_nat64');
  }
  public set portBatchNat64(value: string) {
    this._portBatchNat64 = value;
  }
  public resetPortBatchNat64() {
    this._portBatchNat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchNat64Input() {
    return this._portBatchNat64;
  }

  // port_batch_v2_dslite - computed: false, optional: true, required: false
  private _portBatchV2Dslite?: string; 
  public get portBatchV2Dslite() {
    return this.getStringAttribute('port_batch_v2_dslite');
  }
  public set portBatchV2Dslite(value: string) {
    this._portBatchV2Dslite = value;
  }
  public resetPortBatchV2Dslite() {
    this._portBatchV2Dslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2DsliteInput() {
    return this._portBatchV2Dslite;
  }

  // port_batch_v2_nat44 - computed: false, optional: true, required: false
  private _portBatchV2Nat44?: string; 
  public get portBatchV2Nat44() {
    return this.getStringAttribute('port_batch_v2_nat44');
  }
  public set portBatchV2Nat44(value: string) {
    this._portBatchV2Nat44 = value;
  }
  public resetPortBatchV2Nat44() {
    this._portBatchV2Nat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2Nat44Input() {
    return this._portBatchV2Nat44;
  }

  // port_batch_v2_nat64 - computed: false, optional: true, required: false
  private _portBatchV2Nat64?: string; 
  public get portBatchV2Nat64() {
    return this.getStringAttribute('port_batch_v2_nat64');
  }
  public set portBatchV2Nat64(value: string) {
    this._portBatchV2Nat64 = value;
  }
  public resetPortBatchV2Nat64() {
    this._portBatchV2Nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2Nat64Input() {
    return this._portBatchV2Nat64;
  }

  // port_mapping_dslite - computed: false, optional: true, required: false
  private _portMappingDslite?: string; 
  public get portMappingDslite() {
    return this.getStringAttribute('port_mapping_dslite');
  }
  public set portMappingDslite(value: string) {
    this._portMappingDslite = value;
  }
  public resetPortMappingDslite() {
    this._portMappingDslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingDsliteInput() {
    return this._portMappingDslite;
  }

  // port_mapping_nat44 - computed: false, optional: true, required: false
  private _portMappingNat44?: string; 
  public get portMappingNat44() {
    return this.getStringAttribute('port_mapping_nat44');
  }
  public set portMappingNat44(value: string) {
    this._portMappingNat44 = value;
  }
  public resetPortMappingNat44() {
    this._portMappingNat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat44Input() {
    return this._portMappingNat44;
  }

  // port_mapping_nat64 - computed: false, optional: true, required: false
  private _portMappingNat64?: string; 
  public get portMappingNat64() {
    return this.getStringAttribute('port_mapping_nat64');
  }
  public set portMappingNat64(value: string) {
    this._portMappingNat64 = value;
  }
  public resetPortMappingNat64() {
    this._portMappingNat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat64Input() {
    return this._portMappingNat64;
  }

  // sesn_event_dslite - computed: false, optional: true, required: false
  private _sesnEventDslite?: string; 
  public get sesnEventDslite() {
    return this.getStringAttribute('sesn_event_dslite');
  }
  public set sesnEventDslite(value: string) {
    this._sesnEventDslite = value;
  }
  public resetSesnEventDslite() {
    this._sesnEventDslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventDsliteInput() {
    return this._sesnEventDslite;
  }

  // sesn_event_fw4 - computed: false, optional: true, required: false
  private _sesnEventFw4?: string; 
  public get sesnEventFw4() {
    return this.getStringAttribute('sesn_event_fw4');
  }
  public set sesnEventFw4(value: string) {
    this._sesnEventFw4 = value;
  }
  public resetSesnEventFw4() {
    this._sesnEventFw4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventFw4Input() {
    return this._sesnEventFw4;
  }

  // sesn_event_fw6 - computed: false, optional: true, required: false
  private _sesnEventFw6?: string; 
  public get sesnEventFw6() {
    return this.getStringAttribute('sesn_event_fw6');
  }
  public set sesnEventFw6(value: string) {
    this._sesnEventFw6 = value;
  }
  public resetSesnEventFw6() {
    this._sesnEventFw6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventFw6Input() {
    return this._sesnEventFw6;
  }

  // sesn_event_nat44 - computed: false, optional: true, required: false
  private _sesnEventNat44?: string; 
  public get sesnEventNat44() {
    return this.getStringAttribute('sesn_event_nat44');
  }
  public set sesnEventNat44(value: string) {
    this._sesnEventNat44 = value;
  }
  public resetSesnEventNat44() {
    this._sesnEventNat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventNat44Input() {
    return this._sesnEventNat44;
  }

  // sesn_event_nat64 - computed: false, optional: true, required: false
  private _sesnEventNat64?: string; 
  public get sesnEventNat64() {
    return this.getStringAttribute('sesn_event_nat64');
  }
  public set sesnEventNat64(value: string) {
    this._sesnEventNat64 = value;
  }
  public resetSesnEventNat64() {
    this._sesnEventNat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventNat64Input() {
    return this._sesnEventNat64;
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
      ddos_general_stat: cdktf.numberToTerraform(this._ddosGeneralStat),
      ddos_http_stat: cdktf.numberToTerraform(this._ddosHttpStat),
      dslite: cdktf.numberToTerraform(this._dslite),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat44: cdktf.numberToTerraform(this._nat44),
      nat64: cdktf.numberToTerraform(this._nat64),
      netflow_v5: cdktf.numberToTerraform(this._netflowV5),
      netflow_v5_ext: cdktf.numberToTerraform(this._netflowV5Ext),
      port_batch_dslite: cdktf.stringToTerraform(this._portBatchDslite),
      port_batch_nat44: cdktf.stringToTerraform(this._portBatchNat44),
      port_batch_nat64: cdktf.stringToTerraform(this._portBatchNat64),
      port_batch_v2_dslite: cdktf.stringToTerraform(this._portBatchV2Dslite),
      port_batch_v2_nat44: cdktf.stringToTerraform(this._portBatchV2Nat44),
      port_batch_v2_nat64: cdktf.stringToTerraform(this._portBatchV2Nat64),
      port_mapping_dslite: cdktf.stringToTerraform(this._portMappingDslite),
      port_mapping_nat44: cdktf.stringToTerraform(this._portMappingNat44),
      port_mapping_nat64: cdktf.stringToTerraform(this._portMappingNat64),
      sesn_event_dslite: cdktf.stringToTerraform(this._sesnEventDslite),
      sesn_event_fw4: cdktf.stringToTerraform(this._sesnEventFw4),
      sesn_event_fw6: cdktf.stringToTerraform(this._sesnEventFw6),
      sesn_event_nat44: cdktf.stringToTerraform(this._sesnEventNat44),
      sesn_event_nat64: cdktf.stringToTerraform(this._sesnEventNat64),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ddos_general_stat: {
        value: cdktf.numberToHclTerraform(this._ddosGeneralStat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_http_stat: {
        value: cdktf.numberToHclTerraform(this._ddosHttpStat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dslite: {
        value: cdktf.numberToHclTerraform(this._dslite),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat44: {
        value: cdktf.numberToHclTerraform(this._nat44),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat64: {
        value: cdktf.numberToHclTerraform(this._nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_v5: {
        value: cdktf.numberToHclTerraform(this._netflowV5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_v5_ext: {
        value: cdktf.numberToHclTerraform(this._netflowV5Ext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_batch_dslite: {
        value: cdktf.stringToHclTerraform(this._portBatchDslite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_batch_nat44: {
        value: cdktf.stringToHclTerraform(this._portBatchNat44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_batch_nat64: {
        value: cdktf.stringToHclTerraform(this._portBatchNat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_batch_v2_dslite: {
        value: cdktf.stringToHclTerraform(this._portBatchV2Dslite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_batch_v2_nat44: {
        value: cdktf.stringToHclTerraform(this._portBatchV2Nat44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_batch_v2_nat64: {
        value: cdktf.stringToHclTerraform(this._portBatchV2Nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_mapping_dslite: {
        value: cdktf.stringToHclTerraform(this._portMappingDslite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_mapping_nat44: {
        value: cdktf.stringToHclTerraform(this._portMappingNat44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_mapping_nat64: {
        value: cdktf.stringToHclTerraform(this._portMappingNat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesn_event_dslite: {
        value: cdktf.stringToHclTerraform(this._sesnEventDslite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesn_event_fw4: {
        value: cdktf.stringToHclTerraform(this._sesnEventFw4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesn_event_fw6: {
        value: cdktf.stringToHclTerraform(this._sesnEventFw6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesn_event_nat44: {
        value: cdktf.stringToHclTerraform(this._sesnEventNat44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesn_event_nat64: {
        value: cdktf.stringToHclTerraform(this._sesnEventNat64),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
