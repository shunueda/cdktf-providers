// https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#flag DnsRecord#flag}
  */
  readonly flag?: number;
  /**
  * The hostname for the DNS record. For example, `www.example.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#hostname DnsRecord#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#priority DnsRecord#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#tag DnsRecord#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#ttl DnsRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * One of A, AAAA, ALIAS, CAA, CNAME, MX, NS, SPF, or TXT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#type DnsRecord#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#value DnsRecord#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#zone_id DnsRecord#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record netlify_dns_record}
*/
export class DnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecord to import
  * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/dns_record netlify_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flag = config.flag;
    this._hostname = config.hostname;
    this._priority = config.priority;
    this._tag = config.tag;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flag - computed: true, optional: true, required: false
  private _flag?: number; 
  public get flag() {
    return this.getNumberAttribute('flag');
  }
  public set flag(value: number) {
    this._flag = value;
  }
  public resetFlag() {
    this._flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flag: cdktf.numberToTerraform(this._flag),
      hostname: cdktf.stringToTerraform(this._hostname),
      priority: cdktf.numberToTerraform(this._priority),
      tag: cdktf.stringToTerraform(this._tag),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flag: {
        value: cdktf.numberToHclTerraform(this._flag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
