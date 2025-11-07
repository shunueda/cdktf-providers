// https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#address_version Services#address_version}
  */
  readonly addressVersion?: string;
  /**
  * Service App Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#app_id Services#app_id}
  */
  readonly appId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#certificate Services#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#cloud_ip_select Services#cloud_ip_select}
  */
  readonly cloudIpSelect?: string;
  /**
  * Comments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#comments Services#comments}
  */
  readonly comments?: string;
  /**
  * Enable Access Logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_access_logs Services#enable_access_logs}
  */
  readonly enableAccessLogs?: string;
  /**
  * Service Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#group Services#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#id Services#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#ip_address Services#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#mask Services#mask}
  */
  readonly mask?: string;
  /**
  * Web Application Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#name Services#name}
  */
  readonly name: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#port Services#port}
  */
  readonly port?: string;
  /**
  * Secure Site Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#secure_site_domain Services#secure_site_domain}
  */
  readonly secureSiteDomain?: string[];
  /**
  * Session Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#session_timeout Services#session_timeout}
  */
  readonly sessionTimeout?: string;
  /**
  * Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#status Services#status}
  */
  readonly status?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#type Services#type}
  */
  readonly type?: string;
  /**
  * Vsite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#vsite Services#vsite}
  */
  readonly vsite?: string;
  /**
  * basic_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#basic_security Services#basic_security}
  */
  readonly basicSecurity?: ServicesBasicSecurity[] | cdktf.IResolvable;
  /**
  * instant_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#instant_ssl Services#instant_ssl}
  */
  readonly instantSsl?: ServicesInstantSsl[] | cdktf.IResolvable;
  /**
  * ssl_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#ssl_security Services#ssl_security}
  */
  readonly sslSecurity?: ServicesSslSecurity[] | cdktf.IResolvable;
}
export interface ServicesBasicSecurity {
  /**
  * Header for Client IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#client_ip_addr_header Services#client_ip_addr_header}
  */
  readonly clientIpAddrHeader?: string;
  /**
  * Ignore case
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#ignore_case Services#ignore_case}
  */
  readonly ignoreCase?: string;
  /**
  * Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#mode Services#mode}
  */
  readonly mode?: string;
  /**
  * Rate Control Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#rate_control_pool Services#rate_control_pool}
  */
  readonly rateControlPool?: string;
  /**
  * Rate Control Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#rate_control_status Services#rate_control_status}
  */
  readonly rateControlStatus?: string;
  /**
  * Trusted Hosts Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#trusted_hosts_action Services#trusted_hosts_action}
  */
  readonly trustedHostsAction?: string;
  /**
  * Trusted Hosts Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#trusted_hosts_group Services#trusted_hosts_group}
  */
  readonly trustedHostsGroup?: string;
  /**
  * Web Firewall Log Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#web_firewall_log_level Services#web_firewall_log_level}
  */
  readonly webFirewallLogLevel?: string;
  /**
  * Web Firewall Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#web_firewall_policy Services#web_firewall_policy}
  */
  readonly webFirewallPolicy?: string;
}

export function servicesBasicSecurityToTerraform(struct?: ServicesBasicSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_addr_header: cdktf.stringToTerraform(struct!.clientIpAddrHeader),
    ignore_case: cdktf.stringToTerraform(struct!.ignoreCase),
    mode: cdktf.stringToTerraform(struct!.mode),
    rate_control_pool: cdktf.stringToTerraform(struct!.rateControlPool),
    rate_control_status: cdktf.stringToTerraform(struct!.rateControlStatus),
    trusted_hosts_action: cdktf.stringToTerraform(struct!.trustedHostsAction),
    trusted_hosts_group: cdktf.stringToTerraform(struct!.trustedHostsGroup),
    web_firewall_log_level: cdktf.stringToTerraform(struct!.webFirewallLogLevel),
    web_firewall_policy: cdktf.stringToTerraform(struct!.webFirewallPolicy),
  }
}


