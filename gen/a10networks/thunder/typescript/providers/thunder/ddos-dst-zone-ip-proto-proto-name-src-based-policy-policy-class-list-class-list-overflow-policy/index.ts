// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#action DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#action}
  */
  readonly action?: string;
  /**
  * ClassListName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#class_list_name DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#class_list_name}
  */
  readonly classListName: string;
  /**
  * 'configuration': Configure overflow policy for class-list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#dummy_name DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#glid DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#id DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#log_enable DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#log_periodic DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#protocol DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * SrcBasedPolicyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#src_based_policy_name DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#user_tag DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#uuid DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#zone_name DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#zone_name}
  */
  readonly zoneName: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#zone_template DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplate;
}
export interface DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplate {
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#encap DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#encap}
  */
  readonly encap?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#icmp_v4 DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#icmp_v4}
  */
  readonly icmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#icmp_v6 DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#icmp_v6}
  */
  readonly icmpV6?: string;
  /**
  * DDOS ip-proto template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#ip_proto DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy#ip_proto}
  */
  readonly ipProto?: string;
}

export function ddosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateToTerraform(struct?: DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap: cdktf.stringToTerraform(struct!.encap),
    icmp_v4: cdktf.stringToTerraform(struct!.icmpV4),
    icmp_v6: cdktf.stringToTerraform(struct!.icmpV6),
    ip_proto: cdktf.stringToTerraform(struct!.ipProto),
  }
}


export function ddosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateToHclTerraform(struct?: DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.icmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.icmpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_proto: {
      value: cdktf.stringToHclTerraform(struct!.ipProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._icmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV4 = this._icmpV4;
    }
    if (this._icmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV6 = this._icmpV6;
    }
    if (this._ipProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProto = this._ipProto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encap = undefined;
      this._icmpV4 = undefined;
      this._icmpV6 = undefined;
      this._ipProto = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encap = value.encap;
      this._icmpV4 = value.icmpV4;
      this._icmpV6 = value.icmpV6;
      this._ipProto = value.ipProto;
    }
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // icmp_v4 - computed: false, optional: true, required: false
  private _icmpV4?: string; 
  public get icmpV4() {
    return this.getStringAttribute('icmp_v4');
  }
  public set icmpV4(value: string) {
    this._icmpV4 = value;
  }
  public resetIcmpV4() {
    this._icmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV4Input() {
    return this._icmpV4;
  }

  // icmp_v6 - computed: false, optional: true, required: false
  private _icmpV6?: string; 
  public get icmpV6() {
    return this.getStringAttribute('icmp_v6');
  }
  public set icmpV6(value: string) {
    this._icmpV6 = value;
  }
  public resetIcmpV6() {
    this._icmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV6Input() {
    return this._icmpV6;
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto?: string; 
  public get ipProto() {
    return this.getStringAttribute('ip_proto');
  }
  public set ipProto(value: string) {
    this._ipProto = value;
  }
  public resetIpProto() {
    this._ipProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy thunder_ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy}
*/
export class DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy to import
  * @param importFromId The id of the existing DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy thunder_ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_name_src_based_policy_policy_class_list_class_list_overflow_policy',
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
    this._action = config.action;
    this._classListName = config.classListName;
    this._dummyName = config.dummyName;
    this._glid = config.glid;
    this._id = config.id;
    this._logEnable = config.logEnable;
    this._logPeriodic = config.logPeriodic;
    this._protocol = config.protocol;
    this._srcBasedPolicyName = config.srcBasedPolicyName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._zoneTemplate.internalValue = config.zoneTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // class_list_name - computed: false, optional: false, required: true
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
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

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
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

  // src_based_policy_name - computed: false, optional: false, required: true
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
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

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      class_list_name: cdktf.stringToTerraform(this._classListName),
      dummy_name: cdktf.stringToTerraform(this._dummyName),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      log_enable: cdktf.numberToTerraform(this._logEnable),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_based_policy_name: cdktf.stringToTerraform(this._srcBasedPolicyName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      zone_template: ddosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateToTerraform(this._zoneTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_list_name: {
        value: cdktf.stringToHclTerraform(this._classListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dummy_name: {
        value: cdktf.stringToHclTerraform(this._dummyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glid: {
        value: cdktf.stringToHclTerraform(this._glid),
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
      log_enable: {
        value: cdktf.numberToHclTerraform(this._logEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_periodic: {
        value: cdktf.numberToHclTerraform(this._logPeriodic),
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
      src_based_policy_name: {
        value: cdktf.stringToHclTerraform(this._srcBasedPolicyName),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_template: {
        value: ddosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateToHclTerraform(this._zoneTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpProtoProtoNameSrcBasedPolicyPolicyClassListClassListOverflowPolicyZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
