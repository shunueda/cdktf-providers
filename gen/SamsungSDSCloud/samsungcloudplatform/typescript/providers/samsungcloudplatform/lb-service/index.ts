// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#app_profile_id LbService#app_profile_id}
  */
  readonly appProfileId: string;
  /**
  * SSL client certification id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#client_certificate_id LbService#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * SSL client security level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#client_ssl_security_level LbService#client_ssl_security_level}
  */
  readonly clientSslSecurityLevel?: string;
  /**
  * Forwarding port numbers. Multiple ports can be inserted using comma and dash. (e.g. 8000-8100,8200)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#forwarding_ports LbService#forwarding_ports}
  */
  readonly forwardingPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#id LbService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Servicing protocol layer. (L4 for TCP, L7 for HTTP or HTTPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#layer_type LbService#layer_type}
  */
  readonly layerType: string;
  /**
  * Target Load-Balancer id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#lb_id LbService#lb_id}
  */
  readonly lbId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#lb_service_ip_id LbService#lb_service_ip_id}
  */
  readonly lbServiceIpId?: string;
  /**
  * Name of Load-Balancer Service. (3 to 20 characters with dash in middle)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#name LbService#name}
  */
  readonly name: string;
  /**
  * Wheter to use NAT IP (public IP) or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#nat_active LbService#nat_active}
  */
  readonly natActive?: boolean | cdktf.IResolvable;
  /**
  * Persistence option. (DISABLED, SOURCE_IP, COOKIE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#persistence LbService#persistence}
  */
  readonly persistence: string;
  /**
  * Persistence target profile id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#persistence_profile_id LbService#persistence_profile_id}
  */
  readonly persistenceProfileId?: string;
  /**
  * Servicing protocol. (TCP, HTTP, HTTPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#protocol LbService#protocol}
  */
  readonly protocol: string;
  /**
  * NAT IP attached to LB service IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#public_ip_id LbService#public_ip_id}
  */
  readonly publicIpId?: string;
  /**
  * SSL server certification id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#server_certificate_id LbService#server_certificate_id}
  */
  readonly serverCertificateId?: string;
  /**
  * SSL server security level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#server_ssl_security_level LbService#server_ssl_security_level}
  */
  readonly serverSslSecurityLevel?: string;
  /**
  * Servicing IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#service_ipv4 LbService#service_ipv4}
  */
  readonly serviceIpv4?: string;
  /**
  * Servicing port numbers. Multiple ports can be inserted using comma and dash. (e.g. 8000-8100,8200)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#service_ports LbService#service_ports}
  */
  readonly servicePorts: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#tags LbService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#use_access_log LbService#use_access_log}
  */
  readonly useAccessLog?: boolean | cdktf.IResolvable;
  /**
  * lb_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#lb_rules LbService#lb_rules}
  */
  readonly lbRules?: LbServiceLbRules[] | cdktf.IResolvable;
}
export interface LbServiceLbRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#lb_rule_seq LbService#lb_rule_seq}
  */
  readonly lbRuleSeq: number;
  /**
  * Target server-group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#lb_server_group_id LbService#lb_server_group_id}
  */
  readonly lbServerGroupId?: string;
  /**
  * Pattern URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#pattern_url LbService#pattern_url}
  */
  readonly patternUrl?: string;
}

export function lbServiceLbRulesToTerraform(struct?: LbServiceLbRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lb_rule_seq: cdktf.numberToTerraform(struct!.lbRuleSeq),
    lb_server_group_id: cdktf.stringToTerraform(struct!.lbServerGroupId),
    pattern_url: cdktf.stringToTerraform(struct!.patternUrl),
  }
}