export function servicesBasicSecurityToHclTerraform(struct?: ServicesBasicSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_addr_header: {
      value: cdktf.stringToHclTerraform(struct!.clientIpAddrHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_control_pool: {
      value: cdktf.stringToHclTerraform(struct!.rateControlPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_control_status: {
      value: cdktf.stringToHclTerraform(struct!.rateControlStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_hosts_action: {
      value: cdktf.stringToHclTerraform(struct!.trustedHostsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_hosts_group: {
      value: cdktf.stringToHclTerraform(struct!.trustedHostsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_firewall_log_level: {
      value: cdktf.stringToHclTerraform(struct!.webFirewallLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_firewall_policy: {
      value: cdktf.stringToHclTerraform(struct!.webFirewallPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesBasicSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesBasicSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpAddrHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpAddrHeader = this._clientIpAddrHeader;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rateControlPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateControlPool = this._rateControlPool;
    }
    if (this._rateControlStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateControlStatus = this._rateControlStatus;
    }
    if (this._trustedHostsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedHostsAction = this._trustedHostsAction;
    }
    if (this._trustedHostsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedHostsGroup = this._trustedHostsGroup;
    }
    if (this._webFirewallLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.webFirewallLogLevel = this._webFirewallLogLevel;
    }
    if (this._webFirewallPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.webFirewallPolicy = this._webFirewallPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesBasicSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpAddrHeader = undefined;
      this._ignoreCase = undefined;
      this._mode = undefined;
      this._rateControlPool = undefined;
      this._rateControlStatus = undefined;
      this._trustedHostsAction = undefined;
      this._trustedHostsGroup = undefined;
      this._webFirewallLogLevel = undefined;
      this._webFirewallPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpAddrHeader = value.clientIpAddrHeader;
      this._ignoreCase = value.ignoreCase;
      this._mode = value.mode;
      this._rateControlPool = value.rateControlPool;
      this._rateControlStatus = value.rateControlStatus;
      this._trustedHostsAction = value.trustedHostsAction;
      this._trustedHostsGroup = value.trustedHostsGroup;
      this._webFirewallLogLevel = value.webFirewallLogLevel;
      this._webFirewallPolicy = value.webFirewallPolicy;
    }
  }

  // client_ip_addr_header - computed: false, optional: true, required: false
  private _clientIpAddrHeader?: string; 
  public get clientIpAddrHeader() {
    return this.getStringAttribute('client_ip_addr_header');
  }
  public set clientIpAddrHeader(value: string) {
    this._clientIpAddrHeader = value;
  }
  public resetClientIpAddrHeader() {
    this._clientIpAddrHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpAddrHeaderInput() {
    return this._clientIpAddrHeader;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: string; 
  public get ignoreCase() {
    return this.getStringAttribute('ignore_case');
  }
  public set ignoreCase(value: string) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // rate_control_pool - computed: false, optional: true, required: false
  private _rateControlPool?: string; 
  public get rateControlPool() {
    return this.getStringAttribute('rate_control_pool');
  }
  public set rateControlPool(value: string) {
    this._rateControlPool = value;
  }
  public resetRateControlPool() {
    this._rateControlPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateControlPoolInput() {
    return this._rateControlPool;
  }

  // rate_control_status - computed: false, optional: true, required: false
  private _rateControlStatus?: string; 
  public get rateControlStatus() {
    return this.getStringAttribute('rate_control_status');
  }
  public set rateControlStatus(value: string) {
    this._rateControlStatus = value;
  }
  public resetRateControlStatus() {
    this._rateControlStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateControlStatusInput() {
    return this._rateControlStatus;
  }

  // trusted_hosts_action - computed: false, optional: true, required: false
  private _trustedHostsAction?: string; 
  public get trustedHostsAction() {
    return this.getStringAttribute('trusted_hosts_action');
  }
  public set trustedHostsAction(value: string) {
    this._trustedHostsAction = value;
  }
  public resetTrustedHostsAction() {
    this._trustedHostsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostsActionInput() {
    return this._trustedHostsAction;
  }

  // trusted_hosts_group - computed: false, optional: true, required: false
  private _trustedHostsGroup?: string; 
  public get trustedHostsGroup() {
    return this.getStringAttribute('trusted_hosts_group');
  }
  public set trustedHostsGroup(value: string) {
    this._trustedHostsGroup = value;
  }
  public resetTrustedHostsGroup() {
    this._trustedHostsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostsGroupInput() {
    return this._trustedHostsGroup;
  }

  // web_firewall_log_level - computed: false, optional: true, required: false
  private _webFirewallLogLevel?: string; 
  public get webFirewallLogLevel() {
    return this.getStringAttribute('web_firewall_log_level');
  }
  public set webFirewallLogLevel(value: string) {
    this._webFirewallLogLevel = value;
  }
  public resetWebFirewallLogLevel() {
    this._webFirewallLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFirewallLogLevelInput() {
    return this._webFirewallLogLevel;
  }

  // web_firewall_policy - computed: false, optional: true, required: false
  private _webFirewallPolicy?: string; 
  public get webFirewallPolicy() {
    return this.getStringAttribute('web_firewall_policy');
  }
  public set webFirewallPolicy(value: string) {
    this._webFirewallPolicy = value;
  }
  public resetWebFirewallPolicy() {
    this._webFirewallPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFirewallPolicyInput() {
    return this._webFirewallPolicy;
  }
}

export class ServicesBasicSecurityList extends cdktf.ComplexList {
  public internalValue? : ServicesBasicSecurity[] | cdktf.IResolvable

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
  public get(index: number): ServicesBasicSecurityOutputReference {
    return new ServicesBasicSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicesInstantSsl {
  /**
  * Secure Site Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#secure_site_domain Services#secure_site_domain}
  */
  readonly secureSiteDomain?: string[];
  /**
  * SharePoint Rewrite Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#sharepoint_rewrite_support Services#sharepoint_rewrite_support}
  */
  readonly sharepointRewriteSupport?: string;
  /**
  * Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#status Services#status}
  */
  readonly status?: string;
}

export function servicesInstantSslToTerraform(struct?: ServicesInstantSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secure_site_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secureSiteDomain),
    sharepoint_rewrite_support: cdktf.stringToTerraform(struct!.sharepointRewriteSupport),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function servicesInstantSslToHclTerraform(struct?: ServicesInstantSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secure_site_domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secureSiteDomain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sharepoint_rewrite_support: {
      value: cdktf.stringToHclTerraform(struct!.sharepointRewriteSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesInstantSslOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesInstantSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secureSiteDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureSiteDomain = this._secureSiteDomain;
    }
    if (this._sharepointRewriteSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharepointRewriteSupport = this._sharepointRewriteSupport;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesInstantSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secureSiteDomain = undefined;
      this._sharepointRewriteSupport = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secureSiteDomain = value.secureSiteDomain;
      this._sharepointRewriteSupport = value.sharepointRewriteSupport;
      this._status = value.status;
    }
  }

  // secure_site_domain - computed: false, optional: true, required: false
  private _secureSiteDomain?: string[]; 
  public get secureSiteDomain() {
    return this.getListAttribute('secure_site_domain');
  }
  public set secureSiteDomain(value: string[]) {
    this._secureSiteDomain = value;
  }
  public resetSecureSiteDomain() {
    this._secureSiteDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSiteDomainInput() {
    return this._secureSiteDomain;
  }

  // sharepoint_rewrite_support - computed: false, optional: true, required: false
  private _sharepointRewriteSupport?: string; 
  public get sharepointRewriteSupport() {
    return this.getStringAttribute('sharepoint_rewrite_support');
  }
  public set sharepointRewriteSupport(value: string) {
    this._sharepointRewriteSupport = value;
  }
  public resetSharepointRewriteSupport() {
    this._sharepointRewriteSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharepointRewriteSupportInput() {
    return this._sharepointRewriteSupport;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ServicesInstantSslList extends cdktf.ComplexList {
  public internalValue? : ServicesInstantSsl[] | cdktf.IResolvable

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
  public get(index: number): ServicesInstantSslOutputReference {
    return new ServicesInstantSslOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicesSslSecurity {
  /**
  * Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#certificate Services#certificate}
  */
  readonly certificate?: string;
  /**
  * Ciphers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#ciphers Services#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#domain Services#domain}
  */
  readonly domain?: string[];
  /**
  * ECDSA Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#ecdsa_certificate Services#ecdsa_certificate}
  */
  readonly ecdsaCertificate?: string;
  /**
  * Enable HSTS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_hsts Services#enable_hsts}
  */
  readonly enableHsts?: string;
  /**
  * Enable OCSP Stapling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_ocsp_stapling Services#enable_ocsp_stapling}
  */
  readonly enableOcspStapling?: string;
  /**
  * Enable Perfect Forward Secrecy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_pfs Services#enable_pfs}
  */
  readonly enablePfs?: string;
  /**
  * Enable SNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_sni Services#enable_sni}
  */
  readonly enableSni?: string;
  /**
  * SSL 3.0 (Insecure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_ssl_3 Services#enable_ssl_3}
  */
  readonly enableSsl3?: string;
  /**
  * Enable Strict SNI Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_strict_sni_check Services#enable_strict_sni_check}
  */
  readonly enableStrictSniCheck?: string;
  /**
  * TLS 1.0 (Insecure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_tls_1 Services#enable_tls_1}
  */
  readonly enableTls1?: string;
  /**
  * TLS 1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_tls_1_1 Services#enable_tls_1_1}
  */
  readonly enableTls11?: string;
  /**
  * TLS 1.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_tls_1_2 Services#enable_tls_1_2}
  */
  readonly enableTls12?: string;
  /**
  * TLS 1.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#enable_tls_1_3 Services#enable_tls_1_3}
  */
  readonly enableTls13?: string;
  /**
  * HSTS Max-Age
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#hsts_max_age Services#hsts_max_age}
  */
  readonly hstsMaxAge?: string;
  /**
  * Include HSTS Sub-Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#include_hsts_sub_domains Services#include_hsts_sub_domains}
  */
  readonly includeHstsSubDomains?: string;
  /**
  * Override ciphers for SSL 3.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#override_ciphers_ssl3 Services#override_ciphers_ssl3}
  */
  readonly overrideCiphersSsl3?: string[];
  /**
  * Override ciphers for TLS 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#override_ciphers_tls_1 Services#override_ciphers_tls_1}
  */
  readonly overrideCiphersTls1?: string[];
  /**
  * Override ciphers for TLS 1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#override_ciphers_tls_1_1 Services#override_ciphers_tls_1_1}
  */
  readonly overrideCiphersTls11?: string[];
  /**
  * Override ciphers for TLS 1.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#override_ciphers_tls_1_2 Services#override_ciphers_tls_1_2}
  */
  readonly overrideCiphersTls12?: string[];
  /**
  * Override ciphers for TLS 1.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#override_ciphers_tls_1_3 Services#override_ciphers_tls_1_3}
  */
  readonly overrideCiphersTls13?: string[];
  /**
  * Selected Ciphers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#selected_ciphers Services#selected_ciphers}
  */
  readonly selectedCiphers?: string[];
  /**
  * Domain Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#sni_certificate Services#sni_certificate}
  */
  readonly sniCertificate?: string[];
  /**
  * Domain ECDSA Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#sni_ecdsa_certificate Services#sni_ecdsa_certificate}
  */
  readonly sniEcdsaCertificate?: string[];
  /**
  * SSL/TLS Quick Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#ssl_tls_presets Services#ssl_tls_presets}
  */
  readonly sslTlsPresets?: string;
  /**
  * Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#status Services#status}
  */
  readonly status?: string;
}

export function servicesSslSecurityToTerraform(struct?: ServicesSslSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domain),
    ecdsa_certificate: cdktf.stringToTerraform(struct!.ecdsaCertificate),
    enable_hsts: cdktf.stringToTerraform(struct!.enableHsts),
    enable_ocsp_stapling: cdktf.stringToTerraform(struct!.enableOcspStapling),
    enable_pfs: cdktf.stringToTerraform(struct!.enablePfs),
    enable_sni: cdktf.stringToTerraform(struct!.enableSni),
    enable_ssl_3: cdktf.stringToTerraform(struct!.enableSsl3),
    enable_strict_sni_check: cdktf.stringToTerraform(struct!.enableStrictSniCheck),
    enable_tls_1: cdktf.stringToTerraform(struct!.enableTls1),
    enable_tls_1_1: cdktf.stringToTerraform(struct!.enableTls11),
    enable_tls_1_2: cdktf.stringToTerraform(struct!.enableTls12),
    enable_tls_1_3: cdktf.stringToTerraform(struct!.enableTls13),
    hsts_max_age: cdktf.stringToTerraform(struct!.hstsMaxAge),
    include_hsts_sub_domains: cdktf.stringToTerraform(struct!.includeHstsSubDomains),
    override_ciphers_ssl3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideCiphersSsl3),
    override_ciphers_tls_1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideCiphersTls1),
    override_ciphers_tls_1_1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideCiphersTls11),
    override_ciphers_tls_1_2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideCiphersTls12),
    override_ciphers_tls_1_3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideCiphersTls13),
    selected_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedCiphers),
    sni_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniCertificate),
    sni_ecdsa_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniEcdsaCertificate),
    ssl_tls_presets: cdktf.stringToTerraform(struct!.sslTlsPresets),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function servicesSslSecurityToHclTerraform(struct?: ServicesSslSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ecdsa_certificate: {
      value: cdktf.stringToHclTerraform(struct!.ecdsaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_hsts: {
      value: cdktf.stringToHclTerraform(struct!.enableHsts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ocsp_stapling: {
      value: cdktf.stringToHclTerraform(struct!.enableOcspStapling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pfs: {
      value: cdktf.stringToHclTerraform(struct!.enablePfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_sni: {
      value: cdktf.stringToHclTerraform(struct!.enableSni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl_3: {
      value: cdktf.stringToHclTerraform(struct!.enableSsl3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_strict_sni_check: {
      value: cdktf.stringToHclTerraform(struct!.enableStrictSniCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1: {
      value: cdktf.stringToHclTerraform(struct!.enableTls1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1_1: {
      value: cdktf.stringToHclTerraform(struct!.enableTls11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1_2: {
      value: cdktf.stringToHclTerraform(struct!.enableTls12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1_3: {
      value: cdktf.stringToHclTerraform(struct!.enableTls13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsts_max_age: {
      value: cdktf.stringToHclTerraform(struct!.hstsMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_hsts_sub_domains: {
      value: cdktf.stringToHclTerraform(struct!.includeHstsSubDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_ciphers_ssl3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideCiphersSsl3),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_ciphers_tls_1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideCiphersTls1),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_ciphers_tls_1_1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideCiphersTls11),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_ciphers_tls_1_2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideCiphersTls12),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_ciphers_tls_1_3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideCiphersTls13),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selected_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedCiphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sni_certificate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniCertificate),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sni_ecdsa_certificate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniEcdsaCertificate),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_tls_presets: {
      value: cdktf.stringToHclTerraform(struct!.sslTlsPresets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesSslSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesSslSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._ecdsaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecdsaCertificate = this._ecdsaCertificate;
    }
    if (this._enableHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHsts = this._enableHsts;
    }
    if (this._enableOcspStapling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOcspStapling = this._enableOcspStapling;
    }
    if (this._enablePfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePfs = this._enablePfs;
    }
    if (this._enableSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSni = this._enableSni;
    }
    if (this._enableSsl3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsl3 = this._enableSsl3;
    }
    if (this._enableStrictSniCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStrictSniCheck = this._enableStrictSniCheck;
    }
    if (this._enableTls1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls1 = this._enableTls1;
    }
    if (this._enableTls11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls11 = this._enableTls11;
    }
    if (this._enableTls12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls12 = this._enableTls12;
    }
    if (this._enableTls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls13 = this._enableTls13;
    }
    if (this._hstsMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.hstsMaxAge = this._hstsMaxAge;
    }
    if (this._includeHstsSubDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHstsSubDomains = this._includeHstsSubDomains;
    }
    if (this._overrideCiphersSsl3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCiphersSsl3 = this._overrideCiphersSsl3;
    }
    if (this._overrideCiphersTls1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCiphersTls1 = this._overrideCiphersTls1;
    }
    if (this._overrideCiphersTls11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCiphersTls11 = this._overrideCiphersTls11;
    }
    if (this._overrideCiphersTls12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCiphersTls12 = this._overrideCiphersTls12;
    }
    if (this._overrideCiphersTls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCiphersTls13 = this._overrideCiphersTls13;
    }
    if (this._selectedCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedCiphers = this._selectedCiphers;
    }
    if (this._sniCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniCertificate = this._sniCertificate;
    }
    if (this._sniEcdsaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniEcdsaCertificate = this._sniEcdsaCertificate;
    }
    if (this._sslTlsPresets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTlsPresets = this._sslTlsPresets;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesSslSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._ciphers = undefined;
      this._domain = undefined;
      this._ecdsaCertificate = undefined;
      this._enableHsts = undefined;
      this._enableOcspStapling = undefined;
      this._enablePfs = undefined;
      this._enableSni = undefined;
      this._enableSsl3 = undefined;
      this._enableStrictSniCheck = undefined;
      this._enableTls1 = undefined;
      this._enableTls11 = undefined;
      this._enableTls12 = undefined;
      this._enableTls13 = undefined;
      this._hstsMaxAge = undefined;
      this._includeHstsSubDomains = undefined;
      this._overrideCiphersSsl3 = undefined;
      this._overrideCiphersTls1 = undefined;
      this._overrideCiphersTls11 = undefined;
      this._overrideCiphersTls12 = undefined;
      this._overrideCiphersTls13 = undefined;
      this._selectedCiphers = undefined;
      this._sniCertificate = undefined;
      this._sniEcdsaCertificate = undefined;
      this._sslTlsPresets = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._ciphers = value.ciphers;
      this._domain = value.domain;
      this._ecdsaCertificate = value.ecdsaCertificate;
      this._enableHsts = value.enableHsts;
      this._enableOcspStapling = value.enableOcspStapling;
      this._enablePfs = value.enablePfs;
      this._enableSni = value.enableSni;
      this._enableSsl3 = value.enableSsl3;
      this._enableStrictSniCheck = value.enableStrictSniCheck;
      this._enableTls1 = value.enableTls1;
      this._enableTls11 = value.enableTls11;
      this._enableTls12 = value.enableTls12;
      this._enableTls13 = value.enableTls13;
      this._hstsMaxAge = value.hstsMaxAge;
      this._includeHstsSubDomains = value.includeHstsSubDomains;
      this._overrideCiphersSsl3 = value.overrideCiphersSsl3;
      this._overrideCiphersTls1 = value.overrideCiphersTls1;
      this._overrideCiphersTls11 = value.overrideCiphersTls11;
      this._overrideCiphersTls12 = value.overrideCiphersTls12;
      this._overrideCiphersTls13 = value.overrideCiphersTls13;
      this._selectedCiphers = value.selectedCiphers;
      this._sniCertificate = value.sniCertificate;
      this._sniEcdsaCertificate = value.sniEcdsaCertificate;
      this._sslTlsPresets = value.sslTlsPresets;
      this._status = value.status;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string[]; 
  public get domain() {
    return this.getListAttribute('domain');
  }
  public set domain(value: string[]) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ecdsa_certificate - computed: false, optional: true, required: false
  private _ecdsaCertificate?: string; 
  public get ecdsaCertificate() {
    return this.getStringAttribute('ecdsa_certificate');
  }
  public set ecdsaCertificate(value: string) {
    this._ecdsaCertificate = value;
  }
  public resetEcdsaCertificate() {
    this._ecdsaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaCertificateInput() {
    return this._ecdsaCertificate;
  }

  // enable_hsts - computed: false, optional: true, required: false
  private _enableHsts?: string; 
  public get enableHsts() {
    return this.getStringAttribute('enable_hsts');
  }
  public set enableHsts(value: string) {
    this._enableHsts = value;
  }
  public resetEnableHsts() {
    this._enableHsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHstsInput() {
    return this._enableHsts;
  }

  // enable_ocsp_stapling - computed: false, optional: true, required: false
  private _enableOcspStapling?: string; 
  public get enableOcspStapling() {
    return this.getStringAttribute('enable_ocsp_stapling');
  }
  public set enableOcspStapling(value: string) {
    this._enableOcspStapling = value;
  }
  public resetEnableOcspStapling() {
    this._enableOcspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOcspStaplingInput() {
    return this._enableOcspStapling;
  }

  // enable_pfs - computed: false, optional: true, required: false
  private _enablePfs?: string; 
  public get enablePfs() {
    return this.getStringAttribute('enable_pfs');
  }
  public set enablePfs(value: string) {
    this._enablePfs = value;
  }
  public resetEnablePfs() {
    this._enablePfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePfsInput() {
    return this._enablePfs;
  }

  // enable_sni - computed: false, optional: true, required: false
  private _enableSni?: string; 
  public get enableSni() {
    return this.getStringAttribute('enable_sni');
  }
  public set enableSni(value: string) {
    this._enableSni = value;
  }
  public resetEnableSni() {
    this._enableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSniInput() {
    return this._enableSni;
  }

  // enable_ssl_3 - computed: false, optional: true, required: false
  private _enableSsl3?: string; 
  public get enableSsl3() {
    return this.getStringAttribute('enable_ssl_3');
  }
  public set enableSsl3(value: string) {
    this._enableSsl3 = value;
  }
  public resetEnableSsl3() {
    this._enableSsl3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsl3Input() {
    return this._enableSsl3;
  }

  // enable_strict_sni_check - computed: false, optional: true, required: false
  private _enableStrictSniCheck?: string; 
  public get enableStrictSniCheck() {
    return this.getStringAttribute('enable_strict_sni_check');
  }
  public set enableStrictSniCheck(value: string) {
    this._enableStrictSniCheck = value;
  }
  public resetEnableStrictSniCheck() {
    this._enableStrictSniCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStrictSniCheckInput() {
    return this._enableStrictSniCheck;
  }

  // enable_tls_1 - computed: false, optional: true, required: false
  private _enableTls1?: string; 
  public get enableTls1() {
    return this.getStringAttribute('enable_tls_1');
  }
  public set enableTls1(value: string) {
    this._enableTls1 = value;
  }
  public resetEnableTls1() {
    this._enableTls1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls1Input() {
    return this._enableTls1;
  }

  // enable_tls_1_1 - computed: false, optional: true, required: false
  private _enableTls11?: string; 
  public get enableTls11() {
    return this.getStringAttribute('enable_tls_1_1');
  }
  public set enableTls11(value: string) {
    this._enableTls11 = value;
  }
  public resetEnableTls11() {
    this._enableTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls11Input() {
    return this._enableTls11;
  }

  // enable_tls_1_2 - computed: false, optional: true, required: false
  private _enableTls12?: string; 
  public get enableTls12() {
    return this.getStringAttribute('enable_tls_1_2');
  }
  public set enableTls12(value: string) {
    this._enableTls12 = value;
  }
  public resetEnableTls12() {
    this._enableTls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls12Input() {
    return this._enableTls12;
  }

  // enable_tls_1_3 - computed: false, optional: true, required: false
  private _enableTls13?: string; 
  public get enableTls13() {
    return this.getStringAttribute('enable_tls_1_3');
  }
  public set enableTls13(value: string) {
    this._enableTls13 = value;
  }
  public resetEnableTls13() {
    this._enableTls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls13Input() {
    return this._enableTls13;
  }

  // hsts_max_age - computed: false, optional: true, required: false
  private _hstsMaxAge?: string; 
  public get hstsMaxAge() {
    return this.getStringAttribute('hsts_max_age');
  }
  public set hstsMaxAge(value: string) {
    this._hstsMaxAge = value;
  }
  public resetHstsMaxAge() {
    this._hstsMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsMaxAgeInput() {
    return this._hstsMaxAge;
  }

  // include_hsts_sub_domains - computed: false, optional: true, required: false
  private _includeHstsSubDomains?: string; 
  public get includeHstsSubDomains() {
    return this.getStringAttribute('include_hsts_sub_domains');
  }
  public set includeHstsSubDomains(value: string) {
    this._includeHstsSubDomains = value;
  }
  public resetIncludeHstsSubDomains() {
    this._includeHstsSubDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHstsSubDomainsInput() {
    return this._includeHstsSubDomains;
  }

  // override_ciphers_ssl3 - computed: false, optional: true, required: false
  private _overrideCiphersSsl3?: string[]; 
  public get overrideCiphersSsl3() {
    return this.getListAttribute('override_ciphers_ssl3');
  }
  public set overrideCiphersSsl3(value: string[]) {
    this._overrideCiphersSsl3 = value;
  }
  public resetOverrideCiphersSsl3() {
    this._overrideCiphersSsl3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCiphersSsl3Input() {
    return this._overrideCiphersSsl3;
  }

  // override_ciphers_tls_1 - computed: false, optional: true, required: false
  private _overrideCiphersTls1?: string[]; 
  public get overrideCiphersTls1() {
    return this.getListAttribute('override_ciphers_tls_1');
  }
  public set overrideCiphersTls1(value: string[]) {
    this._overrideCiphersTls1 = value;
  }
  public resetOverrideCiphersTls1() {
    this._overrideCiphersTls1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCiphersTls1Input() {
    return this._overrideCiphersTls1;
  }

  // override_ciphers_tls_1_1 - computed: false, optional: true, required: false
  private _overrideCiphersTls11?: string[]; 
  public get overrideCiphersTls11() {
    return this.getListAttribute('override_ciphers_tls_1_1');
  }
  public set overrideCiphersTls11(value: string[]) {
    this._overrideCiphersTls11 = value;
  }
  public resetOverrideCiphersTls11() {
    this._overrideCiphersTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCiphersTls11Input() {
    return this._overrideCiphersTls11;
  }

  // override_ciphers_tls_1_2 - computed: false, optional: true, required: false
  private _overrideCiphersTls12?: string[]; 
  public get overrideCiphersTls12() {
    return this.getListAttribute('override_ciphers_tls_1_2');
  }
  public set overrideCiphersTls12(value: string[]) {
    this._overrideCiphersTls12 = value;
  }
  public resetOverrideCiphersTls12() {
    this._overrideCiphersTls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCiphersTls12Input() {
    return this._overrideCiphersTls12;
  }

  // override_ciphers_tls_1_3 - computed: false, optional: true, required: false
  private _overrideCiphersTls13?: string[]; 
  public get overrideCiphersTls13() {
    return this.getListAttribute('override_ciphers_tls_1_3');
  }
  public set overrideCiphersTls13(value: string[]) {
    this._overrideCiphersTls13 = value;
  }
  public resetOverrideCiphersTls13() {
    this._overrideCiphersTls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCiphersTls13Input() {
    return this._overrideCiphersTls13;
  }

  // selected_ciphers - computed: false, optional: true, required: false
  private _selectedCiphers?: string[]; 
  public get selectedCiphers() {
    return this.getListAttribute('selected_ciphers');
  }
  public set selectedCiphers(value: string[]) {
    this._selectedCiphers = value;
  }
  public resetSelectedCiphers() {
    this._selectedCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedCiphersInput() {
    return this._selectedCiphers;
  }

  // sni_certificate - computed: false, optional: true, required: false
  private _sniCertificate?: string[]; 
  public get sniCertificate() {
    return this.getListAttribute('sni_certificate');
  }
  public set sniCertificate(value: string[]) {
    this._sniCertificate = value;
  }
  public resetSniCertificate() {
    this._sniCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniCertificateInput() {
    return this._sniCertificate;
  }

  // sni_ecdsa_certificate - computed: false, optional: true, required: false
  private _sniEcdsaCertificate?: string[]; 
  public get sniEcdsaCertificate() {
    return this.getListAttribute('sni_ecdsa_certificate');
  }
  public set sniEcdsaCertificate(value: string[]) {
    this._sniEcdsaCertificate = value;
  }
  public resetSniEcdsaCertificate() {
    this._sniEcdsaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniEcdsaCertificateInput() {
    return this._sniEcdsaCertificate;
  }

  // ssl_tls_presets - computed: false, optional: true, required: false
  private _sslTlsPresets?: string; 
  public get sslTlsPresets() {
    return this.getStringAttribute('ssl_tls_presets');
  }
  public set sslTlsPresets(value: string) {
    this._sslTlsPresets = value;
  }
  public resetSslTlsPresets() {
    this._sslTlsPresets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTlsPresetsInput() {
    return this._sslTlsPresets;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ServicesSslSecurityList extends cdktf.ComplexList {
  public internalValue? : ServicesSslSecurity[] | cdktf.IResolvable

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
  public get(index: number): ServicesSslSecurityOutputReference {
    return new ServicesSslSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services barracudawaf_services}
*/
export class Services extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "barracudawaf_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Services resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Services to import
  * @param importFromId The id of the existing Services that should be imported. Refer to the {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Services to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "barracudawaf_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/services barracudawaf_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'barracudawaf_services',
      terraformGeneratorMetadata: {
        providerName: 'barracudawaf',
        providerVersion: '1.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressVersion = config.addressVersion;
    this._appId = config.appId;
    this._certificate = config.certificate;
    this._cloudIpSelect = config.cloudIpSelect;
    this._comments = config.comments;
    this._enableAccessLogs = config.enableAccessLogs;
    this._group = config.group;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._mask = config.mask;
    this._name = config.name;
    this._port = config.port;
    this._secureSiteDomain = config.secureSiteDomain;
    this._sessionTimeout = config.sessionTimeout;
    this._status = config.status;
    this._type = config.type;
    this._vsite = config.vsite;
    this._basicSecurity.internalValue = config.basicSecurity;
    this._instantSsl.internalValue = config.instantSsl;
    this._sslSecurity.internalValue = config.sslSecurity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_version - computed: false, optional: true, required: false
  private _addressVersion?: string; 
  public get addressVersion() {
    return this.getStringAttribute('address_version');
  }
  public set addressVersion(value: string) {
    this._addressVersion = value;
  }
  public resetAddressVersion() {
    this._addressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVersionInput() {
    return this._addressVersion;
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

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // cloud_ip_select - computed: false, optional: true, required: false
  private _cloudIpSelect?: string; 
  public get cloudIpSelect() {
    return this.getStringAttribute('cloud_ip_select');
  }
  public set cloudIpSelect(value: string) {
    this._cloudIpSelect = value;
  }
  public resetCloudIpSelect() {
    this._cloudIpSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIpSelectInput() {
    return this._cloudIpSelect;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // enable_access_logs - computed: false, optional: true, required: false
  private _enableAccessLogs?: string; 
  public get enableAccessLogs() {
    return this.getStringAttribute('enable_access_logs');
  }
  public set enableAccessLogs(value: string) {
    this._enableAccessLogs = value;
  }
  public resetEnableAccessLogs() {
    this._enableAccessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessLogsInput() {
    return this._enableAccessLogs;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secure_site_domain - computed: false, optional: true, required: false
  private _secureSiteDomain?: string[]; 
  public get secureSiteDomain() {
    return this.getListAttribute('secure_site_domain');
  }
  public set secureSiteDomain(value: string[]) {
    this._secureSiteDomain = value;
  }
  public resetSecureSiteDomain() {
    this._secureSiteDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSiteDomainInput() {
    return this._secureSiteDomain;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: string; 
  public get sessionTimeout() {
    return this.getStringAttribute('session_timeout');
  }
  public set sessionTimeout(value: string) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // vsite - computed: false, optional: true, required: false
  private _vsite?: string; 
  public get vsite() {
    return this.getStringAttribute('vsite');
  }
  public set vsite(value: string) {
    this._vsite = value;
  }
  public resetVsite() {
    this._vsite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsiteInput() {
    return this._vsite;
  }

  // basic_security - computed: false, optional: true, required: false
  private _basicSecurity = new ServicesBasicSecurityList(this, "basic_security", false);
  public get basicSecurity() {
    return this._basicSecurity;
  }
  public putBasicSecurity(value: ServicesBasicSecurity[] | cdktf.IResolvable) {
    this._basicSecurity.internalValue = value;
  }
  public resetBasicSecurity() {
    this._basicSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSecurityInput() {
    return this._basicSecurity.internalValue;
  }

  // instant_ssl - computed: false, optional: true, required: false
  private _instantSsl = new ServicesInstantSslList(this, "instant_ssl", false);
  public get instantSsl() {
    return this._instantSsl;
  }
  public putInstantSsl(value: ServicesInstantSsl[] | cdktf.IResolvable) {
    this._instantSsl.internalValue = value;
  }
  public resetInstantSsl() {
    this._instantSsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantSslInput() {
    return this._instantSsl.internalValue;
  }

  // ssl_security - computed: false, optional: true, required: false
  private _sslSecurity = new ServicesSslSecurityList(this, "ssl_security", false);
  public get sslSecurity() {
    return this._sslSecurity;
  }
  public putSslSecurity(value: ServicesSslSecurity[] | cdktf.IResolvable) {
    this._sslSecurity.internalValue = value;
  }
  public resetSslSecurity() {
    this._sslSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecurityInput() {
    return this._sslSecurity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_version: cdktf.stringToTerraform(this._addressVersion),
      app_id: cdktf.stringToTerraform(this._appId),
      certificate: cdktf.stringToTerraform(this._certificate),
      cloud_ip_select: cdktf.stringToTerraform(this._cloudIpSelect),
      comments: cdktf.stringToTerraform(this._comments),
      enable_access_logs: cdktf.stringToTerraform(this._enableAccessLogs),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      mask: cdktf.stringToTerraform(this._mask),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.stringToTerraform(this._port),
      secure_site_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureSiteDomain),
      session_timeout: cdktf.stringToTerraform(this._sessionTimeout),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      vsite: cdktf.stringToTerraform(this._vsite),
      basic_security: cdktf.listMapper(servicesBasicSecurityToTerraform, true)(this._basicSecurity.internalValue),
      instant_ssl: cdktf.listMapper(servicesInstantSslToTerraform, true)(this._instantSsl.internalValue),
      ssl_security: cdktf.listMapper(servicesSslSecurityToTerraform, true)(this._sslSecurity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_version: {
        value: cdktf.stringToHclTerraform(this._addressVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ip_select: {
        value: cdktf.stringToHclTerraform(this._cloudIpSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_access_logs: {
        value: cdktf.stringToHclTerraform(this._enableAccessLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask: {
        value: cdktf.stringToHclTerraform(this._mask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_site_domain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secureSiteDomain),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      session_timeout: {
        value: cdktf.stringToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsite: {
        value: cdktf.stringToHclTerraform(this._vsite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_security: {
        value: cdktf.listMapperHcl(servicesBasicSecurityToHclTerraform, true)(this._basicSecurity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicesBasicSecurityList",
      },
      instant_ssl: {
        value: cdktf.listMapperHcl(servicesInstantSslToHclTerraform, true)(this._instantSsl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicesInstantSslList",
      },
      ssl_security: {
        value: cdktf.listMapperHcl(servicesSslSecurityToHclTerraform, true)(this._sslSecurity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicesSslSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
