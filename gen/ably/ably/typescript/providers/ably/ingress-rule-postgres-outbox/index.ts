// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IngressRulePostgresOutboxConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Ably application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#app_id IngressRulePostgresOutbox#app_id}
  */
  readonly appId: string;
  /**
  * The status of the rule. Rules can be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#status IngressRulePostgresOutbox#status}
  */
  readonly status?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#target IngressRulePostgresOutbox#target}
  */
  readonly target: IngressRulePostgresOutboxTarget;
}
export interface IngressRulePostgresOutboxTarget {
  /**
  * Name for the nodes table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#nodes_table_name IngressRulePostgresOutbox#nodes_table_name}
  */
  readonly nodesTableName: string;
  /**
  * Schema for the nodes table in your database to allow for operation as a cluster to provide fault tolerance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#nodes_table_schema IngressRulePostgresOutbox#nodes_table_schema}
  */
  readonly nodesTableSchema: string;
  /**
  * Name for the outbox table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#outbox_table_name IngressRulePostgresOutbox#outbox_table_name}
  */
  readonly outboxTableName: string;
  /**
  * Schema for the outbox table in your database, which allows for the reliable publication of an ordered sequence of change event messages over Ably.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#outbox_table_schema IngressRulePostgresOutbox#outbox_table_schema}
  */
  readonly outboxTableSchema: string;
  /**
  * The primary data center in which to run the integration rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#primary_site IngressRulePostgresOutbox#primary_site}
  */
  readonly primarySite: string;
  /**
  * Determines the level of protection provided by the SSL connection. Options are:
  *   - prefer: Attempt SSL but allow non-SSL.
  *   - require: Always use SSL but don't verify certificates.
  *   - verify-ca: Verify server certificate is signed by a trusted CA.
  *   - verify-full: Verify server certificate and hostname.
  * 
  * Default: prefer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#ssl_mode IngressRulePostgresOutbox#ssl_mode}
  */
  readonly sslMode: string;
  /**
  * Optional. Specifies the SSL certificate authority (CA) certificates. Required if SSL mode is verify-ca or verify-full.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#ssl_root_cert IngressRulePostgresOutbox#ssl_root_cert}
  */
  readonly sslRootCert?: string;
  /**
  * The URL for your Postgres database, for example postgres://user:password@example.com:5432/your-database-name. The associated user must have the correct privileges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#url IngressRulePostgresOutbox#url}
  */
  readonly url: string;
}

