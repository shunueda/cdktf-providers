// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntryIpProtoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#deny DdosDstEntryIpProto#deny}
  */
  readonly deny?: number;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#dst_entry_name DdosDstEntryIpProto#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#glid DdosDstEntryIpProto#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#id DdosDstEntryIpProto#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#ip_filtering_policy DdosDstEntryIpProto#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Protocol Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#port_num DdosDstEntryIpProto#port_num}
  */
  readonly portNum: number;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#set_counter_base_val DdosDstEntryIpProto#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#user_tag DdosDstEntryIpProto#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#uuid DdosDstEntryIpProto#uuid}
  */
  readonly uuid?: string;
  /**
  * esp_inspect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#esp_inspect DdosDstEntryIpProto#esp_inspect}
  */
  readonly espInspect?: DdosDstEntryIpProtoEspInspect;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#glid_exceed_action DdosDstEntryIpProto#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryIpProtoGlidExceedAction;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#template DdosDstEntryIpProto#template}
  */
  readonly template?: DdosDstEntryIpProtoTemplate;
}
export interface DdosDstEntryIpProtoEspInspect {
  /**
  * 'AUTH_NULL': No Integrity Check Value; 'HMAC-SHA-1-96': 96 bit Auth Algo; 'HMAC-SHA-256-96': 96 bit Auth Algo; 'HMAC-SHA-256-128': 128 bit Auth Algo; 'HMAC-SHA-384-192': 192 bit Auth Algo; 'HMAC-SHA-512-256': 256 bit Auth Algo; 'HMAC-MD5-96': 96 bit Auth Algo; 'MAC-RIPEMD-160-96': 96 bit Auth Algo;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#auth_algorithm DdosDstEntryIpProto#auth_algorithm}
  */
  readonly authAlgorithm?: string;
  /**
  * 'NULL': Null Encryption Algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#encrypt_algorithm DdosDstEntryIpProto#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * 'transport': Transport mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#mode DdosDstEntryIpProto#mode}
  */
  readonly mode?: string;
}

export function ddosDstEntryIpProtoEspInspectToTerraform(struct?: DdosDstEntryIpProtoEspInspectOutputReference | DdosDstEntryIpProtoEspInspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_algorithm: cdktf.stringToTerraform(struct!.authAlgorithm),
    encrypt_algorithm: cdktf.stringToTerraform(struct!.encryptAlgorithm),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function ddosDstEntryIpProtoEspInspectToHclTerraform(struct?: DdosDstEntryIpProtoEspInspectOutputReference | DdosDstEntryIpProtoEspInspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoEspInspectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoEspInspect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgorithm = this._authAlgorithm;
    }
    if (this._encryptAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptAlgorithm = this._encryptAlgorithm;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoEspInspect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authAlgorithm = undefined;
      this._encryptAlgorithm = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authAlgorithm = value.authAlgorithm;
      this._encryptAlgorithm = value.encryptAlgorithm;
      this._mode = value.mode;
    }
  }

  // auth_algorithm - computed: false, optional: true, required: false
  private _authAlgorithm?: string; 
  public get authAlgorithm() {
    return this.getStringAttribute('auth_algorithm');
  }
  public set authAlgorithm(value: string) {
    this._authAlgorithm = value;
  }
  public resetAuthAlgorithm() {
    this._authAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgorithmInput() {
    return this._authAlgorithm;
  }

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#encap_template DdosDstEntryIpProto#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#stateless_encap_action DdosDstEntryIpProto#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryIpProtoGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#stateless_encap_action_cfg DdosDstEntryIpProto#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryIpProtoGlidExceedActionToTerraform(struct?: DdosDstEntryIpProtoGlidExceedActionOutputReference | DdosDstEntryIpProtoGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryIpProtoGlidExceedActionToHclTerraform(struct?: DdosDstEntryIpProtoGlidExceedActionOutputReference | DdosDstEntryIpProtoGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryIpProtoGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryIpProtoTemplate {
  /**
  * DDOS other template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#other DdosDstEntryIpProto#other}
  */
  readonly other?: string;
}

export function ddosDstEntryIpProtoTemplateToTerraform(struct?: DdosDstEntryIpProtoTemplateOutputReference | DdosDstEntryIpProtoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
  }
}


export function ddosDstEntryIpProtoTemplateToHclTerraform(struct?: DdosDstEntryIpProtoTemplateOutputReference | DdosDstEntryIpProtoTemplate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryIpProtoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryIpProtoTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryIpProtoTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto thunder_ddos_dst_entry_ip_proto}
*/
export class DdosDstEntryIpProto extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_ip_proto";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntryIpProto resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntryIpProto to import
  * @param importFromId The id of the existing DdosDstEntryIpProto that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntryIpProto to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_ip_proto", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_ip_proto thunder_ddos_dst_entry_ip_proto} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntryIpProtoConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntryIpProtoConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_ip_proto',
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
    this._deny = config.deny;
    this._dstEntryName = config.dstEntryName;
    this._glid = config.glid;
    this._id = config.id;
    this._ipFilteringPolicy = config.ipFilteringPolicy;
    this._portNum = config.portNum;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._espInspect.internalValue = config.espInspect;
    this._glidExceedAction.internalValue = config.glidExceedAction;
    this._template.internalValue = config.template;
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

  // esp_inspect - computed: false, optional: true, required: false
  private _espInspect = new DdosDstEntryIpProtoEspInspectOutputReference(this, "esp_inspect");
  public get espInspect() {
    return this._espInspect;
  }
  public putEspInspect(value: DdosDstEntryIpProtoEspInspect) {
    this._espInspect.internalValue = value;
  }
  public resetEspInspect() {
    this._espInspect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInspectInput() {
    return this._espInspect.internalValue;
  }

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryIpProtoGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryIpProtoGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryIpProtoTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryIpProtoTemplate) {
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
      deny: cdktf.numberToTerraform(this._deny),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      ip_filtering_policy: cdktf.stringToTerraform(this._ipFilteringPolicy),
      port_num: cdktf.numberToTerraform(this._portNum),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      esp_inspect: ddosDstEntryIpProtoEspInspectToTerraform(this._espInspect.internalValue),
      glid_exceed_action: ddosDstEntryIpProtoGlidExceedActionToTerraform(this._glidExceedAction.internalValue),
      template: ddosDstEntryIpProtoTemplateToTerraform(this._template.internalValue),
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
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      ip_filtering_policy: {
        value: cdktf.stringToHclTerraform(this._ipFilteringPolicy),
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
      set_counter_base_val: {
        value: cdktf.numberToHclTerraform(this._setCounterBaseVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      esp_inspect: {
        value: ddosDstEntryIpProtoEspInspectToHclTerraform(this._espInspect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryIpProtoEspInspectList",
      },
      glid_exceed_action: {
        value: ddosDstEntryIpProtoGlidExceedActionToHclTerraform(this._glidExceedAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryIpProtoGlidExceedActionList",
      },
      template: {
        value: ddosDstEntryIpProtoTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryIpProtoTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
