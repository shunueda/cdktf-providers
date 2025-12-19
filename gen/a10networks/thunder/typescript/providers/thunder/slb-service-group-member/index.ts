// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServiceGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Server hostname - Not applicable if real server is already defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#fqdn_name SlbServiceGroupMember#fqdn_name}
  */
  readonly fqdnName?: string;
  /**
  * IP Address - Not applicable if real server is already defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#host SlbServiceGroupMember#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#id SlbServiceGroupMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Priority of Port in the Group (Priority of Port in the Group, default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#member_priority SlbServiceGroupMember#member_priority}
  */
  readonly memberPriority?: number;
  /**
  * 'enable': Enable member service port; 'disable': Disable member service port; 'disable-with-health-check': disable member service port, but health check work;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#member_state SlbServiceGroupMember#member_state}
  */
  readonly memberState?: string;
  /**
  * Disable statistical data collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#member_stats_data_disable SlbServiceGroupMember#member_stats_data_disable}
  */
  readonly memberStatsDataDisable?: number;
  /**
  * Real server port template (Real server port template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#member_template SlbServiceGroupMember#member_template}
  */
  readonly memberTemplate?: string;
  /**
  * Member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#name SlbServiceGroupMember#name}
  */
  readonly name: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#port SlbServiceGroupMember#port}
  */
  readonly port: number;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve FQDN; 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN; 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#resolve_as SlbServiceGroupMember#resolve_as}
  */
  readonly resolveAs?: string;
  /**
  * IPV6 Address - Not applicable if real server is already defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#server_ipv6_addr SlbServiceGroupMember#server_ipv6_addr}
  */
  readonly serverIpv6Addr?: string;
  /**
  * Service_group_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#service_group_name SlbServiceGroupMember#service_group_name}
  */
  readonly serviceGroupName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#user_tag SlbServiceGroupMember#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#uuid SlbServiceGroupMember#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#sampling_enable SlbServiceGroupMember#sampling_enable}
  */
  readonly samplingEnable?: SlbServiceGroupMemberSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbServiceGroupMemberSamplingEnable {
  /**
  * 'all': all; 'total_fwd_bytes': Bytes processed in forward direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_rev_pkts': Packets processed in reverse direction; 'total_conn': Total established connections; 'total_rev_pkts_inspected': Total reverse packets inspected; 'total_rev_pkts_inspected_status_code_2xx': Total reverse packets inspected status code 2xx; 'total_rev_pkts_inspected_status_code_non_5xx': Total reverse packets inspected status code non 5xx; 'curr_req': Current requests; 'total_req': Total requests; 'total_req_succ': Total requests successful; 'peak_conn': Peak connections; 'response_time': Response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time; 'curr_ssl_conn': Current SSL connections; 'total_ssl_conn': Total SSL connections; 'curr_conn_overflow': Current connection counter overflow count; 'state_flaps': State flaps count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#counters1 SlbServiceGroupMember#counters1}
  */
  readonly counters1?: string;
}

