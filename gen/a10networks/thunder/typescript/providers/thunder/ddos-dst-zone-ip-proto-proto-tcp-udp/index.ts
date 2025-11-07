// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneIpProtoProtoTcpUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blacklist and Drop all incoming packets for this ip-proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#deny DdosDstZoneIpProtoProtoTcpUdp#deny}
  */
  readonly deny?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#drop_frag_pkt DdosDstZoneIpProtoProtoTcpUdp#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#id DdosDstZoneIpProtoProtoTcpUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#ip_filtering_policy DdosDstZoneIpProtoProtoTcpUdp#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * 'tcp': ip-proto tcp; 'udp': ip-proto udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#protocol DdosDstZoneIpProtoProtoTcpUdp#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#set_counter_base_val DdosDstZoneIpProtoProtoTcpUdp#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#uuid DdosDstZoneIpProtoProtoTcpUdp#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#zone_name DdosDstZoneIpProtoProtoTcpUdp#zone_name}
  */
  readonly zoneName: string;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#glid_cfg DdosDstZoneIpProtoProtoTcpUdp#glid_cfg}
  */
  readonly glidCfg?: DdosDstZoneIpProtoProtoTcpUdpGlidCfg;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#ip_filtering_policy_oper DdosDstZoneIpProtoProtoTcpUdp#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOper;
}
export interface DdosDstZoneIpProtoProtoTcpUdpGlidCfg {
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#action_list DdosDstZoneIpProtoProtoTcpUdp#action_list}
  */
  readonly actionList?: string;
  /**
  * Global limit ID for the whole zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#glid DdosDstZoneIpProtoProtoTcpUdp#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#glid_action DdosDstZoneIpProtoProtoTcpUdp#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Global limit ID per address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#per_addr_glid DdosDstZoneIpProtoProtoTcpUdp#per_addr_glid}
  */
  readonly perAddrGlid?: string;
}

export function ddosDstZoneIpProtoProtoTcpUdpGlidCfgToTerraform(struct?: DdosDstZoneIpProtoProtoTcpUdpGlidCfgOutputReference | DdosDstZoneIpProtoProtoTcpUdpGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_list: cdktf.stringToTerraform(struct!.actionList),
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    per_addr_glid: cdktf.stringToTerraform(struct!.perAddrGlid),
  }
}


export function ddosDstZoneIpProtoProtoTcpUdpGlidCfgToHclTerraform(struct?: DdosDstZoneIpProtoProtoTcpUdpGlidCfgOutputReference | DdosDstZoneIpProtoProtoTcpUdpGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_list: {
      value: cdktf.stringToHclTerraform(struct!.actionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_addr_glid: {
      value: cdktf.stringToHclTerraform(struct!.perAddrGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoTcpUdpGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoTcpUdpGlidCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionList = this._actionList;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._perAddrGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.perAddrGlid = this._perAddrGlid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoTcpUdpGlidCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionList = undefined;
      this._glid = undefined;
      this._glidAction = undefined;
      this._perAddrGlid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionList = value.actionList;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
      this._perAddrGlid = value.perAddrGlid;
    }
  }

  // action_list - computed: false, optional: true, required: false
  private _actionList?: string; 
  public get actionList() {
    return this.getStringAttribute('action_list');
  }
  public set actionList(value: string) {
    this._actionList = value;
  }
  public resetActionList() {
    this._actionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionListInput() {
    return this._actionList;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // per_addr_glid - computed: false, optional: true, required: false
  private _perAddrGlid?: string; 
  public get perAddrGlid() {
    return this.getStringAttribute('per_addr_glid');
  }
  public set perAddrGlid(value: string) {
    this._perAddrGlid = value;
  }
  public resetPerAddrGlid() {
    this._perAddrGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perAddrGlidInput() {
    return this._perAddrGlid;
  }
}
export interface DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#uuid DdosDstZoneIpProtoProtoTcpUdp#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperToTerraform(struct?: DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperOutputReference | DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperToHclTerraform(struct?: DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperOutputReference | DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp thunder_ddos_dst_zone_ip_proto_proto_tcp_udp}
*/
export class DdosDstZoneIpProtoProtoTcpUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_tcp_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneIpProtoProtoTcpUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneIpProtoProtoTcpUdp to import
  * @param importFromId The id of the existing DdosDstZoneIpProtoProtoTcpUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneIpProtoProtoTcpUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_tcp_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_tcp_udp thunder_ddos_dst_zone_ip_proto_proto_tcp_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneIpProtoProtoTcpUdpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneIpProtoProtoTcpUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_tcp_udp',
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
    this._deny = config.deny;
    this._dropFragPkt = config.dropFragPkt;
    this._id = config.id;
    this._ipFilteringPolicy = config.ipFilteringPolicy;
    this._protocol = config.protocol;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._glidCfg.internalValue = config.glidCfg;
    this._ipFilteringPolicyOper.internalValue = config.ipFilteringPolicyOper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // drop_frag_pkt - computed: false, optional: true, required: false
  private _dropFragPkt?: number; 
  public get dropFragPkt() {
    return this.getNumberAttribute('drop_frag_pkt');
  }
  public set dropFragPkt(value: number) {
    this._dropFragPkt = value;
  }
  public resetDropFragPkt() {
    this._dropFragPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragPktInput() {
    return this._dropFragPkt;
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

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
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

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZoneIpProtoProtoTcpUdpGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZoneIpProtoProtoTcpUdpGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deny: cdktf.numberToTerraform(this._deny),
      drop_frag_pkt: cdktf.numberToTerraform(this._dropFragPkt),
      id: cdktf.stringToTerraform(this._id),
      ip_filtering_policy: cdktf.stringToTerraform(this._ipFilteringPolicy),
      protocol: cdktf.stringToTerraform(this._protocol),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      glid_cfg: ddosDstZoneIpProtoProtoTcpUdpGlidCfgToTerraform(this._glidCfg.internalValue),
      ip_filtering_policy_oper: ddosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperToTerraform(this._ipFilteringPolicyOper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deny: {
        value: cdktf.numberToHclTerraform(this._deny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_frag_pkt: {
        value: cdktf.numberToHclTerraform(this._dropFragPkt),
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
      ip_filtering_policy: {
        value: cdktf.stringToHclTerraform(this._ipFilteringPolicy),
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
      set_counter_base_val: {
        value: cdktf.numberToHclTerraform(this._setCounterBaseVal),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glid_cfg: {
        value: ddosDstZoneIpProtoProtoTcpUdpGlidCfgToHclTerraform(this._glidCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpProtoProtoTcpUdpGlidCfgList",
      },
      ip_filtering_policy_oper: {
        value: ddosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperToHclTerraform(this._ipFilteringPolicyOper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpProtoProtoTcpUdpIpFilteringPolicyOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
