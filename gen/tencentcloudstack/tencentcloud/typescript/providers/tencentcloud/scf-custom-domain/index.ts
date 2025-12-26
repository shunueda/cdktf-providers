// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain names, pan-domain names are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#domain ScfCustomDomain#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#id ScfCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol, value range: HTTP, HTTPS, HTTP&HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#protocol ScfCustomDomain#protocol}
  */
  readonly protocol: string;
  /**
  * cert_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#cert_config ScfCustomDomain#cert_config}
  */
  readonly certConfig?: ScfCustomDomainCertConfig;
  /**
  * endpoints_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#endpoints_config ScfCustomDomain#endpoints_config}
  */
  readonly endpointsConfig: ScfCustomDomainEndpointsConfig[] | cdktf.IResolvable;
  /**
  * waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#waf_config ScfCustomDomain#waf_config}
  */
  readonly wafConfig?: ScfCustomDomainWafConfig;
}
export interface ScfCustomDomainCertConfig {
  /**
  * SSL Certificates ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#certificate_id ScfCustomDomain#certificate_id}
  */
  readonly certificateId?: string;
}

export function scfCustomDomainCertConfigToTerraform(struct?: ScfCustomDomainCertConfigOutputReference | ScfCustomDomainCertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
  }
}


export function scfCustomDomainCertConfigToHclTerraform(struct?: ScfCustomDomainCertConfigOutputReference | ScfCustomDomainCertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfCustomDomainCertConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScfCustomDomainCertConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfCustomDomainCertConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }
}
export interface ScfCustomDomainEndpointsConfigPathRewrite {
  /**
  * Path that needs to be rerouted, value specification: /,/*,/xxx,/xxx/a,/xxx/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#path ScfCustomDomain#path}
  */
  readonly path: string;
  /**
  * Replacement values: such as/, /$.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#rewrite ScfCustomDomain#rewrite}
  */
  readonly rewrite: string;
  /**
  * Matching rules, value range: WildcardRules wildcard matching, ExactRules exact matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#type ScfCustomDomain#type}
  */
  readonly type: string;
}

