// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetTrunkGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * LACP admin key (Admin key value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#admin_key InterfaceEthernetTrunkGroup#admin_key}
  */
  readonly adminKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#id InterfaceEthernetTrunkGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#ifnum InterfaceEthernetTrunkGroup#ifnum}
  */
  readonly ifnum: string;
  /**
  * 'active': enable initiation of LACP negotiation on a port(default); 'passive': disable initiation of LACP negotiation on a port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#mode InterfaceEthernetTrunkGroup#mode}
  */
  readonly mode?: string;
  /**
  * Set LACP priority for a port (LACP port priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#port_priority InterfaceEthernetTrunkGroup#port_priority}
  */
  readonly portPriority?: number;
  /**
  * 'long': Set LACP long timeout (default); 'short': Set LACP short timeout;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#timeout InterfaceEthernetTrunkGroup#timeout}
  */
  readonly timeout?: string;
  /**
  * Trunk Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#trunk_number InterfaceEthernetTrunkGroup#trunk_number}
  */
  readonly trunkNumber: number;
  /**
  * 'static': Static (default); 'lacp': lacp; 'lacp-udld': lacp-udld;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#type InterfaceEthernetTrunkGroup#type}
  */
  readonly type?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#user_tag InterfaceEthernetTrunkGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#uuid InterfaceEthernetTrunkGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * udld_timeout_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#udld_timeout_cfg InterfaceEthernetTrunkGroup#udld_timeout_cfg}
  */
  readonly udldTimeoutCfg?: InterfaceEthernetTrunkGroupUdldTimeoutCfg;
}
export interface InterfaceEthernetTrunkGroupUdldTimeoutCfg {
  /**
  * fast timeout in unit of milli-seconds(default 1000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#fast InterfaceEthernetTrunkGroup#fast}
  */
  readonly fast?: number;
  /**
  * slow timeout in unit of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#slow InterfaceEthernetTrunkGroup#slow}
  */
  readonly slow?: number;
}

export function interfaceEthernetTrunkGroupUdldTimeoutCfgToTerraform(struct?: InterfaceEthernetTrunkGroupUdldTimeoutCfgOutputReference | InterfaceEthernetTrunkGroupUdldTimeoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast: cdktf.numberToTerraform(struct!.fast),
    slow: cdktf.numberToTerraform(struct!.slow),
  }
}


export function interfaceEthernetTrunkGroupUdldTimeoutCfgToHclTerraform(struct?: InterfaceEthernetTrunkGroupUdldTimeoutCfgOutputReference | InterfaceEthernetTrunkGroupUdldTimeoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast: {
      value: cdktf.numberToHclTerraform(struct!.fast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow: {
      value: cdktf.numberToHclTerraform(struct!.slow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetTrunkGroupUdldTimeoutCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetTrunkGroupUdldTimeoutCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fast = this._fast;
    }
    if (this._slow !== undefined) {
      hasAnyValues = true;
      internalValueResult.slow = this._slow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetTrunkGroupUdldTimeoutCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fast = undefined;
      this._slow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fast = value.fast;
      this._slow = value.slow;
    }
  }

  // fast - computed: false, optional: true, required: false
  private _fast?: number; 
  public get fast() {
    return this.getNumberAttribute('fast');
  }
  public set fast(value: number) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
  }

  // slow - computed: false, optional: true, required: false
  private _slow?: number; 
  public get slow() {
    return this.getNumberAttribute('slow');
  }
  public set slow(value: number) {
    this._slow = value;
  }
  public resetSlow() {
    this._slow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowInput() {
    return this._slow;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group thunder_interface_ethernet_trunk_group}
*/
export class InterfaceEthernetTrunkGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet_trunk_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetTrunkGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetTrunkGroup to import
  * @param importFromId The id of the existing InterfaceEthernetTrunkGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetTrunkGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet_trunk_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_trunk_group thunder_interface_ethernet_trunk_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetTrunkGroupConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetTrunkGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet_trunk_group',
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
    this._adminKey = config.adminKey;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._mode = config.mode;
    this._portPriority = config.portPriority;
    this._timeout = config.timeout;
    this._trunkNumber = config.trunkNumber;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._udldTimeoutCfg.internalValue = config.udldTimeoutCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_key - computed: false, optional: true, required: false
  private _adminKey?: number; 
  public get adminKey() {
    return this.getNumberAttribute('admin_key');
  }
  public set adminKey(value: number) {
    this._adminKey = value;
  }
  public resetAdminKey() {
    this._adminKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKeyInput() {
    return this._adminKey;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
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

  // port_priority - computed: false, optional: true, required: false
  private _portPriority?: number; 
  public get portPriority() {
    return this.getNumberAttribute('port_priority');
  }
  public set portPriority(value: number) {
    this._portPriority = value;
  }
  public resetPortPriority() {
    this._portPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPriorityInput() {
    return this._portPriority;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // trunk_number - computed: false, optional: false, required: true
  private _trunkNumber?: number; 
  public get trunkNumber() {
    return this.getNumberAttribute('trunk_number');
  }
  public set trunkNumber(value: number) {
    this._trunkNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNumberInput() {
    return this._trunkNumber;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // udld_timeout_cfg - computed: false, optional: true, required: false
  private _udldTimeoutCfg = new InterfaceEthernetTrunkGroupUdldTimeoutCfgOutputReference(this, "udld_timeout_cfg");
  public get udldTimeoutCfg() {
    return this._udldTimeoutCfg;
  }
  public putUdldTimeoutCfg(value: InterfaceEthernetTrunkGroupUdldTimeoutCfg) {
    this._udldTimeoutCfg.internalValue = value;
  }
  public resetUdldTimeoutCfg() {
    this._udldTimeoutCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udldTimeoutCfgInput() {
    return this._udldTimeoutCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_key: cdktf.numberToTerraform(this._adminKey),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      mode: cdktf.stringToTerraform(this._mode),
      port_priority: cdktf.numberToTerraform(this._portPriority),
      timeout: cdktf.stringToTerraform(this._timeout),
      trunk_number: cdktf.numberToTerraform(this._trunkNumber),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      udld_timeout_cfg: interfaceEthernetTrunkGroupUdldTimeoutCfgToTerraform(this._udldTimeoutCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_key: {
        value: cdktf.numberToHclTerraform(this._adminKey),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_priority: {
        value: cdktf.numberToHclTerraform(this._portPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_number: {
        value: cdktf.numberToHclTerraform(this._trunkNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      udld_timeout_cfg: {
        value: interfaceEthernetTrunkGroupUdldTimeoutCfgToHclTerraform(this._udldTimeoutCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetTrunkGroupUdldTimeoutCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
