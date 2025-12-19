// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateHttpFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_action DdosZoneTemplateHttpFilter#http_filter_action}
  */
  readonly httpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_action_list_name DdosZoneTemplateHttpFilter#http_filter_action_list_name}
  */
  readonly httpFilterActionListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_name DdosZoneTemplateHttpFilter#http_filter_name}
  */
  readonly httpFilterName: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_seq DdosZoneTemplateHttpFilter#http_filter_seq}
  */
  readonly httpFilterSeq?: number;
  /**
  * HttpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_tmpl_name DdosZoneTemplateHttpFilter#http_tmpl_name}
  */
  readonly httpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#id DdosZoneTemplateHttpFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#user_tag DdosZoneTemplateHttpFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#uuid DdosZoneTemplateHttpFilter#uuid}
  */
  readonly uuid?: string;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#dst DdosZoneTemplateHttpFilter#dst}
  */
  readonly dst?: DdosZoneTemplateHttpFilterDst;
  /**
  * http_agent_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_agent_cfg DdosZoneTemplateHttpFilter#http_agent_cfg}
  */
  readonly httpAgentCfg?: DdosZoneTemplateHttpFilterHttpAgentCfg;
  /**
  * http_header_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_header_cfg DdosZoneTemplateHttpFilter#http_header_cfg}
  */
  readonly httpHeaderCfg?: DdosZoneTemplateHttpFilterHttpHeaderCfg;
  /**
  * http_referer_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_referer_cfg DdosZoneTemplateHttpFilter#http_referer_cfg}
  */
  readonly httpRefererCfg?: DdosZoneTemplateHttpFilterHttpRefererCfg;
  /**
  * http_uri_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_uri_cfg DdosZoneTemplateHttpFilter#http_uri_cfg}
  */
  readonly httpUriCfg?: DdosZoneTemplateHttpFilterHttpUriCfg;
}
export interface DdosZoneTemplateHttpFilterDst {
  /**
  * Set rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_rate_limit DdosZoneTemplateHttpFilter#http_filter_rate_limit}
  */
  readonly httpFilterRateLimit?: number;
}

export function ddosZoneTemplateHttpFilterDstToTerraform(struct?: DdosZoneTemplateHttpFilterDstOutputReference | DdosZoneTemplateHttpFilterDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_rate_limit: cdktf.numberToTerraform(struct!.httpFilterRateLimit),
  }
}


export function ddosZoneTemplateHttpFilterDstToHclTerraform(struct?: DdosZoneTemplateHttpFilterDstOutputReference | DdosZoneTemplateHttpFilterDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateLimit = this._httpFilterRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterDst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpFilterRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpFilterRateLimit = value.httpFilterRateLimit;
    }
  }

  // http_filter_rate_limit - computed: false, optional: true, required: false
  private _httpFilterRateLimit?: number; 
  public get httpFilterRateLimit() {
    return this.getNumberAttribute('http_filter_rate_limit');
  }
  public set httpFilterRateLimit(value: number) {
    this._httpFilterRateLimit = value;
  }
  public resetHttpFilterRateLimit() {
    this._httpFilterRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateLimitInput() {
    return this._httpFilterRateLimit;
  }
}
export interface DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_agent_contains DdosZoneTemplateHttpFilter#http_filter_agent_contains}
  */
  readonly httpFilterAgentContains?: string;
}

export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_contains: cdktf.stringToTerraform(struct!.httpFilterAgentContains),
  }
}


export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_contains: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentContains = this._httpFilterAgentContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentContains = value.httpFilterAgentContains;
    }
  }

  // http_filter_agent_contains - computed: false, optional: true, required: false
  private _httpFilterAgentContains?: string; 
  public get httpFilterAgentContains() {
    return this.getStringAttribute('http_filter_agent_contains');
  }
  public set httpFilterAgentContains(value: string) {
    this._httpFilterAgentContains = value;
  }
  public resetHttpFilterAgentContains() {
    this._httpFilterAgentContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentContainsInput() {
    return this._httpFilterAgentContains;
  }
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_agent_ends_with DdosZoneTemplateHttpFilter#http_filter_agent_ends_with}
  */
  readonly httpFilterAgentEndsWith?: string;
}

export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_ends_with: cdktf.stringToTerraform(struct!.httpFilterAgentEndsWith),
  }
}


export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentEndsWith = this._httpFilterAgentEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentEndsWith = value.httpFilterAgentEndsWith;
    }
  }

  // http_filter_agent_ends_with - computed: false, optional: true, required: false
  private _httpFilterAgentEndsWith?: string; 
  public get httpFilterAgentEndsWith() {
    return this.getStringAttribute('http_filter_agent_ends_with');
  }
  public set httpFilterAgentEndsWith(value: string) {
    this._httpFilterAgentEndsWith = value;
  }
  public resetHttpFilterAgentEndsWith() {
    this._httpFilterAgentEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentEndsWithInput() {
    return this._httpFilterAgentEndsWith;
  }
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_agent_equals DdosZoneTemplateHttpFilter#http_filter_agent_equals}
  */
  readonly httpFilterAgentEquals?: string;
}