export function ingressRulePostgresOutboxTargetToTerraform(struct?: IngressRulePostgresOutboxTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nodes_table_name: cdktf.stringToTerraform(struct!.nodesTableName),
    nodes_table_schema: cdktf.stringToTerraform(struct!.nodesTableSchema),
    outbox_table_name: cdktf.stringToTerraform(struct!.outboxTableName),
    outbox_table_schema: cdktf.stringToTerraform(struct!.outboxTableSchema),
    primary_site: cdktf.stringToTerraform(struct!.primarySite),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    ssl_root_cert: cdktf.stringToTerraform(struct!.sslRootCert),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ingressRulePostgresOutboxTargetToHclTerraform(struct?: IngressRulePostgresOutboxTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nodes_table_name: {
      value: cdktf.stringToHclTerraform(struct!.nodesTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes_table_schema: {
      value: cdktf.stringToHclTerraform(struct!.nodesTableSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbox_table_name: {
      value: cdktf.stringToHclTerraform(struct!.outboxTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbox_table_schema: {
      value: cdktf.stringToHclTerraform(struct!.outboxTableSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_site: {
      value: cdktf.stringToHclTerraform(struct!.primarySite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_root_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslRootCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IngressRulePostgresOutboxTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IngressRulePostgresOutboxTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodesTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesTableName = this._nodesTableName;
    }
    if (this._nodesTableSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesTableSchema = this._nodesTableSchema;
    }
    if (this._outboxTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboxTableName = this._outboxTableName;
    }
    if (this._outboxTableSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboxTableSchema = this._outboxTableSchema;
    }
    if (this._primarySite !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySite = this._primarySite;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._sslRootCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRootCert = this._sslRootCert;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IngressRulePostgresOutboxTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodesTableName = undefined;
      this._nodesTableSchema = undefined;
      this._outboxTableName = undefined;
      this._outboxTableSchema = undefined;
      this._primarySite = undefined;
      this._sslMode = undefined;
      this._sslRootCert = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodesTableName = value.nodesTableName;
      this._nodesTableSchema = value.nodesTableSchema;
      this._outboxTableName = value.outboxTableName;
      this._outboxTableSchema = value.outboxTableSchema;
      this._primarySite = value.primarySite;
      this._sslMode = value.sslMode;
      this._sslRootCert = value.sslRootCert;
      this._url = value.url;
    }
  }

  // nodes_table_name - computed: false, optional: false, required: true
  private _nodesTableName?: string; 
  public get nodesTableName() {
    return this.getStringAttribute('nodes_table_name');
  }
  public set nodesTableName(value: string) {
    this._nodesTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesTableNameInput() {
    return this._nodesTableName;
  }

  // nodes_table_schema - computed: false, optional: false, required: true
  private _nodesTableSchema?: string; 
  public get nodesTableSchema() {
    return this.getStringAttribute('nodes_table_schema');
  }
  public set nodesTableSchema(value: string) {
    this._nodesTableSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesTableSchemaInput() {
    return this._nodesTableSchema;
  }

  // outbox_table_name - computed: false, optional: false, required: true
  private _outboxTableName?: string; 
  public get outboxTableName() {
    return this.getStringAttribute('outbox_table_name');
  }
  public set outboxTableName(value: string) {
    this._outboxTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboxTableNameInput() {
    return this._outboxTableName;
  }

  // outbox_table_schema - computed: false, optional: false, required: true
  private _outboxTableSchema?: string; 
  public get outboxTableSchema() {
    return this.getStringAttribute('outbox_table_schema');
  }
  public set outboxTableSchema(value: string) {
    this._outboxTableSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboxTableSchemaInput() {
    return this._outboxTableSchema;
  }

  // primary_site - computed: false, optional: false, required: true
  private _primarySite?: string; 
  public get primarySite() {
    return this.getStringAttribute('primary_site');
  }
  public set primarySite(value: string) {
    this._primarySite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySiteInput() {
    return this._primarySite;
  }

  // ssl_mode - computed: false, optional: false, required: true
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // ssl_root_cert - computed: false, optional: true, required: false
  private _sslRootCert?: string; 
  public get sslRootCert() {
    return this.getStringAttribute('ssl_root_cert');
  }
  public set sslRootCert(value: string) {
    this._sslRootCert = value;
  }
  public resetSslRootCert() {
    this._sslRootCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRootCertInput() {
    return this._sslRootCert;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox ably_ingress_rule_postgres_outbox}
*/
export class IngressRulePostgresOutbox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_ingress_rule_postgres_outbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IngressRulePostgresOutbox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IngressRulePostgresOutbox to import
  * @param importFromId The id of the existing IngressRulePostgresOutbox that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IngressRulePostgresOutbox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_ingress_rule_postgres_outbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_postgres_outbox ably_ingress_rule_postgres_outbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IngressRulePostgresOutboxConfig
  */
  public constructor(scope: Construct, id: string, config: IngressRulePostgresOutboxConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_ingress_rule_postgres_outbox',
      terraformGeneratorMetadata: {
        providerName: 'ably',
        providerVersion: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._status = config.status;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // target - computed: false, optional: false, required: true
  private _target = new IngressRulePostgresOutboxTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: IngressRulePostgresOutboxTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      status: cdktf.stringToTerraform(this._status),
      target: ingressRulePostgresOutboxTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      target: {
        value: ingressRulePostgresOutboxTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IngressRulePostgresOutboxTarget",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
