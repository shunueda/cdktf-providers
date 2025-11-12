// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name for the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#domain DnsZone#domain}
  */
  readonly domain: string;
  /**
  * Indicates whether DNS logs are anonymized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#log_anonymized DnsZone#log_anonymized}
  */
  readonly logAnonymized?: boolean | cdktf.IResolvable;
  /**
  * Options: `Drop`, `OneDigit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#log_anonymized_style DnsZone#log_anonymized_style}
  */
  readonly logAnonymizedStyle?: string;
  /**
  * Indicates whether permanent logging for DNS queries is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#log_enabled DnsZone#log_enabled}
  */
  readonly logEnabled?: boolean | cdktf.IResolvable;
  /**
  * The primary nameserver for the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#nameserver1 DnsZone#nameserver1}
  */
  readonly nameserver1?: string;
  /**
  * The secondary nameserver for the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#nameserver2 DnsZone#nameserver2}
  */
  readonly nameserver2?: string;
  /**
  * Indicates whether custom nameservers are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#nameserver_custom DnsZone#nameserver_custom}
  */
  readonly nameserverCustom?: boolean | cdktf.IResolvable;
  /**
  * The email address used in the Start of Authority (SOA) record for the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#soa_email DnsZone#soa_email}
  */
  readonly soaEmail?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone bunnynet_dns_zone}
*/
export class DnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZone to import
  * @param importFromId The id of the existing DnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.1/docs/resources/dns_zone bunnynet_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._logAnonymized = config.logAnonymized;
    this._logAnonymizedStyle = config.logAnonymizedStyle;
    this._logEnabled = config.logEnabled;
    this._nameserver1 = config.nameserver1;
    this._nameserver2 = config.nameserver2;
    this._nameserverCustom = config.nameserverCustom;
    this._soaEmail = config.soaEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // log_anonymized - computed: true, optional: true, required: false
  private _logAnonymized?: boolean | cdktf.IResolvable; 
  public get logAnonymized() {
    return this.getBooleanAttribute('log_anonymized');
  }
  public set logAnonymized(value: boolean | cdktf.IResolvable) {
    this._logAnonymized = value;
  }
  public resetLogAnonymized() {
    this._logAnonymized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnonymizedInput() {
    return this._logAnonymized;
  }

  // log_anonymized_style - computed: true, optional: true, required: false
  private _logAnonymizedStyle?: string; 
  public get logAnonymizedStyle() {
    return this.getStringAttribute('log_anonymized_style');
  }
  public set logAnonymizedStyle(value: string) {
    this._logAnonymizedStyle = value;
  }
  public resetLogAnonymizedStyle() {
    this._logAnonymizedStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnonymizedStyleInput() {
    return this._logAnonymizedStyle;
  }

  // log_enabled - computed: true, optional: true, required: false
  private _logEnabled?: boolean | cdktf.IResolvable; 
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }
  public set logEnabled(value: boolean | cdktf.IResolvable) {
    this._logEnabled = value;
  }
  public resetLogEnabled() {
    this._logEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnabledInput() {
    return this._logEnabled;
  }

  // nameserver1 - computed: true, optional: true, required: false
  private _nameserver1?: string; 
  public get nameserver1() {
    return this.getStringAttribute('nameserver1');
  }
  public set nameserver1(value: string) {
    this._nameserver1 = value;
  }
  public resetNameserver1() {
    this._nameserver1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserver1Input() {
    return this._nameserver1;
  }

  // nameserver2 - computed: true, optional: true, required: false
  private _nameserver2?: string; 
  public get nameserver2() {
    return this.getStringAttribute('nameserver2');
  }
  public set nameserver2(value: string) {
    this._nameserver2 = value;
  }
  public resetNameserver2() {
    this._nameserver2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserver2Input() {
    return this._nameserver2;
  }

  // nameserver_custom - computed: true, optional: true, required: false
  private _nameserverCustom?: boolean | cdktf.IResolvable; 
  public get nameserverCustom() {
    return this.getBooleanAttribute('nameserver_custom');
  }
  public set nameserverCustom(value: boolean | cdktf.IResolvable) {
    this._nameserverCustom = value;
  }
  public resetNameserverCustom() {
    this._nameserverCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverCustomInput() {
    return this._nameserverCustom;
  }

  // soa_email - computed: true, optional: true, required: false
  private _soaEmail?: string; 
  public get soaEmail() {
    return this.getStringAttribute('soa_email');
  }
  public set soaEmail(value: string) {
    this._soaEmail = value;
  }
  public resetSoaEmail() {
    this._soaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaEmailInput() {
    return this._soaEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      log_anonymized: cdktf.booleanToTerraform(this._logAnonymized),
      log_anonymized_style: cdktf.stringToTerraform(this._logAnonymizedStyle),
      log_enabled: cdktf.booleanToTerraform(this._logEnabled),
      nameserver1: cdktf.stringToTerraform(this._nameserver1),
      nameserver2: cdktf.stringToTerraform(this._nameserver2),
      nameserver_custom: cdktf.booleanToTerraform(this._nameserverCustom),
      soa_email: cdktf.stringToTerraform(this._soaEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_anonymized: {
        value: cdktf.booleanToHclTerraform(this._logAnonymized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_anonymized_style: {
        value: cdktf.stringToHclTerraform(this._logAnonymizedStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_enabled: {
        value: cdktf.booleanToHclTerraform(this._logEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nameserver1: {
        value: cdktf.stringToHclTerraform(this._nameserver1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver2: {
        value: cdktf.stringToHclTerraform(this._nameserver2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver_custom: {
        value: cdktf.booleanToHclTerraform(this._nameserverCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soa_email: {
        value: cdktf.stringToHclTerraform(this._soaEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
