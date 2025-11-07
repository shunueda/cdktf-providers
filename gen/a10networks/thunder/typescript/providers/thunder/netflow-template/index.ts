// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#id NetflowTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Custom IPFIX Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#ipfix_template_id NetflowTemplate#ipfix_template_id}
  */
  readonly ipfixTemplateId?: number;
  /**
  * IPFIX CUSTOM Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#name NetflowTemplate#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#user_tag NetflowTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#uuid NetflowTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * information_element_blk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#information_element_blk NetflowTemplate#information_element_blk}
  */
  readonly informationElementBlk?: NetflowTemplateInformationElementBlk[] | cdktf.IResolvable;
}
export interface NetflowTemplateInformationElementBlk {
  /**
  * 'fwd-tuple-vnp-id': Session forward tuple partition id (ID: 33028); 'rev-tuple-vnp-id': Session reverse tuple partition id (ID: 33029); 'source-ipv4-address': IPv4 source address in the IP packet header (ID: 8); 'source-ipv4-prefix-len': Prefix length for IPv4 source address(ID: 9); 'dest-ipv4-address': IPv4 destination address in the IP packet header (ID: 12); 'dest-ipv4-prefix-len': Prefix length for IPv4 dest address(ID: 13); 'source-ipv6-address': IPv6 source address in the IP packet header (ID: 27); 'source-ipv6-prefix-len': Prefix length for IPv6 source address(ID:29); 'dest-ipv6-address': IPv6 destination address in the IP packet header (ID:28); 'dest-ipv6-prefix-len': Prefix length for IPv6 dest address (ID:30); 'post-nat-source-ipv4-address': IPv4 natted source address (ID: 225); 'post-nat-dest-ipv4-address': IPv4 natted destination address(ID: 226); 'post-nat-source-ipv6-address': IPv6 natted source address (ID: 281); 'post-nat-dest-ipv6-address': IPv6 natted destination address (ID: 282); 'source-port': Source port identifier in the transport header (ID: 7); 'dest-port': Destination port identifier in the transport header (ID: 11); 'post-nat-source-port': L4 natted source port(ID: 227); 'post-nat-dest-port': L4 natted destination port (ID: 228); 'fwd-tuple-type': Session forward tuple type (ID: 33024); 'rev-tuple-type': Session reverse tuple type (ID: 33025); 'ip-proto': Value of the protocol number in the IP packet header (ID: 4); 'flow-direction': Flow direction: 0:inbound(To an outside interface)/1:outbound(To an inside interface) (ID: 61); 'tcp-control-bits': Cumulative of all the TCP flags seen for this flow (ID: 6); 'fwd-bytes': Incoming bytes associated with an IP Flow (ID: 1); 'fwd-packets': Incoming packets associated with an IP Flow (ID: 2); 'rev-bytes': Delta bytes in reverse direction of bidirectional flow record (ID: 32769); 'rev-packets': Delta packets in reverse direction of bidirectional flow record (ID: 32770); 'in-port': Incoming interface port (ID: 10); 'out-port': Outcoming interface port (ID: 14); 'in-interface': Incoming interface name e.g. ethernet 0 (ID: 82); 'out-interface': Outcoming interface name e.g. ethernet 0 (ID: 32850); 'port-range-start': Port number identifying the start of a range of ports (ID: 361); 'port-range-end': Port number identifying the end of a range of ports (ID: 362); 'port-range-step-size': Step size in a port range (ID: 363); 'port-range-num-ports': Number of ports in a port range (ID: 364); 'rule-name': Rule Name (ID: 33034); 'rule-set-name': Rule-Set Name (ID: 33035); 'fw-source-zone': Firewall Source Zone Name (ID: 33036); 'fw-dest-zone': Firewall Dest Zone Name (ID: 33037); 'application-id': Application ID (ID: 95); 'application-name': Application Name (ID: 96); 'imsi': Subscriber Attribute IMSI (ID: 455); 'msisdn': Subscriber Attribute MSISDN (ID: 456); 'imei': Subscriber Attribute IMEI (ID: 33030); 'radius-custom1': Radius Attribute Custom 1 (ID: 33031); 'radius-custom2': Radius Attribute Custom 2(ID: 33032); 'radius-custom3': Radius Attribute Custom 3 (ID:33033); 'radius-custom4': Radius Attribute Custom 4 (ID: 33067); 'radius-custom5': Radius Attribute Custom 5(ID: 33068); 'radius-custom6': Radius Attribute Custom 6 (ID:33069); 'flow-start-msec': The absolute timestamp of the first packet of the flow (ID: 152); 'flow-duration-msec': Difference in time between the first observed packet of this flow and the last observed packet of this flow (4 bytes) (ID: 161); 'flow-duration-msec-64': Difference in time between the first observed packet of this flow and the last observed packet of this flow (8 bytes) (ID: 33039); 'flow-end-msec': The absolute timestamp of the last packet of the flow (ID: 153); 'nat-event': Indicates a NAT event (ID: 230); 'fw-event': Indicates a FW session event(ID: 233); 'fw-deny-reset-event': Indicates a FW deny/reset event (ID: 33038); 'cgn-flow-direction': Flow direction: 0:inbound(To an outside interface)/1:outbound(To an inside interface)/2:hairpin(From an inside interface to an inside interface) (ID: 33040); 'fw-dest-fqdn': Firewall matched fqdn(ID: 33041); 'flow-end-reason': A10 flow end reason(ID: 33042); 'gtp-deny-reason': Indicates a GTP deny event (ID: 33043); 'gtp-apn': Indicates GTP APN (ID: 33044); 'gtp-steid': Indicates GTP Source TEID (ID: 33045); 'gtp-dteid': Indicates GTP Destination TEID (ID: 33046); 'gtp-selection-mode': Indicates GTP Selection Mode (ID: 33047); 'gtp-mcc': Indicates the MCC of the Serving Network (ID: 33048); 'gtp-mnc': Indicates the MNC of the serving network (ID: 33049); 'gtp-rat-type': Indicates the RAT Type received in the GTP Control packet (ID: 33050); 'gtp-pdn-pdp-type': Indicates the PDN/PDP Type in the GTP Control Packet (ID: 33051); 'gtp-uli': Indicates the User Location Information (ID: 33052); 'gtp-enduser-v4-addr': Indicates the Subscriber IPv4 Address (ID: 33053); 'gtp-enduser-v6-addr': Indicates the Subscriber IPv6 Address (ID: 33054); 'gtp-bearer-id-or-nsapi': Indicates the EPS Bearer ID or NSAPI of the Subscriber (ID: 33055); 'gtp-qci': Indicates the QoS Profile or Traffic Class of the subscriber (ID: 33056); 'gtp-info-event-ind': Indicates a GTP Info event(ID: 33057); 'gtp-restarted-node-ipv4': Restarted S5 Node IPV4 Address(ID: 33058); 'gtp-restarted-node-ipv6': Restarted S5 Node IPV6 Address(ID: 33059); 'gtp-c-tunnels-removed-with-node-restart': Indicates GTP-C tunnels removed by Node restart (ID: 33060); 'radius-imsi': Subscriber Attribute IMSI (Deprecated Field) (ID: 455); 'radius-msisdn': Subscriber Attribute MSISDN (Deprecated Field) (ID: 456); 'radius-imei': Subscriber Attribute IMEI (Deprecated Field) (ID: 33030); 'event-time-msec': The absolute time in milliseconds of an event observation(ID: 323); 'security-event-type': Type of security event(ID: 33063); 'limit-exceeded-count': Limit exceeded count for FW concurrent session(ID: 33062); 'rate-limit-key': Rate Limit Key(ID: 33064); 'rate-limit-type': Rate Limit Type(ID: 33065); 'rate-limit-drop-count': Rate Limit Drop Count(ID: 33066);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#information_element NetflowTemplate#information_element}
  */
  readonly informationElement?: string;
}

