import * as cdktf from 'cdktf';
import { CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDate,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDateToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDateToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDateOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplace,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplaceToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplaceToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplaceOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKV,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKVToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKVToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKVOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplace,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplaceToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplaceToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplaceOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplace,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplaceToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplaceToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplaceOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplit,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplitToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplitToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplitOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstr,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstrToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstrToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstrOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecode,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecodeToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecodeToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecodeOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperate,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperateToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperateToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperateOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainAnalyse,
ckafkaDatahubTaskTransformsParamFieldChainAnalyseToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainAnalyseToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainAnalyseOutputReference,
CkafkaDatahubTaskTransformsParamFieldChainAnalyseResult,
ckafkaDatahubTaskTransformsParamFieldChainAnalyseResultToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainAnalyseResultToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainAnalyseResultList,
CkafkaDatahubTaskTransformsParamFieldChainSMT,
ckafkaDatahubTaskTransformsParamFieldChainSMTToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSMTToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSMTList,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyse,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseToTerraform,
ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseToHclTerraform,
CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseOutputReference,
CkafkaDatahubTaskTransformsParamBatchAnalyse,
ckafkaDatahubTaskTransformsParamBatchAnalyseToTerraform,
ckafkaDatahubTaskTransformsParamBatchAnalyseToHclTerraform,
CkafkaDatahubTaskTransformsParamBatchAnalyseOutputReference,
CkafkaDatahubTaskTransformsParamFailureParam,
ckafkaDatahubTaskTransformsParamFailureParamToTerraform,
ckafkaDatahubTaskTransformsParamFailureParamToHclTerraform,
CkafkaDatahubTaskTransformsParamFailureParamOutputReference } from './structs0'
export interface CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates {
  /**
  * result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#result CkafkaDatahubTask#result}
  */
  readonly result?: string;
  /**
  * Processing mode, REPLACE replacement, SUBSTR interception, DATE date conversion, TRIM removal of leading and trailing spaces, REGEX REPLACE regular replacement, URL DECODE, LOWERCASE conversion to lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#type CkafkaDatahubTask#type}
  */
  readonly type: string;
  /**
  * date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#date CkafkaDatahubTask#date}
  */
  readonly date?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDate;
  /**
  * json_path_replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#json_path_replace CkafkaDatahubTask#json_path_replace}
  */
  readonly jsonPathReplace?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplace;
  /**
  * k_v block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#k_v CkafkaDatahubTask#k_v}
  */
  readonly kV?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKV;
  /**
  * regex_replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#regex_replace CkafkaDatahubTask#regex_replace}
  */
  readonly regexReplace?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplace;
  /**
  * replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#replace CkafkaDatahubTask#replace}
  */
  readonly replace?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplace;
  /**
  * split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#split CkafkaDatahubTask#split}
  */
  readonly split?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplit;
  /**
  * substr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#substr CkafkaDatahubTask#substr}
  */
  readonly substr?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstr;
  /**
  * url_decode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#url_decode CkafkaDatahubTask#url_decode}
  */
  readonly urlDecode?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecode;
}

export function ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesToTerraform(struct?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    result: cdktf.stringToTerraform(struct!.result),
    type: cdktf.stringToTerraform(struct!.type),
    date: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDateToTerraform(struct!.date),
    json_path_replace: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplaceToTerraform(struct!.jsonPathReplace),
    k_v: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKVToTerraform(struct!.kV),
    regex_replace: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplaceToTerraform(struct!.regexReplace),
    replace: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplaceToTerraform(struct!.replace),
    split: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplitToTerraform(struct!.split),
    substr: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstrToTerraform(struct!.substr),
    url_decode: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecodeToTerraform(struct!.urlDecode),
  }
}