export function slbServiceGroupMemberSamplingEnableToTerraform(struct?: SlbServiceGroupMemberSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbServiceGroupMemberSamplingEnableToHclTerraform(struct?: SlbServiceGroupMemberSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServiceGroupMemberSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServiceGroupMemberSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServiceGroupMemberSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbServiceGroupMemberSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbServiceGroupMemberSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbServiceGroupMemberSamplingEnableOutputReference {
    return new SlbServiceGroupMemberSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member thunder_slb_service_group_member}
*/
export class SlbServiceGroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_service_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServiceGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServiceGroupMember to import
  * @param importFromId The id of the existing SlbServiceGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServiceGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_service_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_member thunder_slb_service_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServiceGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: SlbServiceGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_service_group_member',
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
    this._fqdnName = config.fqdnName;
    this._host = config.host;
    this._id = config.id;
    this._memberPriority = config.memberPriority;
    this._memberState = config.memberState;
    this._memberStatsDataDisable = config.memberStatsDataDisable;
    this._memberTemplate = config.memberTemplate;
    this._name = config.name;
    this._port = config.port;
    this._resolveAs = config.resolveAs;
    this._serverIpv6Addr = config.serverIpv6Addr;
    this._serviceGroupName = config.serviceGroupName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn_name - computed: false, optional: true, required: false
  private _fqdnName?: string; 
  public get fqdnName() {
    return this.getStringAttribute('fqdn_name');
  }
  public set fqdnName(value: string) {
    this._fqdnName = value;
  }
  public resetFqdnName() {
    this._fqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNameInput() {
    return this._fqdnName;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // member_priority - computed: false, optional: true, required: false
  private _memberPriority?: number; 
  public get memberPriority() {
    return this.getNumberAttribute('member_priority');
  }
  public set memberPriority(value: number) {
    this._memberPriority = value;
  }
  public resetMemberPriority() {
    this._memberPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberPriorityInput() {
    return this._memberPriority;
  }

  // member_state - computed: false, optional: true, required: false
  private _memberState?: string; 
  public get memberState() {
    return this.getStringAttribute('member_state');
  }
  public set memberState(value: string) {
    this._memberState = value;
  }
  public resetMemberState() {
    this._memberState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberStateInput() {
    return this._memberState;
  }

  // member_stats_data_disable - computed: false, optional: true, required: false
  private _memberStatsDataDisable?: number; 
  public get memberStatsDataDisable() {
    return this.getNumberAttribute('member_stats_data_disable');
  }
  public set memberStatsDataDisable(value: number) {
    this._memberStatsDataDisable = value;
  }
  public resetMemberStatsDataDisable() {
    this._memberStatsDataDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberStatsDataDisableInput() {
    return this._memberStatsDataDisable;
  }

  // member_template - computed: false, optional: true, required: false
  private _memberTemplate?: string; 
  public get memberTemplate() {
    return this.getStringAttribute('member_template');
  }
  public set memberTemplate(value: string) {
    this._memberTemplate = value;
  }
  public resetMemberTemplate() {
    this._memberTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTemplateInput() {
    return this._memberTemplate;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resolve_as - computed: false, optional: true, required: false
  private _resolveAs?: string; 
  public get resolveAs() {
    return this.getStringAttribute('resolve_as');
  }
  public set resolveAs(value: string) {
    this._resolveAs = value;
  }
  public resetResolveAs() {
    this._resolveAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAsInput() {
    return this._resolveAs;
  }

  // server_ipv6_addr - computed: false, optional: true, required: false
  private _serverIpv6Addr?: string; 
  public get serverIpv6Addr() {
    return this.getStringAttribute('server_ipv6_addr');
  }
  public set serverIpv6Addr(value: string) {
    this._serverIpv6Addr = value;
  }
  public resetServerIpv6Addr() {
    this._serverIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6AddrInput() {
    return this._serverIpv6Addr;
  }

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbServiceGroupMemberSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbServiceGroupMemberSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fqdn_name: cdktf.stringToTerraform(this._fqdnName),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      member_priority: cdktf.numberToTerraform(this._memberPriority),
      member_state: cdktf.stringToTerraform(this._memberState),
      member_stats_data_disable: cdktf.numberToTerraform(this._memberStatsDataDisable),
      member_template: cdktf.stringToTerraform(this._memberTemplate),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      resolve_as: cdktf.stringToTerraform(this._resolveAs),
      server_ipv6_addr: cdktf.stringToTerraform(this._serverIpv6Addr),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbServiceGroupMemberSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fqdn_name: {
        value: cdktf.stringToHclTerraform(this._fqdnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      member_priority: {
        value: cdktf.numberToHclTerraform(this._memberPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_state: {
        value: cdktf.stringToHclTerraform(this._memberState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_stats_data_disable: {
        value: cdktf.numberToHclTerraform(this._memberStatsDataDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_template: {
        value: cdktf.stringToHclTerraform(this._memberTemplate),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_as: {
        value: cdktf.stringToHclTerraform(this._resolveAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._serverIpv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(slbServiceGroupMemberSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServiceGroupMemberSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