export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_equals: cdktf.stringToTerraform(struct!.httpFilterAgentEquals),
  }
}


export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentEquals = this._httpFilterAgentEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentEquals = value.httpFilterAgentEquals;
    }
  }

  // http_filter_agent_equals - computed: false, optional: true, required: false
  private _httpFilterAgentEquals?: string; 
  public get httpFilterAgentEquals() {
    return this.getStringAttribute('http_filter_agent_equals');
  }
  public set httpFilterAgentEquals(value: string) {
    this._httpFilterAgentEquals = value;
  }
  public resetHttpFilterAgentEquals() {
    this._httpFilterAgentEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentEqualsInput() {
    return this._httpFilterAgentEquals;
  }
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_agent_starts_with DdosZoneTemplateHttpFilter#http_filter_agent_starts_with}
  */
  readonly httpFilterAgentStartsWith?: string;
}

export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_agent_starts_with: cdktf.stringToTerraform(struct!.httpFilterAgentStartsWith),
  }
}


export function ddosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_agent_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterAgentStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterAgentStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterAgentStartsWith = this._httpFilterAgentStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterAgentStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterAgentStartsWith = value.httpFilterAgentStartsWith;
    }
  }

  // http_filter_agent_starts_with - computed: false, optional: true, required: false
  private _httpFilterAgentStartsWith?: string; 
  public get httpFilterAgentStartsWith() {
    return this.getStringAttribute('http_filter_agent_starts_with');
  }
  public set httpFilterAgentStartsWith(value: string) {
    this._httpFilterAgentStartsWith = value;
  }
  public resetHttpFilterAgentStartsWith() {
    this._httpFilterAgentStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterAgentStartsWithInput() {
    return this._httpFilterAgentStartsWith;
  }
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpAgentCfg {
  /**
  * agent_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#agent_contains_cfg DdosZoneTemplateHttpFilter#agent_contains_cfg}
  */
  readonly agentContainsCfg?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg[] | cdktf.IResolvable;
  /**
  * agent_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#agent_ends_cfg DdosZoneTemplateHttpFilter#agent_ends_cfg}
  */
  readonly agentEndsCfg?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg[] | cdktf.IResolvable;
  /**
  * agent_equals_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#agent_equals_cfg DdosZoneTemplateHttpFilter#agent_equals_cfg}
  */
  readonly agentEqualsCfg?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg[] | cdktf.IResolvable;
  /**
  * agent_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#agent_starts_cfg DdosZoneTemplateHttpFilter#agent_starts_cfg}
  */
  readonly agentStartsCfg?: DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateHttpFilterHttpAgentCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgOutputReference | DdosZoneTemplateHttpFilterHttpAgentCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_contains_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgToTerraform, true)(struct!.agentContainsCfg),
    agent_ends_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgToTerraform, true)(struct!.agentEndsCfg),
    agent_equals_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgToTerraform, true)(struct!.agentEqualsCfg),
    agent_starts_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgToTerraform, true)(struct!.agentStartsCfg),
  }
}