export function ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesToHclTerraform(struct?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    result: {
      value: cdktf.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDateToHclTerraform(struct!.date),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDateList",
    },
    json_path_replace: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplaceToHclTerraform(struct!.jsonPathReplace),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplaceList",
    },
    k_v: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKVToHclTerraform(struct!.kV),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKVList",
    },
    regex_replace: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplaceToHclTerraform(struct!.regexReplace),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplaceList",
    },
    replace: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplaceToHclTerraform(struct!.replace),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplaceList",
    },
    split: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplitToHclTerraform(struct!.split),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplitList",
    },
    substr: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstrToHclTerraform(struct!.substr),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstrList",
    },
    url_decode: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecodeToHclTerraform(struct!.urlDecode),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._date?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date?.internalValue;
    }
    if (this._jsonPathReplace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPathReplace = this._jsonPathReplace?.internalValue;
    }
    if (this._kV?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kV = this._kV?.internalValue;
    }
    if (this._regexReplace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexReplace = this._regexReplace?.internalValue;
    }
    if (this._replace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace?.internalValue;
    }
    if (this._split?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.split = this._split?.internalValue;
    }
    if (this._substr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substr = this._substr?.internalValue;
    }
    if (this._urlDecode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlDecode = this._urlDecode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result = undefined;
      this._type = undefined;
      this._date.internalValue = undefined;
      this._jsonPathReplace.internalValue = undefined;
      this._kV.internalValue = undefined;
      this._regexReplace.internalValue = undefined;
      this._replace.internalValue = undefined;
      this._split.internalValue = undefined;
      this._substr.internalValue = undefined;
      this._urlDecode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result = value.result;
      this._type = value.type;
      this._date.internalValue = value.date;
      this._jsonPathReplace.internalValue = value.jsonPathReplace;
      this._kV.internalValue = value.kV;
      this._regexReplace.internalValue = value.regexReplace;
      this._replace.internalValue = value.replace;
      this._split.internalValue = value.split;
      this._substr.internalValue = value.substr;
      this._urlDecode.internalValue = value.urlDecode;
    }
  }

  // result - computed: false, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // date - computed: false, optional: true, required: false
  private _date = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDateOutputReference(this, "date");
  public get date() {
    return this._date;
  }
  public putDate(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesDate) {
    this._date.internalValue = value;
  }
  public resetDate() {
    this._date.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date.internalValue;
  }

  // json_path_replace - computed: false, optional: true, required: false
  private _jsonPathReplace = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplaceOutputReference(this, "json_path_replace");
  public get jsonPathReplace() {
    return this._jsonPathReplace;
  }
  public putJsonPathReplace(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesJsonPathReplace) {
    this._jsonPathReplace.internalValue = value;
  }
  public resetJsonPathReplace() {
    this._jsonPathReplace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathReplaceInput() {
    return this._jsonPathReplace.internalValue;
  }

  // k_v - computed: false, optional: true, required: false
  private _kV = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKVOutputReference(this, "k_v");
  public get kV() {
    return this._kV;
  }
  public putKV(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesKV) {
    this._kV.internalValue = value;
  }
  public resetKV() {
    this._kV.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kVInput() {
    return this._kV.internalValue;
  }

  // regex_replace - computed: false, optional: true, required: false
  private _regexReplace = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplaceOutputReference(this, "regex_replace");
  public get regexReplace() {
    return this._regexReplace;
  }
  public putRegexReplace(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesRegexReplace) {
    this._regexReplace.internalValue = value;
  }
  public resetRegexReplace() {
    this._regexReplace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexReplaceInput() {
    return this._regexReplace.internalValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplaceOutputReference(this, "replace");
  public get replace() {
    return this._replace;
  }
  public putReplace(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesReplace) {
    this._replace.internalValue = value;
  }
  public resetReplace() {
    this._replace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace.internalValue;
  }

  // split - computed: false, optional: true, required: false
  private _split = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplitOutputReference(this, "split");
  public get split() {
    return this._split;
  }
  public putSplit(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSplit) {
    this._split.internalValue = value;
  }
  public resetSplit() {
    this._split.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split.internalValue;
  }

  // substr - computed: false, optional: true, required: false
  private _substr = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstrOutputReference(this, "substr");
  public get substr() {
    return this._substr;
  }
  public putSubstr(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesSubstr) {
    this._substr.internalValue = value;
  }
  public resetSubstr() {
    this._substr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substrInput() {
    return this._substr.internalValue;
  }

  // url_decode - computed: false, optional: true, required: false
  private _urlDecode = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecodeOutputReference(this, "url_decode");
  public get urlDecode() {
    return this._urlDecode;
  }
  public putUrlDecode(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesUrlDecode) {
    this._urlDecode.internalValue = value;
  }
  public resetUrlDecode() {
    this._urlDecode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlDecodeInput() {
    return this._urlDecode.internalValue;
  }
}

export class CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesList extends cdktf.ComplexList {
  public internalValue? : CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates[] | cdktf.IResolvable

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
  public get(index: number): CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesOutputReference {
    return new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult {
  /**
  * KEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#key CkafkaDatahubTask#key}
  */
  readonly key: string;
  /**
  * Operation, DATE system preset - timestamp, CUSTOMIZE customization, MAPPING mapping, JSONPATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#operate CkafkaDatahubTask#operate}
  */
  readonly operate: string;
  /**
  * OriginalValue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#original_value CkafkaDatahubTask#original_value}
  */
  readonly originalValue?: string;
  /**
  * data type, ORIGINAL, STRING, INT64, FLOAT64, BOOLEAN, MAP, ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#scheme_type CkafkaDatahubTask#scheme_type}
  */
  readonly schemeType: string;
  /**
  * VALUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#value CkafkaDatahubTask#value}
  */
  readonly value?: string;
  /**
  * value_operate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#value_operate CkafkaDatahubTask#value_operate}
  */
  readonly valueOperate?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperate;
  /**
  * value_operates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#value_operates CkafkaDatahubTask#value_operates}
  */
  readonly valueOperates?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates[] | cdktf.IResolvable;
}

export function ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultToTerraform(struct?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operate: cdktf.stringToTerraform(struct!.operate),
    original_value: cdktf.stringToTerraform(struct!.originalValue),
    scheme_type: cdktf.stringToTerraform(struct!.schemeType),
    value: cdktf.stringToTerraform(struct!.value),
    value_operate: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperateToTerraform(struct!.valueOperate),
    value_operates: cdktf.listMapper(ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesToTerraform, true)(struct!.valueOperates),
  }
}


export function ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultToHclTerraform(struct?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operate: {
      value: cdktf.stringToHclTerraform(struct!.operate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_value: {
      value: cdktf.stringToHclTerraform(struct!.originalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme_type: {
      value: cdktf.stringToHclTerraform(struct!.schemeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_operate: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperateToHclTerraform(struct!.valueOperate),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperateList",
    },
    value_operates: {
      value: cdktf.listMapperHcl(ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesToHclTerraform, true)(struct!.valueOperates),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operate !== undefined) {
      hasAnyValues = true;
      internalValueResult.operate = this._operate;
    }
    if (this._originalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalValue = this._originalValue;
    }
    if (this._schemeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeType = this._schemeType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueOperate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueOperate = this._valueOperate?.internalValue;
    }
    if (this._valueOperates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueOperates = this._valueOperates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operate = undefined;
      this._originalValue = undefined;
      this._schemeType = undefined;
      this._value = undefined;
      this._valueOperate.internalValue = undefined;
      this._valueOperates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operate = value.operate;
      this._originalValue = value.originalValue;
      this._schemeType = value.schemeType;
      this._value = value.value;
      this._valueOperate.internalValue = value.valueOperate;
      this._valueOperates.internalValue = value.valueOperates;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operate - computed: false, optional: false, required: true
  private _operate?: string; 
  public get operate() {
    return this.getStringAttribute('operate');
  }
  public set operate(value: string) {
    this._operate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operateInput() {
    return this._operate;
  }

  // original_value - computed: false, optional: true, required: false
  private _originalValue?: string; 
  public get originalValue() {
    return this.getStringAttribute('original_value');
  }
  public set originalValue(value: string) {
    this._originalValue = value;
  }
  public resetOriginalValue() {
    this._originalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalValueInput() {
    return this._originalValue;
  }

  // scheme_type - computed: false, optional: false, required: true
  private _schemeType?: string; 
  public get schemeType() {
    return this.getStringAttribute('scheme_type');
  }
  public set schemeType(value: string) {
    this._schemeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeTypeInput() {
    return this._schemeType;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_operate - computed: false, optional: true, required: false
  private _valueOperate = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperateOutputReference(this, "value_operate");
  public get valueOperate() {
    return this._valueOperate;
  }
  public putValueOperate(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperate) {
    this._valueOperate.internalValue = value;
  }
  public resetValueOperate() {
    this._valueOperate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOperateInput() {
    return this._valueOperate.internalValue;
  }

  // value_operates - computed: false, optional: true, required: false
  private _valueOperates = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperatesList(this, "value_operates", false);
  public get valueOperates() {
    return this._valueOperates;
  }
  public putValueOperates(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultValueOperates[] | cdktf.IResolvable) {
    this._valueOperates.internalValue = value;
  }
  public resetValueOperates() {
    this._valueOperates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOperatesInput() {
    return this._valueOperates.internalValue;
  }
}

export class CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultList extends cdktf.ComplexList {
  public internalValue? : CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult[] | cdktf.IResolvable

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
  public get(index: number): CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultOutputReference {
    return new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CkafkaDatahubTaskTransformsParamFieldChain {
  /**
  * Parsing results in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#analyse_json_result CkafkaDatahubTask#analyse_json_result}
  */
  readonly analyseJsonResult?: string;
  /**
  * Test Results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#result CkafkaDatahubTask#result}
  */
  readonly result?: string;
  /**
  * Secondary parsing results in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#secondary_analyse_json_result CkafkaDatahubTask#secondary_analyse_json_result}
  */
  readonly secondaryAnalyseJsonResult?: string;
  /**
  * analyse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#analyse CkafkaDatahubTask#analyse}
  */
  readonly analyse: CkafkaDatahubTaskTransformsParamFieldChainAnalyse;
  /**
  * analyse_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#analyse_result CkafkaDatahubTask#analyse_result}
  */
  readonly analyseResult?: CkafkaDatahubTaskTransformsParamFieldChainAnalyseResult[] | cdktf.IResolvable;
  /**
  * s_m_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#s_m_t CkafkaDatahubTask#s_m_t}
  */
  readonly sMT?: CkafkaDatahubTaskTransformsParamFieldChainSMT[] | cdktf.IResolvable;
  /**
  * secondary_analyse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#secondary_analyse CkafkaDatahubTask#secondary_analyse}
  */
  readonly secondaryAnalyse?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyse;
  /**
  * secondary_analyse_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#secondary_analyse_result CkafkaDatahubTask#secondary_analyse_result}
  */
  readonly secondaryAnalyseResult?: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult[] | cdktf.IResolvable;
}

export function ckafkaDatahubTaskTransformsParamFieldChainToTerraform(struct?: CkafkaDatahubTaskTransformsParamFieldChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyse_json_result: cdktf.stringToTerraform(struct!.analyseJsonResult),
    result: cdktf.stringToTerraform(struct!.result),
    secondary_analyse_json_result: cdktf.stringToTerraform(struct!.secondaryAnalyseJsonResult),
    analyse: ckafkaDatahubTaskTransformsParamFieldChainAnalyseToTerraform(struct!.analyse),
    analyse_result: cdktf.listMapper(ckafkaDatahubTaskTransformsParamFieldChainAnalyseResultToTerraform, true)(struct!.analyseResult),
    s_m_t: cdktf.listMapper(ckafkaDatahubTaskTransformsParamFieldChainSMTToTerraform, true)(struct!.sMT),
    secondary_analyse: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseToTerraform(struct!.secondaryAnalyse),
    secondary_analyse_result: cdktf.listMapper(ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultToTerraform, true)(struct!.secondaryAnalyseResult),
  }
}


export function ckafkaDatahubTaskTransformsParamFieldChainToHclTerraform(struct?: CkafkaDatahubTaskTransformsParamFieldChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyse_json_result: {
      value: cdktf.stringToHclTerraform(struct!.analyseJsonResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: cdktf.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_analyse_json_result: {
      value: cdktf.stringToHclTerraform(struct!.secondaryAnalyseJsonResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analyse: {
      value: ckafkaDatahubTaskTransformsParamFieldChainAnalyseToHclTerraform(struct!.analyse),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainAnalyseList",
    },
    analyse_result: {
      value: cdktf.listMapperHcl(ckafkaDatahubTaskTransformsParamFieldChainAnalyseResultToHclTerraform, true)(struct!.analyseResult),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainAnalyseResultList",
    },
    s_m_t: {
      value: cdktf.listMapperHcl(ckafkaDatahubTaskTransformsParamFieldChainSMTToHclTerraform, true)(struct!.sMT),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSMTList",
    },
    secondary_analyse: {
      value: ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseToHclTerraform(struct!.secondaryAnalyse),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseList",
    },
    secondary_analyse_result: {
      value: cdktf.listMapperHcl(ckafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultToHclTerraform, true)(struct!.secondaryAnalyseResult),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaDatahubTaskTransformsParamFieldChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CkafkaDatahubTaskTransformsParamFieldChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyseJsonResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyseJsonResult = this._analyseJsonResult;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._secondaryAnalyseJsonResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAnalyseJsonResult = this._secondaryAnalyseJsonResult;
    }
    if (this._analyse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyse = this._analyse?.internalValue;
    }
    if (this._analyseResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyseResult = this._analyseResult?.internalValue;
    }
    if (this._sMT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sMT = this._sMT?.internalValue;
    }
    if (this._secondaryAnalyse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAnalyse = this._secondaryAnalyse?.internalValue;
    }
    if (this._secondaryAnalyseResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAnalyseResult = this._secondaryAnalyseResult?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaDatahubTaskTransformsParamFieldChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyseJsonResult = undefined;
      this._result = undefined;
      this._secondaryAnalyseJsonResult = undefined;
      this._analyse.internalValue = undefined;
      this._analyseResult.internalValue = undefined;
      this._sMT.internalValue = undefined;
      this._secondaryAnalyse.internalValue = undefined;
      this._secondaryAnalyseResult.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyseJsonResult = value.analyseJsonResult;
      this._result = value.result;
      this._secondaryAnalyseJsonResult = value.secondaryAnalyseJsonResult;
      this._analyse.internalValue = value.analyse;
      this._analyseResult.internalValue = value.analyseResult;
      this._sMT.internalValue = value.sMT;
      this._secondaryAnalyse.internalValue = value.secondaryAnalyse;
      this._secondaryAnalyseResult.internalValue = value.secondaryAnalyseResult;
    }
  }

  // analyse_json_result - computed: false, optional: true, required: false
  private _analyseJsonResult?: string; 
  public get analyseJsonResult() {
    return this.getStringAttribute('analyse_json_result');
  }
  public set analyseJsonResult(value: string) {
    this._analyseJsonResult = value;
  }
  public resetAnalyseJsonResult() {
    this._analyseJsonResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyseJsonResultInput() {
    return this._analyseJsonResult;
  }

  // result - computed: false, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // secondary_analyse_json_result - computed: false, optional: true, required: false
  private _secondaryAnalyseJsonResult?: string; 
  public get secondaryAnalyseJsonResult() {
    return this.getStringAttribute('secondary_analyse_json_result');
  }
  public set secondaryAnalyseJsonResult(value: string) {
    this._secondaryAnalyseJsonResult = value;
  }
  public resetSecondaryAnalyseJsonResult() {
    this._secondaryAnalyseJsonResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAnalyseJsonResultInput() {
    return this._secondaryAnalyseJsonResult;
  }

  // analyse - computed: false, optional: false, required: true
  private _analyse = new CkafkaDatahubTaskTransformsParamFieldChainAnalyseOutputReference(this, "analyse");
  public get analyse() {
    return this._analyse;
  }
  public putAnalyse(value: CkafkaDatahubTaskTransformsParamFieldChainAnalyse) {
    this._analyse.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyseInput() {
    return this._analyse.internalValue;
  }

  // analyse_result - computed: false, optional: true, required: false
  private _analyseResult = new CkafkaDatahubTaskTransformsParamFieldChainAnalyseResultList(this, "analyse_result", false);
  public get analyseResult() {
    return this._analyseResult;
  }
  public putAnalyseResult(value: CkafkaDatahubTaskTransformsParamFieldChainAnalyseResult[] | cdktf.IResolvable) {
    this._analyseResult.internalValue = value;
  }
  public resetAnalyseResult() {
    this._analyseResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyseResultInput() {
    return this._analyseResult.internalValue;
  }

  // s_m_t - computed: false, optional: true, required: false
  private _sMT = new CkafkaDatahubTaskTransformsParamFieldChainSMTList(this, "s_m_t", false);
  public get sMT() {
    return this._sMT;
  }
  public putSMT(value: CkafkaDatahubTaskTransformsParamFieldChainSMT[] | cdktf.IResolvable) {
    this._sMT.internalValue = value;
  }
  public resetSMT() {
    this._sMT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sMTInput() {
    return this._sMT.internalValue;
  }

  // secondary_analyse - computed: false, optional: true, required: false
  private _secondaryAnalyse = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseOutputReference(this, "secondary_analyse");
  public get secondaryAnalyse() {
    return this._secondaryAnalyse;
  }
  public putSecondaryAnalyse(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyse) {
    this._secondaryAnalyse.internalValue = value;
  }
  public resetSecondaryAnalyse() {
    this._secondaryAnalyse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAnalyseInput() {
    return this._secondaryAnalyse.internalValue;
  }

  // secondary_analyse_result - computed: false, optional: true, required: false
  private _secondaryAnalyseResult = new CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResultList(this, "secondary_analyse_result", false);
  public get secondaryAnalyseResult() {
    return this._secondaryAnalyseResult;
  }
  public putSecondaryAnalyseResult(value: CkafkaDatahubTaskTransformsParamFieldChainSecondaryAnalyseResult[] | cdktf.IResolvable) {
    this._secondaryAnalyseResult.internalValue = value;
  }
  public resetSecondaryAnalyseResult() {
    this._secondaryAnalyseResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAnalyseResultInput() {
    return this._secondaryAnalyseResult.internalValue;
  }
}

export class CkafkaDatahubTaskTransformsParamFieldChainList extends cdktf.ComplexList {
  public internalValue? : CkafkaDatahubTaskTransformsParamFieldChain[] | cdktf.IResolvable

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
  public get(index: number): CkafkaDatahubTaskTransformsParamFieldChainOutputReference {
    return new CkafkaDatahubTaskTransformsParamFieldChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CkafkaDatahubTaskTransformsParamFilterParam {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#key CkafkaDatahubTask#key}
  */
  readonly key: string;
  /**
  * Matching mode, prefix matches PREFIX, suffix matches SUFFIX, contains matches CONTAINS, except matches EXCEPT, value matches NUMBER, IP matches IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#match_mode CkafkaDatahubTask#match_mode}
  */
  readonly matchMode: string;
  /**
  * REGULAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#type CkafkaDatahubTask#type}
  */
  readonly type?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#value CkafkaDatahubTask#value}
  */
  readonly value: string;
}

export function ckafkaDatahubTaskTransformsParamFilterParamToTerraform(struct?: CkafkaDatahubTaskTransformsParamFilterParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_mode: cdktf.stringToTerraform(struct!.matchMode),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ckafkaDatahubTaskTransformsParamFilterParamToHclTerraform(struct?: CkafkaDatahubTaskTransformsParamFilterParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_mode: {
      value: cdktf.stringToHclTerraform(struct!.matchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaDatahubTaskTransformsParamFilterParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CkafkaDatahubTaskTransformsParamFilterParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchMode = this._matchMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaDatahubTaskTransformsParamFilterParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._matchMode = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._matchMode = value.matchMode;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_mode - computed: false, optional: false, required: true
  private _matchMode?: string; 
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CkafkaDatahubTaskTransformsParamFilterParamList extends cdktf.ComplexList {
  public internalValue? : CkafkaDatahubTaskTransformsParamFilterParam[] | cdktf.IResolvable

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
  public get(index: number): CkafkaDatahubTaskTransformsParamFilterParamOutputReference {
    return new CkafkaDatahubTaskTransformsParamFilterParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CkafkaDatahubTaskTransformsParamRowParam {
  /**
  * delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#entry_delimiter CkafkaDatahubTask#entry_delimiter}
  */
  readonly entryDelimiter?: string;
  /**
  * key, value delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#key_value_delimiter CkafkaDatahubTask#key_value_delimiter}
  */
  readonly keyValueDelimiter?: string;
  /**
  * row content, KEY_VALUE, VALUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#row_content CkafkaDatahubTask#row_content}
  */
  readonly rowContent: string;
}

export function ckafkaDatahubTaskTransformsParamRowParamToTerraform(struct?: CkafkaDatahubTaskTransformsParamRowParamOutputReference | CkafkaDatahubTaskTransformsParamRowParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_delimiter: cdktf.stringToTerraform(struct!.entryDelimiter),
    key_value_delimiter: cdktf.stringToTerraform(struct!.keyValueDelimiter),
    row_content: cdktf.stringToTerraform(struct!.rowContent),
  }
}


export function ckafkaDatahubTaskTransformsParamRowParamToHclTerraform(struct?: CkafkaDatahubTaskTransformsParamRowParamOutputReference | CkafkaDatahubTaskTransformsParamRowParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.entryDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.keyValueDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_content: {
      value: cdktf.stringToHclTerraform(struct!.rowContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaDatahubTaskTransformsParamRowParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaDatahubTaskTransformsParamRowParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDelimiter = this._entryDelimiter;
    }
    if (this._keyValueDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueDelimiter = this._keyValueDelimiter;
    }
    if (this._rowContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowContent = this._rowContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaDatahubTaskTransformsParamRowParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryDelimiter = undefined;
      this._keyValueDelimiter = undefined;
      this._rowContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryDelimiter = value.entryDelimiter;
      this._keyValueDelimiter = value.keyValueDelimiter;
      this._rowContent = value.rowContent;
    }
  }

  // entry_delimiter - computed: false, optional: true, required: false
  private _entryDelimiter?: string; 
  public get entryDelimiter() {
    return this.getStringAttribute('entry_delimiter');
  }
  public set entryDelimiter(value: string) {
    this._entryDelimiter = value;
  }
  public resetEntryDelimiter() {
    this._entryDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDelimiterInput() {
    return this._entryDelimiter;
  }

  // key_value_delimiter - computed: false, optional: true, required: false
  private _keyValueDelimiter?: string; 
  public get keyValueDelimiter() {
    return this.getStringAttribute('key_value_delimiter');
  }
  public set keyValueDelimiter(value: string) {
    this._keyValueDelimiter = value;
  }
  public resetKeyValueDelimiter() {
    this._keyValueDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueDelimiterInput() {
    return this._keyValueDelimiter;
  }

  // row_content - computed: false, optional: false, required: true
  private _rowContent?: string; 
  public get rowContent() {
    return this.getStringAttribute('row_content');
  }
  public set rowContent(value: string) {
    this._rowContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowContentInput() {
    return this._rowContent;
  }
}
export interface CkafkaDatahubTaskTransformsParam {
  /**
  * Raw data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#content CkafkaDatahubTask#content}
  */
  readonly content: string;
  /**
  * Whether to keep the data source Topic metadata information (source Topic, Partition, Offset), the default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#keep_metadata CkafkaDatahubTask#keep_metadata}
  */
  readonly keepMetadata?: boolean | cdktf.IResolvable;
  /**
  * output format, JSON, ROW, default JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#output_format CkafkaDatahubTask#output_format}
  */
  readonly outputFormat?: string;
  /**
  * result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#result CkafkaDatahubTask#result}
  */
  readonly result?: string;
  /**
  * data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#source_type CkafkaDatahubTask#source_type}
  */
  readonly sourceType?: string;
  /**
  * batch_analyse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#batch_analyse CkafkaDatahubTask#batch_analyse}
  */
  readonly batchAnalyse?: CkafkaDatahubTaskTransformsParamBatchAnalyse;
  /**
  * failure_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#failure_param CkafkaDatahubTask#failure_param}
  */
  readonly failureParam?: CkafkaDatahubTaskTransformsParamFailureParam;
  /**
  * field_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#field_chain CkafkaDatahubTask#field_chain}
  */
  readonly fieldChain: CkafkaDatahubTaskTransformsParamFieldChain[] | cdktf.IResolvable;
  /**
  * filter_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#filter_param CkafkaDatahubTask#filter_param}
  */
  readonly filterParam?: CkafkaDatahubTaskTransformsParamFilterParam[] | cdktf.IResolvable;
  /**
  * row_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ckafka_datahub_task#row_param CkafkaDatahubTask#row_param}
  */
  readonly rowParam?: CkafkaDatahubTaskTransformsParamRowParam;
}

export function ckafkaDatahubTaskTransformsParamToTerraform(struct?: CkafkaDatahubTaskTransformsParamOutputReference | CkafkaDatahubTaskTransformsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    keep_metadata: cdktf.booleanToTerraform(struct!.keepMetadata),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    result: cdktf.stringToTerraform(struct!.result),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    batch_analyse: ckafkaDatahubTaskTransformsParamBatchAnalyseToTerraform(struct!.batchAnalyse),
    failure_param: ckafkaDatahubTaskTransformsParamFailureParamToTerraform(struct!.failureParam),
    field_chain: cdktf.listMapper(ckafkaDatahubTaskTransformsParamFieldChainToTerraform, true)(struct!.fieldChain),
    filter_param: cdktf.listMapper(ckafkaDatahubTaskTransformsParamFilterParamToTerraform, true)(struct!.filterParam),
    row_param: ckafkaDatahubTaskTransformsParamRowParamToTerraform(struct!.rowParam),
  }
}


export function ckafkaDatahubTaskTransformsParamToHclTerraform(struct?: CkafkaDatahubTaskTransformsParamOutputReference | CkafkaDatahubTaskTransformsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.keepMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: cdktf.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_analyse: {
      value: ckafkaDatahubTaskTransformsParamBatchAnalyseToHclTerraform(struct!.batchAnalyse),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamBatchAnalyseList",
    },
    failure_param: {
      value: ckafkaDatahubTaskTransformsParamFailureParamToHclTerraform(struct!.failureParam),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFailureParamList",
    },
    field_chain: {
      value: cdktf.listMapperHcl(ckafkaDatahubTaskTransformsParamFieldChainToHclTerraform, true)(struct!.fieldChain),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFieldChainList",
    },
    filter_param: {
      value: cdktf.listMapperHcl(ckafkaDatahubTaskTransformsParamFilterParamToHclTerraform, true)(struct!.filterParam),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamFilterParamList",
    },
    row_param: {
      value: ckafkaDatahubTaskTransformsParamRowParamToHclTerraform(struct!.rowParam),
      isBlock: true,
      type: "list",
      storageClassType: "CkafkaDatahubTaskTransformsParamRowParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaDatahubTaskTransformsParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaDatahubTaskTransformsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._keepMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepMetadata = this._keepMetadata;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._batchAnalyse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchAnalyse = this._batchAnalyse?.internalValue;
    }
    if (this._failureParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureParam = this._failureParam?.internalValue;
    }
    if (this._fieldChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldChain = this._fieldChain?.internalValue;
    }
    if (this._filterParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterParam = this._filterParam?.internalValue;
    }
    if (this._rowParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowParam = this._rowParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaDatahubTaskTransformsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._keepMetadata = undefined;
      this._outputFormat = undefined;
      this._result = undefined;
      this._sourceType = undefined;
      this._batchAnalyse.internalValue = undefined;
      this._failureParam.internalValue = undefined;
      this._fieldChain.internalValue = undefined;
      this._filterParam.internalValue = undefined;
      this._rowParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._keepMetadata = value.keepMetadata;
      this._outputFormat = value.outputFormat;
      this._result = value.result;
      this._sourceType = value.sourceType;
      this._batchAnalyse.internalValue = value.batchAnalyse;
      this._failureParam.internalValue = value.failureParam;
      this._fieldChain.internalValue = value.fieldChain;
      this._filterParam.internalValue = value.filterParam;
      this._rowParam.internalValue = value.rowParam;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // keep_metadata - computed: false, optional: true, required: false
  private _keepMetadata?: boolean | cdktf.IResolvable; 
  public get keepMetadata() {
    return this.getBooleanAttribute('keep_metadata');
  }
  public set keepMetadata(value: boolean | cdktf.IResolvable) {
    this._keepMetadata = value;
  }
  public resetKeepMetadata() {
    this._keepMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepMetadataInput() {
    return this._keepMetadata;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // result - computed: false, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // batch_analyse - computed: false, optional: true, required: false
  private _batchAnalyse = new CkafkaDatahubTaskTransformsParamBatchAnalyseOutputReference(this, "batch_analyse");
  public get batchAnalyse() {
    return this._batchAnalyse;
  }
  public putBatchAnalyse(value: CkafkaDatahubTaskTransformsParamBatchAnalyse) {
    this._batchAnalyse.internalValue = value;
  }
  public resetBatchAnalyse() {
    this._batchAnalyse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchAnalyseInput() {
    return this._batchAnalyse.internalValue;
  }

  // failure_param - computed: false, optional: true, required: false
  private _failureParam = new CkafkaDatahubTaskTransformsParamFailureParamOutputReference(this, "failure_param");
  public get failureParam() {
    return this._failureParam;
  }
  public putFailureParam(value: CkafkaDatahubTaskTransformsParamFailureParam) {
    this._failureParam.internalValue = value;
  }
  public resetFailureParam() {
    this._failureParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureParamInput() {
    return this._failureParam.internalValue;
  }

  // field_chain - computed: false, optional: false, required: true
  private _fieldChain = new CkafkaDatahubTaskTransformsParamFieldChainList(this, "field_chain", false);
  public get fieldChain() {
    return this._fieldChain;
  }
  public putFieldChain(value: CkafkaDatahubTaskTransformsParamFieldChain[] | cdktf.IResolvable) {
    this._fieldChain.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldChainInput() {
    return this._fieldChain.internalValue;
  }

  // filter_param - computed: false, optional: true, required: false
  private _filterParam = new CkafkaDatahubTaskTransformsParamFilterParamList(this, "filter_param", false);
  public get filterParam() {
    return this._filterParam;
  }
  public putFilterParam(value: CkafkaDatahubTaskTransformsParamFilterParam[] | cdktf.IResolvable) {
    this._filterParam.internalValue = value;
  }
  public resetFilterParam() {
    this._filterParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamInput() {
    return this._filterParam.internalValue;
  }

  // row_param - computed: false, optional: true, required: false
  private _rowParam = new CkafkaDatahubTaskTransformsParamRowParamOutputReference(this, "row_param");
  public get rowParam() {
    return this._rowParam;
  }
  public putRowParam(value: CkafkaDatahubTaskTransformsParamRowParam) {
    this._rowParam.internalValue = value;
  }
  public resetRowParam() {
    this._rowParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowParamInput() {
    return this._rowParam.internalValue;
  }
}
