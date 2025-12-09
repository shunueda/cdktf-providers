// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteContractServiceGraphListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#contract_name SchemaSiteContractServiceGraphListener#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#frontend_ip_dn SchemaSiteContractServiceGraphListener#frontend_ip_dn}
  */
  readonly frontendIpDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#id SchemaSiteContractServiceGraphListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#listener_name SchemaSiteContractServiceGraphListener#listener_name}
  */
  readonly listenerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#port SchemaSiteContractServiceGraphListener#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#protocol SchemaSiteContractServiceGraphListener#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#schema_id SchemaSiteContractServiceGraphListener#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#security_policy SchemaSiteContractServiceGraphListener#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#service_node_index SchemaSiteContractServiceGraphListener#service_node_index}
  */
  readonly serviceNodeIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#site_id SchemaSiteContractServiceGraphListener#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#template_name SchemaSiteContractServiceGraphListener#template_name}
  */
  readonly templateName: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#rules SchemaSiteContractServiceGraphListener#rules}
  */
  readonly rules?: SchemaSiteContractServiceGraphListenerRules[] | cdktf.IResolvable;
  /**
  * ssl_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#ssl_certificates SchemaSiteContractServiceGraphListener#ssl_certificates}
  */
  readonly sslCertificates?: SchemaSiteContractServiceGraphListenerSslCertificates[] | cdktf.IResolvable;
}
export interface SchemaSiteContractServiceGraphListenerRulesHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#host SchemaSiteContractServiceGraphListener#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#interval SchemaSiteContractServiceGraphListener#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#path SchemaSiteContractServiceGraphListener#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#port SchemaSiteContractServiceGraphListener#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#protocol SchemaSiteContractServiceGraphListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#success_code SchemaSiteContractServiceGraphListener#success_code}
  */
  readonly successCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#timeout SchemaSiteContractServiceGraphListener#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#unhealthy_threshold SchemaSiteContractServiceGraphListener#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#use_host_from_rule SchemaSiteContractServiceGraphListener#use_host_from_rule}
  */
  readonly useHostFromRule?: boolean | cdktf.IResolvable;
}

export function schemaSiteContractServiceGraphListenerRulesHealthCheckToTerraform(struct?: SchemaSiteContractServiceGraphListenerRulesHealthCheckOutputReference | SchemaSiteContractServiceGraphListenerRulesHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    interval: cdktf.numberToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    success_code: cdktf.stringToTerraform(struct!.successCode),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    use_host_from_rule: cdktf.booleanToTerraform(struct!.useHostFromRule),
  }
}


