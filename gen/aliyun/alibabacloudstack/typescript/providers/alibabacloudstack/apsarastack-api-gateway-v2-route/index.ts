// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackApiGatewayV2RouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#cascade_link_ids ApsarastackApiGatewayV2Route#cascade_link_ids}
  */
  readonly cascadeLinkIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#domain_ids ApsarastackApiGatewayV2Route#domain_ids}
  */
  readonly domainIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#enable_status ApsarastackApiGatewayV2Route#enable_status}
  */
  readonly enableStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#group_id ApsarastackApiGatewayV2Route#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#gw_instance_id ApsarastackApiGatewayV2Route#gw_instance_id}
  */
  readonly gwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#id ApsarastackApiGatewayV2Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#methods ApsarastackApiGatewayV2Route#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#order ApsarastackApiGatewayV2Route#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#route_name ApsarastackApiGatewayV2Route#route_name}
  */
  readonly routeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#route_path ApsarastackApiGatewayV2Route#route_path}
  */
  readonly routePath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#service_id ApsarastackApiGatewayV2Route#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#strip_prefix ApsarastackApiGatewayV2Route#strip_prefix}
  */
  readonly stripPrefix?: number;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#cookie ApsarastackApiGatewayV2Route#cookie}
  */
  readonly cookie?: ApsarastackApiGatewayV2RouteCookie[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#header ApsarastackApiGatewayV2Route#header}
  */
  readonly header?: ApsarastackApiGatewayV2RouteHeader[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#path ApsarastackApiGatewayV2Route#path}
  */
  readonly path?: ApsarastackApiGatewayV2RoutePath;
  /**
  * query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#query_param ApsarastackApiGatewayV2Route#query_param}
  */
  readonly queryParam?: ApsarastackApiGatewayV2RouteQueryParam[] | cdktf.IResolvable;
  /**
  * service_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#service_ids ApsarastackApiGatewayV2Route#service_ids}
  */
  readonly serviceIds?: ApsarastackApiGatewayV2RouteServiceIds[] | cdktf.IResolvable;
}
export interface ApsarastackApiGatewayV2RouteCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#key ApsarastackApiGatewayV2Route#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#value ApsarastackApiGatewayV2Route#value}
  */
  readonly value: string;
}

