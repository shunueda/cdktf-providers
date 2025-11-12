// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateIcmpV6Config extends cdktf.TerraformMetaArguments {
  /**
  * DDOS ICMPv6 Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#icmp_tmpl_name DdosTemplateIcmpV6#icmp_tmpl_name}
  */
  readonly icmpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#id DdosTemplateIcmpV6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#user_tag DdosTemplateIcmpV6#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#uuid DdosTemplateIcmpV6#uuid}
  */
  readonly uuid?: string;
  /**
  * type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#type_list DdosTemplateIcmpV6#type_list}
  */
  readonly typeList?: DdosTemplateIcmpV6TypeListStruct[] | cdktf.IResolvable;
  /**
  * type_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#type_other DdosTemplateIcmpV6#type_other}
  */
  readonly typeOther?: DdosTemplateIcmpV6TypeOther;
}
export interface DdosTemplateIcmpV6TypeListCode {
  /**
  * Specify the ICMP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#code_number DdosTemplateIcmpV6#code_number}
  */
  readonly codeNumber?: number;
  /**
  * Specify the rate with the code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#code_rate DdosTemplateIcmpV6#code_rate}
  */
  readonly codeRate?: number;
}

export function ddosTemplateIcmpV6TypeListCodeToTerraform(struct?: DdosTemplateIcmpV6TypeListCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_number: cdktf.numberToTerraform(struct!.codeNumber),
    code_rate: cdktf.numberToTerraform(struct!.codeRate),
  }
}


