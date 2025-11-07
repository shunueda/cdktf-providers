// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordSrvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the record; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#comment DnsRecordSrv#comment}
  */
  readonly comment?: string;
  /**
  * The record creator. Note that changing creator from or to 'SYSTEM' value is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#creator DnsRecordSrv#creator}
  */
  readonly creator?: string;
  /**
  * The GSS-TSIG principal that owns this record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#ddns_principal DnsRecordSrv#ddns_principal}
  */
  readonly ddnsPrincipal?: string;
  /**
  * Determines if the DDNS updates for this record are allowed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#ddns_protected DnsRecordSrv#ddns_protected}
  */
  readonly ddnsProtected?: boolean | cdktf.IResolvable;
  /**
  * Determines if the record is disabled or not. False means that the record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#disable DnsRecordSrv#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#extattrs DnsRecordSrv#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * Determines if the reclamation is allowed for the record or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#forbid_reclamation DnsRecordSrv#forbid_reclamation}
  */
  readonly forbidReclamation?: boolean | cdktf.IResolvable;
  /**
  * A name in FQDN format. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#name DnsRecordSrv#name}
  */
  readonly name: string;
  /**
  * The port of the SRV record. Valid values are from 0 to 65535 (inclusive), in 32-bit unsigned integer format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#port DnsRecordSrv#port}
  */
  readonly port: number;
  /**
  * The priority of the SRV record. Valid values are from 0 to 65535 (inclusive), in 32-bit unsigned integer format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#priority DnsRecordSrv#priority}
  */
  readonly priority: number;
  /**
  * The target of the SRV record in FQDN format. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#target DnsRecordSrv#target}
  */
  readonly target: string;
  /**
  * The Time to Live (TTL) value for the record. A 32-bit unsigned integer that represents the duration, in seconds, for which the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#ttl DnsRecordSrv#ttl}
  */
  readonly ttl?: number;
  /**
  * Use flag for: ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#use_ttl DnsRecordSrv#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the record resides. Example: "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#view DnsRecordSrv#view}
  */
  readonly view?: string;
  /**
  * The weight of the SRV record. Valid values are from 0 to 65535 (inclusive), in 32-bit unsigned integer format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#weight DnsRecordSrv#weight}
  */
  readonly weight: number;
}
export interface DnsRecordSrvAwsRte53RecordInfo {
}

