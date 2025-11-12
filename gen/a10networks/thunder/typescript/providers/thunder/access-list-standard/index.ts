// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessListStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#id AccessListStandard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP standard access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#std AccessListStandard#std}
  */
  readonly std: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#uuid AccessListStandard#uuid}
  */
  readonly uuid?: string;
  /**
  * stdrules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#stdrules AccessListStandard#stdrules}
  */
  readonly stdrules?: AccessListStandardStdrules[] | cdktf.IResolvable;
}
export interface AccessListStandardStdrules {
  /**
  * 'deny': Deny; 'permit': Permit; 'l3-vlan-fwd-disable': Disable L3 forwarding between VLANs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#action AccessListStandard#action}
  */
  readonly action?: string;
  /**
  * Any source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#any AccessListStandard#any}
  */
  readonly any?: number;
  /**
  * A single source host (Host address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#host AccessListStandard#host}
  */
  readonly host?: string;
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#log AccessListStandard#log}
  */
  readonly log?: number;
  /**
  * Network Mask 0=apply 255=ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#rev_subnet_mask AccessListStandard#rev_subnet_mask}
  */
  readonly revSubnetMask?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#seq_num AccessListStandard#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Access list entry comment (Notes for this ACL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#std_remark AccessListStandard#std_remark}
  */
  readonly stdRemark?: string;
  /**
  * Source Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#subnet AccessListStandard#subnet}
  */
  readonly subnet?: string;
  /**
  * Only log transparent sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#transparent_session_only AccessListStandard#transparent_session_only}
  */
  readonly transparentSessionOnly?: number;
}

export function accessListStandardStdrulesToTerraform(struct?: AccessListStandardStdrules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    any: cdktf.numberToTerraform(struct!.any),
    host: cdktf.stringToTerraform(struct!.host),
    log: cdktf.numberToTerraform(struct!.log),
    rev_subnet_mask: cdktf.stringToTerraform(struct!.revSubnetMask),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    std_remark: cdktf.stringToTerraform(struct!.stdRemark),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    transparent_session_only: cdktf.numberToTerraform(struct!.transparentSessionOnly),
  }
}


export function accessListStandardStdrulesToHclTerraform(struct?: AccessListStandardStdrules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any: {
      value: cdktf.numberToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.revSubnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    std_remark: {
      value: cdktf.stringToHclTerraform(struct!.stdRemark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_session_only: {
      value: cdktf.numberToHclTerraform(struct!.transparentSessionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessListStandardStdrulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessListStandardStdrules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._revSubnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSubnetMask = this._revSubnetMask;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._stdRemark !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdRemark = this._stdRemark;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._transparentSessionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentSessionOnly = this._transparentSessionOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessListStandardStdrules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._any = undefined;
      this._host = undefined;
      this._log = undefined;
      this._revSubnetMask = undefined;
      this._seqNum = undefined;
      this._stdRemark = undefined;
      this._subnet = undefined;
      this._transparentSessionOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._any = value.any;
      this._host = value.host;
      this._log = value.log;
      this._revSubnetMask = value.revSubnetMask;
      this._seqNum = value.seqNum;
      this._stdRemark = value.stdRemark;
      this._subnet = value.subnet;
      this._transparentSessionOnly = value.transparentSessionOnly;
    }
  }

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

  // any - computed: false, optional: true, required: false
  private _any?: number; 
  public get any() {
    return this.getNumberAttribute('any');
  }
  public set any(value: number) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
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

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // rev_subnet_mask - computed: false, optional: true, required: false
  private _revSubnetMask?: string; 
  public get revSubnetMask() {
    return this.getStringAttribute('rev_subnet_mask');
  }
  public set revSubnetMask(value: string) {
    this._revSubnetMask = value;
  }
  public resetRevSubnetMask() {
    this._revSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSubnetMaskInput() {
    return this._revSubnetMask;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // std_remark - computed: false, optional: true, required: false
  private _stdRemark?: string; 
  public get stdRemark() {
    return this.getStringAttribute('std_remark');
  }
  public set stdRemark(value: string) {
    this._stdRemark = value;
  }
  public resetStdRemark() {
    this._stdRemark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdRemarkInput() {
    return this._stdRemark;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // transparent_session_only - computed: false, optional: true, required: false
  private _transparentSessionOnly?: number; 
  public get transparentSessionOnly() {
    return this.getNumberAttribute('transparent_session_only');
  }
  public set transparentSessionOnly(value: number) {
    this._transparentSessionOnly = value;
  }
  public resetTransparentSessionOnly() {
    this._transparentSessionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentSessionOnlyInput() {
    return this._transparentSessionOnly;
  }
}

export class AccessListStandardStdrulesList extends cdktf.ComplexList {
  public internalValue? : AccessListStandardStdrules[] | cdktf.IResolvable

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
  public get(index: number): AccessListStandardStdrulesOutputReference {
    return new AccessListStandardStdrulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard thunder_access_list_standard}
*/
export class AccessListStandard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_access_list_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessListStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessListStandard to import
  * @param importFromId The id of the existing AccessListStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessListStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_access_list_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_standard thunder_access_list_standard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessListStandardConfig
  */
  public constructor(scope: Construct, id: string, config: AccessListStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_access_list_standard',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._std = config.std;
    this._uuid = config.uuid;
    this._stdrules.internalValue = config.stdrules;
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

  // std - computed: false, optional: false, required: true
  private _std?: number; 
  public get std() {
    return this.getNumberAttribute('std');
  }
  public set std(value: number) {
    this._std = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stdInput() {
    return this._std;
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

  // stdrules - computed: false, optional: true, required: false
  private _stdrules = new AccessListStandardStdrulesList(this, "stdrules", false);
  public get stdrules() {
    return this._stdrules;
  }
  public putStdrules(value: AccessListStandardStdrules[] | cdktf.IResolvable) {
    this._stdrules.internalValue = value;
  }
  public resetStdrules() {
    this._stdrules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdrulesInput() {
    return this._stdrules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      std: cdktf.numberToTerraform(this._std),
      uuid: cdktf.stringToTerraform(this._uuid),
      stdrules: cdktf.listMapper(accessListStandardStdrulesToTerraform, true)(this._stdrules.internalValue),
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
      std: {
        value: cdktf.numberToHclTerraform(this._std),
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
      stdrules: {
        value: cdktf.listMapperHcl(accessListStandardStdrulesToHclTerraform, true)(this._stdrules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessListStandardStdrulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