export function ddosTemplateIcmpV6TypeListCodeToHclTerraform(struct?: DdosTemplateIcmpV6TypeListCode | cdktf.IResolvable): any {
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

export class DdosTemplateIcmpV6TypeListCodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateIcmpV6TypeListCode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosTemplateIcmpV6TypeListCode | cdktf.IResolvable | undefined) {
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

export class DdosTemplateIcmpV6TypeListCodeList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateIcmpV6TypeListCode[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateIcmpV6TypeListCodeOutputReference {
    return new DdosTemplateIcmpV6TypeListCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateIcmpV6TypeListCodeOther {
  /**
  * Specify rate with other code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#code_other_rate DdosTemplateIcmpV6#code_other_rate}
  */
  readonly codeOtherRate?: number;
}

export function ddosTemplateIcmpV6TypeListCodeOtherToTerraform(struct?: DdosTemplateIcmpV6TypeListCodeOtherOutputReference | DdosTemplateIcmpV6TypeListCodeOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_other_rate: cdktf.numberToTerraform(struct!.codeOtherRate),
  }
}


export function ddosTemplateIcmpV6TypeListCodeOtherToHclTerraform(struct?: DdosTemplateIcmpV6TypeListCodeOtherOutputReference | DdosTemplateIcmpV6TypeListCodeOther): any {
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

export class DdosTemplateIcmpV6TypeListCodeOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateIcmpV6TypeListCodeOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeOtherRate = this._codeOtherRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateIcmpV6TypeListCodeOther | undefined) {
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
export interface DdosTemplateIcmpV6TypeListStruct {
  /**
  * Reject this ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#type_deny DdosTemplateIcmpV6#type_deny}
  */
  readonly typeDeny?: number;
  /**
  * Specify ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#type_number DdosTemplateIcmpV6#type_number}
  */
  readonly typeNumber: number;
  /**
  * Specify the whole rate with this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#type_rate DdosTemplateIcmpV6#type_rate}
  */
  readonly typeRate?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#user_tag DdosTemplateIcmpV6#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#uuid DdosTemplateIcmpV6#uuid}
  */
  readonly uuid?: string;
  /**
  * code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#code DdosTemplateIcmpV6#code}
  */
  readonly code?: DdosTemplateIcmpV6TypeListCode[] | cdktf.IResolvable;
  /**
  * code_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#code_other DdosTemplateIcmpV6#code_other}
  */
  readonly codeOther?: DdosTemplateIcmpV6TypeListCodeOther;
}

export function ddosTemplateIcmpV6TypeListStructToTerraform(struct?: DdosTemplateIcmpV6TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_deny: cdktf.numberToTerraform(struct!.typeDeny),
    type_number: cdktf.numberToTerraform(struct!.typeNumber),
    type_rate: cdktf.numberToTerraform(struct!.typeRate),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    code: cdktf.listMapper(ddosTemplateIcmpV6TypeListCodeToTerraform, true)(struct!.code),
    code_other: ddosTemplateIcmpV6TypeListCodeOtherToTerraform(struct!.codeOther),
  }
}


export function ddosTemplateIcmpV6TypeListStructToHclTerraform(struct?: DdosTemplateIcmpV6TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_deny: {
      value: cdktf.numberToHclTerraform(struct!.typeDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_number: {
      value: cdktf.numberToHclTerraform(struct!.typeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_rate: {
      value: cdktf.numberToHclTerraform(struct!.typeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.listMapperHcl(ddosTemplateIcmpV6TypeListCodeToHclTerraform, true)(struct!.code),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateIcmpV6TypeListCodeList",
    },
    code_other: {
      value: ddosTemplateIcmpV6TypeListCodeOtherToHclTerraform(struct!.codeOther),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateIcmpV6TypeListCodeOtherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateIcmpV6TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateIcmpV6TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeDeny = this._typeDeny;
    }
    if (this._typeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeNumber = this._typeNumber;
    }
    if (this._typeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeRate = this._typeRate;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._code?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code?.internalValue;
    }
    if (this._codeOther?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeOther = this._codeOther?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateIcmpV6TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._typeDeny = undefined;
      this._typeNumber = undefined;
      this._typeRate = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._code.internalValue = undefined;
      this._codeOther.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._typeDeny = value.typeDeny;
      this._typeNumber = value.typeNumber;
      this._typeRate = value.typeRate;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._code.internalValue = value.code;
      this._codeOther.internalValue = value.codeOther;
    }
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
  private _code = new DdosTemplateIcmpV6TypeListCodeList(this, "code", false);
  public get code() {
    return this._code;
  }
  public putCode(value: DdosTemplateIcmpV6TypeListCode[] | cdktf.IResolvable) {
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
  private _codeOther = new DdosTemplateIcmpV6TypeListCodeOtherOutputReference(this, "code_other");
  public get codeOther() {
    return this._codeOther;
  }
  public putCodeOther(value: DdosTemplateIcmpV6TypeListCodeOther) {
    this._codeOther.internalValue = value;
  }
  public resetCodeOther() {
    this._codeOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeOtherInput() {
    return this._codeOther.internalValue;
  }
}

export class DdosTemplateIcmpV6TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateIcmpV6TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateIcmpV6TypeListStructOutputReference {
    return new DdosTemplateIcmpV6TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateIcmpV6TypeOther {
  /**
  * Deny all other type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#type_other_deny DdosTemplateIcmpV6#type_other_deny}
  */
  readonly typeOtherDeny?: number;
  /**
  * Specify rate with other type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#type_other_rate DdosTemplateIcmpV6#type_other_rate}
  */
  readonly typeOtherRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#uuid DdosTemplateIcmpV6#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateIcmpV6TypeOtherToTerraform(struct?: DdosTemplateIcmpV6TypeOtherOutputReference | DdosTemplateIcmpV6TypeOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_other_deny: cdktf.numberToTerraform(struct!.typeOtherDeny),
    type_other_rate: cdktf.numberToTerraform(struct!.typeOtherRate),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateIcmpV6TypeOtherToHclTerraform(struct?: DdosTemplateIcmpV6TypeOtherOutputReference | DdosTemplateIcmpV6TypeOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_other_deny: {
      value: cdktf.numberToHclTerraform(struct!.typeOtherDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.typeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateIcmpV6TypeOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateIcmpV6TypeOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeOtherDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOtherDeny = this._typeOtherDeny;
    }
    if (this._typeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOtherRate = this._typeOtherRate;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateIcmpV6TypeOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._typeOtherDeny = undefined;
      this._typeOtherRate = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._typeOtherDeny = value.typeOtherDeny;
      this._typeOtherRate = value.typeOtherRate;
      this._uuid = value.uuid;
    }
  }

  // type_other_deny - computed: false, optional: true, required: false
  private _typeOtherDeny?: number; 
  public get typeOtherDeny() {
    return this.getNumberAttribute('type_other_deny');
  }
  public set typeOtherDeny(value: number) {
    this._typeOtherDeny = value;
  }
  public resetTypeOtherDeny() {
    this._typeOtherDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOtherDenyInput() {
    return this._typeOtherDeny;
  }

  // type_other_rate - computed: false, optional: true, required: false
  private _typeOtherRate?: number; 
  public get typeOtherRate() {
    return this.getNumberAttribute('type_other_rate');
  }
  public set typeOtherRate(value: number) {
    this._typeOtherRate = value;
  }
  public resetTypeOtherRate() {
    this._typeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOtherRateInput() {
    return this._typeOtherRate;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6 thunder_ddos_template_icmp_v6}
*/
export class DdosTemplateIcmpV6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_icmp_v6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateIcmpV6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateIcmpV6 to import
  * @param importFromId The id of the existing DdosTemplateIcmpV6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateIcmpV6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_icmp_v6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_icmp_v6 thunder_ddos_template_icmp_v6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateIcmpV6Config
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateIcmpV6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_icmp_v6',
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
    this._icmpTmplName = config.icmpTmplName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._typeList.internalValue = config.typeList;
    this._typeOther.internalValue = config.typeOther;
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

  // type_list - computed: false, optional: true, required: false
  private _typeList = new DdosTemplateIcmpV6TypeListStructList(this, "type_list", false);
  public get typeList() {
    return this._typeList;
  }
  public putTypeList(value: DdosTemplateIcmpV6TypeListStruct[] | cdktf.IResolvable) {
    this._typeList.internalValue = value;
  }
  public resetTypeList() {
    this._typeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeListInput() {
    return this._typeList.internalValue;
  }

  // type_other - computed: false, optional: true, required: false
  private _typeOther = new DdosTemplateIcmpV6TypeOtherOutputReference(this, "type_other");
  public get typeOther() {
    return this._typeOther;
  }
  public putTypeOther(value: DdosTemplateIcmpV6TypeOther) {
    this._typeOther.internalValue = value;
  }
  public resetTypeOther() {
    this._typeOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOtherInput() {
    return this._typeOther.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmp_tmpl_name: cdktf.stringToTerraform(this._icmpTmplName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      type_list: cdktf.listMapper(ddosTemplateIcmpV6TypeListStructToTerraform, true)(this._typeList.internalValue),
      type_other: ddosTemplateIcmpV6TypeOtherToTerraform(this._typeOther.internalValue),
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
      type_list: {
        value: cdktf.listMapperHcl(ddosTemplateIcmpV6TypeListStructToHclTerraform, true)(this._typeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateIcmpV6TypeListStructList",
      },
      type_other: {
        value: ddosTemplateIcmpV6TypeOtherToHclTerraform(this._typeOther.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateIcmpV6TypeOtherList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
