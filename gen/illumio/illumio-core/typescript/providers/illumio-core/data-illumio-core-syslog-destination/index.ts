// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/syslog_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIllumioCoreSyslogDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * URI of the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/syslog_destination#href DataIllumioCoreSyslogDestination#href}
  */
  readonly href: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/syslog_destination#id DataIllumioCoreSyslogDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataIllumioCoreSyslogDestinationAuditEventLogger {
}

export function dataIllumioCoreSyslogDestinationAuditEventLoggerToTerraform(struct?: DataIllumioCoreSyslogDestinationAuditEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreSyslogDestinationAuditEventLoggerToHclTerraform(struct?: DataIllumioCoreSyslogDestinationAuditEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreSyslogDestinationAuditEventLoggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreSyslogDestinationAuditEventLogger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreSyslogDestinationAuditEventLogger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_event_included - computed: true, optional: false, required: false
  public get configurationEventIncluded() {
    return this.getBooleanAttribute('configuration_event_included');
  }

  // min_severity - computed: true, optional: false, required: false
  public get minSeverity() {
    return this.getStringAttribute('min_severity');
  }

  // system_event_included - computed: true, optional: false, required: false
  public get systemEventIncluded() {
    return this.getBooleanAttribute('system_event_included');
  }
}

export class DataIllumioCoreSyslogDestinationAuditEventLoggerList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreSyslogDestinationAuditEventLoggerOutputReference {
    return new DataIllumioCoreSyslogDestinationAuditEventLoggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreSyslogDestinationNodeStatusLogger {
}

export function dataIllumioCoreSyslogDestinationNodeStatusLoggerToTerraform(struct?: DataIllumioCoreSyslogDestinationNodeStatusLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreSyslogDestinationNodeStatusLoggerToHclTerraform(struct?: DataIllumioCoreSyslogDestinationNodeStatusLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreSyslogDestinationNodeStatusLoggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreSyslogDestinationNodeStatusLogger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreSyslogDestinationNodeStatusLogger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_status_included - computed: true, optional: false, required: false
  public get nodeStatusIncluded() {
    return this.getBooleanAttribute('node_status_included');
  }
}

export class DataIllumioCoreSyslogDestinationNodeStatusLoggerList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreSyslogDestinationNodeStatusLoggerOutputReference {
    return new DataIllumioCoreSyslogDestinationNodeStatusLoggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreSyslogDestinationRemoteSyslog {
}

export function dataIllumioCoreSyslogDestinationRemoteSyslogToTerraform(struct?: DataIllumioCoreSyslogDestinationRemoteSyslog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreSyslogDestinationRemoteSyslogToHclTerraform(struct?: DataIllumioCoreSyslogDestinationRemoteSyslog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreSyslogDestinationRemoteSyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreSyslogDestinationRemoteSyslog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreSyslogDestinationRemoteSyslog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }

  // tls_ca_bundle - computed: true, optional: false, required: false
  public get tlsCaBundle() {
    return this.getStringAttribute('tls_ca_bundle');
  }

  // tls_enabled - computed: true, optional: false, required: false
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }

  // tls_verify_cert - computed: true, optional: false, required: false
  public get tlsVerifyCert() {
    return this.getBooleanAttribute('tls_verify_cert');
  }
}

export class DataIllumioCoreSyslogDestinationRemoteSyslogList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreSyslogDestinationRemoteSyslogOutputReference {
    return new DataIllumioCoreSyslogDestinationRemoteSyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreSyslogDestinationTrafficEventLogger {
}

export function dataIllumioCoreSyslogDestinationTrafficEventLoggerToTerraform(struct?: DataIllumioCoreSyslogDestinationTrafficEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreSyslogDestinationTrafficEventLoggerToHclTerraform(struct?: DataIllumioCoreSyslogDestinationTrafficEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreSyslogDestinationTrafficEventLoggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreSyslogDestinationTrafficEventLogger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreSyslogDestinationTrafficEventLogger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // traffic_flow_allowed_event_included - computed: true, optional: false, required: false
  public get trafficFlowAllowedEventIncluded() {
    return this.getBooleanAttribute('traffic_flow_allowed_event_included');
  }

  // traffic_flow_blocked_event_included - computed: true, optional: false, required: false
  public get trafficFlowBlockedEventIncluded() {
    return this.getBooleanAttribute('traffic_flow_blocked_event_included');
  }

  // traffic_flow_potentially_blocked_event_included - computed: true, optional: false, required: false
  public get trafficFlowPotentiallyBlockedEventIncluded() {
    return this.getBooleanAttribute('traffic_flow_potentially_blocked_event_included');
  }
}

export class DataIllumioCoreSyslogDestinationTrafficEventLoggerList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreSyslogDestinationTrafficEventLoggerOutputReference {
    return new DataIllumioCoreSyslogDestinationTrafficEventLoggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/syslog_destination illumio-core_syslog_destination}
*/
export class DataIllumioCoreSyslogDestination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_syslog_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIllumioCoreSyslogDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIllumioCoreSyslogDestination to import
  * @param importFromId The id of the existing DataIllumioCoreSyslogDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/syslog_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIllumioCoreSyslogDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_syslog_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/syslog_destination illumio-core_syslog_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIllumioCoreSyslogDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataIllumioCoreSyslogDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_syslog_destination',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._href = config.href;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_event_logger - computed: true, optional: false, required: false
  private _auditEventLogger = new DataIllumioCoreSyslogDestinationAuditEventLoggerList(this, "audit_event_logger", false);
  public get auditEventLogger() {
    return this._auditEventLogger;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
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

  // node_status_logger - computed: true, optional: false, required: false
  private _nodeStatusLogger = new DataIllumioCoreSyslogDestinationNodeStatusLoggerList(this, "node_status_logger", false);
  public get nodeStatusLogger() {
    return this._nodeStatusLogger;
  }

  // pce_scope - computed: true, optional: false, required: false
  public get pceScope() {
    return this.getListAttribute('pce_scope');
  }

  // remote_syslog - computed: true, optional: false, required: false
  private _remoteSyslog = new DataIllumioCoreSyslogDestinationRemoteSyslogList(this, "remote_syslog", false);
  public get remoteSyslog() {
    return this._remoteSyslog;
  }

  // traffic_event_logger - computed: true, optional: false, required: false
  private _trafficEventLogger = new DataIllumioCoreSyslogDestinationTrafficEventLoggerList(this, "traffic_event_logger", false);
  public get trafficEventLogger() {
    return this._trafficEventLogger;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      href: cdktf.stringToTerraform(this._href),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      href: {
        value: cdktf.stringToHclTerraform(this._href),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
