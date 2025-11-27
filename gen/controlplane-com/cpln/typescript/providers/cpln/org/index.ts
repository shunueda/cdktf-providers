// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * The associated account ID that will be used when creating the org. Only used on org creation. The account ID can be obtained from the `Org Management & Billing` page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#account_id Org#account_id}
  */
  readonly accountId?: string;
  /**
  * Description of the Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#description Org#description}
  */
  readonly description?: string;
  /**
  * When an org is created, the list of email addresses which will receive an invitation to join the org and be assigned to the `superusers` group. The user account used when creating the org will be included in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#invitees Org#invitees}
  */
  readonly invitees?: string[];
  /**
  * The idle time (in seconds) in which the console UI will automatically sign-out the user. Default: 900 (15 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#session_timeout_seconds Org#session_timeout_seconds}
  */
  readonly sessionTimeoutSeconds?: number;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#tags Org#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#auth_config Org#auth_config}
  */
  readonly authConfig?: OrgAuthConfig[] | cdktf.IResolvable;
  /**
  * observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#observability Org#observability}
  */
  readonly observability?: OrgObservability[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#security Org#security}
  */
  readonly security?: OrgSecurity[] | cdktf.IResolvable;
}
export interface OrgStatus {
}

export function orgStatusToTerraform(struct?: OrgStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function orgStatusToHclTerraform(struct?: OrgStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrgStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrgStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_link - computed: true, optional: false, required: false
  public get accountLink() {
    return this.getStringAttribute('account_link');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // endpoint_prefix - computed: true, optional: false, required: false
  public get endpointPrefix() {
    return this.getStringAttribute('endpoint_prefix');
  }
}

export class OrgStatusList extends cdktf.ComplexList {

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
  public get(index: number): OrgStatusOutputReference {
    return new OrgStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgAuthConfig {
  /**
  * List of domains which will auto-provision users when authenticating using SAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#domain_auto_members Org#domain_auto_members}
  */
  readonly domainAutoMembers: string[];
  /**
  * Enforce SAML only authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#saml_only Org#saml_only}
  */
  readonly samlOnly?: boolean | cdktf.IResolvable;
}

export function orgAuthConfigToTerraform(struct?: OrgAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_auto_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainAutoMembers),
    saml_only: cdktf.booleanToTerraform(struct!.samlOnly),
  }
}


export function orgAuthConfigToHclTerraform(struct?: OrgAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_auto_members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainAutoMembers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    saml_only: {
      value: cdktf.booleanToHclTerraform(struct!.samlOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainAutoMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAutoMembers = this._domainAutoMembers;
    }
    if (this._samlOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlOnly = this._samlOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainAutoMembers = undefined;
      this._samlOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainAutoMembers = value.domainAutoMembers;
      this._samlOnly = value.samlOnly;
    }
  }

  // domain_auto_members - computed: false, optional: false, required: true
  private _domainAutoMembers?: string[]; 
  public get domainAutoMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_auto_members'));
  }
  public set domainAutoMembers(value: string[]) {
    this._domainAutoMembers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAutoMembersInput() {
    return this._domainAutoMembers;
  }

  // saml_only - computed: true, optional: true, required: false
  private _samlOnly?: boolean | cdktf.IResolvable; 
  public get samlOnly() {
    return this.getBooleanAttribute('saml_only');
  }
  public set samlOnly(value: boolean | cdktf.IResolvable) {
    this._samlOnly = value;
  }
  public resetSamlOnly() {
    this._samlOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlOnlyInput() {
    return this._samlOnly;
  }
}

export class OrgAuthConfigList extends cdktf.ComplexList {
  public internalValue? : OrgAuthConfig[] | cdktf.IResolvable

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
  public get(index: number): OrgAuthConfigOutputReference {
    return new OrgAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgObservability {
  /**
  * These emails are configured as alert recipients in Grafana when the 'grafana-default-email' contact delivery type is 'Email'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#default_alert_emails Org#default_alert_emails}
  */
  readonly defaultAlertEmails?: string[];
  /**
  * Log retention days. Default: 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#logs_retention_days Org#logs_retention_days}
  */
  readonly logsRetentionDays?: number;
  /**
  * Metrics retention days. Default: 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#metrics_retention_days Org#metrics_retention_days}
  */
  readonly metricsRetentionDays?: number;
  /**
  * Traces retention days. Default: 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#traces_retention_days Org#traces_retention_days}
  */
  readonly tracesRetentionDays?: number;
}

export function orgObservabilityToTerraform(struct?: OrgObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_alert_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultAlertEmails),
    logs_retention_days: cdktf.numberToTerraform(struct!.logsRetentionDays),
    metrics_retention_days: cdktf.numberToTerraform(struct!.metricsRetentionDays),
    traces_retention_days: cdktf.numberToTerraform(struct!.tracesRetentionDays),
  }
}


export function orgObservabilityToHclTerraform(struct?: OrgObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_alert_emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultAlertEmails),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    logs_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.logsRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.metricsRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traces_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.tracesRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgObservabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAlertEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAlertEmails = this._defaultAlertEmails;
    }
    if (this._logsRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsRetentionDays = this._logsRetentionDays;
    }
    if (this._metricsRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsRetentionDays = this._metricsRetentionDays;
    }
    if (this._tracesRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracesRetentionDays = this._tracesRetentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAlertEmails = undefined;
      this._logsRetentionDays = undefined;
      this._metricsRetentionDays = undefined;
      this._tracesRetentionDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAlertEmails = value.defaultAlertEmails;
      this._logsRetentionDays = value.logsRetentionDays;
      this._metricsRetentionDays = value.metricsRetentionDays;
      this._tracesRetentionDays = value.tracesRetentionDays;
    }
  }

  // default_alert_emails - computed: true, optional: true, required: false
  private _defaultAlertEmails?: string[]; 
  public get defaultAlertEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('default_alert_emails'));
  }
  public set defaultAlertEmails(value: string[]) {
    this._defaultAlertEmails = value;
  }
  public resetDefaultAlertEmails() {
    this._defaultAlertEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAlertEmailsInput() {
    return this._defaultAlertEmails;
  }

  // logs_retention_days - computed: true, optional: true, required: false
  private _logsRetentionDays?: number; 
  public get logsRetentionDays() {
    return this.getNumberAttribute('logs_retention_days');
  }
  public set logsRetentionDays(value: number) {
    this._logsRetentionDays = value;
  }
  public resetLogsRetentionDays() {
    this._logsRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsRetentionDaysInput() {
    return this._logsRetentionDays;
  }

  // metrics_retention_days - computed: true, optional: true, required: false
  private _metricsRetentionDays?: number; 
  public get metricsRetentionDays() {
    return this.getNumberAttribute('metrics_retention_days');
  }
  public set metricsRetentionDays(value: number) {
    this._metricsRetentionDays = value;
  }
  public resetMetricsRetentionDays() {
    this._metricsRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRetentionDaysInput() {
    return this._metricsRetentionDays;
  }

  // traces_retention_days - computed: true, optional: true, required: false
  private _tracesRetentionDays?: number; 
  public get tracesRetentionDays() {
    return this.getNumberAttribute('traces_retention_days');
  }
  public set tracesRetentionDays(value: number) {
    this._tracesRetentionDays = value;
  }
  public resetTracesRetentionDays() {
    this._tracesRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesRetentionDaysInput() {
    return this._tracesRetentionDays;
  }
}

export class OrgObservabilityList extends cdktf.ComplexList {
  public internalValue? : OrgObservability[] | cdktf.IResolvable

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
  public get(index: number): OrgObservabilityOutputReference {
    return new OrgObservabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgSecurityThreatDetectionSyslog {
  /**
  * The hostname to send syslog messages to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#host Org#host}
  */
  readonly host: string;
  /**
  * The port to send syslog messages to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#port Org#port}
  */
  readonly port: number;
  /**
  * The transport-layer protocol to send the syslog messages over. If TCP is chosen, messages will be sent with TLS. Default: `tcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#transport Org#transport}
  */
  readonly transport?: string;
}

export function orgSecurityThreatDetectionSyslogToTerraform(struct?: OrgSecurityThreatDetectionSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    transport: cdktf.stringToTerraform(struct!.transport),
  }
}


export function orgSecurityThreatDetectionSyslogToHclTerraform(struct?: OrgSecurityThreatDetectionSyslog | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport: {
      value: cdktf.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSecurityThreatDetectionSyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSecurityThreatDetectionSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSecurityThreatDetectionSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._transport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._transport = value.transport;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }
}

export class OrgSecurityThreatDetectionSyslogList extends cdktf.ComplexList {
  public internalValue? : OrgSecurityThreatDetectionSyslog[] | cdktf.IResolvable

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
  public get(index: number): OrgSecurityThreatDetectionSyslogOutputReference {
    return new OrgSecurityThreatDetectionSyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgSecurityThreatDetection {
  /**
  * Indicates whether threat detection should be forwarded or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#enabled Org#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Any threats with this severity and more severe will be sent. Others will be ignored. Valid values: `warning`, `error`, or `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#minimum_severity Org#minimum_severity}
  */
  readonly minimumSeverity?: string;
  /**
  * syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#syslog Org#syslog}
  */
  readonly syslog?: OrgSecurityThreatDetectionSyslog[] | cdktf.IResolvable;
}

export function orgSecurityThreatDetectionToTerraform(struct?: OrgSecurityThreatDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    minimum_severity: cdktf.stringToTerraform(struct!.minimumSeverity),
    syslog: cdktf.listMapper(orgSecurityThreatDetectionSyslogToTerraform, true)(struct!.syslog),
  }
}


export function orgSecurityThreatDetectionToHclTerraform(struct?: OrgSecurityThreatDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_severity: {
      value: cdktf.stringToHclTerraform(struct!.minimumSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.listMapperHcl(orgSecurityThreatDetectionSyslogToHclTerraform, true)(struct!.syslog),
      isBlock: true,
      type: "list",
      storageClassType: "OrgSecurityThreatDetectionSyslogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSecurityThreatDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSecurityThreatDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minimumSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSeverity = this._minimumSeverity;
    }
    if (this._syslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSecurityThreatDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._minimumSeverity = undefined;
      this._syslog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._minimumSeverity = value.minimumSeverity;
      this._syslog.internalValue = value.syslog;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // minimum_severity - computed: false, optional: true, required: false
  private _minimumSeverity?: string; 
  public get minimumSeverity() {
    return this.getStringAttribute('minimum_severity');
  }
  public set minimumSeverity(value: string) {
    this._minimumSeverity = value;
  }
  public resetMinimumSeverity() {
    this._minimumSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSeverityInput() {
    return this._minimumSeverity;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new OrgSecurityThreatDetectionSyslogList(this, "syslog", false);
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: OrgSecurityThreatDetectionSyslog[] | cdktf.IResolvable) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }
}

export class OrgSecurityThreatDetectionList extends cdktf.ComplexList {
  public internalValue? : OrgSecurityThreatDetection[] | cdktf.IResolvable

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
  public get(index: number): OrgSecurityThreatDetectionOutputReference {
    return new OrgSecurityThreatDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgSecurity {
  /**
  * threat_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#threat_detection Org#threat_detection}
  */
  readonly threatDetection?: OrgSecurityThreatDetection[] | cdktf.IResolvable;
}

export function orgSecurityToTerraform(struct?: OrgSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threat_detection: cdktf.listMapper(orgSecurityThreatDetectionToTerraform, true)(struct!.threatDetection),
  }
}


export function orgSecurityToHclTerraform(struct?: OrgSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threat_detection: {
      value: cdktf.listMapperHcl(orgSecurityThreatDetectionToHclTerraform, true)(struct!.threatDetection),
      isBlock: true,
      type: "list",
      storageClassType: "OrgSecurityThreatDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threatDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatDetection = this._threatDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threatDetection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threatDetection.internalValue = value.threatDetection;
    }
  }

  // threat_detection - computed: false, optional: true, required: false
  private _threatDetection = new OrgSecurityThreatDetectionList(this, "threat_detection", false);
  public get threatDetection() {
    return this._threatDetection;
  }
  public putThreatDetection(value: OrgSecurityThreatDetection[] | cdktf.IResolvable) {
    this._threatDetection.internalValue = value;
  }
  public resetThreatDetection() {
    this._threatDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatDetectionInput() {
    return this._threatDetection.internalValue;
  }
}

export class OrgSecurityList extends cdktf.ComplexList {
  public internalValue? : OrgSecurity[] | cdktf.IResolvable

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
  public get(index: number): OrgSecurityOutputReference {
    return new OrgSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org cpln_org}
*/
export class Org extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Org resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Org to import
  * @param importFromId The id of the existing Org that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Org to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/org cpln_org} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrgConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cpln_org',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.17',
        providerVersionConstraint: '1.2.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._description = config.description;
    this._invitees = config.invitees;
    this._sessionTimeoutSeconds = config.sessionTimeoutSeconds;
    this._tags = config.tags;
    this._authConfig.internalValue = config.authConfig;
    this._observability.internalValue = config.observability;
    this._security.internalValue = config.security;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitees - computed: true, optional: true, required: false
  private _invitees?: string[]; 
  public get invitees() {
    return cdktf.Fn.tolist(this.getListAttribute('invitees'));
  }
  public set invitees(value: string[]) {
    this._invitees = value;
  }
  public resetInvitees() {
    this._invitees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteesInput() {
    return this._invitees;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_timeout_seconds - computed: true, optional: true, required: false
  private _sessionTimeoutSeconds?: number; 
  public get sessionTimeoutSeconds() {
    return this.getNumberAttribute('session_timeout_seconds');
  }
  public set sessionTimeoutSeconds(value: number) {
    this._sessionTimeoutSeconds = value;
  }
  public resetSessionTimeoutSeconds() {
    this._sessionTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutSecondsInput() {
    return this._sessionTimeoutSeconds;
  }

  // status - computed: true, optional: false, required: false
  private _status = new OrgStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new OrgAuthConfigList(this, "auth_config", false);
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: OrgAuthConfig[] | cdktf.IResolvable) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // observability - computed: false, optional: true, required: false
  private _observability = new OrgObservabilityList(this, "observability", false);
  public get observability() {
    return this._observability;
  }
  public putObservability(value: OrgObservability[] | cdktf.IResolvable) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new OrgSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: OrgSecurity[] | cdktf.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      invitees: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invitees),
      session_timeout_seconds: cdktf.numberToTerraform(this._sessionTimeoutSeconds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      auth_config: cdktf.listMapper(orgAuthConfigToTerraform, true)(this._authConfig.internalValue),
      observability: cdktf.listMapper(orgObservabilityToTerraform, true)(this._observability.internalValue),
      security: cdktf.listMapper(orgSecurityToTerraform, true)(this._security.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      invitees: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invitees),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._sessionTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auth_config: {
        value: cdktf.listMapperHcl(orgAuthConfigToHclTerraform, true)(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgAuthConfigList",
      },
      observability: {
        value: cdktf.listMapperHcl(orgObservabilityToHclTerraform, true)(this._observability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgObservabilityList",
      },
      security: {
        value: cdktf.listMapperHcl(orgSecurityToHclTerraform, true)(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
