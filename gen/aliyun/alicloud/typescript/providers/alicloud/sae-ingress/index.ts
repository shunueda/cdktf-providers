// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SaeIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#cert_id SaeIngress#cert_id}
  */
  readonly certId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#cert_ids SaeIngress#cert_ids}
  */
  readonly certIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#description SaeIngress#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#id SaeIngress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#listener_port SaeIngress#listener_port}
  */
  readonly listenerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#listener_protocol SaeIngress#listener_protocol}
  */
  readonly listenerProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#load_balance_type SaeIngress#load_balance_type}
  */
  readonly loadBalanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#namespace_id SaeIngress#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#slb_id SaeIngress#slb_id}
  */
  readonly slbId: string;
  /**
  * default_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#default_rule SaeIngress#default_rule}
  */
  readonly defaultRule?: SaeIngressDefaultRule;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#rules SaeIngress#rules}
  */
  readonly rules: SaeIngressRules[] | cdktf.IResolvable;
}
export interface SaeIngressDefaultRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#app_id SaeIngress#app_id}
  */
  readonly appId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#app_name SaeIngress#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#container_port SaeIngress#container_port}
  */
  readonly containerPort?: number;
}

export function saeIngressDefaultRuleToTerraform(struct?: SaeIngressDefaultRuleOutputReference | SaeIngressDefaultRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_name: cdktf.stringToTerraform(struct!.appName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
  }
}


export function saeIngressDefaultRuleToHclTerraform(struct?: SaeIngressDefaultRuleOutputReference | SaeIngressDefaultRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeIngressDefaultRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeIngressDefaultRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeIngressDefaultRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appName = undefined;
      this._containerPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appName = value.appName;
      this._containerPort = value.containerPort;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }
}
export interface SaeIngressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#app_id SaeIngress#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#app_name SaeIngress#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#backend_protocol SaeIngress#backend_protocol}
  */
  readonly backendProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#container_port SaeIngress#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#domain SaeIngress#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#path SaeIngress#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#rewrite_path SaeIngress#rewrite_path}
  */
  readonly rewritePath?: string;
}

export function saeIngressRulesToTerraform(struct?: SaeIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_name: cdktf.stringToTerraform(struct!.appName),
    backend_protocol: cdktf.stringToTerraform(struct!.backendProtocol),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    domain: cdktf.stringToTerraform(struct!.domain),
    path: cdktf.stringToTerraform(struct!.path),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
  }
}


export function saeIngressRulesToHclTerraform(struct?: SaeIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_protocol: {
      value: cdktf.stringToHclTerraform(struct!.backendProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SaeIngressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._backendProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendProtocol = this._backendProtocol;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeIngressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._appName = undefined;
      this._backendProtocol = undefined;
      this._containerPort = undefined;
      this._domain = undefined;
      this._path = undefined;
      this._rewritePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._appName = value.appName;
      this._backendProtocol = value.backendProtocol;
      this._containerPort = value.containerPort;
      this._domain = value.domain;
      this._path = value.path;
      this._rewritePath = value.rewritePath;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // backend_protocol - computed: false, optional: true, required: false
  private _backendProtocol?: string; 
  public get backendProtocol() {
    return this.getStringAttribute('backend_protocol');
  }
  public set backendProtocol(value: string) {
    this._backendProtocol = value;
  }
  public resetBackendProtocol() {
    this._backendProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendProtocolInput() {
    return this._backendProtocol;
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
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

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }
}

export class SaeIngressRulesList extends cdktf.ComplexList {
  public internalValue? : SaeIngressRules[] | cdktf.IResolvable

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
  public get(index: number): SaeIngressRulesOutputReference {
    return new SaeIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress alicloud_sae_ingress}
*/
export class SaeIngress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sae_ingress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SaeIngress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaeIngress to import
  * @param importFromId The id of the existing SaeIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaeIngress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sae_ingress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_ingress alicloud_sae_ingress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaeIngressConfig
  */
  public constructor(scope: Construct, id: string, config: SaeIngressConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sae_ingress',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certId = config.certId;
    this._certIds = config.certIds;
    this._description = config.description;
    this._id = config.id;
    this._listenerPort = config.listenerPort;
    this._listenerProtocol = config.listenerProtocol;
    this._loadBalanceType = config.loadBalanceType;
    this._namespaceId = config.namespaceId;
    this._slbId = config.slbId;
    this._defaultRule.internalValue = config.defaultRule;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_id - computed: false, optional: true, required: false
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  public resetCertId() {
    this._certId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // cert_ids - computed: false, optional: true, required: false
  private _certIds?: string; 
  public get certIds() {
    return this.getStringAttribute('cert_ids');
  }
  public set certIds(value: string) {
    this._certIds = value;
  }
  public resetCertIds() {
    this._certIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdsInput() {
    return this._certIds;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // listener_protocol - computed: true, optional: true, required: false
  private _listenerProtocol?: string; 
  public get listenerProtocol() {
    return this.getStringAttribute('listener_protocol');
  }
  public set listenerProtocol(value: string) {
    this._listenerProtocol = value;
  }
  public resetListenerProtocol() {
    this._listenerProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerProtocolInput() {
    return this._listenerProtocol;
  }

  // load_balance_type - computed: true, optional: true, required: false
  private _loadBalanceType?: string; 
  public get loadBalanceType() {
    return this.getStringAttribute('load_balance_type');
  }
  public set loadBalanceType(value: string) {
    this._loadBalanceType = value;
  }
  public resetLoadBalanceType() {
    this._loadBalanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceTypeInput() {
    return this._loadBalanceType;
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // slb_id - computed: false, optional: false, required: true
  private _slbId?: string; 
  public get slbId() {
    return this.getStringAttribute('slb_id');
  }
  public set slbId(value: string) {
    this._slbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slbIdInput() {
    return this._slbId;
  }

  // default_rule - computed: false, optional: true, required: false
  private _defaultRule = new SaeIngressDefaultRuleOutputReference(this, "default_rule");
  public get defaultRule() {
    return this._defaultRule;
  }
  public putDefaultRule(value: SaeIngressDefaultRule) {
    this._defaultRule.internalValue = value;
  }
  public resetDefaultRule() {
    this._defaultRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleInput() {
    return this._defaultRule.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new SaeIngressRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SaeIngressRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_id: cdktf.stringToTerraform(this._certId),
      cert_ids: cdktf.stringToTerraform(this._certIds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      listener_protocol: cdktf.stringToTerraform(this._listenerProtocol),
      load_balance_type: cdktf.stringToTerraform(this._loadBalanceType),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      slb_id: cdktf.stringToTerraform(this._slbId),
      default_rule: saeIngressDefaultRuleToTerraform(this._defaultRule.internalValue),
      rules: cdktf.listMapper(saeIngressRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_id: {
        value: cdktf.stringToHclTerraform(this._certId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_ids: {
        value: cdktf.stringToHclTerraform(this._certIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_protocol: {
        value: cdktf.stringToHclTerraform(this._listenerProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balance_type: {
        value: cdktf.stringToHclTerraform(this._loadBalanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slb_id: {
        value: cdktf.stringToHclTerraform(this._slbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_rule: {
        value: saeIngressDefaultRuleToHclTerraform(this._defaultRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SaeIngressDefaultRuleList",
      },
      rules: {
        value: cdktf.listMapperHcl(saeIngressRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SaeIngressRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