export function schemaSiteContractServiceGraphListenerRulesHealthCheckToHclTerraform(struct?: SchemaSiteContractServiceGraphListenerRulesHealthCheckOutputReference | SchemaSiteContractServiceGraphListenerRulesHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    success_code: {
      value: cdktf.stringToHclTerraform(struct!.successCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_host_from_rule: {
      value: cdktf.booleanToHclTerraform(struct!.useHostFromRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteContractServiceGraphListenerRulesHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaSiteContractServiceGraphListenerRulesHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._successCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCode = this._successCode;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._useHostFromRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostFromRule = this._useHostFromRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteContractServiceGraphListenerRulesHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._successCode = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
      this._useHostFromRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._interval = value.interval;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._successCode = value.successCode;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._useHostFromRule = value.useHostFromRule;
    }
  }

  // host - computed: true, optional: true, required: false
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

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // success_code - computed: true, optional: true, required: false
  private _successCode?: string; 
  public get successCode() {
    return this.getStringAttribute('success_code');
  }
  public set successCode(value: string) {
    this._successCode = value;
  }
  public resetSuccessCode() {
    this._successCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successCodeInput() {
    return this._successCode;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // use_host_from_rule - computed: true, optional: true, required: false
  private _useHostFromRule?: boolean | cdktf.IResolvable; 
  public get useHostFromRule() {
    return this.getBooleanAttribute('use_host_from_rule');
  }
  public set useHostFromRule(value: boolean | cdktf.IResolvable) {
    this._useHostFromRule = value;
  }
  public resetUseHostFromRule() {
    this._useHostFromRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostFromRuleInput() {
    return this._useHostFromRule;
  }
}
export interface SchemaSiteContractServiceGraphListenerRulesProviderEpgRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#anp_name SchemaSiteContractServiceGraphListener#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#epg_name SchemaSiteContractServiceGraphListener#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#schema_id SchemaSiteContractServiceGraphListener#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#template_name SchemaSiteContractServiceGraphListener#template_name}
  */
  readonly templateName?: string;
}

export function schemaSiteContractServiceGraphListenerRulesProviderEpgRefToTerraform(struct?: SchemaSiteContractServiceGraphListenerRulesProviderEpgRefOutputReference | SchemaSiteContractServiceGraphListenerRulesProviderEpgRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anp_name: cdktf.stringToTerraform(struct!.anpName),
    epg_name: cdktf.stringToTerraform(struct!.epgName),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function schemaSiteContractServiceGraphListenerRulesProviderEpgRefToHclTerraform(struct?: SchemaSiteContractServiceGraphListenerRulesProviderEpgRefOutputReference | SchemaSiteContractServiceGraphListenerRulesProviderEpgRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anp_name: {
      value: cdktf.stringToHclTerraform(struct!.anpName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epg_name: {
      value: cdktf.stringToHclTerraform(struct!.epgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteContractServiceGraphListenerRulesProviderEpgRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaSiteContractServiceGraphListenerRulesProviderEpgRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anpName !== undefined) {
      hasAnyValues = true;
      internalValueResult.anpName = this._anpName;
    }
    if (this._epgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.epgName = this._epgName;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteContractServiceGraphListenerRulesProviderEpgRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anpName = undefined;
      this._epgName = undefined;
      this._schemaId = undefined;
      this._templateName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anpName = value.anpName;
      this._epgName = value.epgName;
      this._schemaId = value.schemaId;
      this._templateName = value.templateName;
    }
  }

  // anp_name - computed: false, optional: false, required: true
  private _anpName?: string; 
  public get anpName() {
    return this.getStringAttribute('anp_name');
  }
  public set anpName(value: string) {
    this._anpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anpNameInput() {
    return this._anpName;
  }

  // epg_name - computed: false, optional: false, required: true
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
  }

  // schema_id - computed: true, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // template_name - computed: true, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}
export interface SchemaSiteContractServiceGraphListenerRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#action SchemaSiteContractServiceGraphListener#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#action_type SchemaSiteContractServiceGraphListener#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#content_type SchemaSiteContractServiceGraphListener#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#custom_url SchemaSiteContractServiceGraphListener#custom_url}
  */
  readonly customUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#floating_ip SchemaSiteContractServiceGraphListener#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#host SchemaSiteContractServiceGraphListener#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#name SchemaSiteContractServiceGraphListener#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#path SchemaSiteContractServiceGraphListener#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#port SchemaSiteContractServiceGraphListener#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#priority SchemaSiteContractServiceGraphListener#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#protocol SchemaSiteContractServiceGraphListener#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#redirect_code SchemaSiteContractServiceGraphListener#redirect_code}
  */
  readonly redirectCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#redirect_host_name SchemaSiteContractServiceGraphListener#redirect_host_name}
  */
  readonly redirectHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#redirect_path SchemaSiteContractServiceGraphListener#redirect_path}
  */
  readonly redirectPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#redirect_port SchemaSiteContractServiceGraphListener#redirect_port}
  */
  readonly redirectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#redirect_protocol SchemaSiteContractServiceGraphListener#redirect_protocol}
  */
  readonly redirectProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#redirect_query SchemaSiteContractServiceGraphListener#redirect_query}
  */
  readonly redirectQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#response_body SchemaSiteContractServiceGraphListener#response_body}
  */
  readonly responseBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#response_code SchemaSiteContractServiceGraphListener#response_code}
  */
  readonly responseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#target_ip_type SchemaSiteContractServiceGraphListener#target_ip_type}
  */
  readonly targetIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#url_type SchemaSiteContractServiceGraphListener#url_type}
  */
  readonly urlType?: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#health_check SchemaSiteContractServiceGraphListener#health_check}
  */
  readonly healthCheck?: SchemaSiteContractServiceGraphListenerRulesHealthCheck;
  /**
  * provider_epg_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#provider_epg_ref SchemaSiteContractServiceGraphListener#provider_epg_ref}
  */
  readonly providerEpgRef?: SchemaSiteContractServiceGraphListenerRulesProviderEpgRef;
}

export function schemaSiteContractServiceGraphListenerRulesToTerraform(struct?: SchemaSiteContractServiceGraphListenerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    custom_url: cdktf.stringToTerraform(struct!.customUrl),
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    host: cdktf.stringToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    redirect_code: cdktf.stringToTerraform(struct!.redirectCode),
    redirect_host_name: cdktf.stringToTerraform(struct!.redirectHostName),
    redirect_path: cdktf.stringToTerraform(struct!.redirectPath),
    redirect_port: cdktf.numberToTerraform(struct!.redirectPort),
    redirect_protocol: cdktf.stringToTerraform(struct!.redirectProtocol),
    redirect_query: cdktf.stringToTerraform(struct!.redirectQuery),
    response_body: cdktf.stringToTerraform(struct!.responseBody),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    target_ip_type: cdktf.stringToTerraform(struct!.targetIpType),
    url_type: cdktf.stringToTerraform(struct!.urlType),
    health_check: schemaSiteContractServiceGraphListenerRulesHealthCheckToTerraform(struct!.healthCheck),
    provider_epg_ref: schemaSiteContractServiceGraphListenerRulesProviderEpgRefToTerraform(struct!.providerEpgRef),
  }
}


export function schemaSiteContractServiceGraphListenerRulesToHclTerraform(struct?: SchemaSiteContractServiceGraphListenerRules | cdktf.IResolvable): any {
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
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_url: {
      value: cdktf.stringToHclTerraform(struct!.customUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    redirect_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_host_name: {
      value: cdktf.stringToHclTerraform(struct!.redirectHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_path: {
      value: cdktf.stringToHclTerraform(struct!.redirectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_port: {
      value: cdktf.numberToHclTerraform(struct!.redirectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_protocol: {
      value: cdktf.stringToHclTerraform(struct!.redirectProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_query: {
      value: cdktf.stringToHclTerraform(struct!.redirectQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body: {
      value: cdktf.stringToHclTerraform(struct!.responseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.targetIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_type: {
      value: cdktf.stringToHclTerraform(struct!.urlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: schemaSiteContractServiceGraphListenerRulesHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "set",
      storageClassType: "SchemaSiteContractServiceGraphListenerRulesHealthCheckList",
    },
    provider_epg_ref: {
      value: schemaSiteContractServiceGraphListenerRulesProviderEpgRefToHclTerraform(struct!.providerEpgRef),
      isBlock: true,
      type: "set",
      storageClassType: "SchemaSiteContractServiceGraphListenerRulesProviderEpgRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteContractServiceGraphListenerRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteContractServiceGraphListenerRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._customUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUrl = this._customUrl;
    }
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._redirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectCode = this._redirectCode;
    }
    if (this._redirectHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHostName = this._redirectHostName;
    }
    if (this._redirectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectPath = this._redirectPath;
    }
    if (this._redirectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectPort = this._redirectPort;
    }
    if (this._redirectProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectProtocol = this._redirectProtocol;
    }
    if (this._redirectQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectQuery = this._redirectQuery;
    }
    if (this._responseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBody = this._responseBody;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._targetIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIpType = this._targetIpType;
    }
    if (this._urlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlType = this._urlType;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._providerEpgRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerEpgRef = this._providerEpgRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteContractServiceGraphListenerRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionType = undefined;
      this._contentType = undefined;
      this._customUrl = undefined;
      this._floatingIp = undefined;
      this._host = undefined;
      this._name = undefined;
      this._path = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._redirectCode = undefined;
      this._redirectHostName = undefined;
      this._redirectPath = undefined;
      this._redirectPort = undefined;
      this._redirectProtocol = undefined;
      this._redirectQuery = undefined;
      this._responseBody = undefined;
      this._responseCode = undefined;
      this._targetIpType = undefined;
      this._urlType = undefined;
      this._healthCheck.internalValue = undefined;
      this._providerEpgRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionType = value.actionType;
      this._contentType = value.contentType;
      this._customUrl = value.customUrl;
      this._floatingIp = value.floatingIp;
      this._host = value.host;
      this._name = value.name;
      this._path = value.path;
      this._port = value.port;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._redirectCode = value.redirectCode;
      this._redirectHostName = value.redirectHostName;
      this._redirectPath = value.redirectPath;
      this._redirectPort = value.redirectPort;
      this._redirectProtocol = value.redirectProtocol;
      this._redirectQuery = value.redirectQuery;
      this._responseBody = value.responseBody;
      this._responseCode = value.responseCode;
      this._targetIpType = value.targetIpType;
      this._urlType = value.urlType;
      this._healthCheck.internalValue = value.healthCheck;
      this._providerEpgRef.internalValue = value.providerEpgRef;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_url - computed: true, optional: true, required: false
  private _customUrl?: string; 
  public get customUrl() {
    return this.getStringAttribute('custom_url');
  }
  public set customUrl(value: string) {
    this._customUrl = value;
  }
  public resetCustomUrl() {
    this._customUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlInput() {
    return this._customUrl;
  }

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // host - computed: true, optional: true, required: false
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // redirect_code - computed: true, optional: true, required: false
  private _redirectCode?: string; 
  public get redirectCode() {
    return this.getStringAttribute('redirect_code');
  }
  public set redirectCode(value: string) {
    this._redirectCode = value;
  }
  public resetRedirectCode() {
    this._redirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectCodeInput() {
    return this._redirectCode;
  }

  // redirect_host_name - computed: true, optional: true, required: false
  private _redirectHostName?: string; 
  public get redirectHostName() {
    return this.getStringAttribute('redirect_host_name');
  }
  public set redirectHostName(value: string) {
    this._redirectHostName = value;
  }
  public resetRedirectHostName() {
    this._redirectHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHostNameInput() {
    return this._redirectHostName;
  }

  // redirect_path - computed: true, optional: true, required: false
  private _redirectPath?: string; 
  public get redirectPath() {
    return this.getStringAttribute('redirect_path');
  }
  public set redirectPath(value: string) {
    this._redirectPath = value;
  }
  public resetRedirectPath() {
    this._redirectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPathInput() {
    return this._redirectPath;
  }

  // redirect_port - computed: true, optional: true, required: false
  private _redirectPort?: number; 
  public get redirectPort() {
    return this.getNumberAttribute('redirect_port');
  }
  public set redirectPort(value: number) {
    this._redirectPort = value;
  }
  public resetRedirectPort() {
    this._redirectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPortInput() {
    return this._redirectPort;
  }

  // redirect_protocol - computed: true, optional: true, required: false
  private _redirectProtocol?: string; 
  public get redirectProtocol() {
    return this.getStringAttribute('redirect_protocol');
  }
  public set redirectProtocol(value: string) {
    this._redirectProtocol = value;
  }
  public resetRedirectProtocol() {
    this._redirectProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectProtocolInput() {
    return this._redirectProtocol;
  }

  // redirect_query - computed: true, optional: true, required: false
  private _redirectQuery?: string; 
  public get redirectQuery() {
    return this.getStringAttribute('redirect_query');
  }
  public set redirectQuery(value: string) {
    this._redirectQuery = value;
  }
  public resetRedirectQuery() {
    this._redirectQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectQueryInput() {
    return this._redirectQuery;
  }

  // response_body - computed: true, optional: true, required: false
  private _responseBody?: string; 
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }
  public set responseBody(value: string) {
    this._responseBody = value;
  }
  public resetResponseBody() {
    this._responseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyInput() {
    return this._responseBody;
  }

  // response_code - computed: true, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // target_ip_type - computed: true, optional: true, required: false
  private _targetIpType?: string; 
  public get targetIpType() {
    return this.getStringAttribute('target_ip_type');
  }
  public set targetIpType(value: string) {
    this._targetIpType = value;
  }
  public resetTargetIpType() {
    this._targetIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpTypeInput() {
    return this._targetIpType;
  }

  // url_type - computed: true, optional: true, required: false
  private _urlType?: string; 
  public get urlType() {
    return this.getStringAttribute('url_type');
  }
  public set urlType(value: string) {
    this._urlType = value;
  }
  public resetUrlType() {
    this._urlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTypeInput() {
    return this._urlType;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new SchemaSiteContractServiceGraphListenerRulesHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: SchemaSiteContractServiceGraphListenerRulesHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // provider_epg_ref - computed: false, optional: true, required: false
  private _providerEpgRef = new SchemaSiteContractServiceGraphListenerRulesProviderEpgRefOutputReference(this, "provider_epg_ref");
  public get providerEpgRef() {
    return this._providerEpgRef;
  }
  public putProviderEpgRef(value: SchemaSiteContractServiceGraphListenerRulesProviderEpgRef) {
    this._providerEpgRef.internalValue = value;
  }
  public resetProviderEpgRef() {
    this._providerEpgRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerEpgRefInput() {
    return this._providerEpgRef.internalValue;
  }
}

export class SchemaSiteContractServiceGraphListenerRulesList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteContractServiceGraphListenerRules[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteContractServiceGraphListenerRulesOutputReference {
    return new SchemaSiteContractServiceGraphListenerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaSiteContractServiceGraphListenerSslCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#certificate_store SchemaSiteContractServiceGraphListener#certificate_store}
  */
  readonly certificateStore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#name SchemaSiteContractServiceGraphListener#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#target_dn SchemaSiteContractServiceGraphListener#target_dn}
  */
  readonly targetDn: string;
}

export function schemaSiteContractServiceGraphListenerSslCertificatesToTerraform(struct?: SchemaSiteContractServiceGraphListenerSslCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    name: cdktf.stringToTerraform(struct!.name),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function schemaSiteContractServiceGraphListenerSslCertificatesToHclTerraform(struct?: SchemaSiteContractServiceGraphListenerSslCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_store: {
      value: cdktf.stringToHclTerraform(struct!.certificateStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteContractServiceGraphListenerSslCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteContractServiceGraphListenerSslCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStore = this._certificateStore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteContractServiceGraphListenerSslCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateStore = undefined;
      this._name = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateStore = value.certificateStore;
      this._name = value.name;
      this._targetDn = value.targetDn;
    }
  }

  // certificate_store - computed: false, optional: false, required: true
  private _certificateStore?: string; 
  public get certificateStore() {
    return this.getStringAttribute('certificate_store');
  }
  public set certificateStore(value: string) {
    this._certificateStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreInput() {
    return this._certificateStore;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // target_dn - computed: false, optional: false, required: true
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class SchemaSiteContractServiceGraphListenerSslCertificatesList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteContractServiceGraphListenerSslCertificates[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteContractServiceGraphListenerSslCertificatesOutputReference {
    return new SchemaSiteContractServiceGraphListenerSslCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener mso_schema_site_contract_service_graph_listener}
*/
export class SchemaSiteContractServiceGraphListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_contract_service_graph_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteContractServiceGraphListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteContractServiceGraphListener to import
  * @param importFromId The id of the existing SchemaSiteContractServiceGraphListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteContractServiceGraphListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_contract_service_graph_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph_listener mso_schema_site_contract_service_graph_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteContractServiceGraphListenerConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteContractServiceGraphListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_contract_service_graph_listener',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractName = config.contractName;
    this._frontendIpDn = config.frontendIpDn;
    this._id = config.id;
    this._listenerName = config.listenerName;
    this._port = config.port;
    this._protocol = config.protocol;
    this._schemaId = config.schemaId;
    this._securityPolicy = config.securityPolicy;
    this._serviceNodeIndex = config.serviceNodeIndex;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._rules.internalValue = config.rules;
    this._sslCertificates.internalValue = config.sslCertificates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_name - computed: false, optional: false, required: true
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // frontend_ip_dn - computed: true, optional: true, required: false
  private _frontendIpDn?: string; 
  public get frontendIpDn() {
    return this.getStringAttribute('frontend_ip_dn');
  }
  public set frontendIpDn(value: string) {
    this._frontendIpDn = value;
  }
  public resetFrontendIpDn() {
    this._frontendIpDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpDnInput() {
    return this._frontendIpDn;
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

  // listener_name - computed: false, optional: false, required: true
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // service_node_index - computed: false, optional: false, required: true
  private _serviceNodeIndex?: number; 
  public get serviceNodeIndex() {
    return this.getNumberAttribute('service_node_index');
  }
  public set serviceNodeIndex(value: number) {
    this._serviceNodeIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeIndexInput() {
    return this._serviceNodeIndex;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new SchemaSiteContractServiceGraphListenerRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SchemaSiteContractServiceGraphListenerRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // ssl_certificates - computed: false, optional: true, required: false
  private _sslCertificates = new SchemaSiteContractServiceGraphListenerSslCertificatesList(this, "ssl_certificates", true);
  public get sslCertificates() {
    return this._sslCertificates;
  }
  public putSslCertificates(value: SchemaSiteContractServiceGraphListenerSslCertificates[] | cdktf.IResolvable) {
    this._sslCertificates.internalValue = value;
  }
  public resetSslCertificates() {
    this._sslCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificatesInput() {
    return this._sslCertificates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_name: cdktf.stringToTerraform(this._contractName),
      frontend_ip_dn: cdktf.stringToTerraform(this._frontendIpDn),
      id: cdktf.stringToTerraform(this._id),
      listener_name: cdktf.stringToTerraform(this._listenerName),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      service_node_index: cdktf.numberToTerraform(this._serviceNodeIndex),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      rules: cdktf.listMapper(schemaSiteContractServiceGraphListenerRulesToTerraform, true)(this._rules.internalValue),
      ssl_certificates: cdktf.listMapper(schemaSiteContractServiceGraphListenerSslCertificatesToTerraform, true)(this._sslCertificates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_name: {
        value: cdktf.stringToHclTerraform(this._contractName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_ip_dn: {
        value: cdktf.stringToHclTerraform(this._frontendIpDn),
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
      listener_name: {
        value: cdktf.stringToHclTerraform(this._listenerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_node_index: {
        value: cdktf.numberToHclTerraform(this._serviceNodeIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(schemaSiteContractServiceGraphListenerRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SchemaSiteContractServiceGraphListenerRulesList",
      },
      ssl_certificates: {
        value: cdktf.listMapperHcl(schemaSiteContractServiceGraphListenerSslCertificatesToHclTerraform, true)(this._sslCertificates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SchemaSiteContractServiceGraphListenerSslCertificatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