export function ddosZoneTemplateHttpFilterHttpAgentCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpAgentCfgOutputReference | DdosZoneTemplateHttpFilterHttpAgentCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_contains_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgToHclTerraform, true)(struct!.agentContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgList",
    },
    agent_ends_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgToHclTerraform, true)(struct!.agentEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgList",
    },
    agent_equals_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgToHclTerraform, true)(struct!.agentEqualsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgList",
    },
    agent_starts_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgToHclTerraform, true)(struct!.agentStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpAgentCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterHttpAgentCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentContainsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentContainsCfg = this._agentContainsCfg?.internalValue;
    }
    if (this._agentEndsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentEndsCfg = this._agentEndsCfg?.internalValue;
    }
    if (this._agentEqualsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentEqualsCfg = this._agentEqualsCfg?.internalValue;
    }
    if (this._agentStartsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentStartsCfg = this._agentStartsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpAgentCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentContainsCfg.internalValue = undefined;
      this._agentEndsCfg.internalValue = undefined;
      this._agentEqualsCfg.internalValue = undefined;
      this._agentStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentContainsCfg.internalValue = value.agentContainsCfg;
      this._agentEndsCfg.internalValue = value.agentEndsCfg;
      this._agentEqualsCfg.internalValue = value.agentEqualsCfg;
      this._agentStartsCfg.internalValue = value.agentStartsCfg;
    }
  }

  // agent_contains_cfg - computed: false, optional: true, required: false
  private _agentContainsCfg = new DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfgList(this, "agent_contains_cfg", false);
  public get agentContainsCfg() {
    return this._agentContainsCfg;
  }
  public putAgentContainsCfg(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentContainsCfg[] | cdktf.IResolvable) {
    this._agentContainsCfg.internalValue = value;
  }
  public resetAgentContainsCfg() {
    this._agentContainsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentContainsCfgInput() {
    return this._agentContainsCfg.internalValue;
  }

  // agent_ends_cfg - computed: false, optional: true, required: false
  private _agentEndsCfg = new DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfgList(this, "agent_ends_cfg", false);
  public get agentEndsCfg() {
    return this._agentEndsCfg;
  }
  public putAgentEndsCfg(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEndsCfg[] | cdktf.IResolvable) {
    this._agentEndsCfg.internalValue = value;
  }
  public resetAgentEndsCfg() {
    this._agentEndsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEndsCfgInput() {
    return this._agentEndsCfg.internalValue;
  }

  // agent_equals_cfg - computed: false, optional: true, required: false
  private _agentEqualsCfg = new DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfgList(this, "agent_equals_cfg", false);
  public get agentEqualsCfg() {
    return this._agentEqualsCfg;
  }
  public putAgentEqualsCfg(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentEqualsCfg[] | cdktf.IResolvable) {
    this._agentEqualsCfg.internalValue = value;
  }
  public resetAgentEqualsCfg() {
    this._agentEqualsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEqualsCfgInput() {
    return this._agentEqualsCfg.internalValue;
  }

  // agent_starts_cfg - computed: false, optional: true, required: false
  private _agentStartsCfg = new DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfgList(this, "agent_starts_cfg", false);
  public get agentStartsCfg() {
    return this._agentStartsCfg;
  }
  public putAgentStartsCfg(value: DdosZoneTemplateHttpFilterHttpAgentCfgAgentStartsCfg[] | cdktf.IResolvable) {
    this._agentStartsCfg.internalValue = value;
  }
  public resetAgentStartsCfg() {
    this._agentStartsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentStartsCfgInput() {
    return this._agentStartsCfg.internalValue;
  }
}
export interface DdosZoneTemplateHttpFilterHttpHeaderCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_header_inverse_match DdosZoneTemplateHttpFilter#http_filter_header_inverse_match}
  */
  readonly httpFilterHeaderInverseMatch?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_header_regex DdosZoneTemplateHttpFilter#http_filter_header_regex}
  */
  readonly httpFilterHeaderRegex?: string;
}

export function ddosZoneTemplateHttpFilterHttpHeaderCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpHeaderCfgOutputReference | DdosZoneTemplateHttpFilterHttpHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_header_inverse_match: cdktf.numberToTerraform(struct!.httpFilterHeaderInverseMatch),
    http_filter_header_regex: cdktf.stringToTerraform(struct!.httpFilterHeaderRegex),
  }
}


export function ddosZoneTemplateHttpFilterHttpHeaderCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpHeaderCfgOutputReference | DdosZoneTemplateHttpFilterHttpHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_header_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.httpFilterHeaderInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_header_regex: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterHeaderRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpHeaderCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterHttpHeaderCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterHeaderInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderInverseMatch = this._httpFilterHeaderInverseMatch;
    }
    if (this._httpFilterHeaderRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterHeaderRegex = this._httpFilterHeaderRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpHeaderCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpFilterHeaderInverseMatch = undefined;
      this._httpFilterHeaderRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpFilterHeaderInverseMatch = value.httpFilterHeaderInverseMatch;
      this._httpFilterHeaderRegex = value.httpFilterHeaderRegex;
    }
  }

  // http_filter_header_inverse_match - computed: false, optional: true, required: false
  private _httpFilterHeaderInverseMatch?: number; 
  public get httpFilterHeaderInverseMatch() {
    return this.getNumberAttribute('http_filter_header_inverse_match');
  }
  public set httpFilterHeaderInverseMatch(value: number) {
    this._httpFilterHeaderInverseMatch = value;
  }
  public resetHttpFilterHeaderInverseMatch() {
    this._httpFilterHeaderInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderInverseMatchInput() {
    return this._httpFilterHeaderInverseMatch;
  }

  // http_filter_header_regex - computed: false, optional: true, required: false
  private _httpFilterHeaderRegex?: string; 
  public get httpFilterHeaderRegex() {
    return this.getStringAttribute('http_filter_header_regex');
  }
  public set httpFilterHeaderRegex(value: string) {
    this._httpFilterHeaderRegex = value;
  }
  public resetHttpFilterHeaderRegex() {
    this._httpFilterHeaderRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderRegexInput() {
    return this._httpFilterHeaderRegex;
  }
}
export interface DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_referer_contains DdosZoneTemplateHttpFilter#http_filter_referer_contains}
  */
  readonly httpFilterRefererContains?: string;
}

export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_contains: cdktf.stringToTerraform(struct!.httpFilterRefererContains),
  }
}


