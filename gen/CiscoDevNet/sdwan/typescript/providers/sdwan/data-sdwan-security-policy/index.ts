// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_policy#id DataSdwanSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanSecurityPolicyDefinitionsEntries {
}

export function dataSdwanSecurityPolicyDefinitionsEntriesToTerraform(struct?: DataSdwanSecurityPolicyDefinitionsEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSecurityPolicyDefinitionsEntriesToHclTerraform(struct?: DataSdwanSecurityPolicyDefinitionsEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSecurityPolicyDefinitionsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSecurityPolicyDefinitionsEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSecurityPolicyDefinitionsEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_zone - computed: true, optional: false, required: false
  public get destinationZone() {
    return this.getStringAttribute('destination_zone');
  }

  // source_zone - computed: true, optional: false, required: false
  public get sourceZone() {
    return this.getStringAttribute('source_zone');
  }
}

export class DataSdwanSecurityPolicyDefinitionsEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSecurityPolicyDefinitionsEntriesOutputReference {
    return new DataSdwanSecurityPolicyDefinitionsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanSecurityPolicyDefinitions {
}

export function dataSdwanSecurityPolicyDefinitionsToTerraform(struct?: DataSdwanSecurityPolicyDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSecurityPolicyDefinitionsToHclTerraform(struct?: DataSdwanSecurityPolicyDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSecurityPolicyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSecurityPolicyDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSecurityPolicyDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entries - computed: true, optional: false, required: false
  private _entries = new DataSdwanSecurityPolicyDefinitionsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataSdwanSecurityPolicyDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSecurityPolicyDefinitionsOutputReference {
    return new DataSdwanSecurityPolicyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanSecurityPolicyLogging {
}

export function dataSdwanSecurityPolicyLoggingToTerraform(struct?: DataSdwanSecurityPolicyLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSecurityPolicyLoggingToHclTerraform(struct?: DataSdwanSecurityPolicyLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSecurityPolicyLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSecurityPolicyLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSecurityPolicyLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_syslog_server_ip - computed: true, optional: false, required: false
  public get externalSyslogServerIp() {
    return this.getStringAttribute('external_syslog_server_ip');
  }

  // external_syslog_server_source_interface - computed: true, optional: false, required: false
  public get externalSyslogServerSourceInterface() {
    return this.getStringAttribute('external_syslog_server_source_interface');
  }

  // external_syslog_server_vpn - computed: true, optional: false, required: false
  public get externalSyslogServerVpn() {
    return this.getStringAttribute('external_syslog_server_vpn');
  }
}

export class DataSdwanSecurityPolicyLoggingList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSecurityPolicyLoggingOutputReference {
    return new DataSdwanSecurityPolicyLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_policy sdwan_security_policy}
*/
export class DataSdwanSecurityPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSecurityPolicy to import
  * @param importFromId The id of the existing DataSdwanSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_policy sdwan_security_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_trail - computed: true, optional: false, required: false
  public get auditTrail() {
    return this.getStringAttribute('audit_trail');
  }

  // definitions - computed: true, optional: false, required: false
  private _definitions = new DataSdwanSecurityPolicyDefinitionsList(this, "definitions", true);
  public get definitions() {
    return this._definitions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direct_internet_applications - computed: true, optional: false, required: false
  public get directInternetApplications() {
    return this.getStringAttribute('direct_internet_applications');
  }

  // failure_mode - computed: true, optional: false, required: false
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }

  // high_speed_logging_server_ip - computed: true, optional: false, required: false
  public get highSpeedLoggingServerIp() {
    return this.getStringAttribute('high_speed_logging_server_ip');
  }

  // high_speed_logging_server_port - computed: true, optional: false, required: false
  public get highSpeedLoggingServerPort() {
    return this.getStringAttribute('high_speed_logging_server_port');
  }

  // high_speed_logging_server_source_interface - computed: true, optional: false, required: false
  public get highSpeedLoggingServerSourceInterface() {
    return this.getStringAttribute('high_speed_logging_server_source_interface');
  }

  // high_speed_logging_vpn - computed: true, optional: false, required: false
  public get highSpeedLoggingVpn() {
    return this.getStringAttribute('high_speed_logging_vpn');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // imcp_unreachable_allow - computed: true, optional: false, required: false
  public get imcpUnreachableAllow() {
    return this.getStringAttribute('imcp_unreachable_allow');
  }

  // logging - computed: true, optional: false, required: false
  private _logging = new DataSdwanSecurityPolicyLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }

  // match_statistics_per_filter - computed: true, optional: false, required: false
  public get matchStatisticsPerFilter() {
    return this.getStringAttribute('match_statistics_per_filter');
  }

  // max_incomplete_icmp_limit - computed: true, optional: false, required: false
  public get maxIncompleteIcmpLimit() {
    return this.getStringAttribute('max_incomplete_icmp_limit');
  }

  // max_incomplete_tcp_limit - computed: true, optional: false, required: false
  public get maxIncompleteTcpLimit() {
    return this.getStringAttribute('max_incomplete_tcp_limit');
  }

  // max_incomplete_udp_limit - computed: true, optional: false, required: false
  public get maxIncompleteUdpLimit() {
    return this.getStringAttribute('max_incomplete_udp_limit');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // session_reclassify_allow - computed: true, optional: false, required: false
  public get sessionReclassifyAllow() {
    return this.getStringAttribute('session_reclassify_allow');
  }

  // tcp_syn_flood_limit - computed: true, optional: false, required: false
  public get tcpSynFloodLimit() {
    return this.getStringAttribute('tcp_syn_flood_limit');
  }

  // unified_logging - computed: true, optional: false, required: false
  public get unifiedLogging() {
    return this.getStringAttribute('unified_logging');
  }

  // use_case - computed: true, optional: false, required: false
  public get useCase() {
    return this.getStringAttribute('use_case');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
