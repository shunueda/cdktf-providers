// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateIcmpV6TypeOtherAConfig extends cdktf.TerraformMetaArguments {
  /**
  * IcmpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#icmp_tmpl_name DdosZoneTemplateIcmpV6TypeOtherA#icmp_tmpl_name}
  */
  readonly icmpTmplName: string;
  /**
  * 'drop': Reject wildcard ICMP type; 'blacklist-src': Blacklist-src wildcard ICMP type; 'ignore': Ignore wildcard ICMP type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#icmp_type_other_action DdosZoneTemplateIcmpV6TypeOtherA#icmp_type_other_action}
  */
  readonly icmpTypeOtherAction?: string;
  /**
  * Configure action-list to take for wildcard ICMP match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#icmp_type_other_action_list_name DdosZoneTemplateIcmpV6TypeOtherA#icmp_type_other_action_list_name}
  */
  readonly icmpTypeOtherActionListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#id DdosZoneTemplateIcmpV6TypeOtherA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#uuid DdosZoneTemplateIcmpV6TypeOtherA#uuid}
  */
  readonly uuid?: string;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#dst DdosZoneTemplateIcmpV6TypeOtherA#dst}
  */
  readonly dst?: DdosZoneTemplateIcmpV6TypeOtherDstA;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#src DdosZoneTemplateIcmpV6TypeOtherA#src}
  */
  readonly src?: DdosZoneTemplateIcmpV6TypeOtherSrcA;
}
export interface DdosZoneTemplateIcmpV6TypeOtherDstA {
  /**
  * Specify the whole dst rate for wildcard ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#dst_type_other_rate DdosZoneTemplateIcmpV6TypeOtherA#dst_type_other_rate}
  */
  readonly dstTypeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#dst_type_other_rate_action DdosZoneTemplateIcmpV6TypeOtherA#dst_type_other_rate_action}
  */
  readonly dstTypeOtherRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#dst_type_other_rate_action_list_name DdosZoneTemplateIcmpV6TypeOtherA#dst_type_other_rate_action_list_name}
  */
  readonly dstTypeOtherRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeOtherDstAToTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherDstAOutputReference | DdosZoneTemplateIcmpV6TypeOtherDstA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_type_other_rate: cdktf.numberToTerraform(struct!.dstTypeOtherRate),
    dst_type_other_rate_action: cdktf.stringToTerraform(struct!.dstTypeOtherRateAction),
    dst_type_other_rate_action_list_name: cdktf.stringToTerraform(struct!.dstTypeOtherRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV6TypeOtherDstAToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherDstAOutputReference | DdosZoneTemplateIcmpV6TypeOtherDstA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_type_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstTypeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_type_other_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.dstTypeOtherRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_type_other_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstTypeOtherRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV6TypeOtherDstAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV6TypeOtherDstA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstTypeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeOtherRate = this._dstTypeOtherRate;
    }
    if (this._dstTypeOtherRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeOtherRateAction = this._dstTypeOtherRateAction;
    }
    if (this._dstTypeOtherRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeOtherRateActionListName = this._dstTypeOtherRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeOtherDstA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstTypeOtherRate = undefined;
      this._dstTypeOtherRateAction = undefined;
      this._dstTypeOtherRateActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstTypeOtherRate = value.dstTypeOtherRate;
      this._dstTypeOtherRateAction = value.dstTypeOtherRateAction;
      this._dstTypeOtherRateActionListName = value.dstTypeOtherRateActionListName;
    }
  }

  // dst_type_other_rate - computed: false, optional: true, required: false
  private _dstTypeOtherRate?: number; 
  public get dstTypeOtherRate() {
    return this.getNumberAttribute('dst_type_other_rate');
  }
  public set dstTypeOtherRate(value: number) {
    this._dstTypeOtherRate = value;
  }
  public resetDstTypeOtherRate() {
    this._dstTypeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeOtherRateInput() {
    return this._dstTypeOtherRate;
  }

  // dst_type_other_rate_action - computed: false, optional: true, required: false
  private _dstTypeOtherRateAction?: string; 
  public get dstTypeOtherRateAction() {
    return this.getStringAttribute('dst_type_other_rate_action');
  }
  public set dstTypeOtherRateAction(value: string) {
    this._dstTypeOtherRateAction = value;
  }
  public resetDstTypeOtherRateAction() {
    this._dstTypeOtherRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeOtherRateActionInput() {
    return this._dstTypeOtherRateAction;
  }

  // dst_type_other_rate_action_list_name - computed: false, optional: true, required: false
  private _dstTypeOtherRateActionListName?: string; 
  public get dstTypeOtherRateActionListName() {
    return this.getStringAttribute('dst_type_other_rate_action_list_name');
  }
  public set dstTypeOtherRateActionListName(value: string) {
    this._dstTypeOtherRateActionListName = value;
  }
  public resetDstTypeOtherRateActionListName() {
    this._dstTypeOtherRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeOtherRateActionListNameInput() {
    return this._dstTypeOtherRateActionListName;
  }
}
export interface DdosZoneTemplateIcmpV6TypeOtherSrcA {
  /**
  * Specify the whole src rate for wildcard ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#src_type_other_rate DdosZoneTemplateIcmpV6TypeOtherA#src_type_other_rate}
  */
  readonly srcTypeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#src_type_other_rate_action DdosZoneTemplateIcmpV6TypeOtherA#src_type_other_rate_action}
  */
  readonly srcTypeOtherRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#src_type_other_rate_action_list_name DdosZoneTemplateIcmpV6TypeOtherA#src_type_other_rate_action_list_name}
  */
  readonly srcTypeOtherRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeOtherSrcAToTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherSrcAOutputReference | DdosZoneTemplateIcmpV6TypeOtherSrcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_type_other_rate: cdktf.numberToTerraform(struct!.srcTypeOtherRate),
    src_type_other_rate_action: cdktf.stringToTerraform(struct!.srcTypeOtherRateAction),
    src_type_other_rate_action_list_name: cdktf.stringToTerraform(struct!.srcTypeOtherRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV6TypeOtherSrcAToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherSrcAOutputReference | DdosZoneTemplateIcmpV6TypeOtherSrcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_type_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcTypeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_type_other_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.srcTypeOtherRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_type_other_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcTypeOtherRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV6TypeOtherSrcAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV6TypeOtherSrcA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcTypeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeOtherRate = this._srcTypeOtherRate;
    }
    if (this._srcTypeOtherRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeOtherRateAction = this._srcTypeOtherRateAction;
    }
    if (this._srcTypeOtherRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeOtherRateActionListName = this._srcTypeOtherRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeOtherSrcA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcTypeOtherRate = undefined;
      this._srcTypeOtherRateAction = undefined;
      this._srcTypeOtherRateActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcTypeOtherRate = value.srcTypeOtherRate;
      this._srcTypeOtherRateAction = value.srcTypeOtherRateAction;
      this._srcTypeOtherRateActionListName = value.srcTypeOtherRateActionListName;
    }
  }

  // src_type_other_rate - computed: false, optional: true, required: false
  private _srcTypeOtherRate?: number; 
  public get srcTypeOtherRate() {
    return this.getNumberAttribute('src_type_other_rate');
  }
  public set srcTypeOtherRate(value: number) {
    this._srcTypeOtherRate = value;
  }
  public resetSrcTypeOtherRate() {
    this._srcTypeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeOtherRateInput() {
    return this._srcTypeOtherRate;
  }

  // src_type_other_rate_action - computed: false, optional: true, required: false
  private _srcTypeOtherRateAction?: string; 
  public get srcTypeOtherRateAction() {
    return this.getStringAttribute('src_type_other_rate_action');
  }
  public set srcTypeOtherRateAction(value: string) {
    this._srcTypeOtherRateAction = value;
  }
  public resetSrcTypeOtherRateAction() {
    this._srcTypeOtherRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeOtherRateActionInput() {
    return this._srcTypeOtherRateAction;
  }

  // src_type_other_rate_action_list_name - computed: false, optional: true, required: false
  private _srcTypeOtherRateActionListName?: string; 
  public get srcTypeOtherRateActionListName() {
    return this.getStringAttribute('src_type_other_rate_action_list_name');
  }
  public set srcTypeOtherRateActionListName(value: string) {
    this._srcTypeOtherRateActionListName = value;
  }
  public resetSrcTypeOtherRateActionListName() {
    this._srcTypeOtherRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeOtherRateActionListNameInput() {
    return this._srcTypeOtherRateActionListName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other thunder_ddos_zone_template_icmp_v6_type_other}
*/
export class DdosZoneTemplateIcmpV6TypeOtherA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_icmp_v6_type_other";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateIcmpV6TypeOtherA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateIcmpV6TypeOtherA to import
  * @param importFromId The id of the existing DdosZoneTemplateIcmpV6TypeOtherA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateIcmpV6TypeOtherA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_icmp_v6_type_other", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6_type_other thunder_ddos_zone_template_icmp_v6_type_other} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateIcmpV6TypeOtherAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateIcmpV6TypeOtherAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_icmp_v6_type_other',
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
    this._icmpTmplName = config.icmpTmplName;
    this._icmpTypeOtherAction = config.icmpTypeOtherAction;
    this._icmpTypeOtherActionListName = config.icmpTypeOtherActionListName;
    this._id = config.id;
    this._uuid = config.uuid;
    this._dst.internalValue = config.dst;
    this._src.internalValue = config.src;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmp_tmpl_name - computed: false, optional: false, required: true
  private _icmpTmplName?: string; 
  public get icmpTmplName() {
    return this.getStringAttribute('icmp_tmpl_name');
  }
  public set icmpTmplName(value: string) {
    this._icmpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTmplNameInput() {
    return this._icmpTmplName;
  }

  // icmp_type_other_action - computed: false, optional: true, required: false
  private _icmpTypeOtherAction?: string; 
  public get icmpTypeOtherAction() {
    return this.getStringAttribute('icmp_type_other_action');
  }
  public set icmpTypeOtherAction(value: string) {
    this._icmpTypeOtherAction = value;
  }
  public resetIcmpTypeOtherAction() {
    this._icmpTypeOtherAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeOtherActionInput() {
    return this._icmpTypeOtherAction;
  }

  // icmp_type_other_action_list_name - computed: false, optional: true, required: false
  private _icmpTypeOtherActionListName?: string; 
  public get icmpTypeOtherActionListName() {
    return this.getStringAttribute('icmp_type_other_action_list_name');
  }
  public set icmpTypeOtherActionListName(value: string) {
    this._icmpTypeOtherActionListName = value;
  }
  public resetIcmpTypeOtherActionListName() {
    this._icmpTypeOtherActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeOtherActionListNameInput() {
    return this._icmpTypeOtherActionListName;
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

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateIcmpV6TypeOtherDstAOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateIcmpV6TypeOtherDstA) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosZoneTemplateIcmpV6TypeOtherSrcAOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosZoneTemplateIcmpV6TypeOtherSrcA) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmp_tmpl_name: cdktf.stringToTerraform(this._icmpTmplName),
      icmp_type_other_action: cdktf.stringToTerraform(this._icmpTypeOtherAction),
      icmp_type_other_action_list_name: cdktf.stringToTerraform(this._icmpTypeOtherActionListName),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      dst: ddosZoneTemplateIcmpV6TypeOtherDstAToTerraform(this._dst.internalValue),
      src: ddosZoneTemplateIcmpV6TypeOtherSrcAToTerraform(this._src.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._icmpTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_type_other_action: {
        value: cdktf.stringToHclTerraform(this._icmpTypeOtherAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_type_other_action_list_name: {
        value: cdktf.stringToHclTerraform(this._icmpTypeOtherActionListName),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst: {
        value: ddosZoneTemplateIcmpV6TypeOtherDstAToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV6TypeOtherDstAList",
      },
      src: {
        value: ddosZoneTemplateIcmpV6TypeOtherSrcAToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV6TypeOtherSrcAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