export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_contains: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererContains = this._httpFilterRefererContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererContains = value.httpFilterRefererContains;
    }
  }

  // http_filter_referer_contains - computed: false, optional: true, required: false
  private _httpFilterRefererContains?: string; 
  public get httpFilterRefererContains() {
    return this.getStringAttribute('http_filter_referer_contains');
  }
  public set httpFilterRefererContains(value: string) {
    this._httpFilterRefererContains = value;
  }
  public resetHttpFilterRefererContains() {
    this._httpFilterRefererContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererContainsInput() {
    return this._httpFilterRefererContains;
  }
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_referer_ends_with DdosZoneTemplateHttpFilter#http_filter_referer_ends_with}
  */
  readonly httpFilterRefererEndsWith?: string;
}

export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_ends_with: cdktf.stringToTerraform(struct!.httpFilterRefererEndsWith),
  }
}


export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererEndsWith = this._httpFilterRefererEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererEndsWith = value.httpFilterRefererEndsWith;
    }
  }

  // http_filter_referer_ends_with - computed: false, optional: true, required: false
  private _httpFilterRefererEndsWith?: string; 
  public get httpFilterRefererEndsWith() {
    return this.getStringAttribute('http_filter_referer_ends_with');
  }
  public set httpFilterRefererEndsWith(value: string) {
    this._httpFilterRefererEndsWith = value;
  }
  public resetHttpFilterRefererEndsWith() {
    this._httpFilterRefererEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererEndsWithInput() {
    return this._httpFilterRefererEndsWith;
  }
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_referer_equals DdosZoneTemplateHttpFilter#http_filter_referer_equals}
  */
  readonly httpFilterRefererEquals?: string;
}

export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_equals: cdktf.stringToTerraform(struct!.httpFilterRefererEquals),
  }
}


export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererEquals = this._httpFilterRefererEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererEquals = value.httpFilterRefererEquals;
    }
  }

  // http_filter_referer_equals - computed: false, optional: true, required: false
  private _httpFilterRefererEquals?: string; 
  public get httpFilterRefererEquals() {
    return this.getStringAttribute('http_filter_referer_equals');
  }
  public set httpFilterRefererEquals(value: string) {
    this._httpFilterRefererEquals = value;
  }
  public resetHttpFilterRefererEquals() {
    this._httpFilterRefererEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererEqualsInput() {
    return this._httpFilterRefererEquals;
  }
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_referer_starts_with DdosZoneTemplateHttpFilter#http_filter_referer_starts_with}
  */
  readonly httpFilterRefererStartsWith?: string;
}

export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_referer_starts_with: cdktf.stringToTerraform(struct!.httpFilterRefererStartsWith),
  }
}


export function ddosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_referer_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRefererStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterRefererStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRefererStartsWith = this._httpFilterRefererStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterRefererStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterRefererStartsWith = value.httpFilterRefererStartsWith;
    }
  }

  // http_filter_referer_starts_with - computed: false, optional: true, required: false
  private _httpFilterRefererStartsWith?: string; 
  public get httpFilterRefererStartsWith() {
    return this.getStringAttribute('http_filter_referer_starts_with');
  }
  public set httpFilterRefererStartsWith(value: string) {
    this._httpFilterRefererStartsWith = value;
  }
  public resetHttpFilterRefererStartsWith() {
    this._httpFilterRefererStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRefererStartsWithInput() {
    return this._httpFilterRefererStartsWith;
  }
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpRefererCfg {
  /**
  * referer_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#referer_contains_cfg DdosZoneTemplateHttpFilter#referer_contains_cfg}
  */
  readonly refererContainsCfg?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg[] | cdktf.IResolvable;
  /**
  * referer_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#referer_ends_cfg DdosZoneTemplateHttpFilter#referer_ends_cfg}
  */
  readonly refererEndsCfg?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg[] | cdktf.IResolvable;
  /**
  * referer_equals_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#referer_equals_cfg DdosZoneTemplateHttpFilter#referer_equals_cfg}
  */
  readonly refererEqualsCfg?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg[] | cdktf.IResolvable;
  /**
  * referer_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#referer_starts_cfg DdosZoneTemplateHttpFilter#referer_starts_cfg}
  */
  readonly refererStartsCfg?: DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateHttpFilterHttpRefererCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgOutputReference | DdosZoneTemplateHttpFilterHttpRefererCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referer_contains_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgToTerraform, true)(struct!.refererContainsCfg),
    referer_ends_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgToTerraform, true)(struct!.refererEndsCfg),
    referer_equals_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgToTerraform, true)(struct!.refererEqualsCfg),
    referer_starts_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgToTerraform, true)(struct!.refererStartsCfg),
  }
}