export function scfCustomDomainEndpointsConfigPathRewriteToTerraform(struct?: ScfCustomDomainEndpointsConfigPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    rewrite: cdktf.stringToTerraform(struct!.rewrite),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function scfCustomDomainEndpointsConfigPathRewriteToHclTerraform(struct?: ScfCustomDomainEndpointsConfigPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite: {
      value: cdktf.stringToHclTerraform(struct!.rewrite),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfCustomDomainEndpointsConfigPathRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfCustomDomainEndpointsConfigPathRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfCustomDomainEndpointsConfigPathRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._rewrite = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._rewrite = value.rewrite;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rewrite - computed: false, optional: false, required: true
  private _rewrite?: string; 
  public get rewrite() {
    return this.getStringAttribute('rewrite');
  }
  public set rewrite(value: string) {
    this._rewrite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite;
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
}

export class ScfCustomDomainEndpointsConfigPathRewriteList extends cdktf.ComplexList {
  public internalValue? : ScfCustomDomainEndpointsConfigPathRewrite[] | cdktf.IResolvable

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
  public get(index: number): ScfCustomDomainEndpointsConfigPathRewriteOutputReference {
    return new ScfCustomDomainEndpointsConfigPathRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfCustomDomainEndpointsConfig {
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#function_name ScfCustomDomain#function_name}
  */
  readonly functionName: string;
  /**
  * Function namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#namespace ScfCustomDomain#namespace}
  */
  readonly namespace: string;
  /**
  * Path, value specification: /,/*,/xxx,/xxx/a,/xxx/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#path_match ScfCustomDomain#path_match}
  */
  readonly pathMatch: string;
  /**
  * Function alias or version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#qualifier ScfCustomDomain#qualifier}
  */
  readonly qualifier: string;
  /**
  * path_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#path_rewrite ScfCustomDomain#path_rewrite}
  */
  readonly pathRewrite?: ScfCustomDomainEndpointsConfigPathRewrite[] | cdktf.IResolvable;
}

export function scfCustomDomainEndpointsConfigToTerraform(struct?: ScfCustomDomainEndpointsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path_match: cdktf.stringToTerraform(struct!.pathMatch),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    path_rewrite: cdktf.listMapper(scfCustomDomainEndpointsConfigPathRewriteToTerraform, true)(struct!.pathRewrite),
  }
}


export function scfCustomDomainEndpointsConfigToHclTerraform(struct?: ScfCustomDomainEndpointsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_match: {
      value: cdktf.stringToHclTerraform(struct!.pathMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_rewrite: {
      value: cdktf.listMapperHcl(scfCustomDomainEndpointsConfigPathRewriteToHclTerraform, true)(struct!.pathRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "ScfCustomDomainEndpointsConfigPathRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfCustomDomainEndpointsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfCustomDomainEndpointsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pathMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatch = this._pathMatch;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    if (this._pathRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRewrite = this._pathRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfCustomDomainEndpointsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._namespace = undefined;
      this._pathMatch = undefined;
      this._qualifier = undefined;
      this._pathRewrite.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._namespace = value.namespace;
      this._pathMatch = value.pathMatch;
      this._qualifier = value.qualifier;
      this._pathRewrite.internalValue = value.pathRewrite;
    }
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // path_match - computed: false, optional: false, required: true
  private _pathMatch?: string; 
  public get pathMatch() {
    return this.getStringAttribute('path_match');
  }
  public set pathMatch(value: string) {
    this._pathMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchInput() {
    return this._pathMatch;
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // path_rewrite - computed: false, optional: true, required: false
  private _pathRewrite = new ScfCustomDomainEndpointsConfigPathRewriteList(this, "path_rewrite", false);
  public get pathRewrite() {
    return this._pathRewrite;
  }
  public putPathRewrite(value: ScfCustomDomainEndpointsConfigPathRewrite[] | cdktf.IResolvable) {
    this._pathRewrite.internalValue = value;
  }
  public resetPathRewrite() {
    this._pathRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRewriteInput() {
    return this._pathRewrite.internalValue;
  }
}

export class ScfCustomDomainEndpointsConfigList extends cdktf.ComplexList {
  public internalValue? : ScfCustomDomainEndpointsConfig[] | cdktf.IResolvable

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
  public get(index: number): ScfCustomDomainEndpointsConfigOutputReference {
    return new ScfCustomDomainEndpointsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfCustomDomainWafConfig {
  /**
  * Web Application Firewall Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#waf_instance_id ScfCustomDomain#waf_instance_id}
  */
  readonly wafInstanceId?: string;
  /**
  * Whether the Web Application Firewall is turned on, value range:OPEN, CLOSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#waf_open ScfCustomDomain#waf_open}
  */
  readonly wafOpen?: string;
}

export function scfCustomDomainWafConfigToTerraform(struct?: ScfCustomDomainWafConfigOutputReference | ScfCustomDomainWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    waf_instance_id: cdktf.stringToTerraform(struct!.wafInstanceId),
    waf_open: cdktf.stringToTerraform(struct!.wafOpen),
  }
}


export function scfCustomDomainWafConfigToHclTerraform(struct?: ScfCustomDomainWafConfigOutputReference | ScfCustomDomainWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    waf_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.wafInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_open: {
      value: cdktf.stringToHclTerraform(struct!.wafOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfCustomDomainWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScfCustomDomainWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wafInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafInstanceId = this._wafInstanceId;
    }
    if (this._wafOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafOpen = this._wafOpen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfCustomDomainWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wafInstanceId = undefined;
      this._wafOpen = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wafInstanceId = value.wafInstanceId;
      this._wafOpen = value.wafOpen;
    }
  }

  // waf_instance_id - computed: false, optional: true, required: false
  private _wafInstanceId?: string; 
  public get wafInstanceId() {
    return this.getStringAttribute('waf_instance_id');
  }
  public set wafInstanceId(value: string) {
    this._wafInstanceId = value;
  }
  public resetWafInstanceId() {
    this._wafInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInstanceIdInput() {
    return this._wafInstanceId;
  }

  // waf_open - computed: false, optional: true, required: false
  private _wafOpen?: string; 
  public get wafOpen() {
    return this.getStringAttribute('waf_open');
  }
  public set wafOpen(value: string) {
    this._wafOpen = value;
  }
  public resetWafOpen() {
    this._wafOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafOpenInput() {
    return this._wafOpen;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain tencentcloud_scf_custom_domain}
*/
export class ScfCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfCustomDomain to import
  * @param importFromId The id of the existing ScfCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/scf_custom_domain tencentcloud_scf_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ScfCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._protocol = config.protocol;
    this._certConfig.internalValue = config.certConfig;
    this._endpointsConfig.internalValue = config.endpointsConfig;
    this._wafConfig.internalValue = config.wafConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cert_config - computed: false, optional: true, required: false
  private _certConfig = new ScfCustomDomainCertConfigOutputReference(this, "cert_config");
  public get certConfig() {
    return this._certConfig;
  }
  public putCertConfig(value: ScfCustomDomainCertConfig) {
    this._certConfig.internalValue = value;
  }
  public resetCertConfig() {
    this._certConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certConfigInput() {
    return this._certConfig.internalValue;
  }

  // endpoints_config - computed: false, optional: false, required: true
  private _endpointsConfig = new ScfCustomDomainEndpointsConfigList(this, "endpoints_config", false);
  public get endpointsConfig() {
    return this._endpointsConfig;
  }
  public putEndpointsConfig(value: ScfCustomDomainEndpointsConfig[] | cdktf.IResolvable) {
    this._endpointsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsConfigInput() {
    return this._endpointsConfig.internalValue;
  }

  // waf_config - computed: false, optional: true, required: false
  private _wafConfig = new ScfCustomDomainWafConfigOutputReference(this, "waf_config");
  public get wafConfig() {
    return this._wafConfig;
  }
  public putWafConfig(value: ScfCustomDomainWafConfig) {
    this._wafConfig.internalValue = value;
  }
  public resetWafConfig() {
    this._wafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafConfigInput() {
    return this._wafConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      cert_config: scfCustomDomainCertConfigToTerraform(this._certConfig.internalValue),
      endpoints_config: cdktf.listMapper(scfCustomDomainEndpointsConfigToTerraform, true)(this._endpointsConfig.internalValue),
      waf_config: scfCustomDomainWafConfigToTerraform(this._wafConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_config: {
        value: scfCustomDomainCertConfigToHclTerraform(this._certConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfCustomDomainCertConfigList",
      },
      endpoints_config: {
        value: cdktf.listMapperHcl(scfCustomDomainEndpointsConfigToHclTerraform, true)(this._endpointsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfCustomDomainEndpointsConfigList",
      },
      waf_config: {
        value: scfCustomDomainWafConfigToHclTerraform(this._wafConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfCustomDomainWafConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