export function dnsRecordSrvAwsRte53RecordInfoToTerraform(struct?: DnsRecordSrvAwsRte53RecordInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsRecordSrvAwsRte53RecordInfoToHclTerraform(struct?: DnsRecordSrvAwsRte53RecordInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsRecordSrvAwsRte53RecordInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordSrvAwsRte53RecordInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSrvAwsRte53RecordInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias_target_dns_name - computed: true, optional: false, required: false
  public get aliasTargetDnsName() {
    return this.getStringAttribute('alias_target_dns_name');
  }

  // alias_target_evaluate_target_health - computed: true, optional: false, required: false
  public get aliasTargetEvaluateTargetHealth() {
    return this.getBooleanAttribute('alias_target_evaluate_target_health');
  }

  // alias_target_hosted_zone_id - computed: true, optional: false, required: false
  public get aliasTargetHostedZoneId() {
    return this.getStringAttribute('alias_target_hosted_zone_id');
  }

  // failover - computed: true, optional: false, required: false
  public get failover() {
    return this.getStringAttribute('failover');
  }

  // geolocation_continent_code - computed: true, optional: false, required: false
  public get geolocationContinentCode() {
    return this.getStringAttribute('geolocation_continent_code');
  }

  // geolocation_country_code - computed: true, optional: false, required: false
  public get geolocationCountryCode() {
    return this.getStringAttribute('geolocation_country_code');
  }

  // geolocation_subdivision_code - computed: true, optional: false, required: false
  public get geolocationSubdivisionCode() {
    return this.getStringAttribute('geolocation_subdivision_code');
  }

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // set_identifier - computed: true, optional: false, required: false
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DnsRecordSrvCloudInfoDelegatedMember {
}

export function dnsRecordSrvCloudInfoDelegatedMemberToTerraform(struct?: DnsRecordSrvCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsRecordSrvCloudInfoDelegatedMemberToHclTerraform(struct?: DnsRecordSrvCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsRecordSrvCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordSrvCloudInfoDelegatedMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSrvCloudInfoDelegatedMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4addr - computed: true, optional: false, required: false
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }

  // ipv6addr - computed: true, optional: false, required: false
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DnsRecordSrvCloudInfo {
}

export function dnsRecordSrvCloudInfoToTerraform(struct?: DnsRecordSrvCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsRecordSrvCloudInfoToHclTerraform(struct?: DnsRecordSrvCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsRecordSrvCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordSrvCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSrvCloudInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: false, required: false
  private _delegatedMember = new DnsRecordSrvCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv nios_dns_record_srv}
*/
export class DnsRecordSrv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_record_srv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecordSrv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecordSrv to import
  * @param importFromId The id of the existing DnsRecordSrv that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecordSrv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_record_srv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_srv nios_dns_record_srv} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordSrvConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordSrvConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_record_srv',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._creator = config.creator;
    this._ddnsPrincipal = config.ddnsPrincipal;
    this._ddnsProtected = config.ddnsProtected;
    this._disable = config.disable;
    this._extattrs = config.extattrs;
    this._forbidReclamation = config.forbidReclamation;
    this._name = config.name;
    this._port = config.port;
    this._priority = config.priority;
    this._target = config.target;
    this._ttl = config.ttl;
    this._useTtl = config.useTtl;
    this._view = config.view;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_rte53_record_info - computed: true, optional: false, required: false
  private _awsRte53RecordInfo = new DnsRecordSrvAwsRte53RecordInfoOutputReference(this, "aws_rte53_record_info");
  public get awsRte53RecordInfo() {
    return this._awsRte53RecordInfo;
  }

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new DnsRecordSrvCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // creator - computed: true, optional: true, required: false
  private _creator?: string; 
  public get creator() {
    return this.getStringAttribute('creator');
  }
  public set creator(value: string) {
    this._creator = value;
  }
  public resetCreator() {
    this._creator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorInput() {
    return this._creator;
  }

  // ddns_principal - computed: true, optional: true, required: false
  private _ddnsPrincipal?: string; 
  public get ddnsPrincipal() {
    return this.getStringAttribute('ddns_principal');
  }
  public set ddnsPrincipal(value: string) {
    this._ddnsPrincipal = value;
  }
  public resetDdnsPrincipal() {
    this._ddnsPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPrincipalInput() {
    return this._ddnsPrincipal;
  }

  // ddns_protected - computed: true, optional: true, required: false
  private _ddnsProtected?: boolean | cdktf.IResolvable; 
  public get ddnsProtected() {
    return this.getBooleanAttribute('ddns_protected');
  }
  public set ddnsProtected(value: boolean | cdktf.IResolvable) {
    this._ddnsProtected = value;
  }
  public resetDdnsProtected() {
    this._ddnsProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsProtectedInput() {
    return this._ddnsProtected;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_target - computed: true, optional: false, required: false
  public get dnsTarget() {
    return this.getStringAttribute('dns_target');
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // forbid_reclamation - computed: true, optional: true, required: false
  private _forbidReclamation?: boolean | cdktf.IResolvable; 
  public get forbidReclamation() {
    return this.getBooleanAttribute('forbid_reclamation');
  }
  public set forbidReclamation(value: boolean | cdktf.IResolvable) {
    this._forbidReclamation = value;
  }
  public resetForbidReclamation() {
    this._forbidReclamation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbidReclamationInput() {
    return this._forbidReclamation;
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
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

  // reclaimable - computed: true, optional: false, required: false
  public get reclaimable() {
    return this.getBooleanAttribute('reclaimable');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // shared_record_group - computed: true, optional: false, required: false
  public get sharedRecordGroup() {
    return this.getStringAttribute('shared_record_group');
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_ttl - computed: true, optional: true, required: false
  private _useTtl?: boolean | cdktf.IResolvable; 
  public get useTtl() {
    return this.getBooleanAttribute('use_ttl');
  }
  public set useTtl(value: boolean | cdktf.IResolvable) {
    this._useTtl = value;
  }
  public resetUseTtl() {
    this._useTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTtlInput() {
    return this._useTtl;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      creator: cdktf.stringToTerraform(this._creator),
      ddns_principal: cdktf.stringToTerraform(this._ddnsPrincipal),
      ddns_protected: cdktf.booleanToTerraform(this._ddnsProtected),
      disable: cdktf.booleanToTerraform(this._disable),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      forbid_reclamation: cdktf.booleanToTerraform(this._forbidReclamation),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      target: cdktf.stringToTerraform(this._target),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_ttl: cdktf.booleanToTerraform(this._useTtl),
      view: cdktf.stringToTerraform(this._view),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creator: {
        value: cdktf.stringToHclTerraform(this._creator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_principal: {
        value: cdktf.stringToHclTerraform(this._ddnsPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_protected: {
        value: cdktf.booleanToHclTerraform(this._ddnsProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      forbid_reclamation: {
        value: cdktf.booleanToHclTerraform(this._forbidReclamation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_ttl: {
        value: cdktf.booleanToHclTerraform(this._useTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
