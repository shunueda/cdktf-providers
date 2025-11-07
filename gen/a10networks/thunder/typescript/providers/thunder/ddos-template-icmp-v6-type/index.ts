// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateIcmpV6TypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * IcmpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#icmp_tmpl_name DdosTemplateIcmpV6Type#icmp_tmpl_name}
  */
  readonly icmpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#id DdosTemplateIcmpV6Type#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reject this ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#type_deny DdosTemplateIcmpV6Type#type_deny}
  */
  readonly typeDeny?: number;
  /**
  * Specify ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#type_number DdosTemplateIcmpV6Type#type_number}
  */
  readonly typeNumber: number;
  /**
  * Specify the whole rate with this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#type_rate DdosTemplateIcmpV6Type#type_rate}
  */
  readonly typeRate?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#user_tag DdosTemplateIcmpV6Type#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#uuid DdosTemplateIcmpV6Type#uuid}
  */
  readonly uuid?: string;
  /**
  * code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#code DdosTemplateIcmpV6Type#code}
  */
  readonly code?: DdosTemplateIcmpV6TypeCode[] | cdktf.IResolvable;
  /**
  * code_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#code_other DdosTemplateIcmpV6Type#code_other}
  */
  readonly codeOther?: DdosTemplateIcmpV6TypeCodeOther;
}
export interface DdosTemplateIcmpV6TypeCode {
  /**
  * Specify the ICMP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#code_number DdosTemplateIcmpV6Type#code_number}
  */
  readonly codeNumber?: number;
  /**
  * Specify the rate with the code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#code_rate DdosTemplateIcmpV6Type#code_rate}
  */
  readonly codeRate?: number;
}

export function ddosTemplateIcmpV6TypeCodeToTerraform(struct?: DdosTemplateIcmpV6TypeCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_number: cdktf.numberToTerraform(struct!.codeNumber),
    code_rate: cdktf.numberToTerraform(struct!.codeRate),
  }
}