export function ddosZoneTemplateHttpFilterHttpRefererCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpRefererCfgOutputReference | DdosZoneTemplateHttpFilterHttpRefererCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referer_contains_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgToHclTerraform, true)(struct!.refererContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgList",
    },
    referer_ends_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgToHclTerraform, true)(struct!.refererEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgList",
    },
    referer_equals_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgToHclTerraform, true)(struct!.refererEqualsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgList",
    },
    referer_starts_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgToHclTerraform, true)(struct!.refererStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpRefererCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterHttpRefererCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refererContainsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererContainsCfg = this._refererContainsCfg?.internalValue;
    }
    if (this._refererEndsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererEndsCfg = this._refererEndsCfg?.internalValue;
    }
    if (this._refererEqualsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererEqualsCfg = this._refererEqualsCfg?.internalValue;
    }
    if (this._refererStartsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererStartsCfg = this._refererStartsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpRefererCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refererContainsCfg.internalValue = undefined;
      this._refererEndsCfg.internalValue = undefined;
      this._refererEqualsCfg.internalValue = undefined;
      this._refererStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refererContainsCfg.internalValue = value.refererContainsCfg;
      this._refererEndsCfg.internalValue = value.refererEndsCfg;
      this._refererEqualsCfg.internalValue = value.refererEqualsCfg;
      this._refererStartsCfg.internalValue = value.refererStartsCfg;
    }
  }

  // referer_contains_cfg - computed: false, optional: true, required: false
  private _refererContainsCfg = new DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfgList(this, "referer_contains_cfg", false);
  public get refererContainsCfg() {
    return this._refererContainsCfg;
  }
  public putRefererContainsCfg(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererContainsCfg[] | cdktf.IResolvable) {
    this._refererContainsCfg.internalValue = value;
  }
  public resetRefererContainsCfg() {
    this._refererContainsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererContainsCfgInput() {
    return this._refererContainsCfg.internalValue;
  }

  // referer_ends_cfg - computed: false, optional: true, required: false
  private _refererEndsCfg = new DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfgList(this, "referer_ends_cfg", false);
  public get refererEndsCfg() {
    return this._refererEndsCfg;
  }
  public putRefererEndsCfg(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEndsCfg[] | cdktf.IResolvable) {
    this._refererEndsCfg.internalValue = value;
  }
  public resetRefererEndsCfg() {
    this._refererEndsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererEndsCfgInput() {
    return this._refererEndsCfg.internalValue;
  }

  // referer_equals_cfg - computed: false, optional: true, required: false
  private _refererEqualsCfg = new DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfgList(this, "referer_equals_cfg", false);
  public get refererEqualsCfg() {
    return this._refererEqualsCfg;
  }
  public putRefererEqualsCfg(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererEqualsCfg[] | cdktf.IResolvable) {
    this._refererEqualsCfg.internalValue = value;
  }
  public resetRefererEqualsCfg() {
    this._refererEqualsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererEqualsCfgInput() {
    return this._refererEqualsCfg.internalValue;
  }

  // referer_starts_cfg - computed: false, optional: true, required: false
  private _refererStartsCfg = new DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfgList(this, "referer_starts_cfg", false);
  public get refererStartsCfg() {
    return this._refererStartsCfg;
  }
  public putRefererStartsCfg(value: DdosZoneTemplateHttpFilterHttpRefererCfgRefererStartsCfg[] | cdktf.IResolvable) {
    this._refererStartsCfg.internalValue = value;
  }
  public resetRefererStartsCfg() {
    this._refererStartsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererStartsCfgInput() {
    return this._refererStartsCfg.internalValue;
  }
}
export interface DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_uri_contains DdosZoneTemplateHttpFilter#http_filter_uri_contains}
  */
  readonly httpFilterUriContains?: string;
}

export function ddosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_contains: cdktf.stringToTerraform(struct!.httpFilterUriContains),
  }
}


export function ddosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_contains: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriContains = this._httpFilterUriContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriContains = value.httpFilterUriContains;
    }
  }

  // http_filter_uri_contains - computed: false, optional: true, required: false
  private _httpFilterUriContains?: string; 
  public get httpFilterUriContains() {
    return this.getStringAttribute('http_filter_uri_contains');
  }
  public set httpFilterUriContains(value: string) {
    this._httpFilterUriContains = value;
  }
  public resetHttpFilterUriContains() {
    this._httpFilterUriContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriContainsInput() {
    return this._httpFilterUriContains;
  }
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_uri_ends_with DdosZoneTemplateHttpFilter#http_filter_uri_ends_with}
  */
  readonly httpFilterUriEndsWith?: string;
}

export function ddosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_ends_with: cdktf.stringToTerraform(struct!.httpFilterUriEndsWith),
  }
}


export function ddosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriEndsWith = this._httpFilterUriEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriEndsWith = value.httpFilterUriEndsWith;
    }
  }

  // http_filter_uri_ends_with - computed: false, optional: true, required: false
  private _httpFilterUriEndsWith?: string; 
  public get httpFilterUriEndsWith() {
    return this.getStringAttribute('http_filter_uri_ends_with');
  }
  public set httpFilterUriEndsWith(value: string) {
    this._httpFilterUriEndsWith = value;
  }
  public resetHttpFilterUriEndsWith() {
    this._httpFilterUriEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriEndsWithInput() {
    return this._httpFilterUriEndsWith;
  }
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_uri_equals DdosZoneTemplateHttpFilter#http_filter_uri_equals}
  */
  readonly httpFilterUriEquals?: string;
}