export function lbServiceLbRulesToHclTerraform(struct?: LbServiceLbRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lb_rule_seq: {
      value: cdktf.numberToHclTerraform(struct!.lbRuleSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_server_group_id: {
      value: cdktf.stringToHclTerraform(struct!.lbServerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_url: {
      value: cdktf.stringToHclTerraform(struct!.patternUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbServiceLbRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbServiceLbRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lbRuleSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbRuleSeq = this._lbRuleSeq;
    }
    if (this._lbServerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbServerGroupId = this._lbServerGroupId;
    }
    if (this._patternUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternUrl = this._patternUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbServiceLbRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lbRuleSeq = undefined;
      this._lbServerGroupId = undefined;
      this._patternUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lbRuleSeq = value.lbRuleSeq;
      this._lbServerGroupId = value.lbServerGroupId;
      this._patternUrl = value.patternUrl;
    }
  }

  // lb_rule_id - computed: true, optional: false, required: false
  public get lbRuleId() {
    return this.getStringAttribute('lb_rule_id');
  }

  // lb_rule_seq - computed: false, optional: false, required: true
  private _lbRuleSeq?: number; 
  public get lbRuleSeq() {
    return this.getNumberAttribute('lb_rule_seq');
  }
  public set lbRuleSeq(value: number) {
    this._lbRuleSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbRuleSeqInput() {
    return this._lbRuleSeq;
  }

  // lb_server_group_id - computed: false, optional: true, required: false
  private _lbServerGroupId?: string; 
  public get lbServerGroupId() {
    return this.getStringAttribute('lb_server_group_id');
  }
  public set lbServerGroupId(value: string) {
    this._lbServerGroupId = value;
  }
  public resetLbServerGroupId() {
    this._lbServerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbServerGroupIdInput() {
    return this._lbServerGroupId;
  }

  // pattern_url - computed: false, optional: true, required: false
  private _patternUrl?: string; 
  public get patternUrl() {
    return this.getStringAttribute('pattern_url');
  }
  public set patternUrl(value: string) {
    this._patternUrl = value;
  }
  public resetPatternUrl() {
    this._patternUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternUrlInput() {
    return this._patternUrl;
  }
}

export class LbServiceLbRulesList extends cdktf.ComplexList {
  public internalValue? : LbServiceLbRules[] | cdktf.IResolvable

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
  public get(index: number): LbServiceLbRulesOutputReference {
    return new LbServiceLbRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service samsungcloudplatform_lb_service}
*/
export class LbService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_lb_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbService to import
  * @param importFromId The id of the existing LbService that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_lb_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/lb_service samsungcloudplatform_lb_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbServiceConfig
  */
  public constructor(scope: Construct, id: string, config: LbServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_lb_service',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appProfileId = config.appProfileId;
    this._clientCertificateId = config.clientCertificateId;
    this._clientSslSecurityLevel = config.clientSslSecurityLevel;
    this._forwardingPorts = config.forwardingPorts;
    this._id = config.id;
    this._layerType = config.layerType;
    this._lbId = config.lbId;
    this._lbServiceIpId = config.lbServiceIpId;
    this._name = config.name;
    this._natActive = config.natActive;
    this._persistence = config.persistence;
    this._persistenceProfileId = config.persistenceProfileId;
    this._protocol = config.protocol;
    this._publicIpId = config.publicIpId;
    this._serverCertificateId = config.serverCertificateId;
    this._serverSslSecurityLevel = config.serverSslSecurityLevel;
    this._serviceIpv4 = config.serviceIpv4;
    this._servicePorts = config.servicePorts;
    this._tags = config.tags;
    this._useAccessLog = config.useAccessLog;
    this._lbRules.internalValue = config.lbRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_profile_id - computed: false, optional: false, required: true
  private _appProfileId?: string; 
  public get appProfileId() {
    return this.getStringAttribute('app_profile_id');
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId;
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // client_ssl_security_level - computed: false, optional: true, required: false
  private _clientSslSecurityLevel?: string; 
  public get clientSslSecurityLevel() {
    return this.getStringAttribute('client_ssl_security_level');
  }
  public set clientSslSecurityLevel(value: string) {
    this._clientSslSecurityLevel = value;
  }
  public resetClientSslSecurityLevel() {
    this._clientSslSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslSecurityLevelInput() {
    return this._clientSslSecurityLevel;
  }

  // forwarding_ports - computed: false, optional: true, required: false
  private _forwardingPorts?: string; 
  public get forwardingPorts() {
    return this.getStringAttribute('forwarding_ports');
  }
  public set forwardingPorts(value: string) {
    this._forwardingPorts = value;
  }
  public resetForwardingPorts() {
    this._forwardingPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingPortsInput() {
    return this._forwardingPorts;
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

  // layer_type - computed: false, optional: false, required: true
  private _layerType?: string; 
  public get layerType() {
    return this.getStringAttribute('layer_type');
  }
  public set layerType(value: string) {
    this._layerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerTypeInput() {
    return this._layerType;
  }

  // lb_id - computed: false, optional: false, required: true
  private _lbId?: string; 
  public get lbId() {
    return this.getStringAttribute('lb_id');
  }
  public set lbId(value: string) {
    this._lbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbIdInput() {
    return this._lbId;
  }

  // lb_service_ip_id - computed: true, optional: true, required: false
  private _lbServiceIpId?: string; 
  public get lbServiceIpId() {
    return this.getStringAttribute('lb_service_ip_id');
  }
  public set lbServiceIpId(value: string) {
    this._lbServiceIpId = value;
  }
  public resetLbServiceIpId() {
    this._lbServiceIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbServiceIpIdInput() {
    return this._lbServiceIpId;
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

  // nat_active - computed: false, optional: true, required: false
  private _natActive?: boolean | cdktf.IResolvable; 
  public get natActive() {
    return this.getBooleanAttribute('nat_active');
  }
  public set natActive(value: boolean | cdktf.IResolvable) {
    this._natActive = value;
  }
  public resetNatActive() {
    this._natActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natActiveInput() {
    return this._natActive;
  }

  // persistence - computed: false, optional: false, required: true
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // persistence_profile_id - computed: false, optional: true, required: false
  private _persistenceProfileId?: string; 
  public get persistenceProfileId() {
    return this.getStringAttribute('persistence_profile_id');
  }
  public set persistenceProfileId(value: string) {
    this._persistenceProfileId = value;
  }
  public resetPersistenceProfileId() {
    this._persistenceProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfileIdInput() {
    return this._persistenceProfileId;
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

  // public_ip_id - computed: false, optional: true, required: false
  private _publicIpId?: string; 
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
  }
  public set publicIpId(value: string) {
    this._publicIpId = value;
  }
  public resetPublicIpId() {
    this._publicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpIdInput() {
    return this._publicIpId;
  }

  // server_certificate_id - computed: false, optional: true, required: false
  private _serverCertificateId?: string; 
  public get serverCertificateId() {
    return this.getStringAttribute('server_certificate_id');
  }
  public set serverCertificateId(value: string) {
    this._serverCertificateId = value;
  }
  public resetServerCertificateId() {
    this._serverCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateIdInput() {
    return this._serverCertificateId;
  }

  // server_ssl_security_level - computed: false, optional: true, required: false
  private _serverSslSecurityLevel?: string; 
  public get serverSslSecurityLevel() {
    return this.getStringAttribute('server_ssl_security_level');
  }
  public set serverSslSecurityLevel(value: string) {
    this._serverSslSecurityLevel = value;
  }
  public resetServerSslSecurityLevel() {
    this._serverSslSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslSecurityLevelInput() {
    return this._serverSslSecurityLevel;
  }

  // service_ipv4 - computed: false, optional: true, required: false
  private _serviceIpv4?: string; 
  public get serviceIpv4() {
    return this.getStringAttribute('service_ipv4');
  }
  public set serviceIpv4(value: string) {
    this._serviceIpv4 = value;
  }
  public resetServiceIpv4() {
    this._serviceIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4Input() {
    return this._serviceIpv4;
  }

  // service_ports - computed: false, optional: false, required: true
  private _servicePorts?: string; 
  public get servicePorts() {
    return this.getStringAttribute('service_ports');
  }
  public set servicePorts(value: string) {
    this._servicePorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortsInput() {
    return this._servicePorts;
  }

  // tags - computed: false, optional: true, required: false
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

  // use_access_log - computed: false, optional: true, required: false
  private _useAccessLog?: boolean | cdktf.IResolvable; 
  public get useAccessLog() {
    return this.getBooleanAttribute('use_access_log');
  }
  public set useAccessLog(value: boolean | cdktf.IResolvable) {
    this._useAccessLog = value;
  }
  public resetUseAccessLog() {
    this._useAccessLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAccessLogInput() {
    return this._useAccessLog;
  }

  // lb_rules - computed: false, optional: true, required: false
  private _lbRules = new LbServiceLbRulesList(this, "lb_rules", false);
  public get lbRules() {
    return this._lbRules;
  }
  public putLbRules(value: LbServiceLbRules[] | cdktf.IResolvable) {
    this._lbRules.internalValue = value;
  }
  public resetLbRules() {
    this._lbRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbRulesInput() {
    return this._lbRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_profile_id: cdktf.stringToTerraform(this._appProfileId),
      client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
      client_ssl_security_level: cdktf.stringToTerraform(this._clientSslSecurityLevel),
      forwarding_ports: cdktf.stringToTerraform(this._forwardingPorts),
      id: cdktf.stringToTerraform(this._id),
      layer_type: cdktf.stringToTerraform(this._layerType),
      lb_id: cdktf.stringToTerraform(this._lbId),
      lb_service_ip_id: cdktf.stringToTerraform(this._lbServiceIpId),
      name: cdktf.stringToTerraform(this._name),
      nat_active: cdktf.booleanToTerraform(this._natActive),
      persistence: cdktf.stringToTerraform(this._persistence),
      persistence_profile_id: cdktf.stringToTerraform(this._persistenceProfileId),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_ip_id: cdktf.stringToTerraform(this._publicIpId),
      server_certificate_id: cdktf.stringToTerraform(this._serverCertificateId),
      server_ssl_security_level: cdktf.stringToTerraform(this._serverSslSecurityLevel),
      service_ipv4: cdktf.stringToTerraform(this._serviceIpv4),
      service_ports: cdktf.stringToTerraform(this._servicePorts),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_access_log: cdktf.booleanToTerraform(this._useAccessLog),
      lb_rules: cdktf.listMapper(lbServiceLbRulesToTerraform, true)(this._lbRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_profile_id: {
        value: cdktf.stringToHclTerraform(this._appProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_id: {
        value: cdktf.stringToHclTerraform(this._clientCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ssl_security_level: {
        value: cdktf.stringToHclTerraform(this._clientSslSecurityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_ports: {
        value: cdktf.stringToHclTerraform(this._forwardingPorts),
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
      layer_type: {
        value: cdktf.stringToHclTerraform(this._layerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_id: {
        value: cdktf.stringToHclTerraform(this._lbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_service_ip_id: {
        value: cdktf.stringToHclTerraform(this._lbServiceIpId),
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
      nat_active: {
        value: cdktf.booleanToHclTerraform(this._natActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persistence: {
        value: cdktf.stringToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_profile_id: {
        value: cdktf.stringToHclTerraform(this._persistenceProfileId),
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
      public_ip_id: {
        value: cdktf.stringToHclTerraform(this._publicIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_id: {
        value: cdktf.stringToHclTerraform(this._serverCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ssl_security_level: {
        value: cdktf.stringToHclTerraform(this._serverSslSecurityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ipv4: {
        value: cdktf.stringToHclTerraform(this._serviceIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ports: {
        value: cdktf.stringToHclTerraform(this._servicePorts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_access_log: {
        value: cdktf.booleanToHclTerraform(this._useAccessLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_rules: {
        value: cdktf.listMapperHcl(lbServiceLbRulesToHclTerraform, true)(this._lbRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbServiceLbRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
