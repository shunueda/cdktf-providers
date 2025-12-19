// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstDynamicEntryOverflowPolicySrcPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * DefaultAddressType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#default_address_type DdosDstDynamicEntryOverflowPolicySrcPort#default_address_type}
  */
  readonly defaultAddressType: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#deny DdosDstDynamicEntryOverflowPolicySrcPort#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#glid DdosDstDynamicEntryOverflowPolicySrcPort#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#id DdosDstDynamicEntryOverflowPolicySrcPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#port_num DdosDstDynamicEntryOverflowPolicySrcPort#port_num}
  */
  readonly portNum: number;
  /**
  * 'udp': udp; 'tcp': tcp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#protocol DdosDstDynamicEntryOverflowPolicySrcPort#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#user_tag DdosDstDynamicEntryOverflowPolicySrcPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#uuid DdosDstDynamicEntryOverflowPolicySrcPort#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#template DdosDstDynamicEntryOverflowPolicySrcPort#template}
  */
  readonly template?: DdosDstDynamicEntryOverflowPolicySrcPortTemplate;
}
export interface DdosDstDynamicEntryOverflowPolicySrcPortTemplate {
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#src_tcp DdosDstDynamicEntryOverflowPolicySrcPort#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#src_udp DdosDstDynamicEntryOverflowPolicySrcPort#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstDynamicEntryOverflowPolicySrcPortTemplateToTerraform(struct?: DdosDstDynamicEntryOverflowPolicySrcPortTemplateOutputReference | DdosDstDynamicEntryOverflowPolicySrcPortTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstDynamicEntryOverflowPolicySrcPortTemplateToHclTerraform(struct?: DdosDstDynamicEntryOverflowPolicySrcPortTemplateOutputReference | DdosDstDynamicEntryOverflowPolicySrcPortTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryOverflowPolicySrcPortTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryOverflowPolicySrcPortTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcp = this._srcTcp;
    }
    if (this._srcUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdp = this._srcUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDynamicEntryOverflowPolicySrcPortTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcTcp = undefined;
      this._srcUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcTcp = value.srcTcp;
      this._srcUdp = value.srcUdp;
    }
  }

  // src_tcp - computed: false, optional: true, required: false
  private _srcTcp?: string; 
  public get srcTcp() {
    return this.getStringAttribute('src_tcp');
  }
  public set srcTcp(value: string) {
    this._srcTcp = value;
  }
  public resetSrcTcp() {
    this._srcTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpInput() {
    return this._srcTcp;
  }

  // src_udp - computed: false, optional: true, required: false
  private _srcUdp?: string; 
  public get srcUdp() {
    return this.getStringAttribute('src_udp');
  }
  public set srcUdp(value: string) {
    this._srcUdp = value;
  }
  public resetSrcUdp() {
    this._srcUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpInput() {
    return this._srcUdp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port thunder_ddos_dst_dynamic_entry_overflow_policy_src_port}
*/
export class DdosDstDynamicEntryOverflowPolicySrcPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_dynamic_entry_overflow_policy_src_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstDynamicEntryOverflowPolicySrcPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstDynamicEntryOverflowPolicySrcPort to import
  * @param importFromId The id of the existing DdosDstDynamicEntryOverflowPolicySrcPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstDynamicEntryOverflowPolicySrcPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_dynamic_entry_overflow_policy_src_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry_overflow_policy_src_port thunder_ddos_dst_dynamic_entry_overflow_policy_src_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstDynamicEntryOverflowPolicySrcPortConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstDynamicEntryOverflowPolicySrcPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_dynamic_entry_overflow_policy_src_port',
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
    this._defaultAddressType = config.defaultAddressType;
    this._deny = config.deny;
    this._glid = config.glid;
    this._id = config.id;
    this._portNum = config.portNum;
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

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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
  private _template = new DdosDstDynamicEntryOverflowPolicySrcPortTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstDynamicEntryOverflowPolicySrcPortTemplate) {
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
      port_num: cdktf.numberToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      template: ddosDstDynamicEntryOverflowPolicySrcPortTemplateToTerraform(this._template.internalValue),
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
      port_num: {
        value: cdktf.numberToHclTerraform(this._portNum),
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
        value: ddosDstDynamicEntryOverflowPolicySrcPortTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryOverflowPolicySrcPortTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