export function ddosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_equals: cdktf.stringToTerraform(struct!.httpFilterUriEquals),
  }
}


export function ddosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriEquals = this._httpFilterUriEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriEquals = value.httpFilterUriEquals;
    }
  }

  // http_filter_uri_equals - computed: false, optional: true, required: false
  private _httpFilterUriEquals?: string; 
  public get httpFilterUriEquals() {
    return this.getStringAttribute('http_filter_uri_equals');
  }
  public set httpFilterUriEquals(value: string) {
    this._httpFilterUriEquals = value;
  }
  public resetHttpFilterUriEquals() {
    this._httpFilterUriEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriEqualsInput() {
    return this._httpFilterUriEquals;
  }
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#http_filter_uri_starts_with DdosZoneTemplateHttpFilter#http_filter_uri_starts_with}
  */
  readonly httpFilterUriStartsWith?: string;
}

export function ddosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_filter_uri_starts_with: cdktf.stringToTerraform(struct!.httpFilterUriStartsWith),
  }
}


export function ddosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_filter_uri_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterUriStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFilterUriStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterUriStartsWith = this._httpFilterUriStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFilterUriStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFilterUriStartsWith = value.httpFilterUriStartsWith;
    }
  }

  // http_filter_uri_starts_with - computed: false, optional: true, required: false
  private _httpFilterUriStartsWith?: string; 
  public get httpFilterUriStartsWith() {
    return this.getStringAttribute('http_filter_uri_starts_with');
  }
  public set httpFilterUriStartsWith(value: string) {
    this._httpFilterUriStartsWith = value;
  }
  public resetHttpFilterUriStartsWith() {
    this._httpFilterUriStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterUriStartsWithInput() {
    return this._httpFilterUriStartsWith;
  }
}

export class DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgOutputReference {
    return new DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateHttpFilterHttpUriCfg {
  /**
  * uri_contains_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#uri_contains_cfg DdosZoneTemplateHttpFilter#uri_contains_cfg}
  */
  readonly uriContainsCfg?: DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg[] | cdktf.IResolvable;
  /**
  * uri_ends_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#uri_ends_cfg DdosZoneTemplateHttpFilter#uri_ends_cfg}
  */
  readonly uriEndsCfg?: DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg[] | cdktf.IResolvable;
  /**
  * uri_equal_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#uri_equal_cfg DdosZoneTemplateHttpFilter#uri_equal_cfg}
  */
  readonly uriEqualCfg?: DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg[] | cdktf.IResolvable;
  /**
  * uri_starts_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#uri_starts_cfg DdosZoneTemplateHttpFilter#uri_starts_cfg}
  */
  readonly uriStartsCfg?: DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg[] | cdktf.IResolvable;
}

export function ddosZoneTemplateHttpFilterHttpUriCfgToTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgOutputReference | DdosZoneTemplateHttpFilterHttpUriCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri_contains_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgToTerraform, true)(struct!.uriContainsCfg),
    uri_ends_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgToTerraform, true)(struct!.uriEndsCfg),
    uri_equal_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgToTerraform, true)(struct!.uriEqualCfg),
    uri_starts_cfg: cdktf.listMapper(ddosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgToTerraform, true)(struct!.uriStartsCfg),
  }
}