export function netflowTemplateInformationElementBlkToTerraform(struct?: NetflowTemplateInformationElementBlk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    information_element: cdktf.stringToTerraform(struct!.informationElement),
  }
}


export function netflowTemplateInformationElementBlkToHclTerraform(struct?: NetflowTemplateInformationElementBlk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    information_element: {
      value: cdktf.stringToHclTerraform(struct!.informationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowTemplateInformationElementBlkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetflowTemplateInformationElementBlk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._informationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.informationElement = this._informationElement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowTemplateInformationElementBlk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._informationElement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._informationElement = value.informationElement;
    }
  }

  // information_element - computed: false, optional: true, required: false
  private _informationElement?: string; 
  public get informationElement() {
    return this.getStringAttribute('information_element');
  }
  public set informationElement(value: string) {
    this._informationElement = value;
  }
  public resetInformationElement() {
    this._informationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationElementInput() {
    return this._informationElement;
  }
}

export class NetflowTemplateInformationElementBlkList extends cdktf.ComplexList {
  public internalValue? : NetflowTemplateInformationElementBlk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetflowTemplateInformationElementBlkOutputReference {
    return new NetflowTemplateInformationElementBlkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template thunder_netflow_template}
*/
export class NetflowTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowTemplate to import
  * @param importFromId The id of the existing NetflowTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_template thunder_netflow_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_template',
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
    this._id = config.id;
    this._ipfixTemplateId = config.ipfixTemplateId;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._informationElementBlk.internalValue = config.informationElementBlk;
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

  // ipfix_template_id - computed: false, optional: true, required: false
  private _ipfixTemplateId?: number; 
  public get ipfixTemplateId() {
    return this.getNumberAttribute('ipfix_template_id');
  }
  public set ipfixTemplateId(value: number) {
    this._ipfixTemplateId = value;
  }
  public resetIpfixTemplateId() {
    this._ipfixTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfixTemplateIdInput() {
    return this._ipfixTemplateId;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // information_element_blk - computed: false, optional: true, required: false
  private _informationElementBlk = new NetflowTemplateInformationElementBlkList(this, "information_element_blk", false);
  public get informationElementBlk() {
    return this._informationElementBlk;
  }
  public putInformationElementBlk(value: NetflowTemplateInformationElementBlk[] | cdktf.IResolvable) {
    this._informationElementBlk.internalValue = value;
  }
  public resetInformationElementBlk() {
    this._informationElementBlk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationElementBlkInput() {
    return this._informationElementBlk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipfix_template_id: cdktf.numberToTerraform(this._ipfixTemplateId),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      information_element_blk: cdktf.listMapper(netflowTemplateInformationElementBlkToTerraform, true)(this._informationElementBlk.internalValue),
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
      ipfix_template_id: {
        value: cdktf.numberToHclTerraform(this._ipfixTemplateId),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      information_element_blk: {
        value: cdktf.listMapperHcl(netflowTemplateInformationElementBlkToHclTerraform, true)(this._informationElementBlk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowTemplateInformationElementBlkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
