// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbZoneServiceDnsARecordDnsARecordIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Specify admin priority of Service-IP (Specify the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#admin_ip GslbZoneServiceDnsARecordDnsARecordIpv6#admin_ip}
  */
  readonly adminIp?: number;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#as_backup GslbZoneServiceDnsARecordDnsARecordIpv6#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Return this Service-IP when enable ip-replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#as_replace GslbZoneServiceDnsARecordDnsARecordIpv6#as_replace}
  */
  readonly asReplace?: number;
  /**
  * Disable this Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#disable GslbZoneServiceDnsARecordDnsARecordIpv6#disable}
  */
  readonly disable?: number;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#dns_a_record_ipv6 GslbZoneServiceDnsARecordDnsARecordIpv6#dns_a_record_ipv6}
  */
  readonly dnsARecordIpv6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#id GslbZoneServiceDnsARecordDnsARecordIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Don't use this Service-IP as DNS response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#no_resp GslbZoneServiceDnsARecordDnsARecordIpv6#no_resp}
  */
  readonly noResp?: number;
  /**
  * ServiceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#service_name GslbZoneServiceDnsARecordDnsARecordIpv6#service_name}
  */
  readonly serviceName: string;
  /**
  * ServicePort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#service_port GslbZoneServiceDnsARecordDnsARecordIpv6#service_port}
  */
  readonly servicePort: string;
  /**
  * Return this Service-IP in DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#static GslbZoneServiceDnsARecordDnsARecordIpv6#static}
  */
  readonly static?: number;
  /**
  * Specify TTL for Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#ttl GslbZoneServiceDnsARecordDnsARecordIpv6#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#uuid GslbZoneServiceDnsARecordDnsARecordIpv6#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify weight for Service-IP (Weight value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#weight GslbZoneServiceDnsARecordDnsARecordIpv6#weight}
  */
  readonly weight?: number;
  /**
  * Zone_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#zone_name GslbZoneServiceDnsARecordDnsARecordIpv6#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6 thunder_gslb_zone_service_dns_a_record_dns_a_record_ipv6}
*/
export class GslbZoneServiceDnsARecordDnsARecordIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_dns_a_record_dns_a_record_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbZoneServiceDnsARecordDnsARecordIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbZoneServiceDnsARecordDnsARecordIpv6 to import
  * @param importFromId The id of the existing GslbZoneServiceDnsARecordDnsARecordIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbZoneServiceDnsARecordDnsARecordIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_dns_a_record_dns_a_record_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_a_record_dns_a_record_ipv6 thunder_gslb_zone_service_dns_a_record_dns_a_record_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbZoneServiceDnsARecordDnsARecordIpv6Config
  */
  public constructor(scope: Construct, id: string, config: GslbZoneServiceDnsARecordDnsARecordIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_dns_a_record_dns_a_record_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminIp = config.adminIp;
    this._asBackup = config.asBackup;
    this._asReplace = config.asReplace;
    this._disable = config.disable;
    this._dnsARecordIpv6 = config.dnsARecordIpv6;
    this._id = config.id;
    this._noResp = config.noResp;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._static = config.static;
    this._ttl = config.ttl;
    this._uuid = config.uuid;
    this._weight = config.weight;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_ip - computed: false, optional: true, required: false
  private _adminIp?: number; 
  public get adminIp() {
    return this.getNumberAttribute('admin_ip');
  }
  public set adminIp(value: number) {
    this._adminIp = value;
  }
  public resetAdminIp() {
    this._adminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpInput() {
    return this._adminIp;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // as_replace - computed: false, optional: true, required: false
  private _asReplace?: number; 
  public get asReplace() {
    return this.getNumberAttribute('as_replace');
  }
  public set asReplace(value: number) {
    this._asReplace = value;
  }
  public resetAsReplace() {
    this._asReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplaceInput() {
    return this._asReplace;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_a_record_ipv6 - computed: false, optional: false, required: true
  private _dnsARecordIpv6?: string; 
  public get dnsARecordIpv6() {
    return this.getStringAttribute('dns_a_record_ipv6');
  }
  public set dnsARecordIpv6(value: string) {
    this._dnsARecordIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpv6Input() {
    return this._dnsARecordIpv6;
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

  // no_resp - computed: false, optional: true, required: false
  private _noResp?: number; 
  public get noResp() {
    return this.getNumberAttribute('no_resp');
  }
  public set noResp(value: number) {
    this._noResp = value;
  }
  public resetNoResp() {
    this._noResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRespInput() {
    return this._noResp;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // ttl - computed: false, optional: true, required: false
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_ip: cdktf.numberToTerraform(this._adminIp),
      as_backup: cdktf.numberToTerraform(this._asBackup),
      as_replace: cdktf.numberToTerraform(this._asReplace),
      disable: cdktf.numberToTerraform(this._disable),
      dns_a_record_ipv6: cdktf.stringToTerraform(this._dnsARecordIpv6),
      id: cdktf.stringToTerraform(this._id),
      no_resp: cdktf.numberToTerraform(this._noResp),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.stringToTerraform(this._servicePort),
      static: cdktf.numberToTerraform(this._static),
      ttl: cdktf.numberToTerraform(this._ttl),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_ip: {
        value: cdktf.numberToHclTerraform(this._adminIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_backup: {
        value: cdktf.numberToHclTerraform(this._asBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_replace: {
        value: cdktf.numberToHclTerraform(this._asReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_a_record_ipv6: {
        value: cdktf.stringToHclTerraform(this._dnsARecordIpv6),
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
      no_resp: {
        value: cdktf.numberToHclTerraform(this._noResp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.stringToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static: {
        value: cdktf.numberToHclTerraform(this._static),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
