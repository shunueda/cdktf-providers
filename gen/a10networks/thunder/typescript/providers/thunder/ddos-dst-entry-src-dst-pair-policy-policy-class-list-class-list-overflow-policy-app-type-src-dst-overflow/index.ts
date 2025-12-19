// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClassListName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#class_list_name DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#class_list_name}
  */
  readonly classListName: string;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#dst_entry_name DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * DummyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#dummy_name DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#id DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#protocol DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#protocol}
  */
  readonly protocol: string;
  /**
  * SrcBasedPolicyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#src_based_policy_name DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#user_tag DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#uuid DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#template DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplate;
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#dns DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#http DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#sip DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#ssl_l4 DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow}
*/
export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow to import
  * @param importFromId The id of the existing DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list_class_list_overflow_policy_app_type_src_dst_overflow',
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
    this._classListName = config.classListName;
    this._dstEntryName = config.dstEntryName;
    this._dummyName = config.dummyName;
    this._id = config.id;
    this._protocol = config.protocol;
    this._srcBasedPolicyName = config.srcBasedPolicyName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplate) {
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
      class_list_name: cdktf.stringToTerraform(this._classListName),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      dummy_name: cdktf.stringToTerraform(this._dummyName),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_based_policy_name: cdktf.stringToTerraform(this._srcBasedPolicyName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      template: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_list_name: {
        value: cdktf.stringToHclTerraform(this._classListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      template: {
        value: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyAppTypeSrcDstOverflowTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