export function apsarastackApiGatewayV2RouteCookieToTerraform(struct?: ApsarastackApiGatewayV2RouteCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackApiGatewayV2RouteCookieToHclTerraform(struct?: ApsarastackApiGatewayV2RouteCookie | cdktf.IResolvable): any {
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

export class ApsarastackApiGatewayV2RouteCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackApiGatewayV2RouteCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackApiGatewayV2RouteCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class ApsarastackApiGatewayV2RouteCookieList extends cdktf.ComplexList {
  public internalValue? : ApsarastackApiGatewayV2RouteCookie[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackApiGatewayV2RouteCookieOutputReference {
    return new ApsarastackApiGatewayV2RouteCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackApiGatewayV2RouteHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#key ApsarastackApiGatewayV2Route#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#value ApsarastackApiGatewayV2Route#value}
  */
  readonly value: string;
}

export function apsarastackApiGatewayV2RouteHeaderToTerraform(struct?: ApsarastackApiGatewayV2RouteHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackApiGatewayV2RouteHeaderToHclTerraform(struct?: ApsarastackApiGatewayV2RouteHeader | cdktf.IResolvable): any {
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

export class ApsarastackApiGatewayV2RouteHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackApiGatewayV2RouteHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackApiGatewayV2RouteHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class ApsarastackApiGatewayV2RouteHeaderList extends cdktf.ComplexList {
  public internalValue? : ApsarastackApiGatewayV2RouteHeader[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackApiGatewayV2RouteHeaderOutputReference {
    return new ApsarastackApiGatewayV2RouteHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackApiGatewayV2RoutePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#case_sensitive ApsarastackApiGatewayV2Route#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#match_type ApsarastackApiGatewayV2Route#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#match_value ApsarastackApiGatewayV2Route#match_value}
  */
  readonly matchValue?: string;
}

export function apsarastackApiGatewayV2RoutePathToTerraform(struct?: ApsarastackApiGatewayV2RoutePathOutputReference | ApsarastackApiGatewayV2RoutePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    match_value: cdktf.stringToTerraform(struct!.matchValue),
  }
}


export function apsarastackApiGatewayV2RoutePathToHclTerraform(struct?: ApsarastackApiGatewayV2RoutePathOutputReference | ApsarastackApiGatewayV2RoutePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value: {
      value: cdktf.stringToHclTerraform(struct!.matchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackApiGatewayV2RoutePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApsarastackApiGatewayV2RoutePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._matchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValue = this._matchValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackApiGatewayV2RoutePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._matchValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._matchValue = value.matchValue;
    }
  }

  // case_sensitive - computed: true, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // match_value - computed: true, optional: true, required: false
  private _matchValue?: string; 
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }
  public set matchValue(value: string) {
    this._matchValue = value;
  }
  public resetMatchValue() {
    this._matchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueInput() {
    return this._matchValue;
  }
}
export interface ApsarastackApiGatewayV2RouteQueryParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#key ApsarastackApiGatewayV2Route#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#value ApsarastackApiGatewayV2Route#value}
  */
  readonly value: string;
}

export function apsarastackApiGatewayV2RouteQueryParamToTerraform(struct?: ApsarastackApiGatewayV2RouteQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackApiGatewayV2RouteQueryParamToHclTerraform(struct?: ApsarastackApiGatewayV2RouteQueryParam | cdktf.IResolvable): any {
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

export class ApsarastackApiGatewayV2RouteQueryParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackApiGatewayV2RouteQueryParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackApiGatewayV2RouteQueryParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class ApsarastackApiGatewayV2RouteQueryParamList extends cdktf.ComplexList {
  public internalValue? : ApsarastackApiGatewayV2RouteQueryParam[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackApiGatewayV2RouteQueryParamOutputReference {
    return new ApsarastackApiGatewayV2RouteQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackApiGatewayV2RouteServiceIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#service_id ApsarastackApiGatewayV2Route#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#weight ApsarastackApiGatewayV2Route#weight}
  */
  readonly weight?: number;
}

export function apsarastackApiGatewayV2RouteServiceIdsToTerraform(struct?: ApsarastackApiGatewayV2RouteServiceIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function apsarastackApiGatewayV2RouteServiceIdsToHclTerraform(struct?: ApsarastackApiGatewayV2RouteServiceIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
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

export class ApsarastackApiGatewayV2RouteServiceIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackApiGatewayV2RouteServiceIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackApiGatewayV2RouteServiceIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceId = value.serviceId;
      this._weight = value.weight;
    }
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApsarastackApiGatewayV2RouteServiceIdsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackApiGatewayV2RouteServiceIds[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackApiGatewayV2RouteServiceIdsOutputReference {
    return new ApsarastackApiGatewayV2RouteServiceIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route apsarastack_api_gateway_v2_route}
*/
export class ApsarastackApiGatewayV2Route extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackApiGatewayV2Route resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackApiGatewayV2Route to import
  * @param importFromId The id of the existing ApsarastackApiGatewayV2Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackApiGatewayV2Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_route apsarastack_api_gateway_v2_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackApiGatewayV2RouteConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackApiGatewayV2RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_route',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cascadeLinkIds = config.cascadeLinkIds;
    this._domainIds = config.domainIds;
    this._enableStatus = config.enableStatus;
    this._groupId = config.groupId;
    this._gwInstanceId = config.gwInstanceId;
    this._id = config.id;
    this._methods = config.methods;
    this._order = config.order;
    this._routeName = config.routeName;
    this._routePath = config.routePath;
    this._serviceId = config.serviceId;
    this._stripPrefix = config.stripPrefix;
    this._cookie.internalValue = config.cookie;
    this._header.internalValue = config.header;
    this._path.internalValue = config.path;
    this._queryParam.internalValue = config.queryParam;
    this._serviceIds.internalValue = config.serviceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cascade_link_ids - computed: false, optional: true, required: false
  private _cascadeLinkIds?: string[]; 
  public get cascadeLinkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cascade_link_ids'));
  }
  public set cascadeLinkIds(value: string[]) {
    this._cascadeLinkIds = value;
  }
  public resetCascadeLinkIds() {
    this._cascadeLinkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeLinkIdsInput() {
    return this._cascadeLinkIds;
  }

  // domain_ids - computed: true, optional: true, required: false
  private _domainIds?: string[]; 
  public get domainIds() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_ids'));
  }
  public set domainIds(value: string[]) {
    this._domainIds = value;
  }
  public resetDomainIds() {
    this._domainIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdsInput() {
    return this._domainIds;
  }

  // enable_status - computed: true, optional: true, required: false
  private _enableStatus?: boolean | cdktf.IResolvable; 
  public get enableStatus() {
    return this.getBooleanAttribute('enable_status');
  }
  public set enableStatus(value: boolean | cdktf.IResolvable) {
    this._enableStatus = value;
  }
  public resetEnableStatus() {
    this._enableStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStatusInput() {
    return this._enableStatus;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // gw_instance_id - computed: false, optional: false, required: true
  private _gwInstanceId?: string; 
  public get gwInstanceId() {
    return this.getStringAttribute('gw_instance_id');
  }
  public set gwInstanceId(value: string) {
    this._gwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInstanceIdInput() {
    return this._gwInstanceId;
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

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // route_name - computed: false, optional: false, required: true
  private _routeName?: string; 
  public get routeName() {
    return this.getStringAttribute('route_name');
  }
  public set routeName(value: string) {
    this._routeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeNameInput() {
    return this._routeName;
  }

  // route_path - computed: false, optional: true, required: false
  private _routePath?: string[]; 
  public get routePath() {
    return this.getListAttribute('route_path');
  }
  public set routePath(value: string[]) {
    this._routePath = value;
  }
  public resetRoutePath() {
    this._routePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePathInput() {
    return this._routePath;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // strip_prefix - computed: false, optional: true, required: false
  private _stripPrefix?: number; 
  public get stripPrefix() {
    return this.getNumberAttribute('strip_prefix');
  }
  public set stripPrefix(value: number) {
    this._stripPrefix = value;
  }
  public resetStripPrefix() {
    this._stripPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPrefixInput() {
    return this._stripPrefix;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new ApsarastackApiGatewayV2RouteCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: ApsarastackApiGatewayV2RouteCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ApsarastackApiGatewayV2RouteHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: ApsarastackApiGatewayV2RouteHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApsarastackApiGatewayV2RoutePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ApsarastackApiGatewayV2RoutePath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_param - computed: false, optional: true, required: false
  private _queryParam = new ApsarastackApiGatewayV2RouteQueryParamList(this, "query_param", true);
  public get queryParam() {
    return this._queryParam;
  }
  public putQueryParam(value: ApsarastackApiGatewayV2RouteQueryParam[] | cdktf.IResolvable) {
    this._queryParam.internalValue = value;
  }
  public resetQueryParam() {
    this._queryParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamInput() {
    return this._queryParam.internalValue;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds = new ApsarastackApiGatewayV2RouteServiceIdsList(this, "service_ids", true);
  public get serviceIds() {
    return this._serviceIds;
  }
  public putServiceIds(value: ApsarastackApiGatewayV2RouteServiceIds[] | cdktf.IResolvable) {
    this._serviceIds.internalValue = value;
  }
  public resetServiceIds() {
    this._serviceIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cascade_link_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cascadeLinkIds),
      domain_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainIds),
      enable_status: cdktf.booleanToTerraform(this._enableStatus),
      group_id: cdktf.stringToTerraform(this._groupId),
      gw_instance_id: cdktf.stringToTerraform(this._gwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._methods),
      order: cdktf.numberToTerraform(this._order),
      route_name: cdktf.stringToTerraform(this._routeName),
      route_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routePath),
      service_id: cdktf.stringToTerraform(this._serviceId),
      strip_prefix: cdktf.numberToTerraform(this._stripPrefix),
      cookie: cdktf.listMapper(apsarastackApiGatewayV2RouteCookieToTerraform, true)(this._cookie.internalValue),
      header: cdktf.listMapper(apsarastackApiGatewayV2RouteHeaderToTerraform, true)(this._header.internalValue),
      path: apsarastackApiGatewayV2RoutePathToTerraform(this._path.internalValue),
      query_param: cdktf.listMapper(apsarastackApiGatewayV2RouteQueryParamToTerraform, true)(this._queryParam.internalValue),
      service_ids: cdktf.listMapper(apsarastackApiGatewayV2RouteServiceIdsToTerraform, true)(this._serviceIds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cascade_link_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cascadeLinkIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_status: {
        value: cdktf.booleanToHclTerraform(this._enableStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_instance_id: {
        value: cdktf.stringToHclTerraform(this._gwInstanceId),
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
      methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_name: {
        value: cdktf.stringToHclTerraform(this._routeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routePath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_prefix: {
        value: cdktf.numberToHclTerraform(this._stripPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie: {
        value: cdktf.listMapperHcl(apsarastackApiGatewayV2RouteCookieToHclTerraform, true)(this._cookie.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackApiGatewayV2RouteCookieList",
      },
      header: {
        value: cdktf.listMapperHcl(apsarastackApiGatewayV2RouteHeaderToHclTerraform, true)(this._header.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackApiGatewayV2RouteHeaderList",
      },
      path: {
        value: apsarastackApiGatewayV2RoutePathToHclTerraform(this._path.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackApiGatewayV2RoutePathList",
      },
      query_param: {
        value: cdktf.listMapperHcl(apsarastackApiGatewayV2RouteQueryParamToHclTerraform, true)(this._queryParam.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackApiGatewayV2RouteQueryParamList",
      },
      service_ids: {
        value: cdktf.listMapperHcl(apsarastackApiGatewayV2RouteServiceIdsToHclTerraform, true)(this._serviceIds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackApiGatewayV2RouteServiceIdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