export function ddosZoneTemplateHttpFilterHttpUriCfgToHclTerraform(struct?: DdosZoneTemplateHttpFilterHttpUriCfgOutputReference | DdosZoneTemplateHttpFilterHttpUriCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri_contains_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgToHclTerraform, true)(struct!.uriContainsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgList",
    },
    uri_ends_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgToHclTerraform, true)(struct!.uriEndsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgList",
    },
    uri_equal_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgToHclTerraform, true)(struct!.uriEqualCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgList",
    },
    uri_starts_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgToHclTerraform, true)(struct!.uriStartsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateHttpFilterHttpUriCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateHttpFilterHttpUriCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uriContainsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriContainsCfg = this._uriContainsCfg?.internalValue;
    }
    if (this._uriEndsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriEndsCfg = this._uriEndsCfg?.internalValue;
    }
    if (this._uriEqualCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriEqualCfg = this._uriEqualCfg?.internalValue;
    }
    if (this._uriStartsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriStartsCfg = this._uriStartsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateHttpFilterHttpUriCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uriContainsCfg.internalValue = undefined;
      this._uriEndsCfg.internalValue = undefined;
      this._uriEqualCfg.internalValue = undefined;
      this._uriStartsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uriContainsCfg.internalValue = value.uriContainsCfg;
      this._uriEndsCfg.internalValue = value.uriEndsCfg;
      this._uriEqualCfg.internalValue = value.uriEqualCfg;
      this._uriStartsCfg.internalValue = value.uriStartsCfg;
    }
  }

  // uri_contains_cfg - computed: false, optional: true, required: false
  private _uriContainsCfg = new DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfgList(this, "uri_contains_cfg", false);
  public get uriContainsCfg() {
    return this._uriContainsCfg;
  }
  public putUriContainsCfg(value: DdosZoneTemplateHttpFilterHttpUriCfgUriContainsCfg[] | cdktf.IResolvable) {
    this._uriContainsCfg.internalValue = value;
  }
  public resetUriContainsCfg() {
    this._uriContainsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriContainsCfgInput() {
    return this._uriContainsCfg.internalValue;
  }

  // uri_ends_cfg - computed: false, optional: true, required: false
  private _uriEndsCfg = new DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfgList(this, "uri_ends_cfg", false);
  public get uriEndsCfg() {
    return this._uriEndsCfg;
  }
  public putUriEndsCfg(value: DdosZoneTemplateHttpFilterHttpUriCfgUriEndsCfg[] | cdktf.IResolvable) {
    this._uriEndsCfg.internalValue = value;
  }
  public resetUriEndsCfg() {
    this._uriEndsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriEndsCfgInput() {
    return this._uriEndsCfg.internalValue;
  }

  // uri_equal_cfg - computed: false, optional: true, required: false
  private _uriEqualCfg = new DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfgList(this, "uri_equal_cfg", false);
  public get uriEqualCfg() {
    return this._uriEqualCfg;
  }
  public putUriEqualCfg(value: DdosZoneTemplateHttpFilterHttpUriCfgUriEqualCfg[] | cdktf.IResolvable) {
    this._uriEqualCfg.internalValue = value;
  }
  public resetUriEqualCfg() {
    this._uriEqualCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriEqualCfgInput() {
    return this._uriEqualCfg.internalValue;
  }

  // uri_starts_cfg - computed: false, optional: true, required: false
  private _uriStartsCfg = new DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfgList(this, "uri_starts_cfg", false);
  public get uriStartsCfg() {
    return this._uriStartsCfg;
  }
  public putUriStartsCfg(value: DdosZoneTemplateHttpFilterHttpUriCfgUriStartsCfg[] | cdktf.IResolvable) {
    this._uriStartsCfg.internalValue = value;
  }
  public resetUriStartsCfg() {
    this._uriStartsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriStartsCfgInput() {
    return this._uriStartsCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter thunder_ddos_zone_template_http_filter}
*/
export class DdosZoneTemplateHttpFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_http_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateHttpFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateHttpFilter to import
  * @param importFromId The id of the existing DdosZoneTemplateHttpFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateHttpFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_http_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_filter thunder_ddos_zone_template_http_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateHttpFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateHttpFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_http_filter',
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
    this._httpFilterAction = config.httpFilterAction;
    this._httpFilterActionListName = config.httpFilterActionListName;
    this._httpFilterName = config.httpFilterName;
    this._httpFilterSeq = config.httpFilterSeq;
    this._httpTmplName = config.httpTmplName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dst.internalValue = config.dst;
    this._httpAgentCfg.internalValue = config.httpAgentCfg;
    this._httpHeaderCfg.internalValue = config.httpHeaderCfg;
    this._httpRefererCfg.internalValue = config.httpRefererCfg;
    this._httpUriCfg.internalValue = config.httpUriCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_filter_action - computed: false, optional: true, required: false
  private _httpFilterAction?: string; 
  public get httpFilterAction() {
    return this.getStringAttribute('http_filter_action');
  }
  public set httpFilterAction(value: string) {
    this._httpFilterAction = value;
  }
  public resetHttpFilterAction() {
    this._httpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterActionInput() {
    return this._httpFilterAction;
  }

  // http_filter_action_list_name - computed: false, optional: true, required: false
  private _httpFilterActionListName?: string; 
  public get httpFilterActionListName() {
    return this.getStringAttribute('http_filter_action_list_name');
  }
  public set httpFilterActionListName(value: string) {
    this._httpFilterActionListName = value;
  }
  public resetHttpFilterActionListName() {
    this._httpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterActionListNameInput() {
    return this._httpFilterActionListName;
  }

  // http_filter_name - computed: false, optional: false, required: true
  private _httpFilterName?: string; 
  public get httpFilterName() {
    return this.getStringAttribute('http_filter_name');
  }
  public set httpFilterName(value: string) {
    this._httpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterNameInput() {
    return this._httpFilterName;
  }

  // http_filter_seq - computed: false, optional: true, required: false
  private _httpFilterSeq?: number; 
  public get httpFilterSeq() {
    return this.getNumberAttribute('http_filter_seq');
  }
  public set httpFilterSeq(value: number) {
    this._httpFilterSeq = value;
  }
  public resetHttpFilterSeq() {
    this._httpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterSeqInput() {
    return this._httpFilterSeq;
  }

  // http_tmpl_name - computed: false, optional: false, required: true
  private _httpTmplName?: string; 
  public get httpTmplName() {
    return this.getStringAttribute('http_tmpl_name');
  }
  public set httpTmplName(value: string) {
    this._httpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTmplNameInput() {
    return this._httpTmplName;
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

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateHttpFilterDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateHttpFilterDst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // http_agent_cfg - computed: false, optional: true, required: false
  private _httpAgentCfg = new DdosZoneTemplateHttpFilterHttpAgentCfgOutputReference(this, "http_agent_cfg");
  public get httpAgentCfg() {
    return this._httpAgentCfg;
  }
  public putHttpAgentCfg(value: DdosZoneTemplateHttpFilterHttpAgentCfg) {
    this._httpAgentCfg.internalValue = value;
  }
  public resetHttpAgentCfg() {
    this._httpAgentCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAgentCfgInput() {
    return this._httpAgentCfg.internalValue;
  }

  // http_header_cfg - computed: false, optional: true, required: false
  private _httpHeaderCfg = new DdosZoneTemplateHttpFilterHttpHeaderCfgOutputReference(this, "http_header_cfg");
  public get httpHeaderCfg() {
    return this._httpHeaderCfg;
  }
  public putHttpHeaderCfg(value: DdosZoneTemplateHttpFilterHttpHeaderCfg) {
    this._httpHeaderCfg.internalValue = value;
  }
  public resetHttpHeaderCfg() {
    this._httpHeaderCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderCfgInput() {
    return this._httpHeaderCfg.internalValue;
  }

  // http_referer_cfg - computed: false, optional: true, required: false
  private _httpRefererCfg = new DdosZoneTemplateHttpFilterHttpRefererCfgOutputReference(this, "http_referer_cfg");
  public get httpRefererCfg() {
    return this._httpRefererCfg;
  }
  public putHttpRefererCfg(value: DdosZoneTemplateHttpFilterHttpRefererCfg) {
    this._httpRefererCfg.internalValue = value;
  }
  public resetHttpRefererCfg() {
    this._httpRefererCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRefererCfgInput() {
    return this._httpRefererCfg.internalValue;
  }

  // http_uri_cfg - computed: false, optional: true, required: false
  private _httpUriCfg = new DdosZoneTemplateHttpFilterHttpUriCfgOutputReference(this, "http_uri_cfg");
  public get httpUriCfg() {
    return this._httpUriCfg;
  }
  public putHttpUriCfg(value: DdosZoneTemplateHttpFilterHttpUriCfg) {
    this._httpUriCfg.internalValue = value;
  }
  public resetHttpUriCfg() {
    this._httpUriCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUriCfgInput() {
    return this._httpUriCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_filter_action: cdktf.stringToTerraform(this._httpFilterAction),
      http_filter_action_list_name: cdktf.stringToTerraform(this._httpFilterActionListName),
      http_filter_name: cdktf.stringToTerraform(this._httpFilterName),
      http_filter_seq: cdktf.numberToTerraform(this._httpFilterSeq),
      http_tmpl_name: cdktf.stringToTerraform(this._httpTmplName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dst: ddosZoneTemplateHttpFilterDstToTerraform(this._dst.internalValue),
      http_agent_cfg: ddosZoneTemplateHttpFilterHttpAgentCfgToTerraform(this._httpAgentCfg.internalValue),
      http_header_cfg: ddosZoneTemplateHttpFilterHttpHeaderCfgToTerraform(this._httpHeaderCfg.internalValue),
      http_referer_cfg: ddosZoneTemplateHttpFilterHttpRefererCfgToTerraform(this._httpRefererCfg.internalValue),
      http_uri_cfg: ddosZoneTemplateHttpFilterHttpUriCfgToTerraform(this._httpUriCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_filter_action: {
        value: cdktf.stringToHclTerraform(this._httpFilterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_filter_action_list_name: {
        value: cdktf.stringToHclTerraform(this._httpFilterActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_filter_name: {
        value: cdktf.stringToHclTerraform(this._httpFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_filter_seq: {
        value: cdktf.numberToHclTerraform(this._httpFilterSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._httpTmplName),
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
      dst: {
        value: ddosZoneTemplateHttpFilterDstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpFilterDstList",
      },
      http_agent_cfg: {
        value: ddosZoneTemplateHttpFilterHttpAgentCfgToHclTerraform(this._httpAgentCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpFilterHttpAgentCfgList",
      },
      http_header_cfg: {
        value: ddosZoneTemplateHttpFilterHttpHeaderCfgToHclTerraform(this._httpHeaderCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpFilterHttpHeaderCfgList",
      },
      http_referer_cfg: {
        value: ddosZoneTemplateHttpFilterHttpRefererCfgToHclTerraform(this._httpRefererCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpFilterHttpRefererCfgList",
      },
      http_uri_cfg: {
        value: ddosZoneTemplateHttpFilterHttpUriCfgToHclTerraform(this._httpUriCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateHttpFilterHttpUriCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
