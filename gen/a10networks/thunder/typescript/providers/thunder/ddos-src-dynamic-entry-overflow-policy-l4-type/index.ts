// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSrcDynamicEntryOverflowPolicyL4TypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * DefaultAddressType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#default_address_type DdosSrcDynamicEntryOverflowPolicyL4Type#default_address_type}
  */
  readonly defaultAddressType: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#deny DdosSrcDynamicEntryOverflowPolicyL4Type#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#glid DdosSrcDynamicEntryOverflowPolicyL4Type#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#id DdosSrcDynamicEntryOverflowPolicyL4Type#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#protocol DdosSrcDynamicEntryOverflowPolicyL4Type#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#user_tag DdosSrcDynamicEntryOverflowPolicyL4Type#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#uuid DdosSrcDynamicEntryOverflowPolicyL4Type#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#template DdosSrcDynamicEntryOverflowPolicyL4Type#template}
  */
  readonly template?: DdosSrcDynamicEntryOverflowPolicyL4TypeTemplate;
}
export interface DdosSrcDynamicEntryOverflowPolicyL4TypeTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#other DdosSrcDynamicEntryOverflowPolicyL4Type#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#tcp DdosSrcDynamicEntryOverflowPolicyL4Type#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#template_icmp_v4 DdosSrcDynamicEntryOverflowPolicyL4Type#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#template_icmp_v6 DdosSrcDynamicEntryOverflowPolicyL4Type#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#udp DdosSrcDynamicEntryOverflowPolicyL4Type#udp}
  */
  readonly udp?: string;
}

export function ddosSrcDynamicEntryOverflowPolicyL4TypeTemplateToTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyL4TypeTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyL4TypeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosSrcDynamicEntryOverflowPolicyL4TypeTemplateToHclTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyL4TypeTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyL4TypeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcDynamicEntryOverflowPolicyL4TypeTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSrcDynamicEntryOverflowPolicyL4TypeTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcDynamicEntryOverflowPolicyL4TypeTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
    }
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type thunder_ddos_src_dynamic_entry_overflow_policy_l4_type}
*/
export class DdosSrcDynamicEntryOverflowPolicyL4Type extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_dynamic_entry_overflow_policy_l4_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSrcDynamicEntryOverflowPolicyL4Type resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSrcDynamicEntryOverflowPolicyL4Type to import
  * @param importFromId The id of the existing DdosSrcDynamicEntryOverflowPolicyL4Type that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSrcDynamicEntryOverflowPolicyL4Type to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_dynamic_entry_overflow_policy_l4_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy_l4_type thunder_ddos_src_dynamic_entry_overflow_policy_l4_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSrcDynamicEntryOverflowPolicyL4TypeConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSrcDynamicEntryOverflowPolicyL4TypeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_dynamic_entry_overflow_policy_l4_type',
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
    this._defaultAddressType = config.defaultAddressType;
    this._deny = config.deny;
    this._glid = config.glid;
    this._id = config.id;
    this._protocol = config.protocol;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_address_type - computed: false, optional: false, required: true
  private _defaultAddressType?: string; 
  public get defaultAddressType() {
    return this.getStringAttribute('default_address_type');
  }
  public set defaultAddressType(value: string) {
    this._defaultAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddressTypeInput() {
    return this._defaultAddressType;
  }

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

  // template - computed: false, optional: true, required: false
  private _template = new DdosSrcDynamicEntryOverflowPolicyL4TypeTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosSrcDynamicEntryOverflowPolicyL4TypeTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_address_type: cdktf.stringToTerraform(this._defaultAddressType),
      deny: cdktf.numberToTerraform(this._deny),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      template: ddosSrcDynamicEntryOverflowPolicyL4TypeTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_address_type: {
        value: cdktf.stringToHclTerraform(this._defaultAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny: {
        value: cdktf.numberToHclTerraform(this._deny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      template: {
        value: ddosSrcDynamicEntryOverflowPolicyL4TypeTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcDynamicEntryOverflowPolicyL4TypeTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
