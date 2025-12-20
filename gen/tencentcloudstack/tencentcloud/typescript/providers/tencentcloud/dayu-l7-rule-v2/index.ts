// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuL7RuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#id DayuL7RuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the resource that the layer 7 rule works for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#resource_id DayuL7RuleV2#resource_id}
  */
  readonly resourceId: string;
  /**
  * Ip of the resource that the layer 7 rule works for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#resource_ip DayuL7RuleV2#resource_ip}
  */
  readonly resourceIp: string;
  /**
  * Type of the resource that the layer 7 rule works for, valid value is `bgpip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#resource_type DayuL7RuleV2#resource_type}
  */
  readonly resourceType: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#rule DayuL7RuleV2#rule}
  */
  readonly rule: DayuL7RuleV2Rule;
}
export interface DayuL7RuleV2RuleSourceListStruct {
  /**
  * Source IP or domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#source DayuL7RuleV2#source}
  */
  readonly source: string;
  /**
  * Weight of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#weight DayuL7RuleV2#weight}
  */
  readonly weight: number;
}

export function dayuL7RuleV2RuleSourceListStructToTerraform(struct?: DayuL7RuleV2RuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dayuL7RuleV2RuleSourceListStructToHclTerraform(struct?: DayuL7RuleV2RuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuL7RuleV2RuleSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuL7RuleV2RuleSourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuL7RuleV2RuleSourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._weight = value.weight;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DayuL7RuleV2RuleSourceListStructList extends cdktf.ComplexList {
  public internalValue? : DayuL7RuleV2RuleSourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DayuL7RuleV2RuleSourceListStructOutputReference {
    return new DayuL7RuleV2RuleSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuL7RuleV2Rule {
  /**
  * HTTPS protocol CC protection status, value [0 (off), 1 (on)], defaule is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#cc_enable DayuL7RuleV2#cc_enable}
  */
  readonly ccEnable?: number;
  /**
  * The source of the certificate must be filled in when the forwarding protocol is https, the value [2 (Tencent Cloud Hosting Certificate)], and 0 when the forwarding protocol is http.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#cert_type DayuL7RuleV2#cert_type}
  */
  readonly certType?: number;
  /**
  * Domain of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#domain DayuL7RuleV2#domain}
  */
  readonly domain: string;
  /**
  * Whether to enable the Https protocol to use Http back-to-source, take the value [0 (off), 1 (on)], do not fill in the default is off, defaule is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#https_to_http_enable DayuL7RuleV2#https_to_http_enable}
  */
  readonly httpsToHttpEnable?: number;
  /**
  * session hold switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#keep_enable DayuL7RuleV2#keep_enable}
  */
  readonly keepEnable: number;
  /**
  * The keeptime of the layer 4 rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#keeptime DayuL7RuleV2#keeptime}
  */
  readonly keeptime: number;
  /**
  * LB type of the rule, `1` for weight cycling and `2` for IP hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#lb_type DayuL7RuleV2#lb_type}
  */
  readonly lbType: number;
  /**
  * Protocol of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#protocol DayuL7RuleV2#protocol}
  */
  readonly protocol: string;
  /**
  * Source type, `1` for source of host, `2` for source of IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#source_type DayuL7RuleV2#source_type}
  */
  readonly sourceType: number;
  /**
  * When the certificate source is a Tencent Cloud managed certificate, this field must be filled in with the managed certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#ssl_id DayuL7RuleV2#ssl_id}
  */
  readonly sslId?: string;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#source_list DayuL7RuleV2#source_list}
  */
  readonly sourceList: DayuL7RuleV2RuleSourceListStruct[] | cdktf.IResolvable;
}

export function dayuL7RuleV2RuleToTerraform(struct?: DayuL7RuleV2RuleOutputReference | DayuL7RuleV2Rule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cc_enable: cdktf.numberToTerraform(struct!.ccEnable),
    cert_type: cdktf.numberToTerraform(struct!.certType),
    domain: cdktf.stringToTerraform(struct!.domain),
    https_to_http_enable: cdktf.numberToTerraform(struct!.httpsToHttpEnable),
    keep_enable: cdktf.numberToTerraform(struct!.keepEnable),
    keeptime: cdktf.numberToTerraform(struct!.keeptime),
    lb_type: cdktf.numberToTerraform(struct!.lbType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_type: cdktf.numberToTerraform(struct!.sourceType),
    ssl_id: cdktf.stringToTerraform(struct!.sslId),
    source_list: cdktf.listMapper(dayuL7RuleV2RuleSourceListStructToTerraform, true)(struct!.sourceList),
  }
}


export function dayuL7RuleV2RuleToHclTerraform(struct?: DayuL7RuleV2RuleOutputReference | DayuL7RuleV2Rule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cc_enable: {
      value: cdktf.numberToHclTerraform(struct!.ccEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_type: {
      value: cdktf.numberToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_to_http_enable: {
      value: cdktf.numberToHclTerraform(struct!.httpsToHttpEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_enable: {
      value: cdktf.numberToHclTerraform(struct!.keepEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keeptime: {
      value: cdktf.numberToHclTerraform(struct!.keeptime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_type: {
      value: cdktf.numberToHclTerraform(struct!.lbType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.numberToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_id: {
      value: cdktf.stringToHclTerraform(struct!.sslId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_list: {
      value: cdktf.listMapperHcl(dayuL7RuleV2RuleSourceListStructToHclTerraform, true)(struct!.sourceList),
      isBlock: true,
      type: "list",
      storageClassType: "DayuL7RuleV2RuleSourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuL7RuleV2RuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DayuL7RuleV2Rule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ccEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccEnable = this._ccEnable;
    }
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._httpsToHttpEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsToHttpEnable = this._httpsToHttpEnable;
    }
    if (this._keepEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepEnable = this._keepEnable;
    }
    if (this._keeptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeptime = this._keeptime;
    }
    if (this._lbType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbType = this._lbType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sslId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslId = this._sslId;
    }
    if (this._sourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceList = this._sourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuL7RuleV2Rule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ccEnable = undefined;
      this._certType = undefined;
      this._domain = undefined;
      this._httpsToHttpEnable = undefined;
      this._keepEnable = undefined;
      this._keeptime = undefined;
      this._lbType = undefined;
      this._protocol = undefined;
      this._sourceType = undefined;
      this._sslId = undefined;
      this._sourceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ccEnable = value.ccEnable;
      this._certType = value.certType;
      this._domain = value.domain;
      this._httpsToHttpEnable = value.httpsToHttpEnable;
      this._keepEnable = value.keepEnable;
      this._keeptime = value.keeptime;
      this._lbType = value.lbType;
      this._protocol = value.protocol;
      this._sourceType = value.sourceType;
      this._sslId = value.sslId;
      this._sourceList.internalValue = value.sourceList;
    }
  }

  // cc_enable - computed: false, optional: true, required: false
  private _ccEnable?: number; 
  public get ccEnable() {
    return this.getNumberAttribute('cc_enable');
  }
  public set ccEnable(value: number) {
    this._ccEnable = value;
  }
  public resetCcEnable() {
    this._ccEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccEnableInput() {
    return this._ccEnable;
  }

  // cert_type - computed: false, optional: true, required: false
  private _certType?: number; 
  public get certType() {
    return this.getNumberAttribute('cert_type');
  }
  public set certType(value: number) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // https_to_http_enable - computed: false, optional: true, required: false
  private _httpsToHttpEnable?: number; 
  public get httpsToHttpEnable() {
    return this.getNumberAttribute('https_to_http_enable');
  }
  public set httpsToHttpEnable(value: number) {
    this._httpsToHttpEnable = value;
  }
  public resetHttpsToHttpEnable() {
    this._httpsToHttpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsToHttpEnableInput() {
    return this._httpsToHttpEnable;
  }

  // keep_enable - computed: false, optional: false, required: true
  private _keepEnable?: number; 
  public get keepEnable() {
    return this.getNumberAttribute('keep_enable');
  }
  public set keepEnable(value: number) {
    this._keepEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepEnableInput() {
    return this._keepEnable;
  }

  // keeptime - computed: false, optional: false, required: true
  private _keeptime?: number; 
  public get keeptime() {
    return this.getNumberAttribute('keeptime');
  }
  public set keeptime(value: number) {
    this._keeptime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keeptimeInput() {
    return this._keeptime;
  }

  // lb_type - computed: false, optional: false, required: true
  private _lbType?: number; 
  public get lbType() {
    return this.getNumberAttribute('lb_type');
  }
  public set lbType(value: number) {
    this._lbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbTypeInput() {
    return this._lbType;
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

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: number; 
  public get sourceType() {
    return this.getNumberAttribute('source_type');
  }
  public set sourceType(value: number) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // ssl_id - computed: false, optional: true, required: false
  private _sslId?: string; 
  public get sslId() {
    return this.getStringAttribute('ssl_id');
  }
  public set sslId(value: string) {
    this._sslId = value;
  }
  public resetSslId() {
    this._sslId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslIdInput() {
    return this._sslId;
  }

  // source_list - computed: false, optional: false, required: true
  private _sourceList = new DayuL7RuleV2RuleSourceListStructList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: DayuL7RuleV2RuleSourceListStruct[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2 tencentcloud_dayu_l7_rule_v2}
*/
export class DayuL7RuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_l7_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuL7RuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuL7RuleV2 to import
  * @param importFromId The id of the existing DayuL7RuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuL7RuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_l7_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_l7_rule_v2 tencentcloud_dayu_l7_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuL7RuleV2Config
  */
  public constructor(scope: Construct, id: string, config: DayuL7RuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_l7_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._resourceId = config.resourceId;
    this._resourceIp = config.resourceIp;
    this._resourceType = config.resourceType;
    this._rule.internalValue = config.rule;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_ip - computed: false, optional: false, required: true
  private _resourceIp?: string; 
  public get resourceIp() {
    return this.getStringAttribute('resource_ip');
  }
  public set resourceIp(value: string) {
    this._resourceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIpInput() {
    return this._resourceIp;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new DayuL7RuleV2RuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: DayuL7RuleV2Rule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_ip: cdktf.stringToTerraform(this._resourceIp),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      rule: dayuL7RuleV2RuleToTerraform(this._rule.internalValue),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_ip: {
        value: cdktf.stringToHclTerraform(this._resourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: dayuL7RuleV2RuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuL7RuleV2RuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