export function ddosTemplateIcmpV6TypeCodeToHclTerraform(struct?: DdosTemplateIcmpV6TypeCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_number: {
      value: cdktf.numberToHclTerraform(struct!.codeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_rate: {
      value: cdktf.numberToHclTerraform(struct!.codeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateIcmpV6TypeCodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateIcmpV6TypeCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeNumber = this._codeNumber;
    }
    if (this._codeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRate = this._codeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateIcmpV6TypeCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeNumber = undefined;
      this._codeRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeNumber = value.codeNumber;
      this._codeRate = value.codeRate;
    }
  }

  // code_number - computed: false, optional: true, required: false
  private _codeNumber?: number; 
  public get codeNumber() {
    return this.getNumberAttribute('code_number');
  }
  public set codeNumber(value: number) {
    this._codeNumber = value;
  }
  public resetCodeNumber() {
    this._codeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeNumberInput() {
    return this._codeNumber;
  }

  // code_rate - computed: false, optional: true, required: false
  private _codeRate?: number; 
  public get codeRate() {
    return this.getNumberAttribute('code_rate');
  }
  public set codeRate(value: number) {
    this._codeRate = value;
  }
  public resetCodeRate() {
    this._codeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRateInput() {
    return this._codeRate;
  }
}

export class DdosTemplateIcmpV6TypeCodeList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateIcmpV6TypeCode[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateIcmpV6TypeCodeOutputReference {
    return new DdosTemplateIcmpV6TypeCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateIcmpV6TypeCodeOther {
  /**
  * Specify rate with other code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#code_other_rate DdosTemplateIcmpV6Type#code_other_rate}
  */
  readonly codeOtherRate?: number;
}

export function ddosTemplateIcmpV6TypeCodeOtherToTerraform(struct?: DdosTemplateIcmpV6TypeCodeOtherOutputReference | DdosTemplateIcmpV6TypeCodeOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_other_rate: cdktf.numberToTerraform(struct!.codeOtherRate),
  }
}


export function ddosTemplateIcmpV6TypeCodeOtherToHclTerraform(struct?: DdosTemplateIcmpV6TypeCodeOtherOutputReference | DdosTemplateIcmpV6TypeCodeOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.codeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateIcmpV6TypeCodeOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateIcmpV6TypeCodeOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeOtherRate = this._codeOtherRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateIcmpV6TypeCodeOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeOtherRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeOtherRate = value.codeOtherRate;
    }
  }

  // code_other_rate - computed: false, optional: true, required: false
  private _codeOtherRate?: number; 
  public get codeOtherRate() {
    return this.getNumberAttribute('code_other_rate');
  }
  public set codeOtherRate(value: number) {
    this._codeOtherRate = value;
  }
  public resetCodeOtherRate() {
    this._codeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeOtherRateInput() {
    return this._codeOtherRate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type thunder_ddos_template_icmp_v6_type}
*/
export class DdosTemplateIcmpV6Type extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_icmp_v6_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateIcmpV6Type resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateIcmpV6Type to import
  * @param importFromId The id of the existing DdosTemplateIcmpV6Type that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateIcmpV6Type to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_icmp_v6_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6_type thunder_ddos_template_icmp_v6_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateIcmpV6TypeConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateIcmpV6TypeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_icmp_v6_type',
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
    this._id = config.id;
    this._typeDeny = config.typeDeny;
    this._typeNumber = config.typeNumber;
    this._typeRate = config.typeRate;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._code.internalValue = config.code;
    this._codeOther.internalValue = config.codeOther;
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

  // type_deny - computed: false, optional: true, required: false
  private _typeDeny?: number; 
  public get typeDeny() {
    return this.getNumberAttribute('type_deny');
  }
  public set typeDeny(value: number) {
    this._typeDeny = value;
  }
  public resetTypeDeny() {
    this._typeDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDenyInput() {
    return this._typeDeny;
  }

  // type_number - computed: false, optional: false, required: true
  private _typeNumber?: number; 
  public get typeNumber() {
    return this.getNumberAttribute('type_number');
  }
  public set typeNumber(value: number) {
    this._typeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNumberInput() {
    return this._typeNumber;
  }

  // type_rate - computed: false, optional: true, required: false
  private _typeRate?: number; 
  public get typeRate() {
    return this.getNumberAttribute('type_rate');
  }
  public set typeRate(value: number) {
    this._typeRate = value;
  }
  public resetTypeRate() {
    this._typeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeRateInput() {
    return this._typeRate;
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

  // code - computed: false, optional: true, required: false
  private _code = new DdosTemplateIcmpV6TypeCodeList(this, "code", false);
  public get code() {
    return this._code;
  }
  public putCode(value: DdosTemplateIcmpV6TypeCode[] | cdktf.IResolvable) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // code_other - computed: false, optional: true, required: false
  private _codeOther = new DdosTemplateIcmpV6TypeCodeOtherOutputReference(this, "code_other");
  public get codeOther() {
    return this._codeOther;
  }
  public putCodeOther(value: DdosTemplateIcmpV6TypeCodeOther) {
    this._codeOther.internalValue = value;
  }
  public resetCodeOther() {
    this._codeOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeOtherInput() {
    return this._codeOther.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmp_tmpl_name: cdktf.stringToTerraform(this._icmpTmplName),
      id: cdktf.stringToTerraform(this._id),
      type_deny: cdktf.numberToTerraform(this._typeDeny),
      type_number: cdktf.numberToTerraform(this._typeNumber),
      type_rate: cdktf.numberToTerraform(this._typeRate),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      code: cdktf.listMapper(ddosTemplateIcmpV6TypeCodeToTerraform, true)(this._code.internalValue),
      code_other: ddosTemplateIcmpV6TypeCodeOtherToTerraform(this._codeOther.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_deny: {
        value: cdktf.numberToHclTerraform(this._typeDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_number: {
        value: cdktf.numberToHclTerraform(this._typeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_rate: {
        value: cdktf.numberToHclTerraform(this._typeRate),
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
      code: {
        value: cdktf.listMapperHcl(ddosTemplateIcmpV6TypeCodeToHclTerraform, true)(this._code.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateIcmpV6TypeCodeList",
      },
      code_other: {
        value: ddosTemplateIcmpV6TypeCodeOtherToHclTerraform(this._codeOther.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateIcmpV6TypeCodeOtherList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
